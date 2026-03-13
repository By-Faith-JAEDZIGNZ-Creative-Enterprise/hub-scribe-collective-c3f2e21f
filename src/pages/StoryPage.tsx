import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";
import { ArrowLeft, Clock, User } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const categoryColors: Record<string, string> = {
  community: "bg-primary/15 text-primary",
  business: "bg-hub-cyan/15 text-hub-cyan",
  culture: "bg-hub-purple/15 text-secondary",
  sports: "bg-hub-electric-glow/15 text-hub-electric-glow",
  opinion: "bg-muted text-muted-foreground",
};

const StoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find((s) => s.slug === slug);
  const relatedStories = stories.filter((s) => s.slug !== slug && s.category === story?.category).slice(0, 3);

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Story not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={story.title} description={story.excerpt} path={`/story/${slug}`} type="article" publishedTime={story.date} author={story.author} image={story.image} />
      <Navbar />
      <main className="pt-16">
        {/* Article Header */}
        <div className="relative">
          <div className="aspect-[21/9] max-h-[500px] overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 pb-8">
              <Link
                to={`/category/${story.category}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-display text-xs font-medium tracking-wide mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {story.category}
              </Link>
              <span className={`category-badge px-2.5 py-1 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
                {story.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight max-w-3xl">
                {story.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-3xl">
            {/* Meta */}
            <div className="flex items-center gap-6 mb-8 pb-6 border-b border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
                <User className="w-4 h-4" />
                {story.author}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
                <Clock className="w-4 h-4" />
                {story.date}
              </div>
            </div>

            {/* Content */}
            <div className="font-body text-foreground/90 leading-relaxed text-lg space-y-6">
              {(story.content || story.excerpt).split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <h2 className="font-display text-xl font-bold text-foreground">Related Stories</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedStories.map((s) => (
                  <StoryCard key={s.id} story={s} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoryPage;
