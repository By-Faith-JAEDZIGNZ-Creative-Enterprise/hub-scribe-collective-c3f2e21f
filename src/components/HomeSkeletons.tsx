import { cn } from "@/lib/utils";

const Shimmer = ({ className }: { className?: string }) => (
  <div className={cn("skeleton-shimmer rounded-md", className)} aria-hidden="true" />
);

export const HeroSkeleton = () => (
  <section className="container mx-auto px-4" aria-label="Loading featured content">
    <div className="relative h-[58vh] min-h-[400px] md:h-[68vh] md:min-h-[480px] max-h-[760px] overflow-hidden rounded-3xl md:rounded-[2rem] border border-border/40 skeleton-shimmer">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
      <div className="absolute bottom-0 left-0 px-5 md:px-14 pb-7 md:pb-16 w-full max-w-2xl space-y-4 md:space-y-5">
        <Shimmer className="h-3 w-44" />
        <Shimmer className="h-10 md:h-16 w-3/4" />
        <Shimmer className="h-10 md:h-16 w-1/2" />
        <Shimmer className="h-4 w-2/3" />
        <div className="flex gap-3 pt-2">
          <Shimmer className="h-11 w-36 rounded-xl" />
          <Shimmer className="h-11 w-36 rounded-xl" />
        </div>
      </div>
    </div>
  </section>
);

export const TickerSkeleton = () => (
  <div className="container mx-auto px-4 mt-4 md:mt-6" aria-label="Loading trending stories">
    <div className="flex items-center h-12 md:h-14 border-y border-border/60 bg-card/40 overflow-hidden">
      <div className="flex items-center h-full px-4 md:px-6 border-r border-border/60 flex-shrink-0">
        <Shimmer className="h-6 w-28" />
      </div>
      <div className="flex items-center gap-10 px-8 overflow-hidden">
        <Shimmer className="h-4 w-64 flex-shrink-0" />
        <Shimmer className="h-4 w-52 flex-shrink-0 hidden sm:block" />
        <Shimmer className="h-4 w-72 flex-shrink-0 hidden md:block" />
      </div>
    </div>
  </div>
);

export const StoryCardSkeleton = ({ horizontal = false }: { horizontal?: boolean }) => {
  if (horizontal) {
    return (
      <div className="flex gap-4 items-start">
        <Shimmer className="w-24 h-[4.5rem] sm:w-32 sm:h-24 flex-shrink-0 rounded-xl" />
        <div className="flex-1 space-y-2.5 pt-1">
          <Shimmer className="h-4 w-16" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-3 w-20" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Shimmer className="w-full aspect-[3/2] rounded-2xl" />
      <div className="pt-3 md:pt-4 px-0.5 space-y-2.5">
        <Shimmer className="h-4 w-20" />
        <Shimmer className="h-5 w-full" />
        <Shimmer className="h-4 w-4/5" />
        <Shimmer className="h-3 w-32" />
      </div>
    </div>
  );
};

export const LeadStorySkeleton = () => (
  <section className="container mx-auto px-4 py-6 md:py-10" aria-label="Loading top story">
    <div className="rounded-3xl border border-border/40 overflow-hidden md:flex">
      <Shimmer className="md:w-1/2 aspect-[16/10] md:aspect-auto md:min-h-[360px] rounded-none" />
      <div className="md:w-1/2 p-5 md:p-10 flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <Shimmer className="h-5 w-24" />
          <Shimmer className="h-8 md:h-10 w-full" />
          <Shimmer className="h-8 md:h-10 w-3/4" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-5/6" />
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-border/40">
          <Shimmer className="w-9 h-9 rounded-full" />
          <div className="space-y-2">
            <Shimmer className="h-3 w-28" />
            <Shimmer className="h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const StoryGridSkeleton = ({
  count = 6,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  label = "Loading stories",
}: {
  count?: number;
  columns?: string;
  label?: string;
}) => (
  <section className="container mx-auto px-4 py-6 md:py-10" aria-label={label}>
    <div className="flex items-center gap-3 mb-5 md:mb-8">
      <Shimmer className="h-6 w-44" />
      <div className="flex-1 h-px bg-border/40" />
    </div>
    <div className={cn("grid grid-cols-1 gap-5 md:gap-8", columns)}>
      {Array.from({ length: count }).map((_, i) => (
        <StoryCardSkeleton key={i} />
      ))}
    </div>
  </section>
);
