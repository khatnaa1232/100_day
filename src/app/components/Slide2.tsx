import profileImg from '../../imports/profile.png';
import { LiquidGlass } from './LiquidGlass';

export function Slide2() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-[10%] h-[220px] w-[420px] rounded-full bg-[#f2b94b]/12 blur-[120px]" />
        <div className="absolute right-[8%] top-[8%] h-[280px] w-[420px] rounded-full bg-[#2ec5ff]/12 blur-[140px]" />
        <div className="absolute bottom-[6%] left-[34%] h-[240px] w-[520px] rounded-full bg-[#5b6cff]/12 blur-[150px]" />
      </div>

      <div className="absolute inset-x-28 top-[150px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute inset-x-28 bottom-[122px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <main className="relative z-10 grid h-full grid-cols-[0.94fr_1.06fr] items-center gap-12 px-20 pt-[86px] pb-[72px]">
        <div className="flex items-center justify-center animate-[slide2Rise_0.82s_cubic-bezier(.22,1,.36,1)_both]">
          <img
            src={profileImg}
            alt="Ням-Осорын УЧРАЛ"
            className="max-h-[760px] w-full max-w-[760px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
          />
        </div>

        <LiquidGlass
          radius={34}
          className="mt-[100px] overflow-hidden border border-white/10 px-10 py-10 animate-[slide2Rise_0.88s_cubic-bezier(.22,1,.36,1)_0.08s_both]"
          style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}
        >
          <p className="text-[35px] italic leading-[1.46] text-white" style={{ fontFamily: 'Lora, serif', fontWeight: 500 }}>
            Иргэндээ, хувийн хэвшилдээ, хөрөнгө оруулагчдадаа, хөдөлмөрлөж бүтээдэг хүн бүрийн хүсэл эрмэлзэл, эрх чөлөөнд нь итгэн, хөгжлийг тушсан чөдрийг тайлах нь “Чөлөөлье” санаачилгын эш үндэс, эрхэм зорилго юм.
          </p>

          <div className="mt-10 border-t border-white/12 pt-6">
            <p className="text-[18px] font-bold tracking-[0.14em] text-white/58 uppercase">
              Монгол Улсын Ерөнхий сайд
            </p>
            <p className="mt-2 text-[32px] leading-[1.08] font-black tracking-[-0.03em] text-white">
              Ням-Осорын УЧРАЛ
            </p>
          </div>
        </LiquidGlass>
      </main>

      <style>{`
        @keyframes slide2Rise {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
