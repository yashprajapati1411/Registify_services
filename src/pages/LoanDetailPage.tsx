import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Landmark, CheckCircle2, ShieldCheck, Clock, FileText, 
  HelpCircle, ArrowRight, MessageCircle, AlertCircle, ChevronRight, Phone 
} from 'lucide-react';
import { getLoanBySlug, LOAN_SERVICES } from '../data/loansData';
import { submitLoanEnquiry } from '../services/enquiryService';

interface LoanDetailPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const LoanDetailPage: React.FC<LoanDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const loan = getLoanBySlug(slug || '');

  // Embedded Lead Enquiry Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    employmentType: 'Business Owner' as 'Salaried' | 'Self-employed' | 'Business Owner' | 'Other',
    requiredAmount: '₹ 25 Lakhs - ₹ 50 Lakhs',
    monthlyIncome: '',
    existingObligations: '',
    additionalRequirements: '',
    consent: true
  });

  if (!loan) {
    return <Navigate to="/loans" replace />;
  }

  const relatedLoans = LOAN_SERVICES.filter(l => l.id !== loan.id).slice(0, 3);

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
      const res = await submitLoanEnquiry({
        fullName: formData.fullName,
        mobile: cleanMobile,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        employmentType: formData.employmentType,
        loanCategory: loan.title,
        requiredAmount: formData.requiredAmount,
        monthlyIncome: formData.monthlyIncome,
        existingObligations: formData.existingObligations,
        additionalRequirements: formData.additionalRequirements,
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
    `Hello Registify Services, I am interested in your ${loan.title} assistance. Please share the details.`
  );

  return (
    <div className="bg-[#F7F9FC] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-[#142B49]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/loans" className="hover:text-[#142B49]">Loans</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#142B49] font-bold">{loan.title}</span>
        </nav>

        {/* 1. HERO SECTION */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-5 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-600/40 text-royal-200 text-xs font-semibold border border-royal-400/30">
              <Landmark className="w-3.5 h-3.5 text-teal-400" />
              <span>COMMERCIAL LOAN FACILITATION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {loan.title} Assistance
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {loan.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="px-6 py-3.5 bg-teal-500 hover:bg-teal-600 text-[#142B49] rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>Check Eligibility & Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/919725991607?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Main Layout: Details Left, Lead Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Full Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 2. SERVICE OVERVIEW */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Service Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {loan.longDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {loan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. WHO NEEDS THIS SERVICE? */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Who Is This Loan Ideal For?
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {loan.idealFor.map((target, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-royal-50 text-royal-600 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{target}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 & 5. ELIGIBILITY CRITERIA */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                General Eligibility Considerations
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {loan.eligibility.map((el, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-royal-500 flex-shrink-0 mt-0.5" />
                    <span>{el}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. REQUIRED DOCUMENTS */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <h2 className="text-xl font-bold text-[#142B49] border-b border-slate-100 pb-3">
                Standard Documents Required
              </h2>
              <p className="text-xs text-slate-500">
                Having these records organized accelerates bank credit appraisal:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {loan.documents.map((doc, idx) => (
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
                How the Facilitation Process Works
              </h2>
              <div className="space-y-4">
                {loan.process.map(p => (
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
                {loan.faqs.map((faq, idx) => (
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
                Related Financial Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedLoans.map(rel => (
                  <Link
                    key={rel.id}
                    to={`/loans/${rel.slug}`}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-royal-50 border border-slate-200 hover:border-royal-300 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#142B49] group-hover:text-royal-600 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-royal-600 mt-3 flex items-center gap-1">
                      View Service →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Lead Enquiry Form */}
          <div className="lg:col-span-4 space-y-6">
            <div id="enquiry-form" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-royal-200 shadow-elevated sticky top-24 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-royal-600 uppercase tracking-widest block">
                  FAST-TRACK ENQUIRY
                </span>
                <h3 className="text-lg font-bold text-[#142B49]">
                  Enquire for {loan.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details for a confidential preliminary assessment.
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
                    Our team will contact you within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(`Hello Registify Services, I have submitted loan enquiry [${enquiryId}] for ${loan.title}. Please check.`);
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
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
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
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-r-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
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
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={e => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Employment / Business Type *</label>
                    <select
                      value={formData.employmentType}
                      onChange={e => setFormData({ ...formData, employmentType: e.target.value as any })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500 bg-white"
                    >
                      <option value="Business Owner">Business Owner</option>
                      <option value="Salaried">Salaried</option>
                      <option value="Self-employed">Self-employed Professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Required Loan Amount *</label>
                    <select
                      value={formData.requiredAmount}
                      onChange={e => setFormData({ ...formData, requiredAmount: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-royal-500 bg-white"
                    >
                      <option value="₹ 5 Lakhs - ₹ 15 Lakhs">₹ 5 Lakhs - ₹ 15 Lakhs</option>
                      <option value="₹ 15 Lakhs - ₹ 25 Lakhs">₹ 15 Lakhs - ₹ 25 Lakhs</option>
                      <option value="₹ 25 Lakhs - ₹ 50 Lakhs">₹ 25 Lakhs - ₹ 50 Lakhs</option>
                      <option value="₹ 50 Lakhs - ₹ 1 Crore">₹ 50 Lakhs - ₹ 1 Crore</option>
                      <option value="Above ₹ 1 Crore">Above ₹ 1 Crore</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="loanDetailConsent"
                      checked={formData.consent}
                      onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-3.5 h-3.5 text-royal-600 rounded border-slate-300"
                    />
                    <label htmlFor="loanDetailConsent" className="text-[11px] text-slate-500 leading-tight">
                      I authorize Registify Services to coordinate my enquiry. I understand loan approvals depend on institutional lenders.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-[#246BCE] hover:bg-royal-600 text-white rounded-xl font-bold text-xs shadow-md transition-all disabled:opacity-60"
                  >
                    {submitting ? 'Submitting...' : 'Submit Loan Enquiry'}
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
