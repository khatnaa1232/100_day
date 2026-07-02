import type { CSSProperties, ReactNode } from 'react';
import {
  BadgeCheck,
  BrainCircuit,
  Building2,
  Cloud,
  FileSignature,
  LockOpen,
  Network,
  Smartphone,
  Workflow,
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

type ServiceBlock = {
  title: string;
  accent: string;
  icon: typeof LockOpen;
  items: ReactNode[];
  metrics: { value: string; label: string; icon: typeof BadgeCheck; accent: string }[];
};

const blocks: ServiceBlock[] = [
  {
    title: 'Журмаар зөвшөөрлийг журамлахгүй',
    accent: '#f2b94b',
    icon: FileSignature,
    items: [
      <>
        ЖУРМААР ЗӨВШӨӨРЛИЙГ ЖУРАМЛАХГҮЙ
        <span className="mt-2 block text-white/70">
          Хүнд суртлын 60+ журам.
        </span>
      </>,
      <>ЗӨВШӨӨРӨЛ АВАХАД НЭХДЭГ : <br />
        20-30 ШААРДЛАГА <br />8-15</>, // доош сумаар хугалаж харуулах
    ],
    metrics: [
      { value: '60', label: 'гаруй журмаар хүнд суртал', icon: FileSignature, accent: '#f2b94b' },
      { value: '20-30', label: 'шаардлага', icon: Workflow, accent: '#fb7185' },
      { value: '8-15', label: 'болгож багасгав', icon: BadgeCheck, accent: '#22c55e' },
    ],
  },
  {
    title: '',
    accent: '#2ec5ff',
    icon: Cloud,
    items: [
      <>ЦААСАН БИШ ЦАХИМ ЗӨВШӨӨРӨЛ <br /> 321</>,
      <>AI-ашиглан 30 минутанд оноосон нэрээ сонгон авч, бүртгүүлж, тамгаа захиалан, дансаа нээлгэдэг боллоо.</>, // Оноосон нэр, Бүртгэл, Данс нээх, Тамга захиалга  = AI 30 Минут
      <>Компанитай холбоотой 10+ төрлийн мэдээлэл цахимаар авна.</>,
      <>Төрийн үйлчилгээний "API SERVICE"-ийг хувийн хэвшилд нээв. GS25, CU, үүр холбооны компаниудын салбарууд, банкны аппликейшнуудаас гар утаснаасаа төрийн үйлчилгээ авч байна. Төр дахин программ хангамж хөгжүүлэхгүй.</>,
    ],
    metrics: [
      { value: '321', label: 'зөвшөөрөл цахимаар', icon: Cloud, accent: '#2ec5ff' },
      { value: '30', label: 'минутанд', icon: BrainCircuit, accent: '#a78bfa' },
      { value: 'API', label: 'SERVICE', icon: Network, accent: '#22c55e' },
    ],
  },
  {
    title: 'Мэдэгдээд шууд эхэлнэ',
    accent: '#22c55e',
    icon: Smartphone,
    items: [
      <>Гэрээ, дүгнэлт, тохирол, бүртгэл зэрэг зүс нэрээ өөрчилсөн зөвшөөрөл биш зөвшөөрлөөс хийж бүтээх хүслийг чөлөөлөв</>,
      <>Иргэндээ очиж үйлчилдэг төр</>,
      <>617 иргэн, ААН
        <br /> 8 төрлийн 146 бизнесийг эхлүүлсэн
        <br />
        www.E-bisiness.mn, www.licence.mn-д гар утаснаасаа мэдэгдээд шууд эхлээд байна.</>,
    ],
    metrics: [
      { value: '617', label: 'иргэн, компани', icon: Building2, accent: '#22c55e' },
      { value: '146', label: 'бизнесийг', icon: LockOpen, accent: '#f2b94b' },
      { value: '8', label: 'төрлийн', icon: Smartphone, accent: '#2ec5ff' },
    ],
  },
];

function MetricCard({ value, label, icon: Icon, accent, index }: ServiceBlock['metrics'][number] & { index: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-[18px] border px-4 py-3"
      style={{
        borderColor: `${accent}42`,
        animation: `s10Rise .62s cubic-bezier(.22,1,.36,1) ${0.16 + index * 0.06}s both`,
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

function ServicePanel({ block, index }: { block: ServiceBlock; index: number }) {
  const Icon = block.icon;
  return (
    <LiquidGlass
      radius={28}
      className="group min-h-0 overflow-hidden border p-5 transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: `${block.accent}52`,
        animation: `s10Panel .72s cubic-bezier(.22,1,.36,1) ${0.1 + index * 0.1}s both`,
        ...liquidShadow,
      }}
      {...liquidGlassProps}
    >
      <div className="relative flex h-full flex-col">
        <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition duration-300 group-hover:opacity-35" style={{ backgroundColor: block.accent }} />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.18em]" style={{ color: block.accent }}>
              2026.04.15.
            </p>
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

export function Slide10() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[4%] h-[360px] w-[560px] rounded-full bg-[#2ec5ff]/12 blur-[150px]" />
        <div className="absolute right-[2%] top-[12%] h-[420px] w-[520px] rounded-full bg-[#22c55e]/12 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[34%] h-[360px] w-[720px] rounded-full bg-[#f2b94b]/10 blur-[170px]" />
        <div className="absolute right-8 top-7 text-[140px] leading-none font-black tabular-nums text-white/[0.04]">06</div>
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-[54px] pt-[44px]">
        <header className="flex items-start justify-between gap-8 animate-[s10Header_.72s_cubic-bezier(.22,1,.36,1)_both]">
          <div className="max-w-[1260px]">
            <div className="flex items-center gap-4">
              <span className="rounded-[8px] border border-[#f2b94b]/55 bg-[#f2b94b]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
                Слайд 10
              </span>
              <span className="h-px w-24 bg-gradient-to-r from-[#f2b94b] to-transparent" />
              <span className="text-[16px] font-black tabular-nums text-white/58">2026.04.15.</span>
            </div>
            <h1 className="mt-5 max-w-[1220px] text-[54px] leading-[0.95] font-black tracking-[-0.045em] text-white">
              ЗӨВШӨӨРӨЛ НЭРТЭЙ
              <span className="block text-[#f2b94b]">ХОРИГЛОЛТООС ЧӨЛӨӨЛӨВ</span>
            </h1>
          </div>
        </header>

        <section className="mt-7 grid min-h-0 flex-1 grid-cols-3 gap-6">
          {blocks.map((block, index) => (
            <ServicePanel key={block.title} block={block} index={index} />
          ))}
        </section>
      </main>

      <style>{`
        @keyframes s10Header {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes s10Panel {
          from { opacity: 0; transform: translateY(20px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes s10Rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
