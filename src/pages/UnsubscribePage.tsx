import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MailX, Check, Loader2, AlertCircle, Facebook } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { FunctionsHttpError } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Status = "confirm" | "loading" | "unsubscribed" | "already" | "error";

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>(token ? "confirm" : "error");

  const handleUnsubscribe = async () => {
    if (!token) return;
    setStatus("loading");
    const { data, error } = await supabase.functions.invoke("newsletter-unsubscribe", {
      body: { token },
    });

    if (error) {
      if (error instanceof FunctionsHttpError) {
        const details = await error.context.json().catch(() => null);
        if (details?.status === "not_found") {
          setStatus("error");
          return;
        }
      }
      setStatus("error");
      return;
    }

    if (data?.status === "already_unsubscribed") {
      setStatus("already");
    } else if (data?.status === "unsubscribed") {
      setStatus("unsubscribed");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="relative max-w-md w-full">
          {/* Ambient glow */}
          <div className="absolute inset-0 -m-8 bg-primary/[0.06] rounded-full blur-[60px] pointer-events-none" />

          <div className="relative bg-hub-deep/60 border border-border/30 rounded-2xl p-8 md:p-10 text-center backdrop-blur-sm">
            {status === "confirm" && (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-5">
                  <MailX className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground mb-3">
                  Unsubscribe from the Hub City Digest?
                </h1>
                <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
                  You'll stop receiving our weekly newsletter. We'll miss you — but no hard feelings.
                </p>
                <button
                  onClick={handleUnsubscribe}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  Yes, unsubscribe me
                </button>
                <Link
                  to="/"
                  className="block mt-4 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
                >
                  Never mind, take me back
                </Link>
              </>
            )}

            {status === "loading" && (
              <>
                <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground font-body text-sm">Updating your preferences…</p>
              </>
            )}

            {status === "unsubscribed" && (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-5">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground mb-3">
                  You've been unsubscribed
                </h1>
                <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
                  You won't receive the Hub City Digest anymore. You can still read every story on the site — and if you change your mind, resubscribing takes ten seconds.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/"
                    className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  >
                    Back to the Hub
                  </Link>
                  <a
                    href="https://www.facebook.com/hattiesburghub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full border border-border/40 text-foreground px-6 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                    Follow us on Facebook instead
                  </a>
                </div>
              </>
            )}

            {status === "already" && (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-5">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground mb-3">
                  Already unsubscribed
                </h1>
                <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
                  This address is already off the list — no further action needed.
                </p>
                <Link
                  to="/"
                  className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300"
                >
                  Back to the Hub
                </Link>
              </>
            )}

            {status === "error" && (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-destructive/10 border border-destructive/20 mb-5">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground mb-3">
                  Something went wrong
                </h1>
                <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed">
                  This unsubscribe link appears to be invalid or expired. If you keep receiving emails, reply to any newsletter and we'll remove you manually.
                </p>
                <Link
                  to="/"
                  className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300"
                >
                  Back to the Hub
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnsubscribePage;
