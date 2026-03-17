import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, Newspaper } from "lucide-react";
import logoSubmark from "@/assets/logo-submark.png";

const WelcomeLightbox = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("welcome-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem("welcome-dismissed", "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" onClick={dismiss}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm animate-fade-in-up" style={{ animationDuration: "0.3s" }} />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-sm bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-primary/[0.08] rounded-full blur-[80px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative px-6 pt-8 pb-6 flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logoSubmark} alt="Hattiesburg Hub" className="h-20 w-auto mb-5" />

          <div className="inline-flex items-center gap-1.5 bg-primary/[0.08] border border-primary/15 rounded-full px-3 py-1 mb-4">
            <Newspaper className="w-3 h-3 text-primary/70" />
            <span className="font-display text-[9px] font-semibold tracking-[0.2em] text-primary/70 uppercase">
              Welcome
            </span>
          </div>

          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-2">
            Welcome to{" "}
            <span className="text-primary">Hattiesburg Hub</span>
          </h2>

          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 max-w-xs">
            Your source for local news, culture, and community stories. Sign up to stay in the loop.
          </p>

          <Link
            to="/signup"
            onClick={dismiss}
            className="w-full bg-primary text-primary-foreground rounded-lg py-3 font-display text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] flex items-center justify-center gap-2"
          >
            Sign Up for Updates
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={dismiss}
            className="mt-3 text-muted-foreground/60 font-body text-xs hover:text-muted-foreground transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLightbox;
