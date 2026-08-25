import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import SEOHead from "@/components/SEOHead";
import { stories } from "@/data/stories";

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const [input, setInput] = useState(q);

  useEffect(() => {
    setInput(q);
  }, [q]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return stories.filter((s) =>
      [s.title, s.excerpt, s.author, s.category].some((field) =>
        field?.toLowerCase().includes(needle)
      )
    );
  }, [q]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = input.trim();
    setParams(next ? { q: next } : {});
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={q ? `Search: ${q}` : "Search"} path="/search" />
      <Navbar />
      <main className="pt-36 md:pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Header + search field */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-5">
              <SearchIcon className="w-4 h-4 text-primary" />
              <span className="font-display text-xs font-bold tracking-widest text-primary uppercase">
                Search the Hub
              </span>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <form
              onSubmit={submit}
              className="flex items-center gap-2 bg-card/60 border border-border/40 rounded-2xl pl-4 pr-2 h-12 md:h-14 focus-within:border-primary/50 transition-colors"
            >
              <SearchIcon className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search stories, authors, topics…"
                aria-label="Search stories"
                className="flex-1 min-w-0 bg-transparent font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-display text-xs font-bold uppercase tracking-widest hover:bg-hub-electric-glow transition-colors"
              >
                Search
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Results */}
          {q.trim() ? (
            <>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {results.length} {results.length === 1 ? "result" : "results"} for{" "}
                <span className="text-foreground font-semibold">“{q.trim()}”</span>
              </p>
              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {results.map((story) => (
                    <StoryCard key={story.id} story={story} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 border border-dashed border-border/40 rounded-2xl">
                  <p className="font-display text-lg font-semibold text-foreground mb-2">
                    Nothing found
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Try a different keyword, topic, or author name.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 border border-dashed border-border/40 rounded-2xl">
              <p className="font-display text-lg font-semibold text-foreground mb-2">
                What are you looking for?
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Search across every story on the Hub — originals and curated coverage.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
