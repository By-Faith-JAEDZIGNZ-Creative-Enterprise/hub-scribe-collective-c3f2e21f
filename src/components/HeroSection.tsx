import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { stories } from "@/data/stories";

const HeroSection = () => {
  // Lead with the newest original story, fallback to first featured
  const leadStory = stories.find((s) => s.original && s.featured) || stories.find((s) => s.featured);

  if (!leadStory) return null;

  return (
    <section className="relative min-h-[75vh] flex items-end overflow-hidden">
      {/* Background: Lead story image */}
      <div className="absolute inset-0">
        <img
          src={leadStory.image}
          alt={leadStory.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-12 md:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4 animate-fade-in-up opacity-0 delay-100">
            <span className="inline-flex items-center gap-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-3 py-1 rounded-full font-display text-[11px] font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Original Feature
            </span>
            <span className="font-display text-xs text-muted-foreground tracking-wide">{leadStory.date}</span>
          </div>

          {/* Headline — links to the story */}
          <Link to={`/story/${leadStory.slug}`} className="group block">
            <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-foreground leading-[1] mb-4 group-hover:text-primary transition-colors duration-300 animate-fade-in-up opacity-0 delay-200">
              {leadStory.title}
            </h1>
          </Link>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-5 leading-relaxed animate-fade-in-up opacity-0 delay-300">
            {leadStory.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0 delay-400">
            <span className="font-display text-xs text-hub-text-dim">By {leadStory.author}</span>
            <Link
              to={`/story/${leadStory.slug}`}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;