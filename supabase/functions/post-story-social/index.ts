import { createClient } from 'npm:@supabase/supabase-js@2';
import { postSocialStories } from '../_shared/story-social.ts';
import { fetchLatestStories } from '../_shared/newsletter-email.ts';

Deno.serve(async req => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  try {
    const client = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
    const { data } = await client.from('newsletter_config').select('value').eq('key', 'cron_token').maybeSingle();
    const token = req.headers.get('x-cron-token');
    if (!token || !data?.value || token !== data.value) return new Response('Unauthorized', { status: 401 });
    const body = await req.json();
    const stories = await fetchLatestStories(20);
    const story = stories.find(s => new URL(s.link).pathname === `/story/${body.slug}`);
    if (!story) return Response.json({ error: 'Story not found in published feed.' }, { status: 404 });
    if (typeof body.photo_credit === 'string') story.photoCredit = body.photo_credit;
    return Response.json(await postSocialStories(client, [story], body.prepare_only === true));
  } catch (error) {
    console.error('Story social post failed:', error instanceof Error ? error.message : 'Unknown error');
    return Response.json({ error: error instanceof Error ? error.message : 'Graphic could not be posted.' }, { status: 500 });
  }
});