import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const storySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  headline: z.string().trim().min(1, "Story headline is required").max(200),
  details: z.string().trim().min(10, "Please provide at least a brief description").max(2000),
});

interface SubmitStoryProps {
  category: string;
}

const SubmitStory = ({ category }: SubmitStoryProps) => {
  const [form, setForm] = useState({ name: "", email: "", headline: "", details: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = storySchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("story_submissions")
      .insert({
        name: result.data.name,
        email: result.data.email,
        headline: result.data.headline,
        details: result.data.details,
        category: category.toLowerCase(),
      });
    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
    toast.success("Story tip submitted! Our editors will review it.");
    setForm({ name: "", email: "", headline: "", details: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-hub-deep/60 border-t border-border/20">
      <div className="container mx-auto px-4 py-14">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Send className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Send a {category} Story
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-sm mb-8">
            Have a story tip or news to share? Submit it below and our editors will review it for publication.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                maxLength={100}
                required
                disabled={loading}
                className="px-4 py-3 bg-background/40 border border-border/40 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                maxLength={255}
                required
                disabled={loading}
                className="px-4 py-3 bg-background/40 border border-border/40 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
              />
            </div>
            <input
              type="text"
              name="headline"
              value={form.headline}
              onChange={handleChange}
              placeholder="Story headline or topic"
              maxLength={200}
              required
              disabled={loading}
              className="w-full px-4 py-3 bg-background/40 border border-border/40 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
            />
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us more about this story…"
              maxLength={2000}
              rows={4}
              required
              disabled={loading}
              className="w-full px-4 py-3 bg-background/40 border border-border/40 rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={submitted || loading}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-sm font-medium tracking-wide hover:bg-hub-electric-glow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] disabled:opacity-70"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
              ) : submitted ? (
                <><Check className="w-4 h-4" /> Submitted!</>
              ) : (
                <><Send className="w-4 h-4" /> Submit Story Tip</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmitStory;
