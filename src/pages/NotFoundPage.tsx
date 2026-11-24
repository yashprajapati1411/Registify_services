import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Building, Landmark, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-[#FFF9F1] flex items-center justify-center pt-36 sm:pt-40 pb-20 px-4">
      <SEO title="Page Not Found (404)" description="The requested page could not be found." />
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#DFE4F1] shadow-card text-center space-y-6">
        <div className="w-16 h-16 bg-[#1B1247] text-[#FFB020] rounded-2xl flex items-center justify-center mx-auto font-black text-2xl shadow-inner border border-white/10">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-serif font-bold text-[#1B1247]">
            Page Not Found
          </h1>
          <p className="text-xs text-[#5B6477]">
            The page you are looking for may have been moved or does not exist. Explore our primary services below:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <Link
            to="/services"
            className="p-3 bg-[#FFF9F1] hover:bg-[#F2EDFF] rounded-xl border border-[#DFE4F1] text-[#1B1247] font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Building className="w-5 h-5 text-[#2B1E6B]" />
            <span>All Services</span>
          </Link>

          <Link
            to="/contact"
            className="p-3 bg-[#FFF9F1] hover:bg-[#F2EDFF] rounded-xl border border-[#DFE4F1] text-[#1B1247] font-bold flex flex-col items-center gap-1.5 transition-colors"
          >
            <Phone className="w-5 h-5 text-[#2B1E6B]" />
            <span>Contact Desk</span>
          </Link>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="w-full py-3 bg-[#1B1247] hover:bg-[#2B1E6B] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4 text-[#FFB020]" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
