import React from 'react';
import { Layers, UserCheck, FolderCheck, Compass } from 'lucide-react';

export const TrustIntroSection: React.FC = () => {
  const valueProps = [
    {
      icon: Layers,
      title: 'Multiple Services Under One Roof',
      description: 'Access company incorporation, business certifications, statutory tax compliance, and commercial loan facilitation through one dependable partner.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Consultation',
      description: 'We take the time to understand your operational stage, capital needs, and eligibility before recommending specific service pathways or loan categories.'
    },
    {
      icon: FolderCheck,
      title: 'Structured Documentation Support',
      description: 'Eliminate confusion with organized document checklists, methodical application dossiers, and proactive verification prior to authority or lender submission.'
    },
    {
      icon: Compass,
      title: 'Assistance Across India',
      description: 'Headquartered in Gujarat, our modern digital workflow provides seamless consultation and coordination to entrepreneurs across all Indian states and Union Territories.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            About Registify Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            One Trusted Destination for Your Business Needs.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Managing a business involves several important financial, regulatory and administrative responsibilities. Finding the right support for every requirement can be time-consuming. 
            Registify Services brings multiple business solutions together on one platform. From exploring financing opportunities to completing company registrations and obtaining essential certifications, we help you navigate each step with clarity and convenience.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Our focus is on transparent communication, organized processes and customer-oriented assistance.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl p-6 border border-slate-200/80 hover:border-royal-300 hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white text-royal-600 border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-[#142B49] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
