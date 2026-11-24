import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, PhoneCall, CheckCircle } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 md:py-28 bg-[#142B49] text-white relative overflow-hidden">
      {/* Background Subtle Geometrics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-semibold backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>Your Business. Our Guidance. Simplified.</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Let's Take the Next Step Towards Your Goals.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you're planning a new venture, need financial assistance or want help managing your business registrations and compliance, our team is ready to understand your requirements.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Structured Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Transparent Pricing & Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Dedicated Follow-up Desk</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-600 text-[#091a30] hover:text-white rounded-xl font-extrabold text-sm transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919725991607?text=Hello%20Registify%20Services%2C%20I%20am%20ready%20to%20take%20the%20next%20step%20and%20would%20like%20to%20consult%20with%20your%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-sm transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400">
          Registify Services is an independent business consultancy and loan facilitation firm. Not a government agency.
        </p>

      </div>
    </section>
  );
};
