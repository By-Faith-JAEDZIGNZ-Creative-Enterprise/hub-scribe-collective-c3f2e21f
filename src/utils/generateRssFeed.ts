// Standalone RSS generation script (no Vite/TS aliases)
// This is imported by the Vite plugin at build time

export interface RssStory {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  external?: boolean;
  externalUrl?: string;
}

export function generateRssFeed(stories: RssStory[]): string {
  const siteUrl = "https://www.hattiesburghub.com";
  const feedTitle = "Hattiesburg Hub &#8212; Local News &amp; Community Stories";
  const feedDescription =
    "Your go-to source for local news, community stories, and everything happening in Hattiesburg, MS.";

  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  function escapeXml(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  const items = sortedStories
    .slice(0, 20)
    .map((story) => {
      const link =
        story.external && story.externalUrl
          ? story.externalUrl
          : `${siteUrl}/story/${story.slug}`;
      const imageUrl = story.image.startsWith("http")
        ? story.image
        : `${siteUrl}${story.image}`;
      const pubDate = new Date(story.date).toUTCString();

      return `    <item>
      <title><![CDATA[${story.title}]]></title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(story.id)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${story.excerpt}]]></description>
      <category>${escapeXml(story.category)}</category>
      <author>${escapeXml(story.author)}</author>
      <enclosure url="${escapeXml(imageUrl)}" type="image/jpeg" />
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${feedTitle}</title>
    <link>${siteUrl}</link>
    <description>${feedDescription}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/og-image.jpg</url>
      <title>${feedTitle}</title>
      <link>${siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`;
}
