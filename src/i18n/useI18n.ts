import { createUseI18n, type Leaves } from '@/ui';
import type { Messages } from './messages/es';

export type TranslationKey = Leaves<Messages>;

/** Typed translations for the landing: `t()` only accepts keys that exist in `es.ts`. */
export const useI18n = createUseI18n<Messages>();
