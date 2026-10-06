import type { Story } from '@/data/stories';
import { byDateDesc } from '@/data/stories';
import { storyImageUrl } from './storyImageUrl';
import logo from '@/assets/logo-submark.png';

export const ROUNDUP_WIDTH = 1200;
export const ROUNDUP_HEIGHT = 630;
export function recentRoundupStories(items: Story[]) {
  return [...items].filter(s => !s.external && Boolean(s.image)).sort(byDateDesc).slice(0, 12);
}
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('A photo could not load. Select another story or try again.'));
    image.src = src;
  });
}
function cover(ctx: CanvasRenderingContext2D, image: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const scale = Math.max(w / image.width, h / image.height);
  const sw = w / scale, sh = h / scale;
  ctx.drawImage(image, (image.width - sw) / 2, (image.height - sh) / 2, sw, sh, x, y, w, h);
}
export async function renderRoundup(canvas: HTMLCanvasElement, selected: Story[], headline: string) {
  if (selected.length !== 3) throw new Error('Select three stories for your roundup.');
  const [brand, ...photos] = await Promise.all([loadImage(logo), ...selected.map(s => loadImage(storyImageUrl(s.image)))]);
  await document.fonts.ready;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('The graphic could not be created in this browser.');
  canvas.width = ROUNDUP_WIDTH; canvas.height = ROUNDUP_HEIGHT;
  const css = getComputedStyle(document.documentElement);
  const color = (token: string) => `hsl(${css.getPropertyValue(token).trim()})`;
  const ink = color('--footer-ink'), paper = color('--footer-ivory');
  ctx.fillStyle = paper; ctx.fillRect(0, 0, 1200, 630);
  photos.forEach((photo, i) => cover(ctx, photo, i * 400, 0, 400, 338));
  ctx.fillStyle = color('--hub-electric'); ctx.fillRect(0, 338, 1200, 7);
  // Crop transparent padding from the existing brand asset, preserving the logo itself.
  ctx.drawImage(brand, brand.width * .36, brand.height * .215, brand.width * .305, brand.height * .55, 46, 389, 144, 144);
  ctx.fillStyle = ink;
  ctx.font = '700 25px "Space Grotesk", sans-serif';
  ctx.fillText('HATTIESBURG HUB', 220, 398);
  let size = 52;
  do { ctx.font = `700 ${size}px "Space Grotesk", sans-serif`; size--; } while (ctx.measureText(headline).width > 920 && size > 22);
  ctx.fillText(headline, 220, 465);
  ctx.font = '400 23px Inter, sans-serif';
  ctx.fillText('Your city. Your stories.', 220, 508);
  ctx.font = '500 21px Inter, sans-serif';
  ctx.fillText('www.hattiesburghub.com', 46, 594);
  ctx.font = '400 12px Inter, sans-serif';
  ctx.textAlign = 'right';
  const credits = [...new Set(selected.map(s => s.photoSource || s.photographer || s.photoCredit).filter(Boolean))].join(' • ');
  let creditSize = 12;
  while (ctx.measureText(`Photos: ${credits || 'Hattiesburg Hub'}`).width > 790 && creditSize > 8) { creditSize--; ctx.font = `400 ${creditSize}px Inter, sans-serif`; }
  ctx.fillText(`Photos: ${credits || 'Hattiesburg Hub'}`, 1154, 594);
  ctx.textAlign = 'left';
}
