import { PaperBackdrop } from '@/ui';

/** The landing's hero background: the same warm paper backdrop as the app's auth pages. */
export function AuroraBackground({ className }: { className?: string }) {
  return <PaperBackdrop className={className} />;
}
