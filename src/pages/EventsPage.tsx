import { useMemo, useState } from "react";
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight, List, LayoutGrid } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { events, categoryStyles, type HubEvent } from "@/data/events";
import { cn } from "@/lib/utils";

type ViewMode = "list" | "calendar";
type CategoryFilter = HubEvent["category"] | "all";

const FILTERS: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "All Events" },
  { key: "community", label: "Community" },
  { key: "culture", label: "Culture" },
  { key: "government", label: "Government" },
  { key: "sports", label: "Sports" },
  { key: "business", label: "Business" },
];

const parseLocalDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const formatDateRange = (e: HubEvent) => {
  const start = parseLocalDate(e.startDate);
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
  if (!e.endDate || e.endDate === e.startDate) return start.toLocaleDateString("en-US", opts);
  const end = parseLocalDate(e.endDate);
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();
  if (sameMonth) {
    return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })}–${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${start.toLocaleDateString("en-US", opts)} – ${end.toLocaleDateString("en-US", opts)}`;
};

const eventOccursOn = (e: HubEvent, day: Date) => {
  const start = parseLocalDate(e.startDate);
  const end = e.endDate ? parseLocalDate(e.endDate) : start;
  const t = day.getTime();
  return t >= start.setHours(0, 0, 0, 0) && t <= end.setHours(23, 59, 59, 999);
};

const EventsPage = () => {
  const [view, setView] = useState<ViewMode>("list");
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [cursor, setCursor] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const filtered = useMemo(() => {
    const base = filter === "all" ? events : events.filter((e) => e.category === filter);
    return [...base].sort((a, b) => a.startDate.localeCompare(b.startDate));
  }, [filter]);

  // Group events by month for list view
  const grouped = useMemo(() => {
    const groups = new Map<string, HubEvent[]>();
    filtered.forEach((e) => {
      const d = parseLocalDate(e.startDate);
      const key = d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(e);
    });
    return Array.from(groups.entries());
  }, [filtered]);

  // Calendar grid
  const monthLabel = cursor.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const firstDay = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
  const lastDay = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
  const startWeekday = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
  while (cells.length % 7 !== 0) cells.push(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const goPrevMonth = () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1));
  const goNextMonth = () => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1));
  const goToday = () => {
    const t = new Date();
    setCursor(new Date(t.getFullYear(), t.getMonth(), 1));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Events Calendar"
        description="Upcoming Hattiesburg events: concerts, festivals, theater, government meetings, and community gatherings — all in one place."
        path="/events"
      />
      <Navbar />

      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.12),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
          <div className="container relative mx-auto px-4 py-16 md:py-20">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="w-4 h-4 text-primary" />
              <span className="font-display text-xs font-medium tracking-[0.2em] uppercase text-primary">
                What's Happening
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-4">
              Hattiesburg Events
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Concerts, festivals, government meetings, and community happenings — your hub for everything coming up across the Pine Belt.
            </p>
          </div>
        </section>

        {/* Controls */}
        <section className="sticky top-16 z-30 border-b border-border/40 bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Filters */}
              <div className="flex items-center gap-2 overflow-x-auto -mx-1 px-1 scrollbar-thin">
                {FILTERS.map((f) => {
                  const active = filter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setFilter(f.key)}
                      className={cn(
                        "shrink-0 font-display text-xs font-medium tracking-wide px-3.5 py-1.5 rounded-full border transition-all",
                        active
                          ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_-5px_hsl(var(--primary)/0.6)]"
                          : "bg-muted/40 text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
                      )}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 p-1 rounded-full border border-border bg-muted/30 self-start md:self-auto">
                <button
                  onClick={() => setView("list")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full font-display text-xs font-medium transition-all",
                    view === "list" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <List className="w-3.5 h-3.5" />
                  List
                </button>
                <button
                  onClick={() => setView("calendar")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-full font-display text-xs font-medium transition-all",
                    view === "calendar" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  Calendar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12">
          {view === "list" ? (
            <div className="space-y-12 max-w-5xl mx-auto">
              {grouped.length === 0 && (
                <p className="text-center text-muted-foreground font-body py-16">No events match this filter.</p>
              )}
              {grouped.map(([month, items]) => (
                <div key={month}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h2 className="font-display text-xl font-bold text-foreground">{month}</h2>
                    <div className="flex-1 h-[1px] bg-border/40" />
                    <span className="font-display text-xs text-muted-foreground tracking-wide">
                      {items.length} {items.length === 1 ? "event" : "events"}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {items.map((e) => {
                      const start = parseLocalDate(e.startDate);
                      const cat = categoryStyles[e.category];
                      return (
                        <a
                          key={e.id}
                          href={e.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex flex-col md:flex-row md:items-stretch gap-5 p-5 md:p-6 rounded-2xl border border-border/60 bg-card/40 hover:bg-card/80 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]"
                        >
                          {/* Date block */}
                          <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0 md:w-24 md:shrink-0 md:border-r md:border-border/50 md:pr-6">
                            <div className="font-display text-[10px] tracking-[0.2em] uppercase text-primary font-medium">
                              {start.toLocaleDateString("en-US", { month: "short" })}
                            </div>
                            <div className="font-display text-4xl md:text-5xl font-bold text-foreground leading-none">
                              {start.getDate()}
                            </div>
                            <div className="font-body text-xs text-muted-foreground md:mt-1">
                              {start.toLocaleDateString("en-US", { weekday: "long" })}
                            </div>
                          </div>

                          {/* Body */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className={cn("font-display text-[10px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 rounded-sm border", cat.classes)}>
                                {cat.label}
                              </span>
                              {e.endDate && e.endDate !== e.startDate && (
                                <span className="font-display text-[10px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 rounded-sm bg-muted text-muted-foreground border border-border">
                                  Multi-Day
                                </span>
                              )}
                            </div>
                            <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                              {e.title}
                            </h3>
                            <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-body text-sm text-muted-foreground">
                              <span className="flex items-center gap-1.5">
                                <CalendarIcon className="w-3.5 h-3.5 text-primary/70" />
                                {formatDateRange(e)}
                              </span>
                              {e.startTime && (
                                <span className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5 text-primary/70" />
                                  {e.startTime}{e.endTime ? ` – ${e.endTime}` : ""}
                                </span>
                              )}
                              {e.location && (
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-primary/70" />
                                  {e.location}
                                </span>
                              )}
                            </div>
                            {e.description && (
                              <p className="font-body text-sm text-muted-foreground/80 mt-3 leading-relaxed line-clamp-2">
                                {e.description}
                              </p>
                            )}
                          </div>

                          {/* CTA */}
                          <div className="flex md:flex-col md:items-end md:justify-center">
                            <span className="inline-flex items-center gap-1.5 font-display text-xs font-medium tracking-wide text-muted-foreground group-hover:text-primary transition-colors">
                              Details
                              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              {/* Calendar header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{monthLabel}</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToday}
                    className="font-display text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    Today
                  </button>
                  <button
                    onClick={goPrevMonth}
                    aria-label="Previous month"
                    className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={goNextMonth}
                    aria-label="Next month"
                    className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Weekday header */}
              <div className="grid grid-cols-7 gap-px mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((w) => (
                  <div key={w} className="font-display text-[10px] md:text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground text-center py-2">
                    {w}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
                {cells.map((day, i) => {
                  if (!day) {
                    return <div key={i} className="bg-card/20 min-h-[90px] md:min-h-[120px]" />;
                  }
                  const isToday = day.getTime() === today.getTime();
                  const dayEvents = filtered.filter((e) => eventOccursOn(e, day));
                  return (
                    <div
                      key={i}
                      className={cn(
                        "bg-card/40 min-h-[90px] md:min-h-[120px] p-1.5 md:p-2 flex flex-col gap-1 transition-colors",
                        isToday && "bg-primary/5 ring-1 ring-inset ring-primary/40"
                      )}
                    >
                      <div className={cn(
                        "font-display text-xs md:text-sm font-semibold leading-none",
                        isToday ? "text-primary" : "text-foreground"
                      )}>
                        {day.getDate()}
                      </div>
                      <div className="flex flex-col gap-0.5 overflow-hidden">
                        {dayEvents.slice(0, 3).map((e) => {
                          const cat = categoryStyles[e.category];
                          return (
                            <a
                              key={e.id}
                              href={e.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "block truncate rounded px-1.5 py-0.5 font-body text-[10px] md:text-[11px] leading-tight border transition-all hover:scale-[1.02]",
                                cat.classes
                              )}
                              title={`${e.title}${e.startTime ? ` • ${e.startTime}` : ""}`}
                            >
                              {e.startTime && <span className="hidden md:inline opacity-70 mr-1">{e.startTime.replace(":00", "")}</span>}
                              {e.title}
                            </a>
                          );
                        })}
                        {dayEvents.length > 3 && (
                          <span className="font-body text-[10px] text-muted-foreground px-1.5">
                            +{dayEvents.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-3 mt-6 justify-center">
                {(Object.entries(categoryStyles) as [HubEvent["category"], typeof categoryStyles["community"]][]).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <span className={cn("inline-block w-3 h-3 rounded-sm border", val.classes)} />
                    <span className="font-display text-xs text-muted-foreground tracking-wide">{val.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Submit prompt */}
        <section className="border-t border-border/40 bg-hub-deep">
          <div className="container mx-auto px-4 py-12 text-center">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
              Hosting an event?
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
              Send us the details and we'll add it to the Hub calendar so the community can find it.
            </p>
            <a
              href="mailto:hello@hattiesburghub.com?subject=Event%20Submission"
              className="inline-flex items-center gap-2 font-display text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_30px_-10px_hsl(var(--primary)/0.6)]"
            >
              Submit an Event
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
