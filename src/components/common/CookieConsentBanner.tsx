import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'registify_cookie_consent_v1';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        // Short delay so it doesn't pop in abruptly on initial mount
        const timer = setTimeout(() => setIsVisible(true), 900);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage exceptions in restrictive environments
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({ status: 'all', timestamp: new Date().toISOString() })
      );
    } catch {}
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({ status: 'essential', timestamp: new Date().toISOString() })
      );
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-[#1B1247] text-white rounded-2xl p-5 shadow-2xl border border-white/15 backdrop-blur-md">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#FFB020]/20 flex items-center justify-center text-[#FFB020] flex-shrink-0 mt-0.5 border border-[#FFB020]/30">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <div className="flex-1 space-y-2">
            <h4 className="font-serif font-bold text-sm text-white tracking-wide">
              Privacy & Cookie Notice
            </h4>
            <p className="text-xs text-[#E9E4FF]/90 leading-relaxed font-sans">
              We use essential cookies to maintain security and enable consultation form processing in accordance with the Indian DPDP Act 2023. See our{' '}
              <Link
                to="/privacy-policy"
                onClick={() => setIsVisible(false)}
                className="text-[#FFB020] underline hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl bg-[#FFB020] hover:bg-[#E59D10] text-[#1B1247] font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
              >
                Accept All
              </button>

              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#E9E4FF] font-semibold text-xs transition-colors border border-white/15"
              >
                Essential Only
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleEssentialOnly}
            aria-label="Close cookie consent banner"
            className="text-white/60 hover:text-white p-1 rounded-lg transition-colors -mr-1 -mt-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
