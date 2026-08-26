import { useState } from "react";
import { Mail, ArrowRight, Check, Loader2, User } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email" }).max(255);

interface NewsletterSignupProps {
  variant?: "inline" | "banner" | "editorial";
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

    if (error) {
      if (error.code === "23505") {
        // Existing row — may have been unsubscribed. Reactivate server-side.
        try {
          await supabase.functions.invoke("newsletter-welcome", {
            body: { email: result.data },
          });
        } catch (err) {
          console.error("Resubscribe error:", err);
        }
        setLoading(false);
        toast.success("You're subscribed! Welcome back to the Hub.");
        setEmail("");
        setFirstName("");
        setLastName("");
        return;
      }
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
      return;
    }

    // Send the in-house welcome email (non-blocking — subscription already saved)
    try {
      await supabase.functions.invoke("newsletter-welcome", {
        body: { email: result.data },
      });
    } catch (err) {
      console.error("Welcome email error:", err);
    }

    setLoading(false);

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
                  aria-label={submitted ? "Subscribed" : "Subscribe"}
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

  // Editorial variant (footer) — ink card on the ivory band, underline inputs
  const underlineInput =
    "bg-transparent border-b border-footer-ivory/30 py-3 px-1 font-footer text-sm text-footer-ivory placeholder:text-footer-ivory/40 focus:outline-none focus:border-footer-ivory transition-colors disabled:opacity-50";

  return (
    <div className="bg-footer-ink text-footer-ivory p-8 md:p-10">
      <h3 className="font-display text-2xl font-bold tracking-tight mb-2">Weekly Digest</h3>
      <p className="font-footer text-sm text-footer-ivory/50 mb-8">
        The best of Hattiesburg, delivered to your inbox every week.
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          aria-label="First name"
          maxLength={100}
          disabled={loading}
          className={underlineInput}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          aria-label="Last name"
          maxLength={100}
          disabled={loading}
          className={underlineInput}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          aria-label="Email address"
          maxLength={255}
          required
          disabled={loading}
          className={`${underlineInput} md:col-span-2`}
        />
        <button
          type="submit"
          disabled={submitted || loading}
          className="md:col-span-2 mt-4 inline-flex items-center justify-center gap-2 border border-footer-ivory py-4 font-footer font-bold uppercase tracking-widest text-xs hover:bg-footer-ivory hover:text-footer-ink transition-all duration-300 disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : submitted ? (
            <>
              <Check className="w-4 h-4" /> Subscribed
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
