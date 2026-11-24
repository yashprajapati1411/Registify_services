import React from 'react';

interface HeroSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  return (
    <div className="relative bg-[#FFF9F1] overflow-hidden">
      
      {/* 1. HERO SECTION (Matches registify-india-map-home (1).html) */}
      <section className="relative min-h-[760px] lg:h-[800px] bg-[#2B1E6B] text-white overflow-hidden z-10 pt-28 sm:pt-32 lg:pt-36">
        
        {/* Background Map Texture with mix-blend-mode: screen */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -left-32 top-6 w-[1700px] h-[956px] opacity-35"
            style={{
              backgroundImage: 'url(/images/map_bg.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              mixBlendMode: 'screen',
            }}
          />
          {/* Dark Royal Purple Veil */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(43,30,107,0.92) 0%, rgba(43,30,107,0.40) 60%, rgba(43,30,107,0.85) 100%)',
            }}
          />
        </div>

        {/* Decorative SVG Circles & Inverted Wedge Cut at bottom */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <svg
            viewBox="0 0 1440 800"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
          >
            <circle cx="1240" cy="120" r="260" fill="#35267F" opacity="0.7" />
            <circle cx="160" cy="470" r="200" fill="#35267F" opacity="0.7" />
            
            {/* Lilac Backing Wedge */}
            <path d="M0 620 L720 798 L1440 620 L1440 800 L0 800Z" fill="#CFC6FF" />
            {/* Cream Front Wedge */}
            <path d="M0 638 L720 798 L1440 638 L1440 800 L0 800Z" fill="#FFF9F1" />
          </svg>
        </div>

        {/* Center Main Content: Heading, Subtitle & Buttons */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          
          {/* Main H1 Headline in Oswald uppercase */}
          <h1 className="font-condensed font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.04] uppercase text-white tracking-wide drop-shadow-sm">
            We help entrepreneurs<br />
            establish, register, certify<br />
            and grow
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#DCD6FB] max-w-3xl mx-auto font-sans leading-relaxed">
            From company incorporation, Startup India registration, MSME, GST, certifications,
            compliances and financial facilitation, all under one dependable roof.
          </p>

          {/* Buttons with generous clearance below */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pb-6">
            <button
              type="button"
              onClick={onExploreServices}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#FFB020] hover:bg-[#E59D10] text-[#1B1247] font-condensed font-bold text-xl tracking-wider uppercase transition-all duration-200 shadow-btn hover:scale-105 active:scale-95"
            >
              Explore services
            </button>

            <button
              type="button"
              onClick={() => onOpenConsultation('business')}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white hover:bg-[#F1EEFF] text-[#2B1E6B] font-condensed font-bold text-xl tracking-wider uppercase transition-all duration-200 shadow-lg hover:scale-105 active:scale-95"
            >
              Free consultation
            </button>
          </div>

        </div>

      </section>

      {/* 2. CERTIFICATES & WARM CREAM GAP (Completely unclipped at top, shadow comfortably inside beige area) */}
      <div className="relative bg-[#FFF9F1] min-h-[220px] lg:h-[260px] z-20 flex justify-center items-start pt-2 sm:pt-4 pb-6">
        
        {/* Floating Certificates Container: Rises naturally into hero wedge with zero top clipping */}
        <div className="relative -top-10 sm:-top-14 lg:-top-16 w-full max-w-[700px] h-[300px] px-4 flex justify-center">
          <svg
            viewBox="0 0 700 300"
            className="w-full h-full overflow-visible"
          >
            {/* Ground Shadow: strictly inside beige section */}
            <ellipse cx="350" cy="270" rx="270" ry="14" fill="#000000" opacity="0.10" />

            {/* UDYAM • MSME Card (Tilted Left) */}
            <g transform="rotate(-9 150 170)" className="anim-float pointer-events-auto cursor-pointer">
              <rect x="60" y="110" width="170" height="110" rx="14" fill="#FFFFFF" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.15))" />
              <rect x="60" y="110" width="170" height="30" rx="14" fill="#FFB020" />
              <rect x="60" y="126" width="170" height="14" fill="#FFB020" />
              <text x="76" y="132" fontFamily="Open Sans" fontWeight="800" fontSize="14" fill="#1B1247">
                UDYAM · MSME
              </text>
              <rect x="76" y="156" width="110" height="8" rx="4" fill="#D9D3F5" />
              <rect x="76" y="174" width="130" height="8" rx="4" fill="#EBE7FB" />
              <rect x="76" y="192" width="80" height="8" rx="4" fill="#EBE7FB" />
            </g>

            {/* Certificate of Incorporation Document (Center) */}
            <g transform="rotate(3 350 150)" className="anim-float-reverse pointer-events-auto cursor-pointer">
              <rect x="235" y="26" width="230" height="250" rx="16" fill="#FFFFFF" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.2))" />
              <rect
                x="251"
                y="42"
                width="198"
                height="218"
                rx="8"
                fill="none"
                stroke="#2B1E6B"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text x="350" y="82" textAnchor="middle" fontFamily="Open Sans" fontWeight="800" fontSize="13" fill="#2B1E6B">
                CERTIFICATE OF
              </text>
              <text x="350" y="102" textAnchor="middle" fontFamily="Open Sans" fontWeight="800" fontSize="19" fill="#2B1E6B">
                INCORPORATION
              </text>
              <rect x="290" y="116" width="120" height="6" rx="3" fill="#D9D3F5" />
              <rect x="274" y="136" width="152" height="6" rx="3" fill="#EBE7FB" />
              <rect x="274" y="152" width="152" height="6" rx="3" fill="#EBE7FB" />
              <rect x="274" y="168" width="110" height="6" rx="3" fill="#EBE7FB" />

              {/* Gold Star Medal Seal */}
              <circle cx="350" cy="224" r="28" fill="#FFB020" />
              <circle cx="350" cy="224" r="21" fill="none" stroke="#1B1247" strokeWidth="2" />
              <path
                d="M 350 207 l 5 11 12 1 -9 8 3 12 -11 -7 -11 7 3 -12 -9 -8 12 -1 z"
                fill="#1B1247"
              />
            </g>

            {/* GST Coral Red Badge */}
            <g className="anim-float pointer-events-auto cursor-pointer">
              <circle cx="560" cy="190" r="56" fill="#FF6B5A" filter="drop-shadow(0 10px 20px rgba(255,107,90,0.35))" />
              <circle cx="560" cy="190" r="46" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 4" />
              <text x="560" y="200" textAnchor="middle" fontFamily="Open Sans" fontWeight="800" fontSize="30" fill="#FFFFFF">
                GST
              </text>
            </g>

            {/* ISO Badge (Top Left) */}
            <circle cx="120" cy="62" r="36" fill="#FFFFFF" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.1))" />
            <circle cx="120" cy="62" r="28" fill="#F1EEFF" />
            <text x="120" y="68" textAnchor="middle" fontFamily="Open Sans" fontWeight="800" fontSize="17" fill="#2B1E6B">
              ISO
            </text>

            {/* TM® Badge (Top Right) */}
            <circle cx="610" cy="70" r="30" fill="#FFFFFF" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.1))" />
            <text x="610" y="76" textAnchor="middle" fontFamily="Open Sans" fontWeight="800" fontSize="14" fill="#2B1E6B">
              TM®
            </text>

            {/* Floating Paper Accents */}
            <polygon points="520,30 610,-10 560,50 548,36" fill="#FFFFFF" />
            <polygon points="548,36 560,50 540,54" fill="#D9D3F5" />
            <circle cx="40" cy="170" r="6" fill="#FFB020" />
            <circle cx="670" cy="140" r="5" fill="#FFFFFF" />
            <circle cx="200" cy="30" r="4" fill="#FFB020" />
          </svg>
        </div>

      </div>

    </div>
  );
};
