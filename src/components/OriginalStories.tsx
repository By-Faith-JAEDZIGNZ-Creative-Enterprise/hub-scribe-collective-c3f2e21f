import { Link } from "react-router-dom";
import { ArrowRight, Feather } from "lucide-react";
import StoryCard from "./StoryCard";
import { stories, byDateDesc } from "@/data/stories";

const OriginalStories = () => {
  const originals = stories
    .filter((s) => s.original)
    .sort(byDateDesc)
    .slice(0, 6);

  if (originals.length <= 1) return null;

  return (
    <section className="py-16 bg-hub-deep/50 border-y border-border/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Feather className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              HattiesburgHub Originals
            </h2>
          </div>
          <div className="hidden sm:block flex-1 h-[1px] bg-border/40 mx-6" />
          <span className="font-body text-xs text-muted-foreground italic hidden sm:block">
            In-depth local journalism
          </span>
        </div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {originals.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginalStories;
