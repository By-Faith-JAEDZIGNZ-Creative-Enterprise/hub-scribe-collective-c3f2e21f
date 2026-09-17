// Build-time generation of per-story HTML files carrying real Open Graph tags.
// Social crawlers (Facebook, iMessage, X, LinkedIn) do not run JavaScript, so the
// tags set at runtime by SEOHead are invisible to them. These static files give
// each story page its own headline, description and photo in link previews.
import { storyImageUrl } from "./storyImageUrl";

export interface SocialStory {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  imageAlts?: string[];
  photoCaption?: string;
  slug: string;
  content?: string;
  external?: boolean;
  externalUrl?: string;
}

const SITE_URL = "https://www.hattiesburghub.com";
const SITE_NAME = "Hattiesburg Hub";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function truncate(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max - 1).replace(/\s+\S*$/, "") + "...";
}

function absoluteImage(image?: string): string {
  return image ? storyImageUrl(image) : DEFAULT_IMAGE;
}

function imageType(image: string): string {
  const cleanImage = image.split("?")[0].toLowerCase();
  if (cleanImage.endsWith(".png")) return "image/png";
  if (cleanImage.endsWith(".webp")) return "image/webp";
  return "image/jpeg";
}

/**
 * Rewrites the head of the built index.html so the crawler-visible metadata
 * matches a single story. Everything else (scripts, styles) stays untouched,
 * so the page still boots the normal app for real visitors.
 */
export function buildStoryHtml(template: string, story: SocialStory): string {
  const url = `${SITE_URL}/story/${story.slug}`;
  const title = escapeAttr(truncate(`${story.title}, ${SITE_NAME}`, 70));
  const description = escapeAttr(truncate(story.excerpt || `${story.title} from ${SITE_NAME}.`, 200));
  const image = escapeAttr(absoluteImage(story.image));
  const imageAlt = escapeAttr(story.imageAlts?.[0] || story.photoCaption || story.title);
  const imageMime = imageType(image);
  const published = new Date(story.date).toISOString();

  const head = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:secure_url" content="${image}" />
    <meta property="og:image:type" content="${imageMime}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${imageAlt}" />
    <link rel="image_src" href="${image}" />
    <meta property="article:published_time" content="${published}" />
    <meta property="article:author" content="${escapeAttr(story.author || SITE_NAME)}" />
    <meta property="article:section" content="${escapeAttr(story.category || "News")}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${imageAlt}" />
`;

  let html = template;

  // Drop the site-wide social/canonical tags so per-story ones are unambiguous.
  html = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[^>]*>/gi, "")
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, "")
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="image_src"[^>]*>/gi, "");

  return html.replace(/<\/head>/i, `${head}  </head>`);
}
