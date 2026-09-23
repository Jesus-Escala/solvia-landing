import { Reveal } from '@/ui';
import { BellRing, FileText, LayoutDashboard, ShieldCheck, Users, Wallet } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { IconTile } from '../components/IconTile';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';

type FeatureKey = 'receivables' | 'reminders' | 'payments' | 'risk' | 'dashboard' | 'statements';

const FEATURES: Array<{ key: FeatureKey; icon: ReactNode }> = [
  { key: 'receivables', icon: <Users /> },
  { key: 'reminders', icon: <BellRing /> },
  { key: 'payments', icon: <Wallet /> },
  { key: 'risk', icon: <ShieldCheck /> },
  { key: 'dashboard', icon: <LayoutDashboard /> },
  { key: 'statements', icon: <FileText /> },
];

export function Features() {
  const { t } = useI18n();

  return (
    <Section id={SECTION_IDS.features} labelledBy="features-title">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow={t('features.eyebrow')}
          title={t('features.title')}
          subtitle={t('features.subtitle')}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal as="li" key={feature.key} delay={(index % 3) * 80}>
              <div className="group h-full rounded-3xl border border-line bg-surface p-6 shadow-card transition duration-300 ease-(--ease-out) hover:-translate-y-1 hover:border-primary/40 hover:shadow-pop">
                <IconTile className="transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary">
                  {feature.icon}
                </IconTile>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {t(`features.items.${feature.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`features.items.${feature.key}.body`)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
