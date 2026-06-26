import { useEffect, useState, type CSSProperties } from 'react';
import stampImg from '../../imports/chuluuluv.png';
import {
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  CircleDollarSign,
  Gauge,
  Home,
  Landmark,
  LockOpen,
  Percent,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
} from 'lucide-react';

function CountUp({ end, decimals = 0, delay = 0 }: { end: number; decimals?: number; delay?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const timeout = window.setTimeout(() => {
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / 1400, 1);
        setValue(end * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [delay, end]);

  return <>{value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</>;
}

const taxChanges = [
  {
    value: '2.2',
    unit: 'ИХ НАЯД ₮',
    title: 'Татварын дэмжлэг',
    detail: 'Иргэн, ААН-ийн татварын ачааллыг бууруулна',
    icon: TrendingUp,
    accent: '#F2B94B',
  },
  {
    value: '0%',
    unit: 'ТАТВАР',
    title: 'Сарын 792,000₮ хүртэл',
    detail: 'Иргэдийн сарын орлогод',
    icon: WalletCards,
    accent: '#2EC5FF',
  },
  {
    value: '1%',
    unit: 'ТАТВАР',
    title: '1 тэрбум₮ хүртэл',
    detail: 'Иргэний орлогод',
    icon: Users,
    accent: '#A78BFA',
  },
  {
    value: '0%',
    unit: 'ЧӨЛӨӨЛӨВ',
    title: 'Орон сууцны 2% татвар',
    detail: 'Өмнөх 2%-ийн татварыг чөлөөлөв',
    icon: Home,
    accent: '#10B981',
  },
  {
    value: '2.5',
    unit: 'ТЭРБУМ ₮',
    title: 'ААН-ийн 1%-ийн босго',
    detail: 'Хөнгөлөлттэй татварын шинэ босго',
    icon: Building2,
    accent: '#F2B94B',
  },
  {
    value: '10',
    unit: 'ТЭРБУМ ₮',
    title: '25%-ийн ААНОАТ-ын босго',
    detail: 'Татварын өндөр шатлалын босго',
    icon: Landmark,
    accent: '#EF7B7B',
  },
  {
    value: '400',
    unit: 'САЯ ₮',
    title: 'НӨАТ-ын босго',
    detail: 'Бүртгэлийн шинэ босго',
    icon: CircleDollarSign,
    accent: '#2EC5FF',
  },
];

const particles = [
  { x: 6, y: 16, size: 4, color: '#2EC5FF', delay: 0 },
  { x: 24, y: 88, size: 3, color: '#10B981', delay: 1.2 },
  { x: 47, y: 10, size: 5, color: '#F2B94B', delay: 0.4 },
  { x: 72, y: 84, size: 4, color: '#A78BFA', delay: 1.8 },
  { x: 94, y: 22, size: 3, color: '#2EC5FF', delay: 0.8 },
];

export function Slide7() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-52 left-[34%] w-[760px] h-[620px] rounded-full bg-chart-3/[0.08] blur-[170px]" />
        <div className="absolute -bottom-64 -left-20 w-[700px] h-[700px] rounded-full bg-primary/[0.1] blur-[190px]" />
        <div className="absolute right-[-180px] top-[20%] w-[580px] h-[580px] rounded-full bg-chart-2/[0.07] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        {particles.map((particle) => (
          <span
            key={`${particle.x}-${particle.y}`}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 18px ${particle.color}`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 h-full w-full px-10 pt-7 pb-8 flex flex-col">
        <header className="flex items-end justify-between mb-4 animate-[fade7_.7s_ease-out_both]">
          <div>
            <div className="relative inline-flex items-center gap-2 rounded-full border border-chart-2/50 bg-chart-2/10 px-5 py-2 mb-3 overflow-hidden">
              <div className="absolute inset-0 opacity-0" style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(16,185,129,.28) 50%, transparent 65%)' }} />
              <BadgeCheck className="relative w-4 h-4 text-chart-2" />
              <span className="relative text-sm text-chart-2 font-black uppercase tracking-[0.22em]">Бодит хэрэгжилт • Үргэлжлэл</span>
            </div>
            <h1 className="text-[56px] leading-none font-black tracking-tight text-white" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
              ЧӨЛӨӨЛӨЛТИЙН ГАРАА :{' '}
              <span className="text-chart-2 drop-shadow-[0_0_28px_rgba(16,185,129,0.45)]">ХЭРЭГЖИЛТ</span>
            </h1>
          </div>
        </header>

        <div className="mt-auto mb-auto self-center w-full flex-none h-[760px] min-h-0 grid grid-cols-[0.66fr_1.58fr] gap-4">
          <section className="min-h-0 flex flex-col gap-4">
            <article className="group relative overflow-hidden rounded-[30px] border border-primary/45 bg-gradient-to-br from-primary/[0.18] via-[#07183d]/80 to-white/[0.04] backdrop-blur-xl p-5 animate-[slideRight7_.7s_ease-out_both]">
              <div className="absolute -right-5 -top-12 text-[150px] leading-none font-black text-primary/[0.08]">02</div>

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative w-13 h-13 rounded-2xl border border-primary/50 bg-primary/15 flex items-center justify-center">
                    <LockOpen className="w-7 h-7 text-primary" />
                    <span className="absolute inset-0 rounded-2xl border border-primary/50 opacity-30" />
                  </span>
                  <span className="text-primary text-sm font-black uppercase tracking-[0.22em]">Данс нээлээ</span>
                </div>
                <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-primary text-xs font-black">1 САР</span>
              </div>

              <div className="relative mt-5">
                <p className="text-[60px] leading-none text-primary font-black drop-shadow-[0_0_24px_rgba(46,197,255,.28)]">
                  <CountUp end={12153} delay={200} />
                </p>
                <p className="mt-1 text-[18px] text-white/55 font-black uppercase tracking-[0.16em]">татвар төлөгч</p>
              </div>

              <h2 className="relative mt-4 text-[22px] leading-[1.1] text-white font-black">Татвар, НДШ-ийн өртэй компаниудын данс нээсэн</h2>
              <p className="relative mt-3 text-[17px] leading-[1.35] text-white/72 font-bold">
                Шүүхийн шийдвэртэйгээс бусад <span className="text-primary">татварын өртэй</span> татвар төлөгчийн дансыг нээв.
              </p>

              <div className="relative mt-5 h-2 rounded-full bg-white/8 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-chart-2 animate-[bar7_1.5s_ease-out_.3s_both]" />
              </div>
              <div className="relative mt-2 flex justify-between text-[11px] text-white/40 font-black uppercase tracking-[0.16em]">
                <span>Данс хаалттай</span><span className="text-chart-2">Данс нээлттэй</span>
              </div>
            </article>

            <article className="group relative flex-1 overflow-hidden rounded-[30px] border border-[#A78BFA]/45 bg-gradient-to-br from-[#A78BFA]/[0.17] via-[#07183d]/80 to-white/[0.04] backdrop-blur-xl p-5 animate-[slideRight7_.7s_ease-out_.14s_both]">
              <div className="absolute -right-5 -bottom-14 text-[180px] leading-none font-black text-[#A78BFA]/[0.08]">04</div>
              <div className="relative flex items-center justify-between">
                <span className="w-13 h-13 rounded-2xl border border-[#A78BFA]/50 bg-[#A78BFA]/15 flex items-center justify-center">
                  <Gauge className="w-7 h-7 text-[#A78BFA]" />
                </span>
                <span className="text-[#A78BFA] text-sm font-black uppercase tracking-[0.22em]">Шинэчлэл 04</span>
              </div>
              <h2 className="relative mt-4 text-[24px] leading-[1.1] text-white font-black">Тэтгэврийн шударга тогтолцооны шинэчлэл</h2>
              <div className="relative mt-5 rounded-2xl border border-[#A78BFA]/25 bg-[#A78BFA]/10 p-4 flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-[#A78BFA]/20 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-6 h-6 text-[#A78BFA]" /></span>
                <p className="text-[20px] leading-tight text-white font-black">Хөдөлмөр эрхлэлтийг дэмжих бодлого</p>
              </div>
              <div className="relative mt-5 flex items-center gap-2 text-white/50 text-sm font-bold">
                <Check className="w-4 h-4 text-[#A78BFA]" />
                <span>Шударга • Тогтвортой • Хөдөлмөрийг дэмжсэн</span>
              </div>
            </article>
          </section>

          <section className="relative min-h-0 rounded-[30px] border border-chart-3/50 bg-gradient-to-br from-chart-3/[0.15] via-[#07183d]/85 to-primary/[0.08] backdrop-blur-xl p-4 overflow-hidden animate-[scale7_.75s_ease-out_both]">
            <div className="absolute right-[-34px] top-[-55px] text-[250px] leading-none font-black text-chart-3/[0.07]">03</div>
            <div className="absolute left-[56%] top-[44%] w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-chart-3/10" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-2xl border border-chart-3/50 bg-chart-3/15 flex items-center justify-center"><Percent className="w-8 h-8 text-chart-3" /></span>
                <div>
                  <p className="text-chart-3 text-sm font-black uppercase tracking-[0.2em]">Багц хуулийн онцлох өөрчлөлтүүд</p>
                  <h2 className="mt-1 text-[28px] leading-tight text-white font-black">Татварын ачааллыг бууруулж, босгыг шинэчлэв</h2>
                </div>
              </div>
              <div className="rounded-2xl border border-chart-3/35 bg-chart-3/10 px-5 py-3 text-right">
                <p className="text-[38px] leading-none text-chart-3 font-black">7</p>
                <p className="mt-1 text-[11px] text-chart-3/80 font-black uppercase tracking-[0.16em]">гол өөрчлөлт</p>
              </div>
            </div>

            <div className="relative z-10 mt-3 h-[calc(100%-78px)] min-h-0 flex flex-col gap-3">
              <article className="relative overflow-hidden rounded-[24px] border border-chart-3/55 bg-gradient-to-r from-chart-3/[0.18] via-[#15234c]/80 to-chart-3/[0.08] px-5 py-4 animate-[heroTax7_.7s_ease-out_.12s_both]">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-chart-3 animate-[heroLine7_1.2s_ease-out_.25s_both]" />
                <div className="relative flex items-center gap-5">
                  <span className="w-16 h-16 rounded-[20px] border border-chart-3/50 bg-chart-3/15 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-chart-3" />
                  </span>
                  <div className="flex items-baseline gap-3 flex-shrink-0">
                    <span className="text-[52px] leading-none text-chart-3 font-black drop-shadow-[0_0_25px_rgba(242,185,75,.28)]">
                      <CountUp end={2.2} decimals={1} delay={300} />
                    </span>
                    <span className="text-[13px] text-chart-3 font-black uppercase tracking-[0.16em]">их наяд ₮</span>
                  </div>
                  <div className="h-14 w-px bg-gradient-to-b from-transparent via-chart-3/50 to-transparent" />
                  <div>
                    <h3 className="text-[22px] leading-tight text-white font-black">Иргэн, ААН-ийн татварын ачааллыг бууруулах дэмжлэг</h3>
                    <p className="mt-1.5 text-[14px] text-white/55 font-bold">Татварын багц хуулийн шинэчлэлийн нийт эдийн засгийн үр нөлөө</p>
                  </div>
                </div>
              </article>

              <div className="grid grid-cols-3 grid-rows-2 gap-2.5 flex-1 min-h-0">
                {taxChanges.slice(1).map(({ value, unit, title, detail, icon: Icon, accent }, index) => (
                  <article
                    key={title}
                    className="relative overflow-hidden rounded-[22px] border bg-[#06163d]/45 px-3 py-3 flex flex-col items-center justify-center text-center animate-[taxCard7_.6s_ease-out_both]"
                    style={{
                      borderColor: `${accent}48`,
                      background: `linear-gradient(145deg, ${accent}12, rgba(6,22,61,.5) 56%)`,
                      animationDelay: `${0.24 + index * 0.07}s`,
                    } as CSSProperties}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1 animate-[cardLine7_1s_ease-out_both]" style={{ background: `linear-gradient(90deg, ${accent}, transparent)`, animationDelay: `${0.45 + index * 0.07}s` }} />
                    <div className="relative flex items-center justify-center gap-2">
                      <span className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0" style={{ color: accent, borderColor: `${accent}45`, background: `${accent}15` }}>
                        <Icon className="w-5 h-5" />
                      </span>
                      {unit === 'ЧӨЛӨӨЛӨВ' ? (
                        <img src={stampImg} alt="Чөлөөлөв" className="h-8 object-contain animate-[stampImpact7_0.98s_cubic-bezier(.2,.9,.24,1.2)_0.22s_both]" />
                      ) : (
                        <span className="rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.13em]" style={{ color: accent, borderColor: `${accent}40`, background: `${accent}0d` }}>{unit}</span>
                      )}
                    </div>
                    <div className="relative mt-2 flex items-baseline justify-center">
                      <span className="text-[46px] leading-none font-black" style={{ color: accent }}>{value}</span>
                    </div>
                    <h3 className="relative mt-1.5 text-[18px] leading-[1.1] text-white font-black">{title}</h3>
                    <p className="relative mt-1 text-[14px] leading-[1.15] text-white/60 font-bold">{detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @keyframes fade7 { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideRight7 { from { opacity: 0; transform: translateX(-28px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes scale7 { from { opacity: 0; transform: scale(.97) } to { opacity: 1; transform: scale(1) } }
        @keyframes taxCard7 { from { opacity: 0; transform: translateY(15px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes heroTax7 { from { opacity: 0; transform: translateX(18px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes heroLine7 { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        @keyframes cardLine7 { from { transform: scaleX(0); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }
        @keyframes bar7 { from { width: 0 } to { width: 100% } }
        @keyframes line7 { from { width: 0; opacity: 0 } to { opacity: 1 } }
        @keyframes sweep7 { 0% { transform: translateX(-120%) } 60%,100% { transform: translateX(120%) } }
        @keyframes float7 { 0%,100% { transform: translateY(0); opacity: .4 } 50% { transform: translateY(-14px); opacity: 1 } }
        @keyframes floatIcon7 { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @keyframes breathe7 { 0%,100% { transform: scale(1); opacity: .7 } 50% { transform: scale(1.08); opacity: 1 } }
        @keyframes glow7 { 0%,100% { opacity: .6 } 50% { opacity: 1 } }
        @keyframes unlock7 { 0%,100% { transform: rotate(0) } 45% { transform: rotate(-8deg) } 60% { transform: rotate(5deg) } }
        @keyframes ping7 { 0% { transform: scale(.9); opacity: .65 } 100% { transform: scale(1.5); opacity: 0 } }
        @keyframes orbit7 { from { transform: translate(-50%,-50%) rotate(0) } to { transform: translate(-50%,-50%) rotate(360deg) } }
        @keyframes stampImpact7 {
          0% { opacity: 0; transform: translateY(-26px) scale(1.6) rotate(-11deg); filter: blur(6px); }
          52% { opacity: 1; transform: translateY(7px) scale(.86) rotate(-4deg); filter: blur(0); }
          76% { transform: translateY(-2px) scale(1.05) rotate(-6deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes blueGlow { 0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); } 50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); } }
      `}</style>
    </div>
  );
}
