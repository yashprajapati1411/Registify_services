import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledNow = window.scrollY > 40;
      setScrolled(isScrolledNow);
      if (!isScrolledNow) {
        setHovered(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track cursor position when scrolled: if cursor reaches top zone (clientY <= 35), reveal navbar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > 40) {
        if (e.clientY <= 35) {
          setHovered(true);
        } else if (e.clientY > 140 && !servicesDropdownOpen && !mobileMenuOpen) {
          setHovered(false);
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [servicesDropdownOpen, mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for services mega-menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(target)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceCategories = [
    {
      title: 'Company Incorporation',
      links: [
        { label: 'Private Limited Company', path: '/services/company-registration' },
        { label: 'LLP Registration', path: '/services/llp-registration' },
        { label: 'One Person Company (OPC)', path: '/services/opc-registration' },
        { label: 'Partnership Firm', path: '/services/partnership-firm' },
      ],
    },
    {
      title: 'Startup & Government',
      links: [
        { label: 'Startup India / DPIIT', path: '/services/startup-india-recognition' },
        { label: 'MSME / Udyam Registration', path: '/services/udyam-registration' },
        { label: 'GST Registration & Filing', path: '/services/gst-services' },
      ],
    },
    {
      title: 'Certifications',
      links: [
        { label: 'ISO Certification', path: '/services/iso-certification' },
        { label: 'FSSAI License', path: '/services/fssai-license' },
        { label: 'Trademark Registration', path: '/services/trademark-registration' },
        { label: 'Import Export Code (IEC)', path: '/services/iec-registration' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { label: 'Annual ROC Compliance', path: '/services/roc-compliance' },
        { label: 'Taxation & Accounting', path: '/services/taxation-accounting' },
        { label: 'Business Documentation', path: '/services/documentation-agreements' },
      ],
    },
    {
      title: 'Loans & Finance',
      links: [
        { label: 'MSME Loan Assistance', path: '/services/msme-loan' },
        { label: 'Business Loan', path: '/services/business-loan' },
        { label: 'Machinery & Equipment', path: '/services/machinery-loan' },
        { label: 'Working Capital Loan', path: '/services/working-capital-loan' },
      ],
    },
    {
      title: 'Digital Solutions',
      links: [
        { label: 'Digital Marketing', path: '/services/digital-marketing' },
        { label: 'SEO Optimization', path: '/services/seo-optimization' },
        { label: 'Web Application Development', path: '/services/website-development' },
      ],
    },
  ];

  const isHome = location.pathname === '/';
  const isServiceRoute =
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/business') ||
    location.pathname.startsWith('/loans');
  // Pages with dark royal navy hero section vs light pages
  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/about';
  // Floating sticky navbar behavior is disabled on service pages as requested - it stays static at top
  const shouldFloat = scrolled && !isServiceRoute;
  // If scrolled, always solid deep navy #1B1247. If at resting top, dark pages are transparent, light pages are solid deep navy for perfect contrast!
  const navBg = scrolled ? '#1B1247' : isDarkHeroPage ? 'transparent' : '#1B1247';

  return (
    <>
      {/* Invisible Top Hover Trigger Strip when scrolled and vanished */}
      {shouldFloat && !(hovered || servicesDropdownOpen || mobileMenuOpen) && (
        <div
          className="fixed top-0 left-0 right-0 h-7 z-40 pointer-events-auto"
          onMouseEnter={() => setHovered(true)}
          aria-hidden="true"
        />
      )}

      {/* Navigation Header: On service pages stays static at top-0; on home/about vanishes on scroll, reveals on hover in navbar area */}
      <header
        onMouseEnter={() => {
          if (shouldFloat) setHovered(true);
        }}
        onMouseLeave={() => {
          if (!servicesDropdownOpen && !mobileMenuOpen) {
            setHovered(false);
          }
        }}
        style={{
          backgroundColor: navBg,
        }}
        className={`w-full z-50 transition-all duration-300 ${
          shouldFloat
            ? `fixed top-0 left-0 shadow-2xl border-b border-white/15 py-2.5 ${
                hovered || servicesDropdownOpen || mobileMenuOpen
                  ? 'translate-y-0 opacity-100 pointer-events-auto'
                  : '-translate-y-full opacity-0 pointer-events-none'
              }`
            : `absolute top-0 left-0 py-3.5 translate-y-0 opacity-100 ${
                !isDarkHeroPage ? 'shadow-xl border-b border-white/10' : ''
              }`
        }`}
      >
        <div 
          ref={navContainerRef}
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between"
        >
          
          {/* Official Registify Logo in White Circular Badge: aligned to left, refined compact size */}
          <Link
            to="/"
            className="group flex-shrink-0 relative focus:outline-none -ml-1 sm:-ml-2"
            aria-label="Registify Services Home"
          >
            <div
              className={`rounded-full bg-white shadow-2xl flex items-center justify-center p-1.5 sm:p-2 transition-all duration-300 relative border border-[#DFE4F1]/40 ${
                shouldFloat
                  ? 'w-11 h-11 sm:w-12 sm:h-12'
                  : 'w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20'
              }`}
            >
              <img
                src="/images/registify-full-logo.png"
                alt="Registify Services Official Full Logo"
                className="w-full h-full object-contain select-none transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Right Side: Two-Tier Layout */}
          <div className="hidden lg:flex flex-col items-end flex-grow ml-12">
            
            {/* Top Contact Line (Only at resting state) */}
            {!scrolled && (
              <div className="flex items-center gap-2 text-[#E9E4FF] font-sans text-sm pb-2.5">
                <a
                  href="tel:+919725991607"
                  className="hover:text-[#FFB020] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E9E4FF]" />
                  <span>+91 97259 91607</span>
                </a>
                <span className="text-white/40 mx-2">|</span>
                <a
                  href="mailto:sales@registifyservices.com"
                  className="hover:text-[#FFB020] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#E9E4FF]" />
                  <span>sales@registifyservices.com</span>
                </a>
              </div>
            )}

            {/* Horizontal Border Line + Nav Links */}
            <div
              className={`w-full flex items-center justify-end gap-8 pt-3 ${
                scrolled ? '' : 'border-t border-white/25'
              }`}
            >
              <nav className="flex items-center gap-7 font-condensed font-bold text-lg uppercase tracking-wider text-white">
                <Link
                  to="/"
                  className={`transition-colors hover:text-[#FFB020] ${
                    isHome ? 'text-[#FFB020]' : 'text-white'
                  }`}
                >
                  HOME
                </Link>

                <Link
                  to="/about"
                  className={`transition-colors hover:text-[#FFB020] ${
                    location.pathname === '/about' ? 'text-[#FFB020]' : 'text-white'
                  }`}
                >
                  ABOUT
                </Link>

                {/* Services Dropdown Button */}
                <div>
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`flex items-center gap-1 transition-colors hover:text-[#FFB020] ${
                      location.pathname.startsWith('/services') ? 'text-[#FFB020]' : 'text-white'
                    }`}
                  >
                    <span>SERVICES</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-[#FFB020]' : ''
                      }`}
                    />
                  </button>
                </div>

                <a
                  href="/#why-us"
                  className="transition-colors hover:text-[#FFB020] text-white"
                >
                  WHY US
                </a>

                <Link
                  to="/blog"
                  className={`transition-colors hover:text-[#FFB020] ${
                    location.pathname === '/blog' ? 'text-[#FFB020]' : 'text-white'
                  }`}
                >
                  RESOURCES
                </Link>

                <Link
                  to="/contact"
                  className={`transition-colors hover:text-[#FFB020] ${
                    location.pathname === '/contact' ? 'text-[#FFB020]' : 'text-white'
                  }`}
                >
                  CONTACT
                </Link>
              </nav>

              {/* Scrolled Quick Consultation Button */}
              {scrolled && (
                <button
                  type="button"
                  onClick={() => onOpenConsultation('business')}
                  className="ml-4 px-5 py-2 rounded-xl bg-[#FFB020] text-[#1B1247] font-condensed font-bold text-sm uppercase tracking-wider hover:bg-[#E59D10] transition-colors shadow-md"
                >
                  FREE CONSULTATION
                </button>
              )}
            </div>

          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => onOpenConsultation('business')}
              className="px-3 py-1.5 rounded-lg bg-[#FFB020] text-[#1B1247] font-condensed font-bold text-xs uppercase tracking-wider"
            >
              Consult
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#FFB020] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* CENTERED SERVICES MEGA-MENU DROPDOWN (Appears in center of screen with full 3-column categories) */}
        {servicesDropdownOpen && (
          <div
            ref={dropdownRef}
            className={`fixed left-1/2 -translate-x-1/2 w-[860px] max-w-[95vw] bg-[#1B1247] rounded-2xl shadow-2xl border border-white/25 p-6 sm:p-8 z-50 text-white animate-fadeIn ${
              scrolled ? 'top-[72px]' : isDarkHeroPage ? 'top-[115px]' : 'top-[92px]'
            }`}
          >
            <div className="flex justify-between items-center pb-3 mb-5 border-b border-white/15">
              <span className="font-condensed uppercase tracking-wider text-sm sm:text-base font-bold text-[#FFB020]">
                All Advisory & Compliance Services
              </span>
              <Link
                to="/services"
                onClick={() => setServicesDropdownOpen(false)}
                className="text-xs text-[#CFC6FF] hover:text-[#FFB020] flex items-center gap-1 font-semibold transition-colors"
              >
                <span>Explore all 36 services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {serviceCategories.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-condensed font-bold text-sm text-[#FFB020] uppercase tracking-wide">
                    {cat.title}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-sans font-normal">
                    {cat.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          to={link.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-0.5"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#CFC6FF]">
              <span>Need specialized corporate or certification advice?</span>
              <button
                type="button"
                onClick={() => {
                  setServicesDropdownOpen(false);
                  onOpenConsultation('business');
                }}
                className="px-5 py-2 rounded-xl bg-[#FFB020] text-[#1B1247] font-condensed font-bold uppercase tracking-wider text-xs hover:bg-[#E59D10] transition-colors shadow-md"
              >
                Book Free Call
              </button>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1B1247] border-t border-white/10 px-6 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto mt-2">
            <div className="flex flex-col space-y-3 font-condensed text-lg uppercase tracking-wider">
              <Link
                to="/"
                className={`py-2 border-b border-white/10 ${
                  isHome ? 'text-[#FFB020]' : 'text-white'
                }`}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`py-2 border-b border-white/10 ${
                  location.pathname === '/about' ? 'text-[#FFB020]' : 'text-white'
                }`}
              >
                ABOUT US
              </Link>
              <Link
                to="/services"
                className={`py-2 border-b border-white/10 ${
                  location.pathname === '/services' ? 'text-[#FFB020]' : 'text-white'
                }`}
              >
                ALL SERVICES
              </Link>
              <a href="/#why-us" className="py-2 border-b border-white/10 text-white">
                WHY US
              </a>
              <Link to="/blog" className="py-2 border-b border-white/10 text-white">
                RESOURCES
              </Link>
              <Link to="/contact" className="py-2 border-b border-white/10 text-white">
                CONTACT
              </Link>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('business');
                }}
                className="w-full py-3 rounded-xl bg-[#FFB020] text-[#1B1247] font-condensed font-bold text-center uppercase tracking-wider text-base shadow-btn"
              >
                FREE CONSULTATION
              </button>
            </div>

            <div className="pt-2 text-xs text-[#CFC6FF] space-y-1 font-sans">
              <p>Phone: +91 97259 91607</p>
              <p>Email: sales@registifyservices.com</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
