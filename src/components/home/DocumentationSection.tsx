import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldAlert, ArrowRight, CheckCircle2, FileSignature, Presentation, BarChart } from 'lucide-react';

interface DocumentationSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const DocumentationSection: React.FC<DocumentationSectionProps> = ({ onOpenConsultation }) => {
  const docPillars = [
    {
      category: 'Commercial Contracts & Deeds',
      icon: FileSignature,
      items: [
        'Partnership Deed Drafting Coordination',
        'Non-Disclosure Agreements (NDAs)',
        'Memorandum of Understanding (MoUs)',
        'Vendor & Supplier Commercial Agreements',
        'Service Level Agreements (SLAs)',
        'Employment Agreement Documentation'
      ]
    },
    {
      category: 'Project & Financial Models',
      icon: BarChart,
      items: [
        'Detailed Project Reports (DPR) for Bank Appraisal',
        'Credit Monitoring Arrangement (CMA) Reports',
        'Multi-Year Balance Sheet & Cash Flow Projections',
        'Working Capital Drawing Power Calculations',
        'Break-Even & Sensitivity Analysis Reports',
        'Machinery Payback Period Documentation'
      ]
    },
    {
      category: 'Strategic & Investor Collateral',
      icon: Presentation,
      items: [
        'Investor Pitch Deck Preparation',
        'Comprehensive Commercial Business Plans',
        'Executive Business Proposals',
        'Company Capability Statements',
        'Market Expansion Strategy Dossiers',
        'Startup Grant & Award Presentation Briefs'
      ]
    }
  ];

  return (
    <section id="documentation" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            DIVISION B: BUSINESS DOCUMENTATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Professional Documentation for Business Operations.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From enforceable commercial agreements that prevent partner disputes to bank-compliant Detailed Project Reports (DPRs) that secure loans, organized documentation drives commercial clarity.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {docPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-3xl p-7 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-white text-teal-600 border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                    {pillar.category}
                  </h3>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {pillar.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <button
                    onClick={() => onOpenConsultation('business', pillar.category)}
                    className="w-full py-2.5 bg-white hover:bg-teal-600 hover:text-white text-slate-700 border border-slate-200 hover:border-teal-600 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Request Documentation Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center gap-3 text-xs text-amber-950 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Legal Profession Act Disclaimer:</strong> Registify Services is a business consultancy and loan facilitation firm. We coordinate and format business documentation. Legal agreements requiring formal legal advice, specialized advocacy, or court litigation are handled by appropriately qualified, independent legal advocates.
          </span>
        </div>

      </div>
    </section>
  );
};
