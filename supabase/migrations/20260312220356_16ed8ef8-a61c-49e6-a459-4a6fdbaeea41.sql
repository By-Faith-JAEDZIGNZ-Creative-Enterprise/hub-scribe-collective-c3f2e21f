-- Create story submissions table
CREATE TABLE public.story_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  headline TEXT NOT NULL,
  details TEXT NOT NULL,
  category TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  reviewed BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE public.story_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a story
CREATE POLICY "Anyone can submit a story"
  ON public.story_submissions
  FOR INSERT
  WITH CHECK (true);

-- No public read access
CREATE POLICY "No public read access"
  ON public.story_submissions
  FOR SELECT
  USING (false);