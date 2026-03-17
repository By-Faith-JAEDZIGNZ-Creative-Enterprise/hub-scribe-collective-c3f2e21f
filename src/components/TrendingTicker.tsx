import { Link } from "react-router-dom";
import { trendingStories } from "@/data/stories";
import { TrendingUp } from "lucide-react";

const TrendingTicker = () => {
  const doubled = [...trendingStories, ...trendingStories];

  return (
    <div className="relative bg-muted/50 border-y border-border/50 py-3 overflow-hidden">
      <div className="flex items-center">
        {/* Trending label with fade mask on its right edge */}
        <div className="relative flex-shrink-0 z-10">
          <div className="bg-primary/10 border-r border-primary/20 text-primary px-4 py-1 font-display text-xs font-medium tracking-wide flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            Trending
          </div>
        </div>

        {/* Scrolling ticker */}
        <div className="flex animate-ticker whitespace-nowrap">
          {doubled.map((story, i) => (
            <Link
              key={`${story.id}-${i}`}
              to={`/story/${story.slug}`}
              className="inline-flex items-center gap-3 px-6 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              <span className="text-primary/60 font-display font-semibold text-xs">{String(i % trendingStories.length + 1).padStart(2, '0')}</span>
              {story.title}
              <span className="text-border/50">|</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Left fade — prevents text overlapping the Trending label */}
      <div className="absolute left-[105px] top-0 bottom-0 w-12 bg-gradient-to-r from-muted/80 to-transparent z-[5] pointer-events-none" />
      {/* Right fade — smooth disappear on the trailing edge */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/80 to-transparent z-[5] pointer-events-none" />
    </div>
  );
};

export default TrendingTicker;