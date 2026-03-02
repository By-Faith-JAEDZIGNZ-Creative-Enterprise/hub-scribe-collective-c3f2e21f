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
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4 animate-fade-in-up opacity-0 delay-100">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="category-badge text-primary">Your Community. Your Stories.</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] mb-6 animate-fade-in-up opacity-0 delay-200">
            THE PULSE<br />
            <span className="text-primary">OF THE HUB</span><br />
            CITY
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-in-up opacity-0 delay-300">
            Hattiesburg's independent source for local news, culture, business, and community stories that matter.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-400">
            <Link
              to="/category/community"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-display text-sm tracking-widest hover:bg-hub-gold-glow transition-colors"
            >
              LATEST STORIES
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/category/culture"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 font-display text-sm tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              EXPLORE CULTURE
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative geometric element */}
      <div className="absolute top-20 right-8 hidden lg:block opacity-20">
        <div className="w-32 h-32 border border-primary rotate-45" />
        <div className="w-20 h-20 border border-primary rotate-45 -mt-6 ml-6" />
      </div>
    </section>
  );
};

export default HeroSection;
