import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getServicesByCategory, UnifiedServiceItem } from '../../data/servicesCatalog';

interface CategoryTab {
  id: 'incorporation' | 'startup-gov' | 'certifications' | 'compliance' | 'loans' | 'digital';
  title: string;
  description: string;
}

const CATEGORIES: CategoryTab[] = [
  {
    id: 'incorporation',
    title: 'COMPANY INCORPORATION',
    description:
      'Form your legal business structure in India with end-to-end MCA dossier filing, name approval, and corporate identification numbers.',
  },
  {
    id: 'startup-gov',
    title: 'STARTUP & GOVT. REGISTRATIONS',
    description:
      'Official statutory recognitions including DPIIT recognition, Udyam MSME certificates, and nationwide GST tax compliance registrations.',
  },
  {
    id: 'certifications',
    title: 'CERTIFICATIONS',
    description:
      'Statutory business licenses, ISO management standards, FSSAI food licensing, and intellectual property trademark protections.',
  },
  {
    id: 'compliance',
    title: 'COMPLIANCE',
    description:
      'Protect your company status with annual MCA ROC return filings, statutory tax audits, bookkeeping, and structured legal agreements.',
  },
  {
    id: 'loans',
    title: 'LOANS & FINANCE',
    description:
      'Commercial credit facilitation, MSME subsidized bank loans, machinery financing, and working capital limits with leading lenders.',
  },
  {
    id: 'digital',
    title: 'DIGITAL SOLUTIONS',
    description:
      'Enterprise digital presence, conversion-oriented web applications, SEO optimization, and performance marketing campaigns for growing firms.',
  },
];

export const ServicesHomeSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryTab['id']>('incorporation');

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];
  const services = getServicesByCategory(activeCategory).slice(0, 3);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFF9F1] border-t border-[#DFE4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Heading & Category Navigation Tabs */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-sans font-bold text-sm sm:text-base text-[#6B6590] uppercase tracking-wider block mb-1">
                What we do
              </span>
              <h2 className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#2B1E6B] uppercase leading-none tracking-tight">
                Our Services
              </h2>
            </div>

            {/* Vertical Categories List on Desktop / Scrollable on Mobile */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 pt-4">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-4 py-3.5 sm:px-5 sm:py-4 transition-all duration-200 border-b border-[#DFE4F1]/60 lg:border-b-0 whitespace-nowrap lg:whitespace-normal rounded-xl lg:rounded-none flex items-center justify-between ${
                      isActive
                        ? 'lg:border-l-4 lg:border-[#FFB020] bg-white lg:bg-transparent shadow-sm lg:shadow-none text-[#2B1E6B] font-bold'
                        : 'text-[#6B6590] hover:text-[#2B1E6B] hover:bg-white/50 font-semibold'
                    }`}
                  >
                    <span className="font-condensed text-base sm:text-lg uppercase tracking-wide">
                      {cat.title}
                    </span>
                    {isActive && (
                      <span className="hidden lg:inline-block w-2 h-2 rounded-full bg-[#FFB020]"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Category Header & 3 Photo Cards Grid */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Active Category Header */}
            <div className="space-y-2 border-b border-[#DFE4F1] pb-4">
              <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-[#2B1E6B] uppercase tracking-wide">
                {currentCategory.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5B567F] max-w-2xl font-sans">
                {currentCategory.description}
              </p>
            </div>

            {/* Top 3 Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#DFE4F1] group"
                >
                  {/* Photo Top with Deep Navy Overlay & Uppercase Title */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#1B1247]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      onError={(e) => {
                        // Fallback pattern if image is missing
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Deep Navy Color Overlay */}
                    <div className="absolute inset-0 bg-[#0F2A5C]/65 mix-blend-multiply"></div>

                    {/* Uppercase White Title on Image */}
                    <div className="absolute inset-x-4 bottom-4 z-10">
                      <span className="font-condensed font-bold text-xl sm:text-2xl text-white uppercase leading-tight tracking-wide block drop-shadow-md">
                        {item.overlayTitle || item.title.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Body Text & Round Arrow Button */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div>
                      <h4 className="font-sans font-bold text-lg text-[#2B1E6B] mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#5B567F] line-clamp-3 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <Link
                        to={`/services/${item.slug}`}
                        className="inline-flex items-center text-xs font-bold text-[#2B1E6B] group-hover:text-[#FFB020] uppercase tracking-wider transition-colors"
                      >
                        Learn more
                      </Link>

                      {/* Circular Navy Arrow Button */}
                      <Link
                        to={`/services/${item.slug}`}
                        aria-label={`View details of ${item.title}`}
                        className="w-10 h-10 rounded-full bg-[#2B1E6B] text-white flex items-center justify-center transition-all duration-200 group-hover:bg-[#FFB020] group-hover:text-[#1B1247] group-hover:scale-110 shadow-md"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Services Golden Pill Button */}
            <div className="pt-4">
              <Link
                to="/services"
                className="inline-block px-8 py-4 rounded-xl bg-[#FFB020] hover:bg-[#E59D10] text-[#1B1247] font-condensed font-bold text-lg tracking-wider uppercase transition-all duration-200 shadow-btn hover:scale-105 active:scale-95 text-center"
              >
                VIEW ALL SERVICES
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
