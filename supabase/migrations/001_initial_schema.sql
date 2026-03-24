-- ============================================
-- Daily Meal Planner - Initial Schema
-- Run this in Supabase SQL Editor
-- ============================================

create extension if not exists "uuid-ossp";

-- ============================================
-- PROFILES (extends Supabase auth.users)
-- ============================================
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================
-- CALCULATOR SETTINGS (per user)
-- ============================================
create table public.calculator_settings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null unique,
  gender char(1) not null default 'f' check (gender in ('f','m')),
  age int not null default 64,
  weight_kg numeric(5,1) not null default 75,
  height_cm numeric(5,1) not null default 165,
  activity_level numeric(4,3) not null default 1.55,
  unit_system text not null default 'metric' check (unit_system in ('metric','imperial')),
  target_calories int,
  tdee int,
  bmi numeric(4,1),
  updated_at timestamptz default now()
);

alter table public.calculator_settings enable row level security;
create policy "Users own their calculator_settings" on public.calculator_settings
  for all using (auth.uid() = user_id);

-- ============================================
-- DAILY TRACKING (one row per user per date)
-- ============================================
create table public.daily_tracking (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  track_date date not null default current_date,
  meals_done jsonb not null default '{}',
  water_glasses jsonb not null default '[false,false,false,false,false,false,false,false]',
  shot_done boolean not null default false,
  exercise_done boolean not null default false,
  shopping_checked jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, track_date)
);

alter table public.daily_tracking enable row level security;
create policy "Users own their daily_tracking" on public.daily_tracking
  for all using (auth.uid() = user_id);

-- ============================================
-- WEIGHT LOG (for trend chart)
-- ============================================
create table public.weight_log (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  log_date date not null default current_date,
  weight_kg numeric(5,1) not null,
  created_at timestamptz default now(),
  unique(user_id, log_date)
);

alter table public.weight_log enable row level security;
create policy "Users own their weight_log" on public.weight_log
  for all using (auth.uid() = user_id);

-- ============================================
-- INDEXES
-- ============================================
create index idx_daily_tracking_user_date on public.daily_tracking(user_id, track_date);
create index idx_weight_log_user_date on public.weight_log(user_id, log_date);
