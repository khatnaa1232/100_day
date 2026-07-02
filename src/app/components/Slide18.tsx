import type { CSSProperties } from 'react';
import { BadgeCheck, Lightbulb, Scale, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import bgImage from '../../imports/background.jpg';

const principles = [
  {
    number: '01',
    title: 'Эрх чөлөөг дээдлэх зарчим',
    text: 'иргэн, хуулийн этгээдийн хууль ёсны эрх, санаачилга, сонголтын эрх чөлөөг дээдэлж, төр дур зоргоор бизнесийн үйл ажиллагааг хязгаарлахгүй байхад оршино.',
    accent: '#f28a1d',
    icon: BadgeCheck,
  },
  {
    number: '02',
    title: 'Инновацийг дэмжих зарчим',
    text: 'шинэ санаа, технологи, мэдлэг, бизнесийн загвар, бүтээлч шийдлийг хөгжүүлэх, нэвтрүүлэхэд тулгардаг саадыг арилгаж, хөгжил дэвшил, бүтээмж, өрсөлдөх чадварыг нэмэгдүүлэхэд оршино.',
    accent: '#e3127a',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Шударга өрсөлдөөнийг хамгаалах зарчим',
    text: 'зах зээлд оролцогч бүх этгээдэд адил нөхцөл, тэгш боломж олгож, төрөөс хэн нэгэнд онцгой давуу эрх олгохыг хориглож, хууль тогтоомжийг ялгаваргүй хэрэгжүүлэхэд оршино.',
    accent: '#20c969',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Төрийн оролцоог хязгаарлах зарчим',
    text: 'төр зайлшгүй шаардлагатай буюу нийтийн ашиг сонирхол, аюулгүй байдал, эрүүл мэнд, байгаль орчныг хамгаалахаас бусад тохиолдолд иргэн, хуулийн этгээдийн зах зээлийн үйл ажиллагаанд оролцохгүй байхад оршино.',
    accent: '#22b7f2',
    icon: SlidersHorizontal,
  },
];

export function Slide18() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07163c] text-white">
      <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover" />

      <main className="relative z-10 h-full w-full">
        <header className="absolute left-[46px] top-[38px] animate-[slide18Header_.68s_cubic-bezier(.22,1,.36,1)_both]">
          <div className="flex items-center gap-[28px]">
            <p className="text-[18px] font-black uppercase tracking-[0.42em] text-[#36c9ff]">
              ЧӨЛӨӨЛЬЕ ҮНДЭСНИЙ САНААЧИЛГА
            </p>
            <span className="h-px w-[82px] bg-white/20" />
            <p className="text-[18px] font-black uppercase tracking-[0.38em] text-white/62">
              04 ЗАРЧИМ
            </p>
          </div>
          <h1 className="mt-[20px] text-[57px] font-black uppercase leading-[0.96] tracking-[-0.045em]">
            <span className="block text-white">ЭРХ ЧӨЛӨӨТ</span>
            <span className="block text-[#36c9ff]">ЭДИЙН ЗАСГИЙН 4 ЗАРЧИМ</span>
          </h1>
        </header>

        <section className="absolute left-[118px] right-[120px] top-[300px] grid grid-cols-2 gap-x-[20px] gap-y-[22px]">
          {principles.map(({ number, title, text, accent, icon: Icon }, index) => (
            <article
              key={number}
              className="relative h-[264px] rounded-[24px] border-[2px] bg-[#081f55]/42 px-[30px] py-[32px] animate-[slide18Card_.62s_cubic-bezier(.22,1,.36,1)_both]"
              style={{
                borderColor: accent,
                animationDelay: `${0.12 + index * 0.08}s`,
              } as CSSProperties}
            >
              <span
                className="absolute right-[46px] top-[48px] text-[64px] font-black leading-none opacity-[0.14]"
                style={{ color: accent }}
              >
                {number}
              </span>
              <div className="flex items-center gap-[20px]">
                <span
                  className="grid h-[58px] w-[58px] place-items-center rounded-full border-[2px]"
                  style={{ borderColor: `${accent}90`, color: accent }}
                >
                  <Icon className="h-[29px] w-[29px]" strokeWidth={2.25} />
                </span>
                <h2 className="text-[29px] font-black leading-[1.08] tracking-[-0.02em] text-white">
                  {title}
                </h2>
              </div>
              <p className="mt-[34px] max-w-[760px] text-[18px] font-black leading-[1.32] text-white/66">
                {text}
              </p>
            </article>
          ))}
        </section>

        <div className="absolute left-1/2 top-[572px] z-20 grid h-[116px] w-[116px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[2px] border-white/24 bg-[#10275b]/80 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
          <Scale className="h-[50px] w-[50px]" strokeWidth={2.25} />
        </div>
      </main>

      <style>{`
        @keyframes slide18Header {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide18Card {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
