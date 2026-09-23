import { Reveal } from '@/ui';
import { BellRing, CircleCheck, CircleX, Receipt, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { GlassCard } from '../components/GlassCard';
import { IconTile } from '../components/IconTile';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';

const ITEMS: Array<{ key: 'reminders' | 'payments' | 'cash'; icon: ReactNode }> = [
  { key: 'reminders', icon: <BellRing /> },
  { key: 'payments', icon: <Receipt /> },
  { key: 'cash', icon: <TrendingUp /> },
];

/** "Problem → solution" band: what collecting looks like before and with Solvia. */
export function ProblemSolution() {
  const { t } = useI18n();

  return (
    <Section labelledBy="problem-title" className="bg-surface-2/60 dark:bg-surface/40">
      <Container>
        <SectionHeading
          id="problem-title"
          title={t('problem.title')}
          subtitle={t('problem.subtitle')}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal as="li" key={item.key} delay={index * 80}>
              <GlassCard hoverLift className="h-full p-6">
                <IconTile>{item.icon}</IconTile>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-danger-ink uppercase">
                      <CircleX className="h-4 w-4" aria-hidden="true" />
                      {t('problem.before')}
                    </dt>
                    <dd className="mt-1 text-sm text-muted">
                      {t(`problem.items.${item.key}.before`)}
                    </dd>
                  </div>
                  <div className="border-t border-line/70 pt-4">
                    <dt className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-success-ink uppercase">
                      <CircleCheck className="h-4 w-4" aria-hidden="true" />
                      {t('problem.after')}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {t(`problem.items.${item.key}.after`)}
                    </dd>
                  </div>
                </dl>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
