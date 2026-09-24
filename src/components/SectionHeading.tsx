import { cx, Reveal } from '@/ui';

/** Eyebrow + h2 + subtitle used at the top of each section. The h2 id labels the section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <Reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-primary-ink uppercase">{eyebrow}</p>
      )}
      <h2
        id={id}
        className="mt-2 font-display text-[2.1rem] leading-[1.1] font-semibold text-balance sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-pretty text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
