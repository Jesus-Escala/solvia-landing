/** Base URL of the Solvia web app; the sign-in buttons point here. */
export const APP_URL = (
  (import.meta.env.VITE_APP_URL as string | undefined) || 'http://localhost:5173'
).replace(/\/+$/, '');

export const LOGIN_URL = `${APP_URL}/login`;

/** In-page anchors of the one-page site. */
export const SECTION_IDS = {
  features: 'features',
  howItWorks: 'how-it-works',
  pricing: 'pricing',
  faq: 'faq',
} as const;
