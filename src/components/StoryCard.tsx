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
      <Link to={`/story/${story.slug}`} className="group block relative overflow-hidden rounded-lg">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={`category-badge px-2.5 py-1 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
            {story.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
            {story.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 font-body">{story.excerpt}</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-hub-text-dim font-body">
            <span>{story.author}</span>
            <span className="text-border">·</span>
            <span>{story.date}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link to={`/story/${story.slug}`} className="group flex gap-4 items-start">
        <div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`category-badge px-2 py-0.5 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
            {story.category}
          </span>
          <h4 className="font-display text-sm font-semibold text-foreground mt-1.5 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
            {story.title}
          </h4>
          <span className="text-xs text-hub-text-dim font-body">{story.date}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/story/${story.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img
          src={story.image}
          alt={story.title}
          className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <span className={`category-badge px-2.5 py-0.5 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
            {story.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
          {story.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 font-body leading-relaxed">{story.excerpt}</p>
        <div className="flex items-center gap-2 mt-3 text-xs text-hub-text-dim font-body">
          <span>{story.author}</span>
          <span className="text-border">·</span>
          <span>{story.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
