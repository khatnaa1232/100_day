import type { CSSProperties } from 'react';
import {
  BadgeCheck,
  BriefcaseBusiness,
  MessageSquareQuote,
  UsersRound,
} from 'lucide-react';

const angleSections = [
  {
    title: 'Өнгөрсөн хугацаанд хийж бүтээсэн ажлуудыг “чөлөөлөх” гэж нэрлэсний учир шалтгаан.',
    bullets: ['Ерөнхий сайдын богино ярилцлага', 'Үзэл санааг онцолсон зохиогчийн нийтлэл'],
    icon: MessageSquareQuote,
    accent: '#2EC5FF',
  },
  {
    title: 'Чөлөөлөлтийн өмнөх ба дараах орчныг салбар бүрээр харуулах.',
    bullets: ['Постерууд', '“Гэрчүүдийн” яриа: олон зүйл ойлгомжтой болсон'],
    icon: UsersRound,
    accent: '#10B981',
  },
  {
    title: '“Чөлөө Учрал” гэсэн буулт',
    text: 'Эрх чөлөө, хориглолтоос чөлөөлөх гэсэн утга нь бизнесийн орчинд эерэг, санаанд үлдэх хэллэг болж бууж байна.',
    bullets: ['Сошиал хөгжүүлэлт', 'Инфлүинсэр агуулгын цуврал'],
    icon: BriefcaseBusiness,
    accent: '#F2B94B',
  },
];

const imageWall = [
  { title: 'Ерөнхий сайдын богино ярилцлага', accent: '#2EC5FF' },
  { title: 'Зохиогчийн онцлох нийтлэл', accent: '#F2B94B' },
  { title: 'Постерын цуврал', accent: '#10B981' },
  { title: 'Салбарын өмнө, дараах кейс', accent: '#A78BFA' },
  { title: 'Гэрчүүдийн богино яриа', accent: '#2EC5FF' },
  { title: 'Сошиал хөгжүүлэлт', accent: '#F97316' },
  { title: 'Инфлүинсэр агуулга', accent: '#10B981' },
  { title: 'Нэгдсэн мессежийн багц', accent: '#F43F5E' },
  { title: 'Reel, short контент', accent: '#38BDF8' },
];

export function Slide15() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[80px] right-[80px] top-[148px] h-px bg-white/10" />
        <div className="absolute left-[82px] top-[188px] bottom-[96px] w-px bg-white/10" />
        <div className="absolute right-[82px] top-[188px] bottom-[96px] w-px bg-white/10" />
        <div className="absolute left-[48%] top-[188px] bottom-[96px] w-px bg-white/10" />
        <div className="absolute right-[112px] top-[150px] text-[220px] leading-none font-black text-white/[0.04]">15</div>
      </div>

      <main className="relative z-10 h-full px-10 pt-8 pb-10 flex flex-col">
        <header className="mb-6 animate-[fade15_.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/45 px-5 py-2 mb-4">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-black uppercase tracking-[0.22em]">Контентийн төлөвлөгөө</span>
          </div>
          <h1 className="max-w-[1240px] text-[56px] leading-[0.96] font-black tracking-tight text-white" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
            <span className="text-primary">ХЭРЭГЖИЛТ</span>
            <br />
          </h1>
        </header>

        <section className="flex-1 min-h-0 flex items-center gap-8">
          <article className="w-[42%] flex-shrink-0 self-center animate-[left15_.78s_ease-out_both]">
            <div className="pb-5 border-b border-white/12">
              <p className="text-[13px] text-primary font-black uppercase tracking-[0.22em]">Өнцгүүд</p>
            </div>

            <div className="mt-6 flex flex-col gap-6 justify-center">
              {angleSections.map(({ title, text, bullets, icon: Icon, accent }, index) => (
                <article
                  key={title}
                  tabIndex={0}
                  className="relative pl-16 pr-4 outline-none animate-[section15_.62s_ease-out_both]"
                  style={{ animationDelay: `${0.14 + index * 0.12}s` } as CSSProperties}
                >
                  <span className="absolute left-0 top-0 w-11 h-11 rounded-full border flex items-center justify-center" style={{ borderColor: `${accent}65`, color: accent }}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="absolute left-[54px] top-[20px] right-0 h-px bg-white/10" />
                  <h3 className="text-[28px] leading-[1.04] text-white font-black">{title}</h3>
                  <p className="mt-2 text-[17px] leading-[1.3] text-white/72 font-bold">{text}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    {bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <span className="mt-[9px] w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
                        <p className="text-[16px] leading-[1.28] text-white/68 font-bold">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

          </article>

          <article className="flex-1 min-h-0 self-center animate-[right15_.82s_ease-out_both]">
            <div className="relative h-[690px]">
              <div className="absolute inset-0">
                {[0, 1, 2].map((row) => (
                  <div key={`row-${row}`} className="absolute left-0 right-0 h-px bg-white/10" style={{ top: `${row * 33.333 + 33.333}%` }} />
                ))}
                {[0, 1].map((col) => (
                  <div key={`col-${col}`} className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: `${col * 33.333 + 33.333}%` }} />
                ))}
              </div>

              <div className="grid grid-cols-3 grid-rows-3 h-full">
                {imageWall.map(({ title, accent }, index) => (
                  <figure
                    key={title}
                    className="relative overflow-hidden border border-white/8 animate-[tileReveal15_0.55s_cubic-bezier(.22,1,.36,1)_both]"
                    style={{ animationDelay: `${0.1 + index * 0.07}s` } as CSSProperties}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_58%),linear-gradient(180deg,rgba(6,22,61,0.92),rgba(6,22,61,0.78))]" />
                    <div className="absolute left-5 top-5 h-12 w-12 rounded-2xl border border-white/12 bg-white/6" style={{ boxShadow: `0 0 24px ${accent}25` }}>
                      <div className="h-full w-full rounded-2xl" style={{ background: `linear-gradient(135deg, ${accent} 0%, transparent 140%)`, opacity: 0.85 }} />
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="mb-3 h-[3px] w-14 rounded-full" style={{ backgroundColor: accent }} />
                      <p className="text-[22px] leading-[1.08] font-black text-white">{title}</p>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>

      <style>{`
        @keyframes fade15 { from { opacity: 0; } to { opacity: 1; } }
        @keyframes left15 { from { opacity: 0; transform: translateX(-28px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes right15 { from { opacity: 0; transform: translateX(28px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes section15 { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rise15 { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes tileReveal15 {
          0% { opacity: 0; transform: scale(.88); }
          60% { opacity: 1; transform: scale(1.03); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes blueGlow {
          0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); }
          50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); }
        }
        @keyframes goldGlow15 {
          0%, 100% { text-shadow: 0 0 18px rgba(242,185,75,0.28); }
          50% { text-shadow: 0 0 40px rgba(242,185,75,0.72), 0 0 88px rgba(46,197,255,0.18); }
        }
      `}</style>
    </div>
  );
}
