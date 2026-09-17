import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

function rssPlugin(): Plugin {
  return {
    name: "generate-rss",
    async closeBundle() {
      try {
        const storiesModule = await import("./src/data/stories.ts");
        const { generateRssFeed } = await import("./src/utils/generateRssFeed.ts");
        const xml = generateRssFeed(storiesModule.stories);
        fs.writeFileSync(path.resolve(__dirname, "dist/rss.xml"), xml, "utf-8");
        console.log("✅ RSS feed generated at dist/rss.xml");
      } catch (e) {
        console.error("⚠️ RSS generation failed:", e);
      }
    },
  };
}

// Emits dist/story/<slug>/index.html with real Open Graph tags per story so
// link previews show the story headline and photo instead of the generic ones.
function socialPagesPlugin(): Plugin {
  return {
    name: "generate-social-pages",
    async closeBundle() {
      try {
        const distDir = path.resolve(__dirname, "dist");
        const templatePath = path.join(distDir, "index.html");
        if (!fs.existsSync(templatePath)) return;
        const template = fs.readFileSync(templatePath, "utf-8");

        const { stories } = await import("./src/data/stories.ts");
        const { buildStoryHtml } = await import("./src/utils/generateSocialPages.ts");

        let count = 0;
        for (const story of stories) {
          if (!story.slug || (story.external && story.externalUrl)) continue;
          const dir = path.join(distDir, "story", story.slug);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, "index.html"), buildStoryHtml(template, story), "utf-8");
          count++;
        }
        console.log(`✅ Social preview pages generated for ${count} stories`);
      } catch (e) {
        console.error("⚠️ Social preview page generation failed:", e);
      }
    },
  };
}



// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), rssPlugin(), socialPagesPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
