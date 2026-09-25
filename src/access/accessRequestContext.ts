import { createContext, useContext } from 'react';
import { MODULE_IDS, PLANS, type Billing, type ModuleId, type PlanId } from '../sections/plans';

/**
 * Deep link that opens the request access form on load, e.g. from the web app's login page:
 * `https://landing/#solicitar-acceso`. Append a plan or a module to preselect it:
 * `#solicitar-acceso-starter`, `#solicitar-acceso-sales`.
 */
export const ACCESS_REQUEST_HASH = 'solicitar-acceso';

/**
 * Reads the deep link from a location hash: `undefined` when it is not the request access link,
 * otherwise the (optional) plan it asks for.
 */
export function parseAccessRequestHash(hash: string): AccessRequestPreset | undefined {
  const value = decodeURIComponent(hash.replace(/^#/, '')).toLowerCase();
  if (value === ACCESS_REQUEST_HASH) return {};
  if (!value.startsWith(`${ACCESS_REQUEST_HASH}-`)) return undefined;
  const plan = PLANS.find((item) => `${ACCESS_REQUEST_HASH}-${item.id}` === value);
  if (plan) return { plan: plan.id };
  const addOn = MODULE_IDS.find((id) => `${ACCESS_REQUEST_HASH}-${id}` === value);
  return addOn ? { modules: [addOn] } : {};
}

/** What the form starts with: a plan and/or modules of interest. */
export interface AccessRequestPreset {
  plan?: PlanId;
  modules?: ModuleId[];
  billing?: Billing;
}

export interface AccessRequestValue {
  /** Opens the request access form, optionally with a plan or modules preselected. */
  open: (preset?: AccessRequestPreset) => void;
}

export const AccessRequestContext = createContext<AccessRequestValue | null>(null);

/** Opens the "Solicitar acceso" form from any call to action. */
export function useAccessRequest() {
  const context = useContext(AccessRequestContext);
  if (!context) throw new Error('useAccessRequest must be used within an AccessRequestProvider');
  return context;
}
