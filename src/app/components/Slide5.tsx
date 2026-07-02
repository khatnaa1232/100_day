import type { CSSProperties, ReactNode } from 'react';
import { ArrowUpRight, BadgeDollarSign, CheckCircle2, Gem, Landmark, Percent, TrendingDown, TrendingUp } from 'lucide-react';
import chuluuluvImg from '../../imports/chuluuluv.png';
import unlockedImg from '../../imports/unlocked.png';
import oyuTolgoiImg from '../../imports/unlock_1.png';
import { useCountUp, formatCountUp } from './useCountUp';
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

// Inner surfaces stay light so they read as nested controls above the WebGL
// LiquidGlass panels, which sample and refract the real deck background.
const glassSoft: CSSProperties = {
  background: 'linear-gradient(180deg, rgba(6,22,61,0.34), rgba(6,22,61,0.18))',
  backdropFilter: 'blur(6px) saturate(125%)',
  WebkitBackdropFilter: 'blur(6px) saturate(125%)',
  boxShadow: '0 18px 36px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.09)',
};

function CountUp({
  value,
  decimals = 0,
  delay = 0,
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  delay?: number;
  duration?: number;
}) {
  const [display] = useCountUp(value, delay, duration);
  return <span>{formatCountUp(display, decimals)}</span>;
}

// Marker-style highlight for the featured numeric figures inside the regular italic body.
function HL({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <b
      className="rounded-[5px] px-1.5 py-[1px] font-black not-italic text-white"
      style={{ background: `${accent}24` }}
    >
      {children}
    </b>
  );
}

const impactStats = [
  { value: 30, suffix: 'их наяд ₮', label: 'төслийн зардал буурав', accent: '#f2b94b', trend: 'down' as const },
  { value: 22, suffix: 'их наяд ₮', label: 'хүүд төлөх байсан зардал хэмнэгдэв', accent: '#2ec5ff', trend: 'down' as const },
  { value: 13, suffix: 'их наяд ₮', label: 'Монголын өгөөж нэмэгдэв', accent: '#22c55e', trend: 'up' as const },
];

type Highlighter = (children: ReactNode) => ReactNode;

const detailPoints: { icon: typeof TrendingDown; accent: string; render: (H: Highlighter) => ReactNode }[] = [
  {
    icon: TrendingDown,
    accent: '#f2b94b',
    render: (H) => <>Менежментийн зардлыг {H('8 орчим их наяд')} төгрөгөөр бууруулж, Монголын талын өгөөжийг {H('5 орчим их наяд')} төгрөгөөр нэмэв.</>,
  },
  {
    icon: Percent,
    accent: '#2ec5ff',
    render: (H) => <>Зээлийн хүүг буулгаж, хүүнд төлөх байсан {H('22 их наяд')} төгрөгийг хэмнэв. Монголын талын хүртэх өгөөжийг {H('8 орчим их наяд')} төгрөгөөр нэмэв.</>,
  },
  {
    icon: Gem,
    accent: '#22c55e',
    render: (H) => <>Нийт зардлыг {H('30 орчим их наяд')} төгрөгөөр бууруулж, Монголын өгөөжийг {H('13 их наядаар')} нэмэгдүүлэв.</>,
  },
  {
    icon: Landmark,
    accent: '#a78bfa',
    render: (H) => <>Оюутолгойн зээлийн хүүг буулгах цонх {H('7 жилд')} нээгддэг байсныг {H('3 жил тутамд')} хэлэлцэнэ.</>,
  },
  {
    icon: BadgeDollarSign,
    accent: '#fb7185',
    render: (H) => <>Оюутолгойгоос хүртэх ноогдол ашиг цаашилсан {H('2037 он')} биш, наашилж {H('2026 он')} болов.</>,
  },
];

