-- Email capture for landing page waitlist/newsletter
create table public.email_captures (
  id uuid default uuid_generate_v4() primary key,
  email text not null unique,
  source text default 'landing',
  created_at timestamptz default now()
);

-- Allow anonymous inserts (no auth required for email capture)
alter table public.email_captures enable row level security;
create policy "Anyone can insert email" on public.email_captures
  for insert with check (true);
-- Only authenticated admins can read (we'll use Supabase dashboard to view)
