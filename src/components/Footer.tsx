import { Logo, PreferencesControls } from '@/ui';
import { useI18n } from '../i18n/useI18n';
import { ACCESS_REQUEST_HASH, useAccessRequest } from '../access/accessRequestContext';
import { LOGIN_URL } from '../lib/config';
import { useNavLinks } from '../lib/useNavLinks';
import { Container } from './Container';

const LINK_CLASS =
  'rounded text-sm text-muted transition hover:text-ink focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:outline-none';

interface FooterLink {
  href: string;
  label: string;
  /** Runs instead of following the link (the href stays as a no-JS fallback). */
  onClick?: () => void;
}

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={LINK_CLASS}
              onClick={
                link.onClick &&
                ((event) => {
                  event.preventDefault();
                  link.onClick?.();
                })
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const { t } = useI18n();
  const productLinks = useNavLinks();
  const accessRequest = useAccessRequest();
  const accountLinks: FooterLink[] = [
    { href: LOGIN_URL, label: t('nav.login') },
    {
      href: `#${ACCESS_REQUEST_HASH}`,
      label: t('nav.requestAccess'),
      onClick: () => accessRequest.open(),
    },
  ];

  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo size={30} />
          <p className="mt-4 text-sm leading-relaxed text-muted">{t('footer.description')}</p>
        </div>
        <LinkColumn title={t('footer.product')} links={productLinks} />
        <LinkColumn title={t('footer.account')} links={accountLinks} />
      </Container>
      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-subtle">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <div role="group" aria-label={t('footer.preferences')}>
            <PreferencesControls tourTarget={false} />
          </div>
        </Container>
      </div>
    </footer>
  );
}
