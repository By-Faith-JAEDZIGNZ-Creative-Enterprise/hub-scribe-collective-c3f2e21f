import { useEffect } from "react";

const SITE_URL = "https://hattiesburghub.com";
const SITE_NAME = "Hattiesburg Hub";
const DEFAULT_DESCRIPTION = "Hattiesburg's independent source for local news, culture, business, and community stories that matter.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  publishedTime,
  author,
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Local News & Community Stories`;
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set/create meta tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Article-specific
    if (type === "article" && publishedTime) {
      setMeta("property", "article:published_time", publishedTime);
    }
    if (type === "article" && author) {
      setMeta("property", "article:author", author);
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // JSON-LD
    const existingLd = document.querySelector('script[data-seo-jsonld]');
    if (existingLd) existingLd.remove();

    const jsonLd = type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: title,
          description,
          image,
          url: canonicalUrl,
          datePublished: publishedTime,
          author: { "@type": "Person", name: author },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
          },
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description,
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/category/{search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-seo-jsonld]');
      if (el) el.remove();
    };
  }, [fullTitle, description, canonicalUrl, image, type, publishedTime, author]);

  return null;
};

export default SEOHead;
