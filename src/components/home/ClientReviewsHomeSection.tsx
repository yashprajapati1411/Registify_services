import React, { useState } from 'react';

interface Review {
  id: string;
  clientTitle: string;
  name: string;
  role: string;
  city: string;
  quote: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 'aarav',
    clientTitle: 'AARAV SHAH',
    name: 'AARAV SHAH',
    role: 'Founder & CEO, TechVenture Labs',
    city: 'Ahmedabad, Gujarat',
    quote:
      'Registify Services made our company registration and GST process smooth and completely hassle-free. Their checklist-driven support gave our founding team immense peace of mind during our launch phase.',
  },
  {
    id: 'priya',
    clientTitle: 'PRIYA DESAI',
    name: 'PRIYA DESAI',
    role: 'Managing Partner, Apex Textiles',
    city: 'Surat, Gujarat',
    quote:
      'Great support for MSME and Startup India recognition. The advisory team is thoroughly knowledgeable, completely transparent with government challan fees, and always responsive on WhatsApp.',
  },
  {
    id: 'rohan',
    clientTitle: 'ROHAN MEHTA',
    name: 'ROHAN MEHTA',
    role: 'Director, Precision Engineering Works',
    city: 'Vadodara, Gujarat',
    quote:
      'We secured our ISO management standards and FSSAI manufacturing license with complete procedural clarity. A truly reliable, professional, and responsive corporate partner for growing Indian industries.',
  },
];

export const ClientReviewsHomeSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const currentReview = REVIEWS_DATA[activeIndex];

  return (
    <section className="relative bg-[#FFF9F1] py-20 md:py-28 overflow-hidden border-t border-[#DFE4F1]">
      
      {/* Decorative Geometric Polygon with Matching Warm Beige Interior & Full-Length Logo */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[280px] xl:w-[360px] 2xl:w-[420px] h-[400px] xl:h-[440px] pointer-events-none z-0">
        {/* Outer Navy Polygon Frame */}
        <div
          className="absolute inset-0 bg-[#2B1E6B] shadow-2xl"
          style={{
            clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',
          }}
        />
        
        {/* Inner Beige Polygon (Matching website background #FFF9F1, replacing white) */}
        <div
          className="absolute top-3.5 bottom-3.5 right-0 left-4 xl:top-4 xl:bottom-4 xl:left-5 bg-[#FFF9F1] flex items-center justify-center overflow-hidden"
          style={{
            clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',
          }}
        >
          {/* Logo completely inside polygon at full length / height with zero circle/square artifacts */}
          <div className="relative w-full h-full flex items-center justify-center pl-10 pr-4 xl:pl-14 xl:pr-6 py-4 xl:py-6">
            <img
              src="/images/registify-mark-transparent.png"
              alt="Registify Services Official Logo"
              loading="lazy"
              decoding="async"
              className="w-full h-full max-h-[340px] object-contain select-none"
            />
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <span className="font-sans font-bold text-sm sm:text-base text-[#6B6590] uppercase tracking-wider block mb-1">
            Testimonials
          </span>
          <h2 className="font-condensed font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#2B1E6B] uppercase leading-none tracking-tight">
            Client<br className="hidden sm:inline" /> reviews
          </h2>
        </div>

        {/* Two-Column Grid: Client List on Left, Active Review on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* Client Tab Selectors */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 relative z-10">
            {REVIEWS_DATA.map((rev, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={rev.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left py-3 sm:py-4 px-4 sm:px-0 border-b transition-all duration-200 whitespace-nowrap lg:whitespace-normal rounded-xl lg:rounded-none ${
                    isActive
                      ? 'border-[#2B1E6B] text-[#2B1E6B] font-extrabold bg-white lg:bg-transparent px-4'
                      : 'border-[#D9D3F5] text-[#9A95B5] hover:text-[#2B1E6B] font-medium'
                  }`}
                >
                  <span className="font-condensed text-xl sm:text-2xl md:text-3xl tracking-wide uppercase block">
                    {rev.clientTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Review Quote & Details (Guaranteed clearance from the side card) */}
          <div className="lg:col-span-5 max-w-[360px] xl:max-w-md bg-white/70 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-[#DFE4F1]/50 lg:border-none space-y-4 relative z-10">
            
            {/* Giant Amber Quotation Mark */}
            <div className="font-serif font-bold text-7xl sm:text-8xl md:text-9xl text-[#FFB020] leading-[0.6] select-none">
              &ldquo;
            </div>

            {/* Review Body */}
            <blockquote className="font-sans text-lg sm:text-xl md:text-2xl text-[#3B3563] leading-relaxed pt-2">
              {currentReview.quote}
            </blockquote>

            {/* Client Signature */}
            <div className="pt-4 border-t border-[#DFE4F1]/70">
              <span className="font-condensed font-bold text-xl sm:text-2xl text-[#2B1E6B] uppercase tracking-wide block">
                {currentReview.name}
              </span>
              <span className="font-sans text-xs sm:text-sm text-[#6B6590] mt-0.5 block">
                {currentReview.role} • {currentReview.city}
              </span>
            </div>

            {/* Quick Mobile Carousel Dots */}
            <div className="flex gap-2 pt-2 lg:hidden">
              {REVIEWS_DATA.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === i ? 'bg-[#FFB020] w-6' : 'bg-[#D9D3F5]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
