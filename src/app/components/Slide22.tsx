import backgroundImg from '../../imports/back_copy.jpg';
import slideImgA from '../../imports/Slide_6a.png';
import slideImgB from '../../imports/Slide_6b.png';
import slideImgC from '../../imports/Slide_6c.png';
import '../../styles/slide07.css';

const slideImages = [
  { src: slideImgA, alt: 'Тэтгэврийн шинэчлэл 1' },
  { src: slideImgB, alt: 'Тэтгэврийн шинэчлэл 2' },
  { src: slideImgC, alt: 'Тэтгэврийн шинэчлэл 3' },
];

const cards = [
  {
    variant: 's07-card-teal',
    animCls: 's07-c1',
    label: 'ХҮНИЙ КАПИТАЛ',
    stat: '+',
    metric: 'өсөлт',
    meter: '42%',
    text: 'Олуулаа болох бодлого:',
    sub: 'Хүн нэмбэл хүнс нэмнэ',
  },
  {
    variant: 's07-card-gold',
    animCls: 's07-c2',
    label: 'ЖИЛ БҮР НЭМ',
    stat: '+4%',
    metric: 'жил бүр',
    meter: '62%',
    text: 'Тэтгэврийн наснаас хойш тэтгэврээ тогтоолговол',
    sub: 'жил бүр 4% нэмэгдэнэ',
  },
  {
    variant: 's07-card-gold',
    animCls: 's07-c3',
    label: 'тэтгэвэр нэмэгдэх хувь',
    stat: '+12%',
    metric: 'нэмэгдэл',
    meter: '82%',
    text: 'Эмэгтэй даатгуулагч 57-тайдаа биш 60-тайдаа тэтгэвэрт гарвал',
    sub: '12% нэмэгдэнэ',
  },
  {
    variant: 's07-card-teal',
    animCls: 's07-c4',
    label: 'ХАМРАЛТ ИХ',
    stat: '+',
    metric: 'тэнцэл',
    meter: '54%',
    text: 'Даатгуулагч олонтой бол',
    sub: 'алдагдал багатай',
  },
];

export function Slide22() {
  return (
    <div className="size-full relative overflow-hidden bg-slate-950">

      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img src={backgroundImg} alt="" className="size-full object-cover" />
      </div>

      {/* ── Main layout ── */}
      <div className="s07-layout relative size-full flex items-center gap-10 px-12 py-8">

        {/* ── Left: image ── */}
        <div className="s07-image-col">
          <div className="s07-image-wrap">
            {slideImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`s07-flow-image s07-flow-image-${index + 1}`}
              />
            ))}
            <div className="s07-img-sheen" />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="s07-right flex-1 min-w-0">

          {/* Sub-label */}
          <div className="s07-sublabel">
            <span className="s07-sublabel-dot" />
            Шинэчлэл, шийдэл: Хүний хөдөлмөрийн шударга үнэлгээ. II дахь давхарга
          </div>

          {/* Main title */}
          <h1 className="s07-title">
            Илүү олон жил төлбөл<br />
            <span className="s07-title-green">илүү өндөр тэтгэвэртэй</span>
          </h1>

          <div className="s07-hero-card">
            <div className="s07-hero-copy">
              <span>Гол зарчим</span>
              <strong>ТӨЛСӨН ШИМТГЭЛИЙН ХЭМЖЭЭ, ХУГАЦААНААС ХАМААРЧ ТЭТГЭВРИЙГ ТОГТООНО</strong>
            </div>
            <div className="s07-hero-pill">шударга урамшуулал</div>
          </div>

          <div className="s07-benefit-strip">
            <div>
              <span>Нэг жил хойшлуулбал</span>
              <strong>+4%</strong>
            </div>
            <div>
              <span>57 биш 60 настайд</span>
              <strong>+12%</strong>
            </div>
            <div>
              <span>Даатгуулагч олон бол</span>
              <strong>НДШ орлого нэмэгдэнэ</strong>
            </div>
          </div>

          {/* 2×2 cards */}
          <div className="s07-grid">
            {cards.map((c) => (
              <div key={c.label} className={`s07-card ${c.variant} ${c.animCls}`}>
                <div className="s07-card-stat">
                  <strong>{c.stat}</strong>
                  <span>{c.metric}</span>
                </div>
                <div className="s07-card-body">
                  <span className="s07-card-label">{c.label}</span>
                  <div className="s07-card-text">{c.text}</div>
                  <div className="s07-card-sub">{c.sub}</div>
                  <div className="s07-meter" aria-hidden="true">
                    <span style={{ width: c.meter }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
