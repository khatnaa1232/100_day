import type { CSSProperties } from 'react';
import { BarChart3, Check, Leaf, Scale, ShieldCheck } from 'lucide-react';
import bgImage from '../../imports/background.jpg';

const paths = [
  {
    number: '01',
    title: 'ЭДИЙН ЗАСГИЙН\nЧӨЛӨӨЛӨЛТ',
    text: 'Төрийн зуршлаас хувийн хэвшилрүү. Хөдөлмөрлөж буй хүн бүрийг хүнд суртлаас чөлөөлнө.',
    accent: '#2f86ff',
    icon: BarChart3,
  },
  {
    number: '02',
    title: 'НОГООН ХӨГЖЛИЙН\nЧӨЛӨӨЛӨЛТ',
    text: 'Сэргээгдэх эрчим хүчний дундаршгүй нөөцдөө түшиглэн түлш шатахуун, цахилгааны импортын хараат байдлаас чөлөөлнө.',
    accent: '#2be96f',
    icon: Leaf,
  },
  {
    number: '03',
    title: 'АВЛИГЫН ЭСРЭГ\nЧӨЛӨӨЛӨЛТ',
    text: 'Монгол хүн, монгол эрх ашгийг тонон дээрэмддэг авилгаас ард түмэн, ардчилсан төрөө чөлөөлнө.',
    accent: '#ff3148',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'ЭРХ ЗҮЙН ЧӨЛӨӨЛӨЛТ',
    text: 'Нийгмийн харилцааг хууль хоорондын зөрчил, давхардалаас чөлөөлнө.',
    accent: '#ffc630',
    icon: Scale,
  },
];

export function Slide16() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07163c] text-white">
      <img src={bgImage} alt="" className="absolute inset-0 h-full w-full object-cover" />

      <main className="relative z-10 h-full w-full">
        <div className="absolute bottom-[68px] left-[760px] top-[34px] w-px bg-white/14" />

        <section className="absolute left-[118px] top-[292px] w-[590px] text-right animate-[slide16Left_.72s_cubic-bezier(.22,1,.36,1)_both]">
          <h1 className="text-[60px] font-black uppercase leading-[0.9] tracking-[-0.045em] text-white">
            ЧӨЛӨӨЛЬЕ
            <span className="block">ҮНДЭСНИЙ</span>
            <span className="mt-[14px] block text-[66px] text-[#2be96f]">САНААЧИЛГА</span>
          </h1>
          <div className="absolute -bottom-[108px] right-[4px] h-[66px] w-[66px] rounded-full border-[3px] border-[#2be96f] text-[#2be96f]">
            <Check className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 stroke-[3]" />
          </div>
        </section>

        <section className="absolute left-[818px] right-[80px] top-[244px]">
          <div className="mt-[26px] border-t border-white/13">
            {paths.map(({ number, title, text, accent, icon: Icon }, index) => (
              <article
                key={number}
                className="grid h-[136px] grid-cols-[52px_78px_380px_1fr_84px] items-center border-b border-white/13 animate-[slide16Path_.62s_cubic-bezier(.22,1,.36,1)_both]"
                style={{ animationDelay: `${0.14 + index * 0.1}s` } as CSSProperties}
              >
                <p className="text-[16px] font-black tabular-nums text-white/34">{number}</p>
                <span
                  className="grid h-[52px] w-[52px] place-items-center rounded-full border"
                  style={{ borderColor: `${accent}80`, color: accent }}
                >
                  <Icon className="h-[25px] w-[25px]" strokeWidth={2.25} />
                </span>
                <div>
                  <h2 className="mt-[8px] whitespace-pre-line text-[32px] font-black uppercase leading-[0.9] tracking-[-0.035em] text-white">
                    {title}
                  </h2>
                </div>
                <p className="max-w-[480px] pr-8 text-[20px] font-black italic leading-[1.24] text-white/74">
                  {text}
                </p>
                <span className="h-1 w-[82px]" style={{ backgroundColor: accent }} />
              </article>
            ))}
          </div>
        </section>
      </main>

      <style>{`
        @keyframes slide16Left {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide16Path {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
