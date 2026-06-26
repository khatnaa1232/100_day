import { useState, useEffect } from 'react';
import stampImg from '../../imports/chuluuluv.png';
import type { CSSProperties } from 'react';
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Scale,
  ShieldCheck,
  Unlock,
} from 'lucide-react';

function useCounter(target: number, duration = 1600, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frameId = 0;
    const timeoutId = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) frameId = requestAnimationFrame(tick);
      };
      frameId = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [target, duration, delay]);
  return count;
}

function formatCount(n: number) {
  return n >= 1000 ? n.toLocaleString('en-US') : String(n);
}

const impactItems = [
  { target: 146, text: '8 төрлийн 146 бизнесийг зөвшөөрөл нэртэй хориглолтоос чөлөөлсөн', icon: Unlock, color: '#2EC5FF', delay: 400 },
  { target: 7029, text: '7,029 төлөвлөгөөт хяналт шалгалтаас ААН, иргэдийг чөлөөлөв', icon: ShieldCheck, color: '#10B981', delay: 550 },
  { target: 300, text: 'e-business платформ: Бизнесийн 300 зөвшөөрөл чөлөөгдлөө.', icon: FileCheck2, color: '#F2B94B', delay: 700 },
];

const principles = [
  'Төр дур зоргоор бизнесийн үйл ажиллагааг хязгаарлахгүй.',
  'Төр бизнес эрхлэгчтэй өрсөлдөхгүй.',
  'Төрд байгаа мэдээллийг бизнес эрхлэгчээс ахин дахин нэхэхгүй.',
  'Хувийн өмч, хөрөнгө оруулалт, хууль ёсны ашиг сонирхлыг хамгаална',
];

const stories = [
  { title: 'KAI КОФЕШОП', text: 'С.Батцэцэг цахимаар мэдэгдэл өгөөд 7 хоногийн дараа олон жил мөрөөдөж байсан "Kai" кофешопоо нээсэн.', color: '#2EC5FF' },
  { title: '"ЧЭЖҮ" КИМЧИ', text: 'Зөвшөөрөл хөөцөлдөх нөр их ажлаас шантарч явсан А.Сүхбаатар, Н.Ууганчимэг нар license.mn платформын дараа өөрсдийн "Чэжү" кимчиний үйлдвэрээ хялбархан нээжээ.', color: '#F2B94B' },
  { title: '"ЭЭЖИЙН БООРЦОГ"', text: '"Ээжийн боорцог" брэнд мөн л', color: '#A78BFA' },
];

const PARTICLES = [
  { x: 12, y: 18, r: 2.5, dur: 7, del: 0, color: '#2EC5FF' },
  { x: 38, y: 72, r: 2,   dur: 9, del: 1.2, color: '#10B981' },
  { x: 62, y: 12, r: 3,   dur: 6, del: 0.5, color: '#F2B94B' },
  { x: 78, y: 55, r: 2,   dur: 8, del: 1.8, color: '#A78BFA' },
  { x: 22, y: 88, r: 1.5, dur: 7.5, del: 0.9, color: '#2EC5FF' },
  { x: 88, y: 30, r: 2.5, dur: 6.5, del: 0.3, color: '#10B981' },
  { x: 50, y: 45, r: 1.5, dur: 10, del: 2.1, color: '#F2B94B' },
];

function ImpactCard({ target, text, icon: Icon, color, delay, index }: typeof impactItems[0] & { index: number }) {
  const count = useCounter(target, 1600, delay);
  return (
    <article
      className="group relative rounded-2xl border bg-[#06163d]/35 backdrop-blur-md px-4 py-4 overflow-hidden animate-[scaleIn_0.65s_ease-out_both]"
      style={{ borderColor: `${color}60`, animationDelay: `${0.12 + index * 0.08}s` } as CSSProperties}
    >
      {/* shimmer sweep */}
      <div className="absolute inset-0 translate-x-[-100%] opacity-0"
        style={{ animationDelay: `${index * 0.6}s`, background: `linear-gradient(105deg, transparent 40%, ${color}18 50%, transparent 60%)` }} />

      {/* icon with pulse ring */}
      <div className="relative w-fit">
        <Icon className="w-7 h-7 relative z-10" style={{ color }} />
        <span className="absolute inset-0 rounded-full opacity-0"
          style={{ background: `${color}40`, animationDelay: `${index * 0.4}s` }} />
      </div>

      <p className="mt-2 text-[42px] leading-none font-black"
        style={{ color, textShadow: `0 0 24px ${color}70` }}>
        {formatCount(count)}
      </p>
      <p className="mt-3 text-[16px] leading-[1.22] text-white/85 font-bold">{text}</p>
    </article>
  );
}

