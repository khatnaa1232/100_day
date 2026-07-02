import { CalendarDays } from 'lucide-react';
import slide3WallImg from '../../imports/slide3wall.png';
import unlockedImg from '../../imports/unlocked.png';

const points = ['АСУУДАЛ - ШИЙДЭЛ - БОДИТ ҮР ДҮН', 'Дуусдаггүй яриаг дуусгах алхмууд'];

const ACCENT = '#f59e0b';
// Эрчим хүчийг, Бусад Шаардлага болгох, тохирол - > бүртгэл
// нүдээ олдоггүй халамж - > КОММИС
// ШУДАРГА БУС ТЭТГЭВЭР - > МАГАДЛАГАА
// 


// Highlighted milestone date — 100 days before the mark.
const TARGET = { year: 2026, month: 2, day: 30 }; // month is 0-based → March
const MONTH_LABEL = 'Гуравдугаар сар';
const WEEKDAYS = ['Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя', 'Ня'];

// Build the month grid as Monday-first weeks (null = padding cell).
function buildMonthWeeks(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (new Date(year, month, 1).getDay() + 6) % 7; // Mon-first offset
  const cells: (number | null)[] = Array.from({ length: startOffset }, () => null);
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

const monthWeeks = buildMonthWeeks(TARGET.year, TARGET.month);

export function Slide3() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-[10%] left-[2%] h-[180px] w-[46%] rounded-full bg-[#f0b24e]/14 blur-[100px]" />
        <div className="absolute -top-[8%] right-[10%] h-[260px] w-[32%] rounded-full bg-[#5546ff]/20 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[-5%] h-[44%] w-[18%] rounded-full bg-[#88b8ff]/20 blur-[120px]" />
      </div>

      <div className="absolute inset-x-28 top-[150px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute inset-x-28 bottom-[122px] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <main className="relative z-10 grid w-full max-w-[1860px] grid-cols-[1.32fr_0.78fr] items-center gap-12 px-10 animate-[slide3Fade_0.9s_ease-out_both]">
        <div className="overflow-hidden rounded-[30px]">
          <img
            src={slide3WallImg}
            alt="Хүнд суртлын хана: иргэдийн өмнө тулгарсан саадууд"
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="flex flex-col items-start text-left">
          <p className="rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 text-[13px] font-black uppercase tracking-[0.24em] text-[#f59e0b]">
            100 Өдрийн Өмнө
          </p>

          {/* ── 2026.03.30 календарь ── */}
          <div
            className="mt-4 w-full max-w-[198px] rounded-[13px] border border-white/12 bg-[#0a1c3d]/55 p-2.5 animate-[slide3Cal_0.7s_ease-out_0.18s_both]"
            style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.28)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span
                  className="grid h-6 w-6 place-items-center rounded-[7px] border"
                  style={{ color: ACCENT, borderColor: `${ACCENT}66`, background: `${ACCENT}18` }}
                >
                  <CalendarDays className="h-3 w-3" strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-[10px] leading-none font-black text-white">{MONTH_LABEL}</p>
                  <p className="mt-0.5 text-[8px] font-black uppercase tracking-[0.14em] text-white/50">
                    {TARGET.year} он
                  </p>
                </div>
              </div>
              <p className="text-[17px] leading-none font-black tabular-nums" style={{ color: ACCENT }}>
                {String(TARGET.day).padStart(2, '0')}
              </p>
            </div>

            <div className="mt-2 grid grid-cols-7 gap-px">
              {WEEKDAYS.map((wd) => (
                <span
                  key={wd}
                  className="grid h-3.5 place-items-center text-[8px] font-black uppercase text-white/42"
                >
                  {wd}
                </span>
              ))}

              {monthWeeks.flat().map((day, index) => {
                if (day === null) return <span key={`pad-${index}`} className="h-5" />;
                const isTarget = day === TARGET.day;
                return (
                  <span
                    key={day}
                    className={`relative grid h-5 place-items-center rounded-full text-[10px] font-black tabular-nums ${isTarget ? 'text-[#0a1426]' : 'text-white/80'
                      }`}
                    style={isTarget ? { background: ACCENT, boxShadow: `0 0 14px ${ACCENT}88` } : undefined}
                  >
                    {isTarget && (
                      <span
                        className="absolute inset-0 rounded-full animate-[slide3CalPulse_2.4s_ease-out_infinite]"
                        style={{ border: `2px solid ${ACCENT}` }}
                      />
                    )}
                    {day}
                  </span>
                );
              })}
            </div>
          </div>

          <h1 className="hundred-days-glow mt-7 max-w-[640px] text-[60px] leading-[0.98] font-black tracking-[-0.04em] text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.38)]">
            ХҮСЛИЙГ ХЯССАН ТҮГЖЭЭ
          </h1>

          <div className="mt-8 flex flex-col gap-5">
            {points.map((point, index) => (
              <div
                key={point}
                className="flex items-center gap-4 animate-[slide3Fade_0.7s_ease-out_both]"
                style={{ animationDelay: `${0.34 + index * 0.12}s` }}
              >
                <img src={unlockedImg} alt="" aria-hidden="true" className="h-9 w-9 flex-shrink-0 object-contain" />
                <p className="text-[28px] leading-[1.2] font-black text-white/92">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes slide3Fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide3Cal {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slide3CalPulse {
          0% { transform: scale(1); opacity: 0.9; }
          70% { transform: scale(1.45); opacity: 0; }
          100% { transform: scale(1.45); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
