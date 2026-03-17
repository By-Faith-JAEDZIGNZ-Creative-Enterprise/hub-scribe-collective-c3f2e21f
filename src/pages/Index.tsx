import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadStory from "@/components/LeadStory";
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
        <HeroSection />
        <TrendingTicker />
        <LeadStory />
        <LatestNews />
        <FeaturedStories />
        <NewsletterSignup variant="banner" />
        <CategoryHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Index;