export function Slide5() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <main className="relative z-10 flex h-full flex-col px-12 pb-[74px] pt-[46px]">
        <header className="flex items-start justify-between gap-8">
          <div className="max-w-[1240px]">
            <div className="flex items-center gap-4">
              <img src={chuluuluvImg} alt="Чөлөөлөв" className="h-10 w-auto object-contain" />
              <span className="h-7 w-px bg-white/18" />
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-white/58">Онцлох стратегийн unlock</p>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <span className="flex items-center gap-2.5 rounded-[8px] border border-[#f2b94b]/55 bg-[#f2b94b]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
                <span className="relative block h-5 w-5 flex-shrink-0">
                  <span
                    className="absolute inset-0"
                    style={{
                      backgroundColor: '#f2b94b',
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
                #Unlock 1
              </span>
              <span className="h-px w-24 bg-gradient-to-r from-[#f2b94b] to-transparent" />
            </div>
            <h1 className="mt-5 max-w-[1220px] text-[58px] leading-[0.92] font-black tracking-[-0.05em] text-white">
              Оюутолгойн өгөөжийг өсгөх,
              <span className="block text-[#f2b94b]">ноогдол ашгаа авах дуусдаггүй яриаг дуусгав</span>
            </h1>
          </div>

          <div className="h-16 w-[430px]" aria-hidden="true" />
        </header>

        <section className="mt-7 grid min-h-0 flex-1 grid-cols-[1.12fr_0.88fr] gap-7">
          <LiquidGlass
            radius={30}
            className="overflow-hidden border border-white/18"
            style={liquidShadow}
            {...liquidGlassProps}
          >
            <div className="relative h-full p-7">
              <div className="absolute inset-y-0 right-0 w-[40%]">
                <img
                  src={oyuTolgoiImg}
                  alt="Оюутолгой"
                  className="h-full w-full object-cover"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 58%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, #000 58%)',
                  }}
                />
              </div>
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#f2b94b]" />
              <div className="absolute right-8 top-7 text-[140px] leading-none font-black tabular-nums text-white/[0.05]">01</div>

              <div className="relative z-10 flex h-full max-w-[72%] flex-col">
                <p className="text-[15px] font-black uppercase tracking-[0.22em] text-white/46">Гол үр нөлөө</p>
                <div className="mt-5 grid grid-cols-3 gap-4">
                  {impactStats.map((stat, index) => {
                    const Trend = stat.trend === 'up' ? TrendingUp : TrendingDown;
                    return (
                      <div
                        key={stat.label}
                        className="relative overflow-hidden rounded-[24px] border p-5"
                        style={{ borderColor: `${stat.accent}50`, ...glassSoft }}
                      >
                        <div className="flex items-center gap-2">
                          <p className="text-[70px] leading-none font-black tabular-nums tracking-[-0.055em]" style={{ color: stat.accent }}>
                            <CountUp value={stat.value} delay={120 + index * 80} duration={650} />
                          </p>
                          <Trend
                            className="h-12 w-12 flex-shrink-0"
                            strokeWidth={2.8}
                            style={{
                              color: stat.accent,
                              animation: `${stat.trend === 'up' ? 's5TrendUp' : 's5TrendDown'} 1.8s ease-in-out ${index * 0.15}s infinite`,
                            }}
                          />
                        </div>
                        <p className="mt-1 text-[18px] leading-none font-black" style={{ color: stat.accent }}>
                          {stat.suffix}
                        </p>
                        <p className="mt-3 text-[13px] leading-[1.18] font-black uppercase tracking-[0.08em] text-white/60">
                          {stat.label}
                        </p>

                        {/* flowing "rate" bar */}
                        <div className="absolute inset-x-0 bottom-0 h-[5px] overflow-hidden" style={{ background: `${stat.accent}26` }}>
                          <span
                            className="absolute inset-y-0 w-1/2"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)`,
                              animation: `s5BarFlow 1.9s linear ${index * 0.25}s infinite`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-auto grid grid-cols-[1fr_260px] gap-5">
                  <div className="relative overflow-hidden rounded-[24px] border border-white/12 p-5" style={glassSoft}>
                    <p className="mt-3 text-[27px] leading-[1.05] font-black tracking-[-0.035em] text-white">
                      Зардал 30 орчим их наяд₮-өөр буурч, өгөөж 13 их наядаар нэмэгдэв.
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-[24px] border border-[#22c55e]/38 p-5" style={glassSoft}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-[#22c55e]" strokeWidth={2.5} />
                      <p className="text-[13px] font-black uppercase tracking-[0.16em] text-[#22c55e]">Ногдол ашиг</p>
                    </div>
                    <p className="mt-4 text-[34px] leading-[0.96] font-black tracking-[-0.04em] text-white">
                      2026 оноос шууд авч эхэлнэ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </LiquidGlass>

          <aside className="flex min-h-0 flex-col gap-4">
            {detailPoints.map((point, index) => {
              const Icon = point.icon;
              const H: Highlighter = (children) => <HL accent={point.accent}>{children}</HL>;
              return (
                <LiquidGlass
                  key={index}
                  radius={26}
                  className="min-h-0 flex-1 overflow-hidden border"
                  style={{ borderColor: `${point.accent}42`, ...liquidShadow }}
                  {...liquidGlassProps}
                >
                  <div className="relative flex h-full items-start gap-4 p-5">
                    <span
                      className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-[10px] border"
                      style={{ borderColor: `${point.accent}66`, backgroundColor: `${point.accent}16`, color: point.accent }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                    </span>
                    <p className="text-[19px] leading-[1.34] font-normal italic tracking-[-0.015em] text-white/82">
                      {point.render(H)}
                    </p>
                    <ArrowUpRight
                      className="absolute right-4 top-4 h-5 w-5 opacity-45"
                      style={{ color: point.accent }}
                    />
                  </div>
                </LiquidGlass>
              );
            })}
          </aside>
        </section>
      </main>

      <style>{`
        @keyframes s5TrendUp {
          0%, 100% { transform: translateY(3px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes s5TrendDown {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(4px); }
        }
        @keyframes s5BarFlow {
          from { transform: translateX(-110%); }
          to { transform: translateX(210%); }
        }
      `}</style>
    </div>
  );
}
