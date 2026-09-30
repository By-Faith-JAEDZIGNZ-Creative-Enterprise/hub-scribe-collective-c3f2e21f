# Cohesive SEO, Metadata, and Social Images

## Goal
Make Hattiesburg Hub's search appearance and shared links consistently use the approved brand, accurate page information, and each article's own photo.

## Changes
- Standardize the sitewide title, description, publisher identity, canonical domain, Open Graph, X card, and news organization information.
- Keep page-specific titles and descriptions concise and local, with consistent “Hattiesburg Hub” naming across home, categories, events, and information pages.
- Ensure every story preview uses that story's lead image, headline, summary, section, author, publication date, and descriptive image text.
- Remove inaccurate image-size declarations when an article photo has not been generated at that exact size, while preserving large-image previews.
- Prepare the branded fallback social image at the recommended 1200 × 630 size and verify the site icon is suitable for search displays.
- Validate current story preview pages and image responses, including the newest stories, before publishing.
- Recheck search foundations after the edits and record resolved findings only when the scan confirms the underlying correction.

## Technical Details
- Preserve the existing React app, story data, routes, newsletter behavior, and approved visual design.
- Continue generating crawler-readable story pages during production builds.
- Continue routing uploaded story photos through the reliable published asset host.
- Keep `www.hattiesburghub.com` as the public brand URL across canonical and share metadata.
