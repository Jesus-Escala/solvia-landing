import { cx } from '@/ui';
import type { ReactNode } from 'react';

/** Landmark section labelled by its heading (`aria-labelledby`). */
export function Section({
  id,
  labelledBy,
  children,
  className,
}: {
  id?: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx('relative py-16 sm:py-24', className)}
    >
      {children}
    </section>
  );
}
