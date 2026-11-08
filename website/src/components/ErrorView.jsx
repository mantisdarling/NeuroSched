import React from 'react';
import { ArrowLeft, ArrowUpRight, Terminal, RefreshCw, Cpu, BookOpen, Github } from 'lucide-react';

export default function ErrorView({ code = 404, onNavigateHome, onNavigateDocs, onNavigateSimulator }) {
  const is500 = code === 500;

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-[#f5f5f7] flex flex-col justify-between selection:bg-white selection:text-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: 'url(/textures/presence.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px auto',
          opacity: 0.16,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      />
      
      {/* Top Header Monospace Bar */}
      <div className="relative z-10 border-b border-[#222226] px-6 lg:px-12 py-5 flex items-center justify-between text-[13px] font-mono text-[#71717a]">
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="text-white hover:text-[#60a5fa] transition-colors font-semibold flex items-center gap-2"
          >
            <span>NeuroSched</span>
            <span className="text-[#3b82f6] text-[11px] px-1.5 py-0.5 rounded bg-[#1e293b] font-mono">v1.0</span>
          </button>
          <span>/</span>
          <span className="text-[#a1a1aa]">{is500 ? 'Kernel Exception 500' : 'Reality Check 404'}</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[12px]">
          <span>EIP: 0x{is500 ? 'DEADBEEF' : '00000404'}</span>
          <span className="text-[#3f3f46]">|</span>
          <span>CR0: PE, FPU ACTIVE</span>
        </div>
      </div>

      {/* Main Hero Section: Inspired by NOTREAL brutalist design */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-16 py-16 sm:py-24 max-w-6xl mx-auto w-full">
        
        <div className="space-y-8">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-[12px] uppercase font-mono tracking-widest text-[#71717a]">
            <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
            <span>{is500 ? 'Supervisor Level Fault' : 'Unmapped Memory Sector'}</span>
          </div>

          {/* Massive Typographic Hero */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none font-sans">
              {is500 ? (
                <>This exception<br /><span className="text-[#71717a]">is real.</span></>
              ) : (
                <>This page is<br /><span className="text-[#71717a]">not real.</span></>
              )}
            </h1>
            
            <p className="text-[17px] sm:text-[20px] text-[#a1a1aa] max-w-2xl font-light leading-relaxed pt-2">
              {is500
                ? 'An unexpected runtime instruction exception was trapped safely by the supervisor layer. Stack memory remains intact without data loss.'
                : 'The route you are attempting to execute does not exist in reality or kernel space. It may have been relocated, or never compiled into this partition.'}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            {is500 ? (
              <button
                onClick={() => window.location.reload()}
                className="px-7 py-3.5 bg-white text-black hover:bg-[#e4e4e7] transition-all rounded-full font-medium text-[15px] flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reboot Kernel Session</span>
              </button>
            ) : (
              <button
                onClick={onNavigateHome}
                className="px-7 py-3.5 bg-white text-black hover:bg-[#e4e4e7] transition-all rounded-full font-medium text-[15px] flex items-center gap-2 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Return to Reality</span>
              </button>
            )}

            <button
              onClick={onNavigateDocs || onNavigateHome}
              className="px-7 py-3.5 bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] text-white transition-all rounded-full font-medium text-[15px] flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#71717a]" />
              <span>Read Documentation</span>
            </button>
          </div>

          {/* Sub Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-[#1f1f23]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="p-5 rounded-2xl bg-[#141416] border border-[#222226] hover:border-[#3f3f46] transition-all group space-y-1 block"
            >
              <div className="flex items-center justify-between text-[#71717a] group-hover:text-white transition-colors">
                <span className="text-[12px] font-mono uppercase tracking-wider">Showcase</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div className="text-[16px] font-medium text-white">Full Landing Page</div>
              <div className="text-[13px] text-[#71717a]">Interactive kernel demo and benchmarks</div>
            </a>

            <a
              href="/simulator"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateSimulator) onNavigateSimulator();
                else onNavigateHome();
              }}
              className="p-5 rounded-2xl bg-[#141416] border border-[#222226] hover:border-[#3f3f46] transition-all group space-y-1 block"
            >
              <div className="flex items-center justify-between text-[#71717a] group-hover:text-white transition-colors">
                <span className="text-[12px] font-mono uppercase tracking-wider">Engine</span>
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-[16px] font-medium text-white">Neural Simulator</div>
              <div className="text-[13px] text-[#71717a]">60 FPS bare metal canvas scheduler</div>
            </a>

            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#141416] border border-[#222226] hover:border-[#3f3f46] transition-all group space-y-1 block"
            >
              <div className="flex items-center justify-between text-[#71717a] group-hover:text-white transition-colors">
                <span className="text-[12px] font-mono uppercase tracking-wider">Repository</span>
                <Github className="w-4 h-4" />
              </div>
              <div className="text-[16px] font-medium text-white">GitHub Source</div>
              <div className="text-[13px] text-[#71717a]">Freestanding C and x86 assembly</div>
            </a>
          </div>

        </div>

      </main>

      {/* Bottom Footer Monospace Telemetry */}
      <footer className="relative z-10 border-t border-[#222226] px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-mono text-[#71717a]">
        <div>
          <span>NEUROSCHED // FREESTANDING 32 BIT FAULT TRAP</span>
        </div>
        <div className="flex items-center gap-4">
          <span>ZERO MALLOC HEAP</span>
          <span>•</span>
          <span>DETERMINISTIC FALLBACK</span>
        </div>
      </footer>

    </div>
  );
}
