import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, 
  Send, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { submitContactEnquiry } from '../services/enquiryService';
import { validateFullName, validateIndianMobile, validateEmail, validateRequired } from '../utils/validation';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [enquiryId, setEnquiryId] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    subject: 'General Enquiry',
    message: '',
    honeypot: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const errors: Record<string, string> = {};

    // 1. Strict validation checks
    const nameCheck = validateFullName(formData.fullName);
    if (!nameCheck.isValid) errors.fullName = nameCheck.error!;

    const mobileCheck = validateIndianMobile(formData.mobile);
    if (!mobileCheck.isValid) errors.mobile = mobileCheck.error!;

    if (formData.email.trim()) {
      const emailCheck = validateEmail(formData.email);
      if (!emailCheck.isValid) errors.email = emailCheck.error!;
    }

    const messageCheck = validateRequired(formData.message, 'Message', 5);
    if (!messageCheck.isValid) errors.message = messageCheck.error!;

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setErrorMessage('Please fix the highlighted fields below before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const cleanMobile = formData.mobile.replace(/\D/g, '').slice(-10);
      const res = await submitContactEnquiry({
        fullName: formData.fullName.trim(),
        mobile: cleanMobile,
        email: formData.email.trim(),
        city: formData.city.trim(),
        state: formData.state,
        subject: formData.subject,
        message: formData.message.trim(),
        sourcePage: '/contact',
        honeypot: formData.honeypot
      });

      if (res.success) {
        setEnquiryId(res.enquiryId);
        setFormSubmitted(true);
        setFieldErrors({});
      } else {
        setErrorMessage(res.error || 'Failed to submit message. Please try again or message via WhatsApp.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred. Please contact us on WhatsApp at +91 97259 91607.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <SEO
        title="Contact Our Advisory Team"
        description="Contact Registify Services advisory desk. Call +91 97259 91607 or email sales@registifyservices.com for company registration, loan assistance, and compliance services."
        canonicalPath="/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero - Deep Navy Banner */}
        <div className="bg-[#1B1247] text-white rounded-3xl p-8 md:p-14 border border-[#2B1E6B] shadow-card">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB020] text-xs font-semibold border border-white/20 uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>CONSULTATION & ASSISTANCE DESK</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Get in Touch with Our Advisory Team
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              Have questions regarding company registration, Startup India, certifications, or ongoing secretarial compliance? Reach out to our dedicated Gujarat advisory desk.
            </p>
          </div>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#FFF9F1] rounded-2xl p-7 border border-[#DFE4F1] space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFB020] text-[#2B1E6B] flex items-center justify-center font-bold border border-[#FFB020]">
                  <MapPin className="w-5 h-5 text-[#2B1E6B]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#2B1E6B]">Corporate Headquarters</h3>
                  <p className="text-xs text-[#5B6477]">Gujarat, India</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
                Registify Services, Corporate Heights, SG Highway, Ahmedabad, Gujarat 380054 (India)
              </p>

              <div className="pt-2 border-t border-[#DFE4F1] space-y-2 text-xs text-[#5B6477]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2B1E6B]" />
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-[#FFF9F1] rounded-2xl p-7 border border-[#DFE4F1] space-y-4">
              <h3 className="font-serif font-bold text-base text-[#2B1E6B]">Direct Channels</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-[#1F2A44]">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#2B1E6B]" />
                  <a href="tel:+919725991607" className="hover:text-[#2B1E6B] font-semibold">
                    +91 97259 91607
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#2B1E6B]" />
                  <a href="mailto:sales@registifyservices.com" className="hover:text-[#2B1E6B]">
                    sales@registifyservices.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919725991607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-[#DFE4F1] shadow-card">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2B1E6B]">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6477] max-w-md mx-auto">
                  Thank you! Your reference tracking ID is{' '}
                  <span className="font-mono font-bold text-[#2B1E6B] bg-[#FFF9F1] px-2 py-0.5 rounded border border-[#DFE4F1]">
                    {enquiryId}
                  </span>
                  . A consultant will review your query and respond shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 rounded-full bg-[#FFB020] text-[#2B1E6B] font-bold text-xs uppercase hover:bg-[#E59D10]"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 pb-2">
                  <h3 className="font-serif font-bold text-xl text-[#2B1E6B]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#5B6477]">
                    Fill in your details below and an advisory consultant will get back to you.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Hidden Honeypot Anti-Bot Field */}
                <input
                  type="text"
                  name="website_url_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2A44] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (fieldErrors.fullName) setFieldErrors({ ...fieldErrors, fullName: '' });
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        fieldErrors.fullName ? 'border-red-500 bg-red-50/30' : 'border-[#DFE4F1] bg-[#FFF9F1]'
                      } text-xs text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white`}
                    />
                    {fieldErrors.fullName && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2A44] mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      maxLength={14}
                      value={formData.mobile}
                      onChange={(e) => {
                        setFormData({ ...formData, mobile: e.target.value });
                        if (fieldErrors.mobile) setFieldErrors({ ...fieldErrors, mobile: '' });
                      }}
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        fieldErrors.mobile ? 'border-red-500 bg-red-50/30' : 'border-[#DFE4F1] bg-[#FFF9F1]'
                      } text-xs text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white`}
                    />
                    {fieldErrors.mobile && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.mobile}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1F2A44] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        fieldErrors.email ? 'border-red-500 bg-red-50/30' : 'border-[#DFE4F1] bg-[#FFF9F1]'
                      } text-xs text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1F2A44] mb-1">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City (e.g. Ahmedabad)"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DFE4F1] bg-[#FFF9F1] text-xs text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2A44] mb-1">Topic of Interest</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DFE4F1] bg-[#FFF9F1] text-xs text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white"
                  >
                    <option value="Company Incorporation">Company Incorporation (Pvt Ltd, LLP, OPC)</option>
                    <option value="Startup India / DPIIT">Startup India / DPIIT Recognition</option>
                    <option value="MSME / Udyam">MSME / Udyam Registration</option>
                    <option value="GST Services">GST Registration & Filings</option>
                    <option value="Certifications">Certifications (ISO, FSSAI, Trademark)</option>
                    <option value="Annual Compliance">Annual MCA & ROC Compliance</option>
                    <option value="Loans & Finance">Commercial Loans & Equipment Finance</option>
                    <option value="Digital Solutions">Digital Solutions & Web Development</option>
                    <option value="General Enquiry">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2A44] mb-1">Message / Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                    }}
                    placeholder="Briefly describe your business requirement..."
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      fieldErrors.message ? 'border-red-500 bg-red-50/30' : 'border-[#DFE4F1] bg-[#FFF9F1]'
                    } text-xs text-[#1F2A44] focus:outline-none focus:border-[#2B1E6B] focus:bg-white resize-none`}
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="mt-1 text-[11px] text-red-600 font-medium">{fieldErrors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#FFB020] hover:bg-[#E59D10] text-[#2B1E6B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow border border-[#FFB020] disabled:opacity-50"
                  >
                    {submitting ? 'SENDING...' : 'SUBMIT ENQUIRY'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
