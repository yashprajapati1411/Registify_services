import React from 'react';
import { Link } from 'react-router-dom';
import { Receipt, Calculator, FileSpreadsheet, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TaxationAccountingProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const TaxationAccountingSection: React.FC<TaxationAccountingProps> = ({ onOpenConsultation }) => {
  return (
    <section id="taxation" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            DIVISION B: TAXATION & FINANCIAL REPORTING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Stay Organized With Business Taxation & Compliance Support.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Maintaining punctual tax returns, clean bookkeeping, and bank-standard financial dossiers protects your business from penalties and strengthens institutional loan appraisals.
          </p>
        </div>

        {/* 3 Major Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: GST Services */}
          <div className="bg-[#F7F9FC] rounded-3xl p-7 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-white text-teal-600 border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-teal-600 group-hover:text-white transition-all">
                <Receipt className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                  Goods & Services Tax (GST)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Registration, Monthly Filings & Input Tax Credit
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>New GST Registration & Biometric Verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>Monthly / Quarterly GSTR-1 & GSTR-3B Filings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>GSTR-2B Input Tax Credit (ITC) Reconciliation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>GST Amendments, Cancellations & Revocations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>Annual Return (GSTR-9 / 9C) Support</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
              <Link
                to="/business/gst-services"
                className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1"
              >
                <span>GST Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenConsultation('business', 'GST Registration & Filing')}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                Enquire
              </button>
            </div>
          </div>

          {/* Card 2: Direct Taxation (ITR) */}
          <div className="bg-[#F7F9FC] rounded-3xl p-7 border border-slate-200 hover:border-royal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-white text-royal-600 border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-[#246BCE] group-hover:text-white transition-all">
                <Calculator className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                  Income Tax & Assessments
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Individual & Corporate Tax Coordination
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal-500 flex-shrink-0" />
                  <span>Individual & Professional ITR Filing (ITR-1 to ITR-4)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal-500 flex-shrink-0" />
                  <span>Corporate & Partnership Tax Filing (ITR-5 & ITR-6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal-500 flex-shrink-0" />
                  <span>Advance Tax Computations & TDS Returns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal-500 flex-shrink-0" />
                  <span>Income Tax Intimation & Notice Documentation Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-royal-500 flex-shrink-0" />
                  <span>Form 26AS & AIS / TIS Data Harmonization</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
              <Link
                to="/business/taxation-accounting"
                className="text-xs font-bold text-royal-600 hover:text-royal-800 flex items-center gap-1"
              >
                <span>Taxation Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenConsultation('business', 'ITR & Tax Computation')}
                className="px-4 py-2 bg-[#246BCE] hover:bg-royal-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                Enquire
              </button>
            </div>
          </div>

          {/* Card 3: Accounting, Bookkeeping & CMA Data */}
          <div className="bg-[#F7F9FC] rounded-3xl p-7 border border-slate-200 hover:border-indigo-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-white text-indigo-600 border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <FileSpreadsheet className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#142B49] group-hover:text-indigo-600 transition-colors">
                  Accounting & CMA Reports
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Financial Statements & Bank Dossier Preparation
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>Monthly Bookkeeping & Ledger Maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>Balance Sheet & Profit / Loss Statement Synthesis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>CMA Data Preparation for Bank Credit Facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>Bank Account Reconciliations & Debt-Service Ratios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                  <span>Detailed Project Financial Reports (DPR Projections)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
              <Link
                to="/business/taxation-accounting"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <span>CMA & Accounting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenConsultation('business', 'CMA Data & Financial Statements')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                Enquire
              </button>
            </div>
          </div>

        </div>

        {/* Professional CA Coordination Notice */}
        <div className="mt-10 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-600 max-w-4xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span>
            <strong>Professional Governance Notice:</strong> Registify Services provides business documentation collation, bookkeeping, and application facilitation. Statutory audits, formal tax audit certifications, and regulated attestations are executed in coordination with qualified independent Chartered Accountants (CAs).
          </span>
        </div>

      </div>
    </section>
  );
};
