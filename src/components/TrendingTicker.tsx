import { Link } from "react-router-dom";
import { trendingStories } from "@/data/stories";
import { TrendingUp } from "lucide-react";

const TickerSet = () => (
  <div className="flex items-center">
    {trendingStories.map((story, i) => (
      <div key={story.id} className="flex items-center">
        <Link
          to={`/story/${story.slug}`}
          className="group flex items-center px-6 md:px-8"
        >
          <span className="font-mono text-[10px] text-muted-foreground/60 mr-4 transition-colors group-hover:text-primary">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-xs md:text-[13px] font-medium text-muted-foreground tracking-tight transition-colors duration-300 group-hover:text-foreground">
            {story.title}
          </span>
        </Link>
        <span className="text-border select-none" aria-hidden="true">|</span>
      </div>
    ))}
  </div>
);

const TrendingTicker = () => {
  return (
    <div className="container mx-auto px-4 mt-3 md:mt-4">
      <div className="relative flex items-center h-11 md:h-12 border-y border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
        {/* Trending label plate */}
        <div className="relative z-30 flex items-center h-full px-3 md:px-5 bg-card border-r border-border/50 flex-shrink-0">
          <div className="flex items-center gap-2.5 md:gap-3">
            <div className="relative">
              <div className="relative bg-primary/10 border border-primary/20 p-1.5 rounded-sm">
                <TrendingUp className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
              </div>
            </div>
            <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-primary uppercase whitespace-nowrap">
              Trending
            </span>
          </div>
        </div>

        {/* Marquee, edges dissolve via mask for a frictionless loop */}
        <div className="relative flex-1 overflow-hidden h-full ticker-mask">
          <div className="animate-ticker flex items-center h-full w-max whitespace-nowrap">
            <TickerSet />
            <TickerSet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTicker;
