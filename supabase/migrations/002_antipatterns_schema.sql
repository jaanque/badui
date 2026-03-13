-- =============================================================
-- 002_antipatterns_schema.sql
-- Creates the base antipatterns table.
-- =============================================================

create table if not exists public.antipatterns (
  id            bigserial primary key,
  slug          text unique not null,
  title         text not null,
  excerpt       text not null,
  category      text not null,
  impact        text not null check (impact in ('Critical','High','Medium','Low')),
  cover_url     text,
  wcag_refs     text[]  default '{}',
  code_fix      text,
  published     boolean default true,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- RLS
alter table public.antipatterns enable row level security;

create policy "Antipatterns are public"
  on public.antipatterns for select
  using (published = true);
