import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, UserCheck, Building2, Home, ShieldCheck, 
  RefreshCw, Cpu, TrendingUp, Truck, Car, GraduationCap, 
  Landmark, CreditCard, Layers, ArrowRight, AlertCircle, ChevronRight 
} from 'lucide-react';
import { LOAN_SERVICES } from '../../data/loansData';

interface PopularLoansSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  UserCheck,
  Building2,
  Home,
  ShieldCheck,
  RefreshCw,
  Cpu,
  TrendingUp,
  Truck,
  Car,
  GraduationCap,
  Landmark,
  CreditCard,
  Layers,
};

export const PopularLoansSection: React.FC<PopularLoansSectionProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'business' | 'personal' | 'secured'>('all');

  const filteredLoans = LOAN_SERVICES.filter(loan => {
    if (filter === 'all') return true;
    if (filter === 'business') {
      return ['business-loan', 'msme-loan', 'working-capital-loan', 'machinery-loan', 'project-finance', 'lap-for-business', 'overdraft-cash-credit'].includes(loan.id);
    }
    if (filter === 'personal') {
      return ['personal-loan', 'home-loan', 'car-loan', 'education-loan', 'debt-consolidation'].includes(loan.id);
    }
    if (filter === 'secured') {
      return ['loan-against-property', 'lap-for-business', 'machinery-loan', 'commercial-vehicle-loan', 'home-loan'].includes(loan.id);
    }
    return true;
  });

  return (
    <section id="loans-section" className="py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-royal-600 bg-royal-50 px-3 py-1 rounded-full border border-royal-200">
              DIVISION A: FINANCIAL SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
              Find the Right Financial Solution for Your Needs.
            </h2>
            <p className="text-sm text-slate-600">
              Different financial requirements call for different financing solutions. Explore the available loan categories and get guidance on identifying suitable options.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all' ? 'bg-[#142B49] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Loans (14)
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'business' ? 'bg-[#142B49] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Business & MSME
            </button>
            <button
              onClick={() => setFilter('personal')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'personal' ? 'bg-[#142B49] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Personal & Retail
            </button>
            <button
              onClick={() => setFilter('secured')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'secured' ? 'bg-[#142B49] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Secured / Asset-Backed
            </button>
          </div>
        </div>

        {/* 14 Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLoans.map((loan) => {
            const Icon = iconMap[loan.iconName] || Landmark;
            return (
              <div
                key={loan.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-royal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center group-hover:bg-[#246BCE] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    {loan.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full border border-teal-200">
                        Popular
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                      {loan.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {loan.shortDescription}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    {loan.idealFor.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                        <span className="text-royal-500 font-bold">•</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={`/loans/${loan.slug}`}
                    className="flex-1 py-2 px-3 rounded-xl border border-slate-200 hover:border-royal-300 text-xs font-semibold text-slate-700 hover:text-royal-600 hover:bg-slate-50 text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenConsultation('loan', loan.title)}
                    className="py-2 px-3.5 rounded-xl bg-[#246BCE] hover:bg-royal-600 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Apply / Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Essential Disclaimers Strip */}
        <div className="mt-10 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start sm:items-center gap-3 text-xs text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Important Lending Disclosure:</strong> All loans are subject to lender eligibility criteria, thorough credit verification, independent valuation, and financial institution terms. Registify Services does not guarantee loan sanctions, fixed interest rates, or instant approvals. We do not provide government subsidized schemes.
          </p>
        </div>

      </div>
    </section>
  );
};
