import React, { useEffect, useState, useRef } from 'react';

export const AboutUsHomeSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, funds: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCounts({ years: 6, projects: 10, funds: 30 });
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts({
              years: Math.min(6, Math.round(6 * progress)),
              projects: Math.min(10, Math.round(10 * progress)),
              funds: Math.min(30, Math.round(30 * progress))
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({ years: 6, projects: 10, funds: 30 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#F7F9FD] border-t border-[#DFE4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Centered Heading */}
        <div className="text-center space-y-2">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E0603A]">
            Who we are
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#27368F]">
            About us
          </h2>
        </div>

        {/* Two Columns: Photo/Illustration on Left, Text + Vision/Mission on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo / Card Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DFE4F1] shadow-card bg-white aspect-[4/3]">
              <img
                src="/images/services/office-about.jpg"
                alt="Registify Services Corporate Office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0F2F66]/30 flex items-end p-6">
                <div className="bg-white/95 backdrop-blur-xs rounded-xl p-4 w-full border border-white/40 shadow-xs">
                  <span className="text-[11px] font-bold text-[#27368F] uppercase tracking-wider block">
                    Headquartered in Gujarat • Serving Pan-India
                  </span>
                  <p className="text-xs text-[#5B6477] mt-0.5">
                    Bridging the complexity of business setup, compliance, and capital access.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Text & Vision / Mission Blocks */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-[#1F2A44] leading-relaxed">
              Registify Services was founded to eliminate the fragmentation entrepreneurs face when establishing and scaling an enterprise. By consolidating company incorporation, government registrations, ongoing compliance calendars, and institutional finance under one structured roof, we empower business owners to focus on what matters most: growing their core venture.
            </p>

            {/* Vision & Mission Horizontal Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-5 rounded-xl border border-[#DFE4F1] space-y-2 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#E0603A] font-sans">
                  Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6477] leading-relaxed">
                  To be the most dependable growth partner for startups and businesses by making entity formation and compliance simple and accessible.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-[#DFE4F1] space-y-2 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#E0603A] font-sans">
                  Mission
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6477] leading-relaxed">
                  To provide end-to-end guidance in corporate registration, statutory certifications, annual compliances, and commercial financing.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Row of Credibility Stats in Yellow Circles (Seed Fund Scheme Style) */}
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            
            {/* Stat 1: 6+ Years */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#F7D774] flex items-center justify-center shadow-xs border border-[#E9C458]">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#27368F] font-serif">
                  {counts.years}+
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F2A44] mt-4 uppercase tracking-wider font-sans">
                Years of experience
              </span>
            </div>

            {/* Stat 2: 10k+ Projects */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#F7D774] flex items-center justify-center shadow-xs border border-[#E9C458]">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#27368F] font-serif">
                  {counts.projects}k+
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F2A44] mt-4 uppercase tracking-wider font-sans">
                Projects delivered
              </span>
            </div>

            {/* Stat 3: 30Cr+ Funds */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#F7D774] flex items-center justify-center shadow-xs border border-[#E9C458]">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#27368F] font-serif">
                  {counts.funds}Cr+
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#1F2A44] mt-4 uppercase tracking-wider font-sans">
                Funds secured
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
