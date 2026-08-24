// Shared helpers for Hattiesburg Hub newsletter emails (digest, announcement, welcome).

export const SITE_URL = "https://www.hattiesburghub.com";
export const SITE_URL_FALLBACK = "https://hub-scribe-collective.lovable.app";
export const FACEBOOK_URL = "https://www.facebook.com/hattiesburghub";
export const FROM_ADDRESS = "Hattiesburg Hub <digest@hattiesburghub.com>";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

export interface DigestStory {
  title: string;
  link: string;
  excerpt: string;
  category: string;
  image: string | null;
  pubDate: string;
  guid: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function extractCdata(block: string, tag: string): string {
  const m = block.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>|<${tag}[^>]*>([\\s\\S]*?)</${tag}>`)
  );
  return (m?.[1] ?? m?.[2] ?? "").trim();
}

function parseRssItems(xml: string, limit: number): DigestStory[] {
  const items: DigestStory[] = [];
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  for (const block of itemBlocks.slice(0, limit)) {
    const enclosure = block.match(/<enclosure[^>]*url="([^"]+)"/);
    items.push({
      title: extractCdata(block, "title"),
      link: extractCdata(block, "link"),
      excerpt: extractCdata(block, "description"),
      category: extractCdata(block, "category"),
      image: enclosure?.[1] ?? null,
      pubDate: extractCdata(block, "pubDate"),
      guid: extractCdata(block, "guid"),
    });
  }
  return items.filter((s) => s.title && s.link);
}

export async function fetchLatestStories(limit = 6): Promise<DigestStory[]> {
  for (const base of [SITE_URL, SITE_URL_FALLBACK]) {
    try {
      const res = await fetch(`${base}/rss.xml`, {
        headers: { "User-Agent": "HattiesburgHub-Newsletter/1.0" },
      });
      if (!res.ok) continue;
      const xml = await res.text();
      const stories = parseRssItems(xml, limit);
      if (stories.length > 0) return stories;
    } catch (err) {
      console.error(`RSS fetch failed for ${base}:`, err);
    }
  }
  return [];
}

export async function sendViaResend(params: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; status: number; error?: string }> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    throw new Error("LOVABLE_API_KEY and RESEND_API_KEY must be configured");
  }

  const response = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [params.to],
      subject: params.subject,
      html: params.html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend send failed [${response.status}] to ${params.to}: ${body}`);
    return { ok: false, status: response.status, error: body };
  }
  return { ok: true, status: response.status };
}

// ---------- Brand shell ----------

const BRAND_BLUE = "#1a6ef0";
const BRAND_NAVY = "#0d1526";
const FONT_DISPLAY = "'Space Grotesk', 'Segoe UI', Arial, sans-serif";
const FONT_BODY = "'Inter', 'Segoe UI', Arial, sans-serif";

