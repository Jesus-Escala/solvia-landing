import { cx, Reveal } from '@/ui';
import {
  BarChart3,
  Boxes,
  Check,
  FileSpreadsheet,
  HandCoins,
  ShoppingCart,
  Sparkles,
  Truck,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../../components/Container';
import { SectionHeading } from '../../components/SectionHeading';
import { Section } from '../../components/Section';
import { useI18n } from '../../i18n/useI18n';
import { SECTION_IDS } from '../../lib/config';
import {
  CollectionsMock,
  DashboardMock,
  PurchasesMock,
  ReportsMock,
  SalesMock,
  StockMock,
} from './mocks';

type AreaKey = 'sales' | 'stock' | 'purchases' | 'collections' | 'dashboard' | 'reports';

/** `included`: every plan; otherwise the add-on module it belongs to. */
type Availability = 'included' | 'collectionsModule' | 'salesModule' | 'inventoryModule';

const AREAS: Array<{
  key: AreaKey;
  icon: ReactNode;
  availability: Availability;
  mock: ReactNode;
  points: number;
}> = [
  {
    key: 'sales',
    icon: <ShoppingCart />,
    availability: 'salesModule',
    mock: <SalesMock />,
    points: 4,
  },
  {
    key: 'stock',
    icon: <Boxes />,
    availability: 'inventoryModule',
    mock: <StockMock />,
    points: 4,
  },
  {
    key: 'purchases',
    icon: <Truck />,
    availability: 'inventoryModule',
    mock: <PurchasesMock />,
    points: 3,
  },
  {
    key: 'collections',
    icon: <HandCoins />,
    availability: 'collectionsModule',
    mock: <CollectionsMock />,
    points: 4,
  },
  {
    key: 'dashboard',
    icon: <BarChart3 />,
    availability: 'collectionsModule',
    mock: <DashboardMock />,
    points: 3,
  },
  {
    key: 'reports',
    icon: <FileSpreadsheet />,
    availability: 'included',
    mock: <ReportsMock />,
    points: 4,
  },
];

const anchor = (key: AreaKey) => `producto-${key}`;

/**
 * The product, area by area: selling, stock, purchases, collections, dashboard and reports. Each
 * one gets its own row (text + an illustrative screen, alternating sides) and says whether it
 * comes with a module (Cobranza, Ventas, Inventario) or with any of them (reports). Chips at the top jump to each area.
 */
export function Product() {
  const { t } = useI18n();

  return (
    <Section id={SECTION_IDS.features} labelledBy="product-title">
      <Container>
        <SectionHeading
          id="product-title"
          eyebrow={t('product.eyebrow')}
          title={t('product.title')}
          subtitle={t('product.subtitle')}
        />

        <nav aria-label={t('product.navLabel')} className="mt-8">
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]! sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            {AREAS.map((area) => (
              <li key={area.key} className="shrink-0">
                <a
                  href={`#${anchor(area.key)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink shadow-card transition hover:border-primary/40 hover:text-primary-ink [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary"
                >
                  {area.icon}
                  {t(`product.areas.${area.key}.name`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 space-y-24 sm:space-y-28">
          {AREAS.map((area, index) => {
            const flipped = index % 2 === 1;
            return (
              <article
                key={area.key}
                id={anchor(area.key)}
                aria-labelledby={`${anchor(area.key)}-title`}
                className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={cx(flipped && 'lg:order-2')}>
                  <p className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-ink [&>svg]:h-3.5 [&>svg]:w-3.5">
                      {area.icon}
                      {t(`product.areas.${area.key}.name`)}
                    </span>
                    <span
                      className={cx(
                        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold',
                        area.availability === 'included'
                          ? 'bg-success-soft text-success-ink'
                          : 'bg-accent/15 text-ink',
                      )}
                    >
                      {area.availability === 'included' ? (
                        <Check className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                      )}
                      {t(`product.availability.${area.availability}`)}
                    </span>
                  </p>
                  <h3
                    id={`${anchor(area.key)}-title`}
                    className="mt-4 font-display text-3xl leading-tight font-semibold text-balance text-ink sm:text-4xl"
                  >
                    {t(`product.areas.${area.key}.title`)}
                  </h3>
                  <p className="mt-3 text-base text-pretty text-muted sm:text-lg">
                    {t(`product.areas.${area.key}.body`)}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {Array.from({ length: area.points }, (_, point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-ink">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                          <Check className="h-3 w-3" aria-hidden="true" />
                        </span>
                        {t(`product.areas.${area.key}.points.p${point + 1}` as 'product.title')}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={120} className={cx('min-w-0', flipped && 'lg:order-1')}>
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-soft via-transparent to-accent/10 blur-2xl"
                    />
                    {area.mock}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
