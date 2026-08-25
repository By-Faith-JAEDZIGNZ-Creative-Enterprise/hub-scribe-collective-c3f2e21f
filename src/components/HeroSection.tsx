import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hattiesburg.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="relative h-[58vh] min-h-[400px] md:h-[68vh] md:min-h-[480px] max-h-[760px] flex items-end overflow-hidden rounded-3xl md:rounded-[2rem] border border-border/40 shadow-[0_24px_64px_-24px_hsl(var(--foreground)/0.25)]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hattiesburg downtown at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/35 to-transparent" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="relative w-full px-6 md:px-14 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5 animate-fade-in-up opacity-0 delay-100">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Your Community. Your Stories.</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[0.9] tracking-[-0.03em] mb-6 animate-fade-in-up opacity-0 delay-200">
              The Pulse
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hub-electric-glow">of the Hub</span>
              <br />
              City
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-in-up opacity-0 delay-300">
              Hattiesburg's independent source for local news, culture, business, and community stories that matter.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up opacity-0 delay-400">
              <Link
                to="/category/community"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] active:scale-[0.98]"
              >
                Latest Stories
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/category/culture"
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-xl font-display text-sm font-medium tracking-wide hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 active:scale-[0.98]"
              >
                Explore Culture
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;
