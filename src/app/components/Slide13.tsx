import type { CSSProperties } from 'react';
import {
  Activity,
  Building2,
  CheckCircle2,
  Gauge,
  Lightbulb,
  ScanSearch,
  ShieldCheck,
  Wind,
} from 'lucide-react';

const signals = [
  {
    number: '01',
    title: 'Төр ажиллаж эхэллээ',
    text: 'Шийдвэр гарч, хэрэгжилтийн хэмнэл бодитоор мэдрэгдэж эхэллээ.',
    icon: Activity,
    accent: '#2EC5FF',
  },
  {
    number: '02',
    title: 'Хариуцлага тодорхой боллоо',
    text: 'Хэн, юуг, хэдийд хийх нь өмнөхөөс хавьгүй ойлгомжтой боллоо.',
    icon: ShieldCheck,
    accent: '#F2B94B',
  },
  {
    number: '03',
    title: 'Бизнесийн дарамт багасч байна',
    text: 'Зөвшөөрөл, шалгалт, гацаанаас үүдэх ачаалал суларч эхэллээ.',
    icon: Building2,
    accent: '#10B981',
  },
  {
    number: '04',
    title: 'Үйлчилгээ хурдсаж байна',
    text: 'Иргэдэд зориулсан үйлчилгээ илүү ойр, хурдан, ойлгомжтой болж байна.',
    icon: Gauge,
    accent: '#A78BFA',
  },
  {
    number: '05',
    title: 'Сар бүр үр дүнг хэмжинэ',
    text: 'Лоозон биш, хэмжиж болдог үр дүнгээр дараагийн алхмаа тогтооно.',
    icon: ScanSearch,
    accent: '#EF7B7B',
  },
];

const metaphors = [
  {
    title: 'Цонх онгойлгосон мэт',
    text: 'Агааргүй бүгчим өрөөнд салхи оруулж, амьсгалах зай гаргасан шиг.',
    icon: Wind,
    accent: '#2EC5FF',
  },
  {
    title: 'Гэрэл асаасан мэт',
    text: 'Харанхуй замыг гэрэлтүүлж, урагшлах чиглэлийг тодруулсан шиг.',
    icon: Lightbulb,
    accent: '#F2B94B',
  },
];

