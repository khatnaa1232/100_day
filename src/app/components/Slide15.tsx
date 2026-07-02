import type { CSSProperties } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Factory,
  Globe2,
  Landmark,
  Percent,
  Scale,
  ShieldAlert,
  Target,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LiquidGlass } from './LiquidGlass';

type Signal = {
  label: string;
  value: string;
  note: string;
  heat: number;
  icon: LucideIcon;
};

type Issue = {
  title: string;
  label: string;
  icon: LucideIcon;
};

const signals: Signal[] = [
  {
    label: 'ДНБ-ийн өсөлт',
    value: '6.8%',
    note: 'Бодит ДНБ 34.3 их наяд төгрөгт хүрч өссөн.',
    heat: 68,
    icon: TrendingUp,
  },
  {
    label: 'Өрсөлдөх чадвар',
    value: '65 → 58',
    note: '2027 онд 7 эрэмбээр ахиулах зорилттой.',
    heat: 58,
    icon: Target,
  },
  {
    label: 'Гадаад худалдаа',
    value: '27.0 тэрбум $',
    note: 'Тэнцэл 4.4 тэрбум ам.долларын ашигтай.',
    heat: 86,
    icon: Globe2,
  },
  {
    label: 'Инфляц',
    value: '7.5%',
    note: '2026 оны 3 дугаар сард 7.4 хувь.',
    heat: 45,
    icon: Percent,
  },
];

const issues: Issue[] = [
  { title: 'Уул уурхай, нүүрсний эдийн засаг', label: 'Хамаарал', icon: Factory },
  { title: 'Хувийн хэвшилтэйгээ өрсөлддөг төр', label: 'Төрийн оролцоо', icon: Landmark },
  { title: 'Татварын хүнд ачаа дарамт', label: 'Дарамт', icon: BarChart3 },
  { title: 'Хүнд суртал, хууль бус ашиг сонирхол', label: 'Саад', icon: ShieldAlert },
  { title: 'Хөрөнгө оруулагчдын алдарсан итгэл', label: 'Итгэл', icon: AlertTriangle },
];

