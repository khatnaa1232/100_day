import chuluulyImg from '../../imports/chuluuly.png';
import { LiquidGlass } from './LiquidGlass';

const pillars = ['ИТГЭЛ', 'ХУРД', 'БОДИТ ҮР ДҮН'];

export function Slide14() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] left-[6%] h-[260px] w-[46%] rounded-full bg-[#f0b24e]/16 blur-[120px]" />
        <div className="absolute -top-[8%] right-[8%] h-[300px] w-[36%] rounded-full bg-[#5546ff]/24 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[44%] w-[40%] rounded-full bg-[#1f63ff]/14 blur-[140px]" />
      </div>

      <div className="absolute inset-x-28 top-[150px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute inset-x-28 bottom-[122px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <main className="relative z-10 flex h-full flex-col items-center justify-center px-24 text-center animate-[slide9Rise_0.85s_cubic-bezier(.22,1,.36,1)_both]">
        <img
          src={chuluulyImg}
          alt="Чөлөөлье"
          className="slide9-center-logo h-[84px] w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
        />

        <h1 className="hundred-days-glow mt-6 max-w-[1180px] text-[58px] leading-[1.06] font-black tracking-[-0.03em]">
          <span className="text-[#f2b94b]">Үндэсний санаачилгын</span>
          <br />
          замын зураглал
        </h1>

        <div className="mt-9 flex items-center gap-5 animate-[slide9Rise_0.9s_cubic-bezier(.22,1,.36,1)_0.12s_both]">
          {pillars.map((pillar, index) => (
            <div key={pillar} className="flex items-center gap-5">
              <span className="rounded-full border border-white/16 bg-[#06163d]/30 px-7 py-3 text-[20px] font-black uppercase tracking-[0.1em] text-white/92">
                {pillar}
              </span>
              {index < pillars.length - 1 && (
                <span className="text-[26px] font-black text-[#2ec5ff]">+</span>
              )}
            </div>
          ))}
        </div>

        <LiquidGlass
          radius={28}
          className="mt-12 max-w-[1020px] overflow-hidden border border-white/10 px-12 py-9 animate-[slide9Rise_0.95s_cubic-bezier(.22,1,.36,1)_0.22s_both]"
          style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.22)' }}
        >
          <p className="text-[28px] italic leading-[1.46] text-white" style={{ fontFamily: 'Lora, serif', fontWeight: 500 }}>
            “Улс орны тусгаар тогтнолоо эдийн засгийн эрх чөлөөгөөр гагнах нь та бидний бүгдийн эрхэм дээд зорилго юм.”
          </p>
          <p className="mt-6 text-[16px] font-bold uppercase tracking-[0.16em] text-white/55">
            Монгол Улсын Ерөнхий сайд Ням-Осорын УЧРАЛ
          </p>
        </LiquidGlass>
      </main>

      <style>{`
        @keyframes slide9Rise {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
