import type { Story } from "@/data/stories";

/**
 * Consistent attribution fields for story imagery.
 * Any story may supply either the structured fields (preferred) or the
 * legacy free-form `photoCredit` string.
 */
export interface PhotoAttribution {
  /** Person or outlet who made the image, e.g. "Jane Doe" */
  photographer?: string;
  /** Organization providing the image, e.g. "City of Hattiesburg" */
  photoSource?: string;
  /** Short description of what is pictured */
  photoCaption?: string;
  /** Usage/licensing note, e.g. "Used with permission" */
  photoLicense?: string;
  /** Legacy free-form credit line */
  photoCredit?: string;
}

const clean = (s?: string) => (s ? s.trim().replace(/\s+/g, " ").replace(/\.$/, "") : "");

/**
 * Builds a single, consistently formatted credit line for a story's images.
 * Format: "{Caption} Photo by {photographer}, courtesy of {source}. {license}."
 */
export function formatPhotoCredit(story: PhotoAttribution): string | null {
  const photographer = clean(story.photographer);
  const source = clean(story.photoSource);
  const caption = clean(story.photoCaption);
  const license = clean(story.photoLicense);

  const parts: string[] = [];

  if (caption) parts.push(`${caption}.`);

  if (photographer && source) {
    parts.push(`Photo by ${photographer}, courtesy of ${source}.`);
  } else if (photographer) {
    parts.push(`Photo by ${photographer}.`);
  } else if (source) {
    parts.push(`Photo courtesy of ${source}.`);
  }

  if (license) parts.push(`${license}.`);

  if (parts.length > 0) return parts.join(" ");

  const legacy = clean(story.photoCredit);
  return legacy ? `${legacy}.` : null;
}

export const getStoryCredit = (story: Story) => formatPhotoCredit(story);
