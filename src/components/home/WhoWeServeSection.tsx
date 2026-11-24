import React from 'react';
import { 
  Rocket, Lightbulb, Store, Factory, Truck, ShoppingBag, 
  UserCheck, Briefcase, Users, HeartHandshake, Building2, User 
} from 'lucide-react';

export const WhoWeServeSection: React.FC = () => {
  const segments = [
    {
      title: 'Entrepreneurs & First-Time Founders',
      description: 'Navigating entity selection, incorporation paperwork, and statutory PAN/TAN/GST setups.',
      icon: Lightbulb
    },
    {
      title: 'Startups & Scale-ups',
      description: 'DPIIT Startup India recognition, Section 80-IAC tax holiday filing, and venture-ready Pvt Ltd governance.',
      icon: Rocket
    },
    {
      title: 'MSME Owners',
      description: 'Udyam registration, delayed payment protection, and priority sector working capital coordination.',
      icon: Store
    },
    {
      title: 'Manufacturers & Industrialists',
      description: 'Machinery finance, factory project reports (DPR), pollution clearances, and ISO quality systems.',
      icon: Factory
    },
    {
      title: 'Traders & Wholesale Distributors',
      description: 'Cash Credit / Overdraft lines, Import Export Code (IEC), APEDA, and GST reconciliation.',
      icon: Truck
    },
    {
      title: 'Retail Merchants & E-Commerce',
      description: 'FSSAI licensing, GeM seller onboarding, trademark protection, and current account setup.',
      icon: ShoppingBag
    },
    {
      title: 'Professionals & Consultants',
      description: 'Doctors, CAs, architects, and IT consultants setting up LLPs and managing professional taxes.',
      icon: Briefcase
    },
    {
      title: 'Salaried Individuals',
      description: 'Facilitating home loans, personal loans, vehicle loans, and individual income tax returns.',
      icon: UserCheck
    },
    {
      title: 'Self-Employed Individuals',
      description: 'Securing property-backed loans, personal credit lines, and structured financial profiling.',
      icon: User
    },
    {
      title: 'Established Companies',
      description: 'Annual ROC secretarial filings, registered office changes, share capital increases, and compliance audits.',
      icon: Building2
    },
    {
      title: 'NGOs & Non-Profits',
      description: 'Section 8 incorporation, Trust registrations, 12A & 80G tax exemptions, and NGO Darpan listings.',
      icon: HeartHandshake
    },
    {
      title: 'Pan-India Partnerships',
      description: 'Deed drafting coordination, RoF registrations, firm PAN cards, and commercial bank onboarding.',
      icon: Users
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            OUR CLIENT FOCUS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Tailored Solutions for Every Business Stage & Individual Need
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From solo founders registering their first firm in Gujarat to established enterprises securing credit facilities across India, our advisory meets you where you are.
          </p>
        </div>

        {/* 12 Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {segments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl p-5 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-teal-600 border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-[#18A999] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
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
