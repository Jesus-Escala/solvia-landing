import { WhatsAppIcon } from '@/ui';
import {
  Banknote,
  FileSpreadsheet,
  ScanBarcode,
  Briefcase,
  Hammer,
  HeartPulse,
  Landmark,
  Pill,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Truck,
  UtensilsCrossed,
  Warehouse,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { useI18n } from '../i18n/useI18n';

type Industry =
  | 'grocery'
  | 'hardware'
  | 'wholesale'
  | 'restaurant'
  | 'pharmacy'
  | 'clothing'
  | 'technology'
  | 'professional'
  | 'health'
  | 'transport';

const INDUSTRIES: Array<{ key: Industry; icon: ReactNode }> = [
  { key: 'grocery', icon: <ShoppingBasket /> },
  { key: 'hardware', icon: <Hammer /> },
  { key: 'wholesale', icon: <Warehouse /> },
  { key: 'restaurant', icon: <UtensilsCrossed /> },
  { key: 'pharmacy', icon: <Pill /> },
  { key: 'clothing', icon: <Shirt /> },
  { key: 'technology', icon: <Smartphone /> },
  { key: 'professional', icon: <Briefcase /> },
  { key: 'health', icon: <HeartPulse /> },
  { key: 'transport', icon: <Truck /> },
];

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[13px] font-medium whitespace-nowrap text-ink shadow-card [&>img]:h-4 [&>img]:w-4 [&>img]:rounded [&>svg]:h-4 [&>svg]:w-4">
      {children}
    </span>
  );
}

/**
 * A label and its chips. Phones: the label on top and the chips in one row that scrolls
 * sideways (never piling up); large screens: everything inline.
 */
function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-2 lg:flex-row lg:gap-2.5">
      <span className="text-[11px] font-semibold tracking-wide whitespace-nowrap text-subtle uppercase">
        {label}
      </span>
      <div className="-mx-4 flex max-w-[100vw] gap-1.5 overflow-x-auto px-4 pb-0.5 [scrollbar-width:none]! sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 lg:flex-nowrap max-sm:[mask-image:linear-gradient(90deg,transparent,black_16px,black_calc(100%-16px),transparent)] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </div>
  );
}

/**
 * Right under the hero: the payment methods and what Solvia works with (one row on large
 * screens), and a slow ribbon of the kinds of businesses it is made for.
 */
export function TrustStrip() {
  const { t } = useI18n();
  return (
    <section
      aria-label={t('trust.madeFor')}
      className="relative border-y border-line bg-surface-2/70 py-6 sm:py-7"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6">
          <Group label={t('trust.payLabel')}>
            <Chip>
              <img src="/brands/yape.png" alt="" />
              Yape
            </Chip>
            <Chip>
              <img src="/brands/plin.png" alt="" />
              Plin
            </Chip>
            <Chip>
              <Banknote className="text-success" />
              {t('trust.cash')}
            </Chip>
            <Chip>
              <Landmark className="text-info" />
              {t('trust.transfer')}
            </Chip>
          </Group>
          <span aria-hidden="true" className="hidden h-6 w-px bg-line-strong lg:block" />
          <Group label={t('trust.worksWith')}>
            <Chip>
              <WhatsAppIcon />
              WhatsApp
            </Chip>
            <Chip>
              <ScanBarcode className="text-primary" />
              {t('trust.barcode')}
            </Chip>
            <Chip>
              <FileSpreadsheet className="text-success" />
              {t('trust.reports')}
            </Chip>
          </Group>
        </div>
      </Container>

      {/* Ribbon of industries: duplicated once so the loop is seamless */}
      <div
        className="marquee group mt-6 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <p className="sr-only">{t('trust.madeFor')}</p>
        <ul
          className="marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {[...INDUSTRIES, ...INDUSTRIES].map((industry, index) => (
            <li
              key={`${industry.key}-${index}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary-soft/70 px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-primary-ink [&>svg]:h-4 [&>svg]:w-4"
            >
              {industry.icon}
              {t(`access.industries.${industry.key}`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
