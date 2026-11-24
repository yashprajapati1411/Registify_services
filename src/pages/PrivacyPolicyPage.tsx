import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F1] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB020]/30 text-[#2B1E6B] text-xs font-bold border border-[#FFB020]">
            <ShieldCheck className="w-4 h-4 text-[#2B1E6B]" />
            <span>DATA PROTECTION & PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E6B] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6477] max-w-2xl mx-auto">
            How Registify Services collects, utilizes, and protects your personal and commercial data in compliance with the Digital Personal Data Protection (DPDP) Act and the Information Technology Act, 2000.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card space-y-6 text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">1. Information We Collect</h2>
            <p className="text-[#5B6477]">
              When you submit a consultation enquiry, request a business service, or apply for loan facilitation on Registify Services, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#5B6477]">
              <li><strong>Personal Identifiers:</strong> Full name, telephone/mobile number, email address, residential address.</li>
              <li><strong>Business Credentials:</strong> Business name, proposed entity structure, registered office proofs, Udyam / GST details.</li>
              <li><strong>Financial Indicators:</strong> Required loan amount, approximate monthly turnover or annual turnover ranges (as volunteered by you).</li>
              <li><strong>Digital Device Data:</strong> IP address, browser type, referral page, and interaction timestamps.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">2. Purpose and Use of Collected Data</h2>
            <p className="text-[#5B6477]">
              Your data is collected strictly to deliver our consultancy and facilitation services:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#5B6477]">
              <li>To evaluate eligibility for company incorporation, certifications, or commercial financing options.</li>
              <li>To communicate with you regarding your application status, queries, and document checklists.</li>
              <li>To coordinate with authorized commercial banks, NBFCs, or secretarial professionals upon your explicit consent.</li>
              <li>To prevent fraudulent enquiries, spam, and duplicate submissions.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">3. No Sale of Customer Information</h2>
            <p className="font-semibold text-[#2B1E6B]">
              Registify Services does not sell, rent, lease, or publicly expose customer contact information or personal data to third-party telemarketers or external advertising networks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">4. Secure Data Storage & Protection</h2>
            <p className="text-[#5B6477]">
              All customer records and enquiry submissions are maintained within encrypted databases backed by enterprise-grade Row Level Security (RLS) and SSL/TLS transmission protocols. Access is restricted exclusively to authorized staff and consultants who require the data to process your files.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">5. Grievance Officer & Contact</h2>
            <p className="text-[#5B6477]">
              In accordance with the Information Technology Rules, 2011, for any questions or data removal requests regarding our privacy practices, please contact our Grievance Desk at:
            </p>
            <div className="p-4 bg-[#FFF9F1] rounded-xl border border-[#DFE4F1] space-y-1 text-xs">
              <p><strong>Grievance Officer:</strong> Compliance Desk, Registify Services</p>
              <p><strong>Email:</strong> privacy@registifyservices.com / contact@registifyservices.com</p>
              <p><strong>Address:</strong> Corporate Road, SG Highway, Ahmedabad, Gujarat 380054 (India)</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#DFE4F1] flex items-center justify-between text-xs text-[#5B6477]">
            <span>Effective Date: 2026</span>
            <Link to="/terms" className="font-bold text-[#2B1E6B] hover:text-[#E0603A] transition-colors">
              Terms & Conditions &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
