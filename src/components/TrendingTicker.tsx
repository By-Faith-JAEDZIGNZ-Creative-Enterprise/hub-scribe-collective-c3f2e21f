import { Link } from "react-router-dom";
import { trendingStories } from "@/data/stories";
import { TrendingUp } from "lucide-react";

const TrendingTicker = () => {
  const doubled = [...trendingStories, ...trendingStories];

  return (
    <div className="relative bg-muted/50 border-y border-border/50 py-3 overflow-hidden">
      <div className="flex items-center">
        {/* Trending label — sits on top of a soft gradient plate */}
        <div className="relative flex-shrink-0 z-20">
          {/* Gradient plate behind the label extends to the right, so items fade into it */}
          <div className="absolute inset-y-0 left-0 w-[220px] bg-gradient-to-r from-background via-background/95 to-transparent pointer-events-none" />
          <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent text-primary pl-4 pr-6 py-1 font-display text-xs font-medium tracking-wide flex items-center gap-2">
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

      {/* Left fade — items dissolve into the background gradient as they approach Trending */}
      <div className="absolute left-[110px] top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/90 to-transparent z-[15] pointer-events-none" />
      {/* Right fade — smooth disappear on the trailing edge */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-[5] pointer-events-none" />
    </div>
  );
};

export default TrendingTicker;