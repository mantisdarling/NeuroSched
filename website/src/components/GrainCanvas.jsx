import { useEffect, useRef } from 'react';

/**
 * Static film grain canvas overlay.
 *
 * Draws once on mount — no animation, no RAF loop.
 * No blend mode: pure alpha compositing so underlying colors stay bold and true.
 * White stays white, black stays black — only a fine paper-like grain texture is added.
 *
 * Regenerates on viewport resize to fill the new dimensions.
 */
export default function GrainCanvas() {
  const canvasRef = useRef(null);

  const draw = (canvas) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      data[i]     = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 22; // ~8.6% alpha — visible texture, no color distortion
    }
    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    draw(canvas);
    const onResize = () => draw(canvas);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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
      }}
    />
  );
}
