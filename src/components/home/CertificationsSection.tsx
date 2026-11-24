import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, 
  ExternalLink, Search, Globe, Coffee, ShieldAlert, ShoppingBag 
} from 'lucide-react';

interface CertificationsSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

interface CertItem {
  id: string;
  slug?: string;
  title: string;
  category: 'Government Recognition' | 'Quality & Standards' | 'Trade & Sector' | 'Statutory & Tax';
  description: string;
  popular?: boolean;
}

const ALL_20_CERTIFICATIONS: CertItem[] = [
  {
    id: 'startup-india',
    slug: 'startup-india-recognition',
    title: 'Startup India / DPIIT Recognition',
    category: 'Government Recognition',
    description: 'Assistance in securing official DPIIT startup recognition for 3-year tax exemptions (80-IAC) and patent rebates.',
    popular: true
  },
  {
    id: 'msme-udyam',
    slug: 'udyam-registration',
    title: 'MSME / Udyam Registration',
    category: 'Government Recognition',
    description: 'Mandatory central registration unlocking priority lending, delayed payment protection, and tender concessions.',
    popular: true
  },
  {
    id: 'iso-cert',
    slug: 'iso-certification',
    title: 'ISO Certification Assistance',
    category: 'Quality & Standards',
    description: 'Audit coordination for ISO 9001 (QMS), ISO 14001, ISO 27001 (Information Security), and ISO 45001.',
    popular: true
  },
  {
    id: 'fssai-license',
    slug: 'fssai-license',
    title: 'FSSAI Registration & Licensing',
    category: 'Trade & Sector',
    description: 'Basic, State, and Central food safety licensing for restaurants, packaged food makers, and e-commerce vendors.',
    popular: true
  },
  {
    id: 'iec-code',
    slug: 'iec-registration',
    title: 'Import Export Code (IEC)',
    category: 'Trade & Sector',
    description: 'Mandatory 10-digit DGFT business code for cross-border import-export shipments and foreign remittances.',
    popular: true
  },
  {
    id: 'trademark',
    slug: 'trademark-registration',
    title: 'Trademark Registration Assistance',
    category: 'Statutory & Tax',
    description: 'Brand name and logo protection across 45 NICE classes with qualified IP advocate coordination.',
    popular: true
  },
  {
    id: 'gem-seller',
    slug: 'gem-registration',
    title: 'GeM Seller & OEM Registration',
    category: 'Government Recognition',
    description: 'Onboarding on the Government e-Marketplace for direct procurement access to public sector ministries.',
    popular: true
  },
  {
    id: 'nsic-reg',
    title: 'NSIC Registration Assistance',
    category: 'Government Recognition',
    description: 'Single Point Registration Scheme (SPRS) for micro and small enterprises participating in government purchases.'
  },
  {
    id: 'zed-cert',
    title: 'ZED Certification (Zero Defect Zero Effect)',
    category: 'Quality & Standards',
    description: 'MSME sustainable manufacturing certification scheme providing financial incentives and quality benchmarks.'
  },
  {
    id: 'dsc-token',
    title: 'Digital Signature Certificate (DSC)',
    category: 'Statutory & Tax',
    description: 'Class-3 USB cryptographic token DSCs for company incorporation, MCA filings, GST, and e-tenders.'
  },
  {
    id: 'pan-tan',
    title: 'PAN & TAN Application Assistance',
    category: 'Statutory & Tax',
    description: 'Expedited application and correction coordination for corporate PAN cards and Tax Deduction Accounts (TAN).'
  },
  {
    id: 'pf-esic',
    title: 'PF & ESIC Registration',
    category: 'Statutory & Tax',
    description: 'Statutory employee welfare registrations under EPFO and ESIC portals for compliant corporate payroll.'
  },
  {
    id: 'apeda-reg',
    title: 'APEDA Registration (RCMC)',
    category: 'Trade & Sector',
    description: 'Mandatory export registration certificate for scheduled agricultural and processed food commodity exporters.'
  },
  {
    id: 'ngo-darpan',
    title: 'NGO Darpan (NITI Aayog)',
    category: 'Government Recognition',
    description: 'Official portal registration for voluntary organizations, trusts, and Section 8 entities seeking government grants.'
  },
  {
    id: '12a-80g',
    title: '12A & 80G Tax Exemption Assistance',
    category: 'Statutory & Tax',
    description: 'Income tax registration enabling donors to claim 50% tax deductions on charitable contributions.'
  },
  {
    id: 'ce-marking',
    title: 'CE Marking Assistance',
    category: 'Quality & Standards',
    description: 'Conformity assessment coordination for industrial and electronic products exported to the European Economic Area.'
  },
  {
    id: 'gmp-cert',
    title: 'GMP Certification Assistance',
    category: 'Quality & Standards',
    description: 'Good Manufacturing Practice validation for pharmaceutical, nutraceutical, and cosmetic manufacturing units.'
  },
  {
    id: 'rohs-cert',
    title: 'RoHS Compliance Assistance',
    category: 'Quality & Standards',
    description: 'Restriction of Hazardous Substances testing and compliance documentation for electrical equipment.'
  },
  {
    id: 'bifma-cert',
    title: 'BIFMA Certification Assistance',
    category: 'Quality & Standards',
    description: 'Business and Institutional Furniture Manufacturers Association standard conformity for commercial furniture.'
  },
  {
    id: 'organic-cert',
    title: 'Organic Certification Assistance',
    category: 'Trade & Sector',
    description: 'Coordination for NPOP (National Programme for Organic Production) standards for organic farm commodities.'
  }
];

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Government Recognition', 'Quality & Standards', 'Trade & Sector', 'Statutory & Tax'];

  const displayedCerts = selectedCategory === 'All'
    ? ALL_20_CERTIFICATIONS
    : ALL_20_CERTIFICATIONS.filter(c => c.category === selectedCategory);

  return (
    <section id="certifications" className="py-16 md:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            DIVISION B: CERTIFICATIONS & LICENSING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Get the Essential Certifications Your Business Needs.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Business certifications and registrations can help establish credibility, meet regulatory requirements and improve your ability to work with customers, suppliers and business partners. We provide assistance with documentation and application processes for applicable certifications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#142B49] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 20 Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    {cert.category}
                  </span>
                  {cert.popular && (
                    <span className="text-[10px] font-bold text-royal-700 bg-royal-50 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                {cert.slug ? (
                  <Link
                    to={`/business/${cert.slug}`}
                    className="text-xs font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-[11px] text-slate-400 font-medium">Assistance Available</span>
                )}

                <button
                  onClick={() => onOpenConsultation('business', cert.title)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Distinction Note */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-500 text-center max-w-3xl mx-auto">
          <strong>Important Clarification:</strong> Registify Services provides private consultancy, dossier preparation, and application coordination. Final grant or issuance of certificates rests solely with the competent government department, statutory board, or accredited certification registrar.
        </div>

      </div>
    </section>
  );
};
