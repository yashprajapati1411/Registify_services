import React from 'react';
import { MessageSquare, FileCheck2, Cog, CheckCircle2, Clock } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Share Your Requirement',
      description: 'Tell us what you need—whether it’s a commercial loan, company incorporation, certification, or compliance support—via our form or WhatsApp.',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Consultation & Assessment',
      description: 'Our consultants review your requirements, verify eligibility factors, explain available pathways, and provide transparent fee and timeline outlines.',
      icon: FileCheck2
    },
    {
      step: '03',
      title: 'Documentation & Processing',
      description: 'We organize your document dossier, prepare digital applications, and coordinate directly with the relevant institutional or regulatory channels.',
      icon: Cog
    },
    {
      step: '04',
      title: 'Updates & Completion',
      description: 'You receive clear milestone updates throughout processing until your registration, certification, or loan coordination concludes.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-royal-600 bg-royal-50 px-3 py-1 rounded-full border border-royal-200">
            HOW OUR PROCESS WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Simple Process. Clear Communication. Organized Execution.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We remove administrative friction from your workflow with a transparent four-step engagement model designed for clarity and peace of mind.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 hover:border-royal-400 hover:shadow-card transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Step Pill */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-royal-50 text-royal-600 group-hover:bg-[#142B49] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-royal-500 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-teal-600 transition-colors">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          * Please note: Timelines, document requests, and final approvals depend on the applicable statutory registry (MCA, GSTN, Trademark Registry, DGFT) or institutional lender credit assessment schedules.
        </div>

      </div>
    </section>
  );
};
