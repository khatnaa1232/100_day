import type { CSSProperties, ReactNode } from 'react';
import {
  Ban,
  Bot,
  Clock3,
  Compass,
  Eye,
  EyeOff,
  Gauge,
  Gavel,
  Globe2,
  LineChart,
  Repeat,
  Scale,
  Search,
  ShieldCheck,
  Trash2,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import chuluuluvImg from '../../imports/chuluuluv.png';
import { LiquidGlass } from './LiquidGlass';

const liquidGlassProps = {
  blur: 2.5,
  edgeIntensity: 0,
  rimIntensity: 0,
  baseIntensity: 0,
  edgeDistance: 0.05,
  rimDistance: 0.8,
  baseDistance: 0.08,
  cornerBoost: 0,
  ripple: 0.1,
  tint: 0,
  warp: false,
};

const liquidShadow: CSSProperties = {
  boxShadow: '0 22px 46px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10)',
};

// Marker-style highlight for the featured phrases inside the italic bullet text.
function HL({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <b
      className="rounded-[5px] px-1.5 py-[1px] font-black not-italic text-white"
      style={{ background: `${accent}26` }}
    >
      {children}
    </b>
  );
}

type Highlighter = (children: ReactNode) => ReactNode;

type Bullet = {
  icon: LucideIcon;
  render: (H: Highlighter) => ReactNode;
};

type Principle = {
  title: string;
  icon: LucideIcon;
  accent: string;
  span: 1 | 2;
  bullets: Bullet[];
};

const principles: Principle[] = [
  {
    title: 'NO SURPRISE',
    icon: ShieldCheck,
    accent: '#f2b94b',
    span: 2,
    bullets: [
      { icon: Ban, render: () => <>Төр гэнэтийн шийдвэр гаргахгүй.</> },
      {
        icon: Clock3,
        render: (H) => (
          <>Бизнест зардал нэмэх хууль батлагдсан тохиолдолд дагаж мөрдөж хугацаа {H('6-аас доошгүй сарын дараа ')}.</>
        ),
      },
    ],
  },
  {
    title: 'ONCE-ONLY',
    icon: Repeat,
    accent: '#22c55e',
    span: 1,
    bullets: [
      {
        icon: Repeat,
        render: (H) => <>Төр бизнес эрхлэгчээс {H('1 мэдээллийг зөвхөн')} {H('1 удаа')} авна.</>,
      },
    ],
  },
  {
    title: 'ЗӨВХӨН ЭРСДЭЛЭЭС СЭРГИЙЛЭХ ХЯНАЛТ ШАЛГАЛТ',
    icon: Gauge,
    accent: '#fb923c',
    span: 1,
    bullets: [
      {
        icon: Compass,
        render: (H) => <>{H('Эрсдэлийн үнэлгээнд суурилсан')}, урьдчилан сэргийлэх, ил тод, зөвлөн туслах хяналт шалгалт.</>,
      },
    ],
  },
  {
    title: 'ТӨР ДУР ЗОРГООР БИЗНЕСИЙГ ХЯЗГААРЛАХГҮЙ',
    icon: Gavel,
    accent: '#38bdf8',
    span: 2,
    bullets: [
      {
        icon: LineChart,
        render: () => <>Төрийн аливаа зохицуулалтын бизнес, хөрөнгө оруулалт, шударга өрсөлдөөнд үзүүлэх нөлөөг заавал үнэлэн тооцно.</>,
      },
      {
        icon: Trash2,
        render: (H) => <>Хууль, шийдвэрт {H('жил бүр')} дүн шинжилгээ хийж, хязгаарласан, давхардсан, үр ашиггүйг нь цуцална.</>,
      },
    ],
  },
  {
    title: 'ИРГЭНДЭЭ ХАРАГДДАГ ТӨР',
    icon: Eye,
    accent: '#2dd4bf',
    span: 1,
    bullets: [
      {
        icon: Zap,
        render: (H) => <>Цааснаас {H('Цахимд')}.</>,
      },
      {
        icon: Search,
        render: (H) => <>Хаана,хэн ямар шийдвэр гаргаж буй нь {H('иргэндээ нээлттэй')}.</>,
      },
    ],
  },
  {
    title: 'ХҮН ТАНИХГҮЙ AI',
    icon: Bot,
    accent: '#fb7185',
    span: 1,
    bullets: [
      {
        icon: ShieldCheck,
        render: (H) => <>AI технологоор сонгон шалгаруулалт, хөрөнгийн зарцуулалт, худалдан авалтын {H('шударга өрсөлдөөнийг ')} хангана.</>,
      },
    ],
  },


  {
    title: '"ЦАХИМ БИЗНЕС ЭРХЛЭГЧ"-ИЙГ ХУУЛИАР ЗӨВШӨӨРӨВ',
    icon: Globe2,
    accent: '#60a5fa',
    span: 2,
    bullets: [
      {
        icon: Globe2,
        render: (H) => <>Гадаадын иргэн, компани Монгол Улсад {H('байрлахгүйгээр')} цахимаар ажиллахыг хуульчлав.</>,
      },
    ],
  },
];

function BulletRow({ icon: Icon, accent, children }: { icon: LucideIcon; accent: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-[8px]"
        style={{ backgroundColor: `${accent}1c`, color: accent }}
      >
        <Icon className="h-4 w-4" strokeWidth={2.5} />
      </span>
      <p className="text-[15.5px] leading-[1.32] font-normal italic tracking-[-0.01em] text-white/82">{children}</p>
    </div>
  );
}

function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  const Icon = principle.icon;
  const H: Highlighter = (children) => <HL accent={principle.accent}>{children}</HL>;

  return (
    <LiquidGlass
      radius={24}
      className="group relative min-h-0 overflow-hidden border"
      style={{
        gridColumn: `span ${principle.span}`,
        borderColor: `${principle.accent}42`,
        animation: `s8Card .7s cubic-bezier(.22,1,.36,1) ${0.06 + index * 0.05}s both`,
        ...liquidShadow,
      }}
      {...liquidGlassProps}
    >
      <div className="relative flex h-full flex-col p-5">
        <div
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-14 blur-3xl transition duration-500 group-hover:opacity-26"
          style={{ backgroundColor: principle.accent }}
        />
        <div className="relative flex items-center justify-between gap-3">
          <span
            className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-[12px] border transition duration-300 group-hover:scale-105"
            style={{ borderColor: `${principle.accent}66`, backgroundColor: `${principle.accent}16`, color: principle.accent }}
          >
            <Icon className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-[13px] font-black tabular-nums text-white/22">{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h2 className="relative mt-3.5 text-[19px] leading-[1.08] font-black tracking-[-0.02em]" style={{ color: principle.accent }}>
          {principle.title}
        </h2>

        <div className="relative mt-3 flex flex-1 flex-col justify-center gap-2.5">
          {principle.bullets.map((bullet, i) => (
            <BulletRow key={i} icon={bullet.icon} accent={principle.accent}>
              {bullet.render(H)}
            </BulletRow>
          ))}
        </div>

        <div className="relative mt-3 h-[3px] overflow-hidden rounded-full" style={{ background: `${principle.accent}26` }}>
          <span
            className="absolute inset-y-0 w-1/2"
            style={{
              background: `linear-gradient(90deg, transparent, ${principle.accent}, transparent)`,
              animation: `s8BarFlow 2.1s linear ${index * 0.18}s infinite`,
            }}
          />
        </div>
      </div>
    </LiquidGlass>
  );
}

