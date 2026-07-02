import { useEffect, useState } from 'react';

// Capping updates to ~30fps is visually indistinguishable from 60fps for a counting
// number, but halves the React re-renders + layout work the animation costs.
const FRAME_INTERVAL_MS = 1000 / 30;

// Returns [value, settled]. `settled` flips to true once the count-up has reached
// its target — callers should gate expensive paint-only styles (text-shadow glows,
// etc.) on it so that cost isn't paid on every frame while the number is changing.
export function useCountUp(target: number, delay = 0, duration = 1400): [number, boolean] {
  const [state, setState] = useState<{ value: number; settled: boolean }>({ value: 0, settled: false });

  useEffect(() => {
    let raf = 0;
    let lastUpdate = 0;
    const startAt = performance.now() + delay;
    const endAt = startAt + duration;
    setState({ value: 0, settled: false });

    const tick = (now: number) => {
      if (now - lastUpdate >= FRAME_INTERVAL_MS || now >= endAt) {
        lastUpdate = now;
        const p = Math.min(Math.max((now - startAt) / duration, 0), 1);
        setState({ value: target * (1 - Math.pow(1 - p, 3)), settled: p >= 1 });
      }
      if (now < endAt) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay, duration]);

  return [state.value, state.settled];
}

// Cheaper than toLocaleString's Intl-backed formatting, which matters when called
// at animation-frame cadence.
export function formatCountUp(value: number, decimals = 0): string {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}
