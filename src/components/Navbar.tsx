import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { categories } from "@/data/stories";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-display text-primary-foreground text-lg font-bold leading-none">H</span>
            </div>
            <div className="font-display text-xl font-bold tracking-wider">
              <span className="text-primary">HATTIESBURG</span>
              <span className="text-foreground ml-1">HUB</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`gold-underline font-display text-sm tracking-widest transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              HOME
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className={`gold-underline font-display text-sm tracking-widest transition-colors ${
                  location.pathname === `/category/${cat.slug}` ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {cat.name.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-display text-sm tracking-widest text-foreground hover:text-primary py-2"
            >
              HOME
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="font-display text-sm tracking-widest text-foreground hover:text-primary py-2"
              >
                {cat.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
