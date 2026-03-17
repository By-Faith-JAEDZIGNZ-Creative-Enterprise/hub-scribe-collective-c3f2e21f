import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingTicker from "@/components/TrendingTicker";
import LatestNews from "@/components/LatestNews";
import FeaturedStories from "@/components/FeaturedStories";
import CategoryHighlights from "@/components/CategoryHighlights";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import WelcomeLightbox from "@/components/WelcomeLightbox";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead path="/" />
      <WelcomeLightbox />
      <Navbar />
      <main className="pt-16">
        {/* 1. Lead story hero — the newest original feature */}
        <HeroSection />
        {/* 2. Trending ticker */}
        <TrendingTicker />
        {/* 3. More featured & original stories */}
        <FeaturedStories />
        {/* 4. Latest curated news */}
        <LatestNews />
        {/* 5. Newsletter CTA */}
        <NewsletterSignup variant="banner" />
        {/* 6. Category deep dives */}
        <CategoryHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;