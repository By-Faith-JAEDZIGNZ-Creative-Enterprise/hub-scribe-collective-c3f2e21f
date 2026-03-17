import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { categories } from "@/data/stories";
import logoFull from "@/assets/logo-full.png";
import logoSubmark from "@/assets/logo-submark.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={logoSubmark}
              alt="Hattiesburg Hub"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className={`glow-underline font-display text-[13px] font-medium tracking-wide transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={`glow-underline font-display text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === `/category/${cat.slug}` ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all">
              <Search className="w-4 h-4" />
            </button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50">
          <div className="px-4 py-4 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-display text-sm font-medium text-foreground hover:text-primary py-2.5 px-3 rounded-md hover:bg-muted/50 transition-all"
            >
              Home
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="font-display text-sm font-medium text-muted-foreground hover:text-primary py-2.5 px-3 rounded-md hover:bg-muted/50 transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
