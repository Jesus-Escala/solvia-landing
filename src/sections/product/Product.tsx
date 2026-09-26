import { cx, Reveal } from '@/ui';
import {
  BarChart3,
  Boxes,
  Check,
  Compass,
  Contact,
  FileSpreadsheet,
  HandCoins,
  Languages,
  Map as MapIcon,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
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
import { LocationsMock, MastersMock } from './moreMocks';

type AreaKey =
  | 'sales'
  | 'collections'
  | 'purchases'
  | 'stock'
  | 'masters'
  | 'locations'
  | 'dashboard'
  | 'reports';

/** The areas of the app, like its menu: the three modules, the records, the tools and results. */
type GroupKey = 'commercial' | 'receivables' | 'logistics' | 'masters' | 'tools' | 'results';

/** Which module brings an area, or that it comes with the modules / in every plan. */
type Availability =
  | 'salesModule'
  | 'collectionsModule'
  | 'inventoryModule'
  | 'withModules'
  | 'allPlans'
  | 'byModules';

const AREAS: Array<{
  key: AreaKey;
  group: GroupKey;
  icon: ReactNode;
  availability: Availability;
  mock: ReactNode;
  points: number;
}> = [
  {
    key: 'sales',
    group: 'commercial',
    icon: <ShoppingCart />,
    availability: 'salesModule',
    mock: <SalesMock />,
    points: 6,
  },
  {
    key: 'collections',
    group: 'receivables',
    icon: <HandCoins />,
    availability: 'collectionsModule',
    mock: <CollectionsMock />,
    points: 4,
  },
  {
    key: 'purchases',
    group: 'logistics',
    icon: <Truck />,
    availability: 'inventoryModule',
    mock: <PurchasesMock />,
    points: 3,
  },
  {
    key: 'stock',
    group: 'logistics',
    icon: <Boxes />,
    availability: 'inventoryModule',
    mock: <StockMock />,
    points: 4,
  },
  {
    key: 'masters',
    group: 'masters',
    icon: <Contact />,
    availability: 'withModules',
    mock: <MastersMock />,
    points: 4,
  },
  {
    key: 'locations',
    group: 'tools',
    icon: <MapIcon />,
    availability: 'allPlans',
    mock: <LocationsMock />,
    points: 4,
  },
  {
    key: 'dashboard',
    group: 'results',
    icon: <BarChart3 />,
    availability: 'byModules',
    mock: <DashboardMock />,
    points: 4,
  },
  {
    key: 'reports',
    group: 'results',
    icon: <FileSpreadsheet />,
    availability: 'byModules',
    mock: <ReportsMock />,
    points: 4,
  },
];

/** The groups in menu order, each linking to its first area and with its icon. */
const GROUPS = AREAS.reduce<Array<{ key: GroupKey; first: AreaKey; icon: ReactNode }>>(
  (groups, area) =>
    groups.some((group) => group.key === area.group)
      ? groups
      : [...groups, { key: area.group, first: area.key, icon: area.icon }],
  [],
);

/** Everyday things that come with every plan. */
const EXTRAS = [
  { key: 'tour', icon: <Compass /> },
  { key: 'language', icon: <Languages /> },
  { key: 'phone', icon: <Smartphone /> },
  { key: 'team', icon: <ShieldCheck /> },
] as const;

const anchor = (key: AreaKey) => `producto-${key}`;

/** Paid modules get the accent badge; what comes with them or with every plan, the green one. */
const isModule = (availability: Availability) => availability.endsWith('Module');

/**
 * The product, area by area and grouped like the app's menu: Comercial, Cuentas por cobrar and
 * Logística (the three modules), Mantenimientos (customers, products and suppliers, which come
 * with the modules), Herramientas (locations, every plan) and Resultados (dashboard and reports,
 * showing what the modules bring). Each area gets its own row (text + an illustrative screen,
 * alternating sides); chips at the top jump to each group, and the extras of every plan close it.
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
            {GROUPS.map((group) => (
              <li key={group.key} className="shrink-0">
                <a
                  href={`#${anchor(group.first)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink shadow-card transition hover:border-primary/40 hover:text-primary-ink [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-primary"
                >
                  {group.icon}
                  {t(`product.groups.${group.key}`)}
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
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">
                    {t(`product.groups.${area.group}`)}
                  </p>
                  <p className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-ink [&>svg]:h-3.5 [&>svg]:w-3.5">
                      {area.icon}
                      {t(`product.areas.${area.key}.name`)}
                    </span>
                    <span
                      className={cx(
                        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold',
                        isModule(area.availability)
                          ? 'bg-accent/15 text-ink'
                          : 'bg-success-soft text-success-ink',
                      )}
                    >
                      {isModule(area.availability) ? (
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <Check className="h-3 w-3" aria-hidden="true" />
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

        <Reveal className="mt-24">
          <h3 className="text-center font-display text-2xl font-semibold text-ink sm:text-3xl">
            {t('product.extras.title')}
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRAS.map((extra) => (
              <li
                key={extra.key}
                className="rounded-2xl border border-line bg-surface p-5 shadow-card"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary-ink [&>svg]:h-5 [&>svg]:w-5">
                  {extra.icon}
                </span>
                <p className="mt-3 font-semibold text-ink">
                  {t(`product.extras.items.${extra.key}.title`)}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t(`product.extras.items.${extra.key}.body`)}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
