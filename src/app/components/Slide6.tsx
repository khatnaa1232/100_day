import type { CSSProperties, ReactNode } from 'react';
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Clock3,
  FilePenLine,
  Home,
  Landmark,
  Percent,
  ReceiptText,
  ShieldCheck,
  WalletCards,
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

type Point = {
  icon: typeof Home;
  accent: string;
  text: ReactNode;
};

const reformPoints: Point[] = [
  {
    icon: Home,
    accent: '#f2b94b',
    text: <>Үл хөдлөх хөрөнгө борлуулсны 2 хувийг цуцалж чөлөөлөв</>,
  },
  {
    icon: ReceiptText,
    accent: '#2ec5ff',
    text: <>НӨАТ төлөгчийн босгыг 50-аас 400 сая болгож чөлөөлөв. 23.429 НӨАТ төлөгчийн  орон зай тэлэв.</>,
  },
  {
    icon: Building2,
    accent: '#22c55e',
    text: <>Жилийн 2.5 тэрбум хүртэлх борлуулалтын орлоготой 180 мянган компани 1%-н татвартай</>,
  },
  {
    icon: Percent,
    accent: '#a78bfa',
    text: <>Дундын шинэ шатлал: 6-10 тэрбум төгрөгийн ашигтай компани 15%-н татвар төлнө. 600 гаруй компанийн ачаа хөнгөрнө.</>,
  },
];

const citizenPoints: Point[] = [
  {
    icon: WalletCards,
    accent: '#22c55e',
    text: (
      <>
        Жилийн 36 сая хүртэл орлоготой иргэний 792.000 төгрөг хүртэлх орлогод ногдуулах ХХОАТ-ыг 100 хувь чөлөөлөв
        <span className="mt-2 block text-white/70">→ Сард 79.000</span>
        <span className="block text-white/70">→ Жилд 948.000 төгрөг иргэндээ үлдэнэ</span>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    accent: '#fb7185',
    text: <>Өртэй татвар төлөгчийн дансыг бүтэн хаахгүй. Мөнгөн урсгалын 20% дансандаа үлдэнэ.</>,
  },
];

const reliefItems: Point[] = [
  { icon: CalendarDays, accent: '#2ec5ff', text: <>→ ААНОАТ, ХХОАТ-ын тайлан тушаах хугацааг сунгалаа.</> },
  { icon: Landmark, accent: '#f2b94b', text: <>→ Алдангийн дээд хэмжээ 50 хувиас хэтрэхгүй.</> },
  { icon: FilePenLine, accent: '#a78bfa', text: <>→ Татварын тайлан залруулах хугацааг 2 жил хүртэл</> },
  { icon: Clock3, accent: '#22c55e', text: <>→ НӨАТ төлөх хугацаа 1 сараас 2 сар</> },
];

function PointCard({ point, index }: { point: Point; index: number }) {
  const Icon = point.icon;
  return (
    <article
      className="group relative overflow-hidden rounded-[22px] border p-4 transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: `${point.accent}42`,
        animation: `s6Rise .62s cubic-bezier(.22,1,.36,1) ${0.1 + index * 0.06}s both`,
        ...glassSoft,
      }}
    >
      <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full opacity-20 blur-2xl transition duration-300 group-hover:opacity-35" style={{ backgroundColor: point.accent }} />
      <div className="relative flex items-start gap-3">
        <span
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-[10px] border"
          style={{ borderColor: `${point.accent}66`, backgroundColor: `${point.accent}16`, color: point.accent }}
        >
          <Icon className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <p className="text-[18px] leading-[1.22] font-bold tracking-[-0.01em] text-white/84">{point.text}</p>
      </div>
      <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 opacity-35 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: point.accent }} />
    </article>
  );
}

