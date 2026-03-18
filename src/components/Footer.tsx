import { Link } from "react-router-dom";
import { categories } from "@/data/stories";
import { ArrowUpRight, Mail } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import NewsletterSignup from "@/components/NewsletterSignup";

const Footer = () => {
  return (
    <footer className="relative bg-hub-deep overflow-hidden">
      {/* Multi-layer ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-4">

        {/* Hero Logo Section */}
        <div className="pt-24 pb-16 flex flex-col items-center text-center">
          <div className="relative mb-10">
            {/* Glow ring behind logo */}
            <div className="absolute inset-0 -m-8 bg-primary/[0.06] rounded-full blur-[60px] pointer-events-none" />
            <Link to="/" className="relative block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoFull}
                alt="Hattiesburg Hub"
                className="h-36 md:h-44 w-auto drop-shadow-[0_0_30px_hsl(217,91%,60%,0.15)]"
              />
            </Link>
          </div>

          <p className="font-display text-xs font-medium tracking-[0.3em] text-primary/50 uppercase mb-5">
            Independent Local Journalism
          </p>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-4 max-w-2xl">
            Stories that move{" "}
            <span className="text-primary">the Hub City</span>
          </h2>

          <p className="text-muted-foreground font-body text-sm md:text-base max-w-md mb-8 leading-relaxed">
            Hattiesburg's source for community news, culture, business, and the stories that shape our city.
          </p>

          <Link
            to="/category/community"
            className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:-translate-y-0.5"
          >
            Read Latest
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border/20 py-12">
          <div className="max-w-lg mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/15 rounded-full px-3.5 py-1.5 mb-4">
              <Mail className="w-3.5 h-3.5 text-primary/70" />
              <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-primary/70 uppercase">Weekly Digest</span>
            </div>
            <p className="text-foreground font-display text-lg font-semibold mb-1">Stay in the loop</p>
            <p className="text-muted-foreground font-body text-xs mb-5">The best of Hattiesburg, delivered to your inbox every week.</p>
            <NewsletterSignup variant="inline" />
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="border-t border-border/15 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Sections */}
            <div>
              <h4 className="font-display text-[11px] font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-4">Sections</h4>
              <ul className="space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/category/${cat.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-display text-[11px] font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-4">About</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Our Mission</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Our Team</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="font-display text-[11px] font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-4">Get Involved</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Submit a Story</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Advertise</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Sponsor</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display text-[11px] font-semibold tracking-[0.2em] text-foreground/40 uppercase mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-hub-text-dim text-[11px] font-body">
            © 2026 Hattiesburg Hub. All rights reserved.
          </p>
          <p className="text-hub-text-dim/50 text-[10px] font-body tracking-wide">
            Made with ♥ in the Hub City
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
