import { useMemo, type CSSProperties, type ReactNode } from 'react';
import { ArrowUpRight, CircleDollarSign, Sparkles, Star, Zap } from 'lucide-react';
import unlockedImg from '../../imports/unlocked.png';
import unlock2Img from '../../imports/unlock_2.png';
import unlock3Img from '../../imports/unlock_3.png';
import unlock4Img from '../../imports/unlock_4.png';
import unlock5Img from '../../imports/unlock_5.png';
import unlock6Img from '../../imports/unlock_6.png';
import unlock7Img from '../../imports/unlock_7.png';
import unlock8Img from '../../imports/unlock_8.png';
import unlock9Img from '../../imports/unlock_9.png';
import unlock10Img from '../../imports/unlock_10.png';
import unlock11Img from '../../imports/unlock_11.png';
import unlock12Img from '../../imports/unlock_12.png';
import type { UnlockItem } from './unlockContent';
import { slide4Unlocks, slide5Unlocks, slide6Unlocks } from './unlockContent';
import { useCountUp, formatCountUp } from './useCountUp';
import { LiquidGlass } from './LiquidGlass';

export type ShowcaseUnlock = UnlockItem & {
  image: string;
  alt: string;
  accent: string;
  metric: string;
  metricLabel: string;
};

// Per-unlock presentation meta, in order (Unlock 2 → 12). The image ↔ unlock
// mapping mirrors the existing Slide6/7/8 pairing (which is already correct).
const meta: Omit<ShowcaseUnlock, keyof UnlockItem>[] = [
  { image: unlock2Img, alt: 'Цаасан уул ба жижиг бизнесүүд', accent: '#f2b94b', metric: '72.4 тэрбум', metricLabel: 'төгрөг төлөгдөв' },
  { image: unlock3Img, alt: 'Цаасан уул', accent: '#f97316', metric: '9376', metricLabel: 'шалгалт цуцлав' },
  { image: unlock4Img, alt: 'E-business.mn-д хүсэлт илгээж буй', accent: '#2ec5ff', metric: '321', metricLabel: 'цахим зөвшөөрөл' },
  { image: unlock5Img, alt: 'www.E-business.mn, www.licence.mn үйлчилгээ', accent: '#22c55e', metric: '146', metricLabel: 'бизнес шууд эхлэв' },
  { image: unlock6Img, alt: 'Татварын онцлох 6 чөлөөлөлтийн постер', accent: '#a78bfa', metric: '2027.01.01', metricLabel: 'хэрэгжиж эхэлнэ' },
  { image: unlock7Img, alt: 'Эмч, багш ажлаа хийж буй', accent: '#22c55e', metric: '131340', metricLabel: 'ажилтан чөлөөлөв' },
  { image: unlock8Img, alt: 'Түлш шатахуун, Ерөнхий сайдтай ярьж буй', accent: '#38bdf8', metric: '1.8 их наяд', metricLabel: 'эрсдэлээс сэргийлэв' },
  { image: unlock9Img, alt: 'EXCEL Word тайлангууд давхардсан, DELETE товч', accent: '#f97316', metric: '70% / 30%', metricLabel: 'тайлан ба үйлчилгээ' },
  { image: unlock10Img, alt: 'Чингис хаан Баялгийн сан', accent: '#a78bfa', metric: '67.3 тэрбум', metricLabel: 'жил бүр хэмнэнэ' },
  { image: unlock11Img, alt: 'Эмийн лаборатори', accent: '#fb7185', metric: '263', metricLabel: 'эм жагсаалтаас хасав' },
  { image: unlock12Img, alt: 'Нарны станц, хураагуур ба байршил', accent: '#facc15', metric: '220 МВт', metricLabel: 'нарны станц' },
];

const content: UnlockItem[] = [...slide4Unlocks, ...slide5Unlocks, ...slide6Unlocks];

export const showcaseUnlocks: ShowcaseUnlock[] = content.map((item, i) => ({ ...item, ...meta[i] }));

