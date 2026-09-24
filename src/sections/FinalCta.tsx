import { Mascot, Reveal } from '@/ui';
import { ArrowRight } from 'lucide-react';
import { RequestAccessButton } from '../access/RequestAccessButton';
import { Container } from '../components/Container';
import { LinkButton } from '../components/LinkButton';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { LOGIN_URL } from '../lib/config';

/** Closing call to action on a deep teal band with Soli. */
export function FinalCta() {
  const { t } = useI18n();

  return (
    <Section labelledBy="final-cta-title">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-[#0f3b36] px-6 py-12 text-white shadow-pop sm:px-12 sm:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="auth-blob absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#2f9c88]/35 blur-3xl" />
            <div className="auth-blob absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-[#dcaa4c]/25 blur-3xl [animation-delay:-8s]" />
          </div>
          <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <Mascot size={140} mood="happy" className="shrink-0 drop-shadow-xl" />
            <div className="flex-1">
              <h2
                id="final-cta-title"
                className="font-display text-[2.1rem] leading-[1.1] font-semibold text-balance sm:text-5xl"
              >
                {t('finalCta.title')}
              </h2>
              <p className="mt-3 text-base text-white/85 sm:text-lg">{t('finalCta.body')}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <RequestAccessButton size="lg" variant="inverse" icon={<ArrowRight />}>
                {t('finalCta.primary')}
              </RequestAccessButton>
              <LinkButton href={LOGIN_URL} size="lg" variant="light">
                {t('finalCta.secondary')}
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
