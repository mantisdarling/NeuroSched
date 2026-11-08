import React from 'react';
import Architecture from '../components/Architecture';
import CodeExplorer from '../components/CodeExplorer';
import { ArrowLeft, Cpu, ShieldCheck, Layers, BookOpen, Terminal, ChevronRight } from 'lucide-react';

export default function ArchitectureView({ currentMode, onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Page Header with Breadcrumbs */}
      <section className="bg-[#ffffff] border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">Architecture</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Kernel & Neural Engine Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              32-Bit x86 Protected Mode & Embedded Neural Engine.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Explore the low-level design invariants of NeuroSched: 0 Bytes heap allocation, native x87 FPU coprocessor math, 5-element PCB state vectors, and 6-term Taylor polynomial sigmoid approximations.
            </p>
          </div>

          {/* Quick Sub-navigation Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-[13px]">
            <a href="#matrix" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Feature Matrix
            </a>
            <a href="#fpu" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              x87 FPU Setup
            </a>
            <a href="#code" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Source Explorer
            </a>
            <button 
              onClick={() => onNavigate('docs')} 
              className="px-3.5 py-1.5 rounded-full bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Docs</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Architecture Core Visualizer */}
      <div id="matrix">
        <Architecture currentMode={currentMode} />
      </div>

      {/* In-depth Hardware Registers Strip */}
      <section id="fpu" className="py-16 px-4 lg:px-8 bg-[#272729] text-white border-b border-[#3a3a3c]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-2">
            <div className="text-[12px] font-semibold text-[#3b82f6] uppercase tracking-wider">
              Silicon Coprocessor Enablement
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              x87 FPU Hardware Registers & Multiboot2 Handshake
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px]">
            <div className="appleCardDark bg-[#1d1d1f] p-6 space-y-3 border border-[rgba(255,255,255,0.08)]">
              <div className="text-[#3b82f6] font-mono text-xs uppercase tracking-wider">Multiboot2 Signature</div>
              <div className="text-2xl font-mono font-bold text-white">0x36D76289</div>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                GRUB passes control with EAX set to this magic signature and EBX pointing to the Multiboot information structure.
              </p>
            </div>

            <div className="appleCardDark bg-[#1d1d1f] p-6 space-y-3 border border-[rgba(255,255,255,0.08)]">
              <div className="text-[#f59e0b] font-mono text-xs uppercase tracking-wider">CR0 Flags Setup</div>
              <div className="text-2xl font-mono font-bold text-white">EM=0, MP=1, NE=1</div>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                Clearing CR0.EM prevents unhandled Interrupt 7 (#NM) software traps, routing floating-point instructions directly to silicon coprocessor registers.
              </p>
            </div>

            <div className="appleCardDark bg-[#1d1d1f] p-6 space-y-3 border border-[rgba(255,255,255,0.08)]">
              <div className="text-[#16a34a] font-mono text-xs uppercase tracking-wider">Zero Heap Layout</div>
              <div className="text-2xl font-mono font-bold text-white">.rodata (228 Bytes)</div>
              <p className="text-[#86868b] text-[13px] leading-relaxed">
                All 57 weights (W1[5][8], B1[8], W2[8][1], B2[1]) are compiled directly into static binary sections. 0 Bytes malloc in kernel space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Code Explorer */}
      <div id="code">
        <CodeExplorer />
      </div>

      {/* Next Step Callout */}
      <section className="py-14 px-4 lg:px-8 bg-[#ffffff] border-b border-[#e0e0e0] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
            See the Architecture in Action
          </h3>
          <p className="text-[#86868b] text-[16px] leading-relaxed">
            Run the interactive hardware simulator to observe process scoring in real time, or inspect verified QEMU benchmarks.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('simulator')}
              className="appleBtnPrimary text-[14px]"
            >
              <span>Launch Simulator</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => onNavigate('benchmarks')}
              className="appleBtnSecondary text-[14px]"
            >
              <span>View Benchmarks</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
