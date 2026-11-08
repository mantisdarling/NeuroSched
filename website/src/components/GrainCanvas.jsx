import { useEffect, useRef } from 'react';

/**
 * Animated film grain canvas overlay.
 * Renders a new noise frame every ~100ms for the tactile Awwwards premium look.
 * pointer-events: none so it never blocks interaction.
 */
export default function GrainCanvas() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawGrain = (ts) => {
      if (ts - lastRef.current < 80) {
        rafRef.current = requestAnimationFrame(drawGrain);
        return;
      }
      lastRef.current = ts;

      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 28; // alpha: ~11% per pixel, stacks to visible grain
      }
      ctx.putImageData(imageData, 0, 0);
      rafRef.current = requestAnimationFrame(drawGrain);
    };

    rafRef.current = requestAnimationFrame(drawGrain);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'overlay',
        opacity: 1,
      }}
    />
  );
}