export function Slide15() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[54px] top-[226px] h-[540px] w-[540px] rounded-full border border-primary/[0.08]" />
        <div className="absolute left-[132px] top-[304px] h-[384px] w-[384px] rounded-full border border-primary/[0.08]" />
        <div className="absolute right-[-100px] bottom-[-170px] text-[420px] leading-none font-black text-white/[0.018]">74</div>
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-14 pt-9">
        <header className="flex items-start justify-between gap-12 animate-[ecoFade_.65s_ease-out_both]">
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 flex-shrink-0 place-items-center border-2 border-primary text-[24px] font-black text-primary">I</span>
            <div>
              <h1 className="hundred-days-glow text-[54px] leading-[0.9] font-black tracking-[-0.045em]">
                ЭДИЙН ЗАСГИЙН
                <br />
                <span className="text-primary">ЧӨЛӨӨЛӨЛТ</span>
              </h1>
              <p className="mt-4 max-w-[1060px] text-[16px] leading-[1.18] font-black uppercase tracking-[0.035em] text-white/62">
                Түүхий эд гаргадаг түүхийг өөрчилж, үнэ цэн, өртөг ашиг нэмж боловсруулах үйлдвэрүүдийн үүдийг нээнэ
              </p>
            </div>
          </div>

          <div className="w-[360px] flex-shrink-0 pt-3 pr-[270px]" />
        </header>

        <section className="mt-8 grid min-h-0 flex-1 grid-cols-[38%_minmax(0,1fr)] gap-9">
          <aside className="flex min-h-0 flex-col pr-4 animate-[ecoLeft_.75s_ease-out_.08s_both]">
            <p
              className="border-y border-primary/32 py-5 text-[29px] leading-[1.1] font-black italic text-primary"
              style={{ fontFamily: 'Lora, serif' }}
            >
              “Төрийн зуршлаас хувийн хэвшил үү”
            </p>

            <div className="mt-7 flex items-start gap-3">
              <span className="mt-1 h-9 w-2 bg-primary" />
              <div>
                <h2 className="mt-1 text-[31px] leading-[1.02] font-black tracking-[-0.02em]">
                  Монгол Улсын эдийн засгийн нөхцөл байдал
                </h2>
              </div>
            </div>

            <LiquidGlass
              radius={18}
              className="relative mt-9 flex-1 min-h-0 overflow-hidden border border-primary/28 p-6"
              style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.22)' }}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center border border-primary/65 text-primary">
                    <Scale className="h-6 w-6" strokeWidth={2.6} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-primary">гол хэмжүүр</p>
                    <h3 className="mt-1 text-[24px] leading-[1.02] font-black">Эдийн засгийн эрх чөлөө</h3>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-[76px] leading-[0.82] font-black tracking-[-0.06em] tabular-nums">74/176</p>
                  <div className="mt-4 h-[5px] bg-white/12">
                    <div className="h-full w-[42%] origin-left bg-primary animate-[ecoBar_1s_ease-out_.35s_both]" />
                  </div>
                  <p className="mt-4 max-w-[430px] text-[15px] leading-[1.18] font-bold text-white/64">
                    2025 онд эдийн засгийн эрх чөлөөний индексээр 74 дүгээр байрт эрэмбэлэгдсэн.
                  </p>
                </div>

                <div className="mt-auto border-t border-white/14 pt-4">
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-primary">Хувийн хэвшлийн орон зай</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-[38px] leading-none font-black tracking-[-0.04em] text-white">76.2%</span>
                    <ArrowRight className="h-6 w-6 text-primary" strokeWidth={3} />
                    <span className="text-[38px] leading-none font-black tracking-[-0.04em] text-primary">79%</span>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </aside>

          <section className="flex min-w-0 min-h-0 flex-col animate-[ecoMap_.75s_ease-out_.14s_both]">
            <div className="mt-6 grid min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4">
              {signals.map(({ label, value, note, heat, icon: Icon }, index) => (
                <LiquidGlass
                  key={label}
                  radius={16}
                  className="signal-tile relative min-w-0 overflow-hidden border border-white/14 bg-[#06163d]/42 p-6"
                  style={
                    {
                      '--heat': `${heat}%`,
                      '--delay': `${0.24 + index * 0.08}s`,
                      boxShadow: '0 22px 44px rgba(0,0,0,0.18)',
                    } as CSSProperties
                  }
                >
                  <span className="absolute inset-y-0 left-0 w-[var(--heat)] origin-left bg-primary/[0.055] animate-[ecoBar_1.1s_ease-out_both] [animation-delay:var(--delay)]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 flex-shrink-0 place-items-center border border-primary/45 text-primary">
                        <Icon className="h-6 w-6" strokeWidth={2.55} />
                      </span>
                    </div>
                    <div className="mt-auto min-w-0">
                      <p className="text-[25px] leading-[1.02] font-black tracking-[-0.01em]">{label}</p>
                      <p className="mt-3 break-words text-[46px] leading-[0.9] font-black tracking-[-0.045em] text-primary tabular-nums">{value}</p>
                      <div className="mt-5 h-[6px] bg-white/10">
                        <div className="h-full w-[var(--heat)] origin-left bg-primary animate-[ecoBar_.9s_ease-out_both]" />
                      </div>
                      <p className="mt-4 text-[17px] leading-[1.22] font-bold text-white/58">{note}</p>
                    </div>
                  </div>
                </LiquidGlass>
              ))}
            </div>
          </section>
        </section>

        <LiquidGlass radius={14} className="mt-7 overflow-hidden border border-white/14 animate-[ecoIssueWrap_.7s_ease-out_.2s_both]">
          <div className="grid h-full grid-cols-[150px_1fr]">
            <div className="flex items-center justify-center border-r border-white/14">
              <div className="text-center">
                <h3 className="mt-1 text-[29px] leading-none font-black">Асуудал</h3>
              </div>
            </div>
            <div className="grid min-w-0 grid-cols-5">
              {issues.map(({ title, label, icon: Icon }, index) => (
                <article
                  key={title}
                  className="min-h-[112px] min-w-0 border-r border-white/12 px-5 py-4 last:border-r-0 animate-[ecoIssue_.55s_ease-out_both]"
                  style={{ animationDelay: `${0.34 + index * 0.07}s` } as CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-black tabular-nums text-white/38">{String(index + 1).padStart(2, '0')}</span>
                    <Icon className="h-5 w-5 text-primary/80" strokeWidth={2.5} />
                  </div>
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.16em] text-primary/70">{label}</p>
                  <p className="mt-2 text-[16px] leading-[1.1] font-black text-white/88">{title}</p>
                </article>
              ))}
            </div>
          </div>
        </LiquidGlass>
      </main>

      <style>{`
        @keyframes ecoFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes ecoLeft { from { opacity: 0; transform: translateX(-18px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes ecoMap { from { opacity: 0; transform: translateX(22px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes ecoIssue { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes ecoIssueWrap { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes ecoRule { from { transform: scaleY(0); transform-origin: top } to { transform: scaleY(1); transform-origin: top } }
        @keyframes ecoBar { from { transform: scaleX(0); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }
        .signal-tile {
          animation: ecoIssue .58s ease-out both;
          animation-delay: var(--delay);
          transition: transform .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .signal-tile:hover {
          transform: translateY(-4px);
          border-color: rgba(46, 197, 255, .48);
          background-color: rgba(6, 22, 61, .62);
        }
      `}</style>
    </div>
  );
}
