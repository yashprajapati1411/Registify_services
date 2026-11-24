import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1247] text-[#CFC9EE] pt-16 md:pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid (Matches Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center p-1.5 flex-shrink-0 shadow-md">
                <img
                  src="/images/registify-mark.png"
                  alt="Registify Services"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-white block leading-tight">
                  Registify Services
                </span>
                <span className="font-sans font-semibold text-[10px] tracking-[1.5px] text-[#FFB020] uppercase block">
                  Private Corporate Advisory
                </span>
              </div>
            </div>

            <p className="font-sans font-bold text-[11px] tracking-[2px] text-[#FFB020] uppercase">
              EMPOWERING GROWTH • ENSURING COMPLIANCE
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#CFC9EE]/85 leading-relaxed pr-4">
              We help entrepreneurs establish, register, certify and grow their businesses. One trusted pan-India advisory partner for company incorporation, statutory recognitions, certifications, ROC compliances, and capital growth.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#FFB020]">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold">Registered MCA & Corporate Advisory</span>
            </div>
          </div>

          {/* Col 2: Services by Category (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-condensed font-bold text-xl sm:text-2xl text-[#FFB020] uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services/company-registration" className="hover:text-white transition-colors block">
                  Company Incorporation (Pvt Ltd, LLP)
                </Link>
              </li>
              <li>
                <Link to="/services/startup-india-recognition" className="hover:text-white transition-colors block">
                  Startup India & MSME Udyam
                </Link>
              </li>
              <li>
                <Link to="/services/gst-services" className="hover:text-white transition-colors block">
                  GST Registration & Returns
                </Link>
              </li>
              <li>
                <Link to="/services/iso-certification" className="hover:text-white transition-colors block">
                  ISO Standards & FSSAI License
                </Link>
              </li>
              <li>
                <Link to="/services/roc-compliance" className="hover:text-white transition-colors block">
                  Annual ROC Filings & Compliance
                </Link>
              </li>
              <li>
                <Link to="/services/business-loan" className="hover:text-white transition-colors block">
                  MSME & Machinery Loans
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-white transition-colors block">
                  Digital Marketing & Web Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-condensed font-bold text-xl sm:text-2xl text-[#FFB020] uppercase tracking-wide">
              Quick links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-white transition-colors block">
                  Why Us
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors block">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors block">
                  Resources & Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-condensed font-bold text-xl sm:text-2xl text-[#FFB020] uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB020] flex-shrink-0" />
                <a href="tel:+919725991607" className="hover:text-white font-semibold">
                  +91 97259 91607
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFB020] flex-shrink-0" />
                <a href="mailto:sales@registifyservices.com" className="hover:text-white">
                  sales@registifyservices.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFB020] flex-shrink-0 mt-0.5" />
                <span>Gujarat, India (Serving Nationwide)</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <span className="block font-bold text-xs uppercase tracking-wider text-[#FFB020] mb-2">
                Legal & Policies
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#CFC9EE]/70">
                <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms-and-conditions" className="hover:text-white">Terms</Link>
                <span>•</span>
                <Link to="/refund-policy" className="hover:text-white">Refund</Link>
                <span>•</span>
                <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#CFC9EE]/60">
          <p>
            © {new Date().getFullYear()} Registify Services. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Providing reliable company formation, certification, and compliance advisory nationwide.
          </p>
        </div>

      </div>
    </footer>
  );
};
