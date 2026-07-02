import { type ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import backgroundImg from '../../imports/back_copy.jpg';
import '../../styles/slide13b.css';

const pensionRows = [
  { group: 'Хувь тэнцүүлсэн тэтгэврийн доод хэмжээ', amount: '652,400', count: 258, increase: 68215 },
  { group: 'Бүрэн тэтгэврийн доод хэмжээ', amount: '769,000', count: 4156, increase: 66758 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '652,401-799,999', count: 4552, increase: 60255 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '800,000-999,999', count: 36656, increase: 91153 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '1,000,000-1,199,999', count: 38384, increase: 184785 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '1,200,000-1,399,999', count: 26341, increase: 287493 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '1,400,000-1,599,999', count: 14603, increase: 310698 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '1,600,000-1,799,999', count: 8075, increase: 303688 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '1,800,000-1,999,999', count: 4085, increase: 247828 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '2,000,000-2,199,999', count: 2010, increase: 166293 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '2,200,000-2,399,999', count: 1054, increase: 124871 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '2,400,000-2,599,999', count: 455, increase: 83318 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '2,600,000-2,799,999', count: 244, increase: 81485 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '2,800,000-3,000,000', count: 85, increase: 64730 },
  { group: 'Тэтгэврийн доод хэмжээнээс дээш', amount: '>3,000,000', count: 69, increase: 84599 },
];

const budgetRows = [
  { label: 'Жилд зарцуулах хөрөнгө', value: 325.4 },
  { label: '2026.10.01-ээс нэмэгдүүлбэл', value: 81.3 },
];

const insightTexts: ReactNode[] = [
  <>2013 оноос өмнөх тэтгэвэр бодох цалингийн дээд хязгаар <strong className="s13b-num-highlight">1.4 сая ₮</strong> байгааг <strong className="s13b-num-highlight">2.4 сая ₮</strong> болгох.</>,
  'Өндөр цалин хөлснөөс олон жил шимтгэл төлсөн тэтгэвэр авагчид илүү нэмэгдэл очно.',
  'Бүх тэтгэврийг 1 дүгээр сарын 1-нээс автоматаар индексжүүлнэ.',
];

const maxIncrease = 310698;

function fmt(value: number) {
  return value.toLocaleString('en-US');
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

export function Slide21() {
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
    <div className="s13b-slide size-full relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImg} alt="" className="size-full object-cover" />
      </div>

      <div className="s13b-layout relative size-full px-12 py-8">
        <section className="s13b-hero">
          <div className="s13b-kicker">ИТГЭЛЦҮҮР</div>
          <h1>
            Цалингийн дээд
            <span>хязгаар</span>
          </h1>
          <div className="s13b-count-card">
            <span>хамрагдах хүн</span>
            <strong><AnimatedNumber value={141027} /></strong>
            <em>Хүний тэтгэвэр нэмэгдэнэ</em>
          </div>
          <div className="s13b-count-card s13b-count-card-gold">
            <span>дундаж нэмэгдэл</span>
            <strong><AnimatedNumber value={192254} suffix=" ₮" /></strong>
          </div>
        </section>

        <section className="s13b-graphic">
          <div className="s13b-summary-card">
            <div className="s13b-summary-copy">
              <h2>2.4 саяас бодох</h2>
            </div>

            <div className="s13b-main-points">
              {insightTexts.slice(0, 4).map((text, index) => (
                <article key={index}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <button className="s13b-table-button" type="button" onClick={() => setIsTableOpen(true)}>
              Хүснэгт харах
              <span>→</span>
            </button>
          </div>

          <div className="s13b-budget-card">
            <div className="s13b-budget-title">Нэмж шаардагдах төсөв /тэрбум төгрөг/</div>
            <div className="s13b-budget-grid">
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
            className="s13b-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsTableOpen(false)}
          >
            <motion.div
              className="s13b-modal-panel"
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="s13b-modal-header">
                <div>
                  <span>Дэлгэрэнгүй хүснэгт</span>
                  <h2>Тэтгэвэр 2.4 саяас бодоход хэдээр нэмэгдэх вэ?</h2>
                </div>
                <button type="button" onClick={() => setIsTableOpen(false)} aria-label="Хаах">×</button>
              </div>

              <div className="s13b-table-card s13b-table-card-modal">
                <div className="s13b-table-head">
                  <span>Доод хэмжээ</span>
                  <span>Тэтгэврийн хэмжээ</span>
                  <span>Тоо</span>
                  <span>Дундаж нэмэгдэл</span>
                </div>

                <div className="s13b-table-body">
                  {pensionRows.map((row, index) => (
                    <motion.div
                      key={`${row.amount}-${row.count}`}
                      className="s13b-table-row"
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035, duration: 0.28 }}
                    >
                      <span className={index < 2 ? 's13b-row-gold' : ''}>{row.group}</span>
                      <strong>{row.amount}</strong>
                      <em><AnimatedNumber value={row.count} duration={900 + index * 35} /></em>
                      <div className="s13b-increase">
                        <motion.i
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.max(8, (row.increase / maxIncrease) * 100)}%` }}
                          transition={{ delay: 0.12 + index * 0.035, duration: 0.62, ease: 'easeOut' }}
                        />
                        <b><AnimatedNumber value={row.increase} duration={950 + index * 35} /></b>
                      </div>
                    </motion.div>
                  ))}
                  <div className="s13b-table-total">
                    <span>Бүгд</span>
                    <strong />
                    <em><AnimatedNumber value={141027} /></em>
                    <b><AnimatedNumber value={192254} /></b>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
