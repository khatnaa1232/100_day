import type { CSSProperties, ReactNode } from 'react';
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Handshake,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Vault,
  type LucideIcon,
} from 'lucide-react';
import { LiquidGlass } from './LiquidGlass';

const liquidGlassProps = {
  blur: 2.5,
  edgeIntensity: 0,
  rimIntensity: 0,
  baseIntensity: 0,
  edgeDistance: 0.05,
  rimDistance: 0.8,
  baseDistance: 0.08,
  cornerBoost: 0,
  ripple: 0.1,
  tint: 0,
  warp: false,
};

const liquidShadow: CSSProperties = {
  boxShadow: '0 25px 50px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10)',
};

const glassSoft: CSSProperties = {
  background: 'linear-gradient(180deg, rgba(6,22,61,0.34), rgba(6,22,61,0.18))',
  backdropFilter: 'blur(6px) saturate(125%)',
  WebkitBackdropFilter: 'blur(6px) saturate(125%)',
  boxShadow: '0 18px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.09)',
};

type StoryPanel = {
  title: string;
  date: string;
  accent: string;
  icon: typeof Vault;
  metric: string;
  metricLabel: string;
  points: { icon: LucideIcon; text: ReactNode }[];
  tokens: { value: string; label: string; icon: typeof Building2; accent: string }[];
};

const panels: StoryPanel[] = [
  {
    title: 'ХААГДСАН ДАНСУУДЫГ НЭЭВ',
    date: '2026.04.06.',
    accent: '#22c55e',
    icon: Vault,
    metric: '72.4',
    metricLabel: 'тэрбум төгрөг төлөгдөв.',
    points: [
      {
        icon: Building2,
        text: (
          <>
            Татварын өртэй 12153 компанийн дансыг сарын хугацаатай нээв.
            <span className="mt-2 block text-white/70">1700 гаруй ААН өрөөс бүрэн чөлөөлөгдөж, 72.4 тэрбум төгрөг төлөгдөв.</span>
          </>
        ),
      },
      { icon: Landmark, text: <>НДШ-ийн 155,6 тэрбум төгрөгийн өртэй 23480 ажил олгогчийн дансыг нээв</> },
      { icon: Handshake, text: <>Итгэлээс итгэл, иргэн ба төрийн итгэлцэл</> },
    ],
    tokens: [
      { value: '12153', label: 'компанийн данс', icon: Building2, accent: '#2ec5ff' },
      { value: '1700', label: 'гаруй ААН', icon: BadgeCheck, accent: '#22c55e' },
      { value: '23480', label: 'ажил олгогч', icon: Landmark, accent: '#f2b94b' },
    ],
  },
  {
    title: 'ТӨЛӨВЛӨГӨӨТ 9376 ХЯНАЛТ ШАЛГАЛТЫГ ЦУЦЛАВ',
    date: '2026.04.18',
    accent: '#f2b94b',
    icon: ClipboardCheck,
    metric: '9376',
    metricLabel: 'хяналт шалгалтаас чөлөөлөв.',
    points: [
      { icon: ShieldCheck, text: <>Нэг компанид жилд 30 гаруй удаа очиж болдог, 1700 гаруй улсын байцаагчийн 8100 гаруй дүрэм журмын төлөвлөгөөт 9376 хяналт шалгалтаас чөлөөлөв.</> },
      { icon: HeartPulse, text: <>Хүний эрүүл мэнд, байгаль орчинд сөрөг нөлөөтэйгээс бусад 2026 оны төлөвлөгөөт бүх хяналт шалгалтаас хөдөлмөрлөж бүтээгч хүн бүр, хувийн хэвшлээ чөлөөлөв.</> },
    ],
    tokens: [
      { value: '30', label: 'гаруй удаа', icon: ArrowUpRight, accent: '#fb7185' },
      { value: '1700', label: 'гаруй улсын байцаагч', icon: ShieldCheck, accent: '#2ec5ff' },
      { value: '8100', label: 'гаруй дүрэм журам', icon: ClipboardCheck, accent: '#a78bfa' },
    ],
  },
];

function MetricToken({ value, label, icon: Icon, accent, index }: StoryPanel['tokens'][number] & { index: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-[18px] border px-4 py-3"
      style={{
        borderColor: `${accent}42`,
        animation: `s7Rise .62s cubic-bezier(.22,1,.36,1) ${0.2 + index * 0.07}s both`,
        ...glassSoft,
      }}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 flex-shrink-0" style={{ color: accent }} strokeWidth={2.5} />
        <p className="text-[30px] leading-none font-black tracking-[-0.05em] tabular-nums" style={{ color: accent }}>
          {value}
        </p>
      </div>
      <p className="mt-2 text-[10.5px] leading-[1.05] font-black uppercase tracking-[0.1em] text-white/46">{label}</p>
    </div>
  );
}

