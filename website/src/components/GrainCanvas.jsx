import { useEffect, useRef } from 'react';

/**
 * Dual-layer animated film grain canvas overlay.
 *
 * Layer 1 (multiply): darkens bright/light surfaces — makes grain visible on white backgrounds.
 * Layer 2 (screen):   lightens dark surfaces — makes grain visible on black/dark backgrounds.
 *
 * This combination produces consistent tactile grain across all background luminances,
 * matching the aesthetic of Awwwards SOTD and Basement Studio style sites.
 *
 * Redraws every ~80ms. pointer-events: none; z-index: 9999 — never blocks interaction.
 */
export default function GrainCanvas() {
  const multiplyRef = useRef(null);
  const screenRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(0);

  useEffect(() => {
    const cMul = multiplyRef.current;
    const cScr = screenRef.current;
    if (!cMul || !cScr) return;

    const ctxMul = cMul.getContext('2d');
    const ctxScr = cScr.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cMul.width = w;  cMul.height = h;
      cScr.width = w;  cScr.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawGrain = (ts) => {
      if (ts - lastRef.current < 80) {
        rafRef.current = requestAnimationFrame(drawGrain);
        return;
      }
      lastRef.current = ts;

      const total = w * h * 4;

      // Multiply layer: dark pixels only (0-180) — shows up on light backgrounds
      const mulData = ctxMul.createImageData(w, h);
      const md = mulData.data;
      for (let i = 0; i < total; i += 4) {
        const v = (Math.random() * 180) | 0;
        md[i] = v; md[i + 1] = v; md[i + 2] = v;
        md[i + 3] = 38;
      }
      ctxMul.putImageData(mulData, 0, 0);

      // Screen layer: light pixels only (80-255) — shows up on dark backgrounds
      const scrData = ctxScr.createImageData(w, h);
      const sd = scrData.data;
      for (let i = 0; i < total; i += 4) {
        const v = 80 + ((Math.random() * 175) | 0);
        sd[i] = v; sd[i + 1] = v; sd[i + 2] = v;
        sd[i + 3] = 32;
      }
      ctxScr.putImageData(scrData, 0, 0);

      rafRef.current = requestAnimationFrame(drawGrain);
    };

    rafRef.current = requestAnimationFrame(drawGrain);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const baseStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
  };

  return (
    <>
      <canvas ref={multiplyRef} aria-hidden="true" style={{ ...baseStyle, mixBlendMode: 'multiply' }} />
      <canvas ref={screenRef}   aria-hidden="true" style={{ ...baseStyle, mixBlendMode: 'screen' }} />
    </>
  );
}
