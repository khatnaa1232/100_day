import { useEffect, useState, type CSSProperties } from 'react';
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Network,
  PlugZap,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sun,
  UsersRound,
  Zap,
} from 'lucide-react';

function CountUp({ end, delay = 0 }: { end: number; delay?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const timeout = window.setTimeout(() => {
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / 1500, 1);
        setValue(Math.round(end * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [delay, end]);

  return <>{value.toLocaleString('en-US')}</>;
}

const greenResults = [
  { value: '500', label: 'автомашин цэнэглэх ногоон өртөө', icon: PlugZap },
  { value: '5', label: 'аймагт нарны цахилгаан станц', icon: Sun },
  { value: '80 + 30', label: '2026 оны хот, орон нутгийн ногоон өртөө', icon: Zap },
  { value: '10,000', label: 'өрхөд ногоон зээл', icon: Leaf },
];

const antiCorruption = [
  { text: 'НЗД-г чөлөөлж, мега төслүүдэд шалгалт оруулав', icon: Landmark },
  { text: 'Албан тушаалтнаас үл хамаарах төрийн үйлчилгээний олон сувгийг нээнэ', icon: Network },
  { text: 'Төрийн худалдан авалт, хүний нөөцийн сонгон шалгаруулалтад ХОУ нэвтрүүлнэ', icon: ShoppingCart },
];

const particles = [
  { left: 7, top: 18, color: '#10B981', delay: 0 },
  { left: 29, top: 87, color: '#F2B94B', delay: 1.1 },
  { left: 55, top: 12, color: '#2EC5FF', delay: 0.5 },
  { left: 78, top: 88, color: '#A78BFA', delay: 1.6 },
  { left: 95, top: 29, color: '#EF7B7B', delay: 0.8 },
];

export function Slide8() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-56 top-[12%] w-[650px] h-[650px] rounded-full bg-chart-2/[0.12] blur-[180px]" />
        <div className="absolute left-[38%] -bottom-72 w-[720px] h-[720px] rounded-full bg-primary/[0.1] blur-[190px]" />
        <div className="absolute -right-64 -top-48 w-[700px] h-[700px] rounded-full bg-destructive/[0.09] blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        {particles.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="absolute w-1 h-1 rounded-full"
            style={{ left: `${particle.left}%`, top: `${particle.top}%`, background: particle.color, boxShadow: `0 0 18px ${particle.color}`, animationDelay: `${particle.delay}s` }}
          />
        ))}
      </div>

      <main className="relative z-10 h-full w-full px-10 pt-7 pb-8 flex flex-col">
        <header className="flex items-end justify-between mb-5 animate-[fade8_.7s_ease-out_both]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-5 py-2 mb-3">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-black uppercase tracking-[0.22em]">Бодит хэрэгжилт • Үргэлжлэл</span>
            </div>
            <h1 className="text-[56px] leading-none font-black tracking-tight text-white" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
              ЧӨЛӨӨЛӨЛТИЙН ГАРАА :{' '}
              <span className="text-primary drop-shadow-[0_0_28px_rgba(46,197,255,.45)]">ХЭРЭГЖИЛТ</span>
            </h1>
          </div>
        </header>

        <section className="mt-auto mb-auto self-center w-full flex-none h-[750px] min-h-0 grid grid-cols-[1fr_.84fr_1.06fr] gap-4">
          <article className="relative min-h-0 overflow-hidden rounded-[30px] border border-chart-2/50 bg-gradient-to-b from-chart-2/[0.18] via-[#06183b]/90 to-[#06183b]/70 p-4 flex flex-col animate-[laneLeft8_.75s_ease-out_both]">
            <div className="absolute -right-8 -top-14 text-[220px] leading-none font-black text-chart-2/[0.07]">05</div>
            <div className="absolute left-1/2 top-[47%] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-chart-2/10" />
            <div className="relative flex items-center justify-between">
              <span className="w-14 h-14 rounded-[18px] border border-chart-2/50 bg-chart-2/15 flex items-center justify-center"><Leaf className="w-8 h-8 text-chart-2" /></span>
              <span className="text-chart-2 text-sm font-black uppercase tracking-[0.22em]">Ногоон хөгжил • 05</span>
            </div>
            <h2 className="relative mt-3 text-[25px] leading-[1.08] text-white font-black">Ногоон хөгжлийн чөлөөлөлтийн явцын үр дүн</h2>
            <p className="relative mt-2 text-[17px] text-white/58 font-bold">Цэвэр эрчим хүч • Ногоон санхүүжилт • Дэд бүтэц</p>

            <div className="relative mt-5 grid grid-cols-2 grid-rows-2 gap-3 flex-1 min-h-0">
              {greenResults.map(({ value, label, icon: Icon }, index) => (
                <div
                  key={label}
                  className="relative rounded-[22px] border border-chart-2/25 bg-chart-2/[0.07] px-3 py-4 flex flex-col items-center justify-center text-center overflow-hidden animate-[result8_.55s_ease-out_both]"
                  style={{ animationDelay: `${0.18 + index * 0.08}s` } as CSSProperties}
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-chart-2 to-transparent animate-[grow8_1s_ease-out_both]" style={{ animationDelay: `${0.45 + index * 0.08}s` }} />
                  <Icon className="w-7 h-7 text-chart-2" />
                  <p className="mt-2 text-[34px] leading-none text-chart-2 font-black">{value}</p>
                  <p className="mt-2 text-[15px] leading-[1.14] text-white/82 font-bold">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="relative min-h-0 overflow-hidden rounded-[30px] border border-primary/45 bg-gradient-to-b from-primary/[0.15] via-[#07183d]/90 to-[#07183d]/75 p-4 flex flex-col animate-[laneUp8_.75s_ease-out_.1s_both]">
            <div className="absolute -right-8 -top-14 text-[220px] leading-none font-black text-primary/[0.07]">06</div>
            <div className="absolute left-1/2 top-[48%] w-[330px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-primary/10" />
            <div className="relative flex items-center justify-between">
              <span className="w-14 h-14 rounded-[18px] border border-primary/50 bg-primary/15 flex items-center justify-center"><UsersRound className="w-8 h-8 text-primary" /></span>
              <span className="text-primary text-sm font-black uppercase tracking-[0.22em]">Хоёр цалин • 06</span>
            </div>
            <h2 className="relative mt-3 text-[27px] leading-[1.08] text-white font-black">Эмч, багш нарыг хоёр цалингаас чөлөөлсөн</h2>

            <div className="relative mt-5 flex-1 min-h-0 flex flex-col gap-4">
              <div className="flex-1 rounded-[26px] border border-chart-2/35 bg-gradient-to-br from-chart-2/[0.16] to-transparent p-5 flex flex-col items-center justify-center text-center animate-[stat8_.65s_ease-out_.22s_both]">
                <HeartPulse className="w-11 h-11 text-chart-2" />
                <p className="mt-3 text-[52px] leading-none text-chart-2 font-black"><CountUp end={39841} delay={250} /></p>
                <p className="mt-2 text-[18px] text-white font-black">эрүүл мэндийн ажилтан</p>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
                <span className="relative rounded-full border border-primary/35 bg-[#07183d] px-4 py-1.5 text-[12px] text-primary font-black uppercase tracking-[0.13em]">Ойлгомжгүй байдлаас гаргав</span>
              </div>
              <div className="flex-1 rounded-[26px] border border-[#A78BFA]/35 bg-gradient-to-br from-[#A78BFA]/[0.16] to-transparent p-5 flex flex-col items-center justify-center text-center animate-[stat8_.65s_ease-out_.34s_both]">
                <GraduationCap className="w-11 h-11 text-[#A78BFA]" />
                <p className="mt-3 text-[52px] leading-none text-[#A78BFA] font-black"><CountUp end={91499} delay={350} /></p>
                <p className="mt-2 text-[18px] text-white font-black">боловсролын ажилтан</p>
              </div>
            </div>
          </article>

          <article className="relative min-h-0 overflow-hidden rounded-[30px] border border-destructive/45 bg-gradient-to-b from-destructive/[0.15] via-[#101737]/92 to-[#07183d]/80 p-4 flex flex-col animate-[laneRight8_.75s_ease-out_.18s_both]">
            <div className="absolute -right-8 -bottom-16 text-[220px] leading-none font-black text-destructive/[0.06]">07</div>
            <div className="absolute right-[-90px] top-[22%] w-[360px] h-[360px] rounded-full border border-destructive/10" />
            <div className="relative flex items-center justify-between">
              <span className="w-14 h-14 rounded-[18px] border border-destructive/50 bg-destructive/15 flex items-center justify-center"><Scale className="w-8 h-8 text-destructive" /></span>
              <span className="text-destructive text-sm font-black uppercase tracking-[0.22em]">Авлигын эсрэг • 07</span>
            </div>
            <h2 className="relative mt-3 text-[27px] leading-[1.08] text-white font-black">Хүнээс хамаарахгүй төрийн үйлчилгээ</h2>
            <p className="relative mt-2 text-[17px] text-white/58 font-bold">Ил тод • Хяналттай • Цахим</p>

            <div className="relative mt-5 rounded-[24px] border border-primary/35 bg-primary/[0.07] p-4">
              <div className="absolute left-1/2 top-1/2 w-[78%] h-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[networkLine8_2s_ease-out_both]" />
              <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="rounded-2xl border border-primary/35 bg-[#07183d]/80 p-3 text-center">
                  <Building2 className="w-7 h-7 text-primary mx-auto" />
                  <p className="mt-2 text-[19px] text-white font-black">e-business.mn</p>
                </div>
                <span className="w-11 h-11 rounded-full border border-primary/50 bg-primary/15 flex items-center justify-center"><Sparkles className="w-5 h-5 text-primary" /></span>
                <div className="rounded-2xl border border-chart-3/35 bg-[#07183d]/80 p-3 text-center">
                  <ShieldCheck className="w-7 h-7 text-chart-3 mx-auto" />
                  <p className="mt-2 text-[19px] text-white font-black">license.mn</p>
                </div>
              </div>
            </div>

            <div className="relative mt-3 grid gap-2.5 flex-1 min-h-0">
              {antiCorruption.map(({ text, icon: Icon }, index) => (
                <div
                  key={text}
                  className="rounded-[20px] border border-white/12 bg-white/[0.045] px-4 py-2.5 flex items-center gap-4 animate-[result8_.55s_ease-out_both]"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` } as CSSProperties}
                >
                  <span className="w-11 h-11 rounded-xl bg-destructive/12 border border-destructive/30 flex items-center justify-center flex-shrink-0"><Icon className="w-6 h-6 text-destructive" /></span>
                  <p className="text-[18px] leading-[1.18] text-white/85 font-bold">{text}</p>
                  <CheckCircle2 className="w-5 h-5 text-chart-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <style>{`
        @keyframes fade8 { from { opacity: 0 } to { opacity: 1 } }
        @keyframes laneLeft8 { from { opacity: 0; transform: translateX(-28px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes laneRight8 { from { opacity: 0; transform: translateX(28px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes laneUp8 { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes result8 { from { opacity: 0; transform: scale(.94) } to { opacity: 1; transform: scale(1) } }
        @keyframes stat8 { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes grow8 { from { transform: scaleX(0); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }
        @keyframes line8 { from { width: 0; opacity: 0 } to { opacity: 1 } }
        @keyframes networkLine8 { from { transform: translate(-50%,-50%) scaleX(0) } to { transform: translate(-50%,-50%) scaleX(1) } }
        @keyframes float8 { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
        @keyframes heart8 { 0%,100% { transform: scale(1) } 15% { transform: scale(1.12) } 30% { transform: scale(1) } }
        @keyframes pulseBorder8 { 0%,100% { transform: translate(-50%,-50%) scale(.96); opacity: .45 } 50% { transform: translate(-50%,-50%) scale(1.04); opacity: 1 } }
        @keyframes particle8 { 0%,100% { transform: translateY(0); opacity: .35 } 50% { transform: translateY(-16px); opacity: 1 } }
        @keyframes breathe8 { 0%,100% { transform: scale(1); opacity: .7 } 50% { transform: scale(1.08); opacity: 1 } }
        @keyframes orbit8 { from { transform: translate(-50%,-50%) rotate(0) } to { transform: translate(-50%,-50%) rotate(360deg) } }
        @keyframes glow8 { 0%,100% { opacity: .65 } 50% { opacity: 1 } }
        @keyframes spinSoft8 { from { transform: rotate(0) } to { transform: rotate(360deg) } }
        @keyframes blueGlow { 0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); } 50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); } }
      `}</style>
    </div>
  );
}
