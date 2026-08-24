import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";
import { SITE_URL, sendViaResend, renderWelcomeEmail } from "../_shared/newsletter-email.ts";

const BodySchema = z.object({
  email: z.string().trim().email().max(255),
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
    const parsed = BodySchema.safeParse(await req.json().catch(() => ({})));
    if (!parsed.success) {
      return json({ error: "Invalid email address" }, 400);
    }
    const email = parsed.data.email.toLowerCase();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Only send to known, active subscribers who haven't been welcomed yet
    const { data: subscriber, error: fetchError } = await supabase
      .from("newsletter_subscribers")
      .select("id, first_name, is_active, welcome_sent_at")
      .ilike("email", email)
      .maybeSingle();

    if (fetchError) {
      console.error("Welcome lookup failed:", fetchError);
      return json({ error: "Something went wrong" }, 500);
    }
    if (!subscriber || !subscriber.is_active) {
      return json({ sent: false, reason: "not_subscribed" });
    }
    if (subscriber.welcome_sent_at) {
      return json({ sent: false, reason: "already_welcomed" });
    }

    const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${subscriber.id}`;
    const html = renderWelcomeEmail({ firstName: subscriber.first_name, unsubscribeUrl });

    const res = await sendViaResend({
      to: email,
      subject: "Welcome to the Hub City Digest",
      html,
    });

    if (!res.ok) {
      return json(
        { error: "Provider request failed", status: res.status, details: res.error },
        res.status
      );
    }

    await supabase
      .from("newsletter_subscribers")
      .update({ welcome_sent_at: new Date().toISOString() })
      .eq("id", subscriber.id);

    return json({ sent: true });
  } catch (err) {
    console.error("newsletter-welcome error:", err);
    return json({ error: String(err) }, 500);
  }
});
