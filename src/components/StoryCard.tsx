import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Story } from "@/data/stories";

interface StoryCardProps {
  story: Story;
  variant?: "default" | "large" | "horizontal";
}

const categoryColors: Record<string, string> = {
  community: "bg-primary",
  business: "bg-hub-terracotta",
  culture: "bg-emerald-600",
  sports: "bg-blue-600",
  opinion: "bg-violet-600",
};

const StoryCard = ({ story, variant = "default" }: StoryCardProps) => {
  if (variant === "large") {
    return (
      <Link to={`/story/${story.slug}`} className="group block relative overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className={`category-badge px-2 py-1 text-foreground ${categoryColors[story.category] || "bg-muted"}`}>
            {story.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors leading-tight">
            {story.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 font-body">{story.excerpt}</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-hub-text-dim font-body">
            <span>{story.author}</span>
            <span>·</span>
            <span>{story.date}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link to={`/story/${story.slug}`} className="group flex gap-4 items-start">
        <div className="w-28 h-20 flex-shrink-0 overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className={`category-badge px-1.5 py-0.5 text-foreground ${categoryColors[story.category] || "bg-muted"}`}>
            {story.category}
          </span>
          <h4 className="font-display text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors leading-snug line-clamp-2">
            {story.title}
          </h4>
          <span className="text-xs text-hub-text-dim font-body">{story.date}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/story/${story.slug}`} className="group block">
      <div className="overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <span className={`category-badge px-2 py-0.5 text-foreground ${categoryColors[story.category] || "bg-muted"}`}>
            {story.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors leading-snug">
          {story.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 font-body">{story.excerpt}</p>
        <div className="flex items-center gap-2 mt-3 text-xs text-hub-text-dim font-body">
          <span>{story.author}</span>
          <span>·</span>
          <span>{story.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