export function Slide13() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[74px] right-[74px] top-[150px] h-px bg-white/10" />
        <div className="absolute left-[74px] right-[74px] bottom-[118px] h-px bg-white/10" />
        <div className="absolute left-[54%] top-[170px] bottom-[132px] w-px bg-white/10" />
        <div className="absolute left-[74px] top-[170px] bottom-[118px] w-px bg-white/10" />
        <div className="absolute right-[74px] top-[170px] bottom-[118px] w-px bg-white/10" />
        <div className="absolute right-[88px] top-[136px] text-[240px] leading-none font-black text-white/[0.04]">
          13
        </div>
        <div className="absolute left-[92px] top-[248px] w-[320px] h-[320px] rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute right-[200px] top-[210px] w-[360px] h-[360px] rounded-full bg-chart-3/10 blur-[140px]" />
      </div>

      <main className="relative z-10 h-full px-10 pt-8 pb-8 flex flex-col">
        <header className="mb-4 animate-[fade13_.6s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/45 px-5 py-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-black uppercase tracking-[0.22em] text-primary">
              Контентийн төлөвлөгөө
            </span>
          </div>
        </header>

        <section className="flex-1 min-h-0 flex gap-8">
          <article className="w-[54%] min-h-0 flex flex-col justify-between animate-[left13_.72s_ease-out_both]">
            <div className="max-w-[980px]">
              <div className="mt-[34px] max-w-[900px] rounded-[28px] border border-chart-3/18 bg-chart-3/[0.05] px-6 py-5 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-chart-3">
                  Контентийн хүрээ
                </p>
                <h2
                  className="mt-3 text-[38px] leading-[1.02] font-black text-white"
                  style={{ animation: 'goldGlow13 2.6s ease-in-out infinite' }}
                >
                  <span className="text-chart-3">ЧӨЛӨӨЛЬЕ БОДЛОГО</span>
                  <span className="text-white"> 100 ХОНОГ</span>
                  <br />
                  <span className="text-white/92">ХЭРЭГЖСЭНИЙ ДАРАА</span>
                </h2>
              </div>
              <p className="mt-[150px] text-[24px] font-black uppercase tracking-[0.22em] text-white/42">
                Гол мессеж
              </p>
              <h1 className="mt-[50px] text-[62px] leading-[0.94] font-black tracking-tight text-white">
                ХҮНИЙ БОЛОН НИЙГМИЙН АМЬДРАЛЫН ОЛОН ЗҮЙЛ
                <br />
                <span className="text-primary">ОЙЛГОМЖТОЙ</span>
                <span className="text-white"> БОЛЛОО</span>
              </h1>
            </div>
            <div className="max-w-[930px] rounded-[30px] border border-white/12 bg-white/[0.03] px-7 py-6 backdrop-blur-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary">
                Шүүмжийн эсрэг гол өнцөг
              </p>
              <p className="mt-3 text-[30px] leading-[1.12] font-extralight text-white/88">
                Хэрэгжилтгүй лоозогнол, нүдэнд харагдах биегүй гэх мэт шүүмжийг
                <span className="text-chart-3"> бодит өөрчлөлтийн нотолгоогоор </span>
                няцаана.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metaphors.map(({ title, text, icon: Icon, accent }, index) => (
                <article
                  key={title}
                  tabIndex={0}
                  className="relative overflow-hidden rounded-[26px] border border-white/12 bg-[#06163d]/40 px-5 py-5 outline-none animate-[rise13_.55s_ease-out_both]"
                  style={{ animationDelay: `${0.42 + index * 0.1}s` } as CSSProperties}
                >
                  <div className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
                  <div className="flex items-start gap-4">
                    <span
                      className="inline-flex w-12 h-12 rounded-full border items-center justify-center flex-shrink-0"
                      style={{ borderColor: `${accent}55`, color: accent, background: `${accent}10` }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em]" style={{ color: accent }}>
                        Метафор
                      </p>
                      <h3 className="mt-1 text-[22px] leading-tight font-black text-white">{title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.34] text-white/68 font-semibold">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="flex-1 min-h-0 flex flex-col animate-[right13_.74s_ease-out_both]">
            <div className="relative h-[314px] overflow-hidden rounded-[34px] border border-white/14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(46,197,255,0.22),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(242,185,75,0.22),transparent_26%),linear-gradient(135deg,rgba(6,22,61,0.98),rgba(8,28,72,0.92))]" />
              <div className="absolute left-8 top-8 h-24 w-24 rounded-[28px] border border-white/12 bg-white/6" />
              <div className="absolute left-[160px] top-[58px] h-16 w-[240px] rounded-full bg-white/6 blur-sm" />
              <div className="absolute right-10 top-10 h-[110px] w-[220px] rounded-[30px] border border-white/12 bg-white/[0.04]" />
              <div className="absolute left-[120px] bottom-[56px] h-[3px] w-[220px] rounded-full bg-primary/70" />
              <div className="absolute left-[120px] bottom-[40px] h-[3px] w-[320px] rounded-full bg-chart-3/55" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06163d]/94 via-[#06163d]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06163d]/18 to-[#06163d]/62" />
              <div className="absolute left-6 right-6 bottom-6">
                <p className="max-w-[560px] text-[26px] leading-[1.08] font-black text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
                  Төрийн хөдөлгөөн иргэд, бизнес, үйлчилгээ гурван талд зэрэг мэдрэгдэж эхэлсэн үе.
                </p>
              </div>
            </div>

            <div className="mt-5 pb-4 border-b border-white/12">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[13px] font-black uppercase tracking-[0.22em] text-primary">
                    Базалсан санаанууд
                  </p>
                  <h2 className="mt-1 text-[31px] leading-tight font-black text-white">
                    5 ойлгомжтой өөрчлөлт
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-[40px] leading-none font-black text-primary">05</p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.16em] text-white/45">
                    дохио
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex-1 flex flex-col gap-1">
              {signals.map(({ number, title, text, icon: Icon, accent }, index) => (
                <article
                  key={number}
                  tabIndex={0}
                  className="relative flex-1 min-h-0 rounded-[22px] bg-white/[0.025] py-3 pl-7 pr-3 outline-none animate-[signal13_.52s_ease-out_both]"
                  style={{ animationDelay: `${0.1 + index * 0.07}s` } as CSSProperties}
                >
                  <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-full" style={{ background: accent }} />
                  <div className="h-full flex items-start gap-5 border-b border-white/10 pb-3">
                    <div className="w-[86px] flex-shrink-0">
                      <p className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: accent }}>
                        {number}
                      </p>
                      <span
                        className="mt-3 inline-flex w-11 h-11 rounded-full border items-center justify-center"
                        style={{ borderColor: `${accent}55`, color: accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-[24px] leading-[1.03] font-black text-white">{title}</h3>
                      <p className="mt-2 text-[16px] leading-[1.28] text-white/70 font-semibold">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>
      </main>

      <style>{`
        @keyframes fade13 { from { opacity: 0; } to { opacity: 1; } }
        @keyframes left13 { from { opacity: 0; transform: translateX(-22px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes right13 { from { opacity: 0; transform: translateX(22px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes rise13 { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes signal13 { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes goldGlow13 {
          0%, 100% { text-shadow: 0 0 18px rgba(242,185,75,.28); }
          50% { text-shadow: 0 0 38px rgba(242,185,75,.72), 0 0 80px rgba(46,197,255,.16); }
        }
      `}</style>
    </div>
  );
}
