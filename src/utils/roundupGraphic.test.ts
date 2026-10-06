import { describe, it, expect } from 'vitest';
import { recentRoundupStories, ROUNDUP_WIDTH, ROUNDUP_HEIGHT } from './roundupGraphic';
import type { Story } from '@/data/stories';
const story = (id: string, date: string, overrides: Partial<Story> = {}): Story => ({ id, date, image: '/photo.jpg', title: id, excerpt: '', category: 'community', author: '', slug: id, ...overrides });
describe('roundup graphics', () => {
  it('selects recent on-site story photos without mutating the input', () => {
    const input = [story('old', 'October 1, 2026'), story('new', 'October 6, 2026'), story('external', 'October 7, 2026', { external: true }), story('missing', 'October 8, 2026', { image: '' })];
    expect(recentRoundupStories(input).map(s => s.id)).toEqual(['new', 'old']);
    expect(input[0].id).toBe('old');
  });
  it('exports a Facebook landscape canvas', () => { expect([ROUNDUP_WIDTH, ROUNDUP_HEIGHT]).toEqual([1200, 630]); });
});
