import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { CTA_ICON_CLASS, ctaClass, type CtaSize, type CtaVariant } from '../components/ctaStyles';
import type { PlanId } from '../sections/plans';
import { useAccessRequest } from './accessRequestContext';

/** CTA that opens the request access form (optionally with a plan preselected). */
export function RequestAccessButton({
  plan,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  plan?: PlanId;
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: ReactNode;
}) {
  const { open } = useAccessRequest();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      className={ctaClass(variant, size, className)}
      onClick={(event) => {
        onClick?.(event);
        open(plan);
      }}
      {...props}
    >
      {children}
      {icon && <span className={CTA_ICON_CLASS}>{icon}</span>}
    </button>
  );
}
