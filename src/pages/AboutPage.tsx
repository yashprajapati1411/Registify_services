import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Landmark, ShieldCheck, Target, Compass, 
  Users, CheckCircle2, ArrowRight, MapPin, Scale, Award 
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
      
      {/* 1. REDESIGNED HERO SECTION (Full-Bleed Deep Royal Navy with Map Background & Zero Navbar Overlap) */}
      <section className="relative bg-[#2B1E6B] text-white overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24">
        
        {/* Atmospheric Map Texture Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'url(/images/map_bg.jpg)',
              backgroundPosition: 'center 40%',
              backgroundSize: 'cover',
              mixBlendMode: 'screen',
            }}
          />
        </div>

        {/* Decorative Radial Lighting Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 800px 500px at 50% 30%, rgba(255,176,32,0.12), transparent 70%), linear-gradient(180deg, rgba(43,30,107,0.92) 0%, rgba(43,30,107,0.85) 60%, #2B1E6B 100%)',
          }}
        />

        {/* Hero Content Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFB020] text-xs font-bold border border-white/20 uppercase tracking-widest backdrop-blur-sm">
            <Award className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>ABOUT REGISTIFY SERVICES</span>
          </div>

          {/* Majestic Uppercase Title */}
          <h1 className="font-condensed font-normal text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-wide leading-tight drop-shadow-sm">
            We Help Entrepreneurs<br className="hidden sm:inline" />
            Establish, Register, Certify<br className="hidden sm:inline" />
            And Grow
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#DCD6FB] max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Registify Services is a modern Indian business consultancy and corporate advisory firm. We bring administrative corporate registrations, statutory certifications, compliance management, and institutional financing solutions under one dependable roof.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#FFB020] hover:bg-[#E59D10] text-[#1B1247] font-condensed font-bold text-lg uppercase tracking-wider transition-all duration-200 shadow-btn hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-condensed font-bold text-lg uppercase tracking-wider transition-all duration-200 border border-white/30 backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Key Metric Highlights Strip */}
          <div className="pt-8 sm:pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-[#FFB020]">6+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">Years Experience</small>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-white">10k+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">Projects Delivered</small>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm text-center">
              <strong className="block font-condensed font-bold text-3xl sm:text-4xl text-[#FFB020]">30Cr+</strong>
              <small className="block font-sans text-xs uppercase tracking-wider text-[#CFC6FF] mt-1 font-semibold">Funds Facilitated</small>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm text-center">
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
