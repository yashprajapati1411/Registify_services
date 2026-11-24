import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, Award, Receipt, Calculator, ClipboardCheck, 
  FileText, ArrowRight, ChevronRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import { BUSINESS_SERVICES } from '../data/businessData';

interface BusinessIndexPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const BusinessIndexPage: React.FC<BusinessIndexPageProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Company Registration',
    'Certifications',
    'GST Services',
    'Taxation & Accounting',
    'Compliance',
    'Business Documentation'
  ];

  const filtered = activeCategory === 'All'
    ? BUSINESS_SERVICES
    : BUSINESS_SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-4 relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/40 text-teal-200 text-xs font-semibold border border-teal-400/30">
              <Building className="w-3.5 h-3.5 text-teal-400" />
              <span>DIVISION B: BUSINESS REGISTRATION & COMPLIANCE</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Start, Certify & Comply With Total Confidence
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We assist entrepreneurs and companies across India with company incorporation, business certifications (ISO, MSME, FSSAI), GST registrations, secretarial compliance, and operational documentation.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('business')}
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-[#142B49] rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>Request Incorporation Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919725991607?text=Hello%20Registify%20Services%2C%20I%20would%20like%20to%20enquire%20about%20business%20registration%20and%20compliance."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-semibold transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-xl font-bold text-[#142B49]">
              Business Solutions ({filtered.length})
            </h2>
            <p className="text-xs text-slate-500">
              Select a vertical to explore applicable registration pathways.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat ? 'bg-[#142B49] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(srv => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {srv.category}
                  </span>
                  {srv.popular && (
                    <span className="text-[10px] font-bold text-royal-700 bg-royal-50 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {srv.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2">
                <Link
                  to={`/business/${srv.slug}`}
                  className="flex-1 py-2 px-3 rounded-xl border border-slate-200 hover:border-teal-300 text-xs font-semibold text-slate-700 hover:text-teal-700 text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>Read Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenConsultation('business', srv.title)}
                  className="py-2 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Governance Note */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Professional Governance Note:</strong> Registify Services provides business setup, secretarial documentation, and application facilitation. We are not a law firm and do not provide court litigation. Regulated statutory audits and legal opinions are coordinated with certified Chartered Accountants and qualified legal professionals.
          </p>
        </div>

      </div>
    </div>
  );
};
