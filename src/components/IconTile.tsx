import { cx } from '@/ui';
import type { ReactNode } from 'react';

/** Soft teal square holding a lucide icon. */
export function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-ink [&>svg]:h-5 [&>svg]:w-5',
        className,
      )}
    >
      {children}
    </span>
  );
}
