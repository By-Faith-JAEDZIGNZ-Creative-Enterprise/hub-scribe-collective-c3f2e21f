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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), rssPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
