import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { ALL_UNIFIED_SERVICES, UnifiedServiceItem } from '../data/servicesCatalog';
import { SEO } from '../components/common/SEO';

interface ServicesIndexPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'incorporation', label: 'Company Incorporation' },
    { id: 'startup-gov', label: 'Startup & Government' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'loans', label: 'Loans & Finance' },
    { id: 'digital', label: 'Digital Solutions' }
  ];

  const filteredServices = ALL_UNIFIED_SERVICES.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.categorySlug === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-20">
      <SEO
        title="Our Services | Corporate Registration, Certifications & Finance"
        description="Explore Registify Services complete catalog of corporate incorporation, Startup India, ISO certifications, GST compliance, and MSME loan services."
        canonicalPath="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E0603A]">
            Comprehensive Directory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1E6B]">
            Our Services
          </h1>
          <p className="text-sm sm:text-base text-[#5B6477] leading-relaxed">
            We help entrepreneurs establish, register, certify and grow their businesses with end-to-end guidance and procedural clarity.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="space-y-6">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#5B6477] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Private Limited, GST, ISO, MSME)..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-[#DFE4F1] bg-[#FFF9F1] text-xs sm:text-sm text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 no-scrollbar gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'bg-[#FFB020] text-[#2B1E6B] font-bold shadow-xs border border-[#FFB020]'
                      : 'border border-[#DFE4F1] text-[#1F2A44] hover:border-[#2B1E6B] bg-[#FFF9F1]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Card Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#FFF9F1] rounded-2xl border border-[#DFE4F1] p-8 space-y-3">
            <h3 className="font-serif font-bold text-lg text-[#2B1E6B]">
              No services match your criteria
            </h3>
            <p className="text-xs text-[#5B6477]">
              Try searching for a different keyword or select another category above.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2 rounded-full bg-[#FFB020] text-[#2B1E6B] font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-[#DFE4F1] bg-white transition-all duration-200 hover:border-[#2B1E6B]/30 hover:shadow-card flex flex-col justify-between"
              >
                {/* Photo with Navy Overlay and Uppercase Title */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-[#1B1247]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[#0F2F66]/45 flex items-end p-5">
                    <span className="font-condensed font-bold text-base sm:text-lg text-white uppercase tracking-wider leading-tight drop-shadow-xs">
                      {item.overlayTitle}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#E0603A] uppercase tracking-wider">
                        {item.categoryLabel}
                      </span>
                      {item.popular && (
                        <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-[#FFB020]/30 text-[#2B1E6B] font-bold border border-[#FFB020]">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-sans font-bold text-base text-[#1B1247]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B6477] leading-relaxed line-clamp-3 font-sans">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Circular Blue Arrow Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={`/services/${item.slug}`}
                      className="text-xs font-bold text-[#2B1E6B] hover:text-[#2B1E6B] transition-colors"
                    >
                      View Details & Checklist
                    </Link>
                    <Link
                      to={`/services/${item.slug}`}
                      aria-label={`Explore ${item.title}`}
                      className="w-9 h-9 rounded-full bg-[#2B1E6B] hover:bg-[#2B1E6B] text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 active:scale-95"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Need Custom Advisory Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#FFF9F1] border border-[#DFE4F1] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-[#2B1E6B]">
              Looking for a custom combination of services?
            </h3>
            <p className="text-xs sm:text-sm text-[#5B6477]">
              Our advisory team bundles entity incorporation with GST, MSME, and ongoing compliance.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('business')}
            className="px-8 py-3 rounded-full bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] font-bold text-xs uppercase tracking-wider shadow-xs border border-[#FFB020] flex-shrink-0"
          >
            REQUEST FREE CONSULTATION
          </button>
        </div>

      </div>
    </div>
  );
};
