-- ==============================================================================
-- REGISTIFY SERVICES - PRODUCTION SUPABASE DATABASE SCHEMA & ROW LEVEL SECURITY
-- ==============================================================================
-- Run this script in the Supabase SQL Editor (Dashboard > SQL Editor)
-- 
-- SECURITY OBJECTIVES:
-- 1. Creates dedicated tables with primary keys, constraints, and audit timestamps.
-- 2. Enables Row Level Security (RLS) on all tables.
-- 3. Implements strict least-privilege policies:
--    - Public (anon) clients may ONLY INSERT new leads.
--    - Public (anon) clients CANNOT read/select, edit, or delete any leads.
--    - Only authenticated administrators (dashboard staff) can read and update.
-- ==============================================================================

-- 1. LOAN ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.loan_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id VARCHAR(64) UNIQUE NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(128),
    city VARCHAR(64),
    state VARCHAR(64),
    employment_type VARCHAR(64),
    loan_category VARCHAR(128),
    required_amount VARCHAR(64),
    monthly_income VARCHAR(64),
    existing_obligations TEXT,
    additional_requirements TEXT,
    source_page VARCHAR(255),
    status VARCHAR(32) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. BUSINESS ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.business_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id VARCHAR(64) UNIQUE NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(128),
    business_name VARCHAR(128),
    business_type VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    service_category VARCHAR(128),
    specific_service VARCHAR(128),
    additional_information TEXT,
    source_page VARCHAR(255),
    status VARCHAR(32) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CONTACT ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    enquiry_id VARCHAR(64) UNIQUE NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    email VARCHAR(128),
    city VARCHAR(64),
    state VARCHAR(64),
    subject VARCHAR(128),
    message TEXT NOT NULL,
    source_page VARCHAR(255),
    status VARCHAR(32) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 4. ROW LEVEL SECURITY (RLS) ACTIVATION
-- ==============================================================================

ALTER TABLE public.loan_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- ------------------------------------------------------------------------------
-- POLICIES FOR loan_enquiries
-- ------------------------------------------------------------------------------
-- Allow anonymous public submission (INSERT only)
DROP POLICY IF EXISTS "Public can insert loan enquiries" ON public.loan_enquiries;
CREATE POLICY "Public can insert loan enquiries"
    ON public.loan_enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow authenticated dashboard users to view and manage enquiries
DROP POLICY IF EXISTS "Authenticated users can select loan enquiries" ON public.loan_enquiries;
CREATE POLICY "Authenticated users can select loan enquiries"
    ON public.loan_enquiries
    FOR SELECT
    TO authenticated
    USING (true);

DROP POLICY IF EXISTS "Authenticated users can update loan enquiries" ON public.loan_enquiries;
CREATE POLICY "Authenticated users can update loan enquiries"
    ON public.loan_enquiries
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- POLICIES FOR business_enquiries
-- ------------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can insert business enquiries" ON public.business_enquiries;
CREATE POLICY "Public can insert business enquiries"
    ON public.business_enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can select business enquiries" ON public.business_enquiries;
CREATE POLICY "Authenticated users can select business enquiries"
    ON public.business_enquiries
    FOR SELECT
    TO authenticated
    USING (true);

DROP POLICY IF EXISTS "Authenticated users can update business enquiries" ON public.business_enquiries;
CREATE POLICY "Authenticated users can update business enquiries"
    ON public.business_enquiries
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- POLICIES FOR contact_enquiries
-- ------------------------------------------------------------------------------
DROP POLICY IF EXISTS "Public can insert contact enquiries" ON public.contact_enquiries;
CREATE POLICY "Public can insert contact enquiries"
    ON public.contact_enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can select contact enquiries" ON public.contact_enquiries;
CREATE POLICY "Authenticated users can select contact enquiries"
    ON public.contact_enquiries
    FOR SELECT
    TO authenticated
    USING (true);

-- ==============================================================================
-- 5. DATABASE BACKUP & RECOVERY PROTOCOL
-- ==============================================================================
-- A. AUTOMATED CLOUD BACKUPS:
--    Supabase automatically provides daily scheduled backups on the Pro tier,
--    with 7 to 30 days of retention and Point-in-Time Recovery (PITR).
--    Check: Project Settings > Database > Backups.
--
-- B. MANUAL COMMAND-LINE BACKUP (pg_dump):
--    To take an immediate offsite snapshot of your production data:
--
--    pg_dump --clean --if-exists --no-owner --no-privileges \
--      -h db.<PROJECT_REF>.supabase.co \
--      -U postgres \
--      -d postgres > registify_backup_$(date +%Y%m%d_%H%M%S).sql
--
-- C. CSV EXPORT FROM SUPABASE STUDIO:
--    1. Go to Table Editor > Select table (loan_enquiries / business_enquiries).
--    2. Click 'Export to CSV' at the top right of the table view.
--    3. Store exports in an encrypted offsite drive (Google Drive / S3).
-- ==============================================================================
