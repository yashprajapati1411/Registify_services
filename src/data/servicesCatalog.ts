import { BUSINESS_SERVICES } from './businessData';
import { LOAN_SERVICES } from './loansData';

export interface UnifiedServiceItem {
  id: string;
  slug: string;
  category: string;
  categorySlug: 'incorporation' | 'startup-gov' | 'certifications' | 'compliance' | 'loans' | 'digital';
  categoryLabel: string;
  title: string;
  overlayTitle: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  registrationAuthority?: string;
  applicableFor?: string;
  registrationMode?: string;
  typicalTimeline?: string;
  popular?: boolean;
  benefits?: string[];
  eligibility?: string[];
  documents?: string[];
  process?: { step: number; title: string; description: string }[];
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export const DIGITAL_SERVICES: UnifiedServiceItem[] = [
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    category: 'Digital Solutions',
    categorySlug: 'digital',
    categoryLabel: 'Digital Solutions',
    title: 'Digital Marketing & Growth',
    overlayTitle: 'DIGITAL MARKETING',
    shortDescription: 'Targeted lead generation, brand awareness, and customer acquisition campaigns tailored for growing enterprises.',
    longDescription: 'Our digital marketing advisory assists Indian businesses in executing data-driven online customer acquisition strategies. From Google Ads and LinkedIn B2B campaigns to social media brand positioning, we optimize your marketing spend for measurable commercial ROI.',
    image: '/images/services/digital-marketing.jpg',
    registrationAuthority: 'Registify Digital Suite',
    applicableFor: 'Startups, D2C, B2B Manufacturers & Service Firms',
    registrationMode: 'Strategic Digital Execution',
    typicalTimeline: 'Ongoing Monthly Optimization',
    popular: true,
    benefits: [
      'Multi-channel inbound lead generation',
      'Targeted B2B and consumer audience reach',
      'Measurable analytics and transparent ROI reporting',
      'Unified brand messaging across all digital touchpoints'
    ],
    eligibility: [
      'Active commercial enterprise or registered startup',
      'Defined target audience and product/service offerings',
      'Willingness to review campaign metrics periodically'
    ],
    documents: [
      'Company logo and brand identity guidelines',
      'Product/service catalogs and pricing schedules',
      'Target customer demographic information'
    ],
    process: [
      { step: 1, title: 'Growth Audit', description: 'Assessing your current online presence, competitors, and target demographics.' },
      { step: 2, title: 'Campaign Strategy', description: 'Formulating channel selection, messaging angles, and budget allocation.' },
      { step: 3, title: 'Creative & Setup', description: 'Developing landing funnels, creative assets, and tracking pixels.' },
      { step: 4, title: 'Execution & Optimization', description: 'Active monitoring, A/B testing ad copy, and cost-per-lead optimization.' },
      { step: 5, title: 'Monthly Review', description: 'Transparent reporting of impressions, leads, conversions, and growth metrics.' }
    ],
    faqs: [
      {
        question: 'How quickly can we expect measurable results?',
        answer: 'Paid search and targeted advertising campaigns typically begin generating prospect inquiries within the first 7 to 14 days of launch, with ongoing weekly optimization improving conversion rates.'
      },
      {
        question: 'Do you work with B2B manufacturing and industrial enterprises?',
        answer: 'Yes. A large portion of our Gujarat and Pan-India clientele comprises industrial manufacturers, exporters, and engineering vendors requiring high-intent B2B inquiries.'
      }
    ],
    relatedSlugs: ['seo-optimization', 'website-development', 'startup-india-recognition']
  },
  {
    id: 'seo-optimization',
    slug: 'seo-optimization',
    category: 'Digital Solutions',
    categorySlug: 'digital',
    categoryLabel: 'Digital Solutions',
    title: 'SEO & Search Engine Optimization',
    overlayTitle: 'SEARCH OPTIMIZATION (SEO)',
    shortDescription: 'Sustainable search engine visibility ensuring your business ranks prominently for high-intent customer searches.',
    longDescription: 'Search Engine Optimization (SEO) builds long-term organic authority for your business. We implement comprehensive on-page optimization, semantic schema data, technical site health audits, and strategic content planning to drive dependable organic traffic.',
    image: '/images/services/seo.jpg',
    registrationAuthority: 'Registify Digital Suite',
    applicableFor: 'All Commercial Websites & E-Commerce Portals',
    registrationMode: 'Technical & Content Execution',
    typicalTimeline: '3 to 6 Months for Core Keywords',
    popular: true,
    benefits: [
      'High-intent organic traffic that reduces reliance on paid ads',
      'Dominance in Gujarat and national search engine results',
      'Improved website technical health, crawlability, and speed',
      'Enhanced institutional trust and domain authority'
    ],
    eligibility: [
      'Existing live website or newly commissioned web portal',
      'Domain administrative access for technical optimizations'
    ],
    documents: [
      'Google Search Console and Google Analytics access (if configured)',
      'List of core business services and target geographies'
    ],
    process: [
      { step: 1, title: 'Technical Audit', description: 'Analyzing crawl errors, site architecture, core web vitals, and indexing issues.' },
      { step: 2, title: 'Keyword Research', description: 'Identifying high-volume commercial keywords with clear purchase intent.' },
      { step: 3, title: 'On-Page Optimization', description: 'Optimizing title tags, meta descriptions, headings, and schema structured markup.' },
      { step: 4, title: 'Authority & Citations', description: 'Building contextual references, business directory listings, and domain strength.' },
      { step: 5, title: 'Rank & Traffic Tracking', description: 'Monthly analytics review assessing keyword movement and organic inquiries.' }
    ],
    faqs: [
      {
        question: 'Why is SEO critical alongside paid advertising?',
        answer: 'While paid ads stop generating leads the moment budget expires, organic SEO builds compound compounding asset value that continues attracting qualified inquiries for years.'
      },
      {
        question: 'How do you target regional clients in Gujarat versus nationwide?',
        answer: 'We utilize localized Google Business Profile integration and location-specific keyword targeting for regional queries, combined with national semantic terms for Pan-India reach.'
      }
    ],
    relatedSlugs: ['digital-marketing', 'website-development', 'company-registration']
  },
  {
    id: 'website-development',
    slug: 'website-development',
    category: 'Digital Solutions',
    categorySlug: 'digital',
    categoryLabel: 'Digital Solutions',
    title: 'Custom Website Development',
    overlayTitle: 'WEBSITE DEVELOPMENT',
    shortDescription: 'Modern, high-performance web portals built with modern architecture to establish credibility and capture inbound leads.',
    longDescription: 'Your website is your company’s institutional digital headquarters. We develop modern, mobile-first, blazingly fast websites built on modern technologies like React, TypeScript, and Tailwind CSS. Every site is designed for trust, accessibility, and high conversion.',
    image: '/images/services/web-dev.jpg',
    registrationAuthority: 'Registify Digital Suite',
    applicableFor: 'Startups, Corporate Enterprises & Professional Practices',
    registrationMode: 'Full-Cycle Engineering',
    typicalTimeline: '10 to 20 Business Days',
    popular: true,
    benefits: [
      '100% mobile-responsive design optimized for all screen sizes',
      'Sub-second load times and high Lighthouse performance scores',
      'Clean institutional UI designed specifically to convert business leads',
      'Seamless WhatsApp, email enquiry, and analytics integrations'
    ],
    eligibility: [
      'New or established business seeking an elevated web presence',
      'Domain registration and brand requirements'
    ],
    documents: [
      'Company logo and corporate profile text',
      'Service specifications, photos, and contact credentials'
    ],
    process: [
      { step: 1, title: 'Scope & Architecture', description: 'Planning sitemap, page hierarchy, and required functional workflows.' },
      { step: 2, title: 'Design & Prototype', description: 'Creating clean institutional UI mockups adhering to brand tokens.' },
      { step: 3, title: 'Engineering & Code', description: 'Developing responsive, typed code with clean semantic HTML5.' },
      { step: 4, title: 'Quality Assurance', description: 'Cross-browser testing, accessibility audit, and performance optimization.' },
      { step: 5, title: 'Launch & DNS Setup', description: 'Deploying to high-availability CDN with SSL certificate and monitoring.' }
    ],
    faqs: [
      {
        question: 'Will our website work smoothly on all mobile devices?',
        answer: 'Yes. All our web builds are tested across desktop, tablet, and mobile breakpoints (360px to 1440px) to guarantee flawless responsiveness.'
      },
      {
        question: 'Can we integrate lead capture directly into our email and WhatsApp?',
        answer: 'Yes. We integrate interactive lead inquiry forms that automatically forward submissions to your designated corporate inbox and WhatsApp channel.'
      }
    ],
    relatedSlugs: ['digital-marketing', 'seo-optimization', 'company-registration']
  }
];

