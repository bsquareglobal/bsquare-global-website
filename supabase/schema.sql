-- Run this in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  project_name text not null,
  location text,
  short_description text,
  full_description text,
  main_image_url text,
  main_image_public_id text,
  youtube_url text,
  show_on_homepage boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  image_url text not null,
  cloudinary_public_id text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  cloudinary_public_id text,
  caption text,
  status text not null default 'published' check (status in ('draft','published')),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  mobile text not null,
  email text,
  country text,
  service text,
  location text,
  message text,
  status text not null default 'New',
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.gallery enable row level security;
alter table public.enquiries enable row level security;

-- Public can read published portfolio/gallery content.
create policy "Public read published projects" on public.projects for select using (status='published');
create policy "Public read published gallery" on public.gallery for select using (status='published');
create policy "Public read images for published projects" on public.project_images for select using (
  exists (select 1 from public.projects p where p.id=project_id and p.status='published')
);

-- Admins are authenticated users. Restrict signups in Supabase Auth settings
-- and create only your own administrator account.
create policy "Authenticated admins manage projects" on public.projects for all to authenticated using (true) with check (true);
create policy "Authenticated admins manage project images" on public.project_images for all to authenticated using (true) with check (true);
create policy "Authenticated admins manage gallery" on public.gallery for all to authenticated using (true) with check (true);
create policy "Authenticated admins read enquiries" on public.enquiries for select to authenticated using (true);
create policy "Authenticated admins update enquiries" on public.enquiries for update to authenticated using (true) with check (true);
create policy "Public submit enquiries" on public.enquiries for insert to anon, authenticated with check (true);

-- Enable realtime if you want instant content refresh in open browser sessions.
alter publication supabase_realtime add table public.projects;
alter publication supabase_realtime add table public.gallery;
