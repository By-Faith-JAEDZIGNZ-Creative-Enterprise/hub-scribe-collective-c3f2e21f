import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hattiesburg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hattiesburg downtown at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5 animate-fade-in-up opacity-0 delay-100">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="font-display text-xs font-medium tracking-widest text-primary/80">Your Community. Your Stories.</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[0.95] mb-6 animate-fade-in-up opacity-0 delay-200">
            The Pulse
            <br />
            <span className="text-primary">of the Hub</span>
            <br />
            City
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-in-up opacity-0 delay-300">
            Hattiesburg's independent source for local news, culture, business, and community stories that matter.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up opacity-0 delay-400">
            <Link
              to="/category/community"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              Latest Stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/category/culture"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-display text-sm font-medium tracking-wide hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Explore Culture
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default HeroSection;