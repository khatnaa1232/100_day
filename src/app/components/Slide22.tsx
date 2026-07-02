import chuluulyImg from '../../imports/chuluuly.png';

export function Slide22() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 w-[920px] h-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute left-[20%] top-[24%] w-[340px] h-[340px] rounded-full bg-chart-3/10 blur-[90px]" />
        <div className="absolute right-[18%] bottom-[20%] w-[380px] h-[380px] rounded-full bg-chart-2/10 blur-[100px]" />
      </div>

      <div className="absolute inset-x-28 top-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-28 bottom-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <main className="relative z-10 w-full h-full animate-[fadeUp_0.9s_ease-out_both]">
        <img
          src={chuluulyImg}
          alt="Чөлөөлье"
          className="slide17-center-logo absolute left-1/2 top-[298px] h-[100px] -translate-x-1/2 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
        />
        <h1 className="absolute inset-x-0 top-[430px] text-center text-[92px] leading-[1.08] font-black tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          АНХААРАЛ ХАНДУУЛСАНД
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-chart-3 via-primary to-chart-2 drop-shadow-[0_0_35px_rgba(46,197,255,0.35)]">
            БАЯРЛАЛАА
          </span>
        </h1>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
