import type { CSSProperties } from 'react';
import { Building2, Gauge, Handshake, ShieldCheck, Unlock } from 'lucide-react';

const pillars = [
  {
    letter: 'A',
    title: 'ИТГЭЛЦЭЛ:',
    icon: Handshake,
    color: '#2EC5FF',
    items: [
      'Ил тод, тогтмол мэдээллийн урсгал',
      'Авлигын эсрэг чөлөөлөлт: Ашиг сонирхол, авлигатай тэмцэх дохио',
      'Нээлттэй шийдвэрүүд',
    ],
  },
  {
    letter: 'B',
    title: 'ЭДИЙН ЗАСГИЙН ЭРХ ЧӨЛӨӨ',
    icon: Unlock,
    color: '#F2B94B',
    items: [
      'Бизнес дэх төрийн хүнд суртлын чөдөр тушааг тайлах',
      'Хөдөлмөр эрхлэх хүслийг дэмжих, жижиг, дунд бизнесийг бодитой дэмжих',
    ],
  },
  {
    letter: 'C',
    title: 'ШУУД МЭДРЭГДЭХ ТӨРИЙН ҮЙЛЧИЛГЭЭ',
    icon: Gauge,
    color: '#10B981',
    items: [
      'Төрийн үйлчилгээний хурд',
      'Цахим үйлчилгээний хүртээмж',
      'Төрийн албаны хариуцлага',
    ],
  },
  {
    letter: 'D',
    title: 'ТӨРИЙН СИСТЕМИЙН САХИЛГА БАТ',
    icon: ShieldCheck,
    color: '#A78BFA',
    items: [
      '#Unlock Hub team: Нийслэл, аймаг, сум, дүүрэг, яам, агентлаг бүрийн KPI',
      '7 хоног тутмын хяналт',
      'Үргүй зардал, өгөөжгүй ажил, төслүүдийг зогсоох',
    ],
  },
];

