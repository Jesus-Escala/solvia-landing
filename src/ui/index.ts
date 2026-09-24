/**
 * Solvia UI kit (landing subset): components, brand, theme, i18n core and API client.
 * Import it as '@/ui'.
 */

// UI kit
export { Button, IconButton, type ButtonProps, type ButtonVariant } from './components/Button';
export { cx } from './components/cx';
export { Avatar, Badge, Card, ProgressBar, Stat, type BadgeTone } from './components/Display';
export { Alert, EmptyState, LoadingState, Skeleton, Spinner } from './components/Feedback';
export {
  Field,
  PasswordInput,
  SearchInput,
  SegmentedControl,
  Tabs,
  type SegmentOption,
  type TabItem,
} from './components/Form';
export { LoadingOverlay, LoadingPill } from './components/LoadingOverlay';
export { Modal, type ModalProps } from './components/Modal';
export {
  FeedbackProvider,
  MenuItems,
  Popover,
  useErrorToast,
  useFeedback,
  type MenuItem,
  type ToastApi,
} from './components/Overlays';
export { PhoneInput } from './components/PhoneInput';
export { isValidPhone } from './components/phoneCountries';
export { PreferencesControls } from './components/PreferencesControls';
export { Reveal } from './components/Reveal';

// Hooks
export { useMinimumLoading } from './hooks/useMinimumLoading';

// Brand
export { Logo, LogoMark } from './brand/Logo';

export { Mascot, MascotFace, type MascotMood } from './brand/Mascot';
export { OWL, OWL_COLORS } from './brand/owlGeometry';
export { WhatsAppIcon } from './brand/WhatsAppIcon';

// Theme
export {
  ThemeProvider,
  useTheme,
  type ResolvedTheme,
  type ThemePreference,
} from './theme/ThemeProvider';

// i18n
export {
  createUseI18n,
  useUiI18n,
  type I18nValue,
  type Leaves,
  type TranslationVars,
} from './i18n/context';
export { I18nProvider, type Dictionaries, type Formatters } from './i18n/I18nProvider';
export { LOCALES, type Locale } from './i18n/locales';
export { uiEn, uiEs, type UiMessages } from './i18n/messages';
export { useErrorText } from './i18n/useErrorText';

// API
export {
  ApiError,
  buildUrl,
  createApiClient,
  createTokenStore,
  errorMessage,
  type ApiClient,
  type Query,
  type TokenStore,
} from './lib/http';
export { PaperBackdrop } from './components/PaperBackdrop';
export { InfoTip } from './components/InfoTip';
export { downloadCsv } from './lib/csv';
