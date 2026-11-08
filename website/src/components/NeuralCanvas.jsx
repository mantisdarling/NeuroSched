import React, { useRef, useEffect } from 'react';

export default function NeuralCanvas({ currentConfidence, isRunning, activeProcess }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Define 5 to 8 to 1 neural architecture layout
    const inputNodes = [
      { label: 'waitTicks', y: 40 },
      { label: 'remainingBurst', y: 90 },
      { label: 'priority', y: 140 },
      { label: 'ioBound', y: 190 },
      { label: 'ioYieldCount', y: 240 }
    ];

    const hiddenNodes = Array.from({ length: 8 }, (_, i) => ({
      y: 25 + i * 34
    }));

    const outputNode = { label: 'score', y: 140 };

    const inputX = 60;
    const hiddenX = 220;
    const outputX = 380;

    let particleOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Layer 1 Connections
      inputNodes.forEach((inp) => {
        hiddenNodes.forEach((hid) => {
          ctx.beginPath();
          ctx.moveTo(inputX, inp.y);
          ctx.lineTo(hiddenX, hid.y);
          ctx.strokeStyle = isRunning ? 'rgba(59, 130, 246, 0.25)' : 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Draw Layer 2 Connections
      hiddenNodes.forEach((hid) => {
        ctx.beginPath();
        ctx.moveTo(hiddenX, hid.y);
        ctx.lineTo(outputX, outputNode.y);
        ctx.strokeStyle = isRunning ? 'rgba(59, 130, 246, 0.35)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw Particles moving along synapses if running
      if (isRunning) {
        particleOffset = (particleOffset + 0.02) % 1;

        inputNodes.forEach((inp) => {
          hiddenNodes.forEach((hid) => {
            const px = inputX + (hiddenX - inputX) * particleOffset;
            const py = inp.y + (hid.y - inp.y) * particleOffset;

            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#3b82f6';
            ctx.fill();
          });
        });
      }

      // Draw Input Nodes
      inputNodes.forEach((inp) => {
        ctx.beginPath();
        ctx.arc(inputX, inp.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#272729';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        ctx.font = '10px -apple-system, sans-serif';
        ctx.fillStyle = '#86868b';
        ctx.fillText(inp.label, inputX - 52, inp.y + 3);
      });

      // Draw Hidden Nodes
      hiddenNodes.forEach((hid) => {
        ctx.beginPath();
        ctx.arc(hiddenX, hid.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = isRunning ? '#3b82f6' : '#272729';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();
      });

      // Draw Output Node
      const isFallback = currentConfidence < 0.65;
      ctx.beginPath();
      ctx.arc(outputX, outputNode.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = isFallback ? '#d97706' : '#16a34a';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      ctx.font = '11px -apple-system, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`score: ${(currentConfidence * 100).toFixed(0)}%`, outputX + 16, outputNode.y + 4);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, currentConfidence]);

  return (
    <div className="w-full flex justify-center py-2 bg-[#1d1d1f] rounded-[14px]">
      <canvas
        ref={canvasRef}
        width={480}
        height={280}
        className="max-w-full"
      />
    </div>
  );
}
