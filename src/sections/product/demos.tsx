import { cx } from '@/ui';
import { useI18n } from '../../i18n/useI18n';

/*
 * Small live demos inside the product section (decorative: the text next to them says the same
 * for assistive tech). They play when they scroll into view (see `.bento-*` in index.css).
 */

/** Weekly cash-in bars growing one after another. */
export function CashFlowDemo() {
  const { t } = useI18n();
  const bars = [42, 64, 50, 78, 58, 92];
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-xs text-muted">{t('features.demo.cashIn')}</p>
        <p className="font-display text-xl font-semibold tabular-nums">S/ 4,820</p>
      </div>
      <div className="mt-3 flex h-28 items-end gap-2">
        {bars.map((height, index) => (
          <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
            <div
              className={cx(
                'bento-bar w-full rounded-t-lg',
                index === bars.length - 1 ? 'bg-accent' : 'bg-primary/70',
              )}
              style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }}
            />
            <span className="text-[10px] text-subtle">
              {t('features.demo.week', { number: index + 1 })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Customers with their receivable status. */
export function ReceivablesDemo() {
  const { t } = useI18n();
  const rows = [
    {
      name: 'Rosa Quispe',
      amount: 'S/ 350.00',
      status: t('features.demo.statusPaid'),
      tone: 'bg-success-soft text-success-ink',
    },
    {
      name: 'Jorge Mendoza',
      amount: 'S/ 820.50',
      status: t('features.demo.statusPartial'),
      tone: 'bg-warning-soft text-warning-ink',
    },
    {
      name: 'Lucía Torres',
      amount: 'S/ 468.00',
      status: t('features.demo.statusPending'),
      tone: 'bg-surface-3 text-muted',
    },
    {
      name: 'Ana Flores',
      amount: 'S/ 592.50',
      status: t('features.demo.statusOverdue'),
      tone: 'bg-danger-soft text-danger-ink',
    },
  ];
  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {rows.map((row, index) => (
        <li
          key={row.name}
          className="bento-row flex items-center gap-3 px-3 py-2"
          style={{ animationDelay: `${index * 110}ms` }}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[10px] font-semibold text-primary-ink">
            {row.name
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </span>
          <span className="min-w-0 flex-1 truncate text-sm font-medium">{row.name}</span>
          <span className="text-sm tabular-nums">{row.amount}</span>
          <span className={cx('rounded-full px-2 py-0.5 text-[11px] font-semibold', row.tone)}>
            {row.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
