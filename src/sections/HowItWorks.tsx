import { Reveal } from '@/ui';
import { HandCoins, MessageCircle, UserPlus } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { GlassCard } from '../components/GlassCard';
import { IconTile } from '../components/IconTile';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';

const STEPS: Array<{ key: 'register' | 'remind' | 'collect'; icon: ReactNode }> = [
  { key: 'register', icon: <UserPlus /> },
  { key: 'remind', icon: <MessageCircle /> },
  { key: 'collect', icon: <HandCoins /> },
];

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <Section
      id={SECTION_IDS.howItWorks}
      labelledBy="how-title"
      className="overflow-hidden bg-surface-2/60 dark:bg-surface/40"
    >
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow={t('how.eyebrow')}
          title={t('how.title')}
          subtitle={t('how.subtitle')}
        />
        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* Connector line between the steps on wide screens */}
          <span
            aria-hidden="true"
            className="absolute top-12 right-[16%] left-[16%] hidden h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 md:block"
          />
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.key} delay={index * 120} className="relative">
              <GlassCard hoverLift className="h-full p-6 text-center">
                <div className="relative mx-auto w-fit">
                  <IconTile className="h-14 w-14 rounded-3xl [&>svg]:h-6 [&>svg]:w-6">
                    {step.icon}
                  </IconTile>
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#fde68a] to-[#f59e0b] text-xs font-bold text-[#78350f] shadow-sm"
                  >
                    {index + 1}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold tracking-wide text-primary-ink uppercase">
                  {t('how.step', { number: index + 1 })}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink">
                  {t(`how.steps.${step.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`how.steps.${step.key}.body`)}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
