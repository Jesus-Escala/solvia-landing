/**
 * Modular pricing (reference prices in PEN per month). A business builds its plan from modules:
 * Cobranza is always included, Ventas and Inventario are optional. The more modules, the bigger
 * the discount and the more WhatsApp messages, users and customers are included. There is also a
 * free plan to start. The backoffice and the app show the same module prices (solvia-admin
 * `MODULE_PRICES`, solvia-app `ModulesOffer`); keep them in sync.
 */

/** Plans of the data model, still used by the request form deep links (`#solicitar-acceso-pro`). */
export type PlanId = 'free' | 'starter' | 'pro';
export const PLANS: Array<{ id: PlanId }> = [{ id: 'free' }, { id: 'starter' }, { id: 'pro' }];

/** Optional modules (`TenantModule` of the data model). */
export type ModuleId = 'sales' | 'inventory';

/** Every priced module: Cobranza (always on) plus the optional ones. */
export type PricedModuleId = 'collections' | ModuleId;

export interface PricedModule {
  id: PricedModuleId;
  monthlyPrice: number;
  /** Cobranza cannot be removed: it is the core of Solvia. */
  required: boolean;
  /** What it includes, in order (`pricing.modules.<id>.points.<key>`). */
  points: string[];
}

export const PRICED_MODULES: PricedModule[] = [
  {
    id: 'collections',
    monthlyPrice: 39,
    required: true,
    points: ['reminders', 'payments', 'risk', 'statements', 'dashboard', 'reports'],
  },
  {
    id: 'sales',
    monthlyPrice: 29,
    required: false,
    points: ['quick', 'scanner', 'credit', 'receipts', 'shortage', 'reports'],
  },
  {
    id: 'inventory',
    monthlyPrice: 29,
    required: false,
    points: ['stock', 'alerts', 'purchases', 'suppliers', 'adjustments', 'reports'],
  },
];

export interface Allowance {
  /** Share off the sum of the module prices. */
  discount: number;
  whatsapp: number;
  users: number;
  customers: number;
}

/** What a plan includes by number of modules (1 = only Cobranza). */
export const ALLOWANCES: Record<1 | 2 | 3, Allowance> = {
  1: { discount: 0, whatsapp: 500, users: 2, customers: 300 },
  2: { discount: 0.1, whatsapp: 1500, users: 4, customers: 1000 },
  3: { discount: 0.2, whatsapp: 4000, users: 8, customers: 3000 },
};

/** The free plan: Cobranza for a small business that is starting. */
export const FREE_PLAN = { whatsapp: 100, users: 1, customers: 25 };

/** Paying the year upfront: 12 months for the price of 10. */
export const ANNUAL_MONTHS_PAID = 10;

export type Billing = 'monthly' | 'annual';

const round2 = (value: number) => Math.round(value * 100) / 100;

/** Price of a set of modules: list price, discount, monthly total and what it includes. */
export function quote(modules: ModuleId[], billing: Billing) {
  const chosen = PRICED_MODULES.filter(
    (module) => module.required || modules.includes(module.id as ModuleId),
  );
  const count = chosen.length as 1 | 2 | 3;
  const allowance = ALLOWANCES[count];
  const list = chosen.reduce((sum, module) => sum + module.monthlyPrice, 0);
  const monthly = round2(list * (1 - allowance.discount));
  const perMonth = billing === 'annual' ? round2((monthly * ANNUAL_MONTHS_PAID) / 12) : monthly;
  return {
    chosen,
    count,
    allowance,
    list,
    /** What the business pays per month (annual billing spread over 12 months). */
    perMonth,
    /** Saved per month against paying every module separately, monthly. */
    saving: round2(list - perMonth),
    yearly: round2(monthly * ANNUAL_MONTHS_PAID),
    /** Plan tier the backoffice creates for this choice. */
    tier: (count === 1 ? 'starter' : 'pro') as PlanId,
  };
}

/** The optional modules, in order (request form checkboxes, deep links). */
export const OPTIONAL_MODULES: ModuleId[] = ['sales', 'inventory'];
