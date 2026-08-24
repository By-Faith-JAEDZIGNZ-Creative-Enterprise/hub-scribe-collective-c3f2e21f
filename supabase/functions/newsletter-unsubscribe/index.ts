import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const BodySchema = z.object({
  token: z.string().uuid("Invalid unsubscribe link"),
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
      return json({ error: "Invalid unsubscribe link" }, 400);
    }
    const { token } = parsed.data;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: subscriber, error: fetchError } = await supabase
      .from("newsletter_subscribers")
      .select("id, is_active")
      .eq("id", token)
      .maybeSingle();

    if (fetchError) {
      console.error("Unsubscribe lookup failed:", fetchError);
      return json({ error: "Something went wrong" }, 500);
    }
    if (!subscriber) {
      return json({ status: "not_found" }, 404);
    }
    if (!subscriber.is_active) {
      return json({ status: "already_unsubscribed" });
    }

    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({ is_active: false })
      .eq("id", token);

    if (updateError) {
      console.error("Unsubscribe update failed:", updateError);
      return json({ error: "Something went wrong" }, 500);
    }

    return json({ status: "unsubscribed" });
  } catch (err) {
    console.error("newsletter-unsubscribe error:", err);
    return json({ error: String(err) }, 500);
  }
});
