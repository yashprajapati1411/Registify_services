import React from 'react';
import { Layers, Compass, MessageCircle, FolderCheck, HeartHandshake, Globe } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: Layers,
      title: 'Multiple Solutions Under One Roof',
      description: 'Access loan assistance, registrations, certifications, and compliance services through one consultancy, eliminating the need to juggle multiple independent vendors.'
    },
    {
      icon: Compass,
      title: 'Personalized Guidance',
      description: 'We assess your unique requirements, stage of growth, and financial profile before recommending a suitable incorporation structure or commercial financing option.'
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description: 'Clear, straightforward information about required documentation, professional charges, statutory government fees, service scopes, and expected procedural timelines.'
    },
    {
      icon: FolderCheck,
      title: 'Organized Documentation',
      description: 'Structured, checklist-driven assistance in assembling, checking, and coordinating the exact files needed to avoid common rejections or clarifications.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Focused Support',
      description: 'Direct communication channels via phone, email, and WhatsApp, ensuring you remain updated on application milestones from intake to completion.'
    },
    {
      icon: Globe,
      title: 'Pan-India Assistance',
      description: 'Operating with deep roots in Gujarat, our digital consultancy framework serves entrepreneurs, professionals, and enterprises across all states and Union Territories.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-royal-600 bg-royal-50 px-3 py-1 rounded-full border border-royal-200">
            THE REGISTIFY ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Why Choose Registify Services?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We focus on structured processes, ethical communication, and practical support to make business administration and loan facilitation straightforward.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-royal-400 hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-royal-50 text-royal-600 group-hover:bg-[#142B49] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Commitment Note */}
        <div className="mt-12 p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-500 text-center max-w-3xl mx-auto">
          Registify Services adheres to transparent, ethical business advisory. We do not make false promises of guaranteed government approvals or instant loan sanctions. All outcomes depend upon statutory authorities and lender criteria.
        </div>

      </div>
    </section>
  );
};
