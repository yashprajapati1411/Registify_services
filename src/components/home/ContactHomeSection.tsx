import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { submitBusinessEnquiry } from '../../services/enquiryService';

export const ContactHomeSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Company Registration',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Company Registration (Pvt Ltd, LLP, OPC)',
    'Startup India / DPIIT Recognition',
    'MSME / Udyam Registration',
    'GST Registration & Monthly Filing',
    'ISO Management Certification',
    'FSSAI Food License',
    'Trademark & IP Protection',
    'Annual ROC Company Compliance',
    'MSME / Business Loan Facilitation',
    'Digital Marketing & Website Development',
    'Other Business Advisory',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please provide your full name (minimum 2 characters).');
      return;
    }
    const cleanContact = formData.contact.trim();
    if (!cleanContact) {
      setStatus('error');
      setErrorMessage('Please provide your 10-digit mobile number or email address.');
      return;
    }
    if (!cleanContact.includes('@')) {
      const digits = cleanContact.replace(/\D/g, '');
      if (!/^[6-9]\d{9}$/.test(digits)) {
        setStatus('error');
        setErrorMessage('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.');
        return;
      }
    }

    setStatus('loading');
    try {
      const res = await submitBusinessEnquiry({
        fullName: formData.name,
        email: formData.contact.includes('@') ? formData.contact : 'sales@registifyservices.com',
        mobile: !formData.contact.includes('@') ? formData.contact : '9725991607',
        businessName: 'Business Client',
        businessType: 'Enterprise / Startup',
        city: 'Ahmedabad',
        state: 'Gujarat',
        serviceCategory: formData.service,
        specificService: formData.service,
        additionalInformation: formData.message || 'Homepage enquiry request',
        sourcePage: '/',
        consent: true,
      });

      if (res.success) {
        setStatus('success');
        setFormData({
          name: '',
          contact: '',
          service: 'Company Registration',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(res.error || 'Unable to submit enquiry right now. Please call us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again or reach out on WhatsApp.');
    }
  };

  return (
    <section id="contact" className="relative bg-[#F1EEFF] py-20 md:py-28 overflow-hidden">
      
      {/* Decorative Paper Airplane Graphic (Matches Screenshot) */}
      <div className="absolute left-1/2 -top-6 -translate-x-1/2 md:left-2/3 pointer-events-none z-0">
        <svg viewBox="0 0 220 160" width="220" height="160" className="opacity-90">
          <polygon points="10,70 210,8 130,150 108,98" fill="#FFFFFF" stroke="#E1DCF5" strokeWidth="1.5" />
          <polygon points="108,98 130,150 90,112" fill="#D9D3F5" />
          <polygon points="10,70 108,98 210,8" fill="#F1EEFF" />
          <path
            d="M -40 150 Q 0 130 30 120"
            stroke="#FFB020"
            strokeWidth="3"
            strokeDasharray="4 6"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Headline & Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans font-bold text-sm sm:text-base text-[#6B6590] uppercase tracking-wider block mb-1">
                Contact
              </span>
              <h2 className="font-condensed font-extrabold text-5xl sm:text-7xl md:text-8xl text-[#2B1E6B] uppercase leading-[0.95] tracking-tight">
                Let's<br />talk
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#3B3563] font-sans leading-relaxed">
              <strong className="text-[#2B1E6B]">Get a free consultation.</strong> Our certified advisors assist you with company incorporation, government registrations, statutory compliances, and capital facilitation across India.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#DFE4F1]">
              <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#2C2850]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2B1E6B] shadow-sm flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FFB020]" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-[#6B6590]">Phone / Call</span>
                  <a href="tel:+919725991607" className="font-bold hover:text-[#FFB020] transition-colors">
                    +91 97259 91607
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#2C2850]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2B1E6B] shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FFB020]" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-[#6B6590]">Email</span>
                  <a href="mailto:sales@registifyservices.com" className="font-bold hover:text-[#FFB020] transition-colors">
                    sales@registifyservices.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#2C2850]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2B1E6B] shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFB020]" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-[#6B6590]">Headquarters</span>
                  <span className="font-semibold">Gujarat, India (Serving Pan-India)</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-sm sm:text-base text-[#2C2850]">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2B1E6B] shadow-sm flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#FFB020]" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-[#6B6590]">Working Hours</span>
                  <span className="font-semibold">Monday – Saturday: 9:30 AM – 7:00 PM IST</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#DFE4F1]">
              
              <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-[#2B1E6B] uppercase mb-6">
                Request Instant Advisory Call
              </h3>

              {status === 'success' ? (
                <div className="bg-[#FFF9F1] border-2 border-[#FFB020] rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFB020] text-[#1B1247] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-condensed font-bold text-2xl text-[#2B1E6B] uppercase">
                    Enquiry Received!
                  </h4>
                  <p className="text-sm text-[#5B567F]">
                    Thank you for reaching out. Our business registration officer will contact you within 2 working hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-[#2B1E6B] text-white font-condensed font-bold uppercase text-xs hover:bg-[#1B1247]"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFF9F1] border-[1.5px] border-[#E6DFD2] focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] rounded-xl px-5 py-4 text-sm sm:text-base text-[#2C2850] placeholder-[#9A93B8] outline-none transition-colors"
                    />
                  </div>

                  {/* Phone / Email Input */}
                  <div>
                    <label htmlFor="contact-contact" className="sr-only">Phone / email</label>
                    <input
                      id="contact-contact"
                      type="text"
                      required
                      placeholder="Phone / email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-[#FFF9F1] border-[1.5px] border-[#E6DFD2] focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] rounded-xl px-5 py-4 text-sm sm:text-base text-[#2C2850] placeholder-[#9A93B8] outline-none transition-colors"
                    />
                  </div>

                  {/* Service of Interest Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="sr-only">Service of interest</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#FFF9F1] border-[1.5px] border-[#E6DFD2] focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] rounded-xl px-5 py-4 text-sm sm:text-base text-[#2C2850] outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Message (optional details regarding your business or requirements)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FFF9F1] border-[1.5px] border-[#E6DFD2] focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] rounded-xl px-5 py-4 text-sm sm:text-base text-[#2C2850] placeholder-[#9A93B8] outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#FFB020] hover:bg-[#E59D10] text-[#1B1247] font-condensed font-bold text-lg sm:text-xl tracking-wider uppercase transition-all duration-200 shadow-btn hover:scale-105 active:scale-95 disabled:opacity-50"
                    >
                      {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
