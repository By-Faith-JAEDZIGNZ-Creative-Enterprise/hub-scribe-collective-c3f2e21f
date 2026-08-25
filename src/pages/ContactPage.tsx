import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Megaphone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SubmitStory from "@/components/SubmitStory";

const CONTACT_EMAIL = "digest@hattiesburghub.com";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us"
        description="Contact Hattiesburg Hub — send a news tip, submit a story, or ask about advertising and sponsorships in Hattiesburg, MS and the Pine Belt."
        path="/contact"
      />
      <Navbar />
      <main className="pt-36 md:pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-8">
            Talk to the Hub.
          </h1>
          <p className="text-lg leading-[1.65] text-muted-foreground max-w-2xl mb-12">
            News tips, corrections, event listings, story ideas, and partnership inquiries —
            we want to hear from you. Every message is read by our staff.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)]"
            >
              <Mail className="w-5 h-5 text-primary mb-3" />
              <h2 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                Email the newsroom
              </h2>
              <p className="text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
            </a>
            <div id="advertise" className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 scroll-mt-32">
              <Megaphone className="w-5 h-5 text-primary mb-3" />
              <h2 className="font-display text-lg font-semibold mb-1">Advertise &amp; sponsor</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reach Hattiesburg readers with site sponsorships and newsletter placements. Email{" "}
                <a href={`mailto:${CONTACT_EMAIL}?subject=Advertising%20Inquiry`} className="text-primary story-link">
                  {CONTACT_EMAIL}
                </a>{" "}
                with “Advertising” in the subject line.
              </p>
            </div>
          </div>

          <section id="submit" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Submit a Story</h2>
            </div>
            <p className="text-muted-foreground leading-[1.65] mb-8 max-w-2xl">
              Know something happening in the Hub City? Send it our way — community submissions
              are the backbone of local journalism.
            </p>
            <SubmitStory />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
