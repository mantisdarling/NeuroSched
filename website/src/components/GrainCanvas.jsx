import React from 'react';

/**
 * Global background texture overlay using cellular memory partition geometry.
 * Opacity calibrated to 0.08 with multiply blending to preserve black and white contrast.
 * Pointer events none to ensure zero interference with interactive elements.
 */
export default function GrainCanvas() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        backgroundImage: 'url(/textures/lava-rock.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.08,
        mixBlendMode: 'multiply',
      }}
    />
  );
}
