import { cx } from '@/ui';
import type { HTMLAttributes, ReactNode } from 'react';

/** Rounded translucent card with a soft teal shadow and a top-left shine. */
export function GlassCard({
  children,
  className,
  hoverLift = false,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  /** Subtle lift + stronger shadow on hover. */
  hoverLift?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-3xl border border-white/60 bg-surface/70 shadow-[0_24px_48px_-24px_rgba(13,148,136,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-surface/60 dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]',
        hoverLift &&
          'transition duration-300 ease-(--ease-out) hover:-translate-y-1 hover:shadow-[0_32px_56px_-24px_rgba(13,148,136,0.55)] dark:hover:shadow-[0_32px_56px_-24px_rgba(0,0,0,0.9)]',
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -left-8 h-24 w-40 rounded-full bg-white/50 blur-2xl dark:bg-white/5"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
