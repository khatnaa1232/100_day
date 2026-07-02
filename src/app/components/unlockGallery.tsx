import type { ReactNode } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import {
  AnimatedMetric,
  UnlockBadge,
  clamp,
  compactTitle,
  distilledBullets,
  type ShowcaseUnlock,
} from './unlockShowcase';

// ─────────────────────────────────────────────────────────────────────────────
// Premium unlock CINEMATIC layout — a large poster-style hero on top with a
// horizontal filmstrip rail of the remaining unlocks below.
//
// Every photo is shown *whole* (the ~648×736 portraits are lock/keyhole shaped
// and never cropped): a blurred, dimmed cover copy of the image fills its frame
// as a backdrop while the full image (object-contain) sits crisply on top — no
// empty letterbox bars, nothing cut off. The hero photo is pushed to the right.
// ─────────────────────────────────────────────────────────────────────────────

/** Whole photo pushed to the right edge over a soft blurred backdrop of itself. */
function RightImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-[1.4] object-cover blur-2xl opacity-55" />
      <div className="absolute inset-0 bg-[#050e22]/42" />
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain object-right transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, #071331 0%, rgba(7,19,49,0.97) 42%, rgba(7,19,49,0.6) 66%, rgba(7,19,49,0.12) 100%), radial-gradient(80% 60% at 96% 6%, ${accent}22, transparent 52%)`,
        }}
      />
    </div>
  );
}

/** Whole photo as a top banner over a soft blurred backdrop, fading into the card. */
function TopImage({ src, alt, accent }: { src: string; alt: string; accent: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-[1.35] object-cover blur-2xl opacity-55" />
      <div className="absolute inset-0 bg-[#050e22]/45" />
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg, rgba(4,11,26,0.04) 0%, rgba(4,11,26,0.2) 46%, rgba(4,11,26,0.78) 78%, #060f22 100%), radial-gradient(90% 50% at 84% 6%, ${accent}22, transparent 46%)` }}
      />
    </div>
  );
}

type HeroToken = { label: string; value: string; accent: string };

