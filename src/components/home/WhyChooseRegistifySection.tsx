import React from 'react';

export const WhyChooseRegistifySection: React.FC = () => {
  const points = [
    {
      num: '1',
      title: 'Single Window Corporate Advisory',
      description:
        'Company incorporation, statutory recognitions, international certifications, and annual compliance handled under one unified roof.',
    },
    {
      num: '2',
      title: 'Pre-Vetted Regulatory Dossiers',
      description:
        'Standardized document checklists prepared by company secretaries preventing authority rejections and procedural delays.',
    },
    {
      num: '3',
      title: 'Total Statutory Fee Transparency',
      description:
        'Completely transparent fee structures with unequivocal separation between MCA/statutory government challans and advisory charges.',
    },
    {
      num: '4',
      title: 'Pan-India Execution Network',
      description:
        'Headquartered with strong ground presence in Gujarat, facilitating seamless 100% digital filings for entrepreneurs across all Indian states.',
    },
    {
      num: '5',
      title: 'Dedicated Account Managers',
      description:
        'Single point of contact for every enterprise providing real-time WhatsApp and phone updates throughout application milestones.',
    },
    {
      num: '6',
      title: 'Post-Registration Growth Support',
      description:
        'Continuous compliance calendars, GST return alerts, government subsidy guidance, and corporate finance assistance as you scale.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-t border-[#DFE4F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-sans font-bold text-sm sm:text-base text-[#6B6590] uppercase tracking-wider block mb-1">
            Why us
          </span>
          <h2 className="font-condensed font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#2B1E6B] uppercase leading-tight tracking-tight">
            Why choose<br />Registify
          </h2>
        </div>

        {/* 6-Point Grid with Circular Lilac Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFF9F1] border border-[#DFE4F1] hover:border-[#FFB020] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Circular Number Badge */}
                <div className="w-12 h-12 rounded-full bg-[#F1EEFF] text-[#2B1E6B] font-sans font-bold text-xl flex items-center justify-center mb-5 group-hover:bg-[#FFB020] group-hover:text-[#1B1247] transition-colors shadow-sm">
                  {pt.num}
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#2B1E6B] mb-2 leading-snug">
                  {pt.title}
                </h3>

                {/* Supporting description */}
                <p className="font-sans text-xs sm:text-sm text-[#5B567F] leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DFE4F1]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#FFB020] uppercase tracking-wider">
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
