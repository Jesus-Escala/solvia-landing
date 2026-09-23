import { cx, IconButton, Logo, PreferencesControls } from '@/ui';
import { Menu, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { useI18n } from '../i18n/useI18n';
import { RequestAccessButton } from '../access/RequestAccessButton';
import { LOGIN_URL } from '../lib/config';
import { useNavLinks } from '../lib/useNavLinks';
import { LinkButton } from './LinkButton';

const LINK_CLASS =
  'rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface-3/70 hover:text-ink focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:outline-none';

/** Sticky translucent top bar with anchor links, preferences and the app CTAs. */
export function Navbar() {
  const { t } = useI18n();
  const links = useNavLinks();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Close the mobile panel with Escape or when the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = () => desktop.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas/75 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-on-primary focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50"
      >
        {t('nav.skip')}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label={t('nav.home')}
          className="rounded-lg focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:outline-none"
        >
          <Logo size={30} />
        </a>

        <nav aria-label={t('nav.label')} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={LINK_CLASS}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <PreferencesControls tourTarget={false} />
          {/* On phones both CTAs live in the menu panel. */}
          <div className="hidden items-center gap-1 sm:flex">
            <LinkButton href={LOGIN_URL} variant="ghost">
              {t('nav.login')}
            </LinkButton>
            <RequestAccessButton>{t('nav.requestAccess')}</RequestAccessButton>
          </div>
          <IconButton
            label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
            className="lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </IconButton>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="animate-pop-in border-t border-line/70 bg-canvas/95 shadow-pop backdrop-blur-xl lg:hidden"
      >
        <nav aria-label={t('nav.label')} className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${60 + index * 40}ms` }}
                  className={cx(LINK_CLASS, 'animate-page-in block text-base')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 border-t border-line/70 pt-4 sm:hidden">
            <LinkButton href={LOGIN_URL} variant="secondary">
              {t('nav.login')}
            </LinkButton>
            <RequestAccessButton onClick={() => setOpen(false)}>
              {t('nav.requestAccess')}
            </RequestAccessButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
