import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import StoryCard from "./StoryCard";
import { featuredStories, stories } from "@/data/stories";

const FeaturedStories = () => {
  // Skip the lead story (already in hero), show rest of featured + recent originals
  const remainingFeatured = featuredStories.slice(1, 5);
  const recentOriginals = stories.filter((s) => s.original && !s.featured).slice(0, 3);
  const displayStories = [...recentOriginals, ...remainingFeatured];

  if (displayStories.length === 0) return null;

  const topRow = displayStories.slice(0, 2);
  const bottomRow = displayStories.slice(2, 5);

  return (
    <section className="py-14 bg-hub-deep">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Flame className="w-4 h-4 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">More Featured Stories</h2>
          </div>
          <div className="flex-1 h-[1px] bg-border/50" />
          <Link
            to="/category/community"
            className="group flex items-center gap-2 font-display text-xs font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Top row: 2-up cards */}
        {topRow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {topRow.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}

        {/* Bottom row: 3-up cards */}
        {bottomRow.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomRow.map((story) => (
              <StoryCard key={story.id} story={story} variant="horizontal" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStories;