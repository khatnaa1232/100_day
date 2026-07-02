import unlockImg from '../../imports/unlock.png';
import slide1Img from '../../imports/slide_1.png';
import chuluulyImg from '../../imports/chuluuly.png';

export function Slide1() {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute -top-[13%] left-[4%] h-[180px] w-[58%] rounded-full bg-[#f0b24e]/18 blur-[90px]" />
        <div className="absolute -top-[10%] right-[7%] h-[280px] w-[34%] rounded-full bg-[#5546ff]/26 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[-6%] h-[52%] w-[20%] rounded-full bg-[#88b8ff]/32 blur-[120px]" />
      </div>

      {/* Top-left: unlock mark */}
      <img
        src={unlockImg}
        alt="unlock"
        className="absolute left-12 top-10 z-30 h-[60px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
      />

      {/* Top-right: corner logo — matches every other slide */}
      <img
        src={chuluulyImg}
        alt="Чөлүүлье"
        className="absolute right-10 top-8 z-30 h-14 max-w-[320px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      />

      <main className="relative z-10 grid w-full max-w-[1720px] grid-cols-[0.98fr_1.02fr] items-center gap-14 px-20 animate-[fadeUp_0.9s_ease-out_both]">
        <div className="flex items-center justify-center">
          <img
            src={slide1Img}
            alt="100 өдөр 100 чөлөөлөлт"
            className="max-h-[760px] w-full max-w-[780px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <h1 className="hundred-days-glow max-w-[820px] text-[92px] leading-[0.94] font-black tracking-[-0.05em] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.38)]">
            <span>100 ЧӨЛӨӨЛӨЛТ</span>
            <br />
            <span>100 ӨДӨР</span>
          </h1>

          <p className="mt-9 max-w-[720px] text-[34px] leading-[1.16] font-black tracking-[-0.03em] text-white/92 animate-[fadeUp_0.9s_ease-out_0.3s_both]">
            Чөлөөлөлтийн гарааны 100 өдрийн үр дүн
          </p>
        </div>
      </main>
    </div>
  );
}
