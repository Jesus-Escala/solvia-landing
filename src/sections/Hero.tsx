import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { RequestAccessButton } from '../access/RequestAccessButton';
import { AuroraBackground } from '../components/AuroraBackground';
import { Container } from '../components/Container';
import { DashboardMock } from '../components/DashboardMock';
import { LinkButton } from '../components/LinkButton';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';

const TRUST_ITEMS = ['activation', 'noCard', 'currency'] as const;

/** Staggered entrance for the hero pieces (ms). */
const enter = (delay: number) => ({ animationDelay: `${delay}ms` });

export function Hero() {
  const { t } = useI18n();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <AuroraBackground />
      <Container className="relative grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div className="text-center lg:text-left">
          <p
            style={enter(0)}
            className="animate-page-in inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/80 px-3.5 py-1.5 text-xs font-semibold text-primary-ink backdrop-blur-sm sm:text-sm"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {t('hero.eyebrow')}
          </p>
          <a
            href={`#${SECTION_IDS.features}`}
            style={enter(40)}
            className="animate-page-in mt-3 flex w-fit items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pr-3 pl-1 text-xs font-medium text-ink shadow-xs backdrop-blur-sm transition hover:border-primary/40 max-lg:mx-auto sm:text-sm"
          >
            <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-on-primary">
              {t('hero.newBadge')}
            </span>
            {t('hero.newText')}
            <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          </a>
          <h1
            id="hero-title"
            style={enter(80)}
            className="animate-page-in mt-5 text-[2.6rem] leading-[1.04] font-semibold text-balance sm:text-6xl lg:text-7xl"
          >
            {t('hero.titleStart')}{' '}
            <span className="marker text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          <p
            style={enter(160)}
            className="animate-page-in mx-auto mt-5 max-w-xl text-base text-pretty text-muted sm:text-lg lg:mx-0"
          >
            {t('hero.subtitle')}
          </p>
          <div
            style={enter(240)}
            className="animate-page-in mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <RequestAccessButton size="lg" icon={<ArrowRight />}>
              {t('hero.primaryCta')}
            </RequestAccessButton>
            <LinkButton href={`#${SECTION_IDS.howItWorks}`} size="lg" variant="secondary">
              {t('hero.secondaryCta')}
            </LinkButton>
          </div>
          <ul
            aria-label={t('hero.trustLabel')}
            style={enter(320)}
            className="animate-page-in mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-subtle lg:justify-start"
          >
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                {t(`hero.trust.${item}`)}
              </li>
            ))}
          </ul>
        </div>

        <div style={enter(200)} className="animate-page-in">
          <DashboardMock />
        </div>
      </Container>
    </section>
  );
}
