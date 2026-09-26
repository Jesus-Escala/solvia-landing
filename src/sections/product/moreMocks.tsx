import { cx } from '@/ui';
import { Printer, Search } from 'lucide-react';
import { useI18n } from '../../i18n/useI18n';
import { AppWindow } from './mocks';

/*
 * More illustrative screens (sample data): the records (customers, products, suppliers) and the
 * floor plan in 3D. Decorative: the section text says the same for assistive tech.
 */

const money = (value: number) => `S/ ${value.toFixed(2)}`;

/** A fixed, QR-looking pattern (decorative): finder squares in three corners and dots. */
function FakeQr({ size = 72 }: { size?: number }) {
  const cells = 21;
  const inFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= cells - 7 && y < 7) || (x < 7 && y >= cells - 7);
  const finderOn = (x: number, y: number) => {
    const fx = x < 7 ? x : x - (cells - 7);
    const fy = y < 7 ? y : y - (cells - 7);
    return (
      fx === 0 || fx === 6 || fy === 0 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4)
    );
  };
  const squares: Array<[number, number]> = [];
  for (let y = 0; y < cells; y += 1) {
    for (let x = 0; x < cells; x += 1) {
      const on = inFinder(x, y) ? finderOn(x, y) : (x * 7 + y * 13 + x * y) % 3 === 0;
      if (on) squares.push([x, y]);
    }
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`-1 -1 ${cells + 2} ${cells + 2}`}
      className="rounded-md bg-white"
    >
      {squares.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#0f172a" />
      ))}
    </svg>
  );
}

/** Customers, products and suppliers: a product with its category, code, QR and labels. */
export function MastersMock() {
  const { t } = useI18n();
  return (
    <AppWindow title={t('product.mocks.masters.title')}>
      <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
        {(['customers', 'products', 'suppliers'] as const).map((tab) => (
          <span
            key={tab}
            className={cx(
              'rounded-full px-3 py-1',
              tab === 'products' ? 'bg-primary text-on-primary' : 'bg-surface-2 text-muted',
            )}
          >
            {t(`product.mocks.masters.${tab}`)}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-surface-2 p-3">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent/20 font-display text-xl font-semibold text-ink">
          AP
        </span>
        <span className="min-w-0 flex-1">
          <span className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-semibold text-muted">
            {t('product.mocks.masters.category')}
          </span>
          <span className="mt-1 block truncate font-semibold">
            {t('product.mocks.masters.product')}
          </span>
          <span className="block font-display text-xl font-semibold text-primary-ink tabular-nums">
            {money(11.9)}
          </span>
        </span>
        <span className="shrink-0 text-center">
          <FakeQr size={64} />
          <span className="mt-1 block font-mono text-[11px] font-semibold tracking-wider">
            20000016
          </span>
        </span>
      </div>
      {/* The two label sizes: shelf (big price) and product. */}
      <div className="mt-3 grid grid-cols-[1.4fr_1fr] gap-2">
        <div className="bento-row flex items-center gap-2 rounded-xl border border-dashed border-line-strong p-2">
          <FakeQr size={40} />
          <span className="min-w-0">
            <span className="block text-[10px] text-muted">{t('product.mocks.masters.shelf')}</span>
            <span className="block text-lg leading-tight font-bold tabular-nums">
              {money(11.9)}
            </span>
          </span>
        </div>
        <div
          className="bento-row flex items-center gap-2 rounded-xl border border-dashed border-line-strong p-2"
          style={{ animationDelay: '140ms' }}
        >
          <FakeQr size={30} />
          <span className="text-[10px] text-muted">{t('product.mocks.masters.small')}</span>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <span className="inline-flex items-center gap-1.5 rounded-xl border border-line px-3 py-1.5 text-xs font-semibold">
          <Printer className="h-3.5 w-3.5" />
          {t('product.mocks.masters.print')}
        </span>
      </div>
    </AppWindow>
  );
}

const BLOCKS = [
  { key: 'shelfA', x: 6, y: 10, w: 36, h: 14, color: '#0d9488', found: false },
  { key: 'shelfB', x: 6, y: 42, w: 36, h: 14, color: '#2563eb', found: true },
  { key: 'fridge', x: 56, y: 10, w: 38, h: 14, color: '#0891b2', found: false },
  { key: 'till', x: 62, y: 62, w: 30, h: 22, color: '#d97706', found: false },
] as const;
const LIFT = 12;

/** The floor plan in 3D: raised shelves, one found by "Where is it?". */
export function LocationsMock() {
  const { t } = useI18n();
  return (
    <AppWindow title={t('product.mocks.locations.title')}>
      <div className="flex items-center gap-2 rounded-xl border border-primary/40 bg-surface px-3 py-2 text-sm ring-3 ring-primary/10">
        <Search className="h-4 w-4 text-primary" />
        <span className="truncate text-muted">{t('product.mocks.locations.search')}</span>
      </div>
      <div className="relative mt-3 h-56 overflow-hidden rounded-2xl bg-surface-2 [perspective:900px]">
        <div
          className="absolute top-1/2 left-1/2 h-40 w-64 rounded-lg border border-line bg-surface shadow-card [transform-style:preserve-3d]"
          style={{
            transform: 'translate(-50%, -55%) rotateX(55deg) rotateZ(-22deg)',
            backgroundImage:
              'linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        >
          {BLOCKS.map((block) => (
            <div
              key={block.key}
              className="absolute [transform-style:preserve-3d]"
              style={{
                left: `${block.x}%`,
                top: `${block.y}%`,
                width: `${block.w}%`,
                height: `${block.h}%`,
              }}
            >
              {/* The top of the block, then the two sides that face you. */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-[2px] border text-[8px] font-semibold text-ink"
                style={{
                  background: `color-mix(in srgb, ${block.color} 22%, var(--color-surface))`,
                  borderColor: block.color,
                  transform: `translateZ(${LIFT}px)`,
                  boxShadow: block.found ? '0 0 0 2px var(--color-ink)' : undefined,
                }}
              >
                {t(`product.mocks.locations.${block.key}`)}
              </div>
              <div
                className="absolute top-full left-0 w-full origin-top"
                style={{
                  height: LIFT,
                  background: `color-mix(in srgb, ${block.color} 80%, black)`,
                  transform: 'rotateX(90deg)',
                }}
              />
              <div
                className="absolute top-0 right-full h-full origin-right"
                style={{
                  width: LIFT,
                  background: `color-mix(in srgb, ${block.color} 62%, black)`,
                  transform: 'rotateY(90deg)',
                }}
              />
            </div>
          ))}
        </div>
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold whitespace-nowrap text-on-primary shadow-card">
          {t('product.mocks.locations.found')}
        </span>
      </div>
    </AppWindow>
  );
}
