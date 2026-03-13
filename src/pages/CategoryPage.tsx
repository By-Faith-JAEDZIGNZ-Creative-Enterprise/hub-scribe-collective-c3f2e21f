import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import SubmitStory from "@/components/SubmitStory";
import { stories, categories } from "@/data/stories";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

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
      <SEOHead title={category.name} description={`Latest ${category.name.toLowerCase()} news and stories from Hattiesburg.`} path={`/category/${slug}`} />
      <Navbar />
      <main className="pt-16">
        {/* Category Header */}
        <div className="bg-hub-deep border-b border-border/50">
          <div className="container mx-auto px-4 py-12">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-display text-xs font-medium tracking-wide mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-primary rounded-full" />
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{category.name}</h1>
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

        {/* Submit a Story */}
        <SubmitStory category={category.name} />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
