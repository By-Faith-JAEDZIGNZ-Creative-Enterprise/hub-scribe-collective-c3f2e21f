import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Newspaper, Users, MapPin, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { categories } from "@/data/stories";

const AboutPage = () => {
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
        title="About Us"
        description="Hattiesburg Hub is an independent, locally run news publication covering community, business, culture, sports, and events in Hattiesburg, MS and the Pine Belt."
        path="/about"
      />
      <Navbar />
      <main className="pt-36 md:pt-28 pb-20">
        {/* Mission */}
        <section id="mission" className="container mx-auto px-4 max-w-4xl scroll-mt-32">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">Our Mission</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-8">
            Keeping the Hub City informed, connected, and proud.
          </h1>
          <div className="space-y-6 text-lg leading-[1.65] text-muted-foreground">
            <p>
              Hattiesburg Hub is an independent, hyper-local news publication for Hattiesburg,
              Mississippi and the surrounding Pine Belt — including Forrest and Lamar counties.
              We exist to cover the stories that shape daily life here: city government and
              neighborhood news, local business and development, arts and culture, high school
              and Southern Miss athletics, and the events that bring this community together.
            </p>
            <p>
              Alongside original reporting from our staff, we curate the most important stories
              from trusted regional outlets — including WJTV, WDAM, and The Pine Belt News —
              always with full credit and a direct link to the original source, so readers never
              miss the news that matters to the Hub City.
            </p>
          </div>
        </section>

        {/* What we cover */}
        <section className="container mx-auto px-4 max-w-4xl mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">What We Cover</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.12)]"
              >
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.slug === "community" && "Neighborhood news, city government, education, and the people of the Pine Belt."}
                  {cat.slug === "business" && "Local business openings, development projects, and the Hub City economy."}
                  {cat.slug === "culture" && "Arts, music, food, faith, and the traditions that make Hattiesburg home."}
                  {cat.slug === "sports" && "Southern Miss, high school, and community sports across the Pine Belt."}
                  {cat.slug === "opinion" && "Editorials and community voices on the issues facing Hattiesburg."}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="container mx-auto px-4 max-w-4xl mt-20 scroll-mt-32">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Our Team</h2>
          </div>
          <div className="rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8 space-y-5 text-muted-foreground leading-[1.65]">
            <p>
              Hattiesburg Hub is independently owned and operated right here in Hattiesburg.
              Stories are reported and written by the Hattiesburg Hub staff, with contributions
              from community members who know this city best.
            </p>
            <p>
              Have a tip, a correction, or a story the Hub should tell?{" "}
              <Link to="/contact" className="text-primary story-link">Get in touch</Link> — we
              read every submission.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Hattiesburg, Mississippi
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" /> Independent &amp; locally owned
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
