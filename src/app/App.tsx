import { useState, useEffect, useRef, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, LayoutGrid } from 'lucide-react';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';
import { Slide7 } from './components/Slide7';
import { Slide8 } from './components/Slide8';
import { Slide9 } from './components/Slide9';
import { Slide10 } from './components/Slide10';
import { Slide11 } from './components/Slide11';
import { Slide12 } from './components/Slide12';
import { Slide13 } from './components/Slide13';
import { Slide14 } from './components/Slide14';
import { Slide15 } from './components/Slide15'; //order 3 hannii umnu orno
import { Slide16 } from './components/Slide16';
import { Slide17 } from './components/Slide17';
import { Slide18 } from './components/Slide18';
import { Slide19 } from './components/Slide19';
import { Slide20 } from './components/Slide20';
import { Slide21 } from './components/Slide21';
import { Slide22 } from './components/Slide22';
import { Slide23 } from './components/Slide23';
import { Slide24 } from './components/Slide24';
import { Slide25 } from './components/Slide25';
import bgImage from '../imports/background.jpg';
import calendarBg from '../imports/calendar_background.png';
import chuluulyImg from '../imports/chuluuly.png';
import slide1HeroImg from '../imports/slide_1.png';
import slide3HeroImg from '../imports/slide_3.png';

const PRELOAD_IMAGES = [slide1HeroImg, slide3HeroImg];

const AUTO_LOOP_INTERVAL = 15_000;
const LANDSCAPE_CANVAS = { width: 1920, height: 1028 };
const PORTRAIT_CANVAS = { width: 864, height: 1028 };
const CHULUULY_ASPECT_RATIO = 7388 / 1398;
const MORPH_DURATION_MS = 720;
const MORPH_PAGE_MS = 620;
const MORPH_LOGO_TO = {
  left: LANDSCAPE_CANVAS.width - 40 - 56 * CHULUULY_ASPECT_RATIO,
  top: 32,
  width: 56 * CHULUULY_ASPECT_RATIO,
  height: 56,
};
const MORPH_LOGO_LAST = {
  left: (LANDSCAPE_CANVAS.width - 100 * CHULUULY_ASPECT_RATIO) / 2,
  top: 298,
  width: 100 * CHULUULY_ASPECT_RATIO,
  height: 100,
};
type MorphTransition = 'logo1617' | null;

