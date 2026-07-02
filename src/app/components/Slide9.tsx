import type { CSSProperties, ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Ban,
  Building2,
  ClipboardCheck,
  FileCheck2,
  GitBranch,
  Handshake,
  LockOpen,
  ShieldCheck,
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

type PermitBlock = {
  title: string;
  accent: string;
  icon: typeof LockOpen;
  items: ReactNode[];
  metrics: { value: string; label: string; icon: typeof BadgeCheck; accent: string }[];
};

const blocks: PermitBlock[] = [
  {
    title: 'Эхлэх, авах, сунгах нөхцөл',
    accent: '#22c55e',
    icon: LockOpen,
    items: [
      <>ЗӨВШӨӨРӨЛ АВАХАД ТАТВАР, НДШ-ИЙН ӨРГҮЙ БАЙХ ШААРДЛАГА ТАВИХГҮЙ</>,
      <>ЭРСДЭЛ БАГАТАЙ БИЗНЕС МЭДЭГДЭЭД ШУУД ЭХЭЛНЭ</>,
      <>
        ЗӨВШӨӨРЛИЙН ХУГАЦАА
        <span className="block text-white/70">ТУСГАЙ : 5 жил - 10 жил</span>
        <span className="block text-white/70">ЭНГИЙН : 3 жил - 5 жил</span>
      </>,
      <>ЗӨРЧИЛГҮЙ БОЛ ЗӨВШӨӨРЛӨӨ 2 ӨДӨРТ СУНГУУЛНА</>,
    ],
    metrics: [
      { value: '10', label: 'жил тусгай зөвшөөрөл', icon: FileCheck2, accent: '#22c55e' },
      { value: '5', label: 'жил энгийн зөвшөөрөл', icon: BadgeCheck, accent: '#2ec5ff' },
      { value: '2', label: 'өдөрт сунгуулна', icon: ArrowRight, accent: '#f2b94b' },
    ],
  },
  {
    title: 'Зөвшөөрөл',
    accent: '#f2b94b',
    icon: GitBranch,
    items: [
      <>Эрчим хүч, санхүү, даатгал, үнэт цаас, боловсролын салбарын 41 ЗӨВШӨӨРӨЛ БАЙХГҮЙ БОЛОВ</>,
      <>
        24 ТУСГАЙ ЗӨВШӨӨРЛӨӨС ЭНГИЙН ЗӨВШӨӨРӨЛ
        <span className="block text-white/70">7 ТУСГАЙ, ЭНГИЙН ЗӨВШӨӨРӨЛ МЭДЭГДЭЛ БОЛОВ</span>
      </>,
    ],
    metrics: [
      { value: '41', label: 'зөвшөөрөл байхгүй болов', icon: Ban, accent: '#fb7185' },
      { value: '24', label: 'тусгай → энгийн', icon: GitBranch, accent: '#f2b94b' },
      { value: '7', label: 'мэдэгдэл болов', icon: ClipboardCheck, accent: '#2ec5ff' },
    ],
  },
  {
    title: '',
    accent: '#2ec5ff',
    icon: Handshake,
    items: [
      <>
        МЭРГЭЖЛИЙН НЭГДСЭН ХОЛБООД 120 ЗӨВШӨӨРӨЛ ОЛГОНО
      </>,
      <>
        НЭГ ТӨРЛИЙН ҮЙЛ АЖИЛЛАГААНД 4 БИШ 1 ТУСГАЙ ЗӨВШӨӨРӨЛ
      </>,
    ],
    metrics: [
      { value: '120', label: 'зөвшөөрөл олгоно', icon: Handshake, accent: '#2ec5ff' },
      { value: '3-4', label: 'тусгай зөвшөөрлөөс', icon: Building2, accent: '#a78bfa' },
      { value: '16', label: 'давхар барилгын жишээ', icon: ShieldCheck, accent: '#22c55e' },
    ],
  },
];

function MetricCard({ value, label, icon: Icon, accent, index }: PermitBlock['metrics'][number] & { index: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-[18px] border px-4 py-3"
      style={{
        borderColor: `${accent}42`,
        animation: `s9Rise .62s cubic-bezier(.22,1,.36,1) ${0.16 + index * 0.06}s both`,
        ...glassSoft,
      }}
    >
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 flex-shrink-0" style={{ color: accent }} strokeWidth={2.5} />
        <p className="text-[34px] leading-none font-black tracking-[-0.05em] tabular-nums" style={{ color: accent }}>
          {value}
        </p>
      </div>
      <p className="mt-2 text-[10.5px] leading-[1.05] font-black uppercase tracking-[0.1em] text-white/46">{label}</p>
    </div>
  );
}

function PermitPanel({ block, index }: { block: PermitBlock; index: number }) {
  const Icon = block.icon;
  return (
    <LiquidGlass
      radius={28}
      className="group min-h-0 overflow-hidden border p-5 transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: `${block.accent}52`,
        animation: `s9Panel .72s cubic-bezier(.22,1,.36,1) ${0.1 + index * 0.1}s both`,
        ...liquidShadow,
      }}
      {...liquidGlassProps}
    >
      <div className="relative flex h-full flex-col">
        <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition duration-300 group-hover:opacity-35" style={{ backgroundColor: block.accent }} />
        <div className="relative flex items-start justify-between gap-4">
          <div>

            <h2 className="mt-2 text-[25px] leading-[1.02] font-black tracking-[-0.03em] text-white">{block.title}</h2>
          </div>
          <span
            className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-[12px] border"
            style={{ borderColor: `${block.accent}66`, backgroundColor: `${block.accent}16`, color: block.accent }}
          >
            <Icon className="h-7 w-7" strokeWidth={2.5} />
          </span>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-3">
          {block.metrics.map((metric, metricIndex) => (
            <MetricCard key={metric.label} {...metric} index={metricIndex + index * 3} />
          ))}
        </div>

        <div className="relative mt-4 space-y-3">
          {block.items.map((item, itemIndex) => (
            <article
              key={itemIndex}
              className="flex gap-3 rounded-[18px] border p-3.5 transition duration-300 hover:bg-white/[0.07]"
              style={{ borderColor: `${block.accent}30`, ...glassSoft }}
            >
              <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: block.accent }} />
              <p className="text-[16.5px] leading-[1.2] font-black text-white/84">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </LiquidGlass>
  );
}

