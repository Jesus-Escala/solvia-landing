import { Accordion } from '../components/Accordion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';

const QUESTIONS = [
  'signup',
  'whatsapp',
  'security',
  'plans',
  'google',
  'currency',
  'cancel',
] as const;

export function Faq() {
  const { t } = useI18n();
  const items = QUESTIONS.map((key) => ({
    id: key,
    question: t(`faq.items.${key}.question`),
    answer: t(`faq.items.${key}.answer`),
  }));

  return (
    <Section
      id={SECTION_IDS.faq}
      labelledBy="faq-title"
      className="bg-surface-2/60 dark:bg-surface/40"
    >
      <Container className="max-w-3xl">
        <SectionHeading
          id="faq-title"
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
        />
        <div className="mt-10">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
