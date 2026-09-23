import { useState } from 'react';
import { useI18n } from '../i18n/useI18n';

const INDUSTRY_KEYS = [
  'grocery',
  'hardware',
  'wholesale',
  'restaurant',
  'pharmacy',
  'clothing',
  'technology',
  'professional',
  'health',
  'education',
  'construction',
  'transport',
] as const;

type IndustryKey = (typeof INDUSTRY_KEYS)[number];

const OTHER = 'other';

/**
 * Industry picker: common small-business industries plus "Otro", which reveals a text field.
 * Reports the resulting industry text ('' when nothing was chosen).
 */
export function IndustrySelect({
  id,
  describedBy,
  onChange,
}: {
  id: string;
  describedBy?: string;
  onChange: (industry: string) => void;
}) {
  const { t } = useI18n();
  const [choice, setChoice] = useState('');
  const [custom, setCustom] = useState('');

  const label = (key: IndustryKey) => t(`access.industries.${key}`);

  return (
    <div className="space-y-2">
      <select
        id={id}
        className="input"
        value={choice}
        aria-describedby={describedBy}
        onChange={(event) => {
          const value = event.target.value;
          setChoice(value);
          if (value === OTHER) onChange(custom.trim());
          else onChange(value ? label(value as IndustryKey) : '');
        }}
      >
        <option value="">{t('access.industries.placeholder')}</option>
        {INDUSTRY_KEYS.map((key) => (
          <option key={key} value={key}>
            {label(key)}
          </option>
        ))}
        <option value={OTHER}>{t('access.industries.other')}</option>
      </select>
      {choice === OTHER && (
        <input
          className="input"
          autoFocus
          maxLength={80}
          placeholder={t('access.industries.otherPlaceholder')}
          aria-label={t('access.industries.otherPlaceholder')}
          value={custom}
          onChange={(event) => {
            setCustom(event.target.value);
            onChange(event.target.value.trim());
          }}
        />
      )}
    </div>
  );
}
