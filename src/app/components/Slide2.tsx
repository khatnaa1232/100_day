import slide2Img from '../../imports/slide_2.png';

export function Slide2() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[12%] top-[12%] h-[220px] w-[340px] rounded-full bg-[#f2b94b]/12 blur-[120px]" />
        <div className="absolute right-[10%] top-[10%] h-[260px] w-[420px] rounded-full bg-[#2ec5ff]/12 blur-[130px]" />
        <div className="absolute left-1/2 top-[35%] h-[360px] w-[1180px] -translate-x-1/2 rounded-full bg-white/8 blur-[140px]" />
        <div className="absolute bottom-[8%] left-1/2 h-[180px] w-[1320px] -translate-x-1/2 rounded-full bg-[#7aa2ff]/8 blur-[150px]" />
      </div>

      <div className="relative z-10 flex h-full flex-col px-12 pt-8 pb-10">
        <section className="relative flex h-[735px] items-center justify-center animate-[slide2Fade_0.85s_ease-out_both]">
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[1240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_68%)] blur-[70px]" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/12 shadow-[0_38px_90px_rgba(0,0,0,0.34)] animate-[slide2Hero_0.95s_cubic-bezier(.22,1,.36,1)_0.08s_both]">
            <img
              src={slide2Img}
              alt="Чөлөөлье санаачилгын эвлүүлэг"
              className="max-h-[735px] w-auto max-w-[1500px] object-contain"
              style={{ filter: 'brightness(1.04) saturate(1.03) contrast(1.02)', transform: 'translateZ(0)' }}
            />
          </div>
        </section>

        <section className="mt-5 flex justify-center">
          <div className="relative w-full max-w-[1420px] overflow-hidden rounded-[32px] border border-white/14 bg-[linear-gradient(180deg,rgba(14,28,84,0.48),rgba(9,19,63,0.58))] px-16 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-[18px] animate-[slide2Quote_0.85s_ease-out_0.18s_both]">
            <div className="absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
            <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-[#f2b94b]/8 blur-[18px]" />
            <div className="absolute right-10 bottom-8 h-20 w-20 rounded-full bg-[#2ec5ff]/10 blur-[18px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <p className="max-w-[1260px] text-[29px] leading-[1.38] font-black tracking-[-0.03em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.3)]">
                Иргэндээ, хувийн хэвшилдээ, хөрөнгө оруулагчдадаа, хөдөлмөрлөж бүтээдэг хүн бүрийн хүсэл эрмэлзэл, эрх чөлөөнд нь итгэн, хөгжлийг тушсан чөдрийг тайлах нь “Чөлөөлье” санаачилгын эш үндэс, эрхэм зорилго юм.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#f2b94b]/80" />
                <p className="text-[20px] font-black tracking-[0.08em] text-white/74 uppercase">
                  Монгол Улсын Ерөнхий сайд Ням-Осорын УЧРАЛ
                </p>
                <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#2ec5ff]/80" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes slide2Fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide2Hero {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.965);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide2Quote {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
