import { LoanServiceItem } from '../types';

export const LOAN_SERVICES: LoanServiceItem[] = [
  {
    id: 'business-loan',
    slug: 'business-loan',
    title: 'Business Loan',
    shortDescription: 'Unsecured and structured financing to help enterprises scale operations, invest in inventory, or manage expansion opportunities.',
    longDescription: 'Our business loan facilitation service assists established enterprises, traders, manufacturers, and service firms in evaluating viable loan structures from partner banks and NBFCs. We guide you through document preparation, financial assessment, and lender communication.',
    iconName: 'Briefcase',
    popular: true,
    idealFor: [
      'Enterprises with minimum 2-3 years operational track record',
      'Manufacturing units and trading companies managing inventory surges',
      'Service firms expanding workforce or opening new branch offices',
      'Business owners seeking collateral-free growth capital'
    ],
    features: [
      'Facilitation of loan amounts tailored to business capacity',
      'Guidance on evaluating competitive lending options',
      'Structured application review before lender submission',
      'Transparent advisory on processing timelines and lender fees'
    ],
    eligibility: [
      'Business operational stability (usually 2+ years)',
      'Healthy banking transactions and positive cash flow',
      'Satisfactory commercial and promoter credit profile',
      'GST returns and audited/CA-certified financial records'
    ],
    documents: [
      'Promoter KYC (PAN, Aadhaar, Passport / Voter ID)',
      'Entity Registration Proof (Certificate of Incorporation, GST, Partnership Deed)',
      'Past 12 months comprehensive bank account statements',
      'Past 2 to 3 years Income Tax Returns with Computation & Balance Sheets',
      'Existing loan repayment schedules and sanction letters (if any)'
    ],
    process: [
      { step: 1, title: 'Requirement Assessment', description: 'We evaluate your capital needs, turnover, and banking profile.' },
      { step: 2, title: 'Document Collation', description: 'Assisting in assembling an accurate, lender-ready documentation dossier.' },
      { step: 3, title: 'Institution Coordination', description: 'Submitting applications to eligible commercial banks or registered NBFCs.' },
      { step: 4, title: 'Sanction & Disbursement', description: 'Guiding through sanction letter review, documentation, and disbursement.' }
    ],
    faqs: [
      {
        question: 'Do you guarantee loan sanction or interest rates?',
        answer: 'No. As an independent consultancy, Registify Services coordinates with eligible banks and NBFCs. Final sanction, credit evaluation, and interest rates are solely determined by the lending institution based on their underwriting policy.'
      },
      {
        question: 'Can new startups with zero turnover get a business loan?',
        answer: 'Unsecured commercial business loans typically require operational track record and visible turnover. For early-stage ventures, secured options (such as Loan Against Property) or equity financing are generally more applicable.'
      },
      {
        question: 'Do you offer government subsidized loans or PMEGP consultancy?',
        answer: 'No. Registify Services strictly does not provide government loan schemes, government subsidies, or government grant consultancy. We focus on commercial bank and NBFC financing products.'
      }
    ]
  },
  {
    id: 'personal-loan',
    slug: 'personal-loan',
    title: 'Personal Loan',
    shortDescription: 'Flexible financing assistance for salaried professionals and eligible self-employed applicants for personal, travel, medical or family milestones.',
    longDescription: 'Navigate the personal loan landscape with structured guidance. We assist salaried and self-employed professionals in evaluating personal financing options across leading institutional lenders based on net income and credit profile.',
    iconName: 'UserCheck',
    popular: true,
    idealFor: [
      'Salaried corporate, MNC, and government employees',
      'Practicing professionals (doctors, CAs, architects, consultants)',
      'Individuals needing immediate funds for medical or family requirements',
      'Eligible applicants seeking to consolidate multi-card debt'
    ],
    features: [
      'No physical collateral or asset pledge required',
      'Guidance on selecting flexible tenures from 1 to 5 years',
      'Comprehensive eligibility assessment before credit pull',
      'Assistance with online documentation and KYC verification'
    ],
    eligibility: [
      'Age between 21 and 60 years',
      'Stable employment with verifiable net monthly salary',
      'Healthy individual credit history (CIBIL 700+ preferred)',
      'Active salary account in an authorized commercial bank'
    ],
    documents: [
      'Applicant PAN Card and Aadhaar Card',
      'Latest 3 to 6 months salary slips',
      'Past 6 months bank statement showing salary credits',
      'Current residence address proof and employee identity card'
    ],
    process: [
      { step: 1, title: 'Income & Credit Review', description: 'Understanding monthly in-hand income, expenses, and credit standing.' },
      { step: 2, title: 'Product Mapping', description: 'Identifying appropriate institutional lenders matching your profile.' },
      { step: 3, title: 'Application Coordination', description: 'Assisting with documentation and digital verification formalities.' },
      { step: 4, title: 'Disbursement', description: 'Facilitating agreement signing and direct disbursement to your account.' }
    ],
    faqs: [
      {
        question: 'What is the minimum salary required for personal loan assistance?',
        answer: 'Most lending partners require a minimum net monthly salary of ₹ 25,000 to ₹ 30,000, depending on the applicant city and employer tier.'
      },
      {
        question: 'Does applying through Registify affect my credit score?',
        answer: 'We review your profile internally first to identify suitable options. Official hard credit checks are performed only once you authorize an application submission to the chosen lending institution.'
      }
    ]
  },
  {
    id: 'msme-loan',
    slug: 'msme-loan',
    title: 'MSME Loan',
    shortDescription: 'Tailored institutional credit coordination for micro, small, and medium enterprises looking to purchase raw materials or expand capacities.',
    longDescription: 'MSMEs form the backbone of Indian industry. Registify Services helps registered MSME enterprises prepare structured financial dossiers, audit summaries, and banking proofs to explore credit facilities with institutional lenders.',
    iconName: 'Building2',
    popular: true,
    idealFor: [
      'Udyam-registered micro, small, and medium manufacturing units',
      'Service providers and wholesale distributors with valid MSME certificates',
      'Firms seeking working capital or machinery upgradation',
      'Enterprises needing structured balance sheet-backed funding'
    ],
    features: [
      'Guidance for both secured and unsecured MSME credit products',
      'Assessment of financial ratios (DSCR, Current Ratio, Net Worth)',
      'Support in preparing project reports and financial projections',
      'Pan-India institutional coordination'
    ],
    eligibility: [
      'Active Udyam Registration (MSME Certificate)',
      'Minimum 2 years of operational existence',
      'Regular GST filing history with consistent turnover',
      'Satisfactory promoter credit history'
    ],
    documents: [
      'Udyam MSME Registration Certificate',
      'Business KYC and constitutional documents (Pvt Ltd / LLP / Partnership)',
      'Last 3 years audited financials with Tax Audit reports',
      'Past 12 months active bank account statements',
      'GST returns (GSTR-3B & GSTR-1) for preceding 12 months'
    ],
    process: [
      { step: 1, title: 'Business Diagnostic', description: 'Reviewing MSME registration, business vintage, and financial statements.' },
      { step: 2, title: 'Dossier Formulation', description: 'Synthesizing CMA data and debt-servicing ratios required by lenders.' },
      { step: 3, title: 'Lender Matching', description: 'Engaging commercial banks and MSME-focused NBFCs.' },
      { step: 4, title: 'Facility Structuring', description: 'Reviewing sanction conditions and security documentation.' }
    ],
    faqs: [
      {
        question: 'Do you help obtain government subsidies under MSME schemes?',
        answer: 'No. Registify Services does NOT provide government subsidy consultancy or government grant applications. We solely facilitate commercial credit options from financial institutions.'
      }
    ]
  },
  {
    id: 'home-loan',
    slug: 'home-loan',
    title: 'Home Loan',
    shortDescription: 'Guidance and coordination for purchasing residential apartments, constructing independent houses, or plots with construction.',
    longDescription: 'Buying a home is one of the most significant financial steps in life. Registify Services assists individuals and co-applicants in understanding home loan eligibility, comparing lender terms, and organizing property documentation.',
    iconName: 'Home',
    popular: true,
    idealFor: [
      'Salaried and self-employed individuals buying ready-to-move homes',
      'Applicants purchasing under-construction apartments from RERA builders',
      'Individuals planning independent bungalow construction on owned land',
      'Existing borrowers seeking home loan balance transfers and top-ups'
    ],
    features: [
      'Long-term tenures extending up to 20 to 30 years as per lender policy',
      'Guidance on co-applicant structuring for enhanced eligibility',
      'Property legal and technical documentation guidance',
      'Assistance with balance transfer assessments'
    ],
    eligibility: [
      'Indian resident or NRI applicants aged 21 to 65 years',
      'Stable, verifiable regular income source',
      'CIBIL score preferably 750 or above',
      'Clear title and legally compliant residential property'
    ],
    documents: [
      'Identity and address proof of all applicants and co-applicants',
      'Income documentation (Salary slips + Form 16 / 3-year ITRs with computation)',
      'Last 6 months salary / operative bank statements',
      'Property title chain documents, allotment letter, builder buyer agreement'
    ],
    process: [
      { step: 1, title: 'Borrowing Capacity Check', description: 'Calculating FOIR (Fixed Obligation to Income Ratio) and budget.' },
      { step: 2, title: 'Legal & Tech Collation', description: 'Reviewing property paperwork readiness for bank valuation.' },
      { step: 3, title: 'Institutional Processing', description: 'Submitting files to suitable housing finance companies or banks.' },
      { step: 4, title: 'Sanction & Registration', description: 'Assisting through final sanction, MODT, and disbursement.' }
    ],
    faqs: [
      {
        question: 'Can I add a co-applicant to increase my loan eligibility?',
        answer: 'Yes. Adding a spouse, parent, or working sibling as a co-applicant allows lenders to club incomes, thereby expanding the sanctioned loan amount.'
      }
    ]
  },
  {
    id: 'loan-against-property',
    slug: 'loan-against-property',
    title: 'Loan Against Property (LAP)',
    shortDescription: 'Unlock substantial liquidity by pledging eligible residential or commercial real estate for major personal or corporate needs.',
    longDescription: 'Loan Against Property (LAP) offers secured financing by leveraging clear-title freehold residential, commercial, or industrial real estate. We assist in matching property valuations with lender loan-to-value (LTV) limits.',
    iconName: 'ShieldCheck',
    popular: true,
    idealFor: [
      'Business owners seeking substantial funds for long-term expansion',
      'Property owners looking for lower interest spreads compared to unsecured debt',
      'Applicants with high capital requirements and lengthy repayment horizons',
      'Debt restructuring and enterprise consolidation'
    ],
    features: [
      'High-value financing tailored to real estate valuation',
      'Extended repayment tenures up to 10 to 15 years',
      'Applicable on self-occupied or rented commercial and residential premises',
      'Lower interest rates compared to unsecured business loans'
    ],
    eligibility: [
      'Applicant must own marketable freehold property with clear title',
      'Approved building plan, municipal sanction, and occupation certificate',
      'Satisfactory debt servicing ability demonstrated through income/ITRs',
      'Clear legal title chain spanning 13 to 30 years'
    ],
    documents: [
      'KYC documents of all property co-owners and borrowers',
      'Property chain deeds, Sale Deed, Mother Deed, and approved plan',
      'Property tax receipts, possession letter, and Khata / Index II copy',
      'Past 3 years ITR with audited financials and 12-month bank statements'
    ],
    process: [
      { step: 1, title: 'Property Pre-Assessment', description: 'Evaluating ownership title, property type, and market value.' },
      { step: 2, title: 'Financial dossier', description: 'Structuring debt service metrics and cash flows.' },
      { step: 3, title: 'Legal & Technical Valuation', description: 'Coordinating lender-appointed legal search and physical valuation.' },
      { step: 4, title: 'Disbursement', description: 'Executing mortgage documentation and receiving funds.' }
    ],
    faqs: [
      {
        question: 'Can commercial or industrial properties be used for LAP?',
        answer: 'Yes, most institutional lenders accept commercial shops, offices, and select industrial premises, subject to legal title clarity and lender property guidelines.'
      }
    ]
  },
  {
    id: 'working-capital-loan',
    slug: 'working-capital-loan',
    title: 'Working Capital Loan',
    shortDescription: 'Tailored liquidity solutions to optimize day-to-day cash flows, bridge creditor-debtor cycles, and fund seasonal inventory.',
    longDescription: 'Healthy cash flow is vital for business continuity. Registify Services helps companies structure working capital financing, including term loans and revolving limits, by aligning financial projections with institutional underwriting criteria.',
    iconName: 'RefreshCw',
    idealFor: [
      'Wholesalers, retailers, and distributors with lengthy payment cycles',
      'Exporters and manufacturing firms needing raw material advance capital',
      'Service firms handling enterprise contracts with 60-90 day credit terms',
      'Seasonal enterprises needing peak operational inventory buildup'
    ],
    features: [
      'Revolving credit structures and short-to-medium term liquidity',
      'Interest payable specifically on utilized capital in limit facilities',
      'Enhancement guidance based on growing business turnover',
      'Coordination with leading commercial banking institutions'
    ],
    eligibility: [
      'Minimum 2 years of active business operations',
      'Audited balance sheets exhibiting positive net working capital',
      'Consistent bank throughput and compliance with statutory GST filings',
      'Satisfactory credit rating and clean banking conduct'
    ],
    documents: [
      'Entity constitutional papers and GST registration certificates',
      'Past 3 years audited balance sheets with schedules and Tax Audit report',
      'Provisional financials and CMA (Credit Monitoring Arrangement) report',
      'Last 12 months complete statement of all active current accounts',
      'Debtor-creditor ageing report and stock statement summary'
    ],
    process: [
      { step: 1, title: 'Operating Cycle Study', description: 'Mapping your debtor, creditor, and inventory turnover days.' },
      { step: 2, title: 'CMA Data Preparation', description: 'Synthesizing historical and projected working capital requirement statements.' },
      { step: 3, title: 'Banking Appraisal', description: 'Coordinating with credit appraisal teams at target financial institutions.' },
      { step: 4, title: 'Sanction & Limit Setup', description: 'Finalizing facility terms and establishing operational drawing power.' }
    ],
    faqs: [
      {
        question: 'What is the primary difference between a term loan and working capital limit?',
        answer: 'A term loan is disbursed in full and repaid via fixed monthly installments. A working capital limit (like CC/OD) is a revolving facility where interest is charged only on the funds actively drawn.'
      }
    ]
  },
  {
    id: 'machinery-loan',
    slug: 'machinery-loan',
    title: 'Machinery & Equipment Finance',
    shortDescription: 'Specialized financing for acquiring industrial machinery, medical apparatus, commercial technology, and plant equipment.',
    longDescription: 'Upgrading plant infrastructure requires capital-intensive asset acquisition. Registify Services assists manufacturing units, packaging plants, textile units, and healthcare providers in obtaining equipment loans by coordinating with equipment finance desks.',
    iconName: 'Cpu',
    idealFor: [
      'Engineering and manufacturing units setting up CNC/automation lines',
      'Textile and garment manufacturers expanding spindle or weaving capacity',
      'Diagnostic clinics and hospitals purchasing imaging or laboratory units',
      'Printing, packaging, and food processing facilities'
    ],
    features: [
      'Loan backed by hypothecation of the machinery being procured',
      'Tenures aligned with the depreciable economic life of the equipment',
      'Direct disbursement to verified original equipment manufacturers (OEMs)',
      'Guidance on structured moratorium periods during installation'
    ],
    eligibility: [
      'Existing business with demonstrated manufacturing / service capability',
      'Technical viability of the equipment being installed',
      'Satisfactory DSCR (Debt Service Coverage Ratio) to service repayments',
      'Promoter contribution towards the initial margin money (typically 15-25%)'
    ],
    documents: [
      'Performa invoice and technical quotation from approved machinery supplier',
      'Business incorporation proofs and regulatory licenses',
      'Audited financials for the past 2 to 3 financial years',
      'Past 12 months primary banking account statements',
      'Existing list of plant and machinery with present capacity utilization'
    ],
    process: [
      { step: 1, title: 'Equipment Review', description: 'Reviewing supplier quotation, project utility, and margin money.' },
      { step: 2, title: 'Credit Appraisal Dossier', description: 'Preparing payback calculation and operational capacity enhancement notes.' },
      { step: 3, title: 'Lender Engagement', description: 'Submitting to institutional equipment financing divisions.' },
      { step: 4, title: 'OEM Disbursement', description: 'Managing hypothecation agreement and direct OEM payout release.' }
    ],
    faqs: [
      {
        question: 'Can second-hand or imported refurbished machinery be financed?',
        answer: 'Certain institutional lenders finance imported or certified refurbished machinery, provided a chartered engineer valuation report and residual life certification are furnished.'
      }
    ]
  },
  {
    id: 'project-finance',
    slug: 'project-finance',
    title: 'Project Finance',
    shortDescription: 'Structured debt facilitation for greenfield infrastructure, new manufacturing units, industrial parks, and long-term project setup.',
    longDescription: 'Complex industrial and infrastructure projects require detailed techno-economic viability studies and multi-tier debt syndication. Registify Services coordinates documentation, detailed project reports (DPRs), and financial modeling for institutional appraisal.',
    iconName: 'TrendingUp',
    idealFor: [
      'Greenfield industrial factories and manufacturing facilities',
      'Warehousing complexes, logistics hubs, and cold storage parks',
      'Renewable energy projects, captive solar plants, and recycling facilities',
      'Hospitality, hospital, and educational campus developments'
    ],
    features: [
      'Structured long-term repayment schedules aligned with commercial operations',
      'Moratorium on principal repayment during project construction phase',
      'Assistance in Detailed Project Report (DPR) collation with technical team',
      'Coordination with public/private banks and specialized project lenders'
    ],
    eligibility: [
      'Sound promoter background and requisite equity contribution capability',
      'Techno-Economic Feasibility (TEV) validation of the proposed project',
      'Clear title of project land and statutory regulatory approvals in place',
      'Viable financial projections demonstrating healthy Internal Rate of Return (IRR)'
    ],
    documents: [
      'Detailed Project Report (DPR) with comprehensive capital expenditure breakup',
      'Land title documents, industrial zoning clearances, and building plans',
      'Statutory NOCs (Pollution Control, Fire, Factory Inspectorate, Power sanction)',
      'Promoter net worth statements and audited financials of parent entities',
      'Contracts, MoUs, or letters of intent (LOI) from prospective off-takers'
    ],
    process: [
      { step: 1, title: 'Feasibility Assessment', description: 'Validating debt-to-equity ratio, project cost, and commercial viability.' },
      { step: 2, title: 'DPR & Financial Model', description: 'Structuring multi-year cash flow projections and sensitivity analysis.' },
      { step: 3, title: 'Syndication / Appraisal', description: 'Presenting to corporate credit divisions of commercial banking partners.' },
      { step: 4, title: 'Sanction & Tranche Drawdown', description: 'Facilitating security creation, trust retention accounts, and milestone drawdowns.' }
    ],
    faqs: [
      {
        question: 'What is the minimum ticket size for project finance facilitation?',
        answer: 'Project finance typically applies to capital expenditures exceeding ₹ 2 to 5 Crores, where repayment is reliant primarily on the future operational cash flows of the project.'
      }
    ]
  },
  {
    id: 'commercial-vehicle-loan',
    slug: 'commercial-vehicle-loan',
    title: 'Commercial Vehicle Loan',
    shortDescription: 'Financing solutions for trucks, tippers, passenger buses, cargo vans, and transport fleet expansion.',
    longDescription: 'Logistics and transportation businesses require continuous vehicle acquisition. Registify Services assists fleet owners, transport contractors, and logistics companies in evaluating commercial vehicle finance options across institutional lenders.',
    iconName: 'Truck',
    idealFor: [
      'Logistics companies and transport contractors adding heavy commercial vehicles',
      'Bus operators handling staff transportation or intercity routes',
      'SMEs purchasing light commercial vehicles (LCVs) for city distribution',
      'First-time transport entrepreneurs expanding their vehicle ownership'
    ],
    features: [
      'Applicable on light, medium, and heavy commercial vehicles',
      'Competitive loan-to-value (LTV) options based on chassis and body cost',
      'Flexible tenures matching commercial vehicle earning cycle',
      'Guidance on fleet renewal and refinancing opportunities'
    ],
    eligibility: [
      'Valid driving license / transport operator registration',
      'Experience in transport or logistics industry (1-2 years preferred)',
      'Route permits, client transportation contracts, or steady haulage proof',
      'Satisfactory banking and repayment history'
    ],
    documents: [
      'Proforma invoice and dealer quotation from authorized automotive dealership',
      'Promoter KYC and commercial vehicle driving / operator credentials',
      'Last 6 to 12 months bank statements showing freight or transport earnings',
      'Existing fleet registration copies (RC books) and permit proofs'
    ],
    process: [
      { step: 1, title: 'Vehicle Quotation', description: 'Collecting dealer invoice and vehicle specifications.' },
      { step: 2, title: 'Profile Analysis', description: 'Assessing route contracts and repayment capabilities.' },
      { step: 3, title: 'Lender Matching', description: 'Engaging auto-finance divisions of banks and NBFCs.' },
      { step: 4, title: 'Delivery Order', description: 'Issuing loan delivery order to dealership upon agreement execution.' }
    ],
    faqs: [
      {
        question: 'Does the loan cover the body fabrication cost for trucks?',
        answer: 'Many institutional lenders provide composite financing covering both the chassis and certified body fabrication, subject to approved body-builder invoices.'
      }
    ]
  },
  {
    id: 'car-loan',
    slug: 'car-loan',
    title: 'Car Loan',
    shortDescription: 'Guidance in exploring vehicle financing options for purchasing brand-new or certified pre-owned passenger cars.',
    longDescription: 'Whether purchasing a personal car or an executive vehicle registered under a company name, Registify Services helps you compare financing terms across institutional lenders for seamless vehicle acquisition.',
    iconName: 'Car',
    idealFor: [
      'Salaried corporate employees purchasing personal vehicles',
      'Self-employed professionals seeking tax depreciation on business-owned cars',
      'Companies acquiring executive fleet vehicles for senior leadership',
      'Buyers looking for pre-owned certified car financing'
    ],
    features: [
      'Guidance on financing up to 85-90% of on-road vehicle value',
      'Tenures ranging from 1 to 7 years as per lender offerings',
      'Corporate car lease vs direct loan structuring evaluation',
      'Fast-track digital processing coordination'
    ],
    eligibility: [
      'Salaried or self-employed applicants with stable monthly income',
      'Minimum age 21 years up to retirement age',
      'CIBIL score preferably 700 or above',
      'Verified residential and employment stability'
    ],
    documents: [
      'Vehicle proforma invoice from authorized car showroom',
      'Identity and address verification proofs (PAN, Aadhaar, Passport)',
      'Last 3 months salary slips or 2 years business ITR computation',
      'Past 6 months active bank account statements'
    ],
    process: [
      { step: 1, title: 'Select Vehicle & Get Quote', description: 'Obtaining proforma invoice from authorized showroom.' },
      { step: 2, title: 'Eligibility Verification', description: 'Checking income documents and CIBIL score.' },
      { step: 3, title: 'Application & Sanction', description: 'Submitting file to institutional auto-finance partners.' },
      { step: 4, title: 'Delivery Order Issuance', description: 'Showroom delivery order issued upon loan agreement signing.' }
    ],
    faqs: [
      {
        question: 'Can I finance a used / pre-owned car?',
        answer: 'Yes, institutional lenders finance pre-owned cars up to a certain vehicle age, subject to independent valuation and RTO transfer verification.'
      }
    ]
  },
  {
    id: 'education-loan',
    slug: 'education-loan',
    title: 'Education Loan',
    shortDescription: 'Structured financing coordination for higher education, overseas university admissions, and specialized professional degrees.',
    longDescription: 'Pursuing world-class higher education in India or abroad requires comprehensive financial backing. Registify Services assists students and co-borrower parents in organizing academic records, university admissions, and institutional loan files.',
    iconName: 'GraduationCap',
    idealFor: [
      'Students admitted to overseas master’s, STEM, or MBA programs (US, UK, Canada, Europe)',
      'Meritorious candidates pursuing premier Indian institutions (IIMs, IITs, top medical colleges)',
      'Working professionals enrolling in executive education programs',
      'Applicants needing funds covering tuition, accommodation, and living costs'
    ],
    features: [
      'Moratorium periods extending through the course duration plus 6-12 months grace',
      'Guidance on both collateral-free (unsecured) and secured education credit options',
      'Financing covering 100% of tuition, airfare, health insurance, and living expenses',
      'Assistance with university financial sanction letter requirements for visa interviews'
    ],
    eligibility: [
      'Confirmed admission letter / I-20 / CAS from recognized university or college',
      'Strong academic pedigree (10th, 12th, graduation transcripts, GRE/GMAT/IELTS/TOEFL)',
      'Earning co-borrower (parent, spouse, or legal guardian) with stable income',
      'Sound CIBIL track record of co-applicant'
    ],
    documents: [
      'University admission letter and detailed official fee structure breakdown',
      'Academic transcripts, mark sheets, and standardized entrance exam scorecards',
      'Student and co-borrower KYC documents (Passport mandatory for overseas)',
      'Co-borrower income documents (3-year ITR, salary slips, 6 months bank statement)',
      'Property documents if applying for secured institutional education loans'
    ],
    process: [
      { step: 1, title: 'Admission & Cost Review', description: 'Calculating total course budget including living and travel expenses.' },
      { step: 2, title: 'Co-Applicant Assessment', description: 'Evaluating co-borrower income or property security to determine eligibility.' },
      { step: 3, title: 'Lender Processing', description: 'Submitting to specialized education finance institutions and banks.' },
      { step: 4, title: 'Visa Sanction Letter', description: 'Obtaining provisional sanction letter for visa interview and tranche release.' }
    ],
    faqs: [
      {
        question: 'Can I get an education loan without collateral for overseas studies?',
        answer: 'Yes, select institutional lenders offer unsecured education loans up to certain thresholds based on student academic merits, university ranking, and co-borrower income.'
      }
    ]
  },
  {
    id: 'lap-for-business',
    slug: 'lap-for-business',
    title: 'Loan Against Property for Business',
    shortDescription: 'Mortgage commercial or industrial premises to secure substantial long-term funding for factory expansion, technology, or refinancing.',
    longDescription: 'When businesses outgrow unsecured borrowing limits, property-backed business loans provide substantial capital with longer repayment tenures and lower interest spreads. We guide enterprises through property due diligence and institutional underwriting.',
    iconName: 'Landmark',
    idealFor: [
      'Manufacturing enterprises seeking long-term funding for new production units',
      'Trading firms requiring high-limit credit backed by commercial shops or warehouses',
      'Enterprises refinancing multiple high-cost short-term loans into a single low-rate facility',
      'Corporate entities expanding their commercial real estate footprint'
    ],
    features: [
      'High-ticket limits tailored to property value and business cash flows',
      'Flexible amortization schedules up to 10 to 15 years',
      'Option to structure as a term loan or an overdraft facility',
      'Acceptance of industrial land, factory sheds, and commercial office spaces'
    ],
    eligibility: [
      'Commercial, industrial, or residential property with clear, undisputed title',
      'Entity with minimum 3 years of audited operational financials',
      'Healthy debt-service ability reflected in cash flow statements',
      'Satisfactory corporate credit rating and clean promoter background'
    ],
    documents: [
      'Complete title deed chain, non-encumbrance certificate, and approved layout plan',
      'Constitutional documents of the business entity (MOA, AOA, LLP Agreement)',
      'Audited balance sheets, P&L, Tax Audit reports for the past 3 financial years',
      'Past 12 months operative bank statements for all business and promoter accounts',
      'Existing loan statement of accounts and sanction letters'
    ],
    process: [
      { step: 1, title: 'Collateral Valuation Review', description: 'Assessing property marketable value and encumbrance status.' },
      { step: 2, title: 'Cash Flow Appraisal', description: 'Harmonizing business earnings to prove debt-servicing capability.' },
      { step: 3, title: 'Lender Underwriting', description: 'Coordinating physical valuation, title search, and risk review.' },
      { step: 4, title: 'Mortgage & Sanction', description: 'Completing equitable/registered mortgage and disbursing loan funds.' }
    ],
    faqs: [
      {
        question: 'What percentage of property value is typically sanctioned?',
        answer: 'Institutional lenders typically sanction between 50% to 70% of the property’s market valuation (Loan-to-Value or LTV), depending on whether the property is residential or commercial.'
      }
    ]
  },
  {
    id: 'overdraft-cash-credit',
    slug: 'overdraft-cash-credit',
    title: 'Overdraft & Cash Credit (OD/CC)',
    shortDescription: 'Flexible revolving credit lines against business turnover, inventory, or fixed deposits to meet ongoing liquidity needs.',
    longDescription: 'An Overdraft or Cash Credit (OD/CC) facility gives your business immediate liquidity without locking you into fixed monthly EMI obligations. You withdraw as needed and pay interest strictly on the utilized amount.',
    iconName: 'CreditCard',
    idealFor: [
      'Businesses facing recurring gaps between billing and debtor collections',
      'Traders managing fluctuating inventory purchases across seasons',
      'Contractors executing large orders requiring advance working capital',
      'Companies holding commercial real estate or liquid fixed deposits'
    ],
    features: [
      'Pay interest only on the daily closing debit balance utilized',
      'Revolving limit that renews annually based on performance and turnover',
      'Immediate access to funds through net banking, cheques, and transfers',
      'Facility against stock, book debts, property, or fixed deposits'
    ],
    eligibility: [
      'Minimum 2 years of active business operations with healthy bank transactions',
      'Regular GST filing with verifiable turnover matching limit requests',
      'Audited financial statements demonstrating operational solvency',
      'Satisfactory stock turnover and collection ratios'
    ],
    documents: [
      'Business registration certificates (GST, PAN, Incorporation)',
      'Past 3 years audited financials with complete schedules',
      'Stock statement and monthly debtor-creditor statement',
      'Past 12 months comprehensive bank statement of all operative accounts',
      'Collateral documents if applying for secured Cash Credit'
    ],
    process: [
      { step: 1, title: 'Limit Assessment', description: 'Calculating required drawing power using Tandon/Chore committee norms.' },
      { step: 2, title: 'Financial Compilation', description: 'Organizing CMA data, projected turnover, and stock summaries.' },
      { step: 3, title: 'Bank Credit Appraisal', description: 'Presenting proposal to institutional SME banking divisions.' },
      { step: 4, title: 'Limit Activation', description: 'Setting up drawing power limit in your business current account.' }
    ],
    faqs: [
      {
        question: 'How is interest calculated on an OD or CC facility?',
        answer: 'Interest is calculated daily on the exact amount utilized from the sanctioned limit, not on the total limit. You only pay for what you draw.'
      }
    ]
  },
  {
    id: 'debt-consolidation',
    slug: 'debt-consolidation',
    title: 'Debt Consolidation',
    shortDescription: 'Restructure multiple high-interest debts, credit cards, or fragmented loans into a single structured, manageable repayment plan.',
    longDescription: 'Managing multiple fragmented loans with varying interest rates and due dates strains cash flows and risks missed payments. Registify Services assists individuals and business owners in exploring debt consolidation avenues through single lower-interest secured or unsecured facilities.',
    iconName: 'Layers',
    idealFor: [
      'Borrowers managing multiple personal loans and high-rate credit card balances',
      'Business owners with multiple short-term fintech loans burdening monthly cash flows',
      'Borrowers looking to lower overall monthly EMI outgo by extending repayment tenures',
      'Applicants seeking to streamline finances into a single monthly payment'
    ],
    features: [
      'Single consolidated monthly installment replacing multiple fragmented EMIs',
      'Potential reduction in total monthly EMI burden through tenure restructuring',
      'Protection of personal and commercial credit score from inadvertent defaults',
      'Clear roadmap towards debt freedom with structured amortization'
    ],
    eligibility: [
      'Verifiable continuous income from employment or business operations',
      'No active major default or settlement reported on credit bureau',
      'Total debt load within institutional debt-to-income servicing thresholds',
      'Available collateral or adequate income capacity for consolidated loan'
    ],
    documents: [
      'Sanction letters, latest statements, and repayment schedules of all existing loans',
      'Recent credit card statements showing current outstanding balances',
      'Applicant KYC (PAN, Aadhaar, address proofs)',
      'Income proofs (6 months salary slips / 3 years business ITRs and balance sheets)',
      'Past 12 months comprehensive bank account statements'
    ],
    process: [
      { step: 1, title: 'Debt Audit', description: 'Auditing all outstanding debts, interest rates, and monthly EMI commitments.' },
      { step: 2, title: 'Restructuring Strategy', description: 'Identifying single consolidation facility with optimal tenure and rate.' },
      { step: 3, title: 'Institutional Processing', description: 'Facilitating approval with a commercial bank or registered NBFC.' },
      { step: 4, title: 'Payoff & Closure', description: 'Direct settlement of existing fragmented loans and obtaining No Due Certificates (NDCs).' }
    ],
    faqs: [
      {
        question: 'Will consolidating my loans lower my overall monthly EMI?',
        answer: 'Typically yes, by extending the repayment period or moving from high-rate unsecured credit to a structured lower-rate facility, your monthly cash outgo is substantially reduced.'
      }
    ]
  }
];

export const getLoanBySlug = (slug: string): LoanServiceItem | undefined => {
  return LOAN_SERVICES.find(loan => loan.slug === slug);
};
