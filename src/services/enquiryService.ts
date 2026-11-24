import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { LoanEnquiry, BusinessEnquiry, ContactEnquiry, BaseEnquiry, EnquiryStatus } from '../types';
import { checkSubmissionRateLimit, recordSubmissionRateLimit, isBotDetected } from '../utils/security';

const STORAGE_KEY = 'registify_enquiries';

// Generates unique human-readable ID e.g., REG-LN-2026-4821 or REG-BZ-2026-9134
export const generateEnquiryId = (type: 'loan' | 'business' | 'contact'): string => {
  const prefix = type === 'loan' ? 'REG-LN' : type === 'business' ? 'REG-BZ' : 'REG-CT';
  const year = new Date().getFullYear();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${randomNum}`;
};

// Initial seed data for admin demonstration
const SEED_ENQUIRIES: (LoanEnquiry | BusinessEnquiry | ContactEnquiry)[] = [
  {
    id: 'seed-1',
    enquiry_id: 'REG-LN-2026-1042',
    type: 'loan',
    fullName: 'Rajesh V. Patel',
    mobile: '9825123456',
    email: 'rajesh.patel@pateltextiles.in',
    city: 'Ahmedabad',
    state: 'Gujarat',
    status: 'new',
    employmentType: 'Business Owner',
    loanCategory: 'Machinery & Equipment Finance',
    requiredAmount: '₹ 45,00,000',
    monthlyIncome: '₹ 3,50,000',
    existingObligations: 'Existing CC limit ₹ 15 Lakhs with SBI',
    additionalRequirements: 'Procuring high-speed weaving machinery for our plant in Naroda GIDC.',
    consent: true,
    sourcePage: '/loans/machinery-loan',
    notes: ['Customer requested call back after 4:00 PM.'],
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: 'seed-2',
    enquiry_id: 'REG-BZ-2026-8092',
    type: 'business',
    fullName: 'Ananya Sharma',
    mobile: '9871198765',
    email: 'ananya.s@technovaproducts.com',
    city: 'Surat',
    state: 'Gujarat',
    status: 'consultation_scheduled',
    businessName: 'TechNova IoT Solutions',
    businessType: 'Technology / Hardware',
    serviceCategory: 'Company Registration',
    specificService: 'Private Limited Company Registration',
    additionalInformation: 'Two directors, planning DPIIT Startup India recognition and trademark filing post-incorporation.',
    consent: true,
    assignedTo: 'Consultant Hemal Shah',
    followUpDate: '2026-11-18',
    sourcePage: '/business/company-registration',
    notes: ['Initial video consultation scheduled for Tuesday 11:30 AM.'],
    created_at: new Date(Date.now() - 3600000 * 20).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 18).toISOString(),
  },
  {
    id: 'seed-3',
    enquiry_id: 'REG-LN-2026-5519',
    type: 'loan',
    fullName: 'Dhaval Shah',
    mobile: '9724011223',
    email: 'dhaval.shah@gmail.com',
    city: 'Vadodara',
    state: 'Gujarat',
    status: 'documents_pending',
    employmentType: 'Self-employed',
    loanCategory: 'Loan Against Property',
    requiredAmount: '₹ 80,00,000',
    monthlyIncome: '₹ 1,80,000',
    existingObligations: 'Nil',
    additionalRequirements: 'Leveraging commercial showroom in Alkapuri for branch expansion.',
    consent: true,
    assignedTo: 'Loan Advisor Bhavik Desai',
    sourcePage: '/loans/loan-against-property',
    notes: ['Title deeds and 3-year ITR pending from applicant.'],
    created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 'seed-4',
    enquiry_id: 'REG-BZ-2026-3190',
    type: 'business',
    fullName: 'Maheshwari Exports LLP',
    mobile: '9909088776',
    email: 'contact@maheshwaritraders.in',
    city: 'Rajkot',
    state: 'Gujarat',
    status: 'in_process',
    businessName: 'Maheshwari Agro Products',
    businessType: 'Agricultural Commodity Export',
    serviceCategory: 'Certifications',
    specificService: 'Import Export Code (IEC) & APEDA Registration',
    additionalInformation: 'Exporting cumin seeds and groundnuts; needs APEDA RCMC registration.',
    consent: true,
    assignedTo: 'Compliance Specialist Ritu Trivedi',
    sourcePage: '/business/certifications',
    notes: ['IEC issued. APEDA application submitted to DGFT portal.'],
    created_at: new Date(Date.now() - 3600000 * 72).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: 'seed-5',
    enquiry_id: 'REG-LN-2026-9281',
    type: 'loan',
    fullName: 'Pooja Iyer',
    mobile: '9840134567',
    email: 'pooja.iyer.chennai@outlook.com',
    city: 'Bengaluru',
    state: 'Karnataka',
    status: 'contacted',
    employmentType: 'Salaried',
    loanCategory: 'Home Loan',
    requiredAmount: '₹ 65,00,000',
    monthlyIncome: '₹ 1,45,000',
    existingObligations: 'Car loan EMI ₹ 14,000/mo',
    additionalRequirements: 'Looking for balance transfer and top-up guidance.',
    consent: true,
    sourcePage: '/loans/home-loan',
    notes: ['Called on Monday; requested comparison of PSU vs Private bank rate spreads.'],
    created_at: new Date(Date.now() - 3600000 * 30).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 10).toISOString(),
  }
];

export const getStoredEnquiries = (): (LoanEnquiry | BusinessEnquiry | ContactEnquiry)[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
      return SEED_ENQUIRIES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading enquiries from localStorage', err);
    return SEED_ENQUIRIES;
  }
};

const saveStoredEnquiries = (enquiries: (LoanEnquiry | BusinessEnquiry | ContactEnquiry)[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
  } catch (err) {
    console.error('Error saving enquiries to localStorage', err);
  }
};

export const dispatchEmailToSales = async (payload: {
  enquiry_id: string;
  type: string;
  fullName: string;
  mobile: string;
  email?: string;
  city?: string;
  state?: string;
  serviceOrCategory?: string;
  details?: string;
  sourcePage?: string;
}) => {
  try {
    await fetch('https://formsubmit.co/ajax/sales@registifyservices.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Lead [${payload.enquiry_id}] - ${payload.fullName} (${payload.serviceOrCategory || payload.type})`,
        _template: 'table',
        _captcha: 'false',
        'Enquiry ID': payload.enquiry_id,
        'Full Name': payload.fullName,
        'Mobile': payload.mobile,
        'Email': payload.email || 'Not provided',
        'Type': payload.type.toUpperCase(),
        'Category / Service': payload.serviceOrCategory || 'General Consultation',
        'Location': `${payload.city || ''}, ${payload.state || ''}`.trim().replace(/^,|,$/g, ''),
        'Message / Details': payload.details || '',
        'Source Page': payload.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : ''),
        'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }),
    });
  } catch (err) {
    console.warn('Background lead email dispatch notification:', err);
  }
};

