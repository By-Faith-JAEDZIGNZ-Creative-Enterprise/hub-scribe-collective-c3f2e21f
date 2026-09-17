export const SITE_URL = "https://www.hattiesburghub.com";
export const ASSET_ORIGIN = "https://hub-scribe-collective.lovable.app";

/**
 * Lovable-hosted assets are not proxied by every custom domain. Keep normal
 * public images on the primary site, but serve CDN asset pointers from the
 * published Lovable origin where they always return the actual image bytes.
 */
export function storyImageUrl(image?: string): string {
  if (!image) return `${SITE_URL}/og-image.jpg`;
  if (image.startsWith("http")) {
    try {
      const url = new URL(image);
      if (url.pathname.startsWith("/__l5e/assets-v1/")) {
        return `${ASSET_ORIGIN}${url.pathname}${url.search}`;
      }
    } catch {
      return image;
    }
    return image;
  }
  const path = image.startsWith("/") ? image : `/${image}`;
  return `${path.startsWith("/__l5e/assets-v1/") ? ASSET_ORIGIN : SITE_URL}${path}`;
}