import type { CSSProperties } from 'react';
import stampImg from '../../imports/chuluuluv.png';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Landmark,
  MessageSquareText,
  Route,
  Scale,
  UsersRound,
} from 'lucide-react';

const decisionFlow = [
  { label: 'Иргэдийн шүүмжлэл, эсэргүүцэл', icon: UsersRound, accent: '#2EC5FF' },
  { label: 'Маргааныг эцэслэх шийдвэр', icon: Scale, accent: '#F2B94B' },
  { label: 'Нийслэлийн Засаг даргыг чөлөөлөв', icon: Landmark, accent: '#F2B94B' },
];

export function Slide12() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[240px] top-[8%] w-[560px] h-[560px] rounded-full border border-primary/[0.08] animate-[orbit12_18s_linear_infinite]" />
        <div className="absolute -right-[210px] bottom-[-140px] w-[620px] h-[620px] rounded-full border border-chart-3/[0.07] animate-[orbit12_15s_linear_infinite_reverse]" />
        <div className="absolute right-[-50px] bottom-[-120px] text-[330px] leading-none text-white/[0.018] font-black">01</div>
      </div>

      <main className="relative z-10 h-full px-12 pt-9 pb-16 flex flex-col">
        <div className="flex-1 min-h-0 flex items-center gap-14">
          <section className="w-[42%] text-right animate-[left12_.8s_ease-out_both]">
            <p className="text-[18px] leading-tight text-primary font-black uppercase tracking-[0.19em]">“Чөлөөлөлтийн 100 өдөр”-ийг угтсан</p>
            <h1 className="mt-4 text-[74px] leading-[0.88] text-white font-black tracking-[-0.055em]" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
              УЛС ТӨРИЙН
              <br />
              <span className="text-chart-3">ОНЦЛОХ</span>
              <br />
              ШИЙДВЭР
            </h1>
            <div className="mt-7 flex items-center justify-end gap-4">
              <span className="relative w-16 h-16 rounded-full border-2 border-chart-3 flex items-center justify-center text-chart-3">
                <Route className="w-8 h-8" />
                <span className="absolute inset-[-8px] rounded-full border border-chart-3/35 animate-[ring12_2.4s_ease-out_infinite]" />
              </span>
              <div>
                <p className="text-[13px] text-chart-3 font-black uppercase tracking-[0.2em]">Төслийн маргаан</p>
                <p className="mt-1 text-[24px] leading-tight text-white font-black">Туулын хурдны зам</p>
              </div>
            </div>
          </section>

          <section className="w-[58%] border-l border-white/18 pl-14">
            <div className="flex items-center gap-3 mb-5 animate-[fade12_.7s_ease-out_.15s_both]">
              <MessageSquareText className="w-7 h-7 text-primary" />
              <span className="text-[14px] text-primary font-black uppercase tracking-[0.22em]">Иргэдийн байр суурийг хүлээн авсан шийдвэр</span>
            </div>

            <p className="text-[34px] leading-[1.22] text-white font-black animate-[statement12_.8s_ease-out_.2s_both]">
              Туулын хурдны замын төслийн маргааныг эцэслэх, иргэдийн шүүмжлэл, эсэргүүцлийг хүлээн авч{' '}
              <span className="text-chart-3">Нийслэлийн Засаг даргыг чөлөөлөв.</span>
              <img src={stampImg} alt="Чөлөөлөв" className="inline-block h-10 ml-3 -mb-1 object-contain align-middle rotate-[-4deg] animate-[stampImpact12_1s_cubic-bezier(.2,.9,.24,1.2)_0.25s_both]" />
            </p>

            <div className="mt-8 flex items-stretch">
              {decisionFlow.map(({ label, icon: Icon, accent }, index) => (
                <div key={label} className="contents">
                  <div
                    className="relative flex-1 border-y border-white/18 py-5 animate-[step12_.55s_ease-out_both]"
                    style={{ animationDelay: `${0.35 + index * 0.13}s` } as CSSProperties}
                  >
                    <span className="absolute right-2 top-1 text-[56px] leading-none font-black opacity-[0.07]" style={{ color: accent }}>{String(index + 1).padStart(2, '0')}</span>
                    <span className="w-12 h-12 rounded-full border flex items-center justify-center" style={{ color: accent, borderColor: `${accent}75` }}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <p className="mt-3 pr-4 text-[18px] leading-[1.16] text-white font-black">{label}</p>
                    <span className="block mt-4 h-1 w-20 animate-[accent12_1s_ease-out_both]" style={{ background: accent, animationDelay: `${0.7 + index * 0.13}s` }} />
                  </div>
                  {index < decisionFlow.length - 1 && (
                    <span className="w-12 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-6 h-6 text-white/28 animate-[arrow12_1.5s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.25}s` }} />
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4 animate-[fade12_.7s_ease-out_.75s_both]">
              <span className="w-11 h-11 rounded-full border border-chart-2/60 flex items-center justify-center"><Check className="w-6 h-6 text-chart-2 stroke-[3]" /></span>
              <p className="text-[19px] leading-tight text-white/70 font-bold">Иргэдийн дуу хоолойг сонсож, улс төрийн хариуцлагыг бодитоор хэрэгжүүлсэн шийдвэр.</p>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @keyframes fade12 { from { opacity: 0 } to { opacity: 1 } }
        @keyframes left12 { from { opacity: 0; transform: translateX(-24px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes statement12 { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes step12 { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes accent12 { from { transform: scaleX(0); transform-origin: left } to { transform: scaleX(1); transform-origin: left } }
        @keyframes ring12 { 0% { transform: scale(.85); opacity: .6 } 100% { transform: scale(1.4); opacity: 0 } }
        @keyframes arrow12 { 0%,100% { transform: translateX(0); opacity: .3 } 50% { transform: translateX(5px); opacity: 1 } }
        @keyframes road12 { from { background-position: 0 0 } to { background-position: 240px 0 } }
        @keyframes orbit12 { from { transform: rotate(0) } to { transform: rotate(360deg) } }
        @keyframes stampImpact12 {
          0% { opacity: 0; transform: translateY(-28px) scale(1.62) rotate(-16deg); filter: blur(7px); }
          54% { opacity: 1; transform: translateY(7px) scale(.86) rotate(-2deg); filter: blur(0); }
          78% { transform: translateY(-2px) scale(1.05) rotate(-6deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(-4deg); }
        }
        @keyframes blueGlow { 0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); } 50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); } }
      `}</style>
    </div>
  );
}
