import { useId } from 'react';

const WIDTH = 300;
const HEIGHT = 120;
const PADDING = 8;

/** Tiny illustrative bar + line chart (bars: collected per week, line: projection). */
export function CashFlowChart({
  bars,
  projection,
  labels,
  title,
}: {
  bars: number[];
  projection: number[];
  labels: string[];
  title: string;
}) {
  const gradientId = useId();
  const max = Math.max(...bars, ...projection) * 1.1;
  const step = (WIDTH - PADDING * 2) / bars.length;
  const y = (value: number) => HEIGHT - PADDING - (value / max) * (HEIGHT - PADDING * 2);
  const x = (index: number) => PADDING + step * index + step / 2;
  const line = projection
    .map(
      (value, index) => `${index === 0 ? 'M' : 'L'}${x(index).toFixed(1)} ${y(value).toFixed(1)}`,
    )
    .join(' ');
  const baseline = HEIGHT - PADDING;
  const area = `${line} L${x(projection.length - 1).toFixed(1)} ${baseline} L${x(0).toFixed(1)} ${baseline} Z`;

  return (
    <div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label={title}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f59e0b" stopOpacity="0.22" />
            <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((ratio) => {
          const gridY = PADDING + (HEIGHT - PADDING * 2) * ratio;
          return (
            <line
              key={ratio}
              x1={PADDING}
              x2={WIDTH - PADDING}
              y1={gridY}
              y2={gridY}
              stroke="var(--chart-grid)"
              strokeDasharray="3 4"
            />
          );
        })}
        <path d={area} fill={`url(#${gradientId})`} />
        {bars.map((value, index) => (
          <rect
            key={index}
            x={x(index) - step * 0.28}
            y={y(value)}
            width={step * 0.56}
            height={baseline - y(value)}
            rx="5"
            fill="var(--primary)"
            opacity={index === bars.length - 1 ? 1 : 0.55}
          />
        ))}
        <path
          d={line}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {projection.map((value, index) => (
          <circle
            key={index}
            cx={x(index)}
            cy={y(value)}
            r="3"
            fill="var(--surface)"
            stroke="#f59e0b"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div
        className="mt-1 grid text-center text-[10px] text-subtle"
        style={{ gridTemplateColumns: `repeat(${labels.length}, minmax(0, 1fr))` }}
      >
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