// Helper to assign category metadata to existing business items
const mapBusinessItemToUnified = (item: any): UnifiedServiceItem => {
  let categorySlug: UnifiedServiceItem['categorySlug'] = 'incorporation';
  let categoryLabel = 'Company Incorporation';
  let image = '/images/services/pvt-ltd.jpg';
  let registrationAuthority = 'Ministry of Corporate Affairs (MCA)';
  let applicableFor = 'Private Limited / Corporate Promoters';
  let registrationMode = 'Paperless MCA V3 Online';
  let typicalTimeline = '7 - 14 Business Days';

  if (item.category === 'Company Registration') {
    categorySlug = 'incorporation';
    categoryLabel = 'Company Incorporation';
    registrationAuthority = 'Ministry of Corporate Affairs (MCA)';
    if (item.slug === 'company-registration') {
      image = '/images/services/pvt-ltd.jpg';
      applicableFor = 'Private Limited / Corporate Promoters';
      typicalTimeline = '7 - 14 Business Days';
    } else if (item.slug === 'llp-registration') {
      image = '/images/services/llp.jpg';
      applicableFor = 'Professional Firms & Partnerships';
      typicalTimeline = '10 - 15 Business Days';
    } else if (item.slug === 'opc-registration') {
      image = '/images/services/opc.jpg';
      applicableFor = 'Solo Founders & Single Entrepreneurs';
      typicalTimeline = '7 - 12 Business Days';
    } else if (item.slug === 'partnership-firm') {
      image = '/images/services/partnership.jpg';
      registrationAuthority = 'Registrar of Firms (ROF)';
      applicableFor = 'Two or more Commercial Partners';
      typicalTimeline = '5 - 10 Business Days';
    } else if (item.slug === 'proprietorship-setup') {
      image = '/images/services/proprietorship.jpg';
      registrationAuthority = 'Municipal Authority / MSME';
      applicableFor = 'Individual Sole Proprietors';
      typicalTimeline = '3 - 5 Business Days';
    } else if (item.slug === 'section-8-company') {
      image = '/images/services/section-8.jpg';
      registrationAuthority = 'Ministry of Corporate Affairs (MCA)';
      applicableFor = 'Non-Profit Organizations & Charitable Foundations';
      typicalTimeline = '10 - 20 Business Days';
    } else if (item.slug === 'public-limited-company') {
      image = '/images/services/public-ltd.jpg';
      registrationAuthority = 'Ministry of Corporate Affairs (MCA)';
      applicableFor = 'Large Enterprises & Public Aspirants';
      typicalTimeline = '15 - 25 Business Days';
    } else if (item.slug === 'ngo-trust-registration') {
      image = '/images/services/ngo-trust.jpg';
      registrationAuthority = 'Sub-Registrar / Charity Commissioner';
      applicableFor = 'Trusts, Societies & Social Welfare NGOs';
      typicalTimeline = '10 - 15 Business Days';
    } else {
      image = '/images/services/pvt-ltd.jpg';
    }
  } else if (item.category === 'Certifications') {
    if (item.slug === 'startup-india-recognition') {
      categorySlug = 'startup-gov';
      categoryLabel = 'Startup & Government';
      image = '/images/services/startup-india.jpg';
      registrationAuthority = 'DPIIT (Govt. of India)';
      applicableFor = 'Startups (Pvt Ltd / LLP / Partnership < 10 yrs)';
      registrationMode = 'National Startup Portal';
      typicalTimeline = '5 - 10 Working Days';
    } else if (item.slug === 'udyam-registration') {
      categorySlug = 'startup-gov';
      categoryLabel = 'Startup & Government';
      image = '/images/services/msme-udyam.jpg';
      registrationAuthority = 'Ministry of MSME (Govt. of India)';
      applicableFor = 'Micro, Small & Medium Enterprises';
      registrationMode = 'Udyam Registration Portal';
      typicalTimeline = '2 - 4 Working Days';
    } else if (item.slug === 'gem-registration') {
      categorySlug = 'startup-gov';
      categoryLabel = 'Startup & Government';
      image = '/images/services/gem-registration.jpg';
      registrationAuthority = 'Government e-Marketplace (GeM)';
      applicableFor = 'Vendors, OEM Manufacturers & Service Providers';
      registrationMode = 'GeM Portal Online';
      typicalTimeline = '3 - 7 Working Days';
    } else if (item.slug === 'iso-certification') {
      categorySlug = 'certifications';
      categoryLabel = 'Certifications';
      image = '/images/services/iso.jpg';
      registrationAuthority = 'Accredited Certification Bodies';
      applicableFor = 'Manufacturing, IT & Service Enterprises';
      registrationMode = 'Audit & Documentation Review';
      typicalTimeline = '7 - 14 Working Days';
    } else if (item.slug === 'fssai-license') {
      categorySlug = 'certifications';
      categoryLabel = 'Certifications';
      image = '/images/services/fssai.jpg';
      registrationAuthority = 'FSSAI (Food Safety Authority of India)';
      applicableFor = 'Food Businesses, Cloud Kitchens & Manufacturers';
      registrationMode = 'FoSCoS Online Portal';
      typicalTimeline = '10 - 25 Working Days';
    } else if (item.slug === 'trademark-registration') {
      categorySlug = 'certifications';
      categoryLabel = 'Certifications';
      image = '/images/services/trademark.jpg';
      registrationAuthority = 'Controller General of Patents, Designs & Trademarks';
      applicableFor = 'Brand Names, Logos, Slogans & Inventions';
      registrationMode = 'IP India Online Portal';
      typicalTimeline = 'Application within 24-48 hrs; Registration 6-12 mos';
    } else if (item.slug === 'iec-registration') {
      categorySlug = 'certifications';
      categoryLabel = 'Certifications';
      image = '/images/services/iec.jpg';
      registrationAuthority = 'Directorate General of Foreign Trade (DGFT)';
      applicableFor = 'Importers, Exporters & Merchant Traders';
      registrationMode = 'DGFT Portal';
      typicalTimeline = '2 - 4 Working Days';
    } else {
      categorySlug = 'certifications';
      categoryLabel = 'Certifications';
      image = '/images/services/iso.jpg';
    }
  } else if (item.category === 'GST Services') {
    categorySlug = 'startup-gov';
    categoryLabel = 'Startup & Government';
    image = '/images/services/gst.jpg';
    registrationAuthority = 'GSTN / Ministry of Finance';
    applicableFor = 'Traders, Manufacturers, Service Providers';
    registrationMode = 'GST Common Portal';
    typicalTimeline = '3 - 7 Working Days';
  } else if (item.category === 'Compliance') {
    categorySlug = 'compliance';
    categoryLabel = 'Compliance';
    image = '/images/services/roc-compliance.jpg';
    registrationAuthority = 'Ministry of Corporate Affairs (MCA)';
    applicableFor = 'Private Limited Companies & LLPs';
    registrationMode = 'MCA Annual Filings (AOC-4, MGT-7)';
    typicalTimeline = 'Annual Statutory Cycles';
  } else if (item.category === 'Taxation & Accounting') {
    categorySlug = 'compliance';
    categoryLabel = 'Compliance';
    image = '/images/services/taxation.jpg';
    registrationAuthority = 'Income Tax Department of India';
    applicableFor = 'Businesses, LLPs, Private Companies';
    registrationMode = 'Digital Bookkeeping & Filing';
    typicalTimeline = 'Monthly / Quarterly / Annual';
  } else if (item.category === 'Business Documentation' || item.slug === 'documentation-agreements') {
    categorySlug = 'compliance';
    categoryLabel = 'Compliance';
    image = '/images/services/documentation.jpg';
    registrationAuthority = 'Registify Legal Drafting Desk';
    applicableFor = 'Founders, Vendors & Employers';
    registrationMode = 'Structured Agreement Drafting';
    typicalTimeline = '3 - 5 Working Days';
  }

  return {
    id: item.id,
    slug: item.slug,
    category: item.category,
    categorySlug,
    categoryLabel,
    title: item.title,
    overlayTitle: item.title.toUpperCase(),
    shortDescription: item.shortDescription,
    longDescription: item.longDescription,
    image,
    registrationAuthority,
    applicableFor,
    registrationMode,
    typicalTimeline,
    popular: item.popular,
    benefits: item.benefits || item.whoNeedsIt || [],
    eligibility: item.applicability || [],
    documents: item.documents || [],
    process: item.process || [],
    faqs: item.faqs || [],
    relatedSlugs: []
  };
};