function UnlockPanel({ panel, index }: { panel: StoryPanel; index: number }) {
  const Icon = panel.icon;
  return (
    <LiquidGlass
      radius={30}
      className="group min-h-0 overflow-hidden border p-6 transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: `${panel.accent}52`,
        animation: `s7Panel .72s cubic-bezier(.22,1,.36,1) ${0.1 + index * 0.1}s both`,
        ...liquidShadow,
      }}
      {...liquidGlassProps}
    >
      <div className="relative flex h-full flex-col">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-20 blur-3xl transition duration-300 group-hover:opacity-35" style={{ backgroundColor: panel.accent }} />

        <div className="relative flex items-start justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-[8px] border px-3.5 py-1.5 text-[13px] font-black tabular-nums"
                style={{ borderColor: `${panel.accent}66`, backgroundColor: `${panel.accent}16`, color: panel.accent }}
              >
                <CalendarDays className="h-4 w-4" strokeWidth={2.5} />
                {panel.date}
              </span>
            </div>
            <h2 className="mt-4 max-w-[640px] text-[35px] leading-[0.96] font-black tracking-[-0.04em] text-white">
              {panel.title}
            </h2>
          </div>
          <span
            className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-[12px] border"
            style={{ borderColor: `${panel.accent}66`, backgroundColor: `${panel.accent}16`, color: panel.accent }}
          >
            <Icon className="h-8 w-8" strokeWidth={2.5} />
          </span>
        </div>

        <div className="relative mt-5 grid grid-cols-[1fr_1.45fr] gap-4">
          <div className="overflow-hidden rounded-[22px] border p-5" style={{ borderColor: `${panel.accent}50`, ...glassSoft }}>
            <p className="text-[66px] leading-none font-black tracking-[-0.06em] tabular-nums" style={{ color: panel.accent }}>
              {panel.metric}
            </p>
            <p className="mt-2 text-[13px] leading-[1.1] font-black uppercase tracking-[0.1em] text-white/56">
              {panel.metricLabel}
            </p>
            <div className="mt-5 h-[5px] overflow-hidden rounded-full" style={{ backgroundColor: `${panel.accent}24` }}>
              <span className="block h-full w-2/3 rounded-full animate-[s7Bar_1.2s_cubic-bezier(.22,1,.36,1)_both]" style={{ backgroundColor: panel.accent }} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {panel.tokens.map((token, tokenIndex) => (
              <MetricToken key={token.label} {...token} index={tokenIndex + index * 3} />
            ))}
          </div>
        </div>

        <div className="relative mt-5 space-y-3">
          {panel.points.map((point, pointIndex) => {
            const PointIcon = point.icon;
            return (
              <article
                key={pointIndex}
                className="flex gap-3 rounded-[20px] border p-4 transition duration-300 hover:bg-white/[0.07]"
                style={{ borderColor: `${panel.accent}30`, ...glassSoft }}
              >
                <span
                  className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-[9px]"
                  style={{ backgroundColor: `${panel.accent}1c`, color: panel.accent }}
                >
                  <PointIcon className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <p className="text-[18px] leading-[1.24] font-semibold text-white/82">{point.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </LiquidGlass>
  );
}

export function Slide7() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[4%] h-[360px] w-[560px] rounded-full bg-[#22c55e]/12 blur-[150px]" />
        <div className="absolute right-[2%] top-[12%] h-[420px] w-[520px] rounded-full bg-[#f2b94b]/12 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[34%] h-[360px] w-[720px] rounded-full bg-[#2ec5ff]/10 blur-[170px]" />
        <div className="absolute right-8 top-7 text-[140px] leading-none font-black tabular-nums text-white/[0.04]">03</div>
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-[54px] pt-[44px]">
        <header className="flex items-start justify-between gap-8 animate-[s7Header_.72s_cubic-bezier(.22,1,.36,1)_both]">
          <div className="max-w-[1260px]">
            <div className="flex items-center gap-4">
              <span className="rounded-[8px] border border-[#f2b94b]/55 bg-[#f2b94b]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
                100 ЧӨЛӨӨЛӨЛТ
              </span>
              <span className="h-px w-24 bg-gradient-to-r from-[#f2b94b] to-transparent" />
            </div>
            <h1 className="mt-5 max-w-[1220px] text-[54px] leading-[0.95] font-black tracking-[-0.045em] text-white">
              ТАТВАРЫН ЧӨЛӨӨЛӨЛТ:
              <span className="block text-[#f2b94b]">Багц хуулийн шинэчлэл</span>
            </h1>
          </div>
        </header>

        <section className="mt-7 grid min-h-0 flex-1 grid-cols-2 gap-6">
          {panels.map((panel, index) => (
            <UnlockPanel key={panel.title} panel={panel} index={index} />
          ))}
        </section>
      </main>

      <style>{`
        @keyframes s7Header {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes s7Panel {
          from { opacity: 0; transform: translateY(20px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes s7Rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes s7Bar {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </div>
  );
}
