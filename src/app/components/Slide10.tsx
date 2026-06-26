import type { CSSProperties } from 'react';
import {
  BarChart3,
  BriefcaseBusiness,
  Check,
  Landmark,
  ShieldCheck,
  Timer,
} from 'lucide-react';

const feelings = [
  { text: 'Төр ажиллаж эхэллээ', icon: Landmark, accent: '#2EC5FF' },
  { text: 'Хариуцлага тодорхой боллоо', icon: ShieldCheck, accent: '#F2B94B' },
  { text: 'Бизнесийн дарамт багасч байна', icon: BriefcaseBusiness, accent: '#10B981' },
  { text: 'Иргэдэд зориулсан үйлчилгээ хурдан болж байна.', icon: Timer, accent: '#A78BFA' },
  { text: 'Сар бүр үр дүнг хэмжинэ', icon: BarChart3, accent: '#2EC5FF' },
];

export function Slide10() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[39%] top-[9%] bottom-[9%] w-px bg-gradient-to-b from-transparent via-white/18 to-transparent animate-[rule10_1.2s_ease-out_.25s_both]" />
        <div className="absolute -left-[310px] top-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-primary/[0.08] animate-[orbit10_18s_linear_infinite]" />
        <div className="absolute -left-[230px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-primary/[0.05] animate-[orbit10_14s_linear_infinite_reverse]" />
        <div className="absolute right-[-90px] bottom-[-150px] text-[390px] leading-none text-white/[0.018] font-black">100</div>
      </div>

      <main className="relative z-10 h-full px-12 pt-9 pb-16 flex flex-col">
        <header className="flex items-center justify-between animate-[fade10_.7s_ease-out_both]">
          <p className="text-[14px] text-primary font-black uppercase tracking-[0.26em]">“ЧӨЛӨӨЛӨЛТИЙН 100 ӨДӨР”</p>
        </header>

        <div className="flex-1 min-h-0 flex items-center">
          <section className="w-[39%] pr-12 text-right animate-[left10_.8s_ease-out_both]">
            <p className="text-[20px] text-primary font-black uppercase tracking-[0.28em]">ЧӨЛӨӨЛӨЛТ:</p>
            <div className="mt-5">
              <p className="text-[150px] leading-[0.72] text-white font-black tracking-[-0.09em]">100</p>
              <h1 className="mt-5 text-[68px] leading-[0.9] text-white font-black tracking-[-0.045em]" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
                ӨДӨР
                <br />
                <span className="text-primary">ӨӨРЧЛӨЛТ</span>
              </h1>
            </div>
            <div className="mt-8 flex items-center justify-end gap-4">
              <span className="relative w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                <Check className="w-8 h-8 stroke-[3]" />
                <span className="absolute inset-[-8px] rounded-full border border-primary/35 animate-[ring10_2.4s_ease-out_infinite]" />
              </span>
              <p className="text-[18px] leading-tight text-white/62 font-bold">Шийдвэрээс иргэдэд мэдрэгдэх бодит үр дүн рүү</p>
            </div>
          </section>

          <section className="w-[61%] pl-14">
            <div className="flex items-end justify-between mb-5 animate-[fade10_.7s_ease-out_.12s_both]">
              <div>
                <p className="text-[19px] text-primary font-black uppercase tracking-[0.26em]">МЭДРЭМЖ:</p>
                <h2 className="mt-2 text-[40px] leading-tight text-white font-black">Иргэдэд мэдрэгдэх үр дүн</h2>
              </div>
              <span className="text-[78px] leading-none text-primary font-black animate-[pulse10_2.5s_ease-in-out_infinite]">05</span>
            </div>

            <ol className="border-t border-white/20">
              {feelings.map(({ text, icon: Icon, accent }, index) => (
                <li
                  key={text}
                  className="relative border-b border-white/20 py-[18px] flex items-center gap-5 animate-[item10_.6s_ease-out_both]"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` } as CSSProperties}
                >
                  <span className="w-10 text-[14px] text-white/28 font-black">{String(index + 1).padStart(2, '0')}</span>
                  <span className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ color: accent, borderColor: `${accent}70` }}>
                    <Icon className="w-6 h-6" />
                  </span>
                  <p className="flex-1 text-[27px] leading-tight text-white font-black">{text}</p>
                  <span className="w-16 h-1 animate-[accent10_1s_ease-out_both]" style={{ background: accent, animationDelay: `${0.55 + index * 0.1}s` }} />
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      <style>{`
        @keyframes fade10 { from { opacity: 0 } to { opacity: 1 } }
        @keyframes left10 { from { opacity: 0; transform: translateX(-24px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes item10 { from { opacity: 0; transform: translateX(24px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes rule10 { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        @keyframes accent10 { from { transform: scaleX(0); transform-origin: right } to { transform: scaleX(1); transform-origin: right } }
        @keyframes ring10 { 0% { transform: scale(.85); opacity: .6 } 100% { transform: scale(1.4); opacity: 0 } }
        @keyframes pulse10 { 0%,100% { opacity: .55 } 50% { opacity: 1 } }
        @keyframes orbit10 { from { transform: translateY(-50%) rotate(0) } to { transform: translateY(-50%) rotate(360deg) } }
        @keyframes blueGlow { 0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); } 50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); } }
      `}</style>
    </div>
  );
}
