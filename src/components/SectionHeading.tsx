import { cx, Reveal } from '@/ui';

/** Eyebrow + h2 + subtitle used at the top of each section. The h2 id labels the section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  /** Light text for dark bands. */
  inverted?: boolean;
}) {
  return (
    <Reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <p
          className={cx(
            'text-sm font-semibold tracking-wide uppercase',
            inverted ? 'text-[#e9c77f]' : 'text-primary-ink',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cx(
          'mt-2 font-display text-[2.1rem] leading-[1.1] font-semibold text-balance sm:text-5xl',
          inverted && 'text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cx(
            'mt-3 text-base text-pretty sm:text-lg',
            inverted ? 'text-white/70' : 'text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
