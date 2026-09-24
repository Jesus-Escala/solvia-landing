import {
  Banknote,
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
import { WhatsAppIcon } from '../components/WhatsAppIcon';
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
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink shadow-card [&>img]:h-5 [&>img]:w-5 [&>img]:rounded-md [&>svg]:h-4 [&>svg]:w-4">
      {children}
    </span>
  );
}

/**
 * Right under the hero: the payment methods and the channel Solvia works with, and a slow
 * ribbon of the kinds of businesses it is made for.
 */
export function TrustStrip() {
  const { t } = useI18n();
  return (
    <section
      aria-label={t('trust.madeFor')}
      className="relative border-y border-line bg-surface-2/70 py-8"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-xs font-semibold tracking-wide text-subtle uppercase">
              {t('trust.payLabel')}
            </span>
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
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-1 text-xs font-semibold tracking-wide text-subtle uppercase">
              {t('trust.remindLabel')}
            </span>
            <Chip>
              <WhatsAppIcon />
              WhatsApp
            </Chip>
          </div>
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
