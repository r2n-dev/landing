-- Let the site owner add resume versions from the /admin page.
-- Versions stay append-only: there are still no update or delete policies.
-- Keep the email in sync with ADMIN_EMAIL in the app environment.

grant insert on public.resume_versions to authenticated;

create policy "Owner can add resume versions" on public.resume_versions
  for insert to authenticated
  with check (
    created_by = (select auth.uid())
    and (select auth.jwt() ->> 'email') = 'andres@r2n.dev'
  );
