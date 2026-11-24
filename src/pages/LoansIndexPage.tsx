import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Landmark, Briefcase, UserCheck, Building2, Home, 
  ShieldCheck, RefreshCw, Cpu, TrendingUp, Truck, Car, 
  GraduationCap, CreditCard, Layers, ArrowRight, ChevronRight, AlertCircle, PhoneCall 
} from 'lucide-react';
import { LOAN_SERVICES } from '../data/loansData';

interface LoansIndexPageProps {
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

export const LoansIndexPage: React.FC<LoansIndexPageProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'business' | 'personal' | 'asset'>('all');

  const filtered = LOAN_SERVICES.filter(loan => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'business') {
      return ['business-loan', 'msme-loan', 'working-capital-loan', 'machinery-loan', 'project-finance', 'lap-for-business', 'overdraft-cash-credit'].includes(loan.id);
    }
    if (activeCategory === 'personal') {
      return ['personal-loan', 'home-loan', 'car-loan', 'education-loan', 'debt-consolidation'].includes(loan.id);
    }
    if (activeCategory === 'asset') {
      return ['loan-against-property', 'lap-for-business', 'machinery-loan', 'commercial-vehicle-loan', 'home-loan'].includes(loan.id);
    }
    return true;
  });

  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-4 relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-600/40 text-royal-200 text-xs font-semibold border border-royal-400/30">
              <Landmark className="w-3.5 h-3.5 text-teal-400" />
              <span>DIVISION A: LOAN & FINANCIAL FACILITATION</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Commercial Loan Solutions Tailored to Your Growth
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We assist individuals, self-employed professionals, startups, MSMEs, and established companies across India in evaluating suitable financing products, preparing documentation, and coordinating applications with leading institutional banks and NBFCs.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('loan')}
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-[#142B49] rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>Request Loan Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919725991607?text=Hello%20Registify%20Services%2C%20I%20would%20like%20to%20enquire%20about%20loan%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs sm:text-sm font-semibold transition-all"
              >
                Chat with Loan Advisor
              </a>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-xl font-bold text-[#142B49]">
              Explore Available Loan Categories ({filtered.length})
            </h2>
            <p className="text-xs text-slate-500">
              Transparent institutional loan facilitation without hidden fees.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-white p-1 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all' ? 'bg-[#142B49] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (14)
            </button>
            <button
              onClick={() => setActiveCategory('business')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'business' ? 'bg-[#142B49] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Business & Working Capital
            </button>
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'personal' ? 'bg-[#142B49] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Personal & Retail
            </button>
            <button
              onClick={() => setActiveCategory('asset')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'asset' ? 'bg-[#142B49] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Property & Asset Backed
            </button>
          </div>
        </div>

        {/* Loan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(loan => {
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
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">
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

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Focus:</span>
                    {loan.idealFor.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-royal-500"></span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    to={`/loans/${loan.slug}`}
                    className="flex-1 py-2 px-3 rounded-xl border border-slate-200 hover:border-royal-300 text-xs font-semibold text-slate-700 hover:text-royal-600 hover:bg-slate-50 text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Full Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => onOpenConsultation('loan', loan.title)}
                    className="py-2 px-4 rounded-xl bg-[#246BCE] hover:bg-royal-600 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Statutory Lending Disclaimers:</span>
          </div>
          <p className="leading-relaxed">
            Registify Services is an independent loan facilitation and consultancy firm. We do not provide government subsidized loans or government grants. Loans are sanctioned solely at the discretion of participating commercial banks and registered NBFCs subject to credit assessment, income verification, and lender terms.
          </p>
        </div>

      </div>
    </div>
  );
};
