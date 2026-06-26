import { useState, useEffect, useRef, useCallback } from 'react';
import type { CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, LayoutGrid, X } from 'lucide-react';
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
import { Slide15 } from './components/Slide15';
import { Slide16 } from './components/Slide16';
import { Slide17 } from './components/Slide17';
import bgImage from '../imports/background.jpg';
import chuluulyImg from '../imports/chuluuly.png';
import slide1HeroImg from '../imports/slide_1.png';
import slide2HeroImg from '../imports/slide_2.png';
import slide3HeroImg from '../imports/slide_3.png';

const PRELOAD_IMAGES = [slide1HeroImg, slide2HeroImg, slide3HeroImg];

const AUTO_LOOP_INTERVAL = 15_000;
const LANDSCAPE_CANVAS = { width: 1920, height: 1028 };
const PORTRAIT_CANVAS = { width: 864, height: 1028 };
const CHULUULY_ASPECT_RATIO = 7388 / 1398;
const MORPH_DURATION_MS = 720;
const MORPH_PAGE_MS = 620;
const MORPH_LOGO_FROM = {
  left: (LANDSCAPE_CANVAS.width - 88 * CHULUULY_ASPECT_RATIO) / 2,
  top: 330,
  width: 88 * CHULUULY_ASPECT_RATIO,
  height: 88,
};
const MORPH_LOGO_TO = {
  left: LANDSCAPE_CANVAS.width - 40 - 56 * CHULUULY_ASPECT_RATIO,
  top: 32,
  width: 56 * CHULUULY_ASPECT_RATIO,
  height: 56,
};
const MORPH_LOGO_17 = {
  left: (LANDSCAPE_CANVAS.width - 100 * CHULUULY_ASPECT_RATIO) / 2,
  top: 298,
  width: 100 * CHULUULY_ASPECT_RATIO,
  height: 100,
};
type MorphTransition = 'logo12' | 'logo1617' | null;

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
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15,
    Slide16,
    Slide17,
  ];
  const CurrentSlideComponent = slides[currentSlide];
  const ExitingSlideComponent = exitingSlide !== null ? slides[exitingSlide] : null;
  // Show corner logo on slides 2–16 (indices 1–15), except during logo morphs that take over rendering
  const showCornerLogo =
    currentSlide >= 1 &&
    currentSlide <= 15 &&
    !(
      (currentSlide === 1 && morphTransition === 'logo12') ||
      (currentSlide === 15 && morphTransition === 'logo1617')
    );
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
    if (fromSlide === 0 && targetSlide === 1) {
      nextMorph = 'logo12';
    } else if (fromSlide === 15 && targetSlide === 16) {
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

  // Keyboard navigation — also handles presentation remotes (PageDown/PageUp)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const goNext = e.key === 'ArrowRight' || e.key === 'PageDown';
      const goPrev = e.key === 'ArrowLeft' || e.key === 'PageUp';
      if (goNext) { e.preventDefault(); nextSlide(); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }
      if (goPrev) { e.preventDefault(); prevSlide(); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }
      if (e.key === 'F5' || ((e.metaKey || e.ctrlKey) && e.key === 'f')) { e.preventDefault(); toggleFullscreen(); }
      if ((e.metaKey || e.ctrlKey) && e.key === 'g') { e.preventDefault(); toggleGridView(); }
      if (e.key === 'Escape') {
        if (isGridView) { setIsGridView(false); return; }
        if (isFullscreen) { document.exitFullscreen().catch(() => { }); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
      className="w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: isPortraitSlide ? undefined : `url(${bgImage})`, backgroundColor: '#06163d' }}
    >
      <div className="w-full h-full relative">
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
            className={`absolute inset-0 animate-[morphPageIn_600ms_cubic-bezier(.22,1,.36,1)_both] ${
              morphTransition === 'logo1617' && currentSlide === 16 ? 'morphing-logo1617' : ''
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
          {morphTransition === 'logo12' && (
            <img
              src={chuluulyImg}
              alt="Чөлүүлье"
              className="absolute z-40 object-contain pointer-events-none animate-[slide1ToSlide2Morph_.72s_cubic-bezier(.22,1,.36,1)_both]"
              style={{
                left: `${MORPH_LOGO_FROM.left}px`,
                top: `${MORPH_LOGO_FROM.top}px`,
                width: `${MORPH_LOGO_FROM.width}px`,
                height: `${MORPH_LOGO_FROM.height}px`,
                filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.35))',
              }}
            />
          )}
          {morphTransition === 'logo1617' && (
            <img
              src={chuluulyImg}
              alt="Чөлүүлье"
              className="absolute z-40 object-contain pointer-events-none animate-[slide16ToSlide17Morph_.72s_cubic-bezier(.22,1,.36,1)_both]"
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
          .morphing-logo1617 .slide17-center-logo {
            opacity: 0;
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
          @keyframes slide1ToSlide2Morph {
            0% {
              left: ${MORPH_LOGO_FROM.left}px;
              top: ${MORPH_LOGO_FROM.top}px;
              width: ${MORPH_LOGO_FROM.width}px;
              height: ${MORPH_LOGO_FROM.height}px;
              opacity: 1;
              filter: blur(0px) drop-shadow(0 12px 32px rgba(0,0,0,0.38));
            }
            60% {
              opacity: 0.98;
              filter: blur(0px) drop-shadow(0 10px 26px rgba(0,0,0,0.34));
            }
            100% {
              left: ${MORPH_LOGO_TO.left}px;
              top: ${MORPH_LOGO_TO.top}px;
              width: ${MORPH_LOGO_TO.width}px;
              height: ${MORPH_LOGO_TO.height}px;
              opacity: 1;
              filter: blur(0px) drop-shadow(0 8px 24px rgba(0,0,0,0.35));
            }
          }
          @keyframes slide16ToSlide17Morph {
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
              left: ${MORPH_LOGO_17.left}px;
              top: ${MORPH_LOGO_17.top}px;
              width: ${MORPH_LOGO_17.width}px;
              height: ${MORPH_LOGO_17.height}px;
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
          <div className="flex gap-1.5 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { goToSlide(index); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'w-6 bg-primary'
                  : 'w-1.5 bg-white/30 hover:bg-white/55'
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
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 ${isGridView ? 'bg-primary/30 border-primary/50' : 'bg-white/10 border-white/20 hover:bg-white/25'}`}
          >
            <LayoutGrid className={`w-4 h-4 ${isGridView ? 'text-primary' : 'text-white/80'}`} />
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Fullscreen гаарах (Esc)' : 'Fullscreen (Ctrl+F)'}
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200 active:scale-95"
          >
            {isFullscreen
              ? <Minimize2 className="w-4 h-4 text-white/80" />
              : <Maximize2 className="w-4 h-4 text-white/80" />}
          </button>
        </div>

        {/* Grid view overlay */}
        {isGridView && (() => {
          const cols = 4;
          const gridPad = 64;
          const gapPx = 16;
          const thumbW = Math.floor((viewport.width - gridPad - gapPx * (cols - 1)) / cols);
          const thumbH = Math.round(thumbW * (1028 / 1920));
          const thumbScale = thumbW / 1920;
          return (
            <div className="absolute inset-0 z-[100] bg-black/85 backdrop-blur-sm flex flex-col">
              <style>{`.thumb-freeze, .thumb-freeze * { animation: none !important; transition: none !important; animation-play-state: paused !important; }`}</style>

              {/* Header */}
              <div className="flex items-center justify-between px-8 py-4 border-b border-white/10 flex-shrink-0">
                <span className="text-white font-bold text-base tracking-wide">Бүх слайдууд</span>
                <button
                  onClick={() => setIsGridView(false)}
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/25 transition-all duration-200"
                >
                  <X className="w-4 h-4 text-white/80" />
                </button>
              </div>

              {/* Thumbnails grid */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-8">
                <div
                  className="grid gap-4"
                  style={{ gridTemplateColumns: `repeat(${cols}, ${thumbW}px)` }}
                >
                  {slides.map((SlideComponent, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <button
                        key={index}
                        onClick={() => { goToSlide(index); setIsGridView(false); if (autoLoop) { stopAutoLoop(); startAutoLoop(); } }}
                        className={`flex flex-col gap-2 rounded-xl p-1.5 ${isActive ? 'ring-2 ring-primary' : ''}`}
                      >
                        <div
                          className="rounded-md overflow-hidden relative flex-shrink-0"
                          style={{ width: thumbW, height: thumbH }}
                        >
                          <div
                            className="thumb-freeze"
                            style={{
                              width: 1920,
                              height: 1028,
                              transform: `scale(${thumbScale})`,
                              transformOrigin: 'top left',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              pointerEvents: 'none',
                            }}
                          >
                            <SlideComponent />
                          </div>
                        </div>
                        <span className={`text-xs font-semibold text-center pb-0.5 ${isActive ? 'text-primary' : 'text-white/40'}`}>
                          {index + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
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
