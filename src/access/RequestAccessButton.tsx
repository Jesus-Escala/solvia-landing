import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { CTA_ICON_CLASS, ctaClass, type CtaSize, type CtaVariant } from '../components/ctaStyles';
import type { ModuleId, PlanId } from '../sections/plans';
import { useAccessRequest } from './accessRequestContext';

/** CTA that opens the request access form (optionally with a plan or modules preselected). */
export function RequestAccessButton({
  plan,
  modules,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  plan?: PlanId;
  modules?: ModuleId[];
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
        open({ ...(plan && { plan }), ...(modules && { modules }) });
      }}
      {...props}
    >
      {children}
      {icon && <span className={CTA_ICON_CLASS}>{icon}</span>}
    </button>
  );
}
