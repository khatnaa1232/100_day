import type { CSSProperties } from 'react';
import {
  Backpack,
  Bot,
  GraduationCap,
  Home,
  Laptop,
  Quote,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import schoolImg from '../../imports/school.png';
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

type SchoolStat = {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
};

const schoolStats: SchoolStat[] = [
  { label: 'Багийн бага сургууль', value: '5–8', icon: Backpack, accent: '#22c55e' },
  { label: 'Хотхоны бага сургууль', value: '0–11', icon: Home, accent: '#2ec5ff' },
  { label: 'Google-ийн нэрэмжит сургууль', value: '1–2', icon: Sparkles, accent: '#a78bfa' },
  { label: 'Олон улсын хөтөлбөртэй ахлах сургууль', value: '4–6', icon: GraduationCap, accent: '#f2b94b' },
  { label: 'Chromebook угсрах үйлдвэр', value: '50 000–100 000', icon: Laptop, accent: '#38bdf8' },
  { label: '1 багшид 1 AI туслах', value: '7 300–15 000', icon: Bot, accent: '#fb7185' },
];

const partnerStat: SchoolStat = {
  label: 'Сургууль, ажил олгогч хамтдаа ур чадварт бэлтгэнэ',
  value: '565 904–594 202',
  icon: UsersRound,
  accent: '#22c55e',
};

function StatCard({ stat, index }: { stat: SchoolStat; index: number }) {
  const Icon = stat.icon;
  return (
    <div
      className="relative flex min-h-0 flex-col overflow-hidden rounded-[20px] border p-4"
      style={{
        borderColor: `${stat.accent}46`,
        animation: `s17Rise .62s cubic-bezier(.22,1,.36,1) ${0.2 + index * 0.06}s both`,
        ...glassSoft,
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-[10px] border"
          style={{ borderColor: `${stat.accent}66`, backgroundColor: `${stat.accent}16`, color: stat.accent }}
        >
          <Icon className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <p className="text-[13px] leading-[1.16] font-black uppercase tracking-[0.06em] text-white/62">{stat.label}</p>
      </div>
      <p className="mt-auto pt-3 text-[30px] leading-none font-black tracking-[-0.04em] tabular-nums" style={{ color: stat.accent }}>
        {stat.value}
      </p>
      <span className="absolute inset-x-0 bottom-0 h-[4px]" style={{ backgroundColor: `${stat.accent}55` }} />
    </div>
  );
}

export function Slide17() {
  const PartnerIcon = partnerStat.icon;
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[6%] h-[380px] w-[560px] rounded-full bg-[#f2b94b]/12 blur-[150px]" />
        <div className="absolute right-[4%] top-[16%] h-[420px] w-[520px] rounded-full bg-[#2ec5ff]/10 blur-[170px]" />
        <div className="absolute bottom-[-14%] left-[30%] h-[380px] w-[720px] rounded-full bg-[#22c55e]/10 blur-[170px]" />
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-[54px] pt-[44px]">
        <header className="flex items-start justify-between gap-8">
          <div className="animate-[s17Header_.72s_cubic-bezier(.22,1,.36,1)_both]">
            <div className="flex items-center gap-4">
              <span className="rounded-[8px] border border-[#f2b94b]/55 bg-[#f2b94b]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
                Боловсролын салбар
              </span>
              <span className="h-px w-24 bg-gradient-to-r from-[#f2b94b] to-transparent" />
              <span className="text-[16px] font-black uppercase tracking-[0.12em] text-white/58">
                Итгэл · Хурд · Бодит үр дүн
              </span>
            </div>
            <h1 className="mt-5 max-w-[1240px] text-[54px] leading-[0.95] font-black tracking-[-0.045em] text-white">
              БОЛОВСРОЛЫН ЧӨЛӨӨЛӨЛТ:
              <span className="block text-[#f2b94b]">“Гэрт ойрхон сургууль”</span>
            </h1>
          </div>

          {/* keep the top-right corner clear — the deck-level #чөлөөлье logo lives there */}
          <div className="h-16 w-[340px] flex-shrink-0" aria-hidden="true" />
        </header>

        <section className="mt-7 grid min-h-0 flex-1 grid-cols-[1.04fr_0.96fr] gap-6">
          <LiquidGlass radius={30} className="min-h-0 overflow-hidden border border-white/18 p-6" style={liquidShadow} {...liquidGlassProps}>
            <div className="flex h-full flex-col">
              <div className="flex items-start gap-4 border-b border-white/12 pb-5 animate-[s17Rise_.62s_cubic-bezier(.22,1,.36,1)_.08s_both]">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-[10px] border border-[#2ec5ff]/60 bg-[#2ec5ff]/12 text-[#2ec5ff]">
                  <Quote className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-[21px] leading-[1.26] font-bold italic text-white/88" style={{ fontFamily: 'Lora, serif' }}>
                    “Эх орныхоо тусгаар тогтнолыг эдийн засгийн эрх чөлөөгөөр баталгаажуулах нь Та бидний эрхэм дээд зорилго юм”.
                  </p>
                  <p className="mt-2 text-[12px] font-black uppercase tracking-[0.16em] text-white/48">
                    Монгол Улсын Ерөнхий сайд · Ням-Осорын Учрал
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 animate-[s17Rise_.62s_cubic-bezier(.22,1,.36,1)_.14s_both]">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-[10px] border border-[#f2b94b]/60 bg-[#f2b94b]/12 text-[#f2b94b]">
                  <Target className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#f2b94b]">Гол зорилт</p>
                  <h2 className="mt-1 text-[23px] leading-[1.04] font-black tracking-[-0.02em] text-white">
                    Монгол хүүхдийг мэдлэг, ур чадварын хоцрогдлоос чөлөөлнө
                  </h2>
                </div>
              </div>

              <div className="mt-5 grid min-h-0 flex-1 grid-cols-2 gap-3">
                {schoolStats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} index={index} />
                ))}
              </div>

              <div
                className="mt-3 flex items-center gap-4 overflow-hidden rounded-[20px] border p-4 animate-[s17Rise_.62s_cubic-bezier(.22,1,.36,1)_.58s_both]"
                style={{ borderColor: `${partnerStat.accent}55`, ...glassSoft }}
              >
                <span
                  className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-[10px] border"
                  style={{ borderColor: `${partnerStat.accent}66`, backgroundColor: `${partnerStat.accent}16`, color: partnerStat.accent }}
                >
                  <PartnerIcon className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <p className="min-w-0 flex-1 text-[15px] leading-[1.16] font-black uppercase tracking-[0.05em] text-white/72">
                  {partnerStat.label}
                </p>
                <p className="flex-shrink-0 text-[32px] leading-none font-black tracking-[-0.04em] tabular-nums" style={{ color: partnerStat.accent }}>
                  {partnerStat.value}
                </p>
              </div>
            </div>
          </LiquidGlass>

          <LiquidGlass
            radius={30}
            className="relative min-h-0 overflow-hidden border border-white/18 animate-[s17Rise_.72s_cubic-bezier(.22,1,.36,1)_.16s_both]"
            style={liquidShadow}
            {...liquidGlassProps}
          >
            <img src={schoolImg} alt="Гэрт ойрхон сургууль — сургуулиасаа гарч буй хүүхдүүд" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06163d]/92 via-[#06163d]/16 to-transparent" />
            <div className="absolute inset-x-7 bottom-8">
              <span className="inline-block rounded-full border border-[#f2b94b]/60 bg-[#06163d]/72 px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.2em] text-[#f2b94b] backdrop-blur-sm">
                Чөлөөлье үндэсний санаачилгаас онцлов
              </span>
              <p className="mt-3 text-[26px] leading-[1.06] font-black tracking-[-0.02em] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
                Мэдлэг, ур чадварын хоцрогдлоос чөлөөлнө
              </p>
            </div>
          </LiquidGlass>
        </section>
      </main>

      <style>{`
        @keyframes s17Header {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes s17Rise {
          from { opacity: 0; transform: translateY(16px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
