import type { CSSProperties } from 'react';
import {
  BadgeCheck,
  Building2,
  DoorOpen,
  FlaskConical,
  HandCoins,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Wallet,
} from 'lucide-react';

const proofPoints = [
  {
    title: 'Бизнесийн орчны суурь тавигдав',
    text: 'Хүнд суртал, авилга, ойлгомжгүй байдлаас салгах бодлогын бат бэх суурийг тавьж чадсан.',
    icon: Building2,
    accent: '#2EC5FF',
  },
  {
    title: 'Энэ бол жинхэнэ эрх чөлөө',
    text: 'Лоозон биш, бизнес эхлэх, ажиллах, өсөх орон зай бодитоор тэлж эхэлсэн.',
    icon: BadgeCheck,
    accent: '#F2B94B',
  },
  {
    title: 'Хөрөнгө оруулалтын хаалганд завсар гаргав',
    text: 'Хаалттай, бүр түгжээтэй байсан гадаадын хөрөнгө оруулалтын хаалга нээгдэх үндэслэл бүрдэж эхэллээ.',
    icon: DoorOpen,
    accent: '#10B981',
  },
];

const socialItems = [
  {
    title: 'Тэтгэвэр',
    text: 'Шударга тогтолцоо, хүний хөдөлмөрийн үнэлгээг сэргээх шинэчлэлийн дохио.',
    icon: HandCoins,
    accent: '#A78BFA',
  },
  {
    title: 'Цалин',
    text: 'Орлогын ойлгомжгүй байдал, будилааныг засах бодит алхмууд хийгдэв.',
    icon: Wallet,
    accent: '#2EC5FF',
  },
  {
    title: 'Хүүхэд хамгаалал',
    text: 'Стандарт, хэрэгжилт, хяналтыг илүү бодит болгох шаардлага төвд орж ирэв.',
    icon: ShieldCheck,
    accent: '#EF7B7B',
  },
  {
    title: 'Эм, эмийн бүтээгдэхүүн',
    text: 'Шинжилгээ, чанар, хяналтын асуудлыг илүү тодорхой түвшинд тавьж эхэллээ.',
    icon: FlaskConical,
    accent: '#10B981',
  },
  {
    title: 'Бусад нийгмийн асуудлууд',
    text: 'Болж өнгөрсөн үйл явдал, хэлсэн үг, гарсан шийдвэрүүдээр үргэлжлүүлэн батална.',
    icon: Stethoscope,
    accent: '#F2B94B',
  },
];

