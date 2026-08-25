import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-[1.65]">{children}</div>
  </section>
);

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Privacy Policy"
      description="How Hattiesburg Hub collects, uses, and protects your information, including newsletter subscriptions and site analytics."
      path="/privacy"
    />
    <Navbar />
    <main className="pt-36 md:pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: August 2026</p>

        <Section title="Information we collect">
          <p>
            When you subscribe to the Hattiesburg Hub newsletter or submit a story, we collect the
            information you provide directly — typically your name and email address. We also
            collect standard usage data through Google Analytics (such as pages visited and
            approximate location) to understand how readers use the site.
          </p>
        </Section>

        <Section title="How we use your information">
          <p>
            We use your email address to send the newsletters and story alerts you signed up for,
            and to respond to story submissions and inquiries. Analytics data is used in aggregate
            to improve our coverage and the site experience.
          </p>
        </Section>

        <Section title="What we never do">
          <p>
            We do not sell, rent, or share your personal information with third parties for their
            marketing purposes. Subscriber data is processed only by the service providers that
            operate our newsletter and website infrastructure.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            Every newsletter email includes a one-click unsubscribe link. You can also email{" "}
            <a href="mailto:digest@hattiesburghub.com" className="text-primary story-link">
              digest@hattiesburghub.com
            </a>{" "}
            at any time to update or remove your information.
          </p>
        </Section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
