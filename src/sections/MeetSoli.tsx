import { Badge, Mascot, Reveal } from '@/ui';
import { BookOpen, Compass, MessagesSquare } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { Drift } from '../components/Drift';
import { IconTile } from '../components/IconTile';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';

const POINTS: Array<{ key: 'tour' | 'help' | 'chat'; icon: ReactNode; soon?: boolean }> = [
  { key: 'tour', icon: <Compass /> },
  { key: 'help', icon: <BookOpen /> },
  { key: 'chat', icon: <MessagesSquare />, soon: true },
];

export function MeetSoli() {
  const { t } = useI18n();

  return (
    <Section labelledBy="soli-title" className="overflow-hidden">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative mx-auto flex w-full max-w-sm flex-col items-center">
          {/* Soft halo behind the mascot */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-10 bottom-0 rounded-full bg-gradient-to-br from-[#2dd4bf]/35 via-[#a7f3d0]/30 to-[#fde68a]/40 blur-3xl dark:from-[#0f766e]/40 dark:via-[#134e4a]/30 dark:to-[#78350f]/30"
          />
          <Drift duration={12} className="relative z-10 mb-3 self-center sm:self-end">
            <p className="rounded-2xl rounded-br-sm border border-white/60 bg-surface/85 px-4 py-2.5 text-sm font-medium text-ink shadow-pop backdrop-blur-md dark:border-white/10">
              {t('soli.greeting')}
            </p>
          </Drift>
          <Mascot size={220} mood="happy" title="Soli" className="relative drop-shadow-xl" />
        </Reveal>

        <div>
          <SectionHeading
            id="soli-title"
            align="left"
            eyebrow={t('soli.eyebrow')}
            title={t('soli.title')}
            subtitle={t('soli.body')}
          />
          <ul className="mt-8 space-y-4">
            {POINTS.map((point, index) => (
              <Reveal as="li" key={point.key} delay={index * 80}>
                <div className="flex gap-4 rounded-2xl border border-line bg-surface/80 p-4 shadow-card transition duration-300 ease-(--ease-out) hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-pop">
                  <IconTile>{point.icon}</IconTile>
                  <div className="min-w-0">
                    <h3 className="flex flex-wrap items-center gap-2 font-semibold text-ink">
                      {t(`soli.points.${point.key}.title`)}
                      {point.soon && <Badge tone="warning">{t('soli.points.chat.badge')}</Badge>}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{t(`soli.points.${point.key}.body`)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
