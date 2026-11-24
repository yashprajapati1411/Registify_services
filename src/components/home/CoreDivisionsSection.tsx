import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Building2, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CoreDivisionsSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const CoreDivisionsSection: React.FC<CoreDivisionsSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="divisions" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-royal-600 bg-royal-50 px-3 py-1 rounded-full border border-royal-200">
            Our Two Core Divisions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Comprehensive Guidance Across Finance & Compliance
          </h2>
          <p className="text-sm text-slate-600">
            Select the division matching your immediate requirement to explore structured solutions.
          </p>
        </div>

        {/* Two Large Premium Division Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* DIVISION A: LOAN & FINANCIAL ASSISTANCE */}
          <div className="relative rounded-3xl bg-white border-2 border-slate-200 hover:border-royal-500 shadow-card hover:shadow-card-hover transition-all duration-300 p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-royal-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-royal-50 text-royal-600 flex items-center justify-center shadow-inner group-hover:bg-[#246BCE] group-hover:text-white transition-all">
                  <Landmark className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-royal-50 text-royal-700 text-xs font-bold border border-royal-200">
                  DIVISION A
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                  Loan & Financial Assistance
                </h3>
                <p className="text-xs font-semibold text-royal-600 uppercase tracking-wider mt-1">
                  Commercial Bank & NBFC Facilitation
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Looking for financial support for your personal requirements or business expansion? We help you explore suitable loan products and coordinate with relevant financial institutions based on your eligibility and requirements.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-royal-500 flex-shrink-0" />
                  <span>Unsecured Business Loans & MSME Working Capital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-royal-500 flex-shrink-0" />
                  <span>Loan Against Property (LAP) & Project Finance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-royal-500 flex-shrink-0" />
                  <span>Machinery, Commercial Vehicle & Personal Loans</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-[11px] text-slate-500">No government schemes or subsidies. Subject to lender approval.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/loans"
                className="w-full sm:w-auto px-6 py-3 bg-[#246BCE] hover:bg-royal-600 text-white rounded-xl text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 group-hover:translate-x-0.5"
              >
                <span>Explore Loan Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenConsultation('loan')}
                className="w-full sm:w-auto px-5 py-3 border border-slate-200 hover:border-royal-400 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Enquire for Loan
              </button>
            </div>
          </div>

          {/* DIVISION B: BUSINESS REGISTRATION & COMPLIANCE */}
          <div className="relative rounded-3xl bg-white border-2 border-slate-200 hover:border-teal-500 shadow-card hover:shadow-card-hover transition-all duration-300 p-8 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-teal-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shadow-inner group-hover:bg-[#18A999] group-hover:text-white transition-all">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200">
                  DIVISION B
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                  Business Registration & Compliance
                </h3>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mt-1">
                  Entity Setup, Certifications & Corporate Filings
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Starting a new venture or managing an existing company? Get assistance with company incorporation, certifications, GST, taxation, registrations and ongoing compliance requirements.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>Private Limited, LLP, OPC & Partnership Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>ISO, MSME / Udyam, Startup India DPIIT & FSSAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>GST Filings, Annual ROC Compliance & Business Agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="text-[11px] text-slate-500">Business consultancy facilitation. Not a law firm.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/business"
                className="w-full sm:w-auto px-6 py-3 bg-[#18A999] hover:bg-teal-600 text-white rounded-xl text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 group-hover:translate-x-0.5"
              >
                <span>Explore Business Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenConsultation('business')}
                className="w-full sm:w-auto px-5 py-3 border border-slate-200 hover:border-teal-400 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Incorporate or Comply
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
