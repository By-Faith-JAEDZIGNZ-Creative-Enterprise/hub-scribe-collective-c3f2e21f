import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";
import {
  SITE_URL,
  fetchLatestStories,
  sendViaResend,
  renderDigestEmail,
  renderAnnouncementEmail,
} from "../_shared/newsletter-email.ts";

const BodySchema = z.object({
  mode: z.enum(["digest", "announcement"]).default("digest"),
  limit: z.number().int().min(1).max(12).default(6),
  test_to: z.string().email().optional(),
  batch_size: z.number().int().min(1).max(200).default(50),
  offset: z.number().int().min(0).default(0),
});

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Validate cron token against the backend-only config table
    const token = req.headers.get("x-cron-token") ?? "";
    const { data: configRow } = await supabase
      .from("newsletter_config")
      .select("value")
      .eq("key", "cron_token")
      .maybeSingle();

    if (!configRow || !token || token !== configRow.value) {
      return json({ error: "Unauthorized" }, 401);
    }

    const parsed = BodySchema.safeParse(await req.json().catch(() => ({})));
    if (!parsed.success) {
      return json({ error: parsed.error.flatten().fieldErrors }, 400);
    }
    const { mode, limit, test_to, batch_size, offset } = parsed.data;

    const stories = await fetchLatestStories(limit);
    if (stories.length === 0) {
      return json({ error: "No stories available from RSS feed" }, 502);
    }

    let subscribers: { id: string; email: string; first_name: string | null }[] | null;
    let totalActive = 0;

    if (test_to) {
      // Test mode: send only to the requested address, ignoring the subscriber list
      subscribers = [{ id: "test", email: test_to, first_name: null }];
      totalActive = 1;
    } else {
      const { data, error: subError, count } = await supabase
        .from("newsletter_subscribers")
        .select("id, email, first_name", { count: "exact" })
        .eq("is_active", true)
        .order("subscribed_at", { ascending: true })
        .range(offset, offset + batch_size - 1);

      if (subError) {
        console.error("Subscriber query failed:", subError);
        return json({ error: "Failed to load subscribers" }, 500);
      }
      subscribers = data;
      totalActive = count ?? (data?.length ?? 0);
    }

    const topTitle = stories[0].title;
    const subject =
      mode === "announcement"
        ? "Introducing the Hub City Digest — Hattiesburg's week, in your inbox"
        : `Hub City Digest: ${topTitle.length > 60 ? topTitle.slice(0, 57) + "…" : topTitle}`;

    const results: { email: string; ok: boolean; status: number }[] = [];

    // Send in small parallel chunks so a batch finishes well inside the edge time limit
    const list = subscribers ?? [];
    const CHUNK = 5;
    for (let i = 0; i < list.length; i += CHUNK) {
      const chunk = list.slice(i, i + CHUNK);
      const chunkResults = await Promise.all(
        chunk.map(async (sub) => {
          const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${sub.id}`;
          const html =
            mode === "announcement"
              ? renderAnnouncementEmail({ stories, firstName: sub.first_name, unsubscribeUrl })
              : renderDigestEmail({ stories, firstName: sub.first_name, unsubscribeUrl });
          try {
            const res = await sendViaResend({ to: sub.email, subject, html });
            return { email: sub.email, ok: res.ok, status: res.status };
          } catch (err) {
            console.error("Send failed:", sub.email, err);
            return { email: sub.email, ok: false, status: 0 };
          }
        })
      );
      results.push(...chunkResults);
      // Small pause between chunks to be gentle on the provider
      if (i + CHUNK < list.length) await new Promise((r) => setTimeout(r, 200));
    }

    const sent = results.filter((r) => r.ok).length;
    const failed = results.filter((r) => !r.ok);
    console.log(`Newsletter [${mode}] complete: ${sent} sent, ${failed.length} failed`);

    const processedEnd = offset + (subscribers?.length ?? 0);

    return json({
      mode,
      subject,
      storyCount: stories.length,
      sent,
      failed: failed.length,
      failures: failed,
      offset,
      processed: subscribers?.length ?? 0,
      totalActive,
      nextOffset: processedEnd < totalActive ? processedEnd : null,
    });
  } catch (err) {
    console.error("send-weekly-digest error:", err);
    return json({ error: String(err) }, 500);
  }
});
