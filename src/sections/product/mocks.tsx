import { cx, WhatsAppIcon } from '@/ui';
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCheck,
  Download,
  FileSpreadsheet,
  FileText,
  Minus,
  PackagePlus,
  Plus,
  ScanBarcode,
  Truck,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useI18n } from '../../i18n/useI18n';
import { CashFlowDemo, ReceivablesDemo } from './demos';

/*
 * Decorative, illustrative screens of each area of Solvia (sample data, not real metrics). The
 * section text says the same for assistive tech, so they are hidden from it.
 */

/** App window frame: title bar with dots and the screen name. */
export function AppWindow({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        'overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(15,59,54,0.45)] dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]/70" />
        </span>
        <span className="ml-2 truncate text-xs font-semibold text-muted">{title}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

const money = (value: number) => `S/ ${value.toFixed(2)}`;

/** Quick sale: search/scan, cart with steppers, cash or credit and the payment method. */
export function SalesMock() {
  const { t } = useI18n();
  const lines = [
    { name: 'Arroz Costeño 5 kg', qty: 1, price: 24.5 },
    { name: 'Aceite Primor 1 L', qty: 2, price: 11.9 },
    { name: 'Gaseosa Inca Kola 1.5 L', qty: 3, price: 6.5 },
  ];
  const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
  return (
    <AppWindow title={t('product.mocks.sales.title')}>
      <div className="flex items-center gap-2 rounded-xl border border-primary/40 bg-surface px-3 py-2 text-sm text-muted ring-3 ring-primary/10">
        <ScanBarcode className="h-4 w-4 text-primary" />
        <span className="truncate">{t('product.mocks.sales.search')}</span>
        <span className="ml-auto h-4 w-px animate-pulse bg-primary" />
      </div>
      <ul className="mt-3 divide-y divide-line rounded-xl border border-line">
        {lines.map((line, index) => (
          <li
            key={line.name}
            className="bento-row flex items-center gap-3 px-3 py-2"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <span className="min-w-0 flex-1 truncate text-sm font-medium">{line.name}</span>
            <span className="flex items-center rounded-lg border border-line text-xs">
              <Minus className="m-1.5 h-3 w-3 text-subtle" />
              <span className="w-5 text-center font-semibold tabular-nums">{line.qty}</span>
              <Plus className="m-1.5 h-3 w-3 text-subtle" />
            </span>
            <span className="w-16 text-right text-sm font-semibold tabular-nums">
              {money(line.qty * line.price)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <span className="rounded-xl bg-primary px-3 py-2 text-center font-semibold text-on-primary">
          {t('product.mocks.sales.cash')}
        </span>
        <span className="rounded-xl border border-line px-3 py-2 text-center font-medium text-muted">
          {t('product.mocks.sales.credit')}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="flex gap-1.5">
          {['yape', 'plin'].map((brand) => (
            <img key={brand} src={`/brands/${brand}.png`} alt="" className="h-7 w-7 rounded-lg" />
          ))}
        </span>
        <span className="rounded-xl bg-success px-4 py-2 text-sm font-bold text-white tabular-nums">
          {t('product.mocks.sales.charge', { amount: money(total) })}
        </span>
      </div>
    </AppWindow>
  );
}

/** Stock list with levels, statuses and the last movement. */
export function StockMock() {
  const { t } = useI18n();
  const rows = [
    { name: 'Azúcar rubia 1 kg', stock: 25, max: 30, status: 'ok' },
    { name: 'Aceite Primor 1 L', stock: 3, max: 30, status: 'low' },
    { name: 'Detergente Bolívar', stock: 0, max: 30, status: 'out' },
    { name: 'Leche Gloria 400 g', stock: 18, max: 30, status: 'ok' },
  ] as const;
  const tone = {
    ok: { bar: 'bg-success', badge: 'bg-success-soft text-success-ink' },
    low: { bar: 'bg-warning', badge: 'bg-warning-soft text-warning-ink' },
    out: { bar: 'bg-danger', badge: 'bg-danger-soft text-danger-ink' },
  };
  return (
    <AppWindow title={t('product.mocks.stock.title')}>
      <ul className="space-y-3">
        {rows.map((row, index) => (
          <li key={row.name} className="bento-row" style={{ animationDelay: `${index * 120}ms` }}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="min-w-0 truncate font-medium">{row.name}</span>
              <span className="flex items-center gap-2">
                <span className="font-semibold tabular-nums">{row.stock}</span>
                <span
                  className={cx(
                    'rounded-full px-2 py-0.5 text-[11px] font-semibold',
                    tone[row.status].badge,
                  )}
                >
                  {t(`product.mocks.stock.${row.status}`)}
                </span>
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-3">
              <div
                className={cx('bento-fill h-full rounded-full', tone[row.status].bar)}
                style={{ width: `${Math.max(3, (row.stock / row.max) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-surface-2 px-3 py-2 text-xs">
        <ArrowDownRight className="h-4 w-4 shrink-0 text-danger-ink" />
        <span className="min-w-0 flex-1 truncate text-muted">
          {t('product.mocks.stock.movement')}
        </span>
        <span className="font-semibold tabular-nums">−2</span>
      </div>
    </AppWindow>
  );
}

/** A purchase from a supplier: items with cost, stock going up and the costs updated. */
export function PurchasesMock() {
  const { t } = useI18n();
  const items = [
    { name: 'Aceite Primor 1 L', qty: 24, cost: 10.2 },
    { name: 'Arroz Costeño 5 kg', qty: 10, cost: 21.5 },
  ];
  return (
    <AppWindow title={t('product.mocks.purchases.title')}>
      <div className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary-ink">
          <Truck className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold">Distribuidora Lima Norte</span>
          <span className="block text-xs text-muted">{t('product.mocks.purchases.invoice')}</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/10 px-2 py-1 text-[11px] font-semibold text-[#128c7e]">
          <WhatsAppIcon className="h-3.5 w-3.5" />
          WhatsApp
        </span>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li
            key={item.name}
            className="bento-row flex items-center gap-3 rounded-xl bg-surface-2 px-3 py-2 text-sm"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <PackagePlus className="h-4 w-4 shrink-0 text-success-ink" />
            <span className="min-w-0 flex-1 truncate font-medium">{item.name}</span>
            <span className="text-xs text-muted tabular-nums">
              {item.qty} × {money(item.cost)}
            </span>
            <span className="rounded-full bg-success-soft px-2 py-0.5 text-[11px] font-semibold text-success-ink tabular-nums">
              +{item.qty}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-dashed border-line-strong px-3 py-2 text-sm">
        <span className="text-muted">{t('product.mocks.purchases.total')}</span>
        <span className="font-display text-lg font-semibold tabular-nums">
          {money(items.reduce((sum, item) => sum + item.qty * item.cost, 0))}
        </span>
      </div>
      <p className="mt-2 text-xs text-success-ink">{t('product.mocks.purchases.costs')}</p>
    </AppWindow>
  );
}

/** Collections: who owes what and the WhatsApp reminder that goes out by itself. */
export function CollectionsMock() {
  const { t } = useI18n();
  return (
    <div className="relative pt-16 sm:pt-0">
      <AppWindow title={t('product.mocks.collections.title')}>
        <ReceivablesDemo />
      </AppWindow>
      {/* The reminder that goes out by itself, floating over the window's corner. */}
      <div
        aria-hidden="true"
        className="bento-pop absolute top-0 right-2 w-60 rounded-2xl rounded-tr-sm border border-white/60 bg-[#dcfce7] p-3 text-[#14532d] shadow-pop sm:-top-10 sm:-right-4 dark:border-white/10 dark:bg-[#123524] dark:text-[#bbf7d0]"
      >
        <p className="flex items-center gap-1.5 text-[11px] font-semibold">
          <WhatsAppIcon className="h-3.5 w-3.5" />
          {t('features.demo.reminderSent')}
        </p>
        <p className="mt-1 text-xs leading-snug">{t('features.demo.reminderText')}</p>
        <p className="mt-1.5 flex items-center justify-between">
          <span className="rounded-md bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-[#0f766e] dark:bg-white/10 dark:text-[#6ee7b7]">
            {t('features.demo.payLink')}
          </span>
          <CheckCheck className="h-3.5 w-3.5 text-[#34b7f1]" />
        </p>
      </div>
    </div>
  );
}

/** Dashboard: collected vs last month, the week's cash-in and the payment methods. */
export function DashboardMock() {
  const { t } = useI18n();
  const methods = [
    { key: 'Yape', share: 42, color: 'bg-[#742384]' },
    { key: 'Plin', share: 23, color: 'bg-[#00b3a6]' },
    { key: t('product.mocks.dashboard.cash'), share: 20, color: 'bg-success' },
    { key: t('product.mocks.dashboard.transfer'), share: 15, color: 'bg-info' },
  ];
  return (
    <AppWindow title={t('product.mocks.dashboard.title')}>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-line p-3">
          <p className="text-xs text-muted">{t('product.mocks.dashboard.collected')}</p>
          <p className="font-display text-xl font-semibold tabular-nums">S/ 18,450</p>
          <p className="mt-0.5 inline-flex items-center gap-0.5 rounded-full bg-success-soft px-1.5 text-[11px] font-semibold text-success-ink">
            <ArrowUpRight className="h-3 w-3" />
            {t('product.mocks.dashboard.vsLast')}
          </p>
        </div>
        <div className="rounded-2xl border border-line p-3">
          <p className="text-xs text-muted">{t('product.mocks.dashboard.first')}</p>
          <p className="truncate text-sm font-semibold">Jorge Mendoza</p>
          <p className="text-xs text-danger-ink tabular-nums">
            {t('product.mocks.dashboard.owes')}
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-2xl border border-line p-3">
        <CashFlowDemo />
      </div>
      <div className="mt-3">
        <div className="flex h-2.5 overflow-hidden rounded-full">
          {methods.map((method) => (
            <span
              key={method.key}
              className={cx('bento-fill h-full', method.color)}
              style={{ width: `${method.share}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted">
          {methods.map((method) => (
            <span key={method.key} className="inline-flex items-center gap-1">
              <span className={cx('h-2 w-2 rounded-full', method.color)} />
              {method.key} {method.share}%
            </span>
          ))}
        </div>
      </div>
    </AppWindow>
  );
}

/** Reports: the Excel preview inside Solvia, with PDF / Excel and download. */
export function ReportsMock() {
  const { t } = useI18n();
  const rows = [
    ['Jorge Mendoza', '1,547.70', '5'],
    ['Ana Flores', '1,461.50', '2'],
    ['María Quispe', '1,162.50', '6'],
    ['Lucía Torres', '1,014.00', '4'],
  ];
  return (
    <AppWindow title={t('product.mocks.reports.title')}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-medium">
          <FileText className="h-3.5 w-3.5 text-danger-ink" />
          {t('product.mocks.reports.pdf')}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary-soft/60 px-2.5 py-1.5 text-xs font-semibold text-primary-ink">
          <FileSpreadsheet className="h-3.5 w-3.5 text-success-ink" />
          {t('product.mocks.reports.excel')}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-primary px-2.5 py-1.5 text-xs font-semibold text-on-primary">
          <Download className="h-3.5 w-3.5" />
          {t('product.mocks.reports.download')}
        </span>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-line text-[12px]">
        <div className="grid grid-cols-[28px_1.6fr_1fr_0.6fr] bg-surface-2 text-center text-[10px] font-medium text-subtle">
          {['', 'A', 'B', 'C'].map((letter) => (
            <span key={letter} className="border-r border-line py-1 last:border-r-0">
              {letter}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-[28px_1.6fr_1fr_0.6fr] border-t border-line font-semibold">
          <span className="border-r border-line bg-surface-2 py-1.5 text-center text-[10px] text-subtle">
            1
          </span>
          <span className="border-r border-line px-2 py-1.5">
            {t('product.mocks.reports.customer')}
          </span>
          <span className="border-r border-line px-2 py-1.5 text-right">
            {t('product.mocks.reports.paid')}
          </span>
          <span className="px-2 py-1.5 text-right">{t('product.mocks.reports.payments')}</span>
        </div>
        {rows.map((row, index) => (
          <div
            key={row[0]}
            className="bento-row grid grid-cols-[28px_1.6fr_1fr_0.6fr] border-t border-line"
            style={{ animationDelay: `${index * 110}ms` }}
          >
            <span className="border-r border-line bg-surface-2 py-1.5 text-center text-[10px] text-subtle">
              {index + 2}
            </span>
            <span className="truncate border-r border-line px-2 py-1.5">{row[0]}</span>
            <span className="border-r border-line px-2 py-1.5 text-right tabular-nums">
              S/ {row[1]}
            </span>
            <span className="px-2 py-1.5 text-right tabular-nums">{row[2]}</span>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}
