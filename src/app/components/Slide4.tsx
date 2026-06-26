import chuluuluvImg from '../../imports/chuluuluv.png';
import unlockedImg from '../../imports/unlocked.png';

const unlockCards = [
  {
    unlock: '#Unlock 1',
    date: '2026.04.06',
    title: 'Хаагдсан дансыг нээв',
    body: [
      'Жижиг бизнесүүд: талх, боовны цех, дугуй засвар, кофе шоп, үсчин.',
    ],
  },
  {
    unlock: '#Unlock 2',
    date: '2026.04.06',
    title: 'Татвар, НДШ-ийн дансыг нээв',
    body: [
      'Татварын 12,153 компани, ААН-ийн дансыг сарын хугацаатай нээв.',
      '1,700+ ААН өрөөс бүрэн чөлөөлөгдөж, 72.4 тэрбум төгрөг төлөгдөв.',
      'НДШ-ийн 155.6 тэрбум төгрөгийн өртэй 23,480 компани, байгууллагын дансыг нээв.',
    ],
  },
  {
    unlock: '#Unlock 3',
    date: '2026.04.15',
    title: 'Зөвшөөрлөөс чөлөөлөв',
    body: [
      '146 бизнесийг `www.e-business.mn`, `www.licence.mn`-д гар утаснаасаа мэдэгдээд шууд эхлүүлж байна.',
      'Гэрээ, дүгнэлт, тохирол зэрэг нэрээ өөрчилсөн зөвшөөрөл биш шаардлагуудаас чөлөөлөв.',
    ],
  },
  {
    unlock: '#Unlock 4',
    date: '2026.05.19',
    title: 'Татварын чөлөөлөлт',
    body: [
      'Хувийн хэвшил, хөдөлмөрлөж бүтээгчдээ дарамтаас чөлөөлнө.',
      'Татварын багц хуулийн шинэчлэл 2027.01.01-нээс хэрэгжинэ.',
      'Онцлох 6 чөлөөлөлтийн постер.',
    ],
  },
  {
    unlock: '#Unlock 5',
    date: '2026.06.15',
    title: 'E-business 2.0: Иргэндээ очиж үйлчилдэг төр',
    body: [
      '321 зөвшөөрлийг цаасаар биш цахимаар авч, цаг мөнгөө хэмнэдэг болов.',
      'AI ашиглан 30 минутанд нэрээ сонгон авч, бүртгүүлж, тамгаа захиалж, дансаа нээлгэдэг боллоо.',
      'Компанитай холбоотой 10+ төрлийн мэдээллийг цахимаар авна.',
      'API SERVICE-ийг хувийн хэвшилд нээж, GS25, CU, банкны апп-аас төрийн үйлчилгээ авч байна.',
    ],
  },
  {
    unlock: '#Unlock 6',
    date: '2026.04.18',
    title: 'Төлөвлөгөөт 9376 хяналт шалгалтыг цуцлав',
    body: [
      'Нэг компанид жилд 30+ удаа очих боломжтой байсан 1,700+ улсын байцаагчийн 8,100+ дүрэм журмын хяналтаас чөлөөлөв.',
      'Хүний эрүүл мэнд, байгаль орчинд сөрөг нөлөөгүйгээс бусад 2026 оны төлөвлөгөөт бүх шалгалтаас хувийн хэвшлээ чөлөөлөв.',
    ],
  },
  {
    unlock: '#Unlock 7',
    date: '2026.05.01',
    title: 'Эмч, багш нараа ойлгомжгүй цалингаас чөлөөлөв',
    body: [
      '131,340 эмч, багш, эрүүл мэнд боловсролын салбарын ажилтнаа “хоёр цалин”-гийн ойлгомжгүй байдлаас чөлөөлөв.',
    ],
  },
  {
    unlock: '#Unlock 8',
    date: '',
    title: 'Түлш шатахууны хомсдол, үнийн огцом өсөлтийн эрсдлээс чөлөөлөв',
    body: [
      'ОХУ-тай идэвхтэй яриа хэлцэл хийж, түлш шатахууны хомсдолын аюулаас чөлөөлөв.',
      'Үнийн огцом өсөлтөөр гарах байсан 1.8 их наяд төгрөгийн нэмэлт зардлаас чөлөөлөв.',
      'Шатахууны үнийн хөөсрөлийн эрсдлийг буурууллаа.',
    ],
  },
  {
    unlock: '#Unlock 9',
    date: '',
    title: 'Давхардсан тайлангаас төрийн албан хаагчдаа чөлөөлөв',
    body: [
      'Төрийн албан хаагчдаа давхардсан тайлангаас чөлөөлөв.',
      'Долоо хоногийн нэг өдөр цахимаар ажилладаг болов.',
      'Тайлан бичих цаг 70%, иргэдэд үйлчлэх цаг 30% байсан бүтцийг өөрчилж эхлэв.',
    ],
  },
];

export function Slide4() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-[8%] h-[300px] w-[520px] rounded-full bg-[#f2b94b]/12 blur-[110px]" />
        <div className="absolute top-[16%] right-[4%] h-[420px] w-[420px] rounded-full bg-[#2ec5ff]/14 blur-[140px]" />
        <div className="absolute bottom-[-8%] left-[28%] h-[260px] w-[560px] rounded-full bg-[#5b6cff]/16 blur-[140px]" />
      </div>

      <main className="relative z-10 flex h-full flex-col px-8 pt-6 pb-7">
        <header className="mb-5">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 backdrop-blur-md">
            <img src={chuluuluvImg} alt="Чөлөөлөв" className="h-8 w-auto object-contain" />
            <span className="text-[13px] font-black uppercase tracking-[0.22em] text-[#7dd3fc]">
              100 Өдөр 100 Чөлөөлөлт
            </span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-8">
            <div>
              <h1 className="max-w-[980px] text-[44px] leading-[0.98] font-black tracking-[-0.04em] text-white">
                Чөлөөлөлтийн 100 өдөрт хэнийг юунаас чөлөөлөв?
              </h1>
              <p className="mt-3 text-[20px] font-bold text-white/72">
                100 ӨДӨР 100 ЧӨЛӨӨЛӨЛТ: ОНЦЛОХ 10
              </p>
            </div>
          </div>
        </header>

        <section className="grid flex-1 grid-cols-3 grid-rows-3 gap-4">
          {unlockCards.map((card, index) => (
            <article
              key={card.unlock}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,24,58,0.94),rgba(7,18,46,0.96))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.22)] animate-[fadeIn_0.55s_ease-out_both]"
              style={{ animationDelay: `${0.12 + index * 0.08}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f2b94b] via-[#2ec5ff] to-[#10b981]" />
              <div className="absolute right-3 top-3 opacity-[0.08]">
                <img src={unlockedImg} alt="" className="h-20 w-auto object-contain" />
              </div>
              <div className="absolute -right-10 -bottom-12 h-28 w-28 rounded-full bg-[#2ec5ff]/8 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[13px] font-black uppercase tracking-[0.18em] text-[#f2b94b]">
                      {card.unlock}
                    </p>
                    {card.date ? (
                      <p className="mt-1 text-[12px] font-semibold text-white/55">{card.date}</p>
                    ) : null}
                  </div>

                  <img src={unlockedImg} alt="Unlocked" className="h-12 w-auto object-contain opacity-90" />
                </div>

                <h2 className="mt-3 text-[20px] leading-[1.02] font-black tracking-[-0.03em] text-white">
                  {card.title}
                </h2>

                <div className="mt-3 flex-1 space-y-2">
                  {card.body.map((line) => (
                    <p key={line} className="flex items-start gap-2 text-[12.5px] leading-[1.32] font-medium text-white/84">
                      <span
                        className="mt-[3px] block h-2.5 w-2.5 flex-shrink-0 rounded-full shadow-[0_0_10px_rgba(46,197,255,0.45)]"
                        style={{ background: '#f59e0b', boxShadow: '0 0 10px rgba(245,158,11,0.55)' }}
                      />
                      <span>{line}</span>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