/** Pick an unlock by its number (2–12). */
export const unlockByNumber = (n: number): ShowcaseUnlock =>
  showcaseUnlocks.find((u) => u.unlock === `#Unlock ${n}`)!;

const glassSoft: CSSProperties = {
  background: 'linear-gradient(180deg, rgba(6,22,61,0.42), rgba(6,22,61,0.22))',
  backdropFilter: 'blur(6px) saturate(125%)',
  WebkitBackdropFilter: 'blur(6px) saturate(125%)',
  boxShadow: '0 18px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.08)',
};

// Parse a metric string into an animatable number + suffix. Non-countable
// values (dates, ratios) return null and are rendered verbatim.
function parseMetric(metric: string) {
  const m = metric.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  const suffix = m[2];
  if (/\d/.test(suffix)) return null;
  const numStr = m[1].replace(/,/g, '');
  const value = Number.parseFloat(numStr);
  if (!Number.isFinite(value)) return null;
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { value, decimals, suffix };
}

export function AnimatedMetric({ metric, delay = 0, glowColor }: { metric: string; delay?: number; glowColor?: string }) {
  const parsed = useMemo(() => parseMetric(metric), [metric]);
  const [value, settled] = useCountUp(parsed?.value ?? 0, delay, 1300);
  if (!parsed) return <>{metric}</>;
  return (
    <span style={settled && glowColor ? { textShadow: `0 0 26px ${glowColor}70` } : undefined}>
      {formatCountUp(value, parsed.decimals)}
      {parsed.suffix}
    </span>
  );
}

export function UnlockBadge({ accent, label, size = 'sm' }: { accent: string; label: string; size?: 'sm' | 'lg' }) {
  const dim = size === 'lg' ? 'h-[42px] w-[38px]' : 'h-[30px] w-[27px]';
  const text = size === 'lg' ? 'text-[17px]' : 'text-[13px]';
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`relative block flex-shrink-0 ${dim}`} style={{ filter: `drop-shadow(0 0 16px ${accent}66)` }}>
        <span
          className="absolute inset-0"
          style={{
            backgroundColor: accent,
            WebkitMaskImage: `url(${unlockedImg})`,
            maskImage: `url(${unlockedImg})`,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
          aria-hidden="true"
        />
      </span>
      <span className={`font-black uppercase tracking-[0.14em] ${text}`} style={{ color: accent }}>
        {label}
      </span>
    </span>
  );
}

export const clamp = (lines: number): CSSProperties => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export function compactTitle(item: ShowcaseUnlock) {
  if (item.unlock === '#Unlock 12') return 'Ногоон хөгжлийн чөлөөлөлт';
  if (item.unlock === '#Unlock 6') return 'Татварын чөлөөлөлт';
  if (item.unlock === '#Unlock 9') return 'Давхар тайлангаас чөлөөлөв';
  if (item.unlock === '#Unlock 8') return 'Шатахууны үнийн эрсдэлээс сэргийлэв';
  if (item.unlock === '#Unlock 7') return 'Эмч, багшийн "хоёр цалин"-г цэгцлэв';
  if (item.unlock === '#Unlock 11') return 'Эмийн тогтолцоог эмнэв';
  return item.title;
}

export function distilledBullets(item: ShowcaseUnlock) {
  const copy: Record<string, string[]> = {
    '#Unlock 2': [
      '12,153 компанийн хаагдсан дансыг сарын хугацаатай нээв',
      '1,700 гаруй ААН өрөөс бүрэн чөлөөлөгдөв',
    ],
    '#Unlock 3': [
      '1,700 байцаагчийн 8,100 журмын төлөвлөгөөт шалгалтыг цуцлав',
      'Хүн, байгальд сөрөг нөлөөгүй бүх шалгалтаас чөлөөлөв',
    ],
    '#Unlock 4': [
      '321 зөвшөөрлийг цаасаар биш цахимаар олгож эхлэв',
      'AI-аар 30 минутад компаниа бүртгүүлж, данс нээдэг боллоо',
    ],
    '#Unlock 5': [
      '617 иргэн, компани 146 бизнесээ утаснаасаа мэдэгдээд эхлэв',
      'Зөвшөөрөл нэртэй хориглолтоос чөлөөлөв',
    ],
    '#Unlock 6': [
      '2027.01.01-нээс хэрэгжих татварын онцлох 6 чөлөөлөлт',
      'Багц хуулийн шинэчлэлээр татварын дарамтыг бууруулна',
    ],
    '#Unlock 8': [
      'ОХУ-тай хийсэн яриагаар түлшний хомсдлын аюулаас сэргийлэв',
      '1 литр 6,200₮ давж, 1.8 их наяд₮-ийн эрсдэлээс хамгаалав',
    ],
    '#Unlock 7': [
      '131,340 эмч, багш, салбарын ажилтны цалингийн ойлгомжгүй байдлыг арилгав',
      'Нийгмийн суурь үйлчилгээний хүний нөөцөд итгэл нэмэв',
    ],
    '#Unlock 9': [
      'Давхардсан тайланг багасгаж, ажлын цагийг бодит үйлчилгээ рүү шилжүүлэв',
      'Долоо хоногийн нэг өдөр цахимаар ажиллах нөхцөл бүрдэв',
    ],
    '#Unlock 11': [
      'Эмийн чанарыг Монголдоо дэлхийн түвшинд хянах лабораторитой болов',
      'Хөнгөлөлттэй эмийн жагсаалтыг хүндрүүлсэн 263 эмийг хасав',
    ],
    '#Unlock 12': [
      'Өрсөлдөөнт аукционоор тарифыг 4.85-7.8 цент болгон бууруулав',
      '220 МВт нар, 440 МВт батарейн бүтээн байгуулалт 12 сарын 1-нд ашиглалтад орно',
    ],
  };
  return copy[item.unlock] ?? item.bullets;
}

/** Compact unlock card — image banner on top, title + metric below. */
export function UnlockTile({ item, index = 0 }: { item: ShowcaseUnlock; index?: number }) {
  const { accent } = item;
  return (
    <article
      className="relative flex min-h-0 flex-col overflow-hidden rounded-[22px] border animate-[showcaseRise_0.6s_ease-out_both]"
      style={{ borderColor: `${accent}3a`, animationDelay: `${0.14 + index * 0.07}s`, ...glassSoft }}
    >
      <div className="relative h-[128px] w-full flex-shrink-0 overflow-hidden">
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,16,40,0.12) 0%, rgba(6,16,40,0.55) 55%, #06132a 100%)' }} />
        <div className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: accent }} />
        <div className="absolute inset-x-3.5 top-3 flex items-start justify-between">
          <UnlockBadge accent={accent} label={item.unlock.replace('#', '')} />
          <span className="rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-black tracking-[0.06em] text-white/72 backdrop-blur-sm">
            {item.date}
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3">
        <h3 className="text-[19px] leading-[1.08] font-black tracking-[-0.025em] text-white" style={clamp(3)}>
          {item.title}
        </h3>
        <div className="mt-auto flex items-end gap-2 pt-3">
          <p className="text-[30px] leading-none font-black tracking-[-0.04em] tabular-nums" style={{ color: accent }}>
            <AnimatedMetric metric={item.metric} delay={280 + index * 90} glowColor={accent} />
          </p>
          <p className="pb-0.5 text-[10.5px] leading-[1.05] font-black uppercase tracking-[0.1em] text-white/48" style={clamp(2)}>
            {item.metricLabel}
          </p>
        </div>
      </div>
    </article>
  );
}

