import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Story } from "@/data/stories";

interface StoryCardProps {
  story: Story;
  variant?: "default" | "large" | "horizontal";
}

const CardWrapper = ({ story, children, className }: { story: Story; children: React.ReactNode; className?: string }) => {
  if (story.external && story.externalUrl) {
    return (
      <a href={story.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={`/story/${story.slug}`} className={className}>
      {children}
    </Link>
  );
};

const categoryColors: Record<string, string> = {
  community: "bg-primary/15 text-primary",
  business: "bg-hub-cyan/15 text-hub-cyan",
  culture: "bg-hub-purple/15 text-secondary",
  sports: "bg-hub-electric-glow/15 text-hub-electric-glow",
  opinion: "bg-muted text-muted-foreground",
};

const StoryCard = ({ story, variant = "default" }: StoryCardProps) => {
  if (variant === "large") {
    return (
      <CardWrapper story={story} className="group block relative overflow-hidden rounded-2xl border border-border/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="flex items-center gap-2">
            {story.original && (
              <span className="category-badge px-2 py-0.5 rounded-sm bg-primary/20 text-primary">
                Original
              </span>
            )}
            <span className={`category-badge px-2.5 py-1 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
              {story.category}
            </span>
            {story.external && <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />}
          </div>
          <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mt-2.5 md:mt-3 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {story.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 font-body">{story.excerpt}</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-hub-text-dim font-body">
            <span>{story.author}</span>
            <span className="text-border">·</span>
            <span>{story.date}</span>
          </div>
        </div>
      </CardWrapper>
    );
  }

  if (variant === "horizontal") {
    return (
      <CardWrapper story={story} className="group flex gap-4 items-start">
        <div className="w-24 h-[4.5rem] sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden rounded-xl border border-border/40">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`category-badge px-2 py-0.5 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
              {story.category}
            </span>
            {story.external && <ExternalLink className="w-3 h-3 text-muted-foreground" />}
          </div>
          <h4 className="font-display text-sm font-semibold text-foreground mt-1.5 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
            {story.title}
          </h4>
          <span className="text-xs text-hub-text-dim font-body">{story.date}</span>
        </div>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper story={story} className="group block transition-transform duration-500 ease-out hover:-translate-y-1">
      <div className="overflow-hidden rounded-2xl border border-border/40 shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500">
        <img
          src={story.image}
          alt={story.title}
          className="w-full aspect-[3/2] object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
      </div>
      <div className="pt-3 md:pt-4 px-0.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`category-badge px-2.5 py-0.5 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
              {story.category}
            </span>
            {story.external && <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />}
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
        <h3 className="font-display text-base md:text-lg font-semibold tracking-tight text-foreground mt-2 md:mt-3 mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
          {story.title}
        </h3>
        <p className="text-muted-foreground text-[13px] md:text-sm line-clamp-2 font-body leading-relaxed">{story.excerpt}</p>
        <div className="flex items-center gap-2 mt-2.5 md:mt-3 text-xs text-hub-text-dim font-body">
          <span>{story.author}</span>
          <span className="text-border">·</span>
          <span>{story.date}</span>
        </div>
      </div>
    </CardWrapper>
  );
};

export default StoryCard;
