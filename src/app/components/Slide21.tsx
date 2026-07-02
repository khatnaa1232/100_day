import type { CSSProperties } from 'react';
import {
  BookOpenText,
  Clapperboard,
  FileText,
  Image as ImageIcon,
  LayoutTemplate,
} from 'lucide-react';

const contentCards = [
  {
    number: '01',
    title: '• Нэвтрүүлэг. Хийсэн үндсэн ажлууд. Тогтоол шийдвэр.',
    icon: Clapperboard,
    accent: '#2EC5FF',
    items: [
      '“Өмнө ба дараа”, “хөгжингүй орнуудад ямар байдаг вэ” гэсэн концепцтой.',
      'Нэг сэдэв нэг рийл болох угсралттай.',
    ],
  },
  {
    number: '02',
    title: '• Сэтгүүл',
    icon: BookOpenText,
    accent: '#F2B94B',
    items: [
      'Үзэл санаа. Ерөнхий сайдын ярилцлага. Зохиогчийн нийтлэл. Хүлээн зөвшөөрөгдсөн хүмүүсийн эшлэл.',
      'Хийсэн ажлууд. Чөлөөлье үзэл санааны тодотголтой.',
    ],
  },
  {
    number: '03',
    title: '• Нийтлэлүүд',
    icon: FileText,
    accent: '#10B981',
    items: [
      '100 хоногийг тойрсон нийтлэлүүд.  ~3 нийтлэлч.',
      ' Хөрөг.',
      ' Харьцуулбар.',
      ' Аль нэг ажлыг онцолсон. Гэх мэт хэлбэрүүдээр.',
    ],
  },
  {
    number: '04',
    title: '• Постер/постууд',
    icon: ImageIcon,
    accent: '#EF7B7B',
    items: [
      'Хийсэн ажлуудыг үзэл санааны тодотголтойгоор харуулах.',
      'Жишээ нь тэтгэврийн шинэчлэлээр, “ .... ийм ийм зүйлүүд хийгдлээ.',
      'Ийнхүү тэтгэвэр бодох зарчмын ойлгомжгүй байдлыг халж, цаг үе, нийгмийн шаардлагад нийцүүлэн тогтоов” гэх мэт.',
    ],
  },
];

export function Slide21() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[76px] right-[76px] top-[152px] h-px bg-white/10" />
        <div className="absolute left-[76px] right-[76px] bottom-[92px] h-px bg-white/10" />
        <div className="absolute left-[76px] top-[188px] bottom-[92px] w-px bg-white/10" />
        <div className="absolute right-[76px] top-[188px] bottom-[92px] w-px bg-white/10" />
        <div className="absolute left-1/2 top-[188px] bottom-[92px] w-px bg-white/10" />
        <div className="absolute left-[76px] right-[76px] top-1/2 h-px bg-white/10" />
        <div className="absolute right-[102px] top-[146px] text-[220px] leading-none font-black text-white/[0.04]">
          16
        </div>
        <div className="absolute left-[14%] top-[24%] w-[380px] h-[380px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute right-[14%] bottom-[16%] w-[420px] h-[420px] rounded-full bg-chart-3/10 blur-[150px]" />
      </div>

      <main className="relative z-10 h-full px-10 pt-8 pb-8 flex flex-col">
        <header className="mb-6 animate-[fade16_.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/45 px-5 py-2 mb-4">
            <LayoutTemplate className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-black uppercase tracking-[0.22em]">
              Контентийн төлөвлөгөө
            </span>
          </div>

          <div className="flex items-end justify-between gap-8">
            <h1 className="max-w-[1080px] text-[58px] leading-[0.95] font-black tracking-tight text-white" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
              ТӨЛӨВЛӨСӨН
              <br />
              <span className="text-primary">ҮНДСЭН КОНТЕНТУУД</span>
            </h1>
            <div className="rounded-[22px] border border-chart-3/35 bg-[#06163d]/55 px-6 py-4 backdrop-blur-sm">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-chart-3">
                Бүгд ардаа тохирсон зурагтай байх
              </p>
            </div>
          </div>
        </header>

        <section className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-5">
          {contentCards.map(({ number, title, icon: Icon, accent, items }, index) => (
            <article
              key={number}
              tabIndex={0}
              className="group relative overflow-hidden rounded-[34px] border border-white/14 bg-white/[0.035] outline-none transition-all duration-500 hover:-translate-y-1.5 hover:border-white/24 hover:bg-white/[0.05] focus-visible:-translate-y-1.5 focus-visible:border-white/24 focus-visible:bg-white/[0.05] animate-[card16_.72s_cubic-bezier(.22,1,.36,1)_both]"
              style={{ animationDelay: `${0.12 + index * 0.12}s` } as CSSProperties}
            >
              <div className="absolute inset-0 backdrop-blur-[18px]" />
              <div
                className="absolute -left-16 top-[-30px] h-36 w-36 rounded-full blur-[72px] transition-transform duration-700 group-hover:scale-125 group-hover:translate-x-4"
                style={{ background: `${accent}24` }}
              />
              <div
                className="absolute -right-12 bottom-[-28px] h-32 w-32 rounded-full blur-[68px] transition-transform duration-700 group-hover:scale-125 group-hover:-translate-x-3"
                style={{ background: `${accent}18` }}
              />
              <div className="absolute inset-0 bg-[#06163d]/52 transition-colors duration-500 group-hover:bg-[#06163d]/46" />
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500 group-hover:w-[6px] focus-visible:w-[6px]"
                style={{ background: accent, boxShadow: `0 0 18px ${accent}66` }}
              />

              <div className="relative z-10 h-full p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="inline-flex w-12 h-12 rounded-full border items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ borderColor: `${accent}66`, color: accent, background: 'rgba(255,255,255,0.03)' }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: accent }}>
                        {number}
                      </p>
                      <p className="mt-1 text-[14px] font-black uppercase tracking-[0.18em] text-white/55">
                        Контент
                      </p>
                    </div>
                  </div>

                  <span
                    className="h-1.5 w-16 rounded-full flex-shrink-0 transition-all duration-500 group-hover:w-28"
                    style={{ background: accent, boxShadow: `0 0 20px ${accent}55` }}
                  />
                </div>

                <div className="mt-5">
                  <h2 className="max-w-[760px] text-[27px] leading-[1.1] font-black text-white">
                    {title}
                  </h2>
                </div>

                <div className="mt-5 flex-1 flex flex-col gap-3">
                  {items.map((item, itemIndex) => (
                    <div
                      key={`${number}-${itemIndex}`}
                      className="rounded-[22px] border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/[0.055]"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-[9px] h-2.5 w-2.5 rounded-full flex-shrink-0"
                          style={{ background: accent, boxShadow: `0 0 14px ${accent}55` }}
                        />
                        <p className="text-[16px] leading-[1.3] font-bold text-white/90">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <style>{`
        @keyframes fade16 { from { opacity: 0; } to { opacity: 1; } }
        @keyframes card16 {
          from { opacity: 0; transform: translateY(22px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes blueGlow {
          0%,100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); }
          50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); }
        }
      `}</style>
    </div>
  );
}
