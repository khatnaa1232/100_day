import { Banknote, ChartNoAxesCombined, Puzzle } from 'lucide-react';
import coupleImg from '../../imports/Slide_17b.png';
import '../../styles/slide18b.css';

const layers = [
  {
    icon: Banknote,
    title: 'Баталгаат тэтгэвэр',
    text: 'Тэтгэврийн насанд хүрсэн, 10-аас доошгүй жил эсхүл хөдөлмөрийн чадвар алдсаны тэтгэвэр авагч болгон авна.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Тэтгэврийн даатгалын сангаас авах тэтгэвэр',
    text: 'Одоогийн тэтгэврийн тогтолцоог сайжруулж, хагас хуримтлалд сонголттой, үе шаттайгаар шилжинэ.',
  },
  {
    icon: Puzzle,
    title: 'Хувийн нэмэлт тэтгэвэр',
    text: 'Ажил олгогчийн дэмжлэгтэй сайн дурын нэмэлт даатгалын тогтолцоог нэвтрүүлнэ.',
  },
];

export function Slide23() {
  return (
    <div className="s18b-slide size-full relative overflow-hidden">
      <main className="s18b-layout relative size-full">
        <header className="s18b-header">
          <div className="s18b-kicker">ОЛОН ДАВХАРГАТ ТОГТОЛЦОО</div>
          <h1>ОЛОН ДАВХАРГАТ ТЭТГЭВРИЙН ТОГТОЛЦОО</h1>
          <div className="s18b-metric-strip" aria-label="Тогтолцооны үндсэн бүтэц">
            <h2>
              <strong>3</strong>
              <span>давхарга</span>
            </h2>
            <h2>
              <strong>3</strong>
              <span>эх үүсвэр</span>
            </h2>
            <h2>
              <strong>3</strong>
              <span>тулгуур</span>
            </h2>
          </div>
        </header>

        <section className="s18b-stage">
          <div className="s18b-layer-grid">
            {layers.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="s18b-layer-card" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="s18b-layer-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="s18b-layer-copy">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
            <div className="s18b-visual-note">
              <strong>3 давхар баталгаа</strong>
              <span>Баталгаат тэтгэвэр · Тэтгэврийн даатгалын тэтгэвэр · Хувийн нэмэлт тэтгэвэр</span>
            </div>
          </div>

          <aside className="s18b-visual-panel" aria-label="Ахмад настны гэрэл зураг">
            <div className="s18b-photo-card">
              <img src={coupleImg} alt="Инээмсэглэж буй ахмад хос" />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
