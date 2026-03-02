import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { stories, categories } from "@/data/stories";
import { ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryStories = stories.filter((s) => s.category === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Category not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Category Header */}
        <div className="bg-hub-dark border-b border-border">
          <div className="container mx-auto px-4 py-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-display text-xs tracking-widest mb-6">
              <ArrowLeft className="w-4 h-4" />
              BACK TO HOME
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-12 bg-primary" />
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{category.name.toUpperCase()}</h1>
                <p className="text-muted-foreground font-body mt-1">
                  {categoryStories.length} {categoryStories.length === 1 ? "story" : "stories"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="container mx-auto px-4 py-12">
          {categoryStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-12 font-body">
              No stories in this category yet. Check back soon!
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
