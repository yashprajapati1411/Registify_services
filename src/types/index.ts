export type DivisionType = 'loans' | 'business';

export type EnquiryStatus = 
  | 'new'
  | 'contacted'
  | 'consultation_scheduled'
  | 'documents_pending'
  | 'in_process'
  | 'completed'
  | 'rejected'
  | 'closed';

export interface BaseEnquiry {
  id: string;
  enquiry_id: string; // e.g., REG-LN-2026-0428
  type: 'loan' | 'business' | 'contact';
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  status: EnquiryStatus;
  notes?: string[];
  assignedTo?: string;
  followUpDate?: string;
  sourcePage?: string;
  honeypot?: string;
  created_at: string;
  updated_at: string;
}

export interface LoanEnquiry extends BaseEnquiry {
  type: 'loan';
  employmentType: 'Salaried' | 'Self-employed' | 'Business Owner' | 'Other';
  loanCategory: string;
  requiredAmount: string;
  monthlyIncome?: string;
  existingObligations?: string;
  additionalRequirements?: string;
  consent: boolean;
}

export interface BusinessEnquiry extends BaseEnquiry {
  type: 'business';
  businessName?: string;
  businessType: string;
  serviceCategory: string;
  specificService: string;
  additionalInformation?: string;
  consent: boolean;
}

export interface ContactEnquiry extends BaseEnquiry {
  type: 'contact';
  subject: string;
  message: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface LoanServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  popular?: boolean;
  idealFor: string[];
  features: string[];
  eligibility: string[];
  documents: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface BusinessServiceItem {
  id: string;
  slug: string;
  category: 'Company Registration' | 'Certifications' | 'GST Services' | 'Taxation & Accounting' | 'Compliance' | 'Business Documentation';
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  popular?: boolean;
  whoNeedsIt: string[];
  benefits: string[];
  applicability: string[];
  documents: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  requiresCA?: boolean;
  requiresLegalAdvocate?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  readingTime: string;
  publishedDate: string;
  author: string;
  featuredImage?: string;
  excerpt: string;
  content: string; // rich markdown/html structure
  relatedServices: {
    title: string;
    url: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Loans' | 'Company Registration' | 'Certifications' | 'Compliance & Taxes';
}
