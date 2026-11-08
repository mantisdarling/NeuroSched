import React, { useState, useEffect } from 'react';

export default function Hero({ currentMode, onNavigate }) {
  const [step, setStep] = useState(0);

  const bootLogs = [
    { text: '# Bootstrapping NeuroSched kernel binary...', color: '#7a7a7a' },
    { text: '[OK]  Multiboot2 boot verified — Magic: 0x36D76289 in EAX', color: '#16a34a' },
    { text: '[OK]  VGA text mode initialized @ 0xB8000 (80×25)', color: '#16a34a' },
    { text: '[OK]  COM1 serial port configured — 38400 baud 8N1 @ 0x3F8', color: '#16a34a' },
    { text: '[OK]  x87 FPU enabled — CR0.EM=0, CR0.MP=1, CR0.NE=1', color: '#16a34a' },
    { text: '[INFO] Workload: 10 synthetic PCB processes loaded', color: '#7a7a7a' },
    { text: 'Phase 1  Round Robin baseline complete   (64 ticks)', color: '#d97706' },
    { text: 'Phase 2  Neural scheduler complete       (64 ticks)', color: '#d97706' },
    { text: '[RESULT] NeuroSched achieved 16.8% lower average wait time.', color: '#2997ff' },
    { text: 'NeuroSched v1.0 — halting CPU.', color: '#cccccc' },
  ];

  useEffect(() => {
    if (step >= bootLogs.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 420);
    return () => clearTimeout(t);
  }, [step, bootLogs.length]);

  return (
    /* ── Hero tile: full-bleed white ── */
    <section className="tile-light border-b border-[#e0e0e0] overflow-hidden">
      <div className="max-w-[980px] mx-auto text-center">

        {/* Category eyebrow */}
        <p
          className="text-[#0066cc] mb-4"
          style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.374px' }}
        >
          Operating System
        </p>

        {/* Hero headline */}
        <h1
          className="type-hero text-[#1d1d1f] max-w-[820px] mx-auto mb-5"
          style={{ fontFamily: '"SF Pro Display", system-ui, -apple-system, sans-serif' }}
        >
          An operating system driven by an embedded neural network.
        </h1>

        {/* Lead paragraph */}
        <p className="type-lead text-[#1d1d1f] max-w-[640px] mx-auto mb-8">
          {currentMode === 'architect' ? (
            <>
              32-bit x86 bare-metal kernel. 5–8–1 MLP in freestanding C.
              Zero malloc. Native x87 FPU acceleration. Confidence-gated fallback
              to Round Robin when neural confidence drops below 0.65.
            </>
          ) : (
            <>
              What if your computer could predict which task needs the processor
              next? NeuroSched trains a neural network to organize running tasks,
              cutting average wait times by{' '}
              <strong style={{ color: '#1d1d1f', fontWeight: 600 }}>16.8%</strong>.
            </>
          )}
        </p>

        {/* CTA pair */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={() => onNavigate && onNavigate('simulator')}
            className="btn-primary"
          >
            Launch Simulator
          </button>
          <button
            onClick={() => onNavigate && onNavigate('architecture')}
            className="btn-ghost"
          >
            Explore Architecture
          </button>
        </div>

        {/* Metric trio */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[700px] mx-auto mb-16 text-left">
          {[
            {
              label: 'Avg. Wait Time',
              value: '−16.8%',
              sub: 'Empirical over Round Robin in headless QEMU i386.',
            },
            {
              label: 'Heap Allocation',
              value: '0 Bytes',
              sub: 'All weights compiled into .rodata — no malloc, ever.',
            },
            {
              label: 'Kernel Safety',
              value: '100%',
              sub: 'Hard confidence gate falls back to Round Robin below 0.65.',
            },
          ].map((m) => (
            <div key={m.label} className="card-stat">
              <p
                className="text-[12px] font-semibold text-[#7a7a7a] uppercase tracking-widest mb-2"
                style={{ letterSpacing: '0.08em' }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontFamily: '"SF Pro Display", system-ui, sans-serif',
                  fontSize: 32,
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#1d1d1f',
                  marginBottom: 8,
                }}
              >
                {m.value}
              </p>
              <p className="type-caption text-[#7a7a7a]">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Terminal render — only place product-shadow is used */}
        <div className="terminal product-shadow max-w-[760px] mx-auto text-left">
          {/* Title bar */}
          <div className="terminal-bar">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            <span className="ml-3 text-[12px] text-[#7a7a7a]">
              COM1 Serial Console — QEMU i386
            </span>
            <button
              onClick={() => setStep(0)}
              className="ml-auto text-[12px] text-[#2997ff] hover:underline"
            >
              Replay
            </button>
          </div>

          {/* Output */}
          <div className="p-6 min-h-[240px] space-y-1 overflow-x-auto">
            {bootLogs.slice(0, step).map((log, i) => (
              <div
                key={i}
                className="mono text-[12.5px] leading-relaxed whitespace-nowrap"
                style={{ color: log.color }}
              >
                {log.text}
              </div>
            ))}
            {step < bootLogs.length && (
              <span className="cursor-blink" aria-hidden="true" />
            )}
          </div>

          {/* Status strip */}
          <div className="bg-[#272729] border-t border-[#3a3a3c] px-6 py-2.5 flex items-center justify-between mono text-[11px] text-[#7a7a7a]">
            <span>i686-elf · Protected Mode</span>
            <span style={{ color: '#16a34a' }}>Multiboot2 Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
