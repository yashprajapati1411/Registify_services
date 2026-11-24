import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { IndiaMapSection } from '../components/home/IndiaMapSection';
import { ServicesHomeSection } from '../components/home/ServicesHomeSection';
import { WhyChooseRegistifySection } from '../components/home/WhyChooseRegistifySection';
import { ClientReviewsHomeSection } from '../components/home/ClientReviewsHomeSection';
import { ContactHomeSection } from '../components/home/ContactHomeSection';

interface HomePageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Company Registration, Startup India & Compliance"
        description="Registify Services helps entrepreneurs establish, register, certify and grow their businesses across India. Company incorporation, Startup India, ISO certifications, and loans."
        canonicalPath="/"
      />
      {/* 1. HERO SECTION (Dark Royal Navy #2B1E6B with Floating Animated Certificates) */}
      <HeroSection
        onOpenConsultation={onOpenConsultation}
        onExploreServices={scrollToServices}
      />

      {/* 2. OUR REACH: REGISTIFY ACROSS INDIA (Vertical Satellite Map, Flowing Lines & Animated Credibility Stats) */}
      <IndiaMapSection />

      {/* 3. OUR SERVICES (6 Categories Sidebar, 3 Photo Cards per Category & View All Services) */}
      <ServicesHomeSection />

      {/* 4. WHY CHOOSE REGISTIFY (6 Core Institutional Strengths with Lilac Number Badges) */}
      <WhyChooseRegistifySection />

      {/* 5. CLIENT REVIEWS (Testimonial Tabs, Giant Quote & Geometric R Emblem) */}
      <ClientReviewsHomeSection />

      {/* 6. CONTACT US / LET'S TALK (Paper Plane Graphic, Direct Contacts & Enquiry Form) */}
      <ContactHomeSection />
    </div>
  );
};
