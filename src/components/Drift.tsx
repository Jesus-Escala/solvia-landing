import { cx } from '@/ui';
import type { ReactNode } from 'react';

/** Wraps a floating element in the shared bubble drift animation (each with its own timing). */
export function Drift({
  duration = 10,
  delay = 0,
  className,
  children,
}: {
  duration?: number;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx('auth-bubble', className)}
      style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
