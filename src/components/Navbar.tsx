import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { categories } from "@/data/stories";
import logoSubmark from "@/assets/logo-submark.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setMobileOpen(false);
    setSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3 md:px-4">
      <div className="container mx-auto">
        <div className="glass rounded-2xl border border-border/40 shadow-[0_8px_32px_-8px_hsl(var(--foreground)/0.15)] overflow-hidden">
          <div className="flex items-center justify-between h-14 md:h-16 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoSubmark}
                alt="Hattiesburg Hub"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              <Link
                to="/"
                className={`glow-underline font-display text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === "/" ? "active text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className={`glow-underline font-display text-[13px] font-medium tracking-wide transition-colors ${
                    location.pathname === `/category/${cat.slug}` ? "active text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                to="/events"
                className={`glow-underline font-display text-[13px] font-medium tracking-wide transition-colors ${
                  location.pathname === "/events" ? "active text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Events
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Live indicator */}
              <div className="hidden lg:flex items-center gap-2 pr-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Live</span>
              </div>

              {/* Desktop search — expands in place */}
              {searchOpen ? (
                <form
                  onSubmit={submitSearch}
                  className="hidden md:flex items-center gap-2 bg-muted/50 border border-border/40 rounded-full pl-3 pr-1.5 h-9 w-60"
                >
                  <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the Hub…"
                    aria-label="Search stories"
                    className="flex-1 min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => { setSearchOpen(false); setQuery(""); }}
                    aria-label="Close search"
                    className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="hidden md:flex p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}

              <button
                className="md:hidden p-2 text-foreground"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile search — always visible */}
          <div className="md:hidden border-t border-border/40 px-3 py-2">
            <form
              onSubmit={submitSearch}
              className="flex items-center gap-2 bg-muted/50 border border-border/40 rounded-full pl-3 pr-1.5 h-9"
            >
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the Hub…"
                aria-label="Search stories"
                className="flex-1 min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query.trim() && (
                <button
                  type="submit"
                  aria-label="Search"
                  className="p-1.5 rounded-full bg-primary text-primary-foreground"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
          </div>

          {/* Mobile Menu — expands inside the glass pill */}
          {mobileOpen && (
            <div className="md:hidden border-t border-border/50">
              <div className="px-4 py-3 flex flex-col gap-0.5">
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
                <Link
                  to="/events"
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-sm font-medium text-muted-foreground hover:text-primary py-2.5 px-3 rounded-md hover:bg-muted/50 transition-all"
                >
                  Events
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