/** Cinematic poster hero — the single most important unlock, large and dominant. */
export function CinematicHero({
  item,
  eyebrow,
  title,
  note,
  tokens,
}: {
  item: ShowcaseUnlock;
  eyebrow: string;
  title: string;
  note: string;
  tokens: HeroToken[];
}) {
  const { accent } = item;
  return (
    <article
      className="group relative min-h-0 flex-1 overflow-hidden rounded-[34px] border animate-[bentoHero_0.72s_ease-out_both]"
      style={{
        borderColor: `${accent}5c`,
        boxShadow: `0 46px 120px rgba(0,0,0,0.46), 0 0 0 1px ${accent}30, 0 0 78px -16px ${accent}66`,
      }}
    >
      {/* whole photo, pushed to the right — full-bleed so the wash blends seamlessly */}
      <RightImage src={item.image} alt={item.alt} accent={accent} />
      <div className="absolute left-0 top-0 z-10 h-full w-[3px]" style={{ backgroundColor: accent }} />
      <div className="pointer-events-none absolute -left-12 -top-16 z-10 h-[300px] w-[300px] rounded-full blur-[100px]" style={{ backgroundColor: `${accent}30` }} />

      <div className="relative z-10 flex h-full max-w-[60%] flex-col px-11 py-9">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12.5px] font-black uppercase tracking-[0.16em]"
            style={{ borderColor: `${accent}80`, backgroundColor: `${accent}22`, color: accent }}
          >
            <Star className="h-3.5 w-3.5 fill-current" strokeWidth={2.4} />
            Хамгийн чухал чөлөөлөлт
          </span>
          <span className="text-[13.5px] font-black tracking-[0.06em] text-white/56">{item.date}</span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <UnlockBadge accent={accent} label={item.unlock.replace('#', '')} size="lg" />
          <span className="h-6 w-px bg-white/20" />
          <p className="text-[13px] font-black uppercase tracking-[0.2em]" style={{ color: accent }}>{eyebrow}</p>
        </div>

        <h2 className="mt-4 max-w-[640px] text-[56px] leading-[0.92] font-black tracking-[-0.055em] text-white">
          {title}
        </h2>
        <p className="mt-4 max-w-[560px] text-[18px] leading-[1.34] font-semibold text-white/76">{note}</p>

        <div className="mt-auto flex gap-3 pt-7">
          {tokens.map((token, index) => (
            <div
              key={token.label}
              className="flex-1 rounded-[18px] border px-5 py-3.5 backdrop-blur-md"
              style={{
                borderColor: `${token.accent}3a`,
                background: `linear-gradient(180deg, ${token.accent}20, rgba(255,255,255,0.045))`,
              }}
            >
              <p className="text-[32px] leading-none font-black tracking-[-0.045em] tabular-nums" style={{ color: token.accent }}>
                <AnimatedMetric metric={token.value} delay={440 + index * 130} glowColor={token.accent} />
              </p>
              <p className="mt-1.5 text-[10.5px] leading-[1.1] font-black uppercase tracking-[0.12em] text-white/48">
                {token.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/** A card in the bottom filmstrip rail — whole photo banner + metric + title + a line. */
export function RailCard({ item, index }: { item: ShowcaseUnlock; index: number }) {
  const { accent } = item;
  const bullet = distilledBullets(item)[0];
  return (
    <article
      className="group relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[22px] border bg-[#07152d]/72 transition-[transform,box-shadow] duration-300 animate-[bentoRise_0.6s_ease-out_both] hover:-translate-y-1"
      style={{
        borderColor: `${accent}42`,
        animationDelay: `${0.2 + index * 0.07}s`,
        boxShadow: '0 22px 54px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div className="relative h-[46%] flex-shrink-0">
        <TopImage src={item.image} alt={item.alt} accent={accent} />
        <div className="absolute left-0 top-0 z-10 h-full w-[3px]" style={{ backgroundColor: accent }} />
        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-3">
          <span className="rounded-full bg-black/34 px-1 py-1 backdrop-blur-md">
            <UnlockBadge accent={accent} label={item.unlock.replace('#', '')} />
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/34 px-2.5 py-1 text-[10px] font-black tracking-[0.05em] text-white/56 backdrop-blur-md">
            {item.date}
            <ArrowUpRight className="h-3 w-3 text-white/38 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.6} />
          </span>
        </div>
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col px-4 pb-4 pt-2.5">
        <div className="flex items-end gap-2">
          <p className="text-[31px] leading-[0.9] font-black tracking-[-0.05em] tabular-nums" style={{ color: accent }}>
            <AnimatedMetric metric={item.metric} delay={300 + index * 80} glowColor={accent} />
          </p>
          <p className="pb-1 text-[9.5px] leading-[1.05] font-black uppercase tracking-[0.1em] text-white/56" style={clamp(2)}>
            {item.metricLabel}
          </p>
        </div>
        <h3 className="mt-1.5 text-[16.5px] leading-[1.05] font-black tracking-[-0.03em] text-white" style={clamp(2)}>
          {compactTitle(item)}
        </h3>
        {bullet ? (
          <p className="mt-2 flex items-start gap-2 text-[12px] leading-[1.2] font-semibold text-white/64">
            <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
            <span style={clamp(2)}>{bullet}</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

/** Shared gallery shell — refined header, page marker, ambient glows. */
export function GalleryFrame({
  eyebrow,
  title,
  page,
  children,
}: {
  eyebrow: string;
  title: string;
  page: number;
  children: ReactNode;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[8%] top-[4%] h-[380px] w-[560px] rounded-full bg-[#a78bfa]/14 blur-[160px]" />
        <div className="absolute right-[1%] top-[10%] h-[440px] w-[540px] rounded-full bg-[#2ec5ff]/12 blur-[180px]" />
        <div className="absolute bottom-[-14%] left-[36%] h-[380px] w-[720px] rounded-full bg-[#22c55e]/9 blur-[180px]" />
        <div className="absolute left-12 right-12 top-[120px] h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-[68px] pt-[46px]">
        <header className="flex items-start justify-between gap-8 animate-[bentoRise_0.6s_ease-out_both]">
          <div className="max-w-[1180px]">
            <p className="text-[12.5px] font-black uppercase tracking-[0.26em] text-white/52">{eyebrow}</p>
            <h1 className="mt-3 text-[46px] leading-[0.96] font-black tracking-[-0.045em] text-white">
              {title}
            </h1>
          </div>

          <div className="flex flex-shrink-0 items-baseline gap-2 pr-[300px] pt-1.5">
            <span className="text-[16px] font-black tabular-nums text-white">{String(page).padStart(2, '0')}</span>
            <span className="text-[13px] font-black tabular-nums text-white/35">/ 02</span>
          </div>
        </header>

        <section className="mt-5 flex min-h-0 flex-1 flex-col gap-4">{children}</section>
      </main>

      <style>{`
        @keyframes bentoRise { from { opacity: 0; transform: translateY(16px) scale(0.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes bentoHero { from { opacity: 0; transform: translateY(22px) scale(0.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
