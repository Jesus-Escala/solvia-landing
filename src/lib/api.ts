import { createApiClient, type TokenStore } from '@/ui';

/** The landing has no session: every call is public, so the token store stays empty. */
const noTokens: TokenStore = {
  getAccessToken: () => null,
  getRefreshToken: () => null,
  setTokens: () => undefined,
};

/** API client of the landing (base URL from `VITE_API_URL`, `/api` by default). */
export const api = createApiClient({ tokens: noTokens, refreshPath: '/auth/refresh' });
