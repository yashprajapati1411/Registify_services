import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, Users, User, Handshake, Briefcase, 
  HeartHandshake, Building2, Shield, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { BUSINESS_SERVICES } from '../../data/businessData';

interface BusinessRegistrationSectionProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Building,
  Users,
  User,
  Handshake,
  Briefcase,
  HeartHandshake,
  Building2,
  Shield,
};

export const BusinessRegistrationSection: React.FC<BusinessRegistrationSectionProps> = ({ onOpenConsultation }) => {
  const incorporationServices = BUSINESS_SERVICES.filter(s => s.category === 'Company Registration');

  return (
    <section id="incorporation" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            DIVISION B: INCORPORATION & FORMATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight">
            Build Your Business on the Right Foundation.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every successful business begins with the right structure and proper documentation. Our team assists entrepreneurs and business owners with selecting appropriate registration options and coordinating the required incorporation formalities.
          </p>
        </div>

        {/* 8 Incorporation Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {incorporationServices.map((service) => {
            const Icon = iconMap[service.iconName] || Building;
            return (
              <div
                key={service.id}
                className="bg-[#F7F9FC] rounded-2xl p-6 border border-slate-200 hover:border-teal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white text-teal-600 border border-slate-200 flex items-center justify-center group-hover:bg-[#18A999] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                    {service.benefits.slice(0, 2).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2">
                  <Link
                    to={`/business/${service.slug}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-white border border-slate-200 hover:border-teal-300 text-xs font-semibold text-slate-700 hover:text-teal-700 text-center transition-colors"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => onOpenConsultation('business', service.title)}
                    className="py-2 px-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#142B49] to-[#246BCE] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Unsure which entity structure fits your commercial vision?</h4>
            <p className="text-xs text-slate-300">
              Our consultants assess liability, tax considerations, and investor compatibility before incorporation.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('business', 'Entity Structure Assessment')}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-xs font-bold transition-all shadow-md flex-shrink-0 flex items-center gap-2"
          >
            <span>Request Structure Advisory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
