import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, ShieldAlert, ArrowRight, CheckCircle2, Clock, Calendar } from 'lucide-react';

interface ComplianceSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const ComplianceSection: React.FC<ComplianceSectionProps> = ({ onOpenConsultation }) => {
  const complianceItems = [
    {
      title: 'Annual ROC Filings',
      desc: 'Form AOC-4 (Financial Statements) and Form MGT-7 / 7A (Annual Return) to keep MCA standing active and avoid ₹ 100/day late penalties.'
    },
    {
      title: 'LLP Annual Filings',
      desc: 'Mandatory Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) for active Limited Liability Partnerships.'
    },
    {
      title: 'Director DIR-3 KYC',
      desc: 'Annual digital authentication of mobile & email for DIN holders on MCA portal to prevent DIN deactivation.'
    },
    {
      title: 'Director Appointments & Changes',
      desc: 'Drafting board resolutions, Form DIR-12 filings, resignation acceptances, and consent documentation.'
    },
    {
      title: 'Registered Office Relocation',
      desc: 'Intra-state or inter-state company address changes, ROC notification, and statutory publication coordination.'
    },
    {
      title: 'Capital & Shareholding Changes',
      desc: 'Authorized capital increases, rights issues, share transfer documentation, and SH-7 / PAS-3 secretarial support.'
    },
    {
      title: 'PF & ESIC Monthly Compliance',
      desc: 'Monthly wage register computation, statutory employee deductions, and electronic challan return (ECR) generation.'
    },
    {
      title: 'Statutory Licence Renewals',
      desc: 'Proactive tracking and renewal coordination for FSSAI licenses, Shop & Establishment, and municipal permits.'
    }
  ];

  return (
    <section id="compliance" className="py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            DIVISION B: ONGOING STATUTORY COMPLIANCE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Your Business Doesn't Stop After Registration. Neither Should Its Compliance.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Failing to meet statutory deadlines leads to escalating daily penalties, director disqualification, and frozen corporate bank accounts. We provide structured calendar management to keep your business in good standing.
          </p>
        </div>

        {/* 8 Compliance Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs group-hover:bg-teal-600 group-hover:text-white transition-all shadow-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenConsultation('business', item.title)}
                  className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Enquire Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Alert Card */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#142B49]">
                Never Miss a Mandatory Statutory Due Date
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                ROC filings, DIR-3 KYC, and GSTR-9 annual returns carry steep penalties of ₹ 100 per day per form with no maximum ceiling. Let our compliance desk audit your MCA master data and establish your annual schedule.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Link
              to="/business/roc-compliance"
              className="flex-1 sm:flex-none px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold text-center transition-colors"
            >
              Learn More
            </Link>
            <button
              onClick={() => onOpenConsultation('business', 'ROC Compliance Audit')}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#142B49] hover:bg-[#0d1d33] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            >
              Request Compliance Audit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
