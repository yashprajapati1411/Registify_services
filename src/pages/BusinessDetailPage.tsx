import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Building, CheckCircle2, ShieldCheck, Clock, FileText, 
  HelpCircle, ArrowRight, MessageCircle, AlertCircle, ChevronRight, Scale 
} from 'lucide-react';
import { getBusinessServiceBySlug, BUSINESS_SERVICES } from '../data/businessData';
import { submitBusinessEnquiry } from '../services/enquiryService';

interface BusinessDetailPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const BusinessDetailPage: React.FC<BusinessDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = getBusinessServiceBySlug(slug || '');

  // Embedded Lead Enquiry Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    businessName: '',
    businessType: 'Private Limited / Startup',
    city: 'Ahmedabad',
    state: 'Gujarat',
    additionalInformation: '',
    consent: true
  });

  if (!service) {
    return <Navigate to="/business" replace />;
  }

  const relatedServices = BUSINESS_SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      setFormError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitBusinessEnquiry({
        fullName: formData.fullName,
        mobile: cleanMobile,
        email: formData.email,
        businessName: formData.businessName,
        businessType: formData.businessType,
        city: formData.city,
        state: formData.state,
        serviceCategory: service.category,
        specificService: service.title,
        additionalInformation: formData.additionalInformation,
        consent: formData.consent,
        sourcePage: window.location.pathname
      });

      if (res.success) {
        setEnquiryId(res.enquiryId);
        setFormSubmitted(true);
      } else {
        setFormError(res.error || 'Could not process enquiry. Please try again.');
      }
    } catch {
      setFormError('An error occurred. Please reach out via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Registify Services, I would like to enquire about ${service.title}. Please guide me through the process.`
  );

  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-[#142B49]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/business" className="hover:text-[#142B49]">Business Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#142B49] font-bold">{service.title}</span>
        </nav>

        {/* 1. HERO SECTION */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-5 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600/40 text-teal-200 text-xs font-semibold border border-teal-400/30">
              <Building className="w-3.5 h-3.5 text-teal-300" />
              <span>{service.category.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="px-6 py-3.5 bg-teal-500 hover:bg-teal-600 text-[#142B49] rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>Get Started & Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/919725991607?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Full Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 2. SERVICE OVERVIEW */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Service Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            {/* 3. WHO NEEDS THIS SERVICE? */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Who Needs This Service?
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {service.whoNeedsIt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-teal-50 text-teal-600 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. BENEFITS & PURPOSE */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Key Benefits & Purpose
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. ELIGIBILITY OR APPLICABILITY */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Applicability & Regulatory Norms
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {service.applicability.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. REQUIRED DOCUMENTS */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Required Documents Checklist
              </h2>
              <p className="text-xs text-slate-500">
                Ensure clear digital copies (under 2MB, PDF/JPEG) before submission:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <FileText className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. STEP-BY-STEP PROCESS */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Step-by-Step Registration Workflow
              </h2>
              <div className="space-y-4">
                {service.process.map(p => (
                  <div key={p.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#142B49] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                      {p.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#142B49]">{p.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. FREQUENTLY ASKED QUESTIONS */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                    <h4 className="text-sm font-bold text-[#142B49] flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 9. RELATED SERVICES */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Related Business Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map(rel => (
                  <Link
                    key={rel.id}
                    to={`/business/${rel.slug}`}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#142B49] group-hover:text-teal-600 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-teal-600 mt-3 flex items-center gap-1">
                      View Service →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Lead Enquiry Form */}
          <div className="lg:col-span-4 space-y-6">
            <div id="enquiry-form" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-teal-200 shadow-elevated sticky top-24 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block">
                  CONSULTATION REQUEST
                </span>
                <h3 className="text-lg font-bold text-[#142B49]">
                  Inquire for {service.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details for prompt professional guidance.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-[#142B49]">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-600">
                    Your unique enquiry ID is:
                  </p>
                  <span className="font-mono font-bold text-sm text-[#142B49] bg-white px-3 py-1.5 rounded-lg border border-slate-200 block">
                    {enquiryId}
                  </span>
                  <p className="text-xs text-slate-500">
                    Our compliance advisor will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(`Hello Registify Services, I submitted business enquiry [${enquiryId}] for ${service.title}. Please check.`);
                      window.open(`https://wa.me/919725991607?text=${msg}`, '_blank');
                    }}
                    className="w-full py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold shadow-sm"
                  >
                    Continue on WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {formError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Patel"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-2.5 text-xs text-slate-500 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9725991607"
                        value={formData.mobile}
                        onChange={e => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-r-xl focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Business Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Tech Innovations"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">City *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ahmedabad"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={e => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Requirements</label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your timeline, directors, or specific questions..."
                      value={formData.additionalInformation}
                      onChange={e => setFormData({ ...formData, additionalInformation: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="bizDetailConsent"
                      checked={formData.consent}
                      onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-3.5 h-3.5 text-teal-600 rounded border-slate-300"
                    />
                    <label htmlFor="bizDetailConsent" className="text-[11px] text-slate-500 leading-tight">
                      I agree to receive consultation from Registify Services. I acknowledge Registify Services is a private consultancy firm.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-xs shadow-md transition-all disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Submit Consultation Request'}
                  </button>
                </form>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Prefer direct chat?</span>
                <a
                  href={`https://wa.me/919725991607?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
