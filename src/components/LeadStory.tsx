import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { stories } from "@/data/stories";

const LeadStory = () => {
  const leadStory = stories.find((s) => s.original && s.featured);
  if (!leadStory) return null;

  return (
    <section className="py-8 md:py-14">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <Star className="w-4 h-4 text-primary" />
          <span className="font-display text-xs font-bold tracking-widest text-primary uppercase">Featured Original</span>
          <div className="flex-1 h-px bg-border/40" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{leadStory.date}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Featured split card */}
          <article className="lg:col-span-9 group bg-card/60 border border-border/40 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500">
            {/* Image half */}
            <Link to={`/story/${leadStory.slug}`} className="md:w-1/2 relative overflow-hidden block">
              <img
                src={leadStory.image}
                alt={leadStory.title}
                className="w-full h-full min-h-[200px] md:min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
            </Link>

            {/* Text half */}
            <div className="md:w-1/2 p-5 md:p-10 flex flex-col justify-between gap-5 md:gap-8">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-primary/15 border border-primary/25 text-primary category-badge mb-4 md:mb-5">
                  Original Series
                </span>
                <Link to={`/story/${leadStory.slug}`} className="block">
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[1.08] tracking-[-0.025em] group-hover:text-primary transition-colors duration-300">
...
                <p className="font-body text-sm md:text-[15px] text-muted-foreground mt-4 leading-[1.65] line-clamp-3">
                  {leadStory.excerpt}
                </p>
              </div>

              {/* Byline footer */}
              <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-border/40">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <span className="font-display text-xs font-bold text-primary">
                      {leadStory.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-[13px] font-semibold text-foreground leading-tight">{leadStory.author}</p>
                    <p className="font-body text-[11px] text-muted-foreground capitalize">{leadStory.category}</p>
                  </div>
                </div>
                <Link
                  to={`/story/${leadStory.slug}`}
                  aria-label={`Read: ${leadStory.title}`}
                  className="p-2.5 rounded-full border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Hub Briefing callout panel */}
          <div className="lg:col-span-3 bg-primary rounded-3xl p-6 md:p-8 flex flex-row lg:flex-col items-center lg:items-stretch justify-between gap-4 md:gap-8 text-primary-foreground shadow-[0_16px_48px_-16px_hsl(var(--primary)/0.5)]">
            <div className="min-w-0">
              <h3 className="font-display text-xl md:text-2xl font-bold leading-tight mb-1.5 md:mb-3">
                The Hub Briefing
              </h3>
              <p className="font-body text-xs text-primary-foreground/80 leading-relaxed">
                Curated local news and community signals, delivered to your inbox every week.
              </p>
            </div>
            <Link
              to="/signup"
              className="shrink-0 lg:block lg:w-full text-center bg-background text-foreground px-5 py-2.5 lg:px-0 lg:py-3 rounded-xl font-display text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors"
            >
              Join the Hub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadStory;
