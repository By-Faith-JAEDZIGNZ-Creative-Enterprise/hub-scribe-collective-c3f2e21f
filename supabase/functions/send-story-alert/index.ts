import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import {
  SITE_URL,
  fetchLatestStories,
  sendViaResend,
  renderStoryAlertEmail,
} from "../_shared/newsletter-email.ts";

const MARKER_KEY = "last_alerted_guid";
const MAX_ALERT_STORIES = 3;

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

    const stories = await fetchLatestStories(10);
    if (stories.length === 0) {
      return json({ error: "No stories available from RSS feed" }, 502);
    }

    const { data: markerRow } = await supabase
      .from("newsletter_config")
      .select("value")
      .eq("key", MARKER_KEY)
      .maybeSingle();

    const newestGuid = stories[0].guid || stories[0].link;

    // First run: initialize the marker without sending anything, so we never
    // blast an alert for stories that were published before this system existed.
    if (!markerRow) {
      await supabase
        .from("newsletter_config")
        .upsert({ key: MARKER_KEY, value: newestGuid }, { onConflict: "key" });
      console.log(`Story alert initialized at: ${newestGuid}`);
      return json({ initialized: true, sent: 0 });
    }

    const lastGuid = markerRow.value;
    const markerIndex = stories.findIndex((s) => (s.guid || s.link) === lastGuid);

    // Items above the marker are new. If the marker fell out of the feed,
    // alert only on the single newest story.
    let newStories =
      markerIndex > 0 ? stories.slice(0, markerIndex) : markerIndex === -1 ? [stories[0]] : [];

    if (newStories.length === 0) {
      return json({ sent: 0, reason: "no_new_stories" });
    }

    newStories = newStories.slice(0, MAX_ALERT_STORIES);

    const { data: subscribers, error: subError } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, first_name")
      .eq("is_active", true);

    if (subError) {
      console.error("Subscriber query failed:", subError);
      return json({ error: "Failed to load subscribers" }, 500);
    }

    const topTitle = newStories[0].title;
    const subject =
      newStories.length === 1
        ? `New on the Hub: ${topTitle.length > 60 ? topTitle.slice(0, 57) + "…" : topTitle}`
        : `${newStories.length} new stories just published on Hattiesburg Hub`;

    const results: { email: string; ok: boolean; status: number }[] = [];

    for (const sub of subscribers ?? []) {
      const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${sub.id}`;
      const html = renderStoryAlertEmail({
        stories: newStories,
        firstName: sub.first_name,
        unsubscribeUrl,
      });

      const res = await sendViaResend({ to: sub.email, subject, html });
      results.push({ email: sub.email, ok: res.ok, status: res.status });

      // Small pause between sends to be gentle on the provider
      await new Promise((r) => setTimeout(r, 300));
    }

    // Advance the marker to the newest story regardless of individual send
    // failures, so one bad run doesn't re-alert forever.
    await supabase
      .from("newsletter_config")
      .upsert({ key: MARKER_KEY, value: newestGuid }, { onConflict: "key" });

    const sent = results.filter((r) => r.ok).length;
    const failed = results.filter((r) => !r.ok);
    console.log(
      `Story alert complete: ${newStories.length} new stories, ${sent} sent, ${failed.length} failed`
    );

    return json({
      subject,
      newStories: newStories.map((s) => s.title),
      sent,
      failed: failed.length,
      failures: failed,
    });
  } catch (err) {
    console.error("send-story-alert error:", err);
    return json({ error: String(err) }, 500);
  }
});
