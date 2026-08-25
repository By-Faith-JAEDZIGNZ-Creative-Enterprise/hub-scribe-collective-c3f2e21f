# Design Refresh: Subtle Apple News / Bloomberg-Style Polish

A light-touch refinement pass across the site. Same visual identity — navy/electric blue palette, Space Grotesk + Inter, glassmorphism, time-based theme — just tightened, cleaner, and more premium. No layout restructuring, no new sections, no functionality changes.

## What changes

### 1. Story cards (the biggest visual surface)
- Softer, more refined hover: gentler image zoom, subtle card lift with a soft shadow instead of just a color shift
- Slightly larger corner radius on images and a hairline border for a crisp "card" feel (Apple News style)
- Cleaner metadata row: refined category badges, consistent dot separators, quieter date styling
- More consistent spacing between image, badge, headline, and excerpt across all three card variants (default, large, horizontal)

### 2. Section headers
- Unify the header pattern site-wide (Latest News, Originals, Featured, Category Highlights): same label size, rule line, and "View All" link style everywhere
- Slightly tighter tracking on the small caps labels for a more editorial feel

### 3. Hero section
- Fine-tune the gradient overlays so the headline reads cleaner over the photo (Bloomberg-style legibility)
- Refine headline line-height/letter-spacing and button hover states

### 4. Navbar
- Slightly stronger glass blur with a subtler border for a floating, premium feel
- Refine the active-link indicator and hover transitions

### 5. Trending ticker
- Keep the gradient fade behavior you approved; just polish the "Trending" label plate and spacing

### 6. Footer
- Tighten vertical rhythm between the hero logo block, newsletter, nav grid, and the JAE crest credit
- Nothing removed — crest, credit link, and glow all stay

### 7. Micro-details
- Consistent border/hairline opacity across sections
- Smoother, consistent transition timing everywhere (one shared easing feel)
- Small accessibility wins: focus-visible rings on links/buttons

## What does NOT change
- Color palette, fonts, dark/light time-based theme
- Page structure, sections, story data, newsletter, events
- Branding: logos, JAE crest, "Trending/Featured/Original" editorial icons

## Technical notes
- All edits in existing components (`StoryCard.tsx`, `HeroSection.tsx`, `Navbar.tsx`, `TrendingTicker.tsx`, `Footer.tsx`, section components) and `src/index.css` for token-level tweaks
- Semantic tokens only — no hardcoded colors; both light and dark themes stay correct
- No new dependencies