const SLIDE_THUMBNAILS = [
  { title: '100 өдөр', subtitle: 'Unlock', accent: '#f59e0b' },
  { title: 'Ерөнхий сайдын мессеж', subtitle: 'Итгэл + хурд', accent: '#2ec5ff' },
  { title: 'Хүнд суртлын хана', subtitle: 'Хүсэл хяссан түүхээ', accent: '#f2b94b' },
  { title: '100 чөлөөлөлт', subtitle: '100 өдөр', accent: '#2ec5ff' },
  { title: 'Оюутолгой unlock', subtitle: 'Өгөөж, ногдол ашиг', accent: '#f2b94b' },
  { title: 'Unlock 2-5', subtitle: 'Эхний багц', accent: '#2ec5ff' },
  { title: 'Unlock 6-9', subtitle: 'Grid багц', accent: '#a78bfa' },
  { title: 'Unlock 10-12', subtitle: 'Grid багц', accent: '#10b981' },
  { title: '4 зам', subtitle: 'Үндэсний санаачилга', accent: '#22c55e' },
  { title: 'Эдийн засгийн чөлөөлөлт', subtitle: 'Signal map', accent: '#fb7185' },
  { title: '4 зам', subtitle: 'Чөлөөлье санаачилга', accent: '#25d46f' },
  { title: '4 зарчим', subtitle: 'Эрх чөлөөт эдийн засаг', accent: '#2ec5ff' },
  { title: 'Боловсролын салбар', subtitle: 'Гэрт ойрхон сургууль', accent: '#f5b632' },
  { title: 'Илүү олон жил төлбөл', subtitle: 'Илүү өндөр тэтгэвэртэй', accent: '#22c55e' },
  { title: 'Баталгаат тэтгэвэр', subtitle: 'Шинэ баталгаа', accent: '#22c55e' },
  { title: 'Цалингийн дээд хязгаар', subtitle: '2.4 саяас бодох', accent: '#f2b94b' },
  { title: 'Боловсролын чөлөөлөлт', subtitle: 'Гэрт ойрхон сургууль', accent: '#f5b632' },
  { title: 'Олон давхаргат тогтолцоо', subtitle: '3 давхарга · 3 эх үүсвэр', accent: '#f5b632' },
  { title: 'Бизнес, эдийн засгийн чөлөөлөлт', subtitle: 'Unlock 2–5 · 8 · 10 hero', accent: '#a78bfa' },
  { title: 'Хүн, салбар, ирээдүйн чөлөөлөлт', subtitle: 'Unlock 6 · 7 hero · 9 · 11 · 12', accent: '#38bdf8' },
  { title: 'Slide 21', subtitle: 'Агуулга нэмэх', accent: '#2ec5ff' },
  { title: 'Slide 22', subtitle: 'Агуулга нэмэх', accent: '#2ec5ff' },
  { title: 'Slide 23', subtitle: 'Агуулга нэмэх', accent: '#2ec5ff' },
  { title: 'Slide 24', subtitle: 'Агуулга нэмэх', accent: '#2ec5ff' },
  { title: 'Баярлалаа', subtitle: 'Анхаарал хандуулсанд', accent: '#2ec5ff' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [exitingSlide, setExitingSlide] = useState<number | null>(null);
  const [autoLoop, setAutoLoop] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [morphTransition, setMorphTransition] = useState<MorphTransition>(null);
  const [viewport, setViewport] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoLoopRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const morphTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const morphPageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentSlideRef = useRef(0);
  const lastWindowedScaleRef = useRef(1);

  const slides = [
    Slide1,
    Slide2,
    Slide15,
    Slide3,
    Slide4,
    Slide5,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide6,
    Slide7,
    Slide17,
    Slide19,
    Slide20,
    Slide21,
    Slide22,
    Slide23,
    Slide18,
    Slide16,
    Slide14,
    Slide24,
    Slide25,
  ];
  const CurrentSlideComponent = slides[currentSlide];
  const ExitingSlideComponent = exitingSlide !== null ? slides[exitingSlide] : null;
  const isPageMorphing = exitingSlide !== null || morphTransition !== null;
  // Show corner logo on slides 2–24 (indices 1–23), except during the
  // logo1617 morph that takes over rendering
  const showCornerLogo =
    currentSlide >= 1 &&
    currentSlide <= 23 &&
    !(currentSlide === 23 && morphTransition === 'logo1617');
  const isPortraitSlide = false;
  const canvas = isPortraitSlide ? PORTRAIT_CANVAS : LANDSCAPE_CANVAS;
  const rawCanvasScale = Math.min(
    Math.max(viewport.width, 320) / canvas.width,
    Math.max(viewport.height, 240) / canvas.height,
  );
  const canvasScale = isFullscreen
    ? Math.min(rawCanvasScale, lastWindowedScaleRef.current)
    : rawCanvasScale;
  const effectiveViewportWidth = Math.max(viewport.width, 320);
  const effectiveViewportHeight = Math.max(viewport.height, 240);
  const canvasScaleWithViewportSafety = Math.min(
    effectiveViewportWidth / canvas.width,
    effectiveViewportHeight / canvas.height,
  );
  const finalCanvasScale = Math.min(canvasScale, canvasScaleWithViewportSafety);

  const goToSlide = useCallback((targetSlide: number) => {
    if (morphTimeoutRef.current) {
      clearTimeout(morphTimeoutRef.current);
      morphTimeoutRef.current = null;
    }
    if (morphPageTimeoutRef.current) {
      clearTimeout(morphPageTimeoutRef.current);
      morphPageTimeoutRef.current = null;
    }

    const fromSlide = currentSlideRef.current;

    // Page morph transition — show exiting slide with fade-out animation
    if (fromSlide !== targetSlide) {
      setExitingSlide(fromSlide);
      morphPageTimeoutRef.current = setTimeout(() => {
        setExitingSlide(null);
        morphPageTimeoutRef.current = null;
      }, MORPH_PAGE_MS);
    }

    // Logo morphs
    let nextMorph: MorphTransition = null;
    if (fromSlide === 23 && targetSlide === 24) {
      nextMorph = 'logo1617';
    }
    setMorphTransition(nextMorph);
    currentSlideRef.current = targetSlide;
    setCurrentSlide(targetSlide);

    if (nextMorph) {
      morphTimeoutRef.current = setTimeout(() => {
        setMorphTransition(null);
        morphTimeoutRef.current = null;
      }, MORPH_DURATION_MS);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide, slides.length]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide, slides.length]);

  const startAutoLoop = useCallback(() => {
    setProgress(0);
    autoLoopRef.current = setInterval(() => {
      const nextIndex = (currentSlideRef.current + 1) % slides.length;
      goToSlide(nextIndex);
      setProgress(0);
    }, AUTO_LOOP_INTERVAL);

    const tick = 100;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (tick / AUTO_LOOP_INTERVAL) * 100, 100));
    }, tick);
  }, [goToSlide, slides.length]);

  const stopAutoLoop = useCallback(() => {
    if (autoLoopRef.current) clearInterval(autoLoopRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    autoLoopRef.current = null;
    progressRef.current = null;
    setProgress(0);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }, []);

  const toggleGridView = useCallback(() => setIsGridView(v => !v), []);

  // Track actual fullscreen state via browser events
  useEffect(() => {
    const onFsChange = () => {
      const entering = !!document.fullscreenElement;
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsFullscreen(entering);
      if (!entering) {
        setAutoLoop(false);
        stopAutoLoop();
      }
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, [startAutoLoop, stopAutoLoop]);

  // Keyboard navigation — also covers presentation remotes/clickers, which emulate
  // a range of different keys depending on brand (PageDown/PageUp, Space, ./, , <>).
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (isGridView) {
        if (e.key === 'Escape' || key === 'g') { setIsGridView(false); }
        return;
      }
      const goNext = e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ' || e.key === '.' || e.key === '>';
      const goPrev = e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace' || e.key === ',' || e.key === '<';
      if (goNext) { e.preventDefault(); nextSlide(); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }
      if (goPrev) { e.preventDefault(); prevSlide(); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }
      if (e.key === 'F5' || ((e.metaKey || e.ctrlKey) && key === 'f')) { e.preventDefault(); toggleFullscreen(); }
      if ((e.metaKey || e.ctrlKey) && key === 'g') { e.preventDefault(); toggleGridView(); }
      if (e.key === 'Escape' && isFullscreen) { document.exitFullscreen().catch(() => { }); }
    };

    // Touch swipe — for tablet / touch-screen remotes
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isGridView) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < 50) return; // ignore tiny taps
      if (dx < 0) { nextSlide(); } else { prevSlide(); }
      if (autoLoop) { stopAutoLoop(); startAutoLoop(); }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide, toggleFullscreen, toggleGridView, autoLoop, stopAutoLoop, startAutoLoop, isFullscreen, isGridView]);

  useEffect(() => () => {
    stopAutoLoop();
    if (morphTimeoutRef.current) clearTimeout(morphTimeoutRef.current);
    if (morphPageTimeoutRef.current) clearTimeout(morphPageTimeoutRef.current);
  }, [stopAutoLoop]);

  // Warm the browser's image cache for heavy hero images right away so they're
  // already decoded by the time a user navigates to that slide — fixes the
  // image staying blank on a cold load until the slide is revisited.
  useEffect(() => {
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    if (!isFullscreen) {
      lastWindowedScaleRef.current = rawCanvasScale;
    }
  }, [isFullscreen, rawCanvasScale]);

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat${isPageMorphing ? ' deck-morphing' : ''}`}
      style={{ backgroundImage: isPortraitSlide ? undefined : `url(${bgImage})`, backgroundColor: '#06163d' }}
    >
      <div className="w-full h-full relative">
        {/* Fullscreen calendar backdrop for the gallery slide (index 3) — covers the
            letterbox bars around the scaled canvas so background.jpg never shows through. */}
        {currentSlide === 3 && (
          <div className="absolute inset-0 pointer-events-none">
            <img src={calendarBg} alt="" aria-hidden="true" className="h-full w-full scale-105 object-cover blur-[7px]" />
            <div className="absolute inset-0 bg-[#06163d]/88" />
          </div>
        )}
        <div
          className="absolute left-1/2 top-1/2 overflow-hidden"
          style={{
            width: `${canvas.width}px`,
            height: `${canvas.height}px`,
            transform: `translate(-50%, -50%) scale(${finalCanvasScale})`,
            transformOrigin: 'center center',
          } as CSSProperties}
        >
          {/* Exiting slide — morph out */}
          {ExitingSlideComponent && exitingSlide !== null && (
            <div
              key={`exit-${exitingSlide}`}
              className="absolute inset-0 pointer-events-none animate-[morphPageOut_600ms_cubic-bezier(.22,1,.36,1)_both]"
              style={{ willChange: 'transform, opacity' }}
            >
              <ExitingSlideComponent />
            </div>
          )}

          {/* Current slide — morph in */}
          <div
            key={`slide-${currentSlide}`}
            className={`absolute inset-0 animate-[morphPageIn_600ms_cubic-bezier(.22,1,.36,1)_both] ${morphTransition === 'logo1617' && currentSlide === 24 ? 'morphing-logo1617' : ''
              }`}
            style={{ willChange: 'transform, opacity' }}
          >
            <CurrentSlideComponent />
          </div>

          {showCornerLogo && (
            <img
              key={`corner-logo-${currentSlide}`}
              src={chuluulyImg}
              alt="Чөлүүлье"
              className={`absolute right-10 top-8 z-30 h-14 max-w-[320px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]${currentSlide !== 1 ? ' animate-[cornerLogoIn_.6s_ease-out_both]' : ''}`}
            />
          )}
          {morphTransition === 'logo1617' && (
            <img
              src={chuluulyImg}
              alt="Чөлүүлье"
              className="absolute z-40 object-contain pointer-events-none animate-[slideLastMorph_.72s_cubic-bezier(.22,1,.36,1)_both]"
              style={{
                left: `${MORPH_LOGO_TO.left}px`,
                top: `${MORPH_LOGO_TO.top}px`,
                width: `${MORPH_LOGO_TO.width}px`,
                height: `${MORPH_LOGO_TO.height}px`,
                filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.35))',
              }}
            />
          )}
        </div>

        <style>{`
          .morphing-logo1617 .slide25-center-logo {
            opacity: 0;
          }
          .liquid-glass-canvas {
            transition: opacity 120ms ease;
          }
          .deck-morphing .liquid-glass-canvas {
            opacity: 0 !important;
          }
          @keyframes morphPageIn {
            from { opacity: 0; transform: scale(1.03) translateZ(0); }
            to   { opacity: 1; transform: scale(1)    translateZ(0); }
          }
          @keyframes morphPageOut {
            from { opacity: 1; transform: scale(1)    translateZ(0); }
            to   { opacity: 0; transform: scale(0.97) translateZ(0); }
          }
          @keyframes cornerLogoIn {
            from { opacity: 0; transform: translateX(-34px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideLastMorph {
            0% {
              left: ${MORPH_LOGO_TO.left}px;
              top: ${MORPH_LOGO_TO.top}px;
              width: ${MORPH_LOGO_TO.width}px;
              height: ${MORPH_LOGO_TO.height}px;
              opacity: 1;
              filter: blur(0px) drop-shadow(0 8px 24px rgba(0,0,0,0.35));
            }
            62% {
              opacity: 0.98;
              filter: blur(0px) drop-shadow(0 10px 28px rgba(0,0,0,0.34));
            }
            100% {
              left: ${MORPH_LOGO_LAST.left}px;
              top: ${MORPH_LOGO_LAST.top}px;
              width: ${MORPH_LOGO_LAST.width}px;
              height: ${MORPH_LOGO_LAST.height}px;
              opacity: 1;
              filter: blur(0px) drop-shadow(0 10px 30px rgba(0,0,0,0.28));
            }
          }
        `}</style>

        {/* ── Control bar — always visible ── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50 bg-black/45 backdrop-blur-md rounded-full px-4 py-2.5 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          {/* Prev */}
          <button
            onClick={prevSlide}
            className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { goToSlide(index); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }}
                className={`h-2 rounded-full transition-all ${index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>

          {/* Slide number */}
          <span className="text-white/70 text-sm font-black tabular-nums min-w-[42px] text-center">
            {currentSlide + 1} / {slides.length}
          </span>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-all duration-200 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-white/20" />

          {/* Grid view toggle */}
          <button
            onClick={toggleGridView}
            title={isGridView ? 'Grid view хаах (Esc)' : 'Grid view (Ctrl+G)'}
            className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all text-sm"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Fullscreen гаарах (Esc)' : 'Fullscreen (Ctrl+F)'}
            className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all text-sm"
          >
            {isFullscreen
              ? <Minimize2 className="w-5 h-5" />
              : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Grid view overlay */}
        {isGridView && (() => {
          return (
            <div className="absolute inset-0 z-[100] box-border overflow-x-hidden overflow-y-auto bg-slate-950 p-8">
              <div className="mx-auto grid w-full max-w-[1800px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                {slides.map((_, index) => {
                  const isActive = index === currentSlide;
                  const meta = SLIDE_THUMBNAILS[index] ?? {
                    title: `Slide ${index + 1}`,
                    subtitle: '',
                    accent: '#2ec5ff',
                  };
                  // Keep thumbnails static and lightweight. Rendering live slide
                  // components here runs every animation/countup at once and makes
                  // grid view sluggish on presentation screens.
                  return (
                    <div
                      key={index}
                      role="button"
                      tabIndex={0}
                      onClick={() => { goToSlide(index); setIsGridView(false); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          goToSlide(index);
                          setIsGridView(false);
                          if (autoLoop) { stopAutoLoop(); startAutoLoop(); }
                        }
                      }}
                      className={`group relative aspect-[16/9] overflow-hidden rounded-lg border-2 transition-colors cursor-pointer ${isActive ? 'border-yellow-400 ring-4 ring-yellow-400/50' : 'border-white/20 hover:border-white/45'}`}
                    >
                      <div className="absolute inset-0 bg-[#06163d]">
                        <img src={bgImage} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-45" />
                        <div className="absolute inset-0 bg-[#020611]/55" />
                      </div>
                      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/50">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="h-1 w-12 rounded-full" style={{ background: meta.accent }} />
                      </div>
                      <div className="absolute inset-x-4 bottom-4">
                        <p className="text-[20px] leading-[1.02] font-black text-white">{meta.title}</p>
                        {meta.subtitle && (
                          <p className="mt-1 text-[12px] leading-tight font-bold text-white/58">{meta.subtitle}</p>
                        )}
                      </div>
                      <div
                        className="absolute inset-x-0 bottom-0 h-1 origin-left"
                        style={{ background: isActive ? '#facc15' : meta.accent }}
                      />
                      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: `inset 0 0 0 999px ${meta.accent}10` }} />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[58px] font-black leading-none text-white/[0.045]">
                        {index + 1}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="fixed right-6 top-6 flex max-w-[calc(100vw-48px)] gap-4">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm border border-white/20 hidden sm:block">
                  Press G to exit grid view
                </div>
                <button
                  onClick={() => setIsGridView(false)}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all border border-white/20"
                >
                  Exit Grid View
                </button>
              </div>
            </div>
          );
        })()}

        {/* Auto-loop progress bar */}
        {autoLoop && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/10 z-50">
            <div
              className="h-full bg-primary transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

      </div>
    </div>
  );
}
