import { cx, Reveal } from '@/ui';
import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

function AccordionRow({
  item,
  open,
  delay,
  onToggle,
}: {
  item: AccordionItem;
  open: boolean;
  delay: number;
  onToggle: () => void;
}) {
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <Reveal
      as="li"
      delay={delay}
      className={cx(
        'rounded-2xl border bg-surface shadow-card',
        open ? 'border-primary/40' : 'border-line has-[button:hover]:border-line-strong',
      )}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold text-ink focus-visible:ring-3 focus-visible:ring-primary/40 focus-visible:outline-none"
        >
          {item.question}
          <ChevronDown
            aria-hidden="true"
            className={cx(
              'h-5 w-5 shrink-0 text-muted transition-transform duration-300 ease-(--ease-out)',
              open && 'rotate-180 text-primary',
            )}
          />
        </button>
      </h3>
      {/* Grid-rows trick animates the height; `inert` keeps collapsed content out of tab order and AT. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className={cx(
          'grid transition-[grid-template-rows] duration-300 ease-(--ease-out)',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cx(
              'px-5 pb-5 text-sm leading-relaxed text-muted transition-opacity duration-300',
              open ? 'opacity-100' : 'opacity-0',
            )}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/** Accessible disclosure list: one item open at a time (the first one by default). */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <AccordionRow
          delay={index * 60}
          key={item.id}
          item={item}
          open={openId === item.id}
          onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
        />
      ))}
    </ul>
  );
}
