CREATE TABLE public.newsletter_config (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

GRANT ALL ON public.newsletter_config TO service_role;

ALTER TABLE public.newsletter_config ENABLE ROW LEVEL SECURITY;

INSERT INTO public.newsletter_config (key, value)
VALUES ('cron_token', gen_random_uuid()::text);