import { Link } from "react-router-dom";
import { categories } from "@/data/stories";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-hub-deep overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-4">
        {/* Top: Large CTA area */}
        <div className="py-20 border-b border-border/30 text-center">
          <p className="font-display text-xs font-medium tracking-widest text-primary/60 mb-4">Stay Connected</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Stories that move<br />
            <span className="text-primary">the Hub City</span>
          </h2>
          <div className="flex justify-center gap-3">
            <Link
              to="/category/community"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              Read Latest
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom: Compact link grid */}
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="font-display text-primary text-sm font-bold leading-none">H</span>
            </div>
            <span className="font-display text-sm font-semibold tracking-tight">
              <span className="text-primary">Hattiesburg</span>
              <span className="text-foreground/70 ml-1">Hub</span>
            </span>
          </div>

          {/* Section links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-xs"
              >
                {cat.name}
              </Link>
            ))}
            <span className="hidden md:inline text-border/30">|</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-xs">Contact</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-xs">Advertise</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-xs">Submit a Story</a>
          </div>

          {/* Copyright */}
          <p className="text-hub-text-dim text-[11px] font-body whitespace-nowrap">
            © 2026 Hattiesburg Hub
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
