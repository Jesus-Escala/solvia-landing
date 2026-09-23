import { cx } from '@/ui';

/** Drifting blurred blobs + a fading dot grid (same visual language as the app's auth pages). */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cx('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <div className="auth-blob absolute -top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#2dd4bf]/30 blur-3xl sm:h-[34rem] sm:w-[34rem] dark:bg-[#2dd4bf]/15" />
      <div className="auth-blob absolute top-1/4 -right-40 h-[24rem] w-[24rem] rounded-full bg-[#2a78d6]/20 blur-3xl [animation-delay:-6s] sm:h-[30rem] sm:w-[30rem] dark:bg-[#2a78d6]/15" />
      <div className="auth-blob absolute -bottom-48 left-1/4 h-[22rem] w-[22rem] rounded-full bg-[#fde68a]/35 blur-3xl [animation-delay:-12s] sm:h-[28rem] sm:w-[28rem] dark:bg-[#0f766e]/25" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--line-strong) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />
    </div>
  );
}