// Helper for loan services
const mapLoanItemToUnified = (item: any): UnifiedServiceItem => {
  let image = '/images/services/business-loan.jpg';
  if (item.slug === 'machinery-loan') {
    image = '/images/services/machinery-loan.jpg';
  } else if (item.slug === 'working-capital-loan') {
    image = '/images/services/working-capital.jpg';
  } else if (item.slug === 'personal-loan') {
    image = '/images/services/personal-loan.jpg';
  } else if (item.slug === 'msme-loan') {
    image = '/images/services/msme-loan.jpg';
  } else if (item.slug === 'home-loan') {
    image = '/images/services/home-loan.jpg';
  } else if (item.slug === 'loan-against-property') {
    image = '/images/services/loan-against-property.jpg';
  } else if (item.slug === 'project-finance') {
    image = '/images/services/project-finance.jpg';
  } else if (item.slug === 'commercial-vehicle-loan') {
    image = '/images/services/commercial-vehicle.jpg';
  } else if (item.slug === 'car-loan') {
    image = '/images/services/car-loan.jpg';
  } else if (item.slug === 'education-loan') {
    image = '/images/services/education-loan.jpg';
  } else if (item.slug === 'lap-for-business') {
    image = '/images/services/lap-business.jpg';
  } else if (item.slug === 'overdraft-cash-credit') {
    image = '/images/services/overdraft-cc.jpg';
  } else if (item.slug === 'debt-consolidation') {
    image = '/images/services/debt-consolidation.jpg';
  } else {
    image = '/images/services/business-loan.jpg';
  }

  return {
    id: item.id,
    slug: item.slug,
    category: 'Loans & Finance',
    categorySlug: 'loans',
    categoryLabel: 'Loans & Finance',
    title: item.title,
    overlayTitle: item.title.toUpperCase(),
    shortDescription: item.shortDescription,
    longDescription: item.longDescription,
    image,
    registrationAuthority: 'Commercial Banks & Registered NBFCs',
    applicableFor: 'Established Enterprises & MSMEs',
    registrationMode: 'Dossier Preparation & Bank Liaison',
    typicalTimeline: '7 - 21 Working Days (Lender Discretion)',
    popular: item.popular,
    benefits: item.features || [],
    eligibility: item.eligibility || item.idealFor || [],
    documents: item.documents || [],
    process: item.process || [],
    faqs: item.faqs || [],
    relatedSlugs: ['business-loan', 'msme-loan', 'machinery-loan']
  };
};

// Combine all services into one catalog
export const ALL_UNIFIED_SERVICES: UnifiedServiceItem[] = [
  ...BUSINESS_SERVICES.map(mapBusinessItemToUnified),
  ...LOAN_SERVICES.map(mapLoanItemToUnified),
  ...DIGITAL_SERVICES
];

const SLUG_ALIASES: Record<string, string> = {
  'web-development': 'website-development',
  'company-incorporation': 'company-registration',
  'pvt-ltd-registration': 'company-registration',
};

export const getServiceBySlug = (slug: string): UnifiedServiceItem | undefined => {
  const resolvedSlug = SLUG_ALIASES[slug] || slug;
  return ALL_UNIFIED_SERVICES.find((s) => s.slug === resolvedSlug || s.id === resolvedSlug || s.slug === slug || s.id === slug);
};

export const getServicesByCategory = (categorySlug: UnifiedServiceItem['categorySlug']): UnifiedServiceItem[] => {
  return ALL_UNIFIED_SERVICES.filter((s) => s.categorySlug === categorySlug);
};