export function Slide8() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[8%] top-[4%] h-[360px] w-[560px] rounded-full bg-[#f2b94b]/12 blur-[150px]" />
        <div className="absolute right-[2%] top-[12%] h-[420px] w-[520px] rounded-full bg-[#38bdf8]/12 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[34%] h-[360px] w-[720px] rounded-full bg-[#22c55e]/10 blur-[170px]" />
        <div className="absolute right-8 top-7 text-[140px] leading-none font-black tabular-nums text-white/[0.04]">04</div>
      </div>

      <main className="relative z-10 flex h-full flex-col px-12 pb-10 pt-[42px]">
        <header className="max-w-[1320px] animate-[s8Header_.72s_cubic-bezier(.22,1,.36,1)_both]">
          <div className="flex items-center gap-4">
            <img src={chuluuluvImg} alt="Чөлөөлөв" className="h-9 w-auto object-contain" />
            <span className="h-6 w-px bg-white/18" />
            <p className="text-[13px] font-black uppercase tracking-[0.24em] text-white/58">Хуулийн шинэчлэл · 8 зарчим</p>
          </div>
          <h1 className="mt-4 text-[42px] leading-[1.02] font-black tracking-[-0.04em] text-white">
            <span className="block text-[#f2b94b]">ЭДИЙН ЗАСГИЙН ЭРХ ЧӨЛӨӨ</span>
          </h1>
          <p className="mt-2 max-w-[980px] text-[16px] leading-[1.3] font-normal italic text-white/56">
            Эдийн засгийн эрх чөлөөний тухай анхдагч хууль. Дагалдах 91 хуулийн нэмэлт, өөрчлөлт:
          </p>
        </header>

        <section className="relative mt-5 grid min-h-0 flex-1 grid-cols-4 grid-rows-3 gap-4">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.title} principle={principle} index={index} />
          ))}
        </section>
      </main>

      <style>{`
        @keyframes s8Header { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes s8Card { from { opacity: 0; transform: translateY(20px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes s8BarFlow { from { transform: translateX(-110%); } to { transform: translateX(210%); } }
      `}</style>
    </div>
  );
}
