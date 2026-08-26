import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, Sparkles, Shuffle } from "lucide-react";
import { stories } from "@/data/stories";
import { supabase } from "@/integrations/supabase/client";

/**
 * Surfaces the most recent ORIGINAL story to homepage visitors.
 * Auto-updates when a new original is added: storage key is keyed to the latest
 * original story id, so a fresh original re-triggers the lightbox for returning users.
 */
// Robust date parser — accepts "April 14, 2026", "Apr 14, 2026", or ISO. Falls back to 0.
const toTimestamp = (date: string): number => {
  const t = Date.parse(date);
  return Number.isNaN(t) ? 0 : t;
};

const ORIGINALS_CHANNEL = "originals-feed";
const ORIGINALS_EVENT = "new-original";
const LAST_KNOWN_KEY = "latest-original-last-known-id";

const LatestOriginalLightbox = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  // bumps whenever realtime tells us a new original is live; forces re-derivation
  const [refreshTick, setRefreshTick] = useState(0);

  // All originals sorted newest-first by actual date — resilient to array order in stories.ts.
  // Recomputed from live `stories` data so a freshly added original is reflected immediately.
  // `refreshTick` is included so realtime broadcasts force a re-derivation on all sessions.
  const originals = useMemo(
    () =>
      stories
        .filter((s) => s.original)
        .slice()
        .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [refreshTick]
  );
  const latestOriginal = originals[0];
  const current = originals[index];

  // Re-trigger the lightbox whenever the latest original's id changes (new upload).
  useEffect(() => {
    if (!latestOriginal) return;
    setIndex(0); // always start on the newest original
    const storageKey = `latest-original-dismissed:${latestOriginal.id}`;
    const dismissed = localStorage.getItem(storageKey);
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(timer);
    }
  }, [latestOriginal?.id]);

  // ── Realtime hook ─────────────────────────────────────────────────────────
  // Subscribe to a shared broadcast channel. When ANY open session detects a
  // new latest-original id (vs the last-known id stored locally), it broadcasts
  // to every other session, which then forces a re-derivation and re-trigger.
  useEffect(() => {
    const channel = supabase.channel(ORIGINALS_CHANNEL, {
      config: { broadcast: { self: false } },
    });

    channel
      .on("broadcast", { event: ORIGINALS_EVENT }, (payload) => {
        const incomingId = (payload?.payload as { id?: string } | undefined)?.id;
        if (!incomingId) return;
        localStorage.setItem(LAST_KNOWN_KEY, incomingId);
        setRefreshTick((t) => t + 1);
        // Respect this reader's own dismissal — never force the modal back open.
        if (localStorage.getItem(`latest-original-dismissed:${incomingId}`)) return;
        setIndex(0);
        setOpen(true);
      })
      .subscribe((status) => {
        if (status !== "SUBSCRIBED" || !latestOriginal) return;
        const lastKnown = localStorage.getItem(LAST_KNOWN_KEY);
        if (lastKnown === latestOriginal.id) return;
        localStorage.setItem(LAST_KNOWN_KEY, latestOriginal.id);
        // Only announce a genuinely new original — a first-time visitor (no
        // last-known id at all) must not broadcast to everyone else.
        if (!lastKnown) return;
        channel.send({
          type: "broadcast",
          event: ORIGINALS_EVENT,
          payload: { id: latestOriginal.id },
        });
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [latestOriginal?.id]);

  const dismiss = () => {
    if (latestOriginal) {
      localStorage.setItem(`latest-original-dismissed:${latestOriginal.id}`, "true");
    }
    setOpen(false);
  };

  const showNext = () => {
    setIndex((i) => (i + 1) % originals.length);
  };

  if (!open || !current) return null;

  const hasMore = originals.length > 1;

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
        <Link
          to={`/story/${current.slug}`}
          onClick={dismiss}
          key={current.id}
          className="block relative aspect-[16/9] overflow-hidden group animate-fade-in-up"
          style={{ animationDuration: "0.4s" }}
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-primary/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <Sparkles className="w-3 h-3 text-primary-foreground" />
            <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-primary-foreground uppercase">
              {index === 0 ? "New Original" : "Original"}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div key={`${current.id}-body`} className="relative px-6 pt-5 pb-6 animate-fade-in-up" style={{ animationDuration: "0.4s" }}>
          <p className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium mb-2">
            {current.category} · {current.date}
          </p>
          <h2
            id="latest-original-title"
            className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-3"
          >
            {current.title}
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 line-clamp-3">
            {current.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              to={`/story/${current.slug}`}
              onClick={dismiss}
              className="flex-1 bg-primary text-primary-foreground rounded-lg py-3 px-4 font-display text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] flex items-center justify-center gap-2"
            >
              Read the Story
              <ArrowRight className="w-4 h-4" />
            </Link>
            {hasMore && (
              <button
                onClick={showNext}
                className="sm:w-auto px-4 py-3 rounded-lg border border-border bg-muted/30 text-foreground hover:border-primary/50 hover:text-primary hover:bg-muted/50 font-display text-sm font-medium tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <Shuffle className="w-3.5 h-3.5" />
                Show another
              </button>
            )}
          </div>

          {hasMore && (
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {originals.slice(0, Math.min(originals.length, 6)).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === index % Math.min(originals.length, 6)
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestOriginalLightbox;
