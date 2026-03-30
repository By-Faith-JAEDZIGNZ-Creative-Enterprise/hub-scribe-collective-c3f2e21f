import { useEffect } from "react";
import { generateRssFeed } from "@/utils/generateRssFeed";

const RssFeed = () => {
  useEffect(() => {
    const xml = generateRssFeed();
    const blob = new Blob([xml], { type: "application/rss+xml; charset=utf-8" });
    const url = URL.createObjectURL(blob);
    window.location.replace(url);
  }, []);

  return null;
};

export default RssFeed;
