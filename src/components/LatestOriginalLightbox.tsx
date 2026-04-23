import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { stories } from "@/data/stories";

/**
 * Surfaces the most recent ORIGINAL story to homepage visitors.
 * Auto-updates when a new original is added: storage key is keyed to the latest
 * original story id, so a fresh original re-triggers the lightbox for returning users.
 */
const LatestOriginalLightbox = () => {
  const [open, setOpen] = useState(false);

  // Pick the latest original story (originals are listed newest-first at top of stories.ts)
  const latestOriginal = stories.find((s) => s.original);

  useEffect(() => {
    if (!latestOriginal) return;
    const storageKey = `latest-original-dismissed:${latestOriginal.id}`;
    const dismissed = localStorage.getItem(storageKey);
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(timer);
    }
  }, [latestOriginal]);

  const dismiss = () => {
    if (latestOriginal) {
      localStorage.setItem(`latest-original-dismissed:${latestOriginal.id}`, "true");
    }
    setOpen(false);
  };

  if (!open || !latestOriginal) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="latest-original-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-md animate-fade-in-up"
        style={{ animationDuration: "0.3s" }}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg bg-card border border-border/60 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/[0.15] rounded-full blur-[80px] pointer-events-none" />

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero image */}
        <Link to={`/story/${latestOriginal.slug}`} onClick={dismiss} className="block relative aspect-[16/9] overflow-hidden group">
          <img
            src={latestOriginal.image}
            alt={latestOriginal.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-primary/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <Sparkles className="w-3 h-3 text-primary-foreground" />
            <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-primary-foreground uppercase">
              New Original
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="relative px-6 pt-5 pb-6">
          <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-2">
            {latestOriginal.category} · {latestOriginal.date}
          </p>
          <h2
            id="latest-original-title"
            className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-3"
          >
            {latestOriginal.title}
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 line-clamp-3">
            {latestOriginal.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              to={`/story/${latestOriginal.slug}`}
              onClick={dismiss}
              className="flex-1 bg-primary text-primary-foreground rounded-lg py-3 px-4 font-display text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] flex items-center justify-center gap-2"
            >
              Read the Story
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={dismiss}
              className="sm:w-auto px-4 py-3 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestOriginalLightbox;
