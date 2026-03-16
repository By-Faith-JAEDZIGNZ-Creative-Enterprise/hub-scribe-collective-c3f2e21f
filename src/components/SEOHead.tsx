import { useEffect } from "react";

const SITE_URL = "https://hattiesburghub.com";
const SITE_NAME = "Hattiesburg Hub";
const DEFAULT_DESCRIPTION = "Hattiesburg's independent source for local news, culture, business, sports, and community stories covering the Hub City and Pine Belt region of Mississippi.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  category?: string;
}

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  publishedTime,
  author,
  category,
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Hattiesburg Local News & Community Stories`;
  const canonicalUrl = `${SITE_URL}${path}`;

  // Ensure image is absolute URL
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

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
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", absoluteImage);
    setMeta("property", "og:image:width", "1456");
    setMeta("property", "og:image:height", "816");
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_US");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", absoluteImage);

    // Article-specific
    if (type === "article" && publishedTime) {
      setMeta("property", "article:published_time", publishedTime);
    }
    if (type === "article" && author) {
      setMeta("property", "article:author", author);
    }
    if (type === "article" && category) {
      setMeta("property", "article:section", category);
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
    const existingLd = document.querySelectorAll('script[data-seo-jsonld]');
    existingLd.forEach(el => el.remove());

    const jsonLdItems: object[] = [];

    if (type === "article") {
      jsonLdItems.push({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        headline: title,
        description,
        image: absoluteImage,
        url: canonicalUrl,
        datePublished: publishedTime,
        dateModified: publishedTime,
        author: { "@type": "Person", name: author },
        publisher: {
          "@type": "NewsMediaOrganization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
        },
        ...(category ? { articleSection: category } : {}),
        inLanguage: "en-US",
      });

      // BreadcrumbList for articles
      jsonLdItems.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          ...(category ? [{
            "@type": "ListItem",
            position: 2,
            name: category.charAt(0).toUpperCase() + category.slice(1),
            item: `${SITE_URL}/category/${category}`,
          }] : []),
          {
            "@type": "ListItem",
            position: category ? 3 : 2,
            name: title,
            item: canonicalUrl,
          },
        ],
      });
    } else if (path.startsWith("/category/")) {
      const catName = title || "Category";
      jsonLdItems.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${catName} — ${SITE_NAME}`,
        description,
        url: canonicalUrl,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
        },
        inLanguage: "en-US",
      });
      jsonLdItems.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: catName,
            item: canonicalUrl,
          },
        ],
      });
    }

    jsonLdItems.forEach((item, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", `true-${i}`);
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
    };
  }, [fullTitle, description, canonicalUrl, absoluteImage, type, publishedTime, author, category]);

  return null;
};

export default SEOHead;