export function Slide6() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-[20%] w-[620px] h-[620px] rounded-full bg-primary/8 blur-[170px]" />
        <div className="absolute -bottom-44 right-[8%] w-[700px] h-[700px] rounded-full bg-chart-3/8 blur-[180px]" />

        {/* floating particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: p.r * 2, height: p.r * 2,
              background: p.color,
              boxShadow: `0 0 ${p.r * 4}px ${p.color}`,
              opacity: 0.6,
            } as CSSProperties}
          />
        ))}
      </div>

      <main className="relative z-10 h-full w-full px-10 pt-7 pb-8 flex flex-col">
        <header className="flex items-end justify-between mb-4 animate-[fadeIn_0.7s_ease-out_both]">
          <div>
            {/* badge with shimmer */}
            <div className="relative inline-flex items-center gap-2 rounded-full border border-chart-2/50 bg-chart-2/10 px-5 py-2 mb-3 overflow-hidden">
              <div className="absolute inset-0 translate-x-[-100%] opacity-0"
                style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(16,185,129,0.25) 50%, transparent 70%)' }} />
              <BadgeCheck className="w-4 h-4 text-chart-2 relative z-10" />
              <span className="text-sm text-chart-2 font-black uppercase tracking-[0.22em] relative z-10">Бодит хэрэгжилт</span>
            </div>
            <h1 className="text-[58px] leading-none font-black tracking-tight text-white" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
              ЧӨЛӨӨЛӨЛТИЙН ГАРАА :{' '}
              <span className="text-chart-2 drop-shadow-[0_0_28px_rgba(16,185,129,0.45)]">ХЭРЭГЖИЛТ</span>
            </h1>
          </div>
        </header>

        <div className="mt-auto mb-auto w-full flex-none h-[790px] min-h-0 grid grid-cols-[1fr_0.86fr] gap-4">
          <section className="self-center min-h-0 flex flex-col gap-3">
            <article className="relative overflow-hidden rounded-[26px] border border-primary/40 bg-gradient-to-r from-primary/15 to-white/5 backdrop-blur-xl px-5 py-4 animate-[slideRight_0.7s_ease-out_both]">
              {/* animated border glow */}
              <div className="absolute inset-0 rounded-[28px]"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(59,130,246,0.3)' }} />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[150px] leading-none font-black text-primary/[0.08]">01</div>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-[60px] h-[60px] rounded-2xl border-2 border-primary bg-primary/15 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-[27px] text-white font-black">Бизнесийн орчныг хүнд сурталаас чөлөөлөв</h2>
                  <img src={stampImg} alt="Чөлөөлөв" className="mt-1.5 h-9 object-contain animate-[stampImpact6_0.95s_cubic-bezier(.2,.9,.24,1.2)_0.18s_both]" />
                  <p className="mt-1.5 text-[19px] text-primary font-black">License.mn сайтад мэдэгдээд шууд бизнесээ эхэлдэг болсон</p>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-3 gap-3">
              {impactItems.map((item, index) => (
                <ImpactCard key={item.target} {...item} index={index} />
              ))}
            </div>

            <article className="flex-none h-[370px] rounded-[26px] border border-chart-3/45 bg-gradient-to-br from-chart-3/12 to-white/4 backdrop-blur-xl px-5 py-4 flex flex-col animate-[slideRight_0.7s_ease-out_0.25s_both]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Scale className="w-8 h-8 text-chart-3" />
                  <h2 className="text-[28px] text-chart-3 font-black">Бизнесийн эрх чөлөөний тухай хууль</h2>
                </div>
                <span className="rounded-full border border-chart-3/40 bg-chart-3/10 px-4 py-2 text-[13px] text-chart-3 font-black uppercase tracking-[0.18em]">4 зарчим</span>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0">
                {principles.map((item, index) => (
                  <div
                    key={item}
                    className="relative min-h-0 overflow-hidden rounded-2xl border border-chart-3/30 bg-[#06163d]/30 px-4 py-4 animate-[scaleIn_0.55s_ease-out_both]"
                    style={{ animationDelay: `${0.3 + index * 0.07}s` } as CSSProperties}
                  >
                    <div className="absolute right-3 top-2 text-[48px] leading-none font-black text-chart-3/[0.12]">{String(index + 1).padStart(2, '0')}</div>
                    <div className="relative z-10 flex items-start gap-3 h-full">
                      <div className="w-10 h-10 rounded-full border-2 border-chart-3/60 bg-chart-3/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-chart-3" />
                      </div>
                      <p className="pt-1 text-[20px] leading-[1.16] text-white font-black">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="self-center grid grid-rows-3 gap-3 h-[720px] min-h-0">
            {stories.map(({ title, text, color }, index) => (
              <figure
                key={title}
                className="group relative min-h-0 overflow-hidden rounded-[26px] border animate-[imageIn_0.75s_ease-out_both]"
                style={{ borderColor: `${color}70`, animationDelay: `${0.15 + index * 0.14}s` } as CSSProperties}
              >
                <div className="absolute inset-y-0 left-0 w-[44%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),transparent_40%),linear-gradient(160deg,rgba(255,255,255,0.06),transparent_55%),linear-gradient(180deg,rgba(6,22,61,0.9),rgba(6,22,61,0.96))]" />
                <div className="absolute left-[9%] top-1/2 h-[84px] w-[84px] -translate-y-1/2 rounded-[24px] border border-white/12 bg-white/6" style={{ boxShadow: `0 0 28px ${color}25` }} />
                <div className="absolute left-[18%] top-1/2 h-[126px] w-[126px] -translate-y-1/2 rounded-full border border-white/12" style={{ background: `radial-gradient(circle, ${color}30 0%, transparent 68%)` }} />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06163d]/85 to-[#06163d]" />

                {/* animated accent line */}
                <div className="absolute left-[40%] top-0 bottom-0 w-px opacity-30"
                  style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)`, animationDelay: `${index * 0.4}s` }} />

                <figcaption className="absolute left-[40%] right-5 top-1/2 -translate-y-1/2 pl-4">
                  <span className="text-[12px] font-black uppercase tracking-[0.22em]" style={{ color }}>Бодит түүх {String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-[25px] text-white font-black">{title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.25] text-white/80 font-bold">{text}</p>
                  {/* bottom accent bar */}
                  <div className="mt-3 h-0.5 w-12 rounded-full opacity-70 animate-[expandLine_1.2s_ease-out_both]"
                    style={{ background: color, animationDelay: `${0.4 + index * 0.14}s` }} />
                </figcaption>
              </figure>
            ))}
          </section>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn       { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideRight   { from { opacity: 0; transform: translateX(-25px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn      { from { opacity: 0; transform: scale(.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes imageIn      { from { opacity: 0; transform: translateX(25px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes expandLine   { from { width: 0; opacity: 0; } to { opacity: 1; } }
        @keyframes stampImpact6 {
          0% { opacity: 0; transform: translateY(-24px) scale(1.55) rotate(-12deg); filter: blur(6px); }
          55% { opacity: 1; transform: translateY(6px) scale(.88) rotate(-5deg); filter: blur(0); }
          78% { opacity: 1; transform: translateY(-2px) scale(1.06) rotate(-7deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); filter: blur(0); }
        }

        @keyframes floatDot {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50%       { transform: translateY(-14px) scale(1.15); opacity: 0.9; }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1);    opacity: 0.7; }
          50%       { transform: scale(1.08); opacity: 1; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes shimmerSweep {
          0%   { transform: translateX(-100%); }
          60%, 100% { transform: translateX(200%); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1; }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: inset 0 0 0 1px rgba(59,130,246,0.25), 0 0 18px rgba(59,130,246,0.08); }
          50%       { box-shadow: inset 0 0 0 1px rgba(59,130,246,0.55), 0 0 32px rgba(59,130,246,0.18); }
        }
        @keyframes blueGlow {
          0%, 100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); }
          50%       { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); }
        }
      `}</style>
    </div>
  );
}
