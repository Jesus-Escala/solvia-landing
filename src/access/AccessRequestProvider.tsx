import { Modal } from '@/ui';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useI18n } from '../i18n/useI18n';
import type { PlanId } from '../sections/plans';
import { AccessRequestForm } from './AccessRequestForm';
import { AccessRequestContext, parseAccessRequestHash } from './accessRequestContext';

/**
 * Holds the request access modal and lets any CTA open it through `useAccessRequest()`.
 * It also opens on the `#solicitar-acceso` deep link (see `ACCESS_REQUEST_HASH`).
 */
export function AccessRequestProvider({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<PlanId | undefined>();
  const [sent, setSent] = useState(false);
  // A new key per opening remounts the form, so it always starts empty (also after a success).
  const [session, setSession] = useState(0);

  const open = useCallback((nextPlan?: PlanId) => {
    setPlan(nextPlan);
    setSent(false);
    setSession((value) => value + 1);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Drop the deep link without adding a history entry, so Back doesn't reopen the form.
    if (parseAccessRequestHash(window.location.hash)) {
      window.history.replaceState(
        window.history.state,
        '',
        window.location.pathname + window.location.search,
      );
    }
  }, []);

  // Deep link: open on load and whenever the hash changes to `#solicitar-acceso[-plan]`.
  useEffect(() => {
    const openFromHash = () => {
      const link = parseAccessRequestHash(window.location.hash);
      if (link) open(link.plan);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, [open]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <AccessRequestContext.Provider value={value}>
      {children}
      <Modal
        open={isOpen}
        onClose={close}
        title={t('access.title')}
        description={sent ? undefined : t('access.description')}
        closeLabel={t('access.close')}
        size="lg"
      >
        <AccessRequestForm
          key={session}
          initialPlan={plan}
          onSent={() => setSent(true)}
          onClose={close}
        />
      </Modal>
    </AccessRequestContext.Provider>
  );
}