function shell(content: string, unsubscribeUrl: string | null): string {
  const unsubBlock = unsubscribeUrl
    ? `<p style="margin:16px 0 0;font-size:11px;color:#9aa4b5;font-family:${FONT_BODY};">
        You're receiving this because you subscribed to the Hattiesburg Hub newsletter.
        <a href="${unsubscribeUrl}" style="color:#9aa4b5;text-decoration:underline;">Unsubscribe</a> anytime.
      </p>`
    : "";
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body style="margin:0;padding:0;background-color:#f4f6fa;">
  <div style="max-width:600px;margin:0 auto;padding:24px 12px;">
    <!-- Header -->
    <div style="background-color:${BRAND_NAVY};border-radius:12px 12px 0 0;padding:28px 32px;text-align:center;">
      <p style="margin:0;font-family:${FONT_DISPLAY};font-size:24px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
        Hattiesburg <span style="color:${BRAND_BLUE};">Hub</span>
      </p>
      <p style="margin:6px 0 0;font-family:${FONT_BODY};font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#8fa3c8;">
        Independent Local Journalism
      </p>
    </div>
    <!-- Body -->
    <div style="background-color:#ffffff;padding:32px;border-left:1px solid #e4e9f2;border-right:1px solid #e4e9f2;">
      ${content}
    </div>
    <!-- Footer -->
    <div style="background-color:${BRAND_NAVY};border-radius:0 0 12px 12px;padding:24px 32px;text-align:center;">
      <p style="margin:0 0 8px;font-family:${FONT_BODY};font-size:12px;color:#c7d2e4;">
        <a href="${SITE_URL}" style="color:${BRAND_BLUE};text-decoration:none;font-weight:600;">hattiesburghub.com</a>
        &nbsp;&middot;&nbsp;
        <a href="${FACEBOOK_URL}" style="color:${BRAND_BLUE};text-decoration:none;font-weight:600;">Follow us on Facebook</a>
      </p>
      <p style="margin:0;font-family:${FONT_BODY};font-size:11px;color:#8fa3c8;">&copy; 2026 Hattiesburg Hub. Made with care in the Hub City.</p>
      ${unsubBlock}
    </div>
  </div>
</body>
</html>`;
}

function storyCard(story: DigestStory): string {
  const img = story.image
    ? `<a href="${escapeHtml(story.link)}"><img src="${escapeHtml(story.image)}" alt="${escapeHtml(story.title)}" width="536" style="width:100%;max-width:536px;border-radius:8px;display:block;margin-bottom:12px;" /></a>`
    : "";
  return `
  <div style="margin-bottom:28px;padding-bottom:24px;border-bottom:1px solid #edf1f7;">
    ${img}
    <p style="margin:0 0 6px;font-family:${FONT_BODY};font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${BRAND_BLUE};">${escapeHtml(story.category)}</p>
    <a href="${escapeHtml(story.link)}" style="text-decoration:none;"><p style="margin:0 0 8px;font-family:${FONT_DISPLAY};font-size:18px;font-weight:700;line-height:1.3;color:#111827;">${escapeHtml(story.title)}</p></a>
    <p style="margin:0 0 10px;font-family:${FONT_BODY};font-size:13px;line-height:1.6;color:#4b5563;">${escapeHtml(story.excerpt)}</p>
    <a href="${escapeHtml(story.link)}" style="font-family:${FONT_BODY};font-size:13px;font-weight:600;color:${BRAND_BLUE};text-decoration:none;">Read the story &rarr;</a>
  </div>`;
}

function facebookBlock(): string {
  return `
  <div style="margin-top:8px;background-color:#f0f5ff;border:1px solid #dbe7ff;border-radius:10px;padding:20px;text-align:center;">
    <p style="margin:0 0 6px;font-family:${FONT_DISPLAY};font-size:15px;font-weight:700;color:#111827;">Join the conversation</p>
    <p style="margin:0 0 14px;font-family:${FONT_BODY};font-size:12px;color:#4b5563;">Follow Hattiesburg Hub on Facebook for breaking news, behind-the-scenes, and community discussion.</p>
    <a href="${FACEBOOK_URL}" style="display:inline-block;background-color:${BRAND_BLUE};color:#ffffff;font-family:${FONT_DISPLAY};font-size:13px;font-weight:600;padding:10px 22px;border-radius:8px;text-decoration:none;">Follow @hattiesburghub</a>
  </div>`;
}

// ---------- Email templates ----------

export function renderDigestEmail(params: {
  stories: DigestStory[];
  firstName: string | null;
  unsubscribeUrl: string;
}): string {
  const greeting = params.firstName ? `Hi ${escapeHtml(params.firstName)},` : "Hi there,";
  const content = `
    <p style="margin:0 0 4px;font-family:${FONT_BODY};font-size:14px;color:#111827;">${greeting}</p>
    <h1 style="margin:0 0 16px;font-family:${FONT_DISPLAY};font-size:26px;font-weight:700;color:#111827;line-height:1.2;">
      This week in the <span style="color:${BRAND_BLUE};">Hub City</span>
    </h1>
    <p style="margin:0 0 24px;font-family:${FONT_BODY};font-size:13px;line-height:1.6;color:#4b5563;">
      Here's your weekly roundup of the stories shaping Hattiesburg — community news, culture, sports, and Originals from our newsroom.
    </p>
    ${params.stories.map(storyCard).join("")}
    ${facebookBlock()}`;
  return shell(content, params.unsubscribeUrl);
}

export function renderAnnouncementEmail(params: {
  stories: DigestStory[];
  firstName: string | null;
  unsubscribeUrl: string;
}): string {
  const greeting = params.firstName ? `Hi ${escapeHtml(params.firstName)},` : "Hi there,";
  const content = `
    <p style="margin:0 0 4px;font-family:${FONT_BODY};font-size:14px;color:#111827;">${greeting}</p>
    <h1 style="margin:0 0 16px;font-family:${FONT_DISPLAY};font-size:26px;font-weight:700;color:#111827;line-height:1.2;">
      Introducing the <span style="color:${BRAND_BLUE};">Hub City Digest</span>
    </h1>
    <p style="margin:0 0 12px;font-family:${FONT_BODY};font-size:13px;line-height:1.6;color:#4b5563;">
      Big news from our newsroom: the Hattiesburg Hub newsletter is officially here. Every week, we'll bring the best of the Hub City straight to your inbox — original reporting, community stories, sports, and culture.
    </p>
    <p style="margin:0 0 24px;font-family:${FONT_BODY};font-size:13px;line-height:1.6;color:#4b5563;">
      We've been busy. Here are some of the latest stories on the Hub right now:
    </p>
    ${params.stories.map(storyCard).join("")}
    ${facebookBlock()}`;
  return shell(content, params.unsubscribeUrl);
}

export function renderStoryAlertEmail(params: {
  stories: DigestStory[];
  firstName: string | null;
  unsubscribeUrl: string;
}): string {
  const greeting = params.firstName ? `Hi ${escapeHtml(params.firstName)},` : "Hi there,";
  const count = params.stories.length;
  const heading =
    count === 1
      ? `Just published on the <span style="color:${BRAND_BLUE};">Hub</span>`
      : `${count} new stories on the <span style="color:${BRAND_BLUE};">Hub</span>`;
  const intro =
    count === 1
      ? "Fresh off the press — a brand-new story just went live on Hattiesburg Hub. Here's your first look:"
      : "Fresh off the press — new stories just went live on Hattiesburg Hub. Here's your first look:";
  const content = `
    <p style="margin:0 0 4px;font-family:${FONT_BODY};font-size:14px;color:#111827;">${greeting}</p>
    <h1 style="margin:0 0 16px;font-family:${FONT_DISPLAY};font-size:26px;font-weight:700;color:#111827;line-height:1.2;">
      ${heading}
    </h1>
    <p style="margin:0 0 24px;font-family:${FONT_BODY};font-size:13px;line-height:1.6;color:#4b5563;">
      ${intro}
    </p>
    ${params.stories.map(storyCard).join("")}
    ${facebookBlock()}`;
  return shell(content, params.unsubscribeUrl);
}


