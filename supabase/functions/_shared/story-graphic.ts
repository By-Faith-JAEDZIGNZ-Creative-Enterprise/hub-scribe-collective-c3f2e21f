import { Image, TextLayout } from 'https://deno.land/x/imagescript@1.2.15/mod.ts';

// Fixed editorial palette mirrors the site's footer and brand tokens.
const INK = 0x1a1a1aff, PAPER = 0xfcfbf8ff, ELECTRIC = 0x0b68f4ff;
export type GraphicStory = { title: string; image: string | null; category: string; photoCredit?: string };
export function requireStoryPhoto(story: GraphicStory) {
  if (!story.image) throw new Error('A story photo is required for a branded post.');
  return story.image;
}
export async function fetchGraphicBytes(url: string): Promise<Uint8Array> {
  const response = await fetch(url, { signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error(`Graphic asset unavailable (${response.status}).`);
  return new Uint8Array(await response.arrayBuffer());
}
export async function renderStoryGraphic(story: GraphicStory, assets: { logo: Uint8Array; heading: Uint8Array; body: Uint8Array }): Promise<Uint8Array> {
  const photo = await Image.decode(await fetchGraphicBytes(requireStoryPhoto(story)));
  const logo = await Image.decode(assets.logo);
  const canvas = new Image(1200, 900).fill(PAPER);
  const scale = Math.min(1200 / photo.width, 520 / photo.height);
  photo.resize(Math.max(1, Math.round(photo.width * scale)), Math.max(1, Math.round(photo.height * scale)));
  canvas.composite(new Image(1200, 520).fill(INK), 0, 0);
  canvas.composite(photo, Math.round((1200 - photo.width) / 2), Math.round((520 - photo.height) / 2));
  canvas.composite(new Image(1200, 6).fill(ELECTRIC), 0, 520);
  logo.crop(Math.round(logo.width * .36), Math.round(logo.height * .215), Math.round(logo.width * .305), Math.round(logo.height * .55));
  logo.resize(90, 90);
  canvas.composite(logo, 46, 550);
  canvas.composite(Image.renderText(assets.heading, 27, 'HATTIESBURG HUB', INK), 156, 558);
  canvas.composite(Image.renderText(assets.body, 18, `${story.category.toUpperCase()}  /  YOUR CITY. YOUR STORIES.`, INK), 156, 600);
  let size = 46;
  let title = Image.renderText(assets.heading, size, story.title, INK, new TextLayout({ maxWidth: 1108 }));
  while (title.height > 150 && size > 16) {
    size -= 2;
    title = Image.renderText(assets.heading, size, story.title, INK, new TextLayout({ maxWidth: 1108 }));
  }
  if (title.height > 150) throw new Error('Headline is too long for the graphic.');
  canvas.composite(title, 46, 666);
  canvas.composite(Image.renderText(assets.body, 21, 'www.hattiesburghub.com', INK), 46, 850);
  if (story.photoCredit) {
    const credit = Image.renderText(assets.body, 15, `Photo: ${story.photoCredit}`, INK, new TextLayout({ maxWidth: 650 }));
    if (credit.height > 32) throw new Error('Photo credit is too long for the graphic.');
    canvas.composite(credit, 1154 - credit.width, 854);
  }
  return await canvas.encode();
}