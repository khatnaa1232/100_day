import { Fragment, type CSSProperties, type ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import backgroundImg from '../../imports/back_copy.jpg';
import '../../styles/slide13.css';

const pensionAmounts = [
  652400,
  769000,
  1000000,
  1200000,
  1400000,
  1600000,
  1800000,
  2000000,
  2200000,
  2400000,
  2600000,
  2800000,
  3000000,
  3200000,
  3400000,
  3600000,
  3800000,
  4000000,
  4200000,
  4400000,
  4600000,
  4800000,
  5000000,
];

const workedYears = [10, 15, 20, 25, 30, 35, 40, 45];

const budgetRows = [
  { label: 'Жилд зарцуулах хөрөнгө', value: 1237.3 },
];

const insightTexts: ReactNode[] = [
  'Тэтгэвэрийн хэмжээнээс хамааруулан ахмад настанд олгох нийгмийн хамгааллын сууль баталгаа болно.',
  'Олон жил шимтгэл төлсөн ч бага цалинтай, бусдыг асарч, цөөн жил ажилласан иргэдэд нэмэлт баталгаа болно.',
  'Хувиараа хөдөлмөр эрхлэгч, бичил бизнес эрхлэгч, албан бус салбарт ажиллагчдад нэмэлт баталгаа санал болгосноор олон жил шимтгэл төлөхийг урамшуулна.',
  'Баталгаат тэтгэврийн хэмжээ үндсэн тэтгэврээс хамаарах боловч ахмад настан бүр сар болгон 100,000₮ авна.',
];

function fmt(value: number) {
  return value.toLocaleString('en-US');
}

function getGuaranteeAmount(pension: number, years: number) {
  const rawAmount = 190000 - pension * 0.05 + (years - 10) * 5000;
  return Math.min(300000, Math.max(100000, Math.round(rawAmount)));
}

function getHeatStyle(value: number) {
  const ratio = (value - 100000) / 200000;
  const stops = [
    [13, 25, 73],
    [32, 53, 126],
    [30, 100, 167],
    [12, 137, 129],
    [7, 172, 89],
    [26, 198, 104],
  ];
  const clampedRatio = Math.pow(Math.max(0, Math.min(1, ratio)), 0.72);
  const scaled = clampedRatio * (stops.length - 1);
  const index = Math.min(stops.length - 2, Math.floor(scaled));
  const progress = scaled - index;
  const color = stops[index].map((channel, channelIndex) =>
    Math.round(channel + (stops[index + 1][channelIndex] - channel) * progress)
  );
  const glow = 0.1 + clampedRatio * 0.34;
  return {
    '--heat-bg': `rgb(${color.join(', ')})`,
    '--heat-border': `rgba(${color.join(', ')}, 0.76)`,
    '--heat-glow': `rgba(${color.join(', ')}, ${glow.toFixed(2)})`,
  } as CSSProperties;
}

function AnimatedNumber({
  value,
  decimals = 0,
  suffix = '',
  duration = 1200,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const startedAt = performance.now();
    const animate = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    setDisplayValue(0);
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [duration, value]);

  return (
    <>
      {displayValue.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
}

export function Slide20() {
  const [isTableOpen, setIsTableOpen] = useState(false);

  useEffect(() => {
    if (!isTableOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTableOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isTableOpen]);

  return (
    <div className="s13-slide size-full relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImg} alt="" className="size-full object-cover" />
      </div>

      <div className="s13-layout relative size-full px-12 py-8">
        <section className="s13-hero">
          <div className="s13-kicker">I дэх давхарга</div>
          <h1>
            Баталгаат тэтгэвэр:
            <span>Шинэ баталгаа</span>
          </h1>
          <div className="s13-count-card">
            <span>Тэтгэвэр авагчийн тоо</span>
            <strong><AnimatedNumber value={504000} /></strong>
            <em>Баталгаат тэтгэвэр авна</em>
          </div>
          <div className="s13-count-card s13-count-card-gold">
            <span>дундаж нэмэгдэл</span>
            <strong><AnimatedNumber value={215393} suffix=" ₮" /></strong>
            <em>хамгийн багадаа 100,000 төгрөгөөр нэмэгдэнэ</em>
          </div>
        </section>

        <section className="s13-graphic">
          <div className="s13-summary-card">
            <div className="s13-summary-copy">
              <h2>100.0-300.0 мянган төгрөг</h2>
              <p>Бага орлоготой тэтгэвэр авагчийг ядууралд өртөхөөс сэргийлэх зорилготой орлогоос хамаарсан баталгаат тэтгэвэр</p>
            </div>

            <div className="s13-main-points">
              {insightTexts.slice(0, 4).map((text, index) => (
                <article key={index}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            {/* <button className="s13-table-button" type="button" onClick={() => setIsTableOpen(true)}>
              Хүснэгт харах
              <span>→</span>
            </button> */}

            <div className="s13-standard">
              <span>жишиг загвар</span>
              <strong>Швед · Канад · Австрали</strong>
            </div>
          </div>

          <div className="s13-budget-card">
            <div className="s13-budget-title">Нэмж шаардагдах төсөв /тэрбум төгрөг/</div>
            <div className="s13-budget-grid">
              {budgetRows.map((row) => (
                <article key={row.label}>
                  <span>{row.label}</span>
                  <strong><AnimatedNumber value={row.value} decimals={1} /></strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {isTableOpen && (
          <motion.div
            className="s13-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsTableOpen(false)}
          >
            <motion.div
              className="s13-modal-panel"
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="s13-modal-header">
                <div>
                  <span>Дэлгэрэнгүй хүснэгт</span>
                  <h2>БАТАЛГААТ ТЭТГЭВРИЙН ХЭМЖЭЭ</h2>
                </div>
                <button type="button" onClick={() => setIsTableOpen(false)} aria-label="Хаах">×</button>
              </div>

              <div className="s13-heatmap-card">
                <div className="s13-heatmap-titlebar">
                  <div className="s13-axis-corner">
                    <span>Тэтгэврийн хэмжээ</span>
                  </div>
                  <div className="s13-years-title">Шимтгэл төлж ажилласан жил</div>
                </div>

                <div
                  className="s13-heatmap-grid"
                  style={{ '--s13-rows': pensionAmounts.length } as CSSProperties}
                >
                  <div className="s13-heatmap-year-head s13-heatmap-year-spacer" />
                  {workedYears.map((year) => (
                    <div className="s13-heatmap-year-head" key={year}>
                      {year}
                    </div>
                  ))}

                  {pensionAmounts.map((pension, rowIndex) => (
                    <Fragment key={pension}>
                      <div className="s13-heatmap-pension">{fmt(pension)}</div>
                      {workedYears.map((year, colIndex) => {
                        const value = getGuaranteeAmount(pension, year);
                        return (
                          <motion.div
                            key={`${pension}-${year}`}
                            className="s13-heatmap-cell"
                            style={getHeatStyle(value)}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.015 * rowIndex + 0.018 * colIndex, duration: 0.2 }}
                          >
                            {fmt(value)}
                          </motion.div>
                        );
                      })}
                    </Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
