import { I18nProvider as BaseI18nProvider } from '@/ui';
import type { ReactNode } from 'react';
import { en } from './messages/en';
import { es } from './messages/es';

const DICTIONARIES = { es, en };

/** Landing translations (Spanish default, English), including the shared UI kit strings. */
export function I18nProvider({ children }: { children: ReactNode }) {
  return <BaseI18nProvider dictionaries={DICTIONARIES}>{children}</BaseI18nProvider>;
}
