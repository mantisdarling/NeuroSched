import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ArrowRight, Play, Cpu, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function Hero({ currentMode }) {
  const [terminalStep, setTerminalStep] = useState(0);

  const bootLogs = [
    "[OK] Multiboot2 boot verified (Magic: 0x36D76289)",
    "[OK] VGA terminal initialized (80x25 text mode @ 0xB8000)",
    "[OK] COM1 serial port configured (38400 baud, 8N1 @ 0x3F8)",
    "[OK] x87 FPU enabled (CR0.EM=0, CR0.MP=1)",
    "[INFO] Workload: 10 synthetic processes loaded",
    ">>> Phase 1: Round Robin Simulation complete (64 ticks)",
    ">>> Phase 2: Neural Scheduler Simulation complete (64 ticks)",
    "[RESULT] Neural scheduler achieved 16.8% lower avg wait time!",
    ">>> NeuroSched v1.0 complete. Halting CPU."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalStep((prev) => (prev < bootLogs.length ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(timer);
  }, [bootLogs.length]);

  return (
    <section className="bg-[#ffffff] text-[#1d1d1f] pt-16 pb-20 px-4 lg:px-8 border-b border-[#e0e0e0] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        
        {/* Subtle Category Pill (No dots) */}
        <div className="inline-flex items-center gap-3 bg-[#f5f5f7] border border-[#e0e0e0] px-4 py-1.5 rounded-full text-[14px] text-[#1d1d1f]">
          <span className="font-semibold text-[#1d4ed8]">NeuroSched</span>
          <span className="text-[#86868b]">|</span>
          <span className="text-[#86868b]">Bare Metal x86 Kernel Architecture</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.07] max-w-4xl mx-auto">
          An operating system driven by an embedded neural network.
        </h1>

        {/* Lead Subtitle */}
        <p className="text-[20px] sm:text-[24px] text-[#86868b] font-normal leading-[1.3] max-w-3xl mx-auto tracking-tight">
          {currentMode === 'architect' ? (
            <>
              Replaces static Round Robin scheduling heuristics with a freestanding C neural network (5 to 8 to 1 MLP). 
              Zero dynamic memory allocations, native x87 hardware acceleration, and structure level confidence fallbacks.
            </>
          ) : (
            <>
              What if your computer core system could predict which task needs the processor next? 
              NeuroSched trains a neural network to organize running tasks, reducing waiting times by <strong className="text-[#1d1d1f] font-semibold">16.8%</strong>.
            </>
          )}
        </p>

        {/* Dual Pill Action CTAs with Royal Cobalt Blue #1d4ed8 */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#simulator"
            className="appleBtnPrimary"
          >
            <span>Launch Live Simulator</span>
            <ChevronRight className="w-4 h-4 ml-0.5" />
          </a>
          <a
            href="#architecture"
            className="appleBtnSecondary"
          >
            <span>Explore Architecture</span>
          </a>
        </div>

        {/* Three Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto pt-4 text-left">
          <div className="appleCardLight p-6">
            <div className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">
              Avg Wait Time
            </div>
            <div className="text-3xl font-semibold text-[#1d1d1f] mt-1.5 tracking-tight">
              16.8% lower
            </div>
            <p className="text-[14px] text-[#86868b] mt-1 leading-normal">
              Empirical speedup over standard Round Robin in QEMU.
            </p>
          </div>

          <div className="appleCardLight p-6">
            <div className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">
              Heap Allocation
            </div>
            <div className="text-3xl font-semibold text-[#1d1d1f] mt-1.5 tracking-tight">
              0 Bytes
            </div>
            <p className="text-[14px] text-[#86868b] mt-1 leading-normal">
              Static stack and <code className="text-[#1d4ed8] font-mono text-xs">.rodata</code> matrix layout.
            </p>
          </div>

          <div className="appleCardLight p-6">
            <div className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">
              Kernel Safety
            </div>
            <div className="text-3xl font-semibold text-[#1d1d1f] mt-1.5 tracking-tight">
              100%
            </div>
            <p className="text-[14px] text-[#86868b] mt-1 leading-normal">
              Instant fallback to Round Robin when confidence drops.
            </p>
          </div>
        </div>

        {/* Centerpiece Hardware Product Render: Serial Console */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="appleCardDark appleProductShadow overflow-hidden text-left border border-[#3a3a3c]">
            
            {/* Terminal Header */}
            <div className="bg-[#1d1d1f] border-b border-[#333336] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
              </div>
              <div className="text-[13px] font-mono text-[#86868b] flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>COM1 Serial Console — QEMU i386 Target</span>
              </div>
              <button 
                onClick={() => setTerminalStep(0)}
                className="text-[12px] text-[#3b82f6] hover:underline font-mono"
              >
                Replay
              </button>
            </div>

            {/* Console Output */}
            <div className="p-6 font-mono text-[13px] leading-relaxed space-y-2 bg-[#1d1d1f] text-[#ffffff] min-h-[260px] overflow-x-auto">
              <div className="text-[#86868b]"># Bootstrapping NeuroSched kernel binary...</div>
              {bootLogs.slice(0, terminalStep).map((log, idx) => {
                let color = "text-[#ffffff]";
                if (log.includes("[OK]")) color = "text-[#16a34a]";
                if (log.includes("[RESULT]")) color = "text-[#3b82f6] font-semibold";
                if (log.includes("[INFO]")) color = "text-[#86868b]";
                if (log.includes(">>>")) color = "text-[#d97706]";
                return (
                  <div key={idx} className={color}>
                    {log}
                  </div>
                );
              })}
              {terminalStep < bootLogs.length && (
                <div className="inline-block w-2 h-4 bg-[#3b82f6] animate-pulse align-middle" />
              )}
            </div>

            {/* Hardware Status Strip */}
            <div className="bg-[#272729] border-t border-[#3a3a3c] px-6 py-2.5 flex items-center justify-between text-[12px] font-mono text-[#86868b]">
              <span>Architecture: i686 elf</span>
              <span className="text-[#16a34a] flex items-center gap-1.5 font-medium">
                Multiboot2 Handshake Verified
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
