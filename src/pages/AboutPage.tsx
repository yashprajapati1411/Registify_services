import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Landmark, ShieldCheck, Target, Compass, 
  Users, CheckCircle2, ArrowRight, MapPin, Scale, Award,
  Sparkles, Briefcase, TrendingUp
} from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Us | Dedicated Corporate & Compliance Advisory"
        description="Learn about Registify Services, Gujarat's dedicated corporate advisory and statutory compliance partner supporting Indian startups and enterprises nationwide."
        canonicalPath="/about"
      />
      
      {/* 1. DISTINCT ABOUT US HERO SECTION (Split 2-Column Institutional Architectural Layout) */}
      <section className="relative bg-[#160E3D] text-white overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
        
        {/* Subtle Architectural Grid Pattern & Ambient Golden Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Accent */}
          <div 
            className="w-full h-full opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />
          {/* Ambient Lighting */}
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,176,32,0.18) 0%, rgba(43,30,107,0) 70%)' }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(82,53,196,0.25) 0%, rgba(22,14,61,0) 70%)' }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Mission Narrative & Distinct Title (Col 7) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Institutional Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FFB020] text-xs font-bold border border-white/20 uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>ABOUT REGISTIFY SERVICES • SINCE 2018</span>
              </div>

              {/* Distinct Headline Dedicated to Institutional Advisory */}
              <h1 className="font-condensed font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[62px] uppercase text-white tracking-wide leading-[1.08]">
                Building Strong <span className="text-[#FFB020]">Business Foundations</span> For India’s Ambitious Founders
              </h1>

              {/* Subtitle Editorial */}
              <p className="text-base sm:text-lg text-[#DCD6FB] leading-relaxed font-sans font-normal max-w-2xl">
                Headquartered in Gujarat and serving clients across 8+ Indian states, Registify Services is a multi-disciplinary corporate advisory firm. We bridge the gap between entrepreneurial ambition and procedural compliance—bringing company formation, statutory certifications, secretarial management, and growth capital facilitation under one dependable, transparent roof.
              </p>

              {/* Key Trust Checkmarks (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-[#E9E4FF]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB020] flex-shrink-0" />
                  <span>DPIIT & MCA Compliant Advisory</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB020] flex-shrink-0" />
                  <span>Zero Bureaucratic Friction</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB020] flex-shrink-0" />
                  <span>Transparent Milestone Timelines</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB020] flex-shrink-0" />
                  <span>Dedicated Advisory Desk</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-8 py-3.5 rounded-xl bg-[#FFB020] hover:bg-[#E59D10] text-[#1B1247] font-condensed font-bold text-lg uppercase tracking-wider transition-all duration-200 shadow-btn hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-condensed font-bold text-lg uppercase tracking-wider transition-all duration-200 border border-white/25 backdrop-blur-sm text-center"
                >
                  Explore Services Directory
                </Link>
              </div>

            </div>

            {/* Right Column: Institutional Snapshot Showcase Card (Col 5) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#211654]/85 border border-white/20 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6">
                
                {/* Emblem & Title */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-2 shadow-lg flex-shrink-0 border border-white/40">
                    <img
                      src="/images/registify-mark-transparent.png"
                      alt="Registify Emblem"
                      className="w-full h-full object-contain select-none"
                    />
                  </div>
                  <div className="text-left">
                    <span className="font-serif font-bold text-xl text-white block leading-tight">
                      Registify Services
                    </span>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#FFB020] block">
                      Private Corporate Advisory
                    </span>
                    <span className="text-xs text-[#CFC6FF] block mt-0.5">
                      Gujarat HQ • Serving Pan-India
                    </span>
                  </div>
                </div>

                {/* 3 Core Competency Pillars */}
                <div className="space-y-3.5 text-left">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Building2 className="w-5 h-5 text-[#FFB020] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-bold text-white uppercase tracking-wider">Company Formation</strong>
                      <p className="text-[11px] text-[#CFC6FF] leading-snug">Private Limited, LLP, OPC & Partnership firm setup.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Award className="w-5 h-5 text-[#FFB020] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-bold text-white uppercase tracking-wider">Statutory Certifications</strong>
                      <p className="text-[11px] text-[#CFC6FF] leading-snug">ISO 9001, FSSAI, MSME Udyam & Trademark protection.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Landmark className="w-5 h-5 text-[#FFB020] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-bold text-white uppercase tracking-wider">Capital & Credit Facilitation</strong>
                      <p className="text-[11px] text-[#CFC6FF] leading-snug">MSME, Machinery & Term Loan dossier management.</p>
                    </div>
                  </div>
                </div>

                {/* Trust Highlight Banner */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#E9E4FF]">
                  <span className="inline-flex items-center gap-1.5 text-[#FFB020] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Govt. Recognized</span>
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-[#CFC6FF]">100% Procedural Assurance</span>
                </div>

              </div>
            </div>

          </div>

          {/* Key Metric Highlights Strip */}
          <div className="mt-12 sm:mt-16 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-[#FFB020]">6+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">Years Experience</small>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-white">10,000+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">Compliances Managed</small>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-[#FFB020]">₹30Cr+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">Funds Facilitated</small>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-white">8+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">States Served</small>
            </div>
          </div>

        </div>

      </section>

      {/* 2. MAIN BODY CONTENT */}
      <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story & Background Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FFB020] bg-[#2B1E6B] px-3.5 py-1.5 rounded-full inline-block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E6B] tracking-tight">
              Bridging the Complexity of Business Setup & Capital Access
            </h2>
            <p className="text-sm sm:text-base text-[#5B6477] leading-relaxed">
              Founding and scaling an enterprise in India requires navigating diverse statutory requirements—ranging from choosing between a Private Limited company or LLP, securing GST and Udyam MSME certifications, maintaining annual ROC filings, to preparing bank-standard financial dossiers for business loans.
            </p>
            <p className="text-sm sm:text-base text-[#5B6477] leading-relaxed">
              Entrepreneurs frequently face fragmented service providers: one accountant for bookkeeping, an independent agent for shop permits, and multiple visits to commercial banks without structured dossiers.
            </p>
            <p className="text-sm sm:text-base text-[#1F2A44] leading-relaxed font-medium bg-[#FFF9F1] p-4 rounded-xl border border-[#DFE4F1]">
              Registify Services was founded to solve this fragmentation. By consolidating corporate registrations, certifications, ongoing compliance calendars, and institutional loan facilitation into a unified digital advisory, we allow founders to focus on what matters most: growing their core business.
            </p>
          </div>

          <div className="bg-[#FFF9F1] rounded-2xl p-8 border border-[#DFE4F1] shadow-card space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#2B1E6B] border-b border-[#DFE4F1] pb-3">
              Our Core Operational Pillars
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFB020] text-[#1B1247] flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm">
                  01
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2B1E6B]">Ethical & Realistic Advisory</h4>
                  <p className="text-xs sm:text-sm text-[#5B6477] mt-0.5">We never fabricate statistics, promise guaranteed approvals, or mislead clients on loan eligibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFB020] text-[#1B1247] flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm">
                  02
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2B1E6B]">Organized Dossier Collation</h4>
                  <p className="text-xs sm:text-sm text-[#5B6477] mt-0.5">Methodical checklists and pre-submission audits ensure files meet lender and authority standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFB020] text-[#1B1247] flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-sm">
                  03
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2B1E6B]">Transparent Pricing</h4>
                  <p className="text-xs sm:text-sm text-[#5B6477] mt-0.5">We clearly differentiate our professional consultancy charges from government fees and bank processing costs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gujarat Roots & Pan-India Reach */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2B1E6B] bg-[#FFF9F1] px-3.5 py-1.5 rounded-full border border-[#DFE4F1]">
              <MapPin className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>PRIMARY HEADQUARTERS & NATIONWIDE REACH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
              Headquartered in Gujarat, Serving Clients Nationwide
            </h2>
            <p className="text-sm text-[#5B6477] leading-relaxed">
              Gujarat is India’s industrial powerhouse, boasting vibrant manufacturing clusters in Ahmedabad, Surat, Vadodara, Rajkot, and Ankleshwar. Our headquarters here gives us deep, practical familiarity with ground-level enterprise challenges.
            </p>
            <p className="text-sm text-[#5B6477] leading-relaxed">
              Through our secure digital onboarding workflow, we seamlessly extend our incorporation, compliance, and loan facilitation services to clients across all other Indian states.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#DFE4F1]">
            <div className="p-6 bg-[#FFF9F1] rounded-xl border border-[#DFE4F1]">
              <span className="text-base font-bold text-[#2B1E6B] block font-serif">Gujarat Commercial Hubs</span>
              <p className="text-xs sm:text-sm text-[#5B6477] mt-2 leading-relaxed">Direct presence serving Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar and industrial GIDCs.</p>
            </div>
            <div className="p-6 bg-[#FFF9F1] rounded-xl border border-[#DFE4F1]">
              <span className="text-base font-bold text-[#2B1E6B] block font-serif">Western & Southern Hubs</span>
              <p className="text-xs sm:text-sm text-[#5B6477] mt-2 leading-relaxed">Active client coordination in Mumbai, Pune, Bengaluru, Hyderabad, and Chennai.</p>
            </div>
            <div className="p-6 bg-[#FFF9F1] rounded-xl border border-[#DFE4F1]">
              <span className="text-base font-bold text-[#2B1E6B] block font-serif">Northern & Eastern Hubs</span>
              <p className="text-xs sm:text-sm text-[#5B6477] mt-2 leading-relaxed">Seamless digital filings for Delhi NCR, Jaipur, Indore, Lucknow, and Kolkata.</p>
            </div>
          </div>
        </div>

        {/* Clear Institutional Legal Positioning */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#1B1247] text-white space-y-4 border border-[#2B1E6B] shadow-xl">
          <div className="flex items-center gap-2 text-[#FFB020] font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-[#FFB020]" />
            <span>Important Institutional Clarity & Legal Scope</span>
          </div>
          <p className="text-xs sm:text-sm text-[#CFC6FF] leading-relaxed text-justify">
            Registify Services is a private business consultancy and financial service facilitator. We are NOT a government authority, department, or public sector bank. We do not offer government loan schemes or government subsidies. 
          </p>
          <p className="text-xs sm:text-sm text-[#CFC6FF] leading-relaxed text-justify">
            Furthermore, Registify Services is NOT a law firm and does NOT provide court litigation, advocate representation, or legal pleadings. Regulated legal and accounting attestations are coordinated with independent practicing advocates and Chartered Accountants in accordance with statutory requirements.
          </p>
        </div>

      </div>

    </div>
  );
};
