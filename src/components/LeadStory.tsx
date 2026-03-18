import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import StoryCard from "./StoryCard";
import { stories } from "@/data/stories";

const LeadStory = () => {
  const leadStory = stories.find((s) => s.original && s.featured);
  if (!leadStory) return null;

  return (
    <section className="py-14 bg-hub-deep border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex-1 h-[1px] bg-border/50" />
          <Star className="w-4 h-4 text-primary" />
          <span className="font-display text-xs font-bold tracking-widest text-primary uppercase">Featured Original</span>
          <Star className="w-4 h-4 text-primary" />
          <div className="flex-1 h-[1px] bg-border/50" />
        </div>

        {/* Lead story layout — centered stack */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Image */}
          <Link to={`/story/${leadStory.slug}`} className="group block overflow-hidden rounded-lg mb-6">
            <img
              src={leadStory.image}
              alt={leadStory.title}
              className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </Link>

          {/* Text */}
          <span className="category-badge px-2.5 py-1 rounded-sm bg-primary/15 text-primary">
            Original
          </span>
          <Link to={`/story/${leadStory.slug}`} className="group block mt-3">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
              {leadStory.title}
            </h2>
          </Link>
          <p className="font-body text-muted-foreground mt-3 mb-4 leading-relaxed line-clamp-3 max-w-2xl mx-auto">
            {leadStory.excerpt}
          </p>
          <div className="flex items-center justify-center gap-3 mb-5 text-xs text-hub-text-dim font-body">
            <span>By {leadStory.author}</span>
            <span className="text-border">·</span>
            <span>{leadStory.category}</span>
            <span className="text-border">·</span>
            <span>{leadStory.date}</span>
          </div>
          <Link
            to={`/story/${leadStory.slug}`}
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            Read Full Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadStory;