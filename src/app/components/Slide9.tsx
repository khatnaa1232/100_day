import type { CSSProperties } from 'react';
import stampImg from '../../imports/chuluuluv.png';
import {
  Activity,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Flag,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TimerReset,
  Zap,
} from 'lucide-react';

const obstacles = [
  'Төрийн хүнд суртал, авилга',
  'Төр ба иргэний харилцаан дахь ойлгомжгүй дүрэм журмууд',
  'Бизнес эрхлэгчдэд учирдаг дарамт',
  'Эм, эмийн бүтээгдэхүүний чанар, хяналт',
  'Татварын дарамт',
  'Тэтгэврийн шударга бус тогтолцоо',
  'Үр ашиггүй төрийн өмчит компаниуд',
  'Иргэд, хүүхдийн амь нас, эрүүл мэнд хамгаалагдаагүй орчин',
  'Ногоон хөгжлийн зогсонги байдал',
  'Эрчим хүчний хомсдол',
];

const firstLiberations = [
  'ААН-д хийх төлөвлөгөөт хяналт, шалгалтаас чөлөөлөв',
  'Зарим бизнес эхлүүлхэд шаарддаг зөвшөөрлөөс чөлөөлөв',
  'Төрийн албан хаагчдыг тайлангаас чөлөөлөв',
  'Эмч, багш нарын цалингийн будилаанаас чөлөөлөв',
  'Авилгын эсрэг цахим платформ хөгжүүлэлт.',
  'Туулын хурдны зам төслийг зогсоов',
  'Түлшний үнийг бууруулж чадлаа',
  'Том төслүүдийг гацаанаас чөлөөллөө.',
  'Ногоон хөгжлийн чөлөөлөлт',
  'Ипотекийн зээлийн төрөлжүүлэв.',
];

const solutionItems = [
  'Салбар хоорондын уялдаа',
  'Хариуцлагын тогтолцоо: Хариуцлага тооцсон шийдвэрүүд.',
  'Иргэдэд харагдахуйц бодит өөрчлөлт, шийдвэрийн жагсаалт',
];

const validationItems = [
  'Үр дүн, иргэдийн стори теллинг',
  'Мега авлигаас мега бүтээн байгуулалт руу: Туулын хурдны зам,',
  'Тэтгэврийн тогтолцооны шударга шинэчлэл: Хүний хөдөлмөрийн үр шим',
  'Татварын багц шинэчлэл: 4 онцлох өөрчлөлт',
  'Чөлөөлөлтийн жилийн төлөвлөгөө: Онцлох 5 асуудал',
];

const roadPhases = [
  { day: '30', range: '01–30', label: 'ДҮН ШИНЖИЛГЭЭ БА ХУРДАН ЯЛАЛТ', color: '#2EC5FF', icon: Search, pos: '11%' },
  { day: '60', range: '30–60', label: 'АСУУДАЛ–ШИЙДЭЛ', color: '#F2B94B', icon: Activity, pos: '50%' },
  { day: '100', range: '60–100', label: 'БАТАЛГААЖУУЛАЛТ', color: '#10B981', icon: Flag, pos: '89%' },
] as const;

