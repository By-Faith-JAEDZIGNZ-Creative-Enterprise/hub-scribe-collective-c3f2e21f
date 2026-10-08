import { fetchGraphicBytes, renderStoryGraphic } from './story-graphic.ts';
import type { DigestStory } from './newsletter-email.ts';
import type { SupabaseClient } from 'npm:@supabase/supabase-js@2';

const ASSET_ORIGIN = 'https://hub-scribe-collective.lovable.app';
const LOGO = '/__l5e/assets-v1/80fd2163-d5a2-4ab0-9add-40ee038f20e0/logo-submark.png';
const HEADING = '/__l5e/assets-v1/1cf3b311-a59b-4593-acd6-088b8a207732/heading.ttf';
const BODY = '/__l5e/assets-v1/d25935d5-aade-44e9-9424-1ce134e1b910/body.ttf';
export function storyCaption(story: DigestStory) {
  const clean = story.excerpt.replace(/[—–]/g, ', ');
  const excerpt = clean.length > 250 ? clean.slice(0, 251).replace(/\s+\S*$/, '') + '…' : clean;
  return `📰 ${story.title.replace(/[—–]/g, ', ')}\n\n${excerpt}\n\nRead the full story: ${story.link}\n\n#HattiesburgHub #Hattiesburg #LocalNews`;
}
export async function prepareSocialStory(client: SupabaseClient, story: DigestStory) {
  if (!story.link.startsWith('https://www.hattiesburghub.com/story/')) throw new Error('Only on-site stories can be posted.');
  const [logo, heading, body] = await Promise.all([LOGO, HEADING, BODY].map(path => fetchGraphicBytes(ASSET_ORIGIN + path)));
  const bytes = await renderStoryGraphic(story, { logo, heading, body });
  const slug = new URL(story.link).pathname.split('/').pop();
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) throw new Error('Invalid story slug.');
  const path = `${slug}.png`;
  const { error } = await client.storage.from('social-graphics').upload(path, bytes, { contentType: 'image/png', upsert: true });
  if (error) throw error;
  const { data, error: signError } = await client.storage.from('social-graphics').createSignedUrl(path, 31536000);
  if (signError || !data) throw signError || new Error('Could not create graphic link.');
  return { title: story.title, excerpt: story.excerpt, link: story.link, image: data.signedUrl, graphic_url: data.signedUrl, original_image: story.image, caption: storyCaption(story), category: story.category, published_at: story.pubDate, photo_credit: story.photoCredit || '', post_type: 'photo' };
}
export async function postSocialStories(client: SupabaseClient, stories: DigestStory[], prepareOnly = false) {
  const prepared = [];
  const failed: { link: string; reason: string }[] = [];
  for (const story of stories) {
    let key: string;
    try {
      key = `social_posted:${new URL(story.link).pathname}`;
    } catch {
      failed.push({ link: story.link, reason: 'Invalid story link.' });
      continue;
    }
    if (!prepareOnly) {
      const { data: posted } = await client.from('newsletter_config').select('value').eq('key', key).maybeSingle();
      if (posted) continue;
    }
    try {
      prepared.push(await prepareSocialStory(client, story));
    } catch (error) {
      // External links, missing photos, and overlong headlines skip this story
      // only; the rest of the batch still posts.
      failed.push({ link: story.link, reason: error instanceof Error ? error.message : 'Graphic failed.' });
    }
  }
  if (prepareOnly) return { prepared, failed };
  if (prepared.length === 0) return { accepted: false, skipped: 'already_submitted', prepared };
  const { data } = await client.from('newsletter_config').select('value').eq('key', 'zapier_social_webhook').maybeSingle();
  if (!data?.value) throw new Error('Facebook posting webhook is not configured.');
  const response = await fetch(data.value, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(15000),
    body: JSON.stringify({ timestamp: new Date().toISOString(), trigger: 'story_alert', post_type: 'photo', caption: prepared[0]?.caption, image: prepared[0]?.image, graphic_url: prepared[0]?.graphic_url, link: prepared[0]?.link, stories: prepared }),
  });
  if (!response.ok) throw new Error(`Facebook workflow rejected the post (${response.status}).`);
  for (const story of prepared) {
    const { error } = await client.from('newsletter_config').upsert({ key: `social_posted:${new URL(story.link).pathname}`, value: new Date().toISOString() }, { onConflict: 'key' });
    if (error) throw error;
  }
  return { accepted: true, status: response.status, prepared };
}