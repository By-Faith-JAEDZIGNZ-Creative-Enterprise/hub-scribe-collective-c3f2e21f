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

    const body = await req.json().catch(() => ({}));
    const batchSize: number = Number(body?.batch_size) > 0 ? Number(body.batch_size) : 50;
    const offset: number = Number(body?.offset) > 0 ? Number(body.offset) : 0;
    // Optional retry list: resend only to these addresses (e.g. throttled sends)
    const onlyEmails: string[] | null = Array.isArray(body?.only_emails) ? body.only_emails : null;

    let query = supabase
      .from("newsletter_subscribers")
      .select("id, email, first_name", { count: "exact" })
      .eq("is_active", true)
      .order("subscribed_at", { ascending: true });

    query = onlyEmails
      ? query.in("email", onlyEmails)
      : query.range(offset, offset + batchSize - 1);

    const { data: subscribers, error: subError, count } = await query;

    if (subError) {
      console.error("Subscriber query failed:", subError);
      return json({ error: "Failed to load subscribers" }, 500);
    }

    const totalActive = onlyEmails
      ? subscribers?.length ?? 0
      : count ?? (subscribers?.length ?? 0);


    const topTitle = newStories[0].title;
    const subject =
      newStories.length === 1
        ? `New on the Hub: ${topTitle.length > 60 ? topTitle.slice(0, 57) + "…" : topTitle}`
        : `${newStories.length} new stories just published on Hattiesburg Hub`;

    const results: { email: string; ok: boolean; status: number }[] = [];
    const list = subscribers ?? [];
    // Resend allows ~2 requests per second, so pace sends in pairs.
    const CHUNK = 2;

    for (let i = 0; i < list.length; i += CHUNK) {
      const chunk = list.slice(i, i + CHUNK);
      const chunkResults = await Promise.all(
        chunk.map(async (sub) => {
          const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${sub.id}`;
          const html = renderStoryAlertEmail({
            stories: newStories,
            firstName: sub.first_name,
            unsubscribeUrl,
          });
          for (let attempt = 0; attempt < 3; attempt++) {
            try {
              const res = await sendViaResend({ to: sub.email, subject, html });
              if (res.ok || res.status !== 429) {
                return { email: sub.email, ok: res.ok, status: res.status };
              }
              await new Promise((r) => setTimeout(r, 1200 * (attempt + 1)));
            } catch (err) {
              console.error("Send failed:", sub.email, err);
              return { email: sub.email, ok: false, status: 0 };
            }
          }
          return { email: sub.email, ok: false, status: 429 };
        })
      );
      results.push(...chunkResults);
      if (i + CHUNK < list.length) await new Promise((r) => setTimeout(r, 1100));
    }


    const processedEnd = offset + list.length;
    const nextOffset = processedEnd < totalActive ? processedEnd : null;

    // Only advance the marker once the final batch has gone out, so a chained
    // run keeps alerting on the same set of new stories.
    if (nextOffset === null && !onlyEmails) {
      await supabase
        .from("newsletter_config")
        .upsert({ key: MARKER_KEY, value: newestGuid }, { onConflict: "key" });
    }

    const sent = results.filter((r) => r.ok).length;
    const failed = results.filter((r) => !r.ok);
    console.log(
      `Story alert batch @${offset}: ${newStories.length} new stories, ${sent} sent, ${failed.length} failed`
    );

    return json({
      subject,
      newStories: newStories.map((s) => s.title),
      sent,
      failed: failed.length,
      failures: failed,
      offset,
      processed: list.length,
      totalActive,
      nextOffset,
    });

  } catch (err) {
    console.error("send-story-alert error:", err);
    return json({ error: String(err) }, 500);
  }
});