export const submitLoanEnquiry = async (
  formData: Omit<LoanEnquiry, 'id' | 'enquiry_id' | 'type' | 'status' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; enquiryId: string; error?: string }> => {
  // 1. Bot Honeypot Protection
  if (isBotDetected(formData.honeypot)) {
    console.warn('Bot automated submission dropped.');
    return { success: true, enquiryId: 'REG-LN-VERIFIED' };
  }

  // 2. Client-side Rate Limiting Protection
  const rateLimit = checkSubmissionRateLimit();
  if (!rateLimit.allowed) {
    return { success: false, enquiryId: '', error: rateLimit.message || 'Please wait before submitting another enquiry.' };
  }

  const enquiry_id = generateEnquiryId('loan');
  const now = new Date().toISOString();
  const newEnquiry: LoanEnquiry = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'loan-' + Date.now(),
    enquiry_id,
    type: 'loan',
    status: 'new',
    created_at: now,
    updated_at: now,
    ...formData,
  };

  // Try Supabase if configured
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('loan_enquiries').insert([
        {
          enquiry_id: newEnquiry.enquiry_id,
          full_name: newEnquiry.fullName,
          mobile: newEnquiry.mobile,
          email: newEnquiry.email,
          city: newEnquiry.city,
          state: newEnquiry.state,
          employment_type: newEnquiry.employmentType,
          loan_category: newEnquiry.loanCategory,
          required_amount: newEnquiry.requiredAmount,
          monthly_income: newEnquiry.monthlyIncome,
          existing_obligations: newEnquiry.existingObligations,
          additional_requirements: newEnquiry.additionalRequirements,
          source_page: newEnquiry.sourcePage,
          status: newEnquiry.status,
        }
      ]);
      if (error) {
        console.warn('Supabase insert warning, falling back to local state:', error);
      }
    } catch (err) {
      console.warn('Supabase exception, maintaining offline fallback:', err);
    }
  }

  // Always update local cache for instant admin visibility
  const current = getStoredEnquiries();
  saveStoredEnquiries([newEnquiry, ...current]);

  // Record rate limit timestamp
  recordSubmissionRateLimit();

  // Dispatch real-time lead notification to sales@registifyservices.com
  dispatchEmailToSales({
    enquiry_id,
    type: 'Loan Facilitation',
    fullName: newEnquiry.fullName,
    mobile: newEnquiry.mobile,
    email: newEnquiry.email,
    city: newEnquiry.city,
    state: newEnquiry.state,
    serviceOrCategory: newEnquiry.loanCategory,
    details: `Required: ${newEnquiry.requiredAmount || 'N/A'}. Income: ${newEnquiry.monthlyIncome || 'N/A'}. Obligations: ${newEnquiry.existingObligations || 'N/A'}. Notes: ${newEnquiry.additionalRequirements || ''}`,
    sourcePage: newEnquiry.sourcePage,
  });

  return { success: true, enquiryId: enquiry_id };
};

