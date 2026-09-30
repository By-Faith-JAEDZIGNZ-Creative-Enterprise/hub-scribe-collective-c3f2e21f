import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";
import { ArrowLeft, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { formatPhotoCredit } from "@/utils/photoCredit";
import { storyImageUrl } from "@/utils/storyImageUrl";

const categoryColors: Record<string, string> = {
  community: "bg-primary/15 text-primary",
  business: "bg-hub-cyan/15 text-hub-cyan",
  culture: "bg-hub-purple/15 text-secondary",
  sports: "bg-hub-electric-glow/15 text-hub-electric-glow",
  opinion: "bg-muted text-muted-foreground",
};

const PhotoGallery = ({
  images,
  title,
  credit,
  alts = [],
  captions = [],
}: {
  images: string[];
  title: string;
  credit?: string | null;
  alts?: string[];
  captions?: string[];
}) => {
  const [current, setCurrent] = useState(0);

  if (images.length <= 1) return null;

  const altFor = (i: number) => alts[i]?.trim() || captions[i]?.trim() || `${title}, photo ${i + 1} of ${images.length}`;
  const captionFor = (i: number) => captions[i]?.trim();

  return (
    <div className="my-14 md:my-20">
      <div className="mb-5 border-b border-border/60 pb-4">
        <h2 className="font-display text-xs font-semibold text-muted-foreground uppercase">Photo Gallery</h2>
      </div>

      {/* Main image */}
      <figure className="m-0">
        <div className="relative rounded-md overflow-hidden bg-hub-deep">
          <img
            src={storyImageUrl(images[current])}
            alt={altFor(current)}
            className="w-full max-h-[560px] object-contain mx-auto"
          />
          {images.length > 1 && (
            <>
              <button
                aria-label="Previous photo"
                onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next photo"
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

        {/* Per-image caption */}
        {captionFor(current) && (
          <figcaption className="mt-4 max-w-2xl text-sm text-muted-foreground font-body italic leading-7">
            {captionFor(current)}
          </figcaption>
        )}
      </figure>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show photo ${i + 1}: ${altFor(i)}`}
            className={`w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
              i === current ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <img src={storyImageUrl(img)} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Photo Credit */}
      {credit && (
        <p className="mt-4 max-w-2xl text-xs text-muted-foreground font-body italic leading-6">
          📷 {credit}
        </p>
      )}
    </div>

  );
};

const StoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find((s) => s.slug === slug);
  const relatedStories = stories.filter((s) => s.slug !== slug && s.category === story?.category).slice(0, 3);
  const originalReads = stories.filter((s) => s.slug !== slug && s.original).slice(0, 3);

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Story not found.</p>
      </div>
    );
  }

  const contentParagraphs = (story.content || story.excerpt).split("\n\n");
  const midPoint = Math.ceil(contentParagraphs.length / 3);
  const credit = formatPhotoCredit(story);
  const imageUrl = storyImageUrl(story.image);
  const socialImageAlt = story.imageAlts?.[0] || story.photoCaption || story.title;
  // Story dates are editorial strings ("April 27, 2026"); schema.org expects ISO 8601
  const parsedDate = Date.parse(story.date);
  const publishedISO = Number.isNaN(parsedDate) ? undefined : new Date(parsedDate).toISOString();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={story.title} description={story.excerpt} path={`/story/${slug}`} type="article" publishedTime={publishedISO} author={story.author} image={imageUrl} imageAlt={socialImageAlt} category={story.category} />
      <Navbar />
      <main className="pt-36 md:pt-28">
        {/* Article Header */}
        <div className="relative w-full">
          <div className="w-full h-[54vh] min-h-[460px] max-h-[760px] md:h-[64vh] overflow-hidden">
            <img
              src={imageUrl}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 via-42% to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto max-w-5xl px-5 pb-10 sm:px-8 md:pb-14">
              <Link
                to={`/category/${story.category}`}
                className="mb-6 inline-flex items-center gap-2 font-body text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {story.category}
              </Link>
              <div className="flex flex-wrap items-center gap-2">
                {story.original && (
                  <span className="inline-flex items-center bg-primary/15 text-primary px-2.5 py-1 rounded-sm font-display text-[10px] font-semibold tracking-normal uppercase">
                    HattiesburgHub Original
                  </span>
                )}
                <span className={`category-badge px-2.5 py-1 rounded-sm tracking-normal ${categoryColors[story.category] || "bg-muted text-muted-foreground"}`}>
                  {story.category}
                </span>
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-[1.12] text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                {story.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto max-w-5xl px-5 py-12 sm:px-8 md:py-16">
          <div className="mx-auto max-w-3xl">
            {/* Meta */}
            <div className="mb-12 flex flex-col gap-4 border-y border-border/60 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:mb-16 md:py-7">
              <div className="flex items-center gap-2 font-body text-sm font-medium text-foreground/80">
                <User className="w-4 h-4" />
                {story.author}
              </div>
              <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {story.date}
              </div>
            </div>

            {/* Content - first section */}
            <div className="space-y-8 font-body text-[1.0625rem] leading-[1.9] text-foreground/85 md:space-y-9 md:text-lg">
              {contentParagraphs.slice(0, midPoint).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Photo Gallery inserted mid-article */}
            {story.images && story.images.length > 1 && (
              <PhotoGallery
                images={story.images}
                title={story.title}
                credit={credit}
                alts={story.imageAlts}
                captions={story.imageCaptions}
              />
            )}

            {/* Single-image credit */}
            {(!story.images || story.images.length <= 1) && credit && (
              <p className="my-10 border-y border-border/50 py-4 text-xs text-muted-foreground font-body italic leading-6 md:my-14">
                📷 {credit}
              </p>
            )}

            {/* Content - remaining */}
            <div className="space-y-8 font-body text-[1.0625rem] leading-[1.9] text-foreground/85 md:space-y-9 md:text-lg">
              {contentParagraphs.slice(midPoint).map((paragraph, i) => (
                <p key={i + midPoint}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Original Reads */}
          {originalReads.length > 0 && (
            <div className="mt-24 border-t border-border/60 pt-14 md:mt-32 md:pt-16">
              <div className="mb-10">
                <h2 className="font-display text-xl font-semibold text-foreground">More Original Reads</h2>
              </div>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                {originalReads.map((s) => (
                  <StoryCard key={s.id} story={s} />
                ))}
              </div>
            </div>
          )}

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <div className="mt-24 border-t border-border/60 pt-14 md:mt-32 md:pt-16">
              <div className="mb-10">
                <h2 className="font-display text-xl font-semibold text-foreground">Related Stories</h2>
              </div>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
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