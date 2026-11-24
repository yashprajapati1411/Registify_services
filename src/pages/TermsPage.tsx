import React from 'react';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F1] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB020]/30 text-[#2B1E6B] text-xs font-bold border border-[#FFB020]">
            <Scale className="w-4 h-4 text-[#2B1E6B]" />
            <span>TERMS OF ENGAGEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E6B] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6477] max-w-2xl mx-auto">
            These terms govern your access to the Registify Services website and our commercial engagement.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card space-y-6 text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">1. Acceptance of Terms</h2>
            <p className="text-[#5B6477]">
              By accessing, browsing, submitting consultation forms, or engaging Registify Services, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions and our Statutory Disclaimers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">2. Scope of Services</h2>
            <p className="text-[#5B6477]">
              Registify Services provides private consultancy, document assembly, and administrative coordination for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#5B6477]">
              <li>Business entity registration (Private Limited, LLP, OPC, Proprietorships, Section 8 companies).</li>
              <li>Statutory certifications (ISO, MSME/Udyam, FSSAI, GeM, Import Export Code, Trademarks).</li>
              <li>GST and annual secretarial compliance coordination.</li>
              <li>Commercial bank and NBFC loan assistance.</li>
            </ul>
            <p className="mt-2 text-justify text-[#5B6477]">
              Registify Services does not act as a law firm, public judicial advocate, or chartered accountancy firm. All statutory audits, attestations, and court litigation are excluded from our direct service scope.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">3. Accuracy of Customer Information</h2>
            <p className="text-justify text-[#5B6477]">
              You agree to provide accurate, current, and genuine documentation (including KYC records, address proofs, utility bills, and financial statements). Submitting forged, altered, or fraudulent documentation to government portals or lending institutions constitutes a severe violation of applicable Indian laws and will result in immediate termination of engagement without refund.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">4. No Guarantee of Outcomes</h2>
            <p className="text-justify text-[#5B6477]">
              As articulated in our master disclaimer, Registify Services does not warrant or guarantee that an entity name will be sanctioned by the MCA, that a trademark will be accepted without objection, or that a commercial loan will be sanctioned. All such outcomes reside solely within the discretion of the designated authorities or financial lenders.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">5. Governing Law and Jurisdiction</h2>
            <p className="text-[#5B6477]">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div className="pt-6 border-t border-[#DFE4F1] flex items-center justify-between text-xs text-[#5B6477]">
            <span>Last Updated: 2026</span>
            <Link to="/refund-policy" className="font-bold text-[#2B1E6B] hover:text-[#E0603A] transition-colors">
              Refund Policy &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
