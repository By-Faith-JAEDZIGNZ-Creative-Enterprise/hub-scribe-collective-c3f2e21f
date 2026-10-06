import { assertEquals, assertThrows } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import { requireStoryPhoto } from '../_shared/story-graphic.ts';
Deno.test('individual branded posts require their own story photo', () => {
  assertThrows(() => requireStoryPhoto({ title: 'Story', category: 'community', image: null }));
  assertEquals(requireStoryPhoto({ title: 'Story', category: 'community', image: 'https://example.com/story.jpg' }), 'https://example.com/story.jpg');
});