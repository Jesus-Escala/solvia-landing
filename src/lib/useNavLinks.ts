import { useI18n } from '../i18n/useI18n';
import { SECTION_IDS } from './config';

/** In-page navigation links shared by the navbar and the footer. */
export function useNavLinks() {
  const { t } = useI18n();
  return [
    { href: `#${SECTION_IDS.features}`, label: t('nav.features') },
    { href: `#${SECTION_IDS.howItWorks}`, label: t('nav.howItWorks') },
    { href: `#${SECTION_IDS.pricing}`, label: t('nav.pricing') },
    { href: `#${SECTION_IDS.faq}`, label: t('nav.faq') },
  ];
}
