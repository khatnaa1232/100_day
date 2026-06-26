import slide3Img from '../../imports/slide_3.png';

const issues = [
  'Авлигын хөрс болсон хүнд суртал',
  'Зөвшөөрөл нэртэй хориглолтын хана хэрэм',
  'Данхар төрийн зах зээл дэх хэт оролцоо',
  'Эрчим хүчний хомсдол',
  'Шударга бус тэтгэврийн тогтолцоо, эзнээ олдоггүй халамж',
];

export function Slide3() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-[10%] left-[2%] h-[180px] w-[46%] rounded-full bg-[#f0b24e]/16 blur-[90px]" />
        <div className="absolute -top-[8%] right-[10%] h-[260px] w-[32%] rounded-full bg-[#5546ff]/24 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[-5%] h-[44%] w-[18%] rounded-full bg-[#88b8ff]/24 blur-[120px]" />
        <div className="absolute left-[66%] top-[44%] h-[220px] w-[460px] -translate-x-1/2 rounded-full bg-[#1f63ff]/10 blur-[110px]" />
      </div>

      <div className="absolute inset-x-28 top-[150px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute inset-x-28 bottom-[122px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <main className="relative z-10 mt-[56px] grid w-full max-w-[1720px] grid-cols-[0.95fr_1.05fr] items-center gap-14 px-20 animate-[fadeUp_0.9s_ease-out_both]">
        <div className="flex items-center justify-start">
          <img
            src={slide3Img}
            alt="100 өдрийн өмнөх нөхцөл байдал"
            className="max-h-[760px] w-full max-w-[760px] object-contain"
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <p className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 text-[13px] font-black uppercase tracking-[0.24em] text-[#f59e0b]">
            100 Өдрийн Өмнө
          </p>

          <h1 className="mt-6 max-w-[860px] text-[62px] leading-[0.98] font-black tracking-[-0.05em] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.38)]">
            100 ӨДРИЙН ӨМНӨ:
            <br />
            ХҮСЛИЙГ ХЯССАН,
            <br />
            ХӨГЖЛИЙГ ТУШСАН ТҮГЖЭЭ
          </h1>

          <div className="mt-8 flex max-w-[780px] flex-col gap-4">
            {issues.map((issue, index) => (
              <div
                key={issue}
                className="flex items-start gap-4 rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm animate-[fadeUp_0.7s_ease-out_both]"
                style={{ animationDelay: `${0.16 + index * 0.08}s` }}
              >
                <span className="mt-[5px] h-3 w-3 flex-shrink-0 rounded-full bg-[#f59e0b] shadow-[0_0_14px_rgba(245,158,11,0.55)]" />
                <p className="text-[25px] leading-[1.16] font-black text-white/92">
                  {issue}
                </p>
              </div>
            ))}
          </div>
        </div>
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
