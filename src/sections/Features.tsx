import { cx, Reveal } from '@/ui';
import {
  BellRing,
  CheckCheck,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/Container';
import { IconTile } from '../components/IconTile';
import { SectionHeading } from '../components/SectionHeading';
import { Section } from '../components/Section';
import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from '../lib/config';

type FeatureKey = 'receivables' | 'reminders' | 'payments' | 'risk' | 'dashboard' | 'statements';

// --- Live mini demos (decorative: the tile text says the same for assistive tech) ---------

/** WhatsApp chat: the reminder goes out, the customer answers, both ticks turn blue. */
function ChatDemo() {
  const { t } = useI18n();
  return (
    <div className="flex h-full min-h-72 flex-col gap-2 overflow-hidden rounded-2xl bg-[#efe7dd] p-3 dark:bg-[#0b141a]">
      <div className="-mx-3 -mt-3 mb-auto flex items-center gap-2.5 bg-[#075e54] px-3 py-2 text-white dark:bg-[#202c33]">
        <img src="/favicon.svg" alt="" className="h-8 w-8 rounded-full" />
        <div className="leading-tight">
          <p className="text-sm font-semibold">{t('features.demo.chatName')}</p>
          <p className="text-[11px] text-white/70">{t('features.demo.chatOnline')}</p>
        </div>
      </div>
      <div className="bento-pop ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[13px] text-[#111b21] shadow-sm dark:bg-[#005c4b] dark:text-[#e9edef]">
        <p className="text-[10px] font-semibold text-[#128c7e] dark:text-[#7fe0c7]">
          {t('features.demo.reminderSent')}
        </p>
        {t('features.demo.reminderText')}
        <span className="mt-1.5 block rounded-lg bg-white/70 px-2 py-1 text-center text-xs font-semibold text-[#128c7e] dark:bg-white/10 dark:text-[#7fe0c7]">
          {t('features.demo.payLink')}
        </span>
        <span className="mt-0.5 flex justify-end">
          <CheckCheck className="bento-ticks h-3.5 w-3.5" />
        </span>
      </div>
      <div className="bento-pop max-w-[75%] rounded-xl rounded-tl-sm bg-white px-3 py-2 text-[13px] text-[#111b21] shadow-sm [animation-delay:1.2s] dark:bg-[#202c33] dark:text-[#e9edef]">
        {t('features.demo.replyText')}
      </div>
      <div className="bento-pop mx-auto flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0a6b0a] shadow-sm [animation-delay:2.4s] dark:bg-[#1f2c33] dark:text-[#7fd67f]">
        <CheckCheck className="h-3.5 w-3.5" />
        {t('features.demo.paymentLogged')}
      </div>
    </div>
  );
}

/** A Yape payment lands and the balance bar fills to "paid off". */
function PaymentDemo() {
  const { t } = useI18n();
  return (
    <div className="rounded-2xl border border-line bg-surface p-3 shadow-card">
      <div className="flex items-center gap-3">
        <img src="/brands/yape.png" alt="" className="h-9 w-9 rounded-xl" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-success-ink">{t('features.demo.paymentIn')}</p>
          <p className="truncate text-xs text-muted">{t('features.demo.paymentBy')}</p>
        </div>
        <p className="font-display text-lg font-semibold tabular-nums">+S/ 350</p>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-subtle">
        <span>{t('features.demo.balance')}</span>
        <span className="font-semibold text-success-ink">{t('features.demo.paidOff')}</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-surface-3">
        <div className="bento-fill h-full rounded-full bg-linear-to-r from-primary to-success" />
      </div>
    </div>
  );
}

/** Half gauge whose needle settles on "low risk". */
function RiskDemo() {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 120 68" className="w-40" aria-hidden="true">
        <path
          d="M10 60 A50 50 0 0 1 43 13"
          stroke="var(--success)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M49 11 A50 50 0 0 1 71 11"
          stroke="var(--warning)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M77 13 A50 50 0 0 1 110 60"
          stroke="var(--danger)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <g className="bento-needle" style={{ transformOrigin: '60px 60px' }}>
          <line
            x1="60"
            y1="60"
            x2="60"
            y2="20"
            stroke="var(--ink)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <circle cx="60" cy="60" r="5" fill="var(--ink)" />
      </svg>
      <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success-ink">
        <ShieldCheck className="h-3.5 w-3.5" />
        {t('features.demo.riskLow')}
      </span>
      <p className="mt-1 text-center text-[11px] text-muted">{t('features.demo.riskHint')}</p>
    </div>
  );
}

