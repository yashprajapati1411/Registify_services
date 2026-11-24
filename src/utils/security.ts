/**
 * Client-Side Security, Rate Limiting & Bot Protection Utilities
 */

const RATE_LIMIT_STORAGE_KEY = 'registify_submission_history';
const COOLDOWN_SECONDS = 25; // 25 seconds minimum between enquiry submissions
const MAX_SUBMISSIONS_PER_WINDOW = 6;
const WINDOW_DURATION_MS = 30 * 60 * 1000; // 30 minutes

interface RateLimitStatus {
  allowed: boolean;
  waitSeconds?: number;
  message?: string;
}

/**
 * Checks whether the current client is allowed to submit an enquiry.
 * Prevents rapid-fire form submission spam and bot flooding.
 */
export const checkSubmissionRateLimit = (): RateLimitStatus => {
  try {
    const rawHistory = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    const now = Date.now();
    let timestamps: number[] = rawHistory ? JSON.parse(rawHistory) : [];

    // Filter out timestamps outside the rolling window
    timestamps = timestamps.filter(t => now - t < WINDOW_DURATION_MS);

    // 1. Check minimum cooldown between subsequent submissions
    if (timestamps.length > 0) {
      const lastSubmission = timestamps[timestamps.length - 1];
      const elapsedSeconds = Math.floor((now - lastSubmission) / 1000);
      if (elapsedSeconds < COOLDOWN_SECONDS) {
        const remaining = COOLDOWN_SECONDS - elapsedSeconds;
        return {
          allowed: false,
          waitSeconds: remaining,
          message: `Please wait ${remaining} second${remaining === 1 ? '' : 's'} before submitting another request.`
        };
      }
    }

    // 2. Check total submissions within rolling window
    if (timestamps.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      const oldestInWindow = timestamps[0];
      const waitMinutes = Math.ceil((WINDOW_DURATION_MS - (now - oldestInWindow)) / 60000);
      return {
        allowed: false,
        message: `Submission limit reached. To prevent abuse, please wait ${waitMinutes} minute${waitMinutes === 1 ? '' : 's'} or reach us directly via WhatsApp at +91 97259 91607.`
      };
    }

    return { allowed: true };
  } catch (err) {
    // If localStorage is unavailable, allow the submission
    return { allowed: true };
  }
};

/**
 * Records a successful submission timestamp
 */
export const recordSubmissionRateLimit = (): void => {
  try {
    const rawHistory = localStorage.getItem(RATE_LIMIT_STORAGE_KEY);
    const now = Date.now();
    let timestamps: number[] = rawHistory ? JSON.parse(rawHistory) : [];
    timestamps = timestamps.filter(t => now - t < WINDOW_DURATION_MS);
    timestamps.push(now);
    localStorage.setItem(RATE_LIMIT_STORAGE_KEY, JSON.stringify(timestamps));
  } catch (err) {
    // Graceful ignore
  }
};

/**
 * Validates honeypot field.
 * Legitimate users never see or interact with this field.
 * If filled by automated scrapers/bots, it indicates a spam bot.
 */
export const isBotDetected = (honeypotValue: string | undefined): boolean => {
  return Boolean(honeypotValue && honeypotValue.trim().length > 0);
};
