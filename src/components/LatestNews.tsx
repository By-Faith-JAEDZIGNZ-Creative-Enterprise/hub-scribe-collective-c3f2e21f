import { ExternalLink } from "lucide-react";
import StoryCard from "./StoryCard";
import { stories } from "@/data/stories";

const LatestNews = () => {
  const latestExternal = stories.filter((s) => s.external).slice(0, 8);
  const topStory = latestExternal[0];
  const secondRow = latestExternal.slice(1, 3);
  const remaining = latestExternal.slice(3);

  if (latestExternal.length === 0) return null;

  return (
    <section className="py-16 bg-hub-deep">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            <h2 className="font-display text-2xl font-bold text-foreground">Latest News</h2>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-display text-xs font-medium tracking-wide text-primary">Just In</span>
          </div>
          <div className="flex-1 h-[1px] bg-border/50" />
        </div>

        {/* Top story - full width hero */}
        {topStory && (
          <div className="mb-8">
            <StoryCard story={topStory} variant="large" />
          </div>
        )}

        {/* Second row - 2 columns */}
        {secondRow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {secondRow.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}

        {/* Remaining stories - grid */}
        {remaining.length > 0 && (
          <>
            <div className="h-[1px] bg-border/30 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {remaining.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          </>
        )}

        {/* Source attribution */}
        <div className="mt-8 pt-6 border-t border-border/30 flex items-center gap-2 text-xs text-muted-foreground font-body">
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Stories sourced from local and state news outlets. Click to read full articles on their original sites.</span>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
