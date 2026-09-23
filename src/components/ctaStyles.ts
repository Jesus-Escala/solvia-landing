import { cx } from '@/ui';

export type CtaVariant = 'primary' | 'secondary' | 'ghost' | 'light' | 'inverse';
export type CtaSize = 'md' | 'lg';

const VARIANTS: Record<CtaVariant, string> = {
  primary:
    'bg-primary text-on-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_1px_2px_rgba(15,23,42,0.12),0_8px_20px_-10px_rgba(13,148,136,0.7)] hover:bg-primary-hover hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_2px_4px_rgba(15,23,42,0.12),0_12px_24px_-10px_rgba(13,148,136,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_20px_-10px_rgba(0,0,0,0.8)]',
  secondary:
    'border border-line bg-surface/80 text-ink shadow-xs backdrop-blur-sm hover:border-line-strong hover:bg-surface',
  ghost: 'text-muted hover:bg-surface-3 hover:text-ink',
  // For dark/colored bands.
  light: 'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  // Solid white CTA on dark/colored bands.
  inverse: 'bg-white text-[#0b5a54] shadow-lg hover:bg-[#ecfdf5]',
};

const SIZES: Record<CtaSize, string> = {
  md: 'h-10 gap-2 rounded-lg px-4 text-sm',
  lg: 'h-12 gap-2 rounded-xl px-6 text-base',
};

/** Classes shared by the landing's call-to-action links and buttons. */
export function ctaClass(variant: CtaVariant, size: CtaSize, className?: string) {
  return cx(
    'group inline-flex shrink-0 cursor-pointer items-center justify-center font-semibold whitespace-nowrap transition duration-200 ease-(--ease-out) hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:outline-none',
    SIZES[size],
    VARIANTS[variant],
    className,
  );
}

/** Wrapper classes of the trailing icon of a CTA (nudges right on hover). */
export const CTA_ICON_CLASS =
  'transition-transform duration-200 group-hover:translate-x-0.5 [&>svg]:h-4 [&>svg]:w-4';
