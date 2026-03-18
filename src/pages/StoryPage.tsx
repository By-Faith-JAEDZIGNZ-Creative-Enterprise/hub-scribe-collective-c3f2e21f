import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";
import { ArrowLeft, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const categoryColors: Record<string, string> = {
  community: "bg-primary/15 text-primary",
  business: "bg-hub-cyan/15 text-hub-cyan",
  culture: "bg-hub-purple/15 text-secondary",
  sports: "bg-hub-electric-glow/15 text-hub-electric-glow",
  opinion: "bg-muted text-muted-foreground",
};

const PhotoGallery = ({ images, title, photoCredit }: { images: string[]; title: string; photoCredit?: string }) => {
  const [current, setCurrent] = useState(0);

  if (images.length <= 1) return null;

  return (
    <div className="my-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-5 bg-primary rounded-full" />
        <h3 className="font-display text-sm font-medium tracking-wide text-muted-foreground uppercase">Photo Gallery</h3>
      </div>

      {/* Main image */}
      <div className="relative rounded-lg overflow-hidden bg-hub-deep">
        <img
          src={images[current]}
          alt={`${title} - Photo ${current + 1}`}
          className="w-full max-h-[500px] object-contain mx-auto"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs text-foreground font-body">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
              i === current ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Photo Credit */}
      {photoCredit && (
        <p className="mt-3 text-xs text-muted-foreground font-body italic leading-relaxed">
          📷 {photoCredit}
        </p>
      )}
    </div>
  );
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

  const contentParagraphs = (story.content || story.excerpt).split("\n\n");
  const midPoint = Math.ceil(contentParagraphs.length / 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={story.title} description={story.excerpt} path={`/story/${slug}`} type="article" publishedTime={story.date} author={story.author} image={story.image} category={story.category} />
      <Navbar />
      <main className="pt-16">
        {/* Article Header */}
        <div className="relative w-full">
          <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 pb-8 max-w-4xl">
              <Link
                to={`/category/${story.category}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-display text-xs font-medium tracking-wide mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {story.category}
              </Link>
              <div>
                {story.original && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/20 text-primary px-2.5 py-1 rounded-sm font-display text-[10px] font-bold tracking-widest uppercase mr-2">
                    HattiesburgHub Original
                  </span>
                )}
                <span className={`category-badge px-2.5 py-1 rounded-sm ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
                  {story.category}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
                {story.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-10 max-w-4xl">
          <div>
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

            {/* Content - first section */}
            <div className="font-body text-foreground/90 leading-relaxed text-lg space-y-6">
              {contentParagraphs.slice(0, midPoint).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Photo Gallery inserted mid-article */}
            {story.images && story.images.length > 1 && (
              <PhotoGallery images={story.images} title={story.title} />
            )}

            {/* Content - remaining */}
            <div className="font-body text-foreground/90 leading-relaxed text-lg space-y-6">
              {contentParagraphs.slice(midPoint).map((paragraph, i) => (
                <p key={i + midPoint}>{paragraph}</p>
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