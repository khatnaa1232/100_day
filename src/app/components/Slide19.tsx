import {
  BadgeCheck,
  BriefcaseBusiness,
  FlameKindling,
  Handshake,
  MessagesSquare,
  TrendingUp,
} from 'lucide-react';
import backgroundImg from '../../imports/back_copy.jpg';
import '../../styles/slide9b.css';

const reformCards = [
  {
    tone: 'violet',
    icon: BadgeCheck,
    title: 'Баталгаат тэтгэвэр',
    text: 'Баталгаат суурь тэтгэвэр нэвтрүүлнэ.',
  },
  {
    tone: 'blue',
    icon: TrendingUp,
    title: 'Параметрийн өөрчлөлт',
    text: 'Тэтгэврийн нас, тэтгэвэр бодох хувь хэмжээ, ажилгүйдлийн тэтгэмж авах нөхцөлд өөрчлөлт хийнэ.',
  },
  {
    tone: 'cyan',
    icon: FlameKindling,
    title: 'Тэтгэврийн тогтолцооны өөрчлөлт',
    text: 'Даатгуулагчийн сонголтод үндэслэсэн хагас хуримтлалын тогтолцоонд үе шаттай шилжинэ.',
  },
  {
    tone: 'teal',
    icon: BriefcaseBusiness,
    title: 'Гарааны, бичил, жижиг бизнесийг дэмжих',
    text: 'Ажил олгогчид шимтгэл, хөнгөлөлт үзүүлж ажлын байр бий болгохыг дэмжинэ.',
  },
  {
    tone: 'green',
    icon: MessagesSquare,
    title: 'Хөдөлмөр эрхлэлтийг дэмжих',
    text: 'Оюутан, ахмад настан ажил эрхлэхийг дэмжинэ. Албан бус ажил эрхлэгчид шимтгэл төлөхийг урамшуулна.',
  },
  {
    tone: 'lime',
    icon: Handshake,
    title: 'Давхар гэрээнд НДШ ногдуулах зохицуулалт',
    text: 'Хэд хэдэн гэрээгээр давхар ажиллаж байгаа тохиолдолд шимтгэлийн уян хатан зохицуулалт нэвтрүүлнэ.',
  },
];

export function Slide19() {
  return (
    <div className="s9b-slide size-full relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={backgroundImg} alt="" className="size-full object-cover" />
      </div>

      <main className="s9b-layout relative size-full">
        <aside className="s9b-title-panel" aria-label="Сэдэв">
          <div className="s9b-kicker">ШИНЭЧЛЭЛ, ШИЙДЭЛ</div>
          <h1>
            Тэтгэврийн шинэчлэл,
            <span>бүр олуулаа даатгуул</span>
          </h1>
          <div className="s9b-title-rule" />
        </aside>

        <section className="s9b-card-grid" aria-label="6 grid мэдээлэл">
          {reformCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`s9b-card s9b-card-${item.tone}`}
                style={{ animationDelay: `${130 + index * 95}ms` }}
                tabIndex={0}
              >
                <div className="s9b-card-shell">
                  <div className="s9b-icon-wrap">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="s9b-card-copy">
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                  <span className="s9b-card-glow" />
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
