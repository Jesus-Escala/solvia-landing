import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { CTA_ICON_CLASS, ctaClass, type CtaSize, type CtaVariant } from './ctaStyles';

/** A link styled like the UI kit's Button (the kit's Button only renders a <button>). */
export function LinkButton({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: ReactNode;
}) {
  return (
    <a className={ctaClass(variant, size, className)} {...props}>
      {children}
      {icon && <span className={CTA_ICON_CLASS}>{icon}</span>}
    </a>
  );
}
