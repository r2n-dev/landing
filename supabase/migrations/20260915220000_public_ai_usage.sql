-- Best-effort per-IP rate limiting for the public "ask about me" chat and job-match tool.
-- Not a security boundary (the ip_hash comes from a spoofable header) -- just cost containment
-- for a low-traffic personal site. Rows are never read back by clients; only the
-- check_and_record_usage() function touches this table.

create table public.public_ai_usage (
  id bigint generated always as identity primary key,
  ip_hash text not null,
  feature text not null check (feature in ('chat', 'job_match')),
  created_at timestamptz not null default now()
);

create index public_ai_usage_lookup_idx on public.public_ai_usage (ip_hash, feature, created_at);

alter table public.public_ai_usage enable row level security;
-- No select/insert policies: the table is only touched through the security-definer
-- function below, so anon/authenticated get no direct access to it.

-- Atomically checks whether ip_hash has made fewer than p_limit calls to p_feature within
-- p_window, and if so records this call. An advisory lock keyed on (ip_hash, feature) makes
-- the check-then-insert race-free against concurrent requests from the same visitor.
create function public.check_and_record_usage(
  p_ip_hash text,
  p_feature text,
  p_limit integer,
  p_window interval
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_count integer;
begin
  perform pg_advisory_xact_lock(hashtextextended(p_ip_hash || ':' || p_feature, 0));

  select count(*) into current_count
  from public.public_ai_usage
  where ip_hash = p_ip_hash
    and feature = p_feature
    and created_at > now() - p_window;

  if current_count >= p_limit then
    return false;
  end if;

  insert into public.public_ai_usage (ip_hash, feature) values (p_ip_hash, p_feature);
  return true;
end;
$$;

grant execute on function public.check_and_record_usage(text, text, integer, interval) to anon, authenticated;
