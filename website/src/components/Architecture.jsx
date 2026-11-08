import React from 'react';
import { Cpu, ShieldCheck, Layers, ArrowRight, Binary } from 'lucide-react';

export default function Architecture({ currentMode }) {
  const steps = [
    { title: 'Multiboot2 Entry', desc: 'boot.S preserves EAX magic (0x36D76289) and EBX MBI pointer in ESI/EDI registers.' },
    { title: 'BSS Stack & FPU', desc: 'Sets 16 KiB BSS stack. Enables x87 FPU via CR0 manipulation with zero register clobber.' },
    { title: 'Driver Init', desc: 'Initializes COM1 serial port (38400 baud) and VGA 80x25 color text buffer at 0xB8000.' },
    { title: 'Round Robin Pass', desc: 'Executes Phase 1 workload simulation, logging telemetry CSV over COM1 port I/O.' },
    { title: 'Neural Inference', desc: 'Evaluates 5 features per process through 5 to 8 to 1 MLP using Taylor series Sigmoid math.' },
    { title: 'Comparison Output', desc: 'Renders side by side metric comparison to VGA and serial, then halts CPU via HLT.' }
  ];

  return (
    <section id="architecture" className="py-20 px-4 lg:px-8 bg-[#f5f5f7] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
            Kernel Pipeline and Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Bare Metal x86 System Architecture.
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed">
            {currentMode === 'architect'
              ? 'Complete execution path from Multiboot2 entry point through freestanding C neural inference.'
              : 'How the operating system starts up, sets up hardware memory, and runs the neural scheduler step by step.'}
          </p>
        </div>

        {/* Boot Sequence Pipeline Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, idx) => (
            <div 
              key={idx} 
              className="appleCardLight bg-[#ffffff] p-6 space-y-3 hover:border-[#1d4ed8] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-[#1d4ed8] tracking-wider">
                  PHASE 0{idx + 1}
                </span>
                <Layers className="w-4 h-4 text-[#86868b]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight">
                {s.title}
              </h3>
              <p className="text-[15px] text-[#86868b] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture Spec Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="appleCardLight bg-[#ffffff] p-7 space-y-3">
            <div className="flex items-center gap-2.5 text-[#1d4ed8]">
              <Binary className="w-5 h-5" />
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">Zero Malloc Guarantee</h3>
            </div>
            <p className="text-[15px] text-[#86868b] leading-relaxed">
              Standard C runtimes demand OS heap allocators. NeuroSched compiles all neural weight matrices statically into <code className="text-[#1d4ed8] font-mono text-xs">.rodata</code> and stack frames.
            </p>
          </div>

          <div className="appleCardLight bg-[#ffffff] p-7 space-y-3">
            <div className="flex items-center gap-2.5 text-[#1d4ed8]">
              <Cpu className="w-5 h-5" />
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">x87 Hardware FPU</h3>
            </div>
            <p className="text-[15px] text-[#86868b] leading-relaxed">
              Enables native x87 floating point math during boot via CR0 register flags (<code className="text-[#1d4ed8] font-mono text-xs">EM=0, MP=1</code>) without software emulation penalties.
            </p>
          </div>

          <div className="appleCardLight bg-[#ffffff] p-7 space-y-3">
            <div className="flex items-center gap-2.5 text-[#1d4ed8]">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">Confidence Fallback</h3>
            </div>
            <p className="text-[15px] text-[#86868b] leading-relaxed">
              Structural safety: when neural network output confidence drops below <code className="text-[#1d4ed8] font-mono text-xs">0.65f</code>, the kernel falls back to Round Robin for 100% deterministic stability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
