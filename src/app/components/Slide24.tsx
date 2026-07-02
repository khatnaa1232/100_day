export function Slide24() {
  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-100px] bottom-[-170px] text-[420px] leading-none font-black text-white/[0.018]">24</div>
      </div>

      <main className="relative z-10 flex h-full flex-col items-center justify-center px-12 text-center animate-[fadeUp_0.7s_ease-out_both]">
        <span className="grid h-16 w-16 place-items-center border-2 border-primary text-[26px] font-black text-primary">
          24
        </span>
        <p className="mt-6 text-[13px] font-black uppercase tracking-[0.28em] text-primary/80">Slide 24</p>
        <h1 className="mt-3 text-[46px] leading-[1.05] font-black tracking-[-0.03em] text-white/90">
          Гарчиг энд орно
        </h1>
        <p className="mt-4 max-w-[720px] text-[17px] leading-[1.35] font-bold text-white/50">
          Энэ слайдын агуулгыг эндээс нэмнэ.
        </p>
      </main>
    </div>
  );
}