export function Slide14() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[72px] right-[72px] top-[152px] h-px bg-white/10" />
        <div className="absolute left-[96px] top-[198px] bottom-[96px] w-px bg-white/10" />
        <div className="absolute right-[102px] top-[198px] bottom-[96px] w-px bg-white/10" />
        <div className="absolute left-[58%] top-[220px] bottom-[104px] w-px bg-white/10" />
        <div className="absolute right-[104px] top-[154px] text-[220px] leading-none font-black text-white/[0.04]">14</div>
      </div>

      <main className="relative z-10 h-full px-10 pt-8 pb-10 flex flex-col">
        <header className="mb-6 animate-[fade14_.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/45 px-5 py-2 mb-4">
            <HeartHandshake className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-black uppercase tracking-[0.22em]">Контентийн төлөвлөгөө</span>
          </div>
          <h1 className="text-[62px] leading-[0.96] font-black tracking-tight text-white" style={{ animation: 'blueGlow 2.5s ease-in-out 0s infinite' }}>
            <span className="text-primary">НАРИЙВЧЛАЛ</span>
          </h1>
        </header>

        <section className="flex-1 min-h-0 flex gap-10">
          <article className="w-[54%] flex-shrink-0 flex flex-col animate-[left14_.78s_ease-out_both]">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-primary font-black mb-[50px]">Гол чиглэл</p>
              <div className="flex flex-col gap-6">
                {proofPoints.map(({ title, text, icon: Icon, accent }, index) => (
                  <article
                    key={title}
                    tabIndex={0}
                    className="relative pl-16 pr-4 outline-none animate-[manifest14_.62s_ease-out_both]"
                    style={{ animationDelay: `${0.18 + index * 0.1}s` } as CSSProperties}
                  >
                    <span className="absolute left-0 top-0 w-11 h-11 rounded-full border flex items-center justify-center" style={{ borderColor: `${accent}60`, color: accent }}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="absolute left-[54px] top-[20px] right-0 h-px bg-white/10" />
                    <h2 className="text-[30px] leading-[1.02] text-white font-black">{title}</h2>
                    <p className="mt-2 max-w-[760px] text-[18px] leading-[1.28] text-white/72 font-bold">{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative mt-8 flex justify-center">
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/14 to-transparent" />
              <h2
                className="relative px-8 py-3 text-[34px] leading-tight text-white font-light tracking-[-0.02em]"
                style={{
                  background: 'linear-gradient(180deg, rgba(6,22,61,0.94), rgba(6,22,61,0.72))',
                  boxShadow: '0 10px 36px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '999px',
                  textShadow: '0 0 22px rgba(255,255,255,0.08)',
                  transform: 'translateY(-28%)',
                }}
              >
                <span className="text-white/92">Үйл, үг, </span>
                <span className="text-chart-3" style={{ animation: 'goldGlow14 2.8s ease-in-out infinite' }}>шийдвэрээр</span>
                <span className="text-white/92"> батлагдах чиглэлүүд</span>
              </h2>
            </div>

          </article>
          <article className="flex-1 min-h-0 flex flex-col justify-between animate-[right14_.82s_ease-out_both]">
            <div className="pb-4 border-b border-white/12">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[13px] text-primary font-black uppercase tracking-[0.22em]">Бусад чиглэл</p>
                </div>
                <div className="text-right">
                  <p className="text-[40px] leading-none text-primary font-black">05+</p>
                  <p className="mt-1 text-[11px] text-white/45 font-black uppercase tracking-[0.16em]">сэдэв</p>
                </div>
              </div>
            </div>

            <div className="pt-5 flex-1 flex flex-col justify-between">
              {socialItems.map(({ title, text, icon: Icon, accent }, index) => (
                <article
                  key={title}
                  tabIndex={0}
                  className="relative pl-18 pr-3 py-2 outline-none animate-[topic14_.58s_ease-out_both]"
                  style={{ animationDelay: `${0.12 + index * 0.08}s` } as CSSProperties}
                >
                  <span className="absolute left-0 top-0 bottom-0 w-px" style={{ background: accent }} />
                  <span className="absolute left-[-4px] top-4 w-[9px] h-[9px] rounded-full" style={{ background: accent, boxShadow: `0 0 16px ${accent}` }} />
                  <div className="flex items-start gap-5 pb-3 border-b border-white/10">
                    <div className="w-[104px] flex-shrink-0">
                      <span className="w-12 h-12 rounded-full border flex items-center justify-center" style={{ borderColor: `${accent}60`, color: accent }}>
                        <Icon className="w-6 h-6" />
                      </span>
                      <p className="mt-3 text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: accent }}>
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[28px] leading-[1.02] text-white font-black">{title}</h3>
                      <p className="mt-2 text-[18px] leading-[1.3] text-white/72 font-bold">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>
      </main>

      <style>{`
        @keyframes fade14 { from { opacity: 0; } to { opacity: 1; } }
        @keyframes left14 { from { opacity: 0; transform: translateX(-28px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes right14 { from { opacity: 0; transform: translateX(28px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes manifest14 { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes topic14 { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes blueGlow {
          0%, 100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); }
          50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); }
        }
        @keyframes goldGlow14 {
          0%, 100% { text-shadow: 0 0 18px rgba(242,185,75,0.28); }
          50% { text-shadow: 0 0 40px rgba(242,185,75,0.72), 0 0 88px rgba(46,197,255,0.18); }
        }
      `}</style>
    </div>
  );
}
