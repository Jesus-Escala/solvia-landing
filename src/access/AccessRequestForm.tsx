import { Button, Field, Mascot, useErrorText, PhoneInput, isValidPhone, useErrorToast } from '@/ui';
import { Send } from 'lucide-react';
import { useRef, useState, type FormEvent } from 'react';
import { useI18n } from '../i18n/useI18n';
import { api } from '../lib/api';
import { PLANS, type PlanId } from '../sections/plans';
import { IndustrySelect } from './IndustrySelect';

const MESSAGE_MAX = 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldName = 'businessName' | 'contactName' | 'email' | 'phone' | 'message';
type ClientErrors = Partial<Record<FieldName, string>>;

interface Values {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  plan: PlanId | '';
  message: string;
  /** Honeypot: people never see it, bots tend to fill it. */
  website: string;
}

/** Display name of a plan (the same in both languages). */
const planName = (plan: PlanId) => plan.charAt(0).toUpperCase() + plan.slice(1);

/**
 * The message sent to the platform team. The API has no plan field, so the chosen plan goes on the
 * first line (always in Spanish, the language of the backoffice).
 */
function composeMessage(plan: PlanId | '', message: string) {
  const lines = [plan ? `Plan de interés: ${planName(plan)}` : '', message.trim()].filter(Boolean);
  return lines.join('\n');
}

/** "Solicitar acceso" form, shown inside the modal of `AccessRequestProvider`. */
export function AccessRequestForm({
  initialPlan,
  onSent,
  onClose,
}: {
  initialPlan?: PlanId;
  onSent: () => void;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const errorText = useErrorText();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    plan: initialPlan ?? '',
    message: '',
    website: '',
  });
  const [clientErrors, setClientErrors] = useState<ClientErrors>({});
  const [serverError, setServerError] = useState<unknown>(null);
  useErrorToast(serverError, t('toast.sendFailed'));
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    // Editing a field clears its error until the next submit.
    if (key in clientErrors) setClientErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = (): ClientErrors => {
    const errors: ClientErrors = {};
    const between = (text: string) => text.trim().length >= 2 && text.trim().length <= 120;
    if (!between(values.businessName)) errors.businessName = t('access.errors.length');
    if (!between(values.contactName)) errors.contactName = t('access.errors.length');
    if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = t('access.errors.email');
    if (!isValidPhone(values.phone)) errors.phone = t('access.errors.phone');
    if (composeMessage(values.plan, values.message).length > MESSAGE_MAX) {
      errors.message = t('access.errors.message', { max: MESSAGE_MAX });
    }
    return errors;
  };

  const fieldError = (name: FieldName) => clientErrors[name] ?? errorText.field(serverError, name);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const errors = validate();
    setClientErrors(errors);
    setServerError(null);
    const firstInvalid = Object.keys(errors).find((key) => errors[key as FieldName]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const message = composeMessage(values.plan, values.message);
    setSubmitting(true);
    try {
      await api.public.post<{ ok: true }>('/public/access-requests', {
        businessName: values.businessName.trim(),
        contactName: values.contactName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        industry: values.industry || undefined,
        message: message || undefined,
        website: values.website,
      });
      setSent(true);
      onSent();
    } catch (error) {
      setServerError(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-center py-4 text-center">
        <Mascot size={120} mood="happy" className="drop-shadow-lg" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          {t('access.success.title')}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-pretty text-muted">{t('access.success.body')}</p>
        <Button className="mt-6 w-full sm:w-auto" onClick={onClose} autoFocus>
          {t('access.success.close')}
        </Button>
      </div>
    );
  }

  const optional = t('access.optional');

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('access.fields.businessName')} error={fieldError('businessName')}>
          {(id, describedBy) => (
            <input
              id={id}
              name="businessName"
              className="input"
              autoComplete="organization"
              required
              maxLength={120}
              aria-invalid={Boolean(fieldError('businessName'))}
              aria-describedby={describedBy}
              value={values.businessName}
              onChange={(event) => set('businessName', event.target.value)}
            />
          )}
        </Field>
        <Field label={t('access.fields.contactName')} error={fieldError('contactName')}>
          {(id, describedBy) => (
            <input
              id={id}
              name="contactName"
              className="input"
              autoComplete="name"
              required
              maxLength={120}
              aria-invalid={Boolean(fieldError('contactName'))}
              aria-describedby={describedBy}
              value={values.contactName}
              onChange={(event) => set('contactName', event.target.value)}
            />
          )}
        </Field>
        <Field label={t('access.fields.email')} error={fieldError('email')}>
          {(id, describedBy) => (
            <input
              id={id}
              name="email"
              type="email"
              className="input"
              autoComplete="email"
              inputMode="email"
              required
              maxLength={254}
              aria-invalid={Boolean(fieldError('email'))}
              aria-describedby={describedBy}
              value={values.email}
              onChange={(event) => set('email', event.target.value)}
            />
          )}
        </Field>
        <Field
          label={t('access.fields.phone')}
          hint={t('access.fields.phoneHint')}
          error={fieldError('phone')}
        >
          {(id, describedBy) => (
            <PhoneInput
              id={id}
              name="phone"
              required
              invalid={Boolean(fieldError('phone'))}
              describedBy={describedBy}
              value={values.phone}
              onChange={(value) => set('phone', value)}
            />
          )}
        </Field>
        <Field
          label={t('access.fields.industry')}
          optionalLabel={optional}
          error={errorText.field(serverError, 'industry')}
        >
          {(id, describedBy) => (
            <IndustrySelect
              id={id}
              describedBy={describedBy}
              onChange={(industry) => set('industry', industry)}
            />
          )}
        </Field>
        <Field label={t('access.fields.plan')} optionalLabel={optional}>
          {(id, describedBy) => (
            <select
              id={id}
              name="plan"
              className="input"
              aria-describedby={describedBy}
              value={values.plan}
              onChange={(event) => set('plan', event.target.value as PlanId | '')}
            >
              <option value="">{t('access.fields.planPlaceholder')}</option>
              {PLANS.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {t(`pricing.plans.${plan.id}.name`)}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>

      <Field
        label={t('access.fields.message')}
        optionalLabel={optional}
        hint={t('access.fields.messageCount', {
          count: values.message.length,
          max: MESSAGE_MAX,
        })}
        error={fieldError('message')}
      >
        {(id, describedBy) => (
          <textarea
            id={id}
            name="message"
            rows={3}
            className="input h-auto min-h-24 resize-y py-2"
            maxLength={MESSAGE_MAX}
            placeholder={t('access.fields.messagePlaceholder')}
            aria-invalid={Boolean(fieldError('message'))}
            aria-describedby={describedBy}
            value={values.message}
            onChange={(event) => set('message', event.target.value)}
          />
        )}
      </Field>

      {/* Honeypot for bots: hidden from people and assistive technology. */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => set('website', event.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col-reverse gap-2 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-subtle">{t('access.privacy')}</p>
        <Button type="submit" loading={submitting} icon={<Send className="h-4 w-4" />}>
          {t('access.submit')}
        </Button>
      </div>
    </form>
  );
}
