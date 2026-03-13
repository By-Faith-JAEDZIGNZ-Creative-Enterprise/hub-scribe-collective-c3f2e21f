import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, CheckCircle, Sparkles, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import logoFull from "@/assets/logo-full.png";
import SEOHead from "@/components/SEOHead";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email && !phone) {
      toast({ title: "Please enter an email or phone number", variant: "destructive" });
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }

    if (phone && !/^\+?[\d\s\-().]{7,20}$/.test(phone)) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email: email || `phone-only-${Date.now()}@placeholder.local`,
        phone_number: phone || null,
        first_name: firstName.trim() || null,
        last_name: lastName.trim() || null,
      });

      if (error) {
        if (error.code === "23505") {
          toast({ title: "You're already signed up!", description: "We've got you covered." });
          setDone(true);
        } else {
          throw error;
        }
      } else {
        setDone(true);
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-4">
      <SEOHead title="Sign Up for Updates" description="Subscribe to Hattiesburg Hub for the latest local news, culture, and community stories." path="/signup" />
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
        {/* Logo */}
        <Link to="/" className="mb-10">
          <img src={logoFull} alt="Hattiesburg Hub" className="h-16 md:h-20 w-auto" />
        </Link>

        {done ? (
          <div className="animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              You're in!
            </h1>
            <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed max-w-xs mx-auto">
              We'll keep you posted on the latest from the Hub City. Stay tuned.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-display text-sm font-medium hover:underline"
            >
              Explore stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="animate-fade-in-up w-full">
            <div className="inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/15 rounded-full px-3.5 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary/70" />
              <span className="font-display text-[10px] font-semibold tracking-[0.2em] text-primary/70 uppercase">
                Coming Soon
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
              Stay connected to{" "}
              <span className="text-primary">the Hub City</span>
            </h1>

            <p className="text-muted-foreground font-body text-sm md:text-base mb-8 leading-relaxed max-w-sm mx-auto">
              Sign up to receive updates on the stories, events, and news shaping Hattiesburg.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    maxLength={100}
                    className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    maxLength={100}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground rounded-lg py-3.5 font-display text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitting ? "Signing up…" : "Get Updates"}
                {!submitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            <p className="text-muted-foreground/60 font-body text-[11px] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