export function Slide9() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[4%] h-[360px] w-[560px] rounded-full bg-[#22c55e]/12 blur-[150px]" />
        <div className="absolute right-[2%] top-[12%] h-[420px] w-[520px] rounded-full bg-[#f2b94b]/12 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[34%] h-[360px] w-[720px] rounded-full bg-[#2ec5ff]/10 blur-[170px]" />
        <div className="absolute right-8 top-7 text-[140px] leading-none font-black tabular-nums text-white/[0.04]">05</div>
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-[54px] pt-[44px]">
        <header className="animate-[s9Header_.72s_cubic-bezier(.22,1,.36,1)_both]">
          <div className="flex items-center gap-4">
            <span className="rounded-[8px] border border-[#f2b94b]/55 bg-[#f2b94b]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
              Слайд 9
            </span>
            <span className="h-px w-24 bg-gradient-to-r from-[#f2b94b] to-transparent" />
          </div>
          <h1 className="mt-5 max-w-[1260px] text-[54px] leading-[0.95] font-black tracking-[-0.045em] text-white">
            ЗӨВШӨӨРӨЛ НЭРТЭЙ
            <span className="block text-[#f2b94b]">ХОРИГЛОЛТООС ЧӨЛӨӨЛӨВ</span>
          </h1>
          Зөвшөөрлийн хуулийн шинэчлэл:
        </header>

        <section className="mt-7 grid min-h-0 flex-1 grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <PermitPanel key={block.title} block={block} index={index} />
          ))}
        </section>
      </main>

      <style>{`
        @keyframes s9Header {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes s9Panel {
          from { opacity: 0; transform: translateY(20px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes s9Rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
