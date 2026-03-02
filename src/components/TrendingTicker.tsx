import { Link } from "react-router-dom";
import { trendingStories } from "@/data/stories";
import { TrendingUp } from "lucide-react";

const TrendingTicker = () => {
  const doubled = [...trendingStories, ...trendingStories];

  return (
    <div className="bg-muted border-y border-border py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-primary text-primary-foreground px-4 py-1 font-display text-xs tracking-widest flex items-center gap-2 z-10">
          <TrendingUp className="w-3.5 h-3.5" />
          TRENDING
        </div>
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((story, i) => (
            <Link
              key={`${story.id}-${i}`}
              to={`/story/${story.slug}`}
              className="inline-flex items-center gap-3 px-6 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              <span className="text-primary font-display font-bold">{String(i % trendingStories.length + 1).padStart(2, '0')}</span>
              {story.title}
              <span className="text-border">|</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTicker;
