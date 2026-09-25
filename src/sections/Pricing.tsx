import { cx, Mascot, Reveal, WhatsAppIcon, type MascotMood } from '@/ui';
import {
  ArrowRight,
  Boxes,
  Check,
  HandCoins,
  Info,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Users,
  UserRound,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { RequestAccessButton } from '../access/RequestAccessButton';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';
import {
  ALLOWANCES,
  FREE_PLAN,
  MESSAGE_PACK,
  MODULE_IDS,
  PRICED_MODULES,
  quote,
  type Billing,
  type ModuleId,
} from './plans';

const ICONS: Record<ModuleId, ReactNode> = {
  collections: <HandCoins />,
  sales: <ShoppingCart />,
  inventory: <Boxes />,
};

/** Bowl's pose for 1, 2 and 3 modules: calm, waving, flying. */
const BOWL_MOODS: Record<1 | 2 | 3, MascotMood> = { 1: 'default', 2: 'wave', 3: 'fly' };
const BOWL_KEYS = { 1: 'one', 2: 'two', 3: 'three' } as const;

/** "S/ 39" without trailing zeros, "S/ 61.20" otherwise. */
function usePrice() {
  const { fmt } = useI18n();
  return (amount: number) => fmt.money(amount).replace(/[.,]00$/, '');
}

/**
 * Modular pricing: pick the modules (any, at least one), monthly or yearly billing, and see
 * the total with the discount and what it includes. The more modules, the cheaper each one and
 * the more WhatsApp messages, users and customers. A free plan to start sits below.
 */
export function Pricing() {
  const { t, fmt } = useI18n();
  const price = usePrice();
  const [modules, setModules] = useState<ModuleId[]>(['collections', 'sales']);
  const [billing, setBilling] = useState<Billing>('monthly');
  const current = quote(modules, billing);
  const next = current.count < 3 ? ALLOWANCES[(current.count + 1) as 2 | 3] : null;

  // At least one module: the last one chosen stays.
  const toggle = (id: ModuleId) =>
    setModules((list) =>
      list.includes(id)
        ? list.length > 1
          ? list.filter((item) => item !== id)
          : list
        : [...list, id],
    );
  /** From the tier cards: keep the current choice when it has that many modules. */
  const chooseCount = (count: 1 | 2 | 3) =>
    setModules((list) =>
      list.length === count
        ? list
        : count === 3
          ? [...MODULE_IDS]
          : count === 2
            ? list.length > 2
              ? ['collections', 'sales']
              : [...list, MODULE_IDS.find((id) => !list.includes(id))!]
            : [list[0] ?? 'collections'],
    );

  return (
    <Section id={SECTION_IDS.pricing} labelledBy="pricing-title">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow={t('pricing.eyebrow')}
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />

        <div
          role="radiogroup"
          aria-label={t('pricing.billing.label')}
          className="mx-auto mt-8 flex w-fit items-center gap-1 rounded-full border border-line bg-surface p-1 shadow-card"
        >
          {(['monthly', 'annual'] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={billing === option}
              onClick={() => setBilling(option)}
              className={cx(
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                billing === option
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-muted hover:text-ink',
              )}
            >
              {t(`pricing.billing.${option}`)}
              {option === 'annual' && (
                <span
                  className={cx(
                    'rounded-full px-2 py-0.5 text-[11px] font-bold',
                    billing === option ? 'bg-white/20' : 'bg-accent/20 text-ink',
                  )}
                >
                  {t('pricing.billing.annualBadge')}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Module picker */}
          <Reveal className="min-w-0">
            {/* min-w-0: a fieldset is min-content wide by default and would widen the page. */}
            <fieldset className="min-w-0">
              <legend className="mb-3 text-sm font-semibold text-ink">{t('pricing.pick')}</legend>
              <ul className="space-y-3">
                {PRICED_MODULES.map((module) => {
                  const selected = modules.includes(module.id);
                  // The last module chosen cannot be removed.
                  const locked = selected && modules.length === 1;
                  return (
                    <li key={module.id}>
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={selected}
                        aria-disabled={locked}
                        onClick={() => toggle(module.id)}
                        className={cx(
                          'flex w-full items-start gap-3 rounded-3xl border p-4 text-left transition duration-300 sm:gap-4 sm:p-5',
                          selected
                            ? 'border-primary/50 bg-gradient-to-br from-primary-soft/80 to-surface shadow-card'
                            : 'border-line bg-surface hover:border-line-strong hover:shadow-card',
                          locked && 'cursor-default',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cx(
                            'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl [&>svg]:h-5 [&>svg]:w-5',
                            selected ? 'bg-primary text-on-primary' : 'bg-surface-3 text-muted',
                          )}
                        >
                          {ICONS[module.id]}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-base font-semibold text-ink">
                              {t(`pricing.modules.${module.id}.name`)}
                            </span>
                          </span>
                          <span className="mt-0.5 block text-sm font-semibold text-ink tabular-nums sm:hidden">
                            {price(module.monthlyPrice)}
                            <span className="font-normal text-muted">{t('pricing.perMonth')}</span>
                          </span>
                          <span className="mt-1 block text-sm text-muted">
                            {t(`pricing.modules.${module.id}.description`)}
                          </span>
                          <span className="mt-3 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                            {module.points.map((point) => (
                              <span key={point} className="flex gap-2 text-[13px] text-ink">
                                <Check
                                  className={cx(
                                    'mt-0.5 h-3.5 w-3.5 shrink-0',
                                    selected ? 'text-primary' : 'text-subtle',
                                  )}
                                  aria-hidden="true"
                                />
                                {t(
                                  `pricing.modules.${module.id}.points.${point}` as 'pricing.title',
                                )}
                              </span>
                            ))}
                          </span>
                        </span>
                        <span className="hidden shrink-0 text-right sm:block">
                          <span className="block text-lg font-bold text-ink tabular-nums">
                            {price(module.monthlyPrice)}
                          </span>
                          <span className="text-xs text-muted">{t('pricing.perMonth')}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={cx(
                            'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border',
                            selected
                              ? 'border-primary bg-primary text-on-primary'
                              : 'border-line-strong',
                          )}
                        >
                          {selected && <Check className="h-3.5 w-3.5" />}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </Reveal>

          {/* Summary */}
          <Reveal delay={120} className="lg:sticky lg:top-24">
            <aside
              aria-labelledby="pricing-summary"
              className="relative mt-16 rounded-3xl border border-primary/40 bg-gradient-to-b from-primary-soft to-surface p-6 shadow-[0_28px_56px_-28px_rgba(13,148,136,0.6)] ring-1 ring-primary/20 sm:p-7 dark:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.9)]"
            >
              {/* Bowl perches on the card and cheers more the more modules you pick. */}
              <div aria-hidden="true" className="absolute -top-16 right-4 flex items-end gap-2">
                <span
                  key={`bubble-${current.count}`}
                  className="animate-pop-in mb-10 max-w-[11rem] rounded-2xl rounded-br-sm border border-line bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-pop"
                >
                  {t(`pricing.bowl.${BOWL_KEYS[current.count]}`)}
                </span>
                <span key={`bowl-${current.count}`} className="animate-pop-in">
                  <Mascot size={88} mood={BOWL_MOODS[current.count]} className="drop-shadow-md" />
                </span>
              </div>
              <h3 id="pricing-summary" className="text-sm font-semibold text-muted">
                {t('pricing.summary.title')}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm">
                {current.chosen.map((module) => (
                  <li key={module.id} className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-2 text-ink">
                      <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                      {t(`pricing.modules.${module.id}.name`)}
                    </span>
                    <span className="text-muted tabular-nums">{price(module.monthlyPrice)}</span>
                  </li>
                ))}
                {current.saving > 0 && (
                  <li className="flex items-center justify-between gap-3 font-semibold text-success-ink">
                    <span>
                      {billing === 'annual'
                        ? t('pricing.summary.savingAnnual')
                        : t('pricing.summary.saving', {
                            percent: fmt.percent(current.allowance.discount),
                          })}
                    </span>
                    <span className="tabular-nums">−{price(current.saving)}</span>
                  </li>
                )}
              </ul>
              <p className="mt-5 flex items-baseline gap-1 border-t border-primary/20 pt-5">
                {current.saving > 0 && (
                  <span className="mr-1 text-base text-subtle tabular-nums line-through">
                    {price(current.list)}
                  </span>
                )}
                <span className="text-4xl font-extrabold tracking-tight text-ink tabular-nums">
                  {price(current.perMonth)}
                </span>
                <span className="text-sm font-medium text-muted">{t('pricing.perMonth')}</span>
              </p>
              {billing === 'annual' && (
                <p className="mt-1 text-xs text-muted">
                  {t('pricing.summary.yearly', { amount: price(current.yearly) })}
                </p>
              )}

              <ul className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  {
                    icon: <MessageCircle />,
                    value: fmt.number(current.allowance.whatsapp),
                    label: t('pricing.summary.whatsapp'),
                  },
                  {
                    icon: <UserRound />,
                    value: fmt.number(current.allowance.users),
                    label: t('pricing.summary.users'),
                  },
                  {
                    icon: <Users />,
                    value:
                      current.allowance.customers === null
                        ? t('pricing.unlimitedMany')
                        : fmt.number(current.allowance.customers),
                    label: t('pricing.summary.customers'),
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-line bg-surface/80 px-2 py-3"
                  >
                    <span className="mx-auto flex justify-center text-primary [&>svg]:h-4 [&>svg]:w-4">
                      {item.icon}
                    </span>
                    <span className="mt-1 block text-base font-bold text-ink tabular-nums">
                      {item.value}
                    </span>
                    <span className="block text-[11px] leading-tight text-muted">{item.label}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-2 text-center text-xs text-muted">
                {current.withCollections
                  ? t('pricing.summary.manual')
                  : t('pricing.summary.noCollections')}
              </p>

              {next && (
                <p className="mt-4 flex items-start gap-2 rounded-2xl bg-accent/15 px-3 py-2.5 text-xs text-ink">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {current.withCollections
                    ? t('pricing.summary.nudge', {
                        percent: fmt.percent(next.discount),
                        whatsapp: fmt.number(next.whatsapp),
                      })
                    : t('pricing.summary.nudgeNoMessages', {
                        percent: fmt.percent(next.discount),
                      })}
                </p>
              )}

              <RequestAccessButton
                modules={modules}
                billing={billing}
                icon={<ArrowRight />}
                className="mt-5 w-full"
              >
                {t('pricing.summary.cta')}
              </RequestAccessButton>
              <p className="mt-2 text-center text-xs text-subtle">{t('pricing.summary.noCard')}</p>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {/* The more modules, the better: one card per tier, the chosen one stands out */}
          <div className="mt-10">
            <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-ink">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              {t('pricing.ladder.title')}
            </p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-3 sm:items-end">
              {([1, 2, 3] as const).map((count) => {
                const row = ALLOWANCES[count];
                const active = count === current.count;
                return (
                  <li key={count}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => chooseCount(count)}
                      className={cx(
                        'relative w-full rounded-3xl border p-5 text-left transition duration-300 ease-(--ease-out)',
                        active
                          ? 'border-primary bg-gradient-to-b from-primary-soft to-surface shadow-[0_24px_48px_-24px_rgba(13,148,136,0.55)] ring-2 ring-primary/30 sm:-translate-y-2 sm:py-7'
                          : 'border-line bg-surface hover:-translate-y-1 hover:border-line-strong hover:shadow-card',
                      )}
                    >
                      {active && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-bold whitespace-nowrap text-on-primary shadow-sm">
                          {t('pricing.ladder.yours')}
                        </span>
                      )}
                      <span className="flex items-center justify-between gap-2">
                        <span className="text-base font-semibold whitespace-nowrap text-ink">
                          {t('pricing.ladder.count', { count })}
                        </span>
                        <span
                          className={cx(
                            'rounded-full px-2.5 py-0.5 text-xs font-bold whitespace-nowrap',
                            row.discount ? 'bg-accent/25 text-ink' : 'bg-surface-3 text-muted',
                          )}
                        >
                          {row.discount
                            ? t('pricing.ladder.off', { percent: fmt.percent(row.discount) })
                            : t('pricing.ladder.noDiscount')}
                        </span>
                      </span>
                      <span className="mt-4 flex items-baseline gap-1.5">
                        <span className="font-display text-4xl font-bold text-ink tabular-nums">
                          {fmt.number(row.whatsapp)}
                        </span>
                        <span className="text-xs leading-tight text-muted">
                          {t('pricing.ladder.whatsapp')}
                        </span>
                      </span>
                      <span className="mt-4 block space-y-2 border-t border-line/70 pt-4 text-sm">
                        {[
                          {
                            icon: <WhatsAppIcon className="h-4 w-4" />,
                            text: t('pricing.ladder.manualValue'),
                          },
                          {
                            icon: <UserRound className="h-4 w-4 text-primary" />,
                            text: t('pricing.ladder.usersValue', { count: row.users }),
                          },
                          {
                            icon: <Users className="h-4 w-4 text-primary" />,
                            text:
                              row.customers === null
                                ? t('pricing.ladder.customersUnlimited')
                                : t('pricing.ladder.customersValue', {
                                    count: fmt.number(row.customers),
                                  }),
                          },
                        ].map((item) => (
                          <span key={item.text} className="flex items-center gap-2 text-ink">
                            {item.icon}
                            {item.text}
                          </span>
                        ))}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs text-muted">
              <MessageCircle
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              {t('pricing.ladder.packs', {
                messages: fmt.number(MESSAGE_PACK.messages),
                price: price(MESSAGE_PACK.price),
              })}
            </p>
          </div>
        </Reveal>

        {/* Free plan to start */}
        <Reveal delay={150}>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-line-strong p-6 text-center sm:flex-row sm:text-left">
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold text-ink">{t('pricing.free.title')}</p>
              <p className="mt-1 text-sm text-muted">
                {t('pricing.free.body', { customers: fmt.number(FREE_PLAN.customers) })}
              </p>
            </div>
            <RequestAccessButton plan="free" variant="secondary" className="w-full sm:w-auto">
              {t('pricing.free.cta')}
            </RequestAccessButton>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-balance text-subtle">
          <Info className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
          {t('pricing.note')}
        </p>
      </Container>
    </Section>
  );
}