export function Slide5() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[55%] w-[780px] h-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/7 blur-[120px]" />
      </div>

      <main className="relative z-10 h-full px-9 pt-7 pb-8 flex flex-col">
        <header className="flex items-end justify-between mb-5 animate-[fadeIn_0.7s_ease-out_both]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-chart-3/50 bg-chart-3/10 px-5 py-2 mb-3">
              <Building2 className="w-4 h-4 text-chart-3" />
              <span className="text-sm text-chart-3 font-black uppercase tracking-[0.22em]">Стратеги</span>
            </div>
            <h1 className="text-[62px] leading-none font-black tracking-tight text-white">
              ЧӨЛӨӨЛӨЛТИЙН 100 ӨДӨР:{' '}<br />
              <span className="text-chart-3" style={{ animation: 'goldGlow 2.5s ease-in-out infinite' }}>СТРАТЕГИЙН 4 ТУЛГУУР</span>
            </h1>
          </div>
        </header>

        <section className="flex-1 min-h-0 grid grid-cols-[0.4fr_0.6fr] gap-8">
          <aside className="relative min-h-0">
            <div className="absolute left-[43%] top-[35%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 animate-[spin_35s_linear_infinite]" />
            <div className="absolute left-[43%] top-[35%] w-[410px] h-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-chart-3/25 animate-[spin_24s_linear_reverse_infinite]" />

            <div className="absolute left-[43%] top-[35%] w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 z-20">
              <figure className="group relative w-full h-full rounded-full overflow-hidden border-[3px] border-chart-3 shadow-[0_0_50px_rgba(242,185,75,0.28)] bg-[radial-gradient(circle_at_30%_30%,rgba(242,185,75,0.32),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(46,197,255,0.22),transparent_48%),linear-gradient(180deg,rgba(10,24,58,0.98),rgba(6,22,61,0.96))] animate-[hubIn_0.85s_ease-out_both]">
                <div className="absolute inset-[16%] rounded-full border border-white/12" />
                <div className="absolute inset-[28%] rounded-full border border-dashed border-chart-3/25" />
                <figcaption className="absolute inset-x-8 bottom-8 text-center">
                  <p className="text-[11px] text-chart-3 font-black uppercase tracking-[0.24em]">Стратегийн төв</p>
                  <p className="mt-1 text-[21px] text-white font-black">Нэгдсэн удирдлага</p>
                </figcaption>
              </figure>
              <div className="absolute inset-[-18px] rounded-full border border-dashed border-chart-3/45 animate-[spin_14s_linear_infinite]" />
            </div>

            <figure className="group absolute left-0 bottom-0 w-[520px] h-[250px] overflow-hidden rounded-[42px] border-2 border-primary/50 z-30 shadow-[0_0_28px_rgba(46,197,255,0.18)] bg-[linear-gradient(135deg,rgba(46,197,255,0.22),transparent_45%),linear-gradient(180deg,rgba(6,22,61,0.98),rgba(6,22,61,0.88))] animate-[imageRise_0.75s_ease-out_0.4s_both]">
              <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute right-8 bottom-8 h-20 w-28 rounded-[22px] border border-white/12 bg-white/6" />
              <figcaption className="absolute left-6 top-1/2 -translate-y-1/2">
                <p className="text-[11px] text-primary font-black uppercase tracking-[0.22em]">Стратеги → Ажил</p>
                <p className="mt-1 text-[20px] text-white font-black">Бодит хэрэгжилт</p>
              </figcaption>
            </figure>

            <figure className="group absolute right-0 top-1/2 -translate-y-1/2 w-[190px] h-[190px] overflow-hidden rounded-full border-2 border-chart-2/60 z-40 shadow-[0_0_26px_rgba(16,185,129,0.22)] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.26),transparent_48%),linear-gradient(180deg,rgba(6,22,61,0.98),rgba(6,22,61,0.9))] animate-[imageRise_0.75s_ease-out_0.58s_both]">
              <div className="absolute inset-[18%] rounded-full border border-white/12" />
              <figcaption className="absolute inset-x-3 bottom-4 text-center">
                <p className="text-[10px] text-chart-2 font-black uppercase tracking-[0.18em]">Төрийн үйлчилгээ</p>
                <p className="mt-1 text-[14px] text-white font-black">Шууд хүртээмж</p>
              </figcaption>
            </figure>
          </aside>

          <div className="self-center grid grid-cols-2 grid-rows-2 gap-4 h-[650px] min-h-0">
            {pillars.map(({ letter, title, icon: Icon, color, items }, index) => (
              <article
                key={letter}
                tabIndex={0}
                className="relative min-h-0 rounded-[26px] border border-white/15 bg-[#06163d]/28 px-6 py-5 outline-none animate-[branchIn_0.7s_ease-out_both]"
                style={{ animationDelay: `${0.12 + index * 0.1}s` } as CSSProperties}
              >
                <div className="absolute inset-x-0 bottom-0 h-1.5 rounded-b-[26px]" style={{ backgroundColor: color }} />
                <div className="flex items-center gap-4">
                  <div className="relative w-[70px] h-[70px] rounded-2xl border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: color, backgroundColor: `${color}18`, boxShadow: `0 0 24px ${color}25` }}>
                    <Icon className="w-9 h-9" style={{ color }} />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full text-background text-sm font-black flex items-center justify-center" style={{ backgroundColor: color }}>{letter}</span>
                  </div>
                  <h2 className="text-[30px] leading-[1.03] text-white font-black" style={{ textShadow: `0 0 22px ${color}35` }}>{title}</h2>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 text-[21px] leading-[1.18] text-white/90 font-bold">
                      <span className="mt-[9px] w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hubIn { from { opacity: 0; transform: scale(.8) rotate(-8deg); } to { opacity: 1; transform: scale(1) rotate(0); } }
        @keyframes branchIn { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes imageRise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes goldGlow {
          0%, 100% { text-shadow: 0 0 22px rgba(242,185,75,0.35); }
          50%       { text-shadow: 0 0 48px rgba(242,185,75,0.9), 0 0 90px rgba(242,185,75,0.35); }
        }
      `}</style>
    </div>
  );
}
