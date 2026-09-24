import { Reveal } from '@/ui';
import { HandCoins, MessageCircle, UserPlus } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';

const STEPS: Array<{ key: 'register' | 'remind' | 'collect'; icon: ReactNode }> = [
  { key: 'register', icon: <UserPlus /> },
  { key: 'remind', icon: <MessageCircle /> },
  { key: 'collect', icon: <HandCoins /> },
];

/**
 * Three steps on a deep petrol band (breaks the run of light sections). The connector draws
 * itself when the steps scroll into view.
 */
export function HowItWorks() {
  const { t } = useI18n();

  return (
    <Section
      id={SECTION_IDS.howItWorks}
      labelledBy="how-title"
      className="relative overflow-hidden bg-[#0f3b36] text-white dark:bg-[#0c2724]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="auth-blob absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#2f9c88]/30 blur-3xl" />
        <div className="auth-blob absolute -right-24 -bottom-40 h-96 w-96 rounded-full bg-[#dcaa4c]/20 blur-3xl [animation-delay:-8s]" />
      </div>
      <Container className="relative">
        <SectionHeading
          inverted
          id="how-title"
          eyebrow={t('how.eyebrow')}
          title={t('how.title')}
          subtitle={t('how.subtitle')}
        />
        <Reveal as="div" className="how-steps relative mt-14">
          {/* Connector drawn behind the step badges on wide screens */}
          <span
            aria-hidden="true"
            className="how-line absolute top-7 right-[16.66%] left-[16.66%] hidden h-px bg-linear-to-r from-[#e9c77f]/20 via-[#e9c77f]/80 to-[#e9c77f]/20 md:block"
          />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, index) => (
              <li
                key={step.key}
                className="how-step relative text-center"
                style={{ animationDelay: `${250 + index * 220}ms` }}
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17524b] text-white shadow-[0_0_0_6px_#0f3b36] ring-1 ring-white/20 dark:bg-[#143f3a] dark:shadow-[0_0_0_6px_#0c2724] [&>svg]:h-6 [&>svg]:w-6">
                  {step.icon}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#e9c77f] text-xs font-bold text-[#3d2a05]"
                  >
                    {index + 1}
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold tracking-wide text-[#e9c77f] uppercase">
                  {t('how.step', { number: index + 1 })}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  {t(`how.steps.${step.key}.title`)}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/70">
                  {t(`how.steps.${step.key}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}
