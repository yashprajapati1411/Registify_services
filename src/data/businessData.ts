import { BusinessServiceItem } from '../types';

export const BUSINESS_SERVICES: BusinessServiceItem[] = [
  // SECTION 5: COMPANY REGISTRATION
  {
    id: 'company-registration',
    slug: 'company-registration',
    category: 'Company Registration',
    title: 'Private Limited Company Registration',
    shortDescription: 'The gold standard corporate structure for startups, scalable businesses, and high-growth ventures seeking credibility and investment.',
    longDescription: 'A Private Limited Company (Pvt Ltd) is India’s most trusted and recognized corporate vehicle. It provides limited liability protection to shareholders, separate legal juristic personality, perpetual succession, and the ability to raise institutional venture capital.',
    iconName: 'Building',
    popular: true,
    whoNeedsIt: [
      'Founders planning to raise external seed or venture capital',
      'Technology, D2C, manufacturing, and high-growth startups',
      'Enterprises needing limited liability protection for personal assets',
      'Businesses requiring professional corporate standing with enterprise clients'
    ],
    benefits: [
      'Separate legal juristic entity distinct from directors and shareholders',
      'Limited liability protection safeguarding personal assets of promoters',
      'Perpetual succession ensures company existence unaffected by member changes',
      'Eligible for 100% DPIIT Startup India tax exemptions and investor equity dilution'
    ],
    applicability: [
      'Minimum two directors (at least one resident Indian citizen)',
      'Minimum two shareholders (can be the same as directors)',
      'Valid registered office address within India',
      'No minimum paid-up capital requirement'
    ],
    documents: [
      'PAN card and Aadhaar card of all proposed directors and shareholders',
      'Identity proof (Passport / Voter ID / Driving License) for each director',
      'Latest residential address proof (Bank statement / Electricity bill < 2 months old)',
      'Proof of registered business office address (Electricity bill / Property tax receipt)',
      'NOC from property owner along with rent agreement'
    ],
    process: [
      { step: 1, title: 'Name Approval (RUN / SPICe+ Part A)', description: 'Filing name reservation on MCA portal ensuring non-infringement of registered trademarks.' },
      { step: 2, title: 'DSC & SPICe+ Part B Filing', description: 'Procuring Class-3 DSCs, drafting digital MOA & AOA, and submitting unified incorporation forms.' },
      { step: 3, title: 'Statutory Registrations Integration', description: 'Automatic issuance of PAN, TAN, EPFO, ESIC, Professional Tax, and Bank Account opening.' },
      { step: 4, title: 'Certificate of Incorporation (COI)', description: 'MCA issues official Certificate of Incorporation containing Corporate Identification Number (CIN).' }
    ],
    faqs: [
      {
        question: 'How long does it take to register a Private Limited Company?',
        answer: 'Typically between 7 to 14 business days, depending on name approval availability, document turnaround, and Ministry of Corporate Affairs (MCA) registrar review cycles.'
      },
      {
        question: 'Is a commercial office address mandatory for the registered office?',
        answer: 'No. The registered office can be residential, commercial, or rented premises, provided you furnish a valid utility bill and an NOC from the legal property owner.'
      },
      {
        question: 'Do I need to visit any government office physically?',
        answer: 'No. The entire incorporation procedure is completely paperless and executed digitally through the MCA V3 online portal.'
      }
    ]
  },
  {
    id: 'llp-registration',
    slug: 'llp-registration',
    category: 'Company Registration',
    title: 'Limited Liability Partnership (LLP) Registration',
    shortDescription: 'Ideal blend of partnership flexibility and corporate limited liability, with significantly lower statutory compliance burdens.',
    longDescription: 'A Limited Liability Partnership (LLP) combines the organizational flexibility of a traditional partnership with the limited liability shield of a company. It is ideal for service firms, consulting agencies, creative studios, and professional practices.',
    iconName: 'Users',
    popular: true,
    whoNeedsIt: [
      'Professional consultants, IT agencies, design firms, and advisory studios',
      'Small to medium businesses wanting limited liability without rigid corporate board meetings',
      'Family-owned commercial ventures seeking clear contractual ownership terms',
      'Partners desiring personal asset insulation without mandatory statutory audit up to ₹ 40 Lakhs turnover'
    ],
    benefits: [
      'Limited liability shield protects partners from co-partner negligence or liabilities',
      'Lower statutory compliance compared to private companies (no mandatory board resolutions)',
      'No audit required until annual turnover exceeds ₹ 40 Lakhs or capital contribution exceeds ₹ 25 Lakhs',
      'Profits distributed to partners are not subject to Dividend Distribution Tax'
    ],
    applicability: [
      'Minimum two designated partners (at least one resident Indian)',
      'Designated Partner Identification Number (DPIN / DIN) and DSC',
      'Partnership agreement defining capital ratio and profit sharing',
      'Registered office address in India'
    ],
    documents: [
      'PAN, Aadhaar, and passport-size photographs of all partners',
      'Proof of identity and residential address (bank statement / utility bill)',
      'Registered office address proof with owner NOC and rent deed',
      'Specimen signature cards for digital certification'
    ],
    process: [
      { step: 1, title: 'Name Reservation (RUN-LLP)', description: 'Submitting two proposed names reflecting business objectives to MCA.' },
      { step: 2, title: 'FiLLiP Form Submission', description: 'Incorporation application, partner DPIN allocation, and digital verification.' },
      { step: 3, title: 'LLP Agreement Drafting', description: 'Drafting structured LLP agreement covering rights, liabilities, and duties.' },
      { step: 4, title: 'Form 3 Filing & Certificate', description: 'Filing stamped LLP agreement within 30 days of certificate issuance.' }
    ],
    faqs: [
      {
        question: 'Can an LLP raise venture capital investment from funds?',
        answer: 'Institutional VC and angel funds generally prefer Private Limited companies because LLPs do not issue shares or stock options (ESOPs). For VC funding, a Pvt Ltd structure is recommended.'
      }
    ]
  },
  {
    id: 'opc-registration',
    slug: 'opc-registration',
    category: 'Company Registration',
    title: 'One Person Company (OPC) Registration',
    shortDescription: 'Corporate status for solo entrepreneurs and single founders seeking 100% control with limited liability protection.',
    longDescription: 'An OPC allows an individual entrepreneur to operate a corporate entity with limited liability while retaining full managerial control. It eliminates the necessity of finding a dummy co-founder.',
    iconName: 'User',
    popular: true,
    whoNeedsIt: [
      'Solo founders, boutique software creators, and independent creators',
      'Individual business owners graduating from unregistered proprietorships',
      'Traders wanting corporate banking and vendor credibility under sole ownership'
    ],
    benefits: [
      'Single owner retains 100% equity and absolute decision-making power',
      'Corporate legal identity shielding personal savings and assets',
      'Seamless conversion to Private Limited company when onboarding investors',
      'Nominee director safeguards operational continuity in unexpected eventualities'
    ],
    applicability: [
      'Only natural person who is an Indian citizen can form an OPC',
      'Mandatory appointment of a Nominee Director',
      'Registered office in India'
    ],
    documents: [
      'PAN and Aadhaar of Founder and Nominee Director',
      'Identity proof and bank statements (< 2 months old) of both individuals',
      'Nominee consent letter in Form INC-3',
      'Registered office address proof and NOC'
    ],
    process: [
      { step: 1, title: 'Name Approval', description: 'Reserving name with "OPC Private Limited" suffix.' },
      { step: 2, title: 'SPICe+ Incorporation', description: 'Filing unified incorporation documents along with nominee consent.' },
      { step: 3, title: 'PAN, TAN & Bank Acc', description: 'Integrated statutory allocation upon approval.' },
      { step: 4, title: 'Certificate of Incorporation', description: 'Formal issuance by Ministry of Corporate Affairs.' }
    ],
    faqs: [
      {
        question: 'Can an OPC have employees and consultants?',
        answer: 'Yes. An OPC can hire employees, execute contracts, and retain consultants just like any other company.'
      }
    ]
  },
  {
    id: 'partnership-firm',
    slug: 'partnership-firm',
    category: 'Company Registration',
    title: 'Partnership Firm Registration',
    shortDescription: 'Traditional, straightforward business vehicle governed by the Indian Partnership Act, 1932 with minimal regulatory filings.',
    longDescription: 'A partnership firm is an association of two or more individuals who have agreed to share profits of a business. We assist with drafting structured partnership deeds and registration with the Registrar of Firms (RoF).',
    iconName: 'Handshake',
    whoNeedsIt: [
      'Retail shops, traditional merchants, and family business collaborations',
      'Joint ventures with limited regulatory formalities and mutual trust',
      'Short-term commercial associations and localized trade partnerships'
    ],
    benefits: [
      'Simple setup with minimal statutory filings compared to companies',
      'Clear definition of capital, profit share, and management duties in the Deed',
      'No annual ROC filings required under company law',
      'Flexible dissolution terms mutually decided by partners'
    ],
    applicability: [
      'Minimum two partners and maximum 50 partners',
      'Registration with local Registrar of Firms (RoF) for legal standing to enforce contractual rights'
    ],
    documents: [
      'Partnership Deed printed on requisite non-judicial stamp paper',
      'PAN, Aadhaar, and address proofs of all partners',
      'Principal place of business address proof and rent agreement',
      'Firm PAN application and RoF submission forms'
    ],
    process: [
      { step: 1, title: 'Deed Drafting Coordination', description: 'Customizing partnership deed terms, capital shares, and profit clauses.' },
      { step: 2, title: 'Stamp Duty & Notarization', description: 'Executing deed on state-specific stamp paper with notary attestation.' },
      { step: 3, title: 'PAN & Bank Setup', description: 'Applying for Firm PAN card and opening current bank account.' },
      { step: 4, title: 'RoF Registration', description: 'Submitting application to Registrar of Firms for formal registration certificate.' }
    ],
    faqs: [
      {
        question: 'Is it mandatory to register a partnership firm with the RoF?',
        answer: 'While unregistered partnerships can operate, registering with the Registrar of Firms (RoF) is strongly recommended as it grants the legal right to file lawsuits in court to enforce contractual claims.'
      }
    ]
  },
  {
    id: 'proprietorship-setup',
    slug: 'proprietorship-setup',
    category: 'Company Registration',
    title: 'Proprietorship Setup Assistance',
    shortDescription: 'The fastest, most cost-effective way for solo merchants and freelancers to establish commercial banking and legal recognition.',
    longDescription: 'A Sole Proprietorship is the simplest business structure in India. Since it is not a distinct legal entity from the owner, business recognition is established via government registrations such as Udyam MSME, GST, and Shop & Establishment licenses.',
    iconName: 'Briefcase',
    whoNeedsIt: [
      'Independent freelancers, local retail traders, and home-based entrepreneurs',
      'Service providers testing initial market traction with zero compliance overhead',
      'Solo traders needing an official business current account'
    ],
    benefits: [
      'Absolute control and 100% retention of business earnings',
      'Lowest setup cost and zero statutory corporate filings',
      'Taxed at individual slab rates without separate entity corporate tax',
      'Easily convertible to LLP or Private Limited company as business expands'
    ],
    applicability: [
      'Single individual owner with valid PAN card and Aadhaar',
      'Commercial current account requires two government registrations (e.g., Udyam + GST)'
    ],
    documents: [
      'Proprietor PAN card and Aadhaar card (linked with mobile)',
      'Business address proof (Electricity bill / Property tax receipt)',
      'Rent agreement and NOC from property owner (if rented)',
      'Bank statement or cancelled cheque of individual savings account'
    ],
    process: [
      { step: 1, title: 'Name & Trade Selection', description: 'Choosing suitable trading name not infringing registered trademarks.' },
      { step: 2, title: 'Udyam MSME Registration', description: 'Securing government recognition certificate under Ministry of MSME.' },
      { step: 3, title: 'GST Registration', description: 'Obtaining 15-digit GSTIN for taxation and interstate commerce.' },
      { step: 4, title: 'Bank Account Documentation', description: 'Assembling entity proofs for opening business current account.' }
    ],
    faqs: [
      {
        question: 'Can a proprietorship have a different brand name than my personal name?',
        answer: 'Yes. You can trade under a chosen business name (e.g., "Apex Logistics"), with accounts styled as "Your Name trading as Apex Logistics".'
      }
    ]
  },
  {
    id: 'section-8-company',
    slug: 'section-8-company',
    category: 'Company Registration',
    title: 'Section 8 Company Registration',
    shortDescription: 'The most credible corporate non-profit structure in India for charitable, educational, healthcare, and social welfare missions.',
    longDescription: 'A Section 8 company is incorporated under the Companies Act, 2013 for promoting commerce, art, science, education, charity, or environmental protection. Profits must be applied solely toward promoting its objectives, with no dividend payments to members.',
    iconName: 'HeartHandshake',
    whoNeedsIt: [
      'Social entrepreneurs running pan-India philanthropic or educational initiatives',
      'Organizations seeking corporate CSR (Corporate Social Responsibility) grants',
      'Foundations needing institutional governance and high donor credibility'
    ],
    benefits: [
      'High standing and credibility with international donors, CSR committees, and government',
      'No requirement of minimum paid-up capital and exempt from using "Limited" suffix',
      'Eligible to apply for 12A, 80G tax exemptions and CSR-1 registration',
      'Can own property in its corporate name with perpetual succession'
    ],
    applicability: [
      'Minimum two directors/members for private Section 8 company',
      'Detailed charitable/social charter and projected income statement',
      'Strict non-profit distribution covenant'
    ],
    documents: [
      'PAN, Aadhaar, and address proofs of all founding directors',
      'Registered office premises proof and landlord NOC',
      'Charter of charitable objectives, projected 3-year income & expenditure statement',
      'Digital Signature Certificates (Class 3)'
    ],
    process: [
      { step: 1, title: 'Name Approval & Charter', description: 'Filing proposed name with words like Foundation, Forum, Association.' },
      { step: 2, title: 'Section 8 License (INC-12)', description: 'Securing Central Government non-profit license approval from MCA.' },
      { step: 3, title: 'Incorporation Filing (SPICe+)', description: 'Submitting MOA & AOA formatted for non-profit governance.' },
      { step: 4, title: 'Certificate of Incorporation', description: 'Receiving corporate registration and CIN.' }
    ],
    faqs: [
      {
        question: 'Can Section 8 company directors draw a salary?',
        answer: 'Directors can receive reasonable remuneration for active administrative or executive services rendered, but no dividends or profit shares can be distributed.'
      }
    ]
  },
  {
    id: 'public-limited-company',
    slug: 'public-limited-company',
    category: 'Company Registration',
    title: 'Public Limited Company Registration',
    shortDescription: 'For large-scale commercial enterprises planning public capital raising, IPO listings, and widespread equity participation.',
    longDescription: 'A Public Limited Company is structured for large enterprises with substantial capital requirements. It offers freely transferable shares, statutory transparency, and the legal ability to invite the public to subscribe to securities.',
    iconName: 'Building2',
    whoNeedsIt: [
      'Enterprises preparing for future Initial Public Offering (IPO) listings',
      'Capital-intensive infrastructure, financial, or manufacturing conglomerates',
      'Companies needing unrestricted transferability of equity shares'
    ],
    benefits: [
      'Unrestricted ability to issue public equity and debentures',
      'Shares are freely transferable among public investors',
      'High institutional prestige and elevated borrowing capacities',
      'No ceiling on maximum number of shareholders'
    ],
    applicability: [
      'Minimum 3 directors and 7 shareholders',
      'Statutory compliance requirements higher than private limited entities'
    ],
    documents: [
      'KYC documents of all 3 directors and 7 founding shareholders',
      'Registered office address proofs and ownership clearances',
      'Detailed capital structure and operational charter'
    ],
    process: [
      { step: 1, title: 'Name Reservation', description: 'Reserving corporate name with "Limited" suffix.' },
      { step: 2, title: 'SPICe+ Incorporation', description: 'Submitting public company statutory charter and MOA/AOA.' },
      { step: 3, title: 'Certificate of Incorporation', description: 'Issuance of CIN and company incorporation certificate.' },
      { step: 4, title: 'Commencement of Business', description: 'Filing Form INC-20A before beginning commercial transactions.' }
    ],
    faqs: [
      {
        question: 'What is the minimum number of members needed for a public limited company?',
        answer: 'A minimum of 7 shareholders and 3 directors are mandatory to incorporate a public limited company.'
      }
    ]
  },
  {
    id: 'ngo-trust-registration',
    slug: 'ngo-trust-registration',
    category: 'Company Registration',
    title: 'NGO & Trust Registration Assistance',
    shortDescription: 'Guidance in establishing Public Charitable Trusts and Societies for localized community upliftment and cultural initiatives.',
    longDescription: 'Public Charitable Trusts and Societies are established under state-specific trust acts or the Societies Registration Act, 1860. We provide assistance in coordinating trust deed drafting, trustee documentation, and registration with the Sub-Registrar / Charity Commissioner.',
    iconName: 'Shield',
    whoNeedsIt: [
      'Community elders, social workers, and cultural associations managing community halls',
      'Educational institutions, temple trusts, and localized charitable dispensaries',
      'Resident welfare and cultural preservation societies'
    ],
    benefits: [
      'Legal recognition to receive charitable donations and hold immovable properties',
      'Perpetual succession managed by governing body of trustees',
      'Eligible for 12A & 80G tax registration and NGO Darpan listing'
    ],
    applicability: [
      'Minimum two trustees for a Public Trust; minimum 7 members for a Society',
      'Execution of Trust Deed before local Sub-Registrar'
    ],
    documents: [
      'Identity and address proofs of all founding trustees/governing members',
      'Trust Deed / Memorandum of Association and Rules & Regulations',
      'Registered office proof and utility clearance'
    ],
    process: [
      { step: 1, title: 'Deed Formulation', description: 'Drafting trust charter, settlor declarations, and trustee succession terms.' },
      { step: 2, title: 'Stamp Duty & Execution', description: 'Stamping on required stamp paper as per state trust schedule.' },
      { step: 3, title: 'Sub-Registrar Registration', description: 'Physical execution and registration before local sub-registrar.' },
      { step: 4, title: 'PAN & Trust Account', description: 'Securing Trust PAN and opening non-profit bank account.' }
    ],
    faqs: [
      {
        question: 'What is the main difference between a Trust and a Section 8 Company?',
        answer: 'A Section 8 company is governed centrally under the Companies Act with pan-India recognition and strict online MCA compliance, whereas a Trust is registered locally with the Sub-Registrar or Charity Commissioner under state trust laws.'
      }
    ]
  },

  // SECTION 6: CERTIFICATION SERVICES
  {
    id: 'startup-india-recognition',
    slug: 'startup-india-recognition',
    category: 'Certifications',
    title: 'Startup India / DPIIT Recognition Assistance',
    shortDescription: 'Unlock income tax holidays, angel tax exemptions, 80% patent fee rebates, and self-certification compliance with official DPIIT recognition.',
    longDescription: 'The Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT) empowers innovative Indian startups with tax holidays (Section 80-IAC), relaxed public procurement norms, faster patent examinations, and fund-of-funds access.',
    iconName: 'Sparkles',
    popular: true,
    whoNeedsIt: [
      'Innovative tech, biotech, SaaS, D2C, clean-energy, and deep-tech startups',
      'Companies incorporated within the last 10 years seeking Section 80-IAC tax holiday',
      'Startups seeking exemption from angel tax scrutiny on capital premiums',
      'Enterprises bidding for government tenders with exemption from prior experience & EMD'
    ],
    benefits: [
      'Eligible to apply for 3-year consecutive income tax exemption under Section 80-IAC',
      'Exemption from Angel Tax under Section 56(2)(viib) of the Income Tax Act',
      'Up to 80% rebate in patent filing fees and 50% rebate in trademark application fees',
      'Exemption from prior experience and turnover criteria in government tenders'
    ],
    applicability: [
      'Incorporated as a Private Limited Company, LLP, or Registered Partnership',
      'Incorporated within the last 10 years with turnover below ₹ 100 Crores',
      'Working towards innovation, development, or commercialization of new products/services'
    ],
    documents: [
      'Certificate of Incorporation / Registration of the entity',
      'Detailed pitch deck explaining problem statement, innovative solution, and scalability',
      'Website link or working prototype video demonstration',
      'Director / Partner details and registered office address'
    ],
    process: [
      { step: 1, title: 'Eligibility Audit', description: 'Evaluating product innovation, business model, and scalability criteria.' },
      { step: 2, title: 'Pitch Deck & Write-up', description: 'Synthesizing concise responses explaining uniqueness and employment potential.' },
      { step: 3, title: 'National Portal Submission', description: 'Submitting comprehensive dossier on official Startup India portal.' },
      { step: 4, title: 'DPIIT Certificate Issuance', description: 'Receiving recognition certificate with unique DIPP recognition number.' }
    ],
    faqs: [
      {
        question: 'Does DPIIT recognition automatically grant income tax exemption?',
        answer: 'No. DPIIT recognition is the foundational prerequisite. Once recognized, an eligible private limited company must separately apply to the Inter-Ministerial Board (IMB) for Section 80-IAC tax holiday approval.'
      }
    ]
  },
  {
    id: 'udyam-registration',
    slug: 'udyam-registration',
    category: 'Certifications',
    title: 'MSME / Udyam Registration',
    shortDescription: 'Mandatory government certificate for micro, small, and medium businesses to access priority bank lending, lower fees, and tender protections.',
    longDescription: 'Udyam Registration is the official digital identity issued by the Ministry of MSME, Government of India. It classifies enterprises based on investment in plant & machinery and annual turnover, unlocking statutory protections such as delayed payment interest under the MSMED Act.',
    iconName: 'Award',
    popular: true,
    whoNeedsIt: [
      'All micro, small, and medium manufacturers, traders, and service providers',
      'Proprietors, partnerships, LLPs, and companies seeking priority sector bank lending',
      'Suppliers seeking legal protection against delayed corporate buyer payments'
    ],
    benefits: [
      'Priority sector lending status from commercial banks with lower collateral norms',
      'Protection against delayed payments with mandatory compound interest under MSMED Act',
      '50% discount on government fees for trademark and patent applications',
      'Concession on electricity bills and waiver of Earnest Money Deposit (EMD) in tenders'
    ],
    applicability: [
      'Micro: Investment ≤ ₹ 1 Crore & Turnover ≤ ₹ 5 Crores',
      'Small: Investment ≤ ₹ 10 Crores & Turnover ≤ ₹ 50 Crores',
      'Medium: Investment ≤ ₹ 50 Crores & Turnover ≤ ₹ 250 Crores'
    ],
    documents: [
      'Aadhaar card of proprietor / partner / director (must be mobile-linked)',
      'PAN card of individual and entity (if registered company)',
      'GSTIN (if GST is registered or applicable)',
      'Business bank account number and IFSC code'
    ],
    process: [
      { step: 1, title: 'Data Collation', description: 'Compiling Aadhaar, PAN, and investment in plant/machinery details.' },
      { step: 2, title: 'NIC Code Classification', description: 'Mapping accurate National Industrial Classification (NIC) codes for all activities.' },
      { step: 3, title: 'Portal Submission', description: 'Submitting digital application with OTP verification on Udyam portal.' },
      { step: 4, title: 'Instant Udyam Certificate', description: 'Receiving permanent Udyam Registration Certificate with dynamic QR code.' }
    ],
    faqs: [
      {
        question: 'Is Udyam registration valid for a lifetime or does it expire?',
        answer: 'Udyam registration has permanent validity and does not require annual renewal. However, data is dynamically updated via linked Income Tax and GST returns.'
      }
    ]
  },
  {
    id: 'iso-certification',
    slug: 'iso-certification',
    category: 'Certifications',
    title: 'ISO Certification Assistance',
    shortDescription: 'Guidance and audit coordination for internationally recognized standards including ISO 9001 (QMS), ISO 14001, ISO 27001, and ISO 45001.',
    longDescription: 'ISO certification validates that your organizational processes, quality management, data security, and environmental systems adhere to international benchmarks. Registify Services coordinates documentation, internal process audits, and accredited certification bodies.',
    iconName: 'CheckCircle',
    popular: true,
    whoNeedsIt: [
      'Manufacturing companies bidding for enterprise and international supply contracts',
      'IT, cloud, and SaaS companies requiring ISO 27001 (Information Security)',
      'Hospitals, food processors, and service providers demonstrating operational excellence',
      'Businesses participating in public procurement and government e-Marketplace (GeM)'
    ],
    benefits: [
      'Globally accepted credential that builds immense trust with corporate procurement teams',
      'Mandatory eligibility requirement for many domestic and international tenders',
      'Standardizes standard operating procedures (SOPs) and reduces defect rates',
      'Demonstrates commitment to information security, quality, and environmental care'
    ],
    applicability: [
      'Any operating enterprise with documented business workflows and customer delivery',
      'Available for ISO 9001, 14001, 27001, 45001, 22000'
    ],
    documents: [
      'Business registration certificate (GST, Incorporation, or Udyam)',
      'Organizational chart and process flow documentation',
      'Sample invoices, purchase orders, and customer delivery receipts',
      'Existing quality policy or standard operating procedures (SOPs)'
    ],
    process: [
      { step: 1, title: 'Gap Analysis', description: 'Evaluating existing operations against target ISO standard benchmarks.' },
      { step: 2, title: 'Documentation & Manuals', description: 'Assisting with Quality Manual, SOPs, and internal audit templates.' },
      { step: 3, title: 'External Audit Coordination', description: 'Arranging Stage 1 and Stage 2 audits with accredited certification bodies.' },
      { step: 4, title: 'Certification Issuance', description: 'Receiving accredited ISO Certificate valid for 3 years with annual surveillance.' }
    ],
    faqs: [
      {
        question: 'What is the difference between IAF and Non-IAF ISO certification?',
        answer: 'IAF (International Accreditation Forum) certifications are globally recognized and required for government tenders and overseas exports. Non-IAF certifications are typically used for local branding only.'
      }
    ]
  },
  {
    id: 'fssai-license',
    slug: 'fssai-license',
    category: 'Certifications',
    title: 'FSSAI Registration & Licensing',
    shortDescription: 'Mandatory Food Safety & Standards Authority of India licensing for restaurants, food manufacturers, cloud kitchens, and traders.',
    longDescription: 'Under the Food Safety and Standards Act, 2006, every food business operator (FBO) in India must obtain an FSSAI registration or license before commencing operations. We assist food manufacturers, cloud kitchens, retail food stores, and e-commerce food vendors with compliant licensing.',
    iconName: 'Coffee',
    whoNeedsIt: [
      'Restaurants, cafes, bakeries, cloud kitchens, and catering units',
      'Packaged food and beverage manufacturers, repacking units, and millers',
      'Food distributors, cold storage operators, and retail grocery stores',
      'Online food delivery merchants and e-commerce grocery sellers'
    ],
    benefits: [
      'Mandatory 14-digit FSSAI license number printed on all packaged food labels',
      'Protects your business from severe statutory penalties and closure notices',
      'Essential for onboarding on food delivery aggregators like Zomato and Swiggy',
      'Instills food safety and hygienic quality confidence in consumers'
    ],
    applicability: [
      'Basic Registration: Annual turnover up to ₹ 12 Lakhs',
      'State License: Annual turnover between ₹ 12 Lakhs and ₹ 20 Crores',
      'Central License: Annual turnover exceeding ₹ 20 Crores or operating in multiple states'
    ],
    documents: [
      'Identity and address proof of the Food Business Operator (FBO)',
      'Business premises proof (Electricity bill, Rent agreement, NOC)',
      'Food safety management system plan or declaration',
      'List of food product categories to be manufactured or sold',
      'Kitchen/plant layout blueprint and machinery list (for manufacturing licenses)'
    ],
    process: [
      { step: 1, title: 'License Tier Identification', description: 'Determining Basic Registration vs State or Central License based on turnover.' },
      { step: 2, title: 'FoSCoS Portal Collation', description: 'Compiling product list, food safety declarations, and premise blueprints.' },
      { step: 3, title: 'Application Submission', description: 'Submitting Form A or Form B on the official FoSCoS portal.' },
      { step: 4, title: 'Inspection & Issuance', description: 'Coordinating regulatory queries, food safety inspection, and license grant.' }
    ],
    faqs: [
      {
        question: 'Can I sell home-cooked food on Swiggy without FSSAI?',
        answer: 'No. Aggregators strictly require a valid 14-digit FSSAI registration number before onboarding any food merchant.'
      }
    ]
  },
  {
    id: 'iec-registration',
    slug: 'iec-registration',
    category: 'Certifications',
    title: 'Import Export Code (IEC)',
    shortDescription: 'Mandatory 10-digit business identification number issued by the DGFT for importing or exporting goods and services from India.',
    longDescription: 'The Import Export Code (IEC) is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. Without an active IEC, customs authorities will not clear international shipments, and banks cannot process international inward or outward commercial remittances.',
    iconName: 'Globe',
    whoNeedsIt: [
      'Manufacturers and merchants exporting products to international markets',
      'Importers bringing raw materials, machinery, or consumer goods into India',
      'Software and professional service providers receiving cross-border foreign remittances',
      'E-commerce merchants selling through Amazon Global Selling and cross-border platforms'
    ],
    benefits: [
      'Mandatory legal clearance for cross-border customs import and export shipments',
      'Enables business bank accounts to process foreign inward commercial wire remittances',
      'Permanent lifetime validity without recurring renewal fees (annual digital update only)',
      'Prerequisite for claiming export duty drawbacks, RoDTEP, and EPCG schemes'
    ],
    applicability: [
      'Any business entity (proprietorship, partnership, LLP, company) with a valid PAN',
      'Must have an operative business current account'
    ],
    documents: [
      'Entity PAN card and business registration certificate',
      'Cancelled cheque or bank certificate of the active business current account',
      'Proof of business premises (Electricity bill / Rent agreement)',
      'Aadhaar / Passport copy of proprietor, partners, or directors'
    ],
    process: [
      { step: 1, title: 'Profile Setup', description: 'Linking entity PAN on the DGFT digital platform.' },
      { step: 2, title: 'Bank Verification (PFMS)', description: 'Validating bank account and IFSC code electronically with RBI/PFMS.' },
      { step: 3, title: 'Application Submission', description: 'Submitting Form ANF-2A with digital signature or Aadhaar OTP.' },
      { step: 4, title: 'Instant IEC Issuance', description: 'Receiving electronic IEC certificate containing unique 10-digit alphanumeric code.' }
    ],
    faqs: [
      {
        question: 'Do software service exporters also require an Import Export Code?',
        answer: 'Yes. The Reserve Bank of India (RBI) mandates an IEC for all service exporters seeking to regularize foreign exchange remittances through electronic bank realization certificates (e-BRC).'
      }
    ]
  },
  {
    id: 'trademark-registration',
    slug: 'trademark-registration',
    category: 'Certifications',
    title: 'Trademark Registration Assistance',
    shortDescription: 'Protect your brand name, logo, slogan, and intellectual property from copycats and unauthorized commercial infringement.',
    longDescription: 'A trademark is your brand’s most valuable intellectual property asset. Registify Services assists with preliminary trademark availability searches, class classification under the NICE system, application drafting, and coordinating with qualified trademark attorneys.',
    iconName: 'ShieldAlert',
    popular: true,
    whoNeedsIt: [
      'Startups building brand equity around unique brand names and logos',
      'D2C brands and manufacturers selling on Amazon, Flipkart, and retail channels',
      'Enterprises protecting brand reputation from counterfeit products and imitators',
      'Businesses requiring Amazon Brand Registry protection'
    ],
    benefits: [
      'Exclusive nationwide legal right to use the brand name across designated classes',
      'Immediate legal right to use the ™ symbol upon application filing',
      'Authorized use of the coveted ® registered symbol once officially granted',
      'Valid for 10 years and perpetually renewable; legal deterrence against copycats'
    ],
    applicability: [
      'Individual, startup, small enterprise, or corporate entity',
      'Over 45 trademark classes covering goods (Classes 1-34) and services (Classes 35-45)'
    ],
    documents: [
      'High-resolution copy of proposed brand logo or word mark',
      'Applicant identity and address proof (PAN, Aadhaar, Incorporation)',
      'Udyam Registration certificate (for 50% government fee concession)',
      'User affidavit and documentary proof of earliest brand use (if claiming prior use)'
    ],
    process: [
      { step: 1, title: 'Comprehensive IP Search', description: 'Conducting thorough phonetic and visual search on IP India registry.' },
      { step: 2, title: 'Class Classification', description: 'Identifying appropriate goods/service classes matching business scope.' },
      { step: 3, title: 'Application Filing (Form TM-A)', description: 'Submitting digital application to Trademark Registry.' },
      { step: 4, title: 'Examination & Hearing', description: 'Monitoring examination reports and coordinating advocate response if contested.' }
    ],
    faqs: [
      {
        question: 'When can I start using the ™ and ® symbols?',
        answer: 'You can begin using the ™ symbol immediately upon receiving the official trademark application acknowledgment. The ® symbol can be used only after the trademark is formally registered and the certificate is issued.'
      }
    ],
    requiresLegalAdvocate: true
  },
  {
    id: 'gem-registration',
    slug: 'gem-registration',
    category: 'Certifications',
    title: 'GeM Seller Registration',
    shortDescription: 'Get listed on the Government e-Marketplace (GeM) to sell products and services directly to public sector departments and ministries.',
    longDescription: 'The Government e-Marketplace (GeM) is the mandatory procurement portal for all Central and State Government departments, PSUs, and defense organizations. We help businesses complete primary seller verification, OEM dashboard creation, and product catalog listing.',
    iconName: 'ShoppingBag',
    whoNeedsIt: [
      'Manufacturers and distributors wanting access to multi-crore government procurement',
      'Service providers (facility management, IT services, transport, catering)',
      'MSME sellers leveraging statutory public procurement reservations'
    ],
    benefits: [
      'Direct access to thousands of government buyers without traditional physical tenders',
      'Automated digital invoice generation and timely milestone payment guidelines',
      'Special 25% mandatory purchase preference for verified MSME vendors',
      'Transparent online bidding and reverse auction mechanisms'
    ],
    applicability: [
      'Valid business entity with PAN, GSTIN, and active bank account',
      'Brand authorization or trademark certificate (for OEM panel registration)'
    ],
    documents: [
      'Aadhaar of authorized signatory linked to active mobile',
      'Company PAN, GSTIN, and active bank account details with cancelled cheque',
      'Past 3 years ITR acknowledgement numbers and turnover details',
      'Trademark certificate or brand authorization letter (for OEM status)'
    ],
    process: [
      { step: 1, title: 'Primary Seller Profile', description: 'Aadhaar OTP verification and authorized signatory onboarding.' },
      { step: 2, title: 'Tax & Bank Verification', description: 'Syncing PAN, GST, and MCA records with GeM database.' },
      { step: 3, title: 'Caution Money Deposit', description: 'Assisting with requisite state GeM caution money deposit account.' },
      { step: 4, title: 'Catalog & OEM Pairing', description: 'Uploading compliant product catalogs and obtaining brand approvals.' }
    ],
    faqs: [
      {
        question: 'What is Caution Money on GeM?',
        answer: 'GeM mandates a refundable caution money deposit (typically ₹ 5,000 to ₹ 25,000 based on turnover) in an interest-bearing escrow account to ensure seller order fulfillment integrity.'
      }
    ]
  },

  // SECTION 7: GST, TAXATION & ACCOUNTING
  {
    id: 'gst-services',
    slug: 'gst-services',
    category: 'GST Services',
    title: 'GST Registration & Return Filing Services',
    shortDescription: 'End-to-end Goods and Services Tax assistance: new registration, monthly/quarterly filings (GSTR-1, GSTR-3B), amendments, and reconciliation.',
    longDescription: 'GST compliance requires meticulous data management. Registify Services assists with new GST registrations, monthly/quarterly return filings, Input Tax Credit (ITC) reconciliation, amendments, cancellation, and revocation of canceled registrations.',
    iconName: 'Receipt',
    popular: true,
    whoNeedsIt: [
      'Businesses crossing statutory aggregate turnover limits (₹ 40L for goods, ₹ 20L for services)',
      'Inter-state traders and e-commerce sellers requiring mandatory registration',
      'Enterprises needing accurate GSTR-2B reconciliation to maximize legitimate ITC claims',
      'Firms facing department notices, blocked Input Tax Credit, or canceled GST numbers'
    ],
    benefits: [
      'Timely return filing avoids severe daily late fees and interest penalties',
      'Thorough GSTR-2B reconciliation prevents loss of eligible Input Tax Credit',
      'Maintains pristine GST compliance score with corporate enterprise clients',
      'Seamless generation of electronic invoices (E-Invoicing) and E-Way Bills'
    ],
    applicability: [
      'Mandatory for all inter-state suppliers and e-commerce vendors regardless of turnover',
      'Mandatory once aggregate turnover exceeds ₹ 40 Lakhs (₹ 20 Lakhs for special category states)'
    ],
    documents: [
      'PAN card and Aadhaar card of business owner, partners, or directors',
      'Business registration certificate or partnership deed',
      'Proof of business place (Electricity bill, property tax receipt, Rent agreement + NOC)',
      'Bank statement or cancelled cheque showing account holder name, IFSC, and account number'
    ],
    process: [
      { step: 1, title: 'Application Dossier (REG-01)', description: 'Preparing biometric-compliant digital application with verified HSN/SAC codes.' },
      { step: 2, title: 'Aadhaar Biometric Authentication', description: 'Completing OTP authentication or coordinating Seva Kendra biometric verification.' },
      { step: 3, title: 'Officer Query Resolution', description: 'Drafting prompt clarifications if clarifications (Form REG-03) are raised.' },
      { step: 4, title: 'GSTIN Issuance & Monthly Cycles', description: 'Receiving 15-digit GSTIN and establishing monthly GSTR-1 & 3B filing calendar.' }
    ],
    faqs: [
      {
        question: 'Can I do business without a GST number?',
        answer: 'Intra-state businesses with turnover strictly below the threshold (₹ 40 Lakhs for goods / ₹ 20 Lakhs for services) may operate without GST, provided they do not conduct inter-state sales or sell via e-commerce marketplaces.'
      }
    ],
    requiresCA: true
  },
  {
    id: 'taxation-accounting',
    slug: 'taxation-accounting',
    category: 'Taxation & Accounting',
    title: 'Taxation, Bookkeeping & CMA Data Preparation',
    shortDescription: 'Organized accounting, individual & business ITR filing, Tax Notice documentation assistance, and bank-compliant CMA data reports.',
    longDescription: 'Maintaining structured accounting records and compliant tax filings is crucial for business sustainability and loan approvals. Registify Services coordinates bookkeeping, financial statement synthesis (P&L and Balance Sheet), Income Tax Returns, and bank-standard CMA data with experienced Chartered Accountants.',
    iconName: 'Calculator',
    popular: true,
    whoNeedsIt: [
      'Enterprises seeking bank loan sanctions requiring 3-5 year CMA projection reports',
      'Proprietors, LLPs, and companies needing clean monthly bookkeeping and bank reconciliation',
      'Salaried and business taxpayers requiring accurate ITR-1 to ITR-6 filing',
      'Businesses responding to income tax assessment intimations or 148 notices'
    ],
    benefits: [
      'Structured financial statements prepared according to applicable Accounting Standards',
      'CMA data aligned with banking norms enhances bank loan sanction probabilities',
      'Zero penalty risk from delayed ITR filings, advance tax miscalculations, or TDS defaults',
      'Clear visibility into monthly profitability, gross margins, and operational burn'
    ],
    applicability: [
      'All commercial entities, self-employed professionals, and high net-worth individuals',
      'Services involving statutory tax audits and certifications are coordinated with certified CAs'
    ],
    documents: [
      'Bank statements of all operative accounts for the financial year',
      'Sales and purchase registers with vendor GST numbers',
      'Expense vouchers, depreciation registers, and payroll summaries',
      'Previous year ITR-V acknowledgements and audited financial reports'
    ],
    process: [
      { step: 1, title: 'Document & Ledger Collation', description: 'Collecting monthly bank statements, bills, invoices, and expense receipts.' },
      { step: 2, title: 'Ledger Posting & Reconciliation', description: 'Reconciling bank entries, debtor-creditor accounts, and TDS statements (Form 26AS/AIS).' },
      { step: 3, title: 'Draft Financials / CMA Synthesis', description: 'Generating Balance Sheet, Profit & Loss account, and multi-year CMA projections.' },
      { step: 4, title: 'Review & Final CA Coordination', description: 'Reviewing tax liability and executing final tax return submission.' }
    ],
    faqs: [
      {
        question: 'What is a CMA Report and why do banks demand it?',
        answer: 'Credit Monitoring Arrangement (CMA) report is a standardized financial model required by banks. It analyzes past performance and 2-5 year projections to evaluate a company’s working capital health and debt repayment capacity.'
      }
    ],
    requiresCA: true
  },

  // SECTION 8: COMPANY COMPLIANCE SERVICES
  {
    id: 'roc-compliance',
    slug: 'roc-compliance',
    category: 'Compliance',
    title: 'Annual ROC & Company Compliance Services',
    shortDescription: 'Maintain good corporate standing with mandatory annual filings (AOC-4, MGT-7, Form 11, Form 8), Director KYC, and secretarial changes.',
    longDescription: 'Company compliance is an ongoing legal mandate. Failing to file annual returns with the Registrar of Companies (ROC) attracts severe daily penalties of ₹ 100/day per form, director disqualification, and entity strike-off. Registify Services manages your annual compliance calendar systematically.',
    iconName: 'ClipboardCheck',
    popular: true,
    whoNeedsIt: [
      'All incorporated Private Limited, OPC, Section 8, and Public Limited companies',
      'Limited Liability Partnerships (LLP) requiring Form 11 & Form 8 annual filings',
      'Companies undergoing director appointment/resignation or registered office relocation',
      'Directors needing mandatory annual DIR-3 KYC authentication to prevent DIN deactivation'
    ],
    benefits: [
      'Prevents director DIN deactivation and disqualification under Section 164(2)',
      'Avoids steep statutory late penalties (₹ 100 per day per form with no upper cap)',
      'Ensures clean MCA master data status, essential for bank loan sanctions and vendor due diligence',
      'Systematic recording of board meetings, minutes, and statutory registers'
    ],
    applicability: [
      'Mandatory for every active company and LLP registered in India',
      'Requires coordination with practicing Company Secretaries (CS) and Chartered Accountants (CA)'
    ],
    documents: [
      'Audited financial statements (Balance Sheet, P&L, Notes to Accounts)',
      'Auditor’s Report and Director’s Board Report',
      'Notice of Annual General Meeting (AGM) and member attendance register',
      'Active Class 3 Digital Signature Certificate (DSC) of at least one director'
    ],
    process: [
      { step: 1, title: 'Secretarial Audit', description: 'Reviewing corporate records, shareholding changes, and prior filing receipts.' },
      { step: 2, title: 'Drafting Board Resolutions', description: 'Assisting with notice, director report, and AGM minutes documentation.' },
      { step: 3, title: 'Form Compilation (AOC-4 & MGT-7)', description: 'Synthesizing XBRL / non-XBRL attachments and digital certifications.' },
      { step: 4, title: 'MCA V3 Submission', description: 'Submitting statutory forms on MCA portal and generating official Challan SRN.' }
    ],
    faqs: [
      {
        question: 'What happens if a company does not file annual returns for two consecutive years?',
        answer: 'The ROC may initiate strike-off proceedings against the company, freeze entity bank accounts, and disqualify all company directors from holding directorships across any Indian company for 5 years.'
      }
    ]
  },

  // SECTION 9: BUSINESS DOCUMENTATION SERVICES
  {
    id: 'documentation-agreements',
    slug: 'documentation-agreements',
    category: 'Business Documentation',
    title: 'Business Documentation & Agreement Coordination',
    shortDescription: 'Professional drafting coordination for Partnership Deeds, NDAs, Service Agreements, Detailed Project Reports (DPR), and Pitch Decks.',
    longDescription: 'Clear, well-structured business documentation protects your commercial interests, prevents shareholder disputes, and inspires investor confidence. Registify Services assists with coordinating business agreements, Non-Disclosure Agreements (NDAs), DPRs, and investor pitch decks.',
    iconName: 'FileText',
    whoNeedsIt: [
      'Startups onboarding employees, co-founders, advisors, or external agencies',
      'Enterprises executing B2B vendor supply contracts and service level agreements (SLAs)',
      'Founders presenting proposals to angel investors or commercial loan syndicates',
      'Firms seeking structured Detailed Project Reports (DPR) for plant expansions'
    ],
    benefits: [
      'Reduces operational ambiguity and mitigates potential commercial disputes',
      'Safeguards proprietary technology, customer lists, and trade secrets with enforceable NDAs',
      'Presents comprehensive capital expenditure and feasibility data to financial lenders',
      'Professional formatting aligns with industry best practices'
    ],
    applicability: [
      'All commercial entities, joint ventures, founders, and growing enterprises',
      'Important: Legal documents requiring formal legal advice or court representation are handled by appropriately qualified independent advocates.'
    ],
    documents: [
      'Commercial terms sheet or memorandum of key deliverables',
      'Party details, corporate registration proofs, and designated signatory information',
      'Scope of work, milestone timelines, payment terms, and confidentiality terms'
    ],
    process: [
      { step: 1, title: 'Requirement Scope', description: 'Documenting commercial objectives, deliverables, and risk points.' },
      { step: 2, title: 'Draft Synthesis', description: 'Synthesizing comprehensive, customized agreement clauses.' },
      { step: 3, title: 'Review & Refinement', description: 'Iterative refinement based on stakeholder commercial review.' },
      { step: 4, title: 'Execution Guidance', description: 'Advising on requisite e-stamping, notarization, and digital execution norms.' }
    ],
    faqs: [
      {
        question: 'Does Registify Services act as my legal advocate in court?',
        answer: 'No. Registify Services is a business consultancy and loan facilitation firm. We do not provide court litigation or legal advocate representation. Legal drafting requiring specific legal advice is coordinated with independent qualified legal professionals.'
      }
    ],
    requiresLegalAdvocate: true
  }
];

export const getBusinessServiceBySlug = (slug: string): BusinessServiceItem | undefined => {
  return BUSINESS_SERVICES.find(srv => srv.slug === slug);
};

export const getServicesByCategory = (category: string): BusinessServiceItem[] => {
  return BUSINESS_SERVICES.filter(srv => srv.category === category);
};