export function Slide9() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#2EC5FF] via-[#F2B94B] to-[#10B981]" />
        <div className="absolute top-[28%] left-[18%] w-[560px] h-[380px] rounded-full bg-[#2EC5FF]/5 blur-[140px]" />
        <div className="absolute bottom-[18%] right-[12%] w-[480px] h-[360px] rounded-full bg-[#10B981]/5 blur-[120px]" />
        <div className="absolute top-[55%] left-[48%] w-[380px] h-[280px] rounded-full bg-[#F2B94B]/4 blur-[100px]" />
      </div>

      <main className="relative z-10 h-full w-full px-10 pt-7 pb-8 flex flex-col">
        {/* Header */}
        <header className="flex-shrink-0 mb-0 animate-[fade9_.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2EC5FF]/40 bg-[#2EC5FF]/8 px-5 py-2 mb-2">
            <TimerReset className="w-4 h-4 text-[#2EC5FF]" />
            <span className="text-sm text-[#2EC5FF] font-black uppercase tracking-[0.22em]">
              "ЧӨЛӨӨЛӨЛТИЙН{' '}100 ӨДӨР"-ИЙН БҮТЭЦ
            </span>
          </div>
          <h1 className="text-[52px] leading-none text-white font-black tracking-tight" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
            Хэрэгжилтийн
            <span className="text-[#2EC5FF] drop-shadow-[0_0_22px_rgba(46,197,255,0.55)]"> замын </span>
            зураг
          </h1>
        </header>

        {/* Roadmap + Grid — vertically centered in remaining space */}
        <div className="flex-1 flex flex-col justify-center gap-3">

          {/* ── Modern Roadmap ── */}
          <div className="relative flex-shrink-0 h-52">
            {/* Glow behind track */}
            <div className="absolute top-1/2 left-[7%] right-[7%] -translate-y-1/2 h-8 rounded-full bg-gradient-to-r from-[#2EC5FF]/18 via-[#F2B94B]/18 to-[#10B981]/18 blur-xl" />
            {/* Track base */}
            <div className="absolute top-1/2 left-[7%] right-[7%] -translate-y-1/2 h-[6px] rounded-full bg-white/[0.07]" />
            {/* Animated fill */}
            <div className="absolute top-1/2 left-[7%] right-[7%] -translate-y-1/2 h-[6px] rounded-full overflow-hidden">
              <div className="h-full w-full origin-left bg-gradient-to-r from-[#2EC5FF] via-[#F2B94B] to-[#10B981] animate-[timeline9_2.2s_ease-out_.3s_both]" />
            </div>

            {/* Milestone nodes */}
            {roadPhases.map(({ day, range, label, color, icon: Icon, pos }, i) => (
              <div
                key={day}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-[phase9_.7s_ease-out_both]"
                style={{ left: pos, animationDelay: `${0.28 + i * 0.18}s` } as CSSProperties}
              >
                {/* Range badge — above */}
                <div className="absolute bottom-full mb-3">
                  <span
                    className="block text-[11px] font-black tracking-[0.15em] px-3 py-[5px] rounded-full whitespace-nowrap"
                    style={{ color, background: `${color}12`, border: `1px solid ${color}32` }}
                  >
                    {range}
                  </span>
                </div>

                {/* Pulse rings */}
                <div
                  className="absolute rounded-full opacity-35"
                  style={{ width: 108, height: 108, background: `${color}10`, animationDelay: `${i * 0.9}s` }}
                />
                <div
                  className="absolute rounded-full opacity-35"
                  style={{ width: 88, height: 88, background: `${color}18`, animationDelay: `${i * 0.9 + 1.1}s` }}
                />

                {/* Circle */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: 66,
                    height: 66,
                    background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                    boxShadow: `0 0 0 3px ${color}38, 0 0 38px ${color}65, 0 8px 20px rgba(0,0,0,.5)`,
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#040d1a' }} />
                </div>

                {/* Labels — below */}
                <div className="absolute top-full mt-2.5 text-center" style={{ width: 148 }}>
                  <p className="text-[13px] font-black tracking-[0.1em] leading-none" style={{ color }}>
                    {day} ХОНОГ
                  </p>
                  <p className="text-[11px] text-white/45 font-semibold mt-1 leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Content Grid ── */}
          <section className="grid grid-cols-[1.5fr_0.72fr_0.9fr] gap-3 items-start">

            {/* Phase 1 */}
            <article className="flex flex-col rounded-2xl overflow-hidden border border-[#2EC5FF]/22 bg-white/[0.04] backdrop-blur-md animate-[panel9_.7s_ease-out_both]">
              <div
                className="flex-shrink-0 px-5 py-3 border-b border-[#2EC5FF]/12"
                style={{ background: 'linear-gradient(to right, rgba(46,197,255,0.09), rgba(46,197,255,0.03))' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(46,197,255,0.12)', border: '1px solid rgba(46,197,255,0.32)' }}
                  >
                    <Zap className="w-5 h-5 text-[#2EC5FF]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#2EC5FF] font-black uppercase tracking-[0.2em]">
                      Эхний 30 хоног: ДҮН ШИНЖИЛГЭЭ БА ХУРДАН ЯЛАЛТ
                    </p>
                    <h2 className="text-[16px] leading-tight text-white font-black">
                      Саадыг тодорхойлж, эхний чөлөөлөлтүүдийг хэрэгжүүлнэ
                    </h2>
                  </div>
                </div>
              </div>

              {/* Two-column lists */}
              <div className="grid grid-cols-2 divide-x divide-white/[0.06]">
                {/* Obstacles */}
                <div className="px-4 pt-3 pb-3">
                  <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                    <Target className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                    <h3 className="text-[12px] text-white font-black leading-tight">
                      Ерөнхий сайдын онилсон 10 гол саад юу байв?
                    </h3>
                  </div>
                  <ol className="divide-y divide-white/[0.08]">
                    {obstacles.map((item, i) => (
                      <li key={item} className="flex items-start gap-2 py-[7px]">
                        <span
                          className="mt-[3px] w-[18px] h-[18px] rounded flex items-center justify-center flex-shrink-0 text-[9px] font-black"
                          style={{
                            color: '#ef5a67',
                            background: 'rgba(239,90,103,0.1)',
                            border: '1px solid rgba(239,90,103,0.26)',
                          }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-[15px] leading-[1.22] text-white/82 font-semibold">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Liberations */}
                <div className="px-4 pt-3 pb-3">
                  <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#2EC5FF] flex-shrink-0" />
                    <h3 className="text-[12px] text-white font-black">Эхний 10 чөлөөлөлт</h3>
                  </div>
                  <ol className="divide-y divide-white/[0.08]">
                    {firstLiberations.map((item, i) => (
                      <li key={item} className="flex items-start gap-2 py-[7px]">
                        <span
                          className="mt-[3px] w-[18px] h-[18px] rounded flex items-center justify-center flex-shrink-0 text-[9px] font-black"
                          style={{
                            color: '#2EC5FF',
                            background: 'rgba(46,197,255,0.1)',
                            border: '1px solid rgba(46,197,255,0.26)',
                          }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-[15px] leading-[1.22] text-white/82 font-semibold">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>

            {/* Phase 2 */}
            <article className="flex flex-col rounded-2xl overflow-hidden border border-[#F2B94B]/22 bg-white/[0.04] backdrop-blur-md animate-[panel9_.7s_ease-out_.13s_both]">
              <div
                className="flex-shrink-0 px-5 py-3 border-b border-[#F2B94B]/12"
                style={{ background: 'linear-gradient(to right, rgba(242,185,75,0.09), rgba(242,185,75,0.03))' }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                  style={{ background: 'rgba(242,185,75,0.12)', border: '1px solid rgba(242,185,75,0.32)' }}
                >
                  <Activity className="w-5 h-5 text-[#F2B94B]" />
                </div>
                <h2 className="text-[17px] leading-[1.18] text-white font-black">
                  30-60 дахь өдөр: АСУУДАЛ-ШИЙДЭЛ
                </h2>
              </div>

              <div className="flex flex-col divide-y divide-white/[0.09]">
                {solutionItems.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 px-5 py-5 animate-[itemIn9_.5s_ease-out_both]"
                    style={{ animationDelay: `${0.4 + i * 0.12}s` } as CSSProperties}
                  >
                    <div
                      className="mt-[9px] flex-shrink-0 rounded-full"
                      style={{
                        width: 11,
                        height: 11,
                        background: '#F2B94B',
                        boxShadow: '0 0 14px rgba(242,185,75,0.9)',
                      }}
                    />
                    <p className="text-[18px] leading-[1.38] text-white/92 font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Phase 3 */}
            <article className="flex flex-col rounded-2xl overflow-hidden border border-[#10B981]/22 bg-white/[0.04] backdrop-blur-md animate-[panel9_.7s_ease-out_.26s_both]">
              <div
                className="flex-shrink-0 px-5 py-3 border-b border-[#10B981]/12"
                style={{ background: 'linear-gradient(to right, rgba(16,185,129,0.09), rgba(16,185,129,0.03))' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.32)' }}
                  >
                    <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <img src={stampImg} alt="Чөлөөлөв" className="h-9 object-contain animate-[stampImpact9_0.98s_cubic-bezier(.2,.9,.24,1.2)_0.24s_both]" />
                </div>
                <h2 className="text-[17px] leading-[1.18] text-white font-black">
                  60–100 дахь өдөр: БАТАЛГААЖУУЛАЛТ
                </h2>
              </div>

              <div className="flex flex-col divide-y divide-white/[0.09]">
                {validationItems.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 px-4 py-4 animate-[itemIn9_.5s_ease-out_both]"
                    style={{ animationDelay: `${0.45 + i * 0.09}s` } as CSSProperties}
                  >
                    <CheckCircle2 className="mt-[3px] w-[18px] h-[18px] text-[#10B981] flex-shrink-0" />
                    <p className="text-[18px] leading-[1.28] text-white/85 font-semibold">{item}</p>
                  </div>
                ))}
              </div>

              <div
                className="flex-shrink-0 mx-4 mb-3 rounded-xl px-4 py-2.5 flex items-center gap-3"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)' }}
              >
                <ClipboardCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <p className="text-[13px] leading-tight text-white/60 font-semibold">
                  100 өдрийн үр дүнг баталгаажуулж, жилийн төлөвлөгөөнд шилжүүлнэ
                </p>
              </div>
            </article>
          </section>
        </div>{/* end centering wrapper */}
      </main>

      <style>{`
        @keyframes fade9     { from { opacity: 0 }                               to { opacity: 1 } }
        @keyframes panel9    { from { opacity: 0; transform: translateY(18px) }  to { opacity: 1; transform: translateY(0) } }
        @keyframes phase9    { from { opacity: 0; transform: scale(0.72) }       to { opacity: 1; transform: scale(1) } }
        @keyframes itemIn9   { from { opacity: 0; transform: translateX(-8px) }  to { opacity: 1; transform: translateX(0) } }
        @keyframes timeline9 { from { transform: scaleX(0) }                     to { transform: scaleX(1) } }
        @keyframes pulse9    { 0%   { transform: scale(1); opacity: 0.65 }       100% { transform: scale(1.85); opacity: 0 } }
        @keyframes stampImpact9 {
          0% { opacity: 0; transform: translateY(-25px) scale(1.58) rotate(-12deg); filter: blur(6px); }
          56% { opacity: 1; transform: translateY(6px) scale(.87) rotate(-5deg); filter: blur(0); }
          80% { transform: translateY(-2px) scale(1.05) rotate(-7deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes blueGlow  { 0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); } 50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); } }
      `}</style>
    </div>
  );
}
