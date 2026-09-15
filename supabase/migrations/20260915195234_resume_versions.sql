-- Resume content as versioned JSON documents.
-- Append-only: every save inserts a new row, the newest row is the current resume,
-- and a rollback inserts a copy of an older version's data.
-- The shape of `data` is validated in the app (src/lib/resume/schema.ts); `schema_version`
-- records which shape a row follows.

create table public.resume_versions (
  id bigint generated always as identity primary key,
  data jsonb not null check (jsonb_typeof(data) = 'object'),
  schema_version integer not null check (schema_version > 0),
  note text,
  created_at timestamptz not null default now(),
  created_by uuid references auth.users (id) on delete set null
);

create index resume_versions_created_by_idx on public.resume_versions (created_by);

alter table public.resume_versions enable row level security;

grant select on public.resume_versions to anon, authenticated;

create policy "Resume versions are publicly readable" on public.resume_versions
  for select to anon, authenticated
  using (true);

-- No insert, update or delete policies: through the Data API the table is read-only.
-- New versions are added from the Supabase dashboard (or a server using the secret key)
-- until the admin page adds an insert policy for the owner account.
