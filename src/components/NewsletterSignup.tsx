import { useState } from "react";
import { Mail, ArrowRight, Check, Loader2, User } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email" }).max(255);

interface NewsletterSignupProps {
  variant?: "inline" | "banner";
}

const NewsletterSignup = ({ variant = "inline" }: NewsletterSignupProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: result.data,
        first_name: firstName.trim() || null,
        last_name: lastName.trim() || null,
      });

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast.info("You're already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }

    setSubmitted(true);
    toast.success("You're on the list! Welcome to the Hub.");
    setEmail("");
    setFirstName("");
    setLastName("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (variant === "banner") {
    return (
      <section className="relative bg-hub-deep/80 border-y border-border/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="relative container mx-auto px-4 py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="font-display text-[11px] font-medium tracking-wider text-primary">Newsletter</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Get the Hub City Digest
              </h3>
              <p className="text-muted-foreground font-body text-sm max-w-md">
                The stories that matter, delivered weekly. No spam, unsubscribe anytime.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 w-full max-w-md space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  maxLength={100}
                  disabled={loading}
                  className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  maxLength={100}
                  disabled={loading}
                  className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    maxLength={255}
                    required
                    disabled={loading}
                    className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/50 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted || loading}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] disabled:opacity-70"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : submitted ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Inline variant (for footer)
  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-sm mx-auto">
      <p className="font-body text-xs text-muted-foreground mb-3">Get weekly stories in your inbox</p>
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            maxLength={100}
            disabled={loading}
            className="flex-1 px-4 py-2.5 bg-background/30 border border-border/30 rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            maxLength={100}
            disabled={loading}
            className="flex-1 px-4 py-2.5 bg-background/30 border border-border/30 rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            maxLength={255}
            required
            disabled={loading}
            className="flex-1 px-4 py-2.5 bg-background/30 border border-border/30 rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={submitted || loading}
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-md font-display text-xs font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : submitted ? <Check className="w-3.5 h-3.5" /> : "Subscribe"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewsletterSignup;
