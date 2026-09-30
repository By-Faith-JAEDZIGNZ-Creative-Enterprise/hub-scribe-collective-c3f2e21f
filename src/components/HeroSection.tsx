import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-hattiesburg.jpg";
import LoadingImage from "@/components/LoadingImage";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="relative h-[50vh] min-h-[370px] md:h-[58vh] md:min-h-[440px] max-h-[640px] flex items-end overflow-hidden rounded-xl border border-border/50 shadow-[var(--shadow-feature)]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <LoadingImage
            src={heroImage}
            alt="Hattiesburg downtown at golden hour"
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/25 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative w-full px-5 md:px-10 pb-7 md:pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3 md:mb-4 animate-fade-in-up opacity-0 delay-100">
              <div className="w-6 h-px bg-primary" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary">Your Community. Your Stories.</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.02] mb-3 md:mb-4 animate-fade-in-up opacity-0 delay-200">
              The Pulse
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-hub-electric-glow to-primary">of the Hub</span>
              City
            </h1>
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-lg mb-5 md:mb-6 leading-relaxed animate-fade-in-up opacity-0 delay-300">
              Hattiesburg's independent source for local news, culture, business, and community stories that matter.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 md:gap-3 animate-fade-in-up opacity-0 delay-400">
              <Link
                to="/category/community"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-display text-xs font-semibold whitespace-nowrap hover:bg-hub-electric-glow transition-all duration-300 active:scale-[0.98]"
              >
                Latest Stories
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/category/culture"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-5 py-2.5 rounded-md font-display text-xs font-semibold whitespace-nowrap hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 active:scale-[0.98]"
              >
                Explore Culture
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
