import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Copy, Check, AlertCircle, FileText, Landmark } from 'lucide-react';
import { submitLoanEnquiry, submitBusinessEnquiry } from '../../services/enquiryService';
import { LOAN_SERVICES } from '../../data/loansData';
import { validateFullName, validateIndianMobile, validateEmail } from '../../utils/validation';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'loan' | 'business';
  initialServiceCategory?: string;
  initialSpecificService?: string;
}

const INDIAN_STATES = [
  'Gujarat', 'Maharashtra', 'Delhi NCR', 'Karnataka', 'Tamil Nadu', 
  'Telangana', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'West Bengal',
  'Haryana', 'Punjab', 'Kerala', 'Andhra Pradesh', 'Goa', 'Odisha', 'Other State'
];

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'business',
  initialServiceCategory = '',
  initialSpecificService = ''
}) => {
  const [activeTab, setActiveTab] = useState<'loan' | 'business'>(defaultTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Loan Form State
  const [loanForm, setLoanForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    employmentType: 'Business Owner' as 'Salaried' | 'Self-employed' | 'Business Owner' | 'Other',
    loanCategory: initialSpecificService || 'Business Loan',
    requiredAmount: '₹ 25 Lakhs - ₹ 50 Lakhs',
    monthlyIncome: '',
    existingObligations: '',
    additionalRequirements: '',
    consent: true,
    honeypot: '',
  });

  // Business Form State
  const [bizForm, setBizForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    businessName: '',
    businessType: 'Private Limited / Startup',
    city: 'Ahmedabad',
    state: 'Gujarat',
    serviceCategory: initialServiceCategory || 'Company Registration',
    specificService: initialSpecificService || 'Private Limited Company Registration',
    additionalInformation: '',
    consent: true,
    honeypot: '',
  });

  useEffect(() => {
    setActiveTab(defaultTab);
    if (initialSpecificService) {
      if (defaultTab === 'loan') {
        setLoanForm(prev => ({ ...prev, loanCategory: initialSpecificService }));
      } else {
        setBizForm(prev => ({ 
          ...prev, 
          serviceCategory: initialServiceCategory || 'Company Registration',
          specificService: initialSpecificService 
        }));
      }
    }
    setSubmittedEnquiryId(null);
    setErrorMessage(null);
  }, [defaultTab, initialServiceCategory, initialSpecificService, isOpen]);

  if (!isOpen) return null;

  // Validation helper
  const validateMobile = (mobile: string) => {
    const clean = mobile.replace(/[^0-9]/g, '');
    return /^[6-9]\d{9}$/.test(clean);
  };

  const handleCopyId = () => {
    if (submittedEnquiryId) {
      navigator.clipboard.writeText(submittedEnquiryId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLoanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const nameCheck = validateFullName(loanForm.fullName);
    if (!nameCheck.isValid) {
      setErrorMessage(nameCheck.error!);
      return;
    }
    const mobileCheck = validateIndianMobile(loanForm.mobile);
    if (!mobileCheck.isValid) {
      setErrorMessage(mobileCheck.error!);
      return;
    }
    const emailCheck = validateEmail(loanForm.email);
    if (!emailCheck.isValid) {
      setErrorMessage(emailCheck.error!);
      return;
    }
    if (!loanForm.consent) {
      setErrorMessage('Please authorize Registify Services to contact you regarding your enquiry.');
      return;
    }

    setIsSubmitting(true);
    try {
      const cleanMobile = loanForm.mobile.replace(/\D/g, '').slice(-10);
      const res = await submitLoanEnquiry({
        fullName: loanForm.fullName.trim(),
        mobile: cleanMobile,
        email: loanForm.email.trim(),
        city: loanForm.city,
        state: loanForm.state,
        employmentType: loanForm.employmentType,
        loanCategory: loanForm.loanCategory,
        requiredAmount: loanForm.requiredAmount,
        monthlyIncome: loanForm.monthlyIncome,
        existingObligations: loanForm.existingObligations,
        additionalRequirements: loanForm.additionalRequirements,
        consent: loanForm.consent,
        sourcePage: window.location.pathname,
        honeypot: loanForm.honeypot
      });

      if (res.success) {
        setSubmittedEnquiryId(res.enquiryId);
      } else {
        setErrorMessage(res.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred. Please contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBizSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const nameCheck = validateFullName(bizForm.fullName);
    if (!nameCheck.isValid) {
      setErrorMessage(nameCheck.error!);
      return;
    }
    const mobileCheck = validateIndianMobile(bizForm.mobile);
    if (!mobileCheck.isValid) {
      setErrorMessage(mobileCheck.error!);
      return;
    }
    const emailCheck = validateEmail(bizForm.email);
    if (!emailCheck.isValid) {
      setErrorMessage(emailCheck.error!);
      return;
    }
    if (!bizForm.consent) {
      setErrorMessage('Please authorize Registify Services to contact you regarding your enquiry.');
      return;
    }

    setIsSubmitting(true);
    try {
      const cleanMobile = bizForm.mobile.replace(/\D/g, '').slice(-10);
      const res = await submitBusinessEnquiry({
        fullName: bizForm.fullName.trim(),
        mobile: cleanMobile,
        email: bizForm.email.trim(),
        businessName: bizForm.businessName.trim(),
        businessType: bizForm.businessType,
        city: bizForm.city,
        state: bizForm.state,
        serviceCategory: bizForm.serviceCategory,
        specificService: bizForm.specificService,
        additionalInformation: bizForm.additionalInformation,
        consent: bizForm.consent,
        sourcePage: window.location.pathname,
        honeypot: bizForm.honeypot
      });

      if (res.success) {
        setSubmittedEnquiryId(res.enquiryId);
      } else {
        setErrorMessage(res.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred. Please contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="bg-[#1B1247] text-white px-6 py-5 flex items-center justify-between border-b border-[#2B1E6B]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB020]"></span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#FFB020]">
                Registify Advisory Desk
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold mt-0.5 text-white">
              Schedule Free Consultation
            </h3>
            <p className="text-xs text-slate-200">
              Personalized guidance for company registration, compliance & financing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-200 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success Confirmation Screen */}
        {submittedEnquiryId ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-[#2B1E6B]">
                Consultation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out to Registify Services. Our consultation desk will review your details and connect with you shortly.
              </p>
            </div>

            {/* Generated Unique Enquiry ID Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between">
              <div className="text-left">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Your Unique Enquiry ID
                </span>
                <span className="text-lg font-mono font-bold text-[#2B1E6B]">
                  {submittedEnquiryId}
                </span>
              </div>
              <button
                onClick={handleCopyId}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-teal-600" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-xs text-teal-900 text-left space-y-1">
              <p className="font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                Next Steps:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-teal-800">
                <li>A dedicated consultant will review your information.</li>
                <li>We will contact you via phone/WhatsApp within 2 to 4 business hours.</li>
                <li>Keep your basic business or income documentation handy for assessment.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  const msg = encodeURIComponent(`Hello Registify Services, I have submitted consultation enquiry [${submittedEnquiryId}]. Please check and connect.`);
                  window.open(`https://wa.me/919725991607?text=${msg}`, '_blank');
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                Fast-Track on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Division Tabs */}
            <div className="flex border-b border-[#DFE4F1] bg-[#FFF9F1] p-2 gap-2">
              <button
                type="button"
                onClick={() => { setActiveTab('business'); setErrorMessage(null); }}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'business'
                    ? 'bg-[#FFB020] text-[#2B1E6B] font-bold shadow-xs border border-[#FFB020]'
                    : 'text-[#5B6477] hover:text-[#2B1E6B] hover:bg-white'
                }`}
              >
                <FileText className={`w-4 h-4 ${activeTab === 'business' ? 'text-[#2B1E6B]' : 'text-[#5B6477]'}`} />
                <span>Incorporation & Compliance</span>
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('loan'); setErrorMessage(null); }}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'loan'
                    ? 'bg-[#FFB020] text-[#2B1E6B] font-bold shadow-xs border border-[#FFB020]'
                    : 'text-[#5B6477] hover:text-[#2B1E6B] hover:bg-white'
                }`}
              >
                <Landmark className={`w-4 h-4 ${activeTab === 'loan' ? 'text-[#2B1E6B]' : 'text-[#5B6477]'}`} />
                <span>Loans & Finance</span>
              </button>
            </div>

            {/* Error Notification */}
            {errorMessage && (
              <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* TAB A: BUSINESS ENQUIRY FORM */}
            {activeTab === 'business' && (
              <form onSubmit={handleBizSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Patel"
                      value={bizForm.fullName}
                      onChange={(e) => setBizForm({ ...bizForm, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (WhatsApp preferred) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-xs font-semibold text-slate-500 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9725991607"
                        value={bizForm.mobile}
                        onChange={(e) => setBizForm({ ...bizForm, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={bizForm.email}
                      onChange={(e) => setBizForm({ ...bizForm, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Name (if existing / planned)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech Solutions"
                      value={bizForm.businessName}
                      onChange={(e) => setBizForm({ ...bizForm, businessName: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad / Surat"
                      value={bizForm.city}
                      onChange={(e) => setBizForm({ ...bizForm, city: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      State *
                    </label>
                    <select
                      value={bizForm.state}
                      onChange={(e) => setBizForm({ ...bizForm, state: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white"
                    >
                      {INDIAN_STATES.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Category *
                    </label>
                    <select
                      value={bizForm.serviceCategory}
                      onChange={(e) => setBizForm({ ...bizForm, serviceCategory: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-white"
                    >
                      <option value="Company Registration">Company Registration</option>
                      <option value="Certifications">Certifications (ISO, MSME, FSSAI, GeM)</option>
                      <option value="GST Services">GST Registration & Filings</option>
                      <option value="Taxation & Accounting">Taxation & Accounting</option>
                      <option value="Compliance">Annual ROC & Compliance</option>
                      <option value="Business Documentation">Business Documentation & Agreements</option>
                      <option value="Other Business Services">Other Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specific Service Required *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Private Limited Registration"
                      value={bizForm.specificService}
                      onChange={(e) => setBizForm({ ...bizForm, specificService: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Additional Information / Specific Queries
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your business stage, number of partners/directors, or target timelines..."
                    value={bizForm.additionalInformation}
                    onChange={(e) => setBizForm({ ...bizForm, additionalInformation: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="bizConsent"
                    checked={bizForm.consent}
                    onChange={(e) => setBizForm({ ...bizForm, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <label htmlFor="bizConsent" className="text-xs text-slate-600 leading-relaxed">
                    I authorize Registify Services to contact me via phone, WhatsApp, or email regarding this enquiry. I understand Registify Services is an independent business consultancy firm and not a government body.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow border border-[#FFB020] disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Submitting Enquiry...' : 'Submit Business Consultation Request'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </form>
            )}

            {/* TAB B: LOAN ENQUIRY FORM */}
            {activeTab === 'loan' && (
              <form onSubmit={handleLoanSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={loanForm.fullName}
                      onChange={(e) => setLoanForm({ ...loanForm, fullName: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (WhatsApp preferred) *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-xs font-semibold text-slate-500 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9725991607"
                        value={loanForm.mobile}
                        onChange={(e) => setLoanForm({ ...loanForm, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-3 py-2 text-sm border border-slate-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={loanForm.email}
                      onChange={(e) => setLoanForm({ ...loanForm, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Employment / Business Type *
                    </label>
                    <select
                      value={loanForm.employmentType}
                      onChange={(e) => setLoanForm({ ...loanForm, employmentType: e.target.value as any })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500 bg-white"
                    >
                      <option value="Business Owner">Business Owner / Partner</option>
                      <option value="Salaried">Salaried Employee</option>
                      <option value="Self-employed">Self-employed Professional (Doctor/CA/Architect)</option>
                      <option value="Other">Other Category</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Loan Category *
                    </label>
                    <select
                      value={loanForm.loanCategory}
                      onChange={(e) => setLoanForm({ ...loanForm, loanCategory: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500 bg-white"
                    >
                      {LOAN_SERVICES.map(l => (
                        <option key={l.id} value={l.title}>{l.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Required Loan Amount *
                    </label>
                    <select
                      value={loanForm.requiredAmount}
                      onChange={(e) => setLoanForm({ ...loanForm, requiredAmount: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500 bg-white"
                    >
                      <option value="₹ 5 Lakhs - ₹ 15 Lakhs">₹ 5 Lakhs - ₹ 15 Lakhs</option>
                      <option value="₹ 15 Lakhs - ₹ 25 Lakhs">₹ 15 Lakhs - ₹ 25 Lakhs</option>
                      <option value="₹ 25 Lakhs - ₹ 50 Lakhs">₹ 25 Lakhs - ₹ 50 Lakhs</option>
                      <option value="₹ 50 Lakhs - ₹ 1 Crore">₹ 50 Lakhs - ₹ 1 Crore</option>
                      <option value="₹ 1 Crore - ₹ 5 Crores">₹ 1 Crore - ₹ 5 Crores</option>
                      <option value="Above ₹ 5 Crores">Above ₹ 5 Crores</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad / Vadodara"
                      value={loanForm.city}
                      onChange={(e) => setLoanForm({ ...loanForm, city: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      State *
                    </label>
                    <select
                      value={loanForm.state}
                      onChange={(e) => setLoanForm({ ...loanForm, state: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500 bg-white"
                    >
                      {INDIAN_STATES.map(st => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Approx. Monthly Income / Annual Turnover (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹ 1.5 Lakhs / month or ₹ 80 Lakhs turnover"
                      value={loanForm.monthlyIncome}
                      onChange={(e) => setLoanForm({ ...loanForm, monthlyIncome: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Existing Loan Obligations (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Existing car loan EMI ₹ 15,000"
                      value={loanForm.existingObligations}
                      onChange={(e) => setLoanForm({ ...loanForm, existingObligations: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-500"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="loanConsent"
                    checked={loanForm.consent}
                    onChange={(e) => setLoanForm({ ...loanForm, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-royal-600 rounded border-slate-300 focus:ring-royal-500"
                  />
                  <label htmlFor="loanConsent" className="text-xs text-slate-600 leading-relaxed">
                    I agree to be contacted by Registify Services regarding loan options. I understand loan sanctions and terms depend entirely on institutional lender underwriting criteria. Registify Services does not offer government loan schemes or subsidies.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:shadow border border-[#FFB020] disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Submitting Enquiry...' : 'Submit Loan Assistance Request'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
