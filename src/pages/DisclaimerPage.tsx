import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="bg-[#FFF9F1] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB020]/30 text-[#2B1E6B] text-xs font-bold border border-[#FFB020]">
            <AlertTriangle className="w-4 h-4 text-[#E0603A]" />
            <span>STATUTORY & REGULATORY STATEMENTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1E6B] tracking-tight">
            Important Legal & Business Disclaimers
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6477] max-w-2xl mx-auto">
            Please read these statutory disclaimers carefully before using the services of Registify Services.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DFE4F1] shadow-card space-y-8 text-xs sm:text-sm text-[#1F2A44] leading-relaxed">
          
          {/* Master Disclaimer Paragraph */}
          <div className="p-6 bg-[#FFF9F1] border-2 border-[#FFB020] rounded-xl space-y-3">
            <h2 className="text-sm font-serif font-bold text-[#2B1E6B] uppercase tracking-wider">
              1. Independent Private Consultancy Status
            </h2>
            <p className="font-medium text-justify">
              Registify Services is an independent private consultancy and service facilitation business. We are not a government department, government authority or government-affiliated organization. We provide assistance with business registrations, certification applications, documentation, compliance coordination and financial service enquiries.
            </p>
            <p className="font-medium text-justify">
              We do not guarantee the approval of any registration, certification, licence, loan or other application. Final approval and decisions rest with the relevant government authority, certification body, bank, NBFC or financial institution. Loan products are subject to lender-specific eligibility criteria, credit assessment, verification, interest rates, fees and applicable terms.
            </p>
            <p className="font-medium text-justify">
              Registify Services is not a law firm and does not provide court representation, litigation or advocate services. Legal opinions and regulated professional services must be obtained from appropriately qualified professionals. Professional fees, government charges, lender charges and other applicable costs should be clearly communicated before the commencement of any service.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">
              2. No Affiliation with Government Departments
            </h2>
            <p className="text-justify text-[#5B6477]">
              Registify Services operates strictly as a private business consultancy. We do not display official government emblems, crests, or logos, nor do we imply any authorization or endorsement from the Ministry of Corporate Affairs (MCA), Goods and Services Tax Network (GSTN), Ministry of MSME, Department for Promotion of Industry and Internal Trade (DPIIT), Food Safety and Standards Authority of India (FSSAI), or the Controller General of Patents, Designs and Trade Marks (CGPDTM).
            </p>
            <p className="text-justify text-[#5B6477]">
              All official government registration and filing portals (such as mca.gov.in, gst.gov.in, udyamregistration.gov.in, foscos.fssai.gov.in, and ipindia.gov.in) are public domains accessible directly by citizens. Our consultancy provides expert assistance, document collation, and procedural support for applicants who prefer professional guidance.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">
              3. Loan & Financing Disclaimers
            </h2>
            <p className="text-justify text-[#5B6477]">
              Registify Services coordinates commercial bank and NBFC loan enquiries on behalf of applicants. We do not act as an authorized lending institution or a direct lender. We do not guarantee loan approvals, specific sanctioned amounts, interest rates, or immediate turnaround times. 
            </p>
            <p className="text-justify text-[#5B6477]">
              All financial evaluations, credit bureau pulls (CIBIL/Experian), interest spreads, and loan sanctions remain at the sole and unfettered discretion of the participating banks or financial institutions. 
            </p>
            <p className="font-semibold text-[#2B1E6B]">
              Registify Services strictly does NOT offer or consult on government loan schemes, government subsidies, or government grant schemes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-serif font-bold text-[#2B1E6B]">
              4. Legal Advisory & Court Practice Scope
            </h2>
            <p className="text-justify text-[#5B6477]">
              Registify Services does not practice law and does not represent clients before judicial or quasi-judicial forums. Any commercial contracts, partnership deeds, or intellectual property opposition proceedings requiring formal legal review are referred to independent, qualified legal professionals.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
