CREATE POLICY "Backend only access" ON public.newsletter_config
  FOR ALL TO anon, authenticated
  USING (false) WITH CHECK (false);

ALTER TABLE public.newsletter_subscribers
  ADD COLUMN IF NOT EXISTS welcome_sent_at TIMESTAMPTZ;