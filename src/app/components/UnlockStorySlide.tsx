import { useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import unlockedImg from '../../imports/unlocked.png';
import type { UnlockItem } from './unlockContent';
import { useCountUp, formatCountUp } from './useCountUp';
import { LiquidGlass } from './LiquidGlass';

// Parse a metric string into an animatable leading number + static suffix.
// Returns null for non-countable values (dates like 2027.01.01, ratios like 70% / 30%),
// which are then rendered as-is.
function parseMetric(metric: string) {
  const m = metric.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const suffix = m[2];
  if (/\d/.test(suffix)) return null; // suffix still has digits → ratio/date → keep static
  const numStr = m[1].replace(/,/g, '');
  const value = Number.parseFloat(numStr);
  if (!Number.isFinite(value)) return null;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { value, decimals, suffix };
}

function AnimatedMetric({ metric, delay = 0, glowColor }: { metric: string; delay?: number; glowColor?: string }) {
  const parsed = useMemo(() => parseMetric(metric), [metric]);
  const [value, settled] = useCountUp(parsed?.value ?? 0, delay, 1400);

  if (!parsed) return <>{metric}</>;
  // The glow's text-shadow is only applied once settled — painting a blurred
  // shadow on every frame while the digits are still changing is what causes jank.
  return (
    <span style={settled && glowColor ? { textShadow: `0 0 28px ${glowColor}70` } : undefined}>
      {formatCountUp(value, parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}

type StoryItem = UnlockItem & {
  image: string;
  alt: string;
  accent: string;
  metric?: string;
  metricLabel?: string;
};

type UnlockStorySlideProps = {
  chapter: string;
  title?: string;
  items: StoryItem[];
  theme: {
    glowA: string;
    glowB: string;
    glowC: string;
  };
};

const cardFrames = [
  'left-[0px] top-[0px] h-[348px] w-[780px] z-30',
  'right-[0px] top-[48px] h-[350px] w-[640px] z-20',
  'left-[76px] top-[322px] h-[372px] w-[690px] z-20',
  'right-[40px] top-[462px] h-[330px] w-[730px] z-30',
];

export function UnlockStorySlide({
  chapter,
  title = '100 ЧӨЛӨӨЛӨЛТ 100 ӨДӨР',
  items,
  theme,
}: UnlockStorySlideProps) {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute -left-[8%] top-[7%] h-[360px] w-[560px] rounded-full blur-[150px] ${theme.glowA}`} />
        <div className={`absolute right-[1%] top-[11%] h-[420px] w-[520px] rounded-full blur-[170px] ${theme.glowB}`} />
        <div className={`absolute bottom-[-12%] left-[32%] h-[380px] w-[720px] rounded-full blur-[170px] ${theme.glowC}`} />
        <div className="absolute left-12 right-12 top-[132px] h-px bg-white/12" />
        <div className="absolute bottom-12 left-12 right-12 h-px bg-white/8" />
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-10 pt-[52px]">
        <header className="flex items-start justify-between gap-8">
          <div className="max-w-[1060px] animate-[storyRise_0.7s_ease-out_both]">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.06]">
                <Sparkles className="h-4.5 w-4.5 text-white/78" strokeWidth={2.4} />
              </span>
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-white/58">
                {chapter}
              </p>
            </div>
            <h1 className="hundred-days-glow mt-5 text-[52px] leading-[0.94] font-black tracking-[-0.045em] text-white">
              {title}
            </h1>
          </div>

          <div className="h-16 w-[360px]" aria-hidden="true" />
        </header>

        <section className="mt-7 flex min-h-0 flex-1 gap-8 overflow-hidden">
          <aside className="relative w-[360px] flex-shrink-0 animate-[storyRise_0.78s_ease-out_0.1s_both]">
            <div className="absolute bottom-4 left-[28px] top-8 w-px bg-white/14" />
            {items.map((item) => (
              <div key={item.unlock} className="relative mb-[34px] flex items-center gap-5">
                <span
                  className="relative z-10 block h-[66px] w-[58px] flex-shrink-0"
                  style={{
                    filter: `drop-shadow(0 0 24px ${item.accent}60)`,
                  }}
                >
                  <span
                    className="absolute inset-0"
                    style={{
                      backgroundColor: item.accent,
                      WebkitMaskImage: `url(${unlockedImg})`,
                      maskImage: `url(${unlockedImg})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-[16px] font-black uppercase tracking-[0.16em]" style={{ color: item.accent }}>
                    {item.unlock}
                  </p>
                </div>
              </div>
            ))}
          </aside>

          <div className="relative min-h-0 flex-1 animate-[storyRise_0.82s_ease-out_0.16s_both]">
            <div className="absolute left-[70px] top-[112px] h-[470px] w-[470px] rounded-full border border-white/8" />
            <div className="absolute right-[120px] top-[34px] h-[500px] w-[500px] rounded-full border border-white/6" />

            {items.map((item, index) => (
              <LiquidGlass
                key={item.unlock}
                radius={34}
                className={`absolute overflow-hidden border border-white/13 animate-[cardFloat_0.75s_ease-out_both] ${cardFrames[index]}`}
                style={{
                  animationDelay: `${0.18 + index * 0.08}s`,
                  boxShadow: `0 30px 80px rgba(0,0,0,0.28), 0 0 0 1px ${item.accent}22`,
                }}
              >
                <div className="absolute inset-y-0 right-0 w-[38%]">
                  <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                </div>

                <div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: item.accent }} />

                <div className="relative z-10 flex h-full max-w-[70%] flex-col px-8 py-6">
                  <div className="flex items-center">
                    <span
                      className="rounded-full border px-4 py-1.5 text-[13px] font-black tracking-[0.08em] text-white shadow-[0_0_24px_rgba(255,255,255,0.08)]"
                      style={{
                        borderColor: `${item.accent}66`,
                        backgroundColor: `${item.accent}26`,
                        color: item.accent,
                        textShadow: `0 0 18px ${item.accent}55`,
                      }}
                    >
                      {item.date || 'Шуурхай хэрэгжилт'}
                    </span>
                  </div>

                  <h2 className="mt-4 text-[30px] leading-[0.98] font-black tracking-[-0.045em] text-white">
                    {item.title}
                  </h2>

                  <div className="mt-4 space-y-2">
                    {item.bullets.slice(0, index === 0 ? 3 : 2).map((line) => (
                      <p key={line} className="flex items-start gap-2.5 text-[14px] leading-[1.25] font-semibold text-white/74">
                        <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: item.accent }} />
                        <span>{line}</span>
                      </p>
                    ))}
                  </div>

                  {item.metric ? (
                    <div className="mt-auto flex items-end gap-3">
                      <p
                        className="text-[42px] leading-none font-black tracking-[-0.045em] tabular-nums"
                        style={{ color: item.accent }}
                      >
                        <AnimatedMetric metric={item.metric} delay={320 + index * 130} glowColor={item.accent} />
                      </p>
                      <p className="pb-1 text-[11px] leading-[1.1] font-black uppercase tracking-[0.12em] text-white/45">
                        {item.metricLabel}
                      </p>
                    </div>
                  ) : null}
                </div>
              </LiquidGlass>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        @keyframes storyRise {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes cardFloat {
          from { opacity: 0; transform: translateY(22px) rotate(-1.2deg); }
          to { opacity: 1; transform: translateY(0) rotate(0); }
        }
      `}</style>
    </div>
  );
}
