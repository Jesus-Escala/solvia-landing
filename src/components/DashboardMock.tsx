import { Badge, cx, Mascot, WhatsAppIcon } from '@/ui';
import { Link2, PackageMinus, ShoppingCart } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { CashFlowChart } from './CashFlowChart';
import { Drift } from './Drift';
import { GlassCard } from './GlassCard';

// Illustrative sample data for the product preview (not real metrics).
const SOLD = [3200, 4100, 3600, 5200, 4800, 6100];
const PROJECTION = [3500, 3900, 4300, 4700, 5300, 5900];
const SAMPLE_AMOUNT = 350;
const SAMPLE_SALE = 45.5;

/**
 * Stylized, decorative preview of Solvia: sales, what is owed and stock at a glance, with a
 * WhatsApp reminder and a sale floating around it.
 */
export function DashboardMock({ className }: { className?: string }) {
  const { t, fmt } = useI18n();

  return (
    <figure className={cx('relative mx-auto w-full max-w-lg pt-20', className)}>
      <figcaption className="sr-only">{t('mock.label')}</figcaption>
      <div aria-hidden="true">
        {/* Bowl perches on the top edge of the card, waving. */}
        <Mascot
          size={92}
          mood="wave"
          className="absolute top-0.5 right-6 z-10 drop-shadow-md sm:right-10"
        />

        <GlassCard className="p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-ink">{t('mock.title')}</p>
            <Badge tone="primary">{t('mock.period')}</Badge>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              {
                key: 'sold',
                label: t('mock.sold'),
                value: fmt.compactMoney(18450),
                tone: 'text-success-ink',
              },
              {
                key: 'receivable',
                label: t('mock.receivable'),
                value: fmt.compactMoney(12300),
                tone: 'text-ink',
              },
              {
                key: 'lowStock',
                label: t('mock.lowStock'),
                value: t('mock.lowStockValue'),
                tone: 'text-warning-ink',
              },
            ].map((kpi) => (
              <div
                key={kpi.key}
                className="min-w-0 rounded-2xl border border-line/70 bg-surface/80 p-2.5 sm:p-3"
              >
                <dt className="truncate text-[11px] text-muted sm:text-xs">{kpi.label}</dt>
                <dd
                  className={cx(
                    'mt-0.5 truncate text-sm font-bold tabular-nums sm:text-base',
                    kpi.tone,
                  )}
                >
                  {kpi.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-3 rounded-2xl border border-line/70 bg-surface/80 p-3">
            <p className="mb-2 text-xs font-medium text-muted">{t('mock.chartTitle')}</p>
            <CashFlowChart
              bars={SOLD}
              projection={PROJECTION}
              labels={t('mock.weeks').split(',')}
              title={t('mock.chartLabel')}
            />
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-line/70 bg-surface/80 px-3 py-2.5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning-ink">
                <PackageMinus className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{t('mock.product')}</p>
                <p className="text-xs text-muted">{t('mock.productLeft')}</p>
              </div>
            </div>
            <Badge tone="warning" dot>
              {t('mock.runningLow')}
            </Badge>
          </div>
        </GlassCard>

        {/* WhatsApp reminder bubble */}
        <Drift
          duration={11}
          delay={-2}
          className="absolute top-[15.5rem] -left-1 z-20 w-52 sm:top-[17rem] sm:-left-10 sm:w-60 lg:-left-6"
        >
          <div
            style={{ animationDelay: '700ms', animationDuration: '420ms' }}
            className="animate-pop-in rounded-2xl rounded-tl-sm border border-white/60 bg-[#dcfce7]/95 p-3 text-[#14532d] shadow-pop backdrop-blur-md dark:border-white/10 dark:bg-[#123524]/95 dark:text-[#bbf7d0]"
          >
            <p className="flex items-center gap-1.5 text-[11px] font-semibold">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {t('mock.reminderApp')}
            </p>
            <p className="mt-1 text-xs leading-snug">
              {t('mock.reminderText', { amount: fmt.money(SAMPLE_AMOUNT) })}
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-[#0f766e] dark:bg-white/10 dark:text-[#6ee7b7]">
              <Link2 className="h-3 w-3" />
              {t('mock.reminderLink')}
            </p>
          </div>
        </Drift>

        {/* Payment received toast */}
        <Drift duration={9} delay={-5} className="absolute -right-1 -bottom-14 z-20 sm:-right-10">
          <div
            style={{ animationDelay: '1000ms', animationDuration: '420ms' }}
            className="animate-pop-in flex items-center gap-2.5 rounded-2xl border border-white/60 bg-surface/90 py-2.5 pr-4 pl-3 shadow-pop backdrop-blur-md dark:border-white/10"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-soft text-success-ink">
              <ShoppingCart className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">{t('mock.toastTitle')}</p>
              <p className="text-[11px] text-muted tabular-nums">
                {t('mock.toastBody', { number: 128, amount: fmt.money(SAMPLE_SALE) })}
              </p>
            </div>
          </div>
        </Drift>
      </div>
    </figure>
  );
}
