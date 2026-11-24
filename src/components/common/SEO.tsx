import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

const DEFAULT_TITLE = 'Registify Services | Company Registration, Startup India, Certifications & Compliance';
const DEFAULT_DESC = 'We help entrepreneurs establish, register, certify and grow their businesses across India. Company incorporation, Startup India, ISO certifications, and loans.';

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title ? `${title} | Registify Services` : DEFAULT_TITLE;
    document.title = finalTitle;

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // 3. Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // 4. Update Canonical Link
    if (canonicalPath) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://registifyservices.com${canonicalPath}`);
      }
    }
  }, [title, description, canonicalPath]);

  return null;
};
