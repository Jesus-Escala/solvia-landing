/**
 * Modular pricing (reference prices in PEN per month). A business builds its plan from modules:
 * Cobranza, Ventas and Inventario, any of them alone or together. The more modules, the bigger
 * the discount and the more WhatsApp messages, users and customers are included. There is also a
 * free plan to start. The backoffice and the app show the same module prices (solvia-admin
 * `MODULE_PRICES`, solvia-app `ModulesOffer`); keep them in sync.
 */

/** Plans of the data model, still used by the request form deep links (`#solicitar-acceso-pro`). */
export type PlanId = 'free' | 'starter' | 'pro';
export const PLANS: Array<{ id: PlanId }> = [{ id: 'free' }, { id: 'starter' }, { id: 'pro' }];

/** Modules a business can pay for (`TenantModule` of the data model). */
export type ModuleId = 'collections' | 'sales' | 'inventory';

export interface PricedModule {
  id: ModuleId;
  monthlyPrice: number;
  /** What it includes, in order (`pricing.modules.<id>.points.<key>`). */
  points: string[];
}

export const PRICED_MODULES: PricedModule[] = [
  {
    id: 'collections',
    monthlyPrice: 39,
    points: ['reminders', 'payments', 'risk', 'statements', 'dashboard', 'reports'],
  },
  {
    id: 'sales',
    monthlyPrice: 29,
    points: ['quick', 'scanner', 'credit', 'receipts', 'shortage', 'reports'],
  },
  {
    id: 'inventory',
    monthlyPrice: 29,
    points: ['stock', 'alerts', 'purchases', 'suppliers', 'adjustments', 'reports'],
  },
];

export interface Allowance {
  /** Share off the sum of the module prices. */
  discount: number;
  /**
   * Automatic WhatsApp messages a month (sent by Solvia; each one has a cost with Meta). Manual
   * reminders, sent from the owner's own WhatsApp, are unlimited in every plan.
   */
  whatsapp: number;
  users: number;
  /** null: unlimited (customers cost almost nothing to keep). */
  customers: number | null;
}

/**
 * What a plan includes by number of modules. Generous in what costs little (customers, users)
 * and measured in what has a real cost (automatic WhatsApp messages, which are Cobranza's
 * reminders: without Cobranza there are none, see `quote`).
 */
export const ALLOWANCES: Record<1 | 2 | 3, Allowance> = {
  1: { discount: 0, whatsapp: 150, users: 2, customers: 500 },
  2: { discount: 0.1, whatsapp: 400, users: 4, customers: 2000 },
  3: { discount: 0.15, whatsapp: 1000, users: 8, customers: null },
};

/** Extra automatic WhatsApp messages, bought in packs when a plan's allowance is not enough. */
export const MESSAGE_PACK = { messages: 500, price: 75 };

/** The free plan: any module for a small business that is starting (manual reminders only). */
export const FREE_PLAN = { whatsapp: 0, users: 1, customers: 25 };

/** Paying the year upfront: 12 months for the price of 10. */
export const ANNUAL_MONTHS_PAID = 10;

export type Billing = 'monthly' | 'annual';

const round2 = (value: number) => Math.round(value * 100) / 100;

/** Price of a set of modules: list price, discount, monthly total and what it includes. */
export function quote(modules: ModuleId[], billing: Billing) {
  const chosen = PRICED_MODULES.filter((module) => modules.includes(module.id));
  const count = Math.min(3, Math.max(1, chosen.length)) as 1 | 2 | 3;
  const withCollections = modules.includes('collections');
  // Automatic messages are Cobranza's reminders: none without it.
  const allowance = withCollections ? ALLOWANCES[count] : { ...ALLOWANCES[count], whatsapp: 0 };
  const list = chosen.reduce((sum, module) => sum + module.monthlyPrice, 0);
  const monthly = round2(list * (1 - allowance.discount));
  const perMonth = billing === 'annual' ? round2((monthly * ANNUAL_MONTHS_PAID) / 12) : monthly;
  return {
    chosen,
    count,
    withCollections,
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

/** The modules, in order (request form checkboxes, deep links). */
export const MODULE_IDS: ModuleId[] = ['collections', 'sales', 'inventory'];