/** Weekly cash-in bars growing one after another. */
function CashFlowDemo() {
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
function ReceivablesDemo() {
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

/** A PDF page with a "sent" stamp. */
function StatementDemo() {
  const { t } = useI18n();
  return (
    <div className="relative mx-auto w-44 rotate-[-3deg] rounded-xl border border-line bg-surface p-3 shadow-pop transition duration-500 group-hover:rotate-0">
      <div className="flex items-center gap-2">
        <span className="h-5 w-5 rounded-md bg-primary" />
        <span className="text-[11px] font-semibold">{t('features.demo.statement')}</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {[90, 70, 80, 55, 75].map((width, index) => (
          <span
            key={index}
            className="block h-1.5 rounded-full bg-surface-3"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
      <span className="bento-stamp absolute -right-3 -bottom-3 rotate-[-8deg] rounded-lg border-2 border-success bg-surface px-2 py-0.5 text-xs font-bold tracking-wider text-success uppercase">
        {t('features.demo.sent')}
      </span>
    </div>
  );
}

const TILES: Array<{ key: FeatureKey; icon: ReactNode; demo: ReactNode; span: string }> = [
  { key: 'reminders', icon: <BellRing />, demo: <ChatDemo />, span: 'lg:col-span-4 lg:row-span-2' },
  { key: 'payments', icon: <Wallet />, demo: <PaymentDemo />, span: 'lg:col-span-2' },
  { key: 'risk', icon: <ShieldCheck />, demo: <RiskDemo />, span: 'lg:col-span-2' },
  { key: 'dashboard', icon: <LayoutDashboard />, demo: <CashFlowDemo />, span: 'lg:col-span-3' },
  { key: 'receivables', icon: <Users />, demo: <ReceivablesDemo />, span: 'lg:col-span-3' },
  {
    key: 'statements',
    icon: <FileText />,
    demo: <StatementDemo />,
    span: 'sm:col-span-2 lg:col-span-6',
  },
];

export function Features() {
  const { t } = useI18n();

  return (
    <Section id={SECTION_IDS.features} labelledBy="features-title">
      <Container>
        <SectionHeading
          id="features-title"
          eyebrow={t('features.eyebrow')}
          title={t('features.title')}
          subtitle={t('features.subtitle')}
        />
        {/* Bento: tiles of different sizes, each with a small live demo of the feature */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {TILES.map((tile, index) => (
            <Reveal as="li" key={tile.key} delay={(index % 3) * 90} className={tile.span}>
              <article
                className={cx(
                  'group flex h-full flex-col gap-5 rounded-3xl border border-line bg-surface p-6 shadow-card transition duration-300 ease-(--ease-out) hover:-translate-y-1 hover:border-primary/40 hover:shadow-pop',
                  tile.key === 'statements' && 'md:flex-row md:items-center md:gap-10',
                )}
              >
                <div className={cx(tile.key === 'statements' && 'md:max-w-md md:flex-1')}>
                  <IconTile className="transition duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary">
                    {tile.icon}
                  </IconTile>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {t(`features.items.${tile.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`features.items.${tile.key}.body`)}
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className={cx(
                    'mt-auto',
                    tile.key === 'reminders' && 'flex flex-1 flex-col',
                    tile.key === 'statements' && 'md:mt-0 md:flex-1',
                  )}
                >
                  {tile.demo}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
