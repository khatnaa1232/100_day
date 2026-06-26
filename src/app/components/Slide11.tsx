import type { CSSProperties } from 'react';
import {
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Gauge,
  Landmark,
  ShieldCheck,
  UsersRound,
  Zap,
} from 'lucide-react';

const levels = [
  {
    number: '01',
    title: 'Улс төрийн түвшин',
    icon: Landmark,
    accent: '#2EC5FF',
    items: ['эв нэгдэл', 'багийн сахилга', 'дотоод зөрчил багасгах'],
  },
  {
    number: '02',
    title: 'Засаглалын түвшин',
    icon: Gauge,
    accent: '#F2B94B',
    items: [
      'KPI. Ур чадвар, туршлага эн тэргүүний шаардлага болно.',
      'Тайлангийн мөчлөг. Төрийн албан хаагч байнга тайлан бэлтгэж цаг үрэхгүй.',
      'Шийдвэрийн хурд. Шийдвэр гаргах хурдыг журамлав.',
    ],
  },
  {
    number: '03',
    title: 'Олон нийтийн түвшин',
    icon: UsersRound,
    accent: '#10B981',
    items: ['Ойлгомжтой харилцаа', 'Иргэдэд мэдрэгдэх бодит өөрчлөлт', 'Итгэл сэргээх бодит ажил'],
  },
];

const fastReturns = [
  { text: 'Төрийн үйлчилгээний хурд', icon: Zap, accent: '#2EC5FF' },
  { text: 'Бизнесийн дарамт буурах', icon: BriefcaseBusiness, accent: '#F2B94B' },
  { text: 'Авлигын эсрэг бодит алхам', icon: ShieldCheck, accent: '#10B981' },
];

export function Slide11() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[330px] top-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-primary/[0.07] animate-[circle10_18s_linear_infinite]" />
        <div className="absolute -right-[220px] top-[10%] w-[520px] h-[520px] rounded-full border border-chart-2/[0.06] animate-[circle10_15s_linear_infinite_reverse]" />
        <div className="absolute right-[-70px] bottom-[-130px] text-[360px] leading-none text-white/[0.018] font-black">03</div>
      </div>

      <main className="relative z-10 h-full px-11 pt-7 pb-16 flex flex-col">
        <header className="flex items-start justify-between animate-[fade10_.7s_ease-out_both]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-9 h-9 rounded-full border border-primary/50 flex items-center justify-center"><BadgeCheck className="w-5 h-5 text-primary" /></span>
              <span className="text-[13px] text-primary font-black uppercase tracking-[0.24em]">100 өдрийн үр дүн</span>
            </div>
            <h1 className="text-[49px] leading-[0.98] text-white font-black tracking-tight" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
              “ЧӨЛӨӨЛӨЛТИЙН <span className="text-primary">100 ӨДӨР</span>”-ИЙН
              <br />
              ҮР ДҮНГИЙН <span className="text-primary">3 ТҮВШИН</span>
            </h1>
          </div>
        </header>

        <div className="flex-1 min-h-0 flex flex-col justify-center pt-7 pb-5">
          <section className="flex">
            {levels.map(({ number, title, icon: Icon, accent, items }, index) => (
              <article
                key={title}
                className="relative flex-1 px-6 first:pl-0 last:pr-0 animate-[level10_.7s_ease-out_both]"
                style={{ animationDelay: `${0.15 + index * 0.14}s` } as CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[60px] leading-none font-black" style={{ color: accent }}>{number}</span>
                  <span className="w-12 h-12 rounded-full border flex items-center justify-center" style={{ color: accent, borderColor: `${accent}70` }}>
                    <Icon className="w-6 h-6" />
                  </span>
                </div>
                <h2 className="mt-2 text-[27px] leading-tight text-white font-black">{title}</h2>
                <div className="mt-3 h-1 w-20 animate-[accent10_1s_ease-out_both]" style={{ background: accent, animationDelay: `${0.45 + index * 0.14}s` }} />

                <ul className="mt-3 border-t border-white/18">
                  {items.map((item, itemIndex) => (
                    <li
                      key={item}
                      className="border-b border-white/18 py-3 flex items-start gap-3 animate-[item10_.5s_ease-out_both]"
                      style={{ animationDelay: `${0.3 + index * 0.14 + itemIndex * 0.08}s` } as CSSProperties}
                    >
                      <Check className="mt-0.5 w-5 h-5 flex-shrink-0 stroke-[3]" style={{ color: accent }} />
                      <p className="text-[17px] leading-[1.18] text-white/88 font-bold">{item}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="mt-8 border-t-2 border-primary/45 pt-4">
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-[12px] text-primary font-black uppercase tracking-[0.24em]">Гол point • Шууд мэдрэгдэх үр дүн</p>
                <h2 className="mt-1 text-[27px] text-white font-black uppercase tracking-[0.08em]">ХАМГИЙН ХУРДАН МЭДРЭГДЭХ УЛС ТӨРИЙН ӨГӨӨЖ:</h2>
              </div>
              <span className="text-[64px] leading-none text-primary font-black animate-[pulseNumber10_2.4s_ease-in-out_infinite]">03</span>
            </div>
            <div className="flex items-stretch gap-4">
              {fastReturns.map(({ text, icon: Icon, accent }, index) => (
                <div
                  key={text}
                  className="group relative flex-1 min-h-[138px] border-y border-white/20 py-4 flex items-center gap-4 overflow-hidden animate-[return10_.65s_ease-out_both]"
                  style={{ animationDelay: `${0.6 + index * 0.12}s` } as CSSProperties}
                >
                  <span className="absolute right-0 top-0 text-[68px] leading-none font-black opacity-[0.07]" style={{ color: accent }}>{String(index + 1).padStart(2, '0')}</span>
                  <span className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 animate-[impactIcon10_2.5s_ease-in-out_infinite]" style={{ color: accent, borderColor: `${accent}90`, animationDelay: `${index * 0.3}s` }}>
                    <Icon className="w-8 h-8" />
                    <span className="absolute inset-[-7px] rounded-full border opacity-45 animate-[impactRing10_2.5s_ease-out_infinite]" style={{ borderColor: accent, animationDelay: `${index * 0.3}s` }} />
                  </span>
                  <div className="relative">
                    <p className="text-[12px] font-black uppercase tracking-[0.18em]" style={{ color: accent }}>Өгөөж {String(index + 1).padStart(2, '0')}</p>
                    <p className="mt-1 text-[27px] leading-[1.08] text-white font-black">{text}</p>
                    <span className="block mt-3 h-1 w-24 animate-[impactLine10_1.2s_ease-out_both]" style={{ background: accent, animationDelay: `${0.85 + index * 0.12}s` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @keyframes fade10 { from { opacity: 0 } to { opacity: 1 } }
        @keyframes level10 { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes item10 { from { opacity: 0; transform: translateX(-12px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes return10 { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes accent10 { from { transform: scaleX(0); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }
        @keyframes impactLine10 { from { transform: scaleX(0); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }
        @keyframes impactIcon10 { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }
        @keyframes impactRing10 { 0% { transform: scale(.86); opacity: .5 } 100% { transform: scale(1.35); opacity: 0 } }
        @keyframes pulseNumber10 { 0%,100% { opacity: .55 } 50% { opacity: 1 } }
        @keyframes circle10 { from { transform: translateY(-50%) rotate(0) } to { transform: translateY(-50%) rotate(360deg) } }
        @keyframes blueGlow { 0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); } 50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); } }
      `}</style>
    </div>
  );
}
