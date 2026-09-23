/** Plans of the data model (`free`, `starter`, `pro`) with reference prices in PEN per month. */
export type PlanId = 'free' | 'starter' | 'pro';

export type PlanPerk =
  'payments' | 'dashboard' | 'risk' | 'templates' | 'statements' | 'roles' | 'monthlyReport';

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
    perks: ['payments', 'dashboard', 'risk', 'templates', 'statements', 'roles'],
  },
  {
    id: 'pro',
    monthlyPrice: 129,
    limits: { customers: 2000, users: 10, reminders: 5000 },
    perks: ['payments', 'dashboard', 'risk', 'templates', 'statements', 'roles', 'monthlyReport'],
  },
];
