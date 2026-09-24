/** Plans of the data model (`free`, `starter`, `pro`) with reference prices in PEN per month. */
export type PlanId = 'free' | 'starter' | 'pro';

export type PlanPerk =
  | 'payments'
  | 'dashboard'
  | 'risk'
  | 'templates'
  | 'statements'
  | 'roles'
  | 'reports'
  | 'monthlyReport';

export interface Plan {
  id: PlanId;
  monthlyPrice: number;
  highlighted?: boolean;
  limits: { customers: number; users: number; reminders: number };
  perks: PlanPerk[];
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    monthlyPrice: 0,
    limits: { customers: 25, users: 1, reminders: 100 },
    perks: ['payments', 'dashboard', 'risk'],
  },
  {
    id: 'starter',
    monthlyPrice: 49,
    highlighted: true,
    limits: { customers: 300, users: 3, reminders: 1000 },
    perks: ['payments', 'dashboard', 'risk', 'templates', 'statements', 'roles', 'reports'],
  },
  {
    id: 'pro',
    monthlyPrice: 129,
    limits: { customers: 2000, users: 10, reminders: 5000 },
    perks: [
      'payments',
      'dashboard',
      'risk',
      'templates',
      'statements',
      'roles',
      'reports',
      'monthlyReport',
    ],
  },
];

/** Optional modules (`TenantModule` of the data model), added to any plan for an extra price. */
export type ModuleId = 'sales' | 'inventory';

export interface AddOn {
  id: ModuleId;
  /** Reference extra price in PEN per month (the backoffice shows the same). */
  monthlyPrice: number;
  /** What it adds, in the order the card lists it (`modules.<id>.points.<key>`). */
  points: string[];
}

export const ADD_ONS: AddOn[] = [
  { id: 'sales', monthlyPrice: 29, points: ['quick', 'scanner', 'credit', 'receipts', 'reports'] },
  {
    id: 'inventory',
    monthlyPrice: 29,
    points: ['stock', 'purchases', 'suppliers', 'alerts', 'traceability'],
  },
];

/** Both modules together, per month. */
export const ADD_ONS_BUNDLE_PRICE = 49;
