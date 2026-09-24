import { cx, Reveal } from '@/ui';
import { Check, Info, Star } from 'lucide-react';
import { Container } from '../components/Container';
import { RequestAccessButton } from '../access/RequestAccessButton';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';
import { PLANS, type Plan } from './plans';

function PlanCard({ plan }: { plan: Plan }) {
  const { t, fmt } = useI18n();
  const name = t(`pricing.plans.${plan.id}.name`);
  const titleId = `plan-${plan.id}-title`;
  const features = [
    t('pricing.limits.customers', { count: fmt.number(plan.limits.customers) }),
    plan.limits.users === 1
      ? t('pricing.limits.singleUser')
      : t('pricing.limits.users', { count: fmt.number(plan.limits.users) }),
    t('pricing.limits.reminders', { count: fmt.number(plan.limits.reminders) }),
    ...plan.perks.map((perk) => t(`pricing.perks.${perk}`)),
  ];

  return (
    <article
      aria-labelledby={titleId}
      className={cx(
        'relative flex h-full flex-col rounded-3xl border p-6 transition duration-300 ease-(--ease-out) hover:-translate-y-1 sm:p-7',
        plan.highlighted
          ? 'border-primary/50 bg-gradient-to-b from-primary-soft to-surface shadow-[0_28px_56px_-28px_rgba(13,148,136,0.6)] ring-1 ring-primary/30 lg:-my-3 lg:py-10 dark:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.9)]'
          : 'border-line bg-surface shadow-card hover:shadow-pop',
      )}
    >
      {plan.highlighted && (
        <p className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-[#fde68a] to-[#f59e0b] px-3 py-1 text-xs font-bold whitespace-nowrap text-[#78350f] shadow-sm">
          <Star className="h-3.5 w-3.5" aria-hidden="true" />
          {t('pricing.recommended')}
        </p>
      )}
      <h3 id={titleId} className="text-lg font-semibold text-ink">
        {name}
      </h3>
      <p className="mt-1 text-sm text-muted">{t(`pricing.plans.${plan.id}.description`)}</p>
      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight text-ink tabular-nums">
          {fmt.money(plan.monthlyPrice).replace(/[.,]00$/, '')}
        </span>
        <span className="text-sm font-medium text-muted">{t('pricing.perMonth')}</span>
      </p>
      <RequestAccessButton
        plan={plan.id}
        variant={plan.highlighted ? 'primary' : 'secondary'}
        className="mt-6 w-full"
      >
        {t(`pricing.plans.${plan.id}.cta`)}
      </RequestAccessButton>
      <ul aria-label={t('pricing.listLabel', { plan: name })} className="mt-7 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Pricing() {
  const { t } = useI18n();

  return (
    <Section id={SECTION_IDS.pricing} labelledBy="pricing-title">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow={t('pricing.eyebrow')}
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />
        <ul className="mx-auto mt-14 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3 lg:items-center lg:gap-6">
          {PLANS.map((plan, index) => (
            <Reveal as="li" key={plan.id} delay={index * 100} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </ul>
        <p className="mt-10 text-center text-sm text-balance text-subtle">
          <Info className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
          {t('pricing.note')}{' '}
          <a
            href={`#${SECTION_IDS.modules}`}
            className="font-semibold text-primary-ink underline-offset-2 hover:underline"
          >
            {t('pricing.modulesLink')}
          </a>
        </p>
      </Container>
    </Section>
  );
}
