import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StoryCard from "./StoryCard";
import { stories, categories } from "@/data/stories";

const CategoryHighlights = () => {
  const displayCategories = categories.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {displayCategories.map((cat) => {
          const catStories = stories.filter((s) => s.category === cat.slug).slice(0, 3);
          if (catStories.length === 0) return null;

          return (
            <div key={cat.slug} className="mb-16 last:mb-0">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-primary" />
                  <h2 className="font-display text-2xl font-bold text-foreground">{cat.name.toUpperCase()}</h2>
                </div>
                <Link
                  to={`/category/${cat.slug}`}
                  className="group flex items-center gap-2 font-display text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  VIEW ALL
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryHighlights;
