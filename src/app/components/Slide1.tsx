import unlockImg from '../../imports/unlock.png';
import chuluulyImg from '../../imports/chuluuly.png';
import slide1Bg from '../../imports/slide_1.png';

export function Slide1() {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute -top-[13%] left-[4%] h-[180px] w-[58%] rounded-full bg-[#f0b24e]/18 blur-[90px]" />
        <div className="absolute -top-[10%] right-[7%] h-[280px] w-[34%] rounded-full bg-[#5546ff]/26 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[-6%] h-[52%] w-[20%] rounded-full bg-[#88b8ff]/32 blur-[120px]" />
        <div className="absolute left-[66%] top-[44%] h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-[#1f63ff]/10 blur-[110px]" />
      </div>

      <div className="absolute inset-x-28 top-[150px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute inset-x-28 bottom-[122px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <main className="relative z-10 mt-[60px] grid w-full max-w-[1720px] grid-cols-[0.95fr_1.05fr] items-center gap-14 px-20 animate-[fadeUp_0.9s_ease-out_both]">
        <div className="flex items-center justify-start">
          <img
            src={slide1Bg}
            alt="Чөлөөлөлтийн 100 өдөр"
            className="max-h-[760px] w-full max-w-[760px] object-contain"
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <img
            src={chuluulyImg}
            alt="Чөлүүлье"
            className="h-[84px] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
          />

          <h1
            className="mt-8 max-w-[820px] text-[88px] leading-[0.98] font-black tracking-[-0.05em] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.38)]"
            style={{ animation: 'blueGlow 2.5s ease-in-out infinite' }}
          >
            <span>
              ЧӨЛӨӨЛӨЛТИЙН ГАРАА:
            </span>
            <br />
            <span>100 ӨДӨРТ</span>
          </h1>

          <div className="mt-12 flex flex-col items-start animate-[fadeUp_0.9s_ease-out_0.3s_both]">
            <img
              src={unlockImg}
              alt="unlock"
              className="h-[72px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
            />
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blueGlow {
          0%, 100% { text-shadow: 0 0 18px rgba(46,197,255,0.35); }
          50% { text-shadow: 0 0 42px rgba(46,197,255,0.85), 0 0 80px rgba(46,197,255,0.3); }
        }
      `}</style>
    </div>
  );
}
