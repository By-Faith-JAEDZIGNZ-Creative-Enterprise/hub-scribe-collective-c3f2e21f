import { Link } from "react-router-dom";
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from "lucide-react";
import { events, categoryStyles, type HubEvent } from "@/data/events";
import { cn } from "@/lib/utils";

const parseLocalDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const FeaturedEvents = () => {
  // Strategic selection: next 4 upcoming events, prioritizing variety across categories.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events
    .filter((e) => {
      const end = parseLocalDate(e.endDate || e.startDate);
      return end.getTime() >= today.getTime();
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  // Diversify: pick first event of each unique category, then fill remaining slots chronologically.
  const seen = new Set<HubEvent["category"]>();
  const diverse: HubEvent[] = [];
  upcoming.forEach((e) => {
    if (!seen.has(e.category)) {
      diverse.push(e);
      seen.add(e.category);
    }
  });
  for (const e of upcoming) {
    if (diverse.length >= 4) break;
    if (!diverse.includes(e)) diverse.push(e);
  }
  const featured = diverse.slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            <h2 className="font-display text-2xl font-bold text-foreground">Upcoming Events</h2>
          </div>
          <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full">
            <CalendarIcon className="w-3 h-3 text-secondary" />
            <span className="font-display text-xs font-medium tracking-wide text-secondary">This Week & Beyond</span>
          </div>
          <div className="flex-1 h-[1px] bg-border/50" />
          <Link
            to="/events"
            className="group flex items-center gap-2 font-display text-xs font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors"
          >
            Full Calendar
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((e) => {
            const start = parseLocalDate(e.startDate);
            const cat = categoryStyles[e.category];
            const multiDay = e.endDate && e.endDate !== e.startDate;
            return (
              <a
                key={e.id}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 hover:bg-card/80 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)] hover:-translate-y-1"
              >
                {/* Date band */}
                <div className="relative px-5 pt-5 pb-4 flex items-start justify-between gap-3 border-b border-border/40">
                  <div>
                    <div className="font-display text-[10px] tracking-[0.2em] uppercase text-primary font-medium mb-1">
                      {start.toLocaleDateString("en-US", { month: "short" })}
                    </div>
                    <div className="font-display text-4xl font-bold text-foreground leading-none">
                      {start.getDate()}
                      {multiDay && (
                        <span className="text-muted-foreground/60 text-2xl font-medium">
                          –{parseLocalDate(e.endDate!).getDate()}
                        </span>
                      )}
                    </div>
                    <div className="font-body text-[11px] text-muted-foreground mt-1.5">
                      {start.toLocaleDateString("en-US", { weekday: "long" })}
                    </div>
                  </div>
                  <span className={cn(
                    "font-display text-[10px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 rounded-sm border whitespace-nowrap",
                    cat.classes
                  )}>
                    {cat.label}
                  </span>
                </div>

                {/* Body */}
                <div className="px-5 py-4">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[2.6rem] mb-3">
                    {e.title}
                  </h3>
                  <div className="space-y-1.5 font-body text-xs text-muted-foreground">
                    {e.startTime && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-primary/70 shrink-0" />
                        <span className="truncate">
                          {e.startTime}{e.endTime ? ` – ${e.endTime}` : ""}
                        </span>
                      </div>
                    )}
                    {e.location && (
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3 h-3 text-primary/70 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{e.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-display text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Full Calendar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
