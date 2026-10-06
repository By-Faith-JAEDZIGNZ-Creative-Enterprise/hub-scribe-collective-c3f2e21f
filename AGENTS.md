# Project Architecture

- Keep homepage visual refinements within existing presentation components and semantic theme tokens so editorial structure and behavior remain stable.
- Keep story-page refinements within the existing StoryPage structure and semantic theme tokens so article data, sharing, galleries, and navigation remain stable.
- Use www.hattiesburghub.com as the canonical public brand domain, and use each story's lead photo for story metadata and social previews so shared links remain accurate.
- Keep roundup rendering client-side with a canvas and CORS-enabled story images; block downloads when image loading fails so exports never contain missing photos.
- Render individual social graphics in shared edge-function code and store them privately with signed sharing URLs; reject missing photos before posting and leave article metadata on the original lead photo.