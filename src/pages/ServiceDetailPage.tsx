import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ChevronRight, ArrowRight, MessageCircle, CheckCircle2, 
  HelpCircle, FileText, Shield, Award, Building, Landmark,
  ChevronDown
} from 'lucide-react';
import { getServiceBySlug, ALL_UNIFIED_SERVICES } from '../data/servicesCatalog';
import { SEO } from '../components/common/SEO';

interface ServiceDetailPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'eligibility' | 'process' | 'documents' | 'faqs'>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3 Related Services
  const relatedServices = ALL_UNIFIED_SERVICES.filter(
    (s) => s.slug !== service.slug && (s.categorySlug === service.categorySlug || s.popular)
  ).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={service.title}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
      />
      
      {/* 1. BREADCRUMB & HERO */}
      <section className="bg-[#FFF9F1] border-b border-[#DFE4F1] pt-32 sm:pt-36 lg:pt-40 pb-10 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs text-[#5B6477]">
            <Link to="/" className="hover:text-[#2B1E6B] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-[#2B1E6B] transition-colors">{service.categoryLabel}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#1F2A44] font-semibold truncate max-w-[200px] sm:max-w-none">{service.title}</span>
          </nav>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#E0603A]">
                {service.categoryLabel}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1E6B] leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-[#5B6477] leading-relaxed max-w-2xl font-sans">
                {service.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(service.categorySlug === 'loans' ? 'loan' : 'business', service.title)}
                  className="px-8 py-3.5 rounded-full bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow active:scale-95 border border-[#FFB020] flex items-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/919725991607?text=${encodeURIComponent(`Hello, I would like expert consultation on ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FFF9F1] text-[#2B1E6B] border-2 border-[#2B1E6B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow active:scale-95 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#2B1E6B]" />
                  <span>Talk to an Expert</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#DFE4F1] shadow-card bg-white aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0F2F66]/40 flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-xs rounded-xl p-4 w-full border border-white/60">
                    <span className="text-[11px] font-bold text-[#2B1E6B] uppercase tracking-wider block">
                      {service.registrationAuthority || 'Registify Services Guidance'}
                    </span>
                    <span className="text-xs text-[#5B6477] mt-0.5 block">
                      Typical Turnaround: {service.typicalTimeline || 'Standard Statutory Schedule'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. SUB-NAV TAB BAR (Static at rest, does not stick to screen on scroll) */}
      <nav className="relative z-20 bg-white border-b border-[#DFE4F1] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-8 overflow-x-auto no-scrollbar py-3">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'eligibility', label: 'Eligibility' },
              { id: 'process', label: 'Process' },
              { id: 'documents', label: 'Documents' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  scrollToSection(tab.id);
                }}
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#2B1E6B] text-white'
                    : 'text-[#5B6477] hover:text-[#2B1E6B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. MAIN SERVICE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* OVERVIEW SECTION & REGISTRATION DETAILS SIDEBAR */}
        <section id="overview" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Overview Text */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
                Service Overview
              </h2>
              <p className="text-sm sm:text-base text-[#1F2A44] leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* Registration Details Box (matching theme.png) */}
            <div className="lg:col-span-5 bg-[#FFF9F1] rounded-2xl border border-[#DFE4F1] p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#DFE4F1]">
                <FileText className="w-5 h-5 text-[#E0603A]" />
                <h3 className="font-serif font-bold text-base text-[#2B1E6B]">
                  Registration Details
                </h3>
              </div>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-[#5B6477] block font-medium">Registration Authority</span>
                  <span className="font-bold text-[#1F2A44] text-sm mt-0.5 block">
                    {service.registrationAuthority || 'Statutory Government Authority'}
                  </span>
                </div>

                <div>
                  <span className="text-[#5B6477] block font-medium">Applicable For</span>
                  <span className="font-semibold text-[#1F2A44] mt-0.5 block">
                    {service.applicableFor || 'Startups, LLPs & Commercial Entities'}
                  </span>
                </div>

                <div>
                  <span className="text-[#5B6477] block font-medium">Registration Mode</span>
                  <span className="font-semibold text-[#1F2A44] mt-0.5 block">
                    {service.registrationMode || 'Paperless Digital Coordination'}
                  </span>
                </div>

                <div>
                  <span className="text-[#5B6477] block font-medium">Typical Timeline</span>
                  <span className="font-semibold text-[#1F2A44] mt-0.5 block">
                    {service.typicalTimeline || '5 – 10 Working Days*'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* KEY BENEFITS */}
        {service.benefits && service.benefits.length > 0 && (
          <section id="benefits" className="scroll-mt-36 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-[#DFE4F1] shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFF9F1] text-[#2B1E6B] flex items-center justify-center font-bold text-sm border border-[#DFE4F1]">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1F2A44] font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ELIGIBILITY CRITERIA */}
        {service.eligibility && service.eligibility.length > 0 && (
          <section id="eligibility" className="scroll-mt-36 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
              Eligibility Criteria
            </h2>

            <div className="bg-[#FFF9F1] rounded-2xl border border-[#DFE4F1] p-6 sm:p-8 space-y-3">
              {service.eligibility.map((crit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
                    {crit}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* REGISTRATION PROCESS: CONNECTED CIRCLES DIAGRAM */}
        {service.process && service.process.length > 0 && (
          <section id="process" className="scroll-mt-36 space-y-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
              Registration Process
            </h2>

            {/* Connected-Circle Process Diagram with Dotted Arrows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative pt-4">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  
                  {/* Dotted Arrow on Desktop */}
                  {idx < (service.process?.length || 0) - 1 && (
                    <div className="hidden lg:block absolute top-9 left-1/2 w-full h-0 pointer-events-none z-0">
                      <svg className="w-full h-6 overflow-visible" fill="none">
                        <path
                          d="M 40 8 Q 80 0 130 8"
                          stroke="#2B1E6B"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          strokeOpacity="0.5"
                        />
                        <polygon points="130,8 124,5 124,11" fill="#2B1E6B" fillOpacity="0.7" />
                      </svg>
                    </div>
                  )}

                  {/* Yellow Circle Step Indicator */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#FFB020] flex items-center justify-center border border-[#FFB020] shadow-xs">
                    <span className="font-serif font-bold text-lg text-[#2B1E6B]">
                      {step.step || idx + 1}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="font-serif font-bold text-sm text-[#2B1E6B] mt-4">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#5B6477] mt-1.5 leading-relaxed font-sans max-w-[180px]">
                    {step.description}
                  </p>

                </div>
              ))}
            </div>
          </section>
        )}

        {/* REQUIRED DOCUMENTS */}
        {service.documents && service.documents.length > 0 && (
          <section id="documents" className="scroll-mt-36 space-y-6">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#E0603A]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
                Required Documents
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-[#DFE4F1] flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FREQUENTLY ASKED QUESTIONS */}
        {service.faqs && service.faqs.length > 0 && (
          <section id="faqs" className="scroll-mt-36 space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#E0603A]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1E6B]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#DFE4F1] overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-[#FFF9F1] transition-colors"
                    >
                      <span className="font-serif font-semibold text-sm sm:text-base text-[#2B1E6B] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#2B1E6B] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180 text-[#E0603A]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5B6477] leading-relaxed border-t border-[#DFE4F1]/60 font-sans">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* READY TO REGISTER BOTTOM CTA BANNER (matching theme.png) */}
        <section className="bg-[#FFF9F1] rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-[#2B1E6B]">
              Ready to Register Under {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6477] max-w-xl">
              Get expert guidance and complete support for a smooth, transparent and quick registration process.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation(service.categorySlug === 'loans' ? 'loan' : 'business', service.title)}
              className="px-7 py-3 rounded-full bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow border border-[#FFB020] flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/919725991607?text=${encodeURIComponent(`Hello, I would like to consult on ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-[#2B1E6B] border border-[#2B1E6B] font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#2B1E6B]" />
              <span>Talk to Our Expert</span>
            </a>
          </div>
        </section>

        {/* RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <section className="pt-8 border-t border-[#DFE4F1] space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#2B1E6B]">
              Related Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={`/services/${rel.slug}`}
                  className="bg-white rounded-xl p-5 border border-[#DFE4F1] hover:border-[#2B1E6B] hover:shadow-card transition-all duration-200 group block space-y-2"
                >
                  <span className="text-[10px] font-bold text-[#E0603A] uppercase tracking-wider block">
                    {rel.categoryLabel}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#2B1E6B] group-hover:text-[#E0603A] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#5B6477] line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

    </div>
  );
};
