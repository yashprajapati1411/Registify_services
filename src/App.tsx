import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { CookieConsentBanner } from './components/common/CookieConsentBanner';
import { ConsultationModal } from './components/modals/ConsultationModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [modalTab, setModalTab] = useState<'loan' | 'business'>('business');
  const [modalSpecific, setModalSpecific] = useState<string>('');

  const handleOpenConsultation = (tab: 'loan' | 'business' = 'business', specific: string = '') => {
    setModalTab(tab);
    setModalSpecific(specific);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setModalSpecific('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#1F2A44] font-sans antialiased selection:bg-[#F7D774] selection:text-[#27368F]">
        
        {/* Global Navigation Header */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Dynamic Route Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />} />
            
            {/* Unified Services Directory & Detail Template */}
            <Route path="/services" element={<ServicesIndexPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Backwards-compatible legacy route mappings */}
            <Route path="/business" element={<ServicesIndexPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/business/:slug" element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/loans" element={<ServicesIndexPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/loans/:slug" element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Blog & Resources */}
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenConsultation={handleOpenConsultation} />} />

            {/* Contact Us */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Admin Management Dashboard */}
            <Route path="/admin" element={<AdminDashboardPage />} />

            {/* Statutory & Legal Pages */}
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />

            {/* 404 Catch All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Widget */}
        <WhatsAppButton />

        {/* Cookie Consent Banner (DPDP & GDPR Compliant) */}
        <CookieConsentBanner />

        {/* Global Lead Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
          defaultTab={modalTab}
          initialSpecificService={modalSpecific}
        />

      </div>
    </Router>
  );
}

export default App;
