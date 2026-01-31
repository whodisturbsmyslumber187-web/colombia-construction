-- Add a restrictive SELECT policy to prevent public reading of lead data
-- Since this is a marketing site without user authentication, we deny all SELECT access
-- Lead data should only be accessed through a secure admin interface or edge function
CREATE POLICY "No public read access to leads"
ON public.leads
FOR SELECT
USING (false);