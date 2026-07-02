import { Building2, CheckCircle2, Coins, UsersRound } from 'lucide-react';
import backgroundImg from '../../imports/background.jpg';
import unlock10Img from '../../imports/unlock_10.png';
import { slide6Unlocks } from './unlockContent';

const unlock10 = slide6Unlocks[0];

const metrics = [
  { value: '14', label: 'компани нэгтгэв', icon: Building2, accent: '#a78bfa' },
  { value: '260', label: 'орон тоо цомхотгов', icon: UsersRound, accent: '#2ec5ff' },
  { value: '67.3 тэрбум', label: 'жил бүр хэмнэнэ', icon: Coins, accent: '#facc15' },
];

export function Slide24() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#06163d] text-white">
      <img src={backgroundImg} alt="" className="absolute inset-0 h-full w-full object-cover" />

      <main className="relative z-10 grid h-full grid-cols-[760px_1fr] gap-[54px] px-[92px] pb-[78px] pt-[98px]">
        <section className="flex min-h-0 flex-col justify-center">
          <div className="flex items-center gap-4">
            <span className="rounded-[8px] border border-[#a78bfa]/55 bg-[#a78bfa]/14 px-4 py-2 text-[16px] font-black uppercase tracking-[0.18em] text-[#d8b4fe]">
              {unlock10.unlock}
            </span>
            <span className="rounded-[8px] border border-white/18 bg-white/[0.05] px-4 py-2 text-[16px] font-black tabular-nums text-white/72">
              {unlock10.date}
            </span>
          </div>

          <p className="mt-8 text-[15px] font-black uppercase tracking-[0.28em] text-[#a78bfa]">
            Чингис хаан баялгийн сан
          </p>
          <h1 className="mt-4 max-w-[700px] text-[68px] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white">
            {unlock10.title}
          </h1>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {metrics.map(({ value, label, icon: Icon, accent }) => (
              <article
                key={label}
                className="min-h-[132px] rounded-[22px] border bg-[#06163d]/48 px-5 py-5"
                style={{ borderColor: `${accent}66` }}
              >
                <Icon className="h-7 w-7" style={{ color: accent }} strokeWidth={2.4} />
                <p className="mt-4 text-[30px] font-black leading-none tracking-[-0.04em]" style={{ color: accent }}>
                  {value}
                </p>
                <p className="mt-2 text-[12px] font-black uppercase leading-[1.16] tracking-[0.16em] text-white/50">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative min-h-0">
          <img
            src={unlock10Img}
            alt="Чингис хаан Баялгийн сан"
            className="absolute -right-[58px] bottom-[-82px] h-[660px] w-auto object-contain opacity-95"
          />

          <div className="relative z-10 ml-auto mt-[88px] max-w-[820px] rounded-[34px] border border-white/16 bg-[#06163d]/58 px-8 py-8">
            <p className="text-[14px] font-black uppercase tracking-[0.28em] text-[#facc15]">
              Гол өөрчлөлтүүд
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {unlock10.bullets.map((bullet, index) => (
                <article key={bullet} className="grid grid-cols-[44px_1fr] gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#a78bfa]/50 bg-[#a78bfa]/12 text-[#d8b4fe]">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/34">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-1 text-[22px] font-black leading-[1.2] text-white/82">
                      {bullet}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
