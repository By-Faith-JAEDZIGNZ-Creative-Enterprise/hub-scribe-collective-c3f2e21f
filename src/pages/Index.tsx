import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadStory from "@/components/LeadStory";
import TrendingTicker from "@/components/TrendingTicker";
import LatestNews from "@/components/LatestNews";
import FeaturedStories from "@/components/FeaturedStories";
import FeaturedEvents from "@/components/FeaturedEvents";
import CategoryHighlights from "@/components/CategoryHighlights";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import LatestOriginalLightbox from "@/components/LatestOriginalLightbox";
import SEOHead from "@/components/SEOHead";
import OriginalStories from "@/components/OriginalStories";
import {
  HeroSkeleton,
  TickerSkeleton,
  LeadStorySkeleton,
  StoryGridSkeleton,
} from "@/components/HomeSkeletons";
import heroImage from "@/assets/hero-hattiesburg.jpg";

const MIN_SKELETON_MS = 500;
const MAX_WAIT_MS = 2500;

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const start = Date.now();
    let cancelled = false;

    const reveal = () => {
      if (cancelled) return;
      const elapsed = Date.now() - start;
      // Keep the skeleton visible for a beat so it never flashes,
      // then hand off to the real content.
      setTimeout(() => {
        if (!cancelled) setLoading(false);
      }, Math.max(0, MIN_SKELETON_MS - elapsed));
    };

    // The homepage is "ready" once the hero image has decoded —
    // everything below it fades in per-image via LoadingImage.
    const img = new Image();
    img.onload = reveal;
    img.onerror = reveal;
    img.src = heroImage;

    const failsafe = setTimeout(reveal, MAX_WAIT_MS);
    return () => {
      cancelled = true;
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead path="/" />
      <LatestOriginalLightbox />
      <Navbar />
      <main className="pt-36 md:pt-28">
        {loading ? (
          <div aria-busy="true">
            <HeroSkeleton />
            <TickerSkeleton />
            <LeadStorySkeleton />
            <StoryGridSkeleton count={3} />
            <StoryGridSkeleton count={3} />
          </div>
        ) : (
          <div className="animate-fade-in">
            <HeroSection />
            <TrendingTicker />
            <LeadStory />
            <OriginalStories />
            <LatestNews />
            <FeaturedEvents />
            <FeaturedStories />
            <NewsletterSignup variant="banner" />
            <CategoryHighlights />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
