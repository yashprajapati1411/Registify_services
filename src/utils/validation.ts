/**
 * Robust Client-Side Validation Utilities
 * Specifically tailored for Indian Business & Financial Services forms
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates full name:
 * - Must be at least 2 characters
 * - Allows alphabets, spaces, dots, hyphens, and apostrophes
 * - Rejects pure digits or special characters
 */
export const validateFullName = (name: string): ValidationResult => {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: 'Full name is required.' };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long.' };
  }
  if (trimmed.length > 80) {
    return { isValid: false, error: 'Name cannot exceed 80 characters.' };
  }
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  if (!nameRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid name using letters only.' };
  }
  return { isValid: true };
};

/**
 * Validates 10-digit Indian Mobile Number:
 * - Strips any leading +91, 91, 0, spaces, or hyphens
 * - Must be exactly 10 digits
 * - Must start with 6, 7, 8, or 9 (standard TRAI Indian mobile prefix)
 */
export const validateIndianMobile = (mobile: string): ValidationResult => {
  if (!mobile) {
    return { isValid: false, error: 'Mobile number is required.' };
  }
  // Strip non-digits
  let digits = mobile.replace(/\D/g, '');
  // Strip country code prefix if present
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.substring(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.substring(1);
  }

  if (digits.length === 0) {
    return { isValid: false, error: 'Mobile number is required.' };
  }
  if (digits.length < 10) {
    return { isValid: false, error: `Enter complete 10-digit mobile number (${digits.length}/10 digits entered).` };
  }
  if (digits.length > 10) {
    return { isValid: false, error: 'Mobile number cannot exceed 10 digits.' };
  }
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return { isValid: false, error: 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.' };
  }

  return { isValid: true };
};

/**
 * Validates email address syntax
 */
export const validateEmail = (email: string, required: boolean = true): ValidationResult => {
  const trimmed = email.trim();
  if (!trimmed) {
    if (required) {
      return { isValid: false, error: 'Email address is required.' };
    }
    return { isValid: true };
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g. name@domain.com).' };
  }
  return { isValid: true };
};

/**
 * Validates generic required text fields
 */
export const validateRequired = (value: string, fieldName: string, minLength: number = 2): ValidationResult => {
  const trimmed = value.trim();
  if (!trimmed) {
    return { isValid: false, error: `${fieldName} is required.` };
  }
  if (trimmed.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters.` };
  }
  return { isValid: true };
};
