-- ========================================================
-- JP CONSTRUCTIONS INDIA — DATABASE SCHEMA
-- PostgreSQL / Supabase Migration Script
-- ========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS / ADMIN PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SERVICES
CREATE TABLE IF NOT EXISTS public.services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('infrastructure', 'railways', 'industrial', 'commercial', 'residential', 'renovation')),
  hero_image TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  scope_of_work JSONB DEFAULT '[]'::jsonb,
  benefits JSONB DEFAULT '[]'::jsonb,
  process JSONB DEFAULT '[]'::jsonb,
  equipment_used JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PROJECTS
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('infrastructure', 'railways', 'industrial', 'commercial', 'residential', 'renovation')),
  category_label TEXT NOT NULL,
  client TEXT NOT NULL,
  principal_contractor TEXT,
  location TEXT NOT NULL,
  state TEXT NOT NULL,
  year TEXT NOT NULL,
  completion_date TEXT,
  status TEXT DEFAULT 'completed' CHECK (status IN ('completed', 'ongoing', 'tender')),
  is_verified BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  hero_image TEXT NOT NULL,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  scope_of_work JSONB DEFAULT '[]'::jsonb,
  engineering_highlights JSONB DEFAULT '[]'::jsonb,
  specs JSONB DEFAULT '[]'::jsonb,
  testimonial_snippet TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PROJECT IMAGES (Dedicated Gallery Table)
CREATE TABLE IF NOT EXISTS public.project_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ENQUIRIES / QUOTE REQUESTS
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  reference_no TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  project_type TEXT NOT NULL,
  project_location TEXT NOT NULL,
  approximate_budget TEXT NOT NULL,
  timeline TEXT,
  project_description TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'contacted', 'quoted', 'closed')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TEAM MEMBERS
CREATE TABLE IF NOT EXISTS public.team_members (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience_years INT NOT NULL,
  bio TEXT NOT NULL,
  specialization TEXT NOT NULL,
  image TEXT NOT NULL,
  is_leadership BOOLEAN DEFAULT FALSE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. TESTIMONIALS
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  client_name TEXT NOT NULL,
  role TEXT NOT NULL,
  organization TEXT NOT NULL,
  project_title TEXT NOT NULL,
  comment TEXT NOT NULL,
  rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  year TEXT NOT NULL,
  verified_partner BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. INDEXES FOR HIGH-PERFORMANCE QUERIES
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_is_featured ON public.projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_reference_no ON public.enquiries(reference_no);
CREATE INDEX IF NOT EXISTS idx_services_slug ON public.services(slug);

-- 9. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Public read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public read team_members" ON public.team_members FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON public.testimonials FOR SELECT USING (true);

-- Public Insert Enquiries
CREATE POLICY "Public insert enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Authenticated Admin Policies
CREATE POLICY "Admin full access projects" ON public.projects FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access services" ON public.services FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access enquiries" ON public.enquiries FOR ALL TO authenticated USING (true);
