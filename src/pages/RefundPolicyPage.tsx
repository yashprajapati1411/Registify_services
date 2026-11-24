import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F1] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB020]/30 text-[#2B1E6B] text-xs font-bold border border-[#FFB020]">
            <RefreshCcw className="w-4 h-4 text-[#2B1E6B]" />
            <span>TRANSPARENT COMMERCIAL POLICIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E6B] tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6477] max-w-2xl mx-auto">
            Our clear, fair policy on fee refunds, statutory disbursements, and cancellation requests.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card space-y-6 text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">1. Free Preliminary Scoping</h2>
            <p className="text-[#5B6477]">
              Initial consultations, service discussions, and basic document eligibility checks conducted via our website or WhatsApp are provided free of charge. No fees are payable until you formally engage us for a specific assignment.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">2. Distinction: Professional Fees vs. Government / External Fees</h2>
            <p className="text-[#5B6477]">
              When a client engages Registify Services, payments are partitioned into two categories:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5B6477]">
              <li>
                <strong>Government Challans & Third-Party Out-of-Pocket Costs:</strong> Includes MCA filing fees, stamp duties, PAN/TAN fees, trademark registry charges, ISO external audit fees, or bank valuation charges. Once paid to the relevant government portal or external authority, these fees are completely non-refundable under any circumstance.
              </li>
              <li>
                <strong>Registify Professional Consultancy Fees:</strong> The fee charged for our internal scoping, dossier collation, drafting, and coordination services.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">3. Cancellation & Refund Eligibility</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5B6477]">
              <li>
                <strong>Cancellation Prior to Work Commencement:</strong> If you request cancellation before our advisory team has initiated document drafting or portal submission, a 100% refund of professional fees is issued (minus nominal payment gateway processing charges).
              </li>
              <li>
                <strong>Cancellation After Work Has Commenced:</strong> If cancellation is requested after documentation review or initial form drafting has begun but before submission to authorities, a pro-rata refund reflecting only unexpended professional hours may be considered.
              </li>
              <li>
                <strong>Post-Submission or Execution:</strong> Once an application has been submitted to a government registry or lending institution, our professional fee is fully earned and non-refundable.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">4. Rejections by Authorities or Lenders</h2>
            <p className="text-justify text-[#5B6477]">
              In cases where an application is rejected or subjected to resubmission by the Registrar of Companies (ROC), GST department, Trademark Registry, or a commercial lending institution due to reasons beyond our control (such as applicant credit defaults, trademark similarities, or regulatory discretion), fees paid cannot be refunded. However, we will assist you with up to two standard resubmissions or modifications at no extra consultancy charge.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">5. How to Initiate a Refund Request</h2>
            <p className="text-[#5B6477]">
              To request a cancellation or refund, email our billing department at billing@registifyservices.com or contact@registifyservices.com quoting your engagement reference number. Eligible refunds are processed within 5 to 7 working days via the original payment method.
            </p>
          </div>

          <div className="pt-6 border-t border-[#DFE4F1] flex items-center justify-between text-xs text-[#5B6477]">
            <span>Last Updated: 2026</span>
            <Link to="/disclaimer" className="font-bold text-[#2B1E6B] hover:text-[#E0603A] transition-colors">
              Statutory Disclaimers &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
