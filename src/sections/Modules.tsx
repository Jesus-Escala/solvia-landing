import { cx, Reveal } from '@/ui';
import { ArrowRight, Boxes, Check, FileSpreadsheet, ScanBarcode, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { RequestAccessButton } from '../access/RequestAccessButton';
import { Container } from '../components/Container';
import { IconTile } from '../components/IconTile';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';
import { ADD_ONS, ADD_ONS_BUNDLE_PRICE, type AddOn, type ModuleId } from './plans';

const ICONS: Record<ModuleId, ReactNode> = {
  sales: <ScanBarcode />,
  inventory: <Boxes />,
};

/** Price without trailing zeros: "S/ 29". */
function usePrice() {
  const { fmt } = useI18n();
  return (amount: number) => fmt.money(amount).replace(/[.,]00$/, '');
}

function AddOnCard({ addOn }: { addOn: AddOn }) {
  const { t } = useI18n();
  const price = usePrice();
  const titleId = `module-${addOn.id}-title`;
  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 shadow-card transition duration-300 ease-(--ease-out) hover:-translate-y-1 hover:shadow-pop sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <IconTile>{ICONS[addOn.id]}</IconTile>
        <p className="text-right">
          <span className="text-2xl font-extrabold tracking-tight text-ink tabular-nums">
            +{price(addOn.monthlyPrice)}
          </span>
          <span className="text-sm font-medium text-muted">{t('pricing.perMonth')}</span>
        </p>
      </div>
      <h3 id={titleId} className="mt-5 text-lg font-semibold text-ink">
        {t(`modules.${addOn.id}.name`)}
      </h3>
      <p className="mt-1 text-sm text-pretty text-muted">{t(`modules.${addOn.id}.description`)}</p>
      <ul className="mt-5 space-y-2.5">
        {addOn.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            {t(`modules.${addOn.id}.points.${point}` as Parameters<typeof t>[0])}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <RequestAccessButton modules={[addOn.id]} variant="secondary" className="w-full">
          {t(`modules.${addOn.id}.cta`)}
        </RequestAccessButton>
      </div>
    </article>
  );
}

/**
 * Add-on modules: Ventas and Inventario, added to any plan for an extra monthly price, plus the
 * bundle of both. Every CTA opens the request form with the module checked.
 */
export function Modules() {
  const { t } = useI18n();
  const price = usePrice();
  const separate = ADD_ONS.reduce((sum, addOn) => sum + addOn.monthlyPrice, 0);

  return (
    <Section
      id={SECTION_IDS.modules}
      labelledBy="modules-title"
      className="bg-surface-2/60 dark:bg-surface/40"
    >
      <Container>
        <SectionHeading
          id="modules-title"
          eyebrow={t('modules.eyebrow')}
          title={t('modules.title')}
          subtitle={t('modules.subtitle')}
        />
        <ul className="mx-auto mt-14 grid max-w-md gap-6 lg:max-w-4xl lg:grid-cols-2">
          {ADD_ONS.map((addOn, index) => (
            <Reveal as="li" key={addOn.id} delay={index * 100} className="h-full">
              <AddOnCard addOn={addOn} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <div
            className={cx(
              'mx-auto mt-6 flex max-w-md flex-col items-center gap-4 rounded-3xl border border-primary/40 p-6 text-center shadow-card sm:p-7 lg:max-w-4xl lg:flex-row lg:text-left',
              'bg-gradient-to-r from-primary-soft to-surface',
            )}
          >
            <IconTile>
              <Sparkles />
            </IconTile>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold text-ink">
                {t('modules.bundle.title', { price: price(ADD_ONS_BUNDLE_PRICE) })}
              </p>
              <p className="mt-1 text-sm text-muted">
                {t('modules.bundle.body', { saving: price(separate - ADD_ONS_BUNDLE_PRICE) })}
              </p>
            </div>
            <RequestAccessButton
              modules={ADD_ONS.map((addOn) => addOn.id)}
              icon={<ArrowRight />}
              className="w-full lg:w-auto"
            >
              {t('modules.bundle.cta')}
            </RequestAccessButton>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-balance text-subtle">
            <FileSpreadsheet className="mr-1.5 inline h-4 w-4 align-[-3px]" aria-hidden="true" />
            {t('modules.note')}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