export const submitBusinessEnquiry = async (
  formData: Omit<BusinessEnquiry, 'id' | 'enquiry_id' | 'type' | 'status' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; enquiryId: string; error?: string }> => {
  // 1. Bot Honeypot Protection
  if (isBotDetected(formData.honeypot)) {
    console.warn('Bot automated submission dropped.');
    return { success: true, enquiryId: 'REG-BZ-VERIFIED' };
  }

  // 2. Client-side Rate Limiting Protection
  const rateLimit = checkSubmissionRateLimit();
  if (!rateLimit.allowed) {
    return { success: false, enquiryId: '', error: rateLimit.message || 'Please wait before submitting another enquiry.' };
  }

  const enquiry_id = generateEnquiryId('business');
  const now = new Date().toISOString();
  const newEnquiry: BusinessEnquiry = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'biz-' + Date.now(),
    enquiry_id,
    type: 'business',
    status: 'new',
    created_at: now,
    updated_at: now,
    ...formData,
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('business_enquiries').insert([
        {
          enquiry_id: newEnquiry.enquiry_id,
          full_name: newEnquiry.fullName,
          mobile: newEnquiry.mobile,
          email: newEnquiry.email,
          business_name: newEnquiry.businessName,
          business_type: newEnquiry.businessType,
          city: newEnquiry.city,
          state: newEnquiry.state,
          service_category: newEnquiry.serviceCategory,
          specific_service: newEnquiry.specificService,
          additional_information: newEnquiry.additionalInformation,
          source_page: newEnquiry.sourcePage,
          status: newEnquiry.status,
        }
      ]);
      if (error) {
        console.warn('Supabase insert warning, falling back to local state:', error);
      }
    } catch (err) {
      console.warn('Supabase exception, maintaining offline fallback:', err);
    }
  }

  const current = getStoredEnquiries();
  saveStoredEnquiries([newEnquiry, ...current]);

  // Record rate limit timestamp
  recordSubmissionRateLimit();

  // Dispatch real-time lead notification to sales@registifyservices.com
  dispatchEmailToSales({
    enquiry_id,
    type: 'Business Service',
    fullName: newEnquiry.fullName,
    mobile: newEnquiry.mobile,
    email: newEnquiry.email,
    city: newEnquiry.city,
    state: newEnquiry.state,
    serviceOrCategory: newEnquiry.specificService || newEnquiry.serviceCategory,
    details: `Business: ${newEnquiry.businessName || 'N/A'} (${newEnquiry.businessType || 'N/A'}). Details: ${newEnquiry.additionalInformation || ''}`,
    sourcePage: newEnquiry.sourcePage,
  });

  return { success: true, enquiryId: enquiry_id };
};

