DROP POLICY IF EXISTS "Anyone can submit a story" ON public.story_submissions;
CREATE POLICY "Anyone can submit a valid story" ON public.story_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  reviewed = false
  AND length(btrim(name)) BETWEEN 1 AND 100
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(headline)) BETWEEN 1 AND 300
  AND length(btrim(details)) BETWEEN 1 AND 10000
  AND length(btrim(category)) BETWEEN 1 AND 100
);

DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;
CREATE POLICY "Anyone can subscribe with valid details" ON public.newsletter_subscribers
FOR INSERT TO anon, authenticated
WITH CHECK (
  is_active = true
  AND welcome_sent_at IS NULL
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (first_name IS NULL OR length(first_name) <= 100)
  AND (last_name IS NULL OR length(last_name) <= 100)
  AND (phone_number IS NULL OR length(phone_number) <= 30)
);