/** Large featured "hero" unlock — the most important one. */
export function UnlockHero({ item, note, bullets }: { item: ShowcaseUnlock; note?: ReactNode; bullets?: string[] }) {
  const { accent } = item;
  const [kicker, ...rest] = item.title.split(':');
  const heading = rest.length ? rest.join(':').trim() : item.title;
  const parsedMetric = parseMetric(item.metric);
  const shownBullets = bullets ?? item.bullets;

  return (
    <LiquidGlass
      radius={30}
      className="relative min-h-0 overflow-hidden border animate-[showcaseHero_0.7s_ease-out_both]"
      style={{ borderColor: `${accent}66`, boxShadow: `0 34px 90px rgba(0,0,0,0.34), 0 0 0 1px ${accent}33` }}
    >
      <div className="relative h-full">
        <div className="absolute inset-y-0 right-0 w-[46%]">
          <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, #061127 0%, rgba(6,17,39,0.55) 42%, transparent 78%)' }}
          />
        </div>

        <div className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: accent }} />
        <div
          className="absolute right-6 top-6 h-[220px] w-[220px] rounded-full blur-[90px]"
          style={{ backgroundColor: `${accent}30` }}
        />

        <div className="relative z-10 flex h-full max-w-[62%] flex-col px-9 py-8">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-black uppercase tracking-[0.16em]"
              style={{ borderColor: `${accent}77`, backgroundColor: `${accent}22`, color: accent }}
            >
              <Star className="h-4 w-4 fill-current" strokeWidth={2.4} />
              Хамгийн чухал чөлөөлөлт
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <UnlockBadge accent={accent} label={item.unlock.replace('#', '')} size="lg" />
            <span className="h-5 w-px bg-white/20" />
            <span className="text-[14px] font-black tracking-[0.06em] text-white/62">{item.date}</span>
          </div>

          {rest.length ? (
            <p className="mt-5 text-[16px] font-black uppercase tracking-[0.18em]" style={{ color: accent }}>
              {kicker.trim()}
            </p>
          ) : null}
          <h2 className="mt-2 max-w-[560px] text-[44px] leading-[0.96] font-black tracking-[-0.05em] text-white">
            {heading}
          </h2>

          {note ? (
            <p className="mt-4 max-w-[520px] text-[17px] leading-[1.34] font-semibold text-white/76">{note}</p>
          ) : (
            <div className="mt-5 space-y-2.5">
              {shownBullets.slice(0, 3).map((line) => (
                <p key={line} className="flex items-start gap-3 text-[16px] leading-[1.28] font-semibold text-white/76">
                  <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                  <span className="max-w-[500px]">{line}</span>
                </p>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-end gap-4 pt-6">
            {parsedMetric ? (
              <p className="text-[58px] leading-none font-black tracking-[-0.05em] tabular-nums" style={{ color: accent }}>
                <AnimatedMetric metric={item.metric} delay={360} glowColor={accent} />
              </p>
            ) : (
              <p
                className="rounded-[14px] border px-5 py-3 text-[30px] leading-none font-black tracking-[-0.03em]"
                style={{ borderColor: `${accent}55`, backgroundColor: `${accent}1c`, color: accent }}
              >
                {item.metric}
              </p>
            )}
            <p className="pb-1.5 text-[13px] leading-[1.1] font-black uppercase tracking-[0.12em] text-white/52">
              {item.metricLabel}
            </p>
          </div>
        </div>
      </div>
    </LiquidGlass>
  );
}

function ImpactToken({
  label,
  value,
  accent,
  delay = 0,
}: {
  label: string;
  value: string;
  accent: string;
  delay?: number;
}) {
  return (
    <div
      className="rounded-[18px] border px-4 py-3"
      style={{
        borderColor: `${accent}38`,
        background: `linear-gradient(180deg, ${accent}1f, rgba(255,255,255,0.045))`,
      }}
    >
      <p className="text-[12px] font-black uppercase tracking-[0.15em] text-white/45">{label}</p>
      <p className="mt-1 text-[28px] leading-none font-black tracking-[-0.04em] tabular-nums" style={{ color: accent }}>
        <AnimatedMetric metric={value} delay={delay} glowColor={accent} />
      </p>
    </div>
  );
}

export function EconomicHero({ item }: { item: ShowcaseUnlock }) {
  const { accent } = item;
  return (
    <LiquidGlass
      radius={32}
      className="relative min-h-0 overflow-hidden border animate-[showcaseHero_0.7s_ease-out_both]"
      style={{
        borderColor: `${accent}66`,
        boxShadow: `0 34px 94px rgba(0,0,0,0.36), 0 0 0 1px ${accent}30`,
      }}
    >
      <div className="absolute inset-0">
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#051125]/70" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 72% 24%, ${accent}40, transparent 32%), linear-gradient(90deg, #061127 0%, rgba(6,17,39,0.86) 50%, rgba(6,17,39,0.34) 100%)` }} />
      </div>

      <div className="relative z-10 flex h-full flex-col px-10 py-9">
        <div className="flex items-start justify-between gap-8">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-black uppercase tracking-[0.18em]"
              style={{ borderColor: `${accent}80`, backgroundColor: `${accent}22`, color: accent }}
            >
              <Star className="h-4 w-4 fill-current" strokeWidth={2.4} />
              Эдийн засгийн гол unlock
            </span>
            <div className="mt-6 flex items-center gap-3">
              <UnlockBadge accent={accent} label={item.unlock.replace('#', '')} size="lg" />
              <span className="h-5 w-px bg-white/22" />
              <span className="text-[14px] font-black tracking-[0.08em] text-white/62">{item.date}</span>
            </div>
          </div>
          <div className="grid h-[88px] w-[88px] place-items-center rounded-full border border-white/15 bg-white/[0.07]">
            <CircleDollarSign className="h-10 w-10" style={{ color: accent }} strokeWidth={2.2} />
          </div>
        </div>

        <h2 className="mt-6 max-w-[710px] text-[56px] leading-[0.91] font-black tracking-[-0.055em] text-white">
          Төрийн зуршлаас хувийн хэвшил рүү
        </h2>
        <p className="mt-4 max-w-[680px] text-[21px] leading-[1.23] font-semibold text-white/76">
          ТӨК-ийн давхардлыг цөөлж, баялгийн өгөөжийг менежменттэй хөрөнгө оруулалт руу шилжүүлсэн хамгийн том бүтцийн чөлөөлөлт.
        </p>

        <div className="mt-auto grid grid-cols-3 gap-3 pt-6">
          <ImpactToken label="жил бүрийн хэмнэлт" value="67.3 тэрбум" accent={accent} delay={360} />
          <ImpactToken label="татан буулгаж нэгтгэсэн" value="14" accent="#2ec5ff" delay={520} />
          <ImpactToken label="цомхотгосон орон тоо" value="260" accent="#22c55e" delay={680} />
        </div>
      </div>
    </LiquidGlass>
  );
}

export function UnlockSignalCard({
  item,
  index = 0,
  mode = 'compact',
}: {
  item: ShowcaseUnlock;
  index?: number;
  mode?: 'compact' | 'wide';
}) {
  const { accent } = item;
  return (
    <article
      className="group relative flex min-h-0 flex-col overflow-hidden rounded-[20px] border animate-[showcaseRise_0.6s_ease-out_both]"
      style={{ borderColor: `${accent}36`, animationDelay: `${0.16 + index * 0.06}s`, ...glassSoft }}
    >
      <div className={`relative ${mode === 'wide' ? 'h-[170px]' : 'h-[118px]'} overflow-hidden`}>
        <img src={item.image} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,14,33,0.02) 0%, rgba(5,14,33,0.52) 56%, #061127 100%)' }} />
        <div className="absolute inset-x-0 top-0 h-[4px]" style={{ backgroundColor: accent }} />
        <div className="absolute left-3 top-3">
          <UnlockBadge accent={accent} label={item.unlock.replace('#', '')} />
        </div>
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/36 text-white/75 backdrop-blur-md">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3">
        <div className="flex items-end justify-between gap-3">
          <p className="text-[31px] leading-none font-black tracking-[-0.04em] tabular-nums" style={{ color: accent }}>
            <AnimatedMetric metric={item.metric} delay={260 + index * 80} glowColor={accent} />
          </p>
          <p className="pb-1 text-right text-[10.5px] leading-[1.05] font-black uppercase tracking-[0.1em] text-white/45" style={clamp(2)}>
            {item.metricLabel}
          </p>
        </div>
        <h3 className={`${mode === 'wide' ? 'mt-3 text-[24px]' : 'mt-2 text-[18px]'} leading-[1.08] font-black tracking-[-0.03em] text-white`} style={clamp(mode === 'wide' ? 2 : 3)}>
          {compactTitle(item)}
        </h3>
        {mode === 'wide' ? (
          <div className="mt-4 space-y-2">
            {distilledBullets(item).slice(0, 2).map((line) => (
              <p key={line} className="flex items-start gap-2 text-[15px] leading-[1.22] font-semibold text-white/66">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                <span style={clamp(2)}>{line}</span>
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function UnlockImpactStrip({ items }: { items: ShowcaseUnlock[] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {items.map((item, index) => (
        <div
          key={item.unlock}
          className="relative overflow-hidden rounded-[18px] border px-4 py-3 animate-[showcaseRise_0.6s_ease-out_both]"
          style={{ borderColor: `${item.accent}36`, animationDelay: `${0.24 + index * 0.06}s`, ...glassSoft }}
        >
          <div className="absolute -right-5 -top-8 h-20 w-20 rounded-full blur-2xl" style={{ backgroundColor: `${item.accent}35` }} />
          <div className="relative flex items-center gap-3">
            <UnlockBadge accent={item.accent} label={item.unlock.replace('#', '')} />
            <div className="min-w-0">
              <p className="text-[22px] leading-none font-black tracking-[-0.03em] tabular-nums" style={{ color: item.accent }}>
                <AnimatedMetric metric={item.metric} delay={360 + index * 80} glowColor={item.accent} />
              </p>
              <p className="mt-1 text-[10px] leading-[1.05] font-black uppercase tracking-[0.11em] text-white/42" style={clamp(2)}>
                {item.metricLabel}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Shared page shell: glows, divider lines, header with page marker. */
export function ShowcaseFrame({
  title,
  subtitle,
  page,
  children,
}: {
  title: string;
  subtitle: string;
  page: number;
  children: ReactNode;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-[8%] top-[6%] h-[360px] w-[560px] rounded-full bg-[#a78bfa]/14 blur-[150px]" />
        <div className="absolute right-[2%] top-[12%] h-[420px] w-[520px] rounded-full bg-[#2ec5ff]/12 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[34%] h-[360px] w-[720px] rounded-full bg-[#22c55e]/10 blur-[170px]" />
        <div className="absolute left-12 right-12 top-[128px] h-px bg-white/12" />
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-9 pt-[50px]">
        <header className="flex items-start justify-between gap-8 animate-[showcaseRise_0.6s_ease-out_both]">
          <div className="max-w-[1120px]">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.06]">
                <Sparkles className="h-4.5 w-4.5 text-white/78" strokeWidth={2.4} />
              </span>
              <p className="text-[13px] font-black uppercase tracking-[0.24em] text-white/58">{subtitle}</p>
            </div>
            <h1 className="hundred-days-glow mt-4 text-[50px] leading-[0.94] font-black tracking-[-0.045em] text-white">
              {title}
            </h1>
          </div>

          <div className="flex flex-shrink-0 items-center gap-2 pr-[300px] pt-2">
            <span className="text-[15px] font-black tabular-nums text-white">{String(page).padStart(2, '0')}</span>
            <span className="text-[13px] font-black tabular-nums text-white/35">/ 02</span>
          </div>
        </header>

        <section className="mt-6 flex min-h-0 flex-1 flex-col">{children}</section>
      </main>

      <style>{`
        @keyframes showcaseRise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes showcaseHero { from { opacity: 0; transform: translateY(20px) scale(0.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