export const submitContactEnquiry = async (
  formData: Omit<ContactEnquiry, 'id' | 'enquiry_id' | 'type' | 'status' | 'created_at' | 'updated_at'>
): Promise<{ success: boolean; enquiryId: string; error?: string }> => {
  // 1. Bot Honeypot Protection
  if (isBotDetected(formData.honeypot)) {
    console.warn('Bot automated submission dropped.');
    return { success: true, enquiryId: 'REG-CT-VERIFIED' };
  }

  // 2. Client-side Rate Limiting Protection
  const rateLimit = checkSubmissionRateLimit();
  if (!rateLimit.allowed) {
    return { success: false, enquiryId: '', error: rateLimit.message || 'Please wait before submitting another enquiry.' };
  }

  const enquiry_id = generateEnquiryId('contact');
  const now = new Date().toISOString();
  const newEnquiry: ContactEnquiry = {
    id: crypto.randomUUID ? crypto.randomUUID() : 'cnt-' + Date.now(),
    enquiry_id,
    type: 'contact',
    status: 'new',
    created_at: now,
    updated_at: now,
    ...formData,
  };

  const current = getStoredEnquiries();
  saveStoredEnquiries([newEnquiry, ...current]);

  // Record rate limit timestamp
  recordSubmissionRateLimit();

  // Dispatch real-time lead notification to sales@registifyservices.com
  dispatchEmailToSales({
    enquiry_id,
    type: 'Contact Enquiry',
    fullName: newEnquiry.fullName,
    mobile: newEnquiry.mobile,
    email: newEnquiry.email,
    city: newEnquiry.city,
    state: newEnquiry.state,
    serviceOrCategory: newEnquiry.subject || 'General Enquiry',
    details: newEnquiry.message,
    sourcePage: newEnquiry.sourcePage,
  });

  return { success: true, enquiryId: enquiry_id };
};

export const updateEnquiryStatus = (id: string, status: EnquiryStatus): boolean => {
  const current = getStoredEnquiries();
  const updated = current.map(item => {
    if (item.id === id || item.enquiry_id === id) {
      return { ...item, status, updated_at: new Date().toISOString() };
    }
    return item;
  });
  saveStoredEnquiries(updated);
  return true;
};

export const addEnquiryNote = (id: string, note: string): boolean => {
  const current = getStoredEnquiries();
  const updated = current.map(item => {
    if (item.id === id || item.enquiry_id === id) {
      const existingNotes = item.notes || [];
      const timestampedNote = `[${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}] ${note}`;
      return { 
        ...item, 
        notes: [timestampedNote, ...existingNotes], 
        updated_at: new Date().toISOString() 
      };
    }
    return item;
  });
  saveStoredEnquiries(updated);
  return true;
};

export const assignEnquiry = (id: string, assignedTo: string, followUpDate?: string): boolean => {
  const current = getStoredEnquiries();
  const updated = current.map(item => {
    if (item.id === id || item.enquiry_id === id) {
      return { 
        ...item, 
        assignedTo, 
        followUpDate: followUpDate || item.followUpDate,
        updated_at: new Date().toISOString() 
      };
    }
    return item;
  });
  saveStoredEnquiries(updated);
  return true;
};

export const exportEnquiriesToCSV = (): string => {
  const list = getStoredEnquiries();
  const headers = [
    'Enquiry ID',
    'Type',
    'Full Name',
    'Mobile',
    'Email',
    'City',
    'State',
    'Status',
    'Service / Loan Category',
    'Specific Detail / Amount',
    'Assigned To',
    'Follow Up Date',
    'Date Submitted'
  ];

  const rows = list.map(item => {
    const category = item.type === 'loan' 
      ? (item as LoanEnquiry).loanCategory 
      : item.type === 'business' 
      ? (item as BusinessEnquiry).serviceCategory 
      : 'General Contact';
    const detail = item.type === 'loan' 
      ? (item as LoanEnquiry).requiredAmount 
      : item.type === 'business' 
      ? (item as BusinessEnquiry).specificService 
      : (item as ContactEnquiry).subject;

    return [
      `"${item.enquiry_id}"`,
      `"${item.type}"`,
      `"${item.fullName.replace(/"/g, '""')}"`,
      `"${item.mobile}"`,
      `"${item.email}"`,
      `"${item.city}"`,
      `"${item.state}"`,
      `"${item.status}"`,
      `"${category}"`,
      `"${detail.replace(/"/g, '""')}"`,
      `"${(item.assignedTo || 'Unassigned').replace(/"/g, '""')}"`,
      `"${item.followUpDate || 'None'}"`,
      `"${new Date(item.created_at).toLocaleString('en-IN')}"`
    ].join(',');
  });

  return [headers.join(','), ...rows].join('\n');
};