export function Slide6() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[4%] h-[360px] w-[560px] rounded-full bg-[#f2b94b]/12 blur-[150px]" />
        <div className="absolute right-[2%] top-[12%] h-[420px] w-[520px] rounded-full bg-[#2ec5ff]/12 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[34%] h-[360px] w-[720px] rounded-full bg-[#22c55e]/10 blur-[170px]" />
        <div className="absolute right-8 top-7 text-[140px] leading-none font-black tabular-nums text-white/[0.04]">02</div>
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-[54px] pt-[44px]">
        <header className="flex items-start justify-between gap-8">
          <div className="max-w-[1180px] animate-[s6Header_.72s_cubic-bezier(.22,1,.36,1)_both]">
            <div className="flex items-center gap-4">
              <span className="rounded-[8px] border border-[#f2b94b]/55 bg-[#f2b94b]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
                100 ЧӨЛӨӨЛӨЛТ
              </span>
              <span className="h-px w-24 bg-gradient-to-r from-[#f2b94b] to-transparent" />
              <span className="text-[16px] font-black tabular-nums text-white/58">2026.05.19</span>
            </div>
            <h1 className="mt-5 max-w-[1120px] text-[54px] leading-[0.95] font-black tracking-[-0.045em] text-white">
              ТАТВАРЫН ЧӨЛӨӨЛӨЛТ:
              <span className="block text-[#f2b94b]">Багц хуулийн шинэчлэл</span>
            </h1>
          </div>

          <LiquidGlass
            radius={24}
            className="w-[310px] flex-shrink-0 overflow-hidden border border-[#22c55e]/38 p-5 animate-[s6Header_.72s_cubic-bezier(.22,1,.36,1)_.08s_both]"
            style={liquidShadow}
            {...liquidGlassProps}
          >
            <div className="flex items-center gap-3">
              <CalendarDays className="h-8 w-8 flex-shrink-0 text-[#22c55e]" strokeWidth={2.5} />
              <p className="text-[13px] font-black uppercase tracking-[0.16em] text-[#22c55e]">Хэрэгжих огноо</p>
            </div>
            <p className="mt-4 text-[32px] leading-[0.96] font-black tracking-[-0.04em] text-white">
              2027.01.01-нээс хэрэгжинэ
            </p>
          </LiquidGlass>
        </header>

        <section className="mt-7 grid min-h-0 flex-1 grid-cols-[1.08fr_0.92fr] gap-6">
          <LiquidGlass radius={30} className="min-h-0 overflow-hidden border border-white/18 p-6" style={liquidShadow} {...liquidGlassProps}>
            <div className="grid h-full grid-rows-[auto_1fr]">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: '2%', label: 'цуцалж чөлөөлөв', accent: '#f2b94b' },
                  { value: '400 сая', label: 'НӨАТ төлөгчийн босго', accent: '#2ec5ff' },
                  { value: '180 мянган', label: 'компани 1%-н татвартай', accent: '#22c55e' },
                  { value: '15%', label: 'дундын шинэ шатлал', accent: '#a78bfa' },
                ].map((stat, index) => (
                  <div
                    key={stat.value}
                    className="relative overflow-hidden rounded-[20px] border p-4"
                    style={{ borderColor: `${stat.accent}50`, animation: `s6Rise .62s cubic-bezier(.22,1,.36,1) ${0.12 + index * 0.06}s both`, ...glassSoft }}
                  >
                    <p className="text-[34px] leading-none font-black tracking-[-0.05em] tabular-nums" style={{ color: stat.accent }}>{stat.value}</p>
                    <p className="mt-2 text-[11px] leading-[1.08] font-black uppercase tracking-[0.08em] text-white/52">{stat.label}</p>
                    <span className="absolute inset-x-0 bottom-0 h-[4px]" style={{ backgroundColor: `${stat.accent}55` }} />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid min-h-0 grid-cols-2 gap-4">
                {reformPoints.map((point, index) => <PointCard key={index} point={point} index={index} />)}
              </div>
            </div>
          </LiquidGlass>

          <aside className="flex min-h-0 flex-col gap-5">
            <LiquidGlass radius={28} className="min-h-0 flex-[1.05] overflow-hidden border border-white/18 p-5" style={liquidShadow} {...liquidGlassProps}>
              <div className="grid h-full grid-rows-[auto_1fr]">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '792.000', label: 'төгрөг хүртэлх орлого', accent: '#22c55e' },
                    { value: '79.000', label: 'сард', accent: '#2ec5ff' },
                    { value: '948.000', label: 'жилд', accent: '#f2b94b' },
                  ].map((stat, index) => (
                    <div key={stat.value} className="rounded-[18px] border px-4 py-3" style={{ borderColor: `${stat.accent}42`, animation: `s6Rise .62s cubic-bezier(.22,1,.36,1) ${0.22 + index * 0.06}s both`, ...glassSoft }}>
                      <p className="text-[30px] leading-none font-black tracking-[-0.05em] tabular-nums" style={{ color: stat.accent }}>{stat.value}</p>
                      <p className="mt-1 text-[10px] leading-[1.05] font-black uppercase tracking-[0.1em] text-white/46">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-4">
                  {citizenPoints.map((point, index) => <PointCard key={index} point={point} index={index + 5} />)}
                </div>
              </div>
            </LiquidGlass>

            <LiquidGlass radius={28} className="overflow-hidden border border-[#f2b94b]/32 p-5" style={liquidShadow} {...liquidGlassProps}>
              <p className="mb-4 text-[24px] leading-none font-black tracking-[-0.025em] text-[#f2b94b]">
                Татварын дарамтаас чөлөөлнө.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {reliefItems.map((point, index) => <PointCard key={index} point={point} index={index + 8} />)}
              </div>
            </LiquidGlass>
          </aside>
        </section>
      </main>

      <style>{`
        @keyframes s6Header {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes s6Rise {
          from { opacity: 0; transform: translateY(16px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes s6Pulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
