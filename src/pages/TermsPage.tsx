import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3">{title}</h2>
    <div className="space-y-4 text-muted-foreground leading-[1.65]">{children}</div>
  </section>
);

const TermsPage = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Terms of Use"
      description="Terms of use for Hattiesburg Hub, covering original content, curated stories, submissions, and acceptable use of the site."
      path="/terms"
    />
    <Navbar />
    <main className="pt-36 md:pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Legal</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] mb-4">
          Terms of Use
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: August 2026</p>

        <Section title="Using this site">
          <p>
            By accessing Hattiesburg Hub, you agree to use the site for lawful, personal,
            non-commercial purposes. You may share links to our stories freely — in fact, we
            encourage it.
          </p>
        </Section>

        <Section title="Original content">
          <p>
            Original articles, photography credits, and design on this site are the property of
            Hattiesburg Hub or their credited creators and may not be republished in full without
            permission. Brief excerpts with clear attribution and a link back are welcome.
          </p>
        </Section>

        <Section title="Curated stories">
          <p>
            Stories marked as curated summarize and link to reporting from third-party outlets
            such as WJTV, WDAM, and The Pine Belt News. Copyright for those stories remains with
            the original publisher, and we always credit and link to the source.
          </p>
        </Section>

        <Section title="Story submissions">
          <p>
            By submitting a story tip, photo, or announcement, you confirm you have the right to
            share it and grant Hattiesburg Hub permission to review, edit, and publish it with
            attribution. We may decline any submission at our discretion.
          </p>
        </Section>

        <Section title="Accuracy and corrections">
          <p>
            We work hard to get the facts right. If you spot an error, contact us at{" "}
            <a href="mailto:digest@hattiesburghub.com" className="text-primary story-link">
              digest@hattiesburghub.com
            </a>{" "}
            and we will review it promptly.
          </p>
        </Section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
