import React from 'react';
import Benchmarks from '../components/Benchmarks';
import { ArrowLeft, TrendingUp, Cpu, Activity, BookOpen, ChevronRight, Terminal } from 'lucide-react';

export default function BenchmarksView({ onNavigate }) {
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
            <span className="text-[#1d1d1f] font-medium">Benchmarks</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Empirical Performance Validation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Verified QEMU Telemetry Benchmarks.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Empirical execution results captured directly across the COM1 serial UART port during dual-phase kernel execution over a 10-process synthetic benchmark workload.
            </p>
          </div>

          {/* Quick Sub-navigation Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-[13px]">
            <a href="#metrics" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Primary Metrics
            </a>
            <a href="#charts" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Execution Charts
            </a>
            <button 
              onClick={() => onNavigate('simulator')} 
              className="px-3.5 py-1.5 rounded-full bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors flex items-center gap-1"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Test in Simulator</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Benchmarks Component (HUD + Charts + CPU visualizer + Matrix) */}
      <div id="metrics">
        <Benchmarks />
      </div>

      {/* Telemetry Protocol Deep Dive */}
      <section className="py-16 px-4 lg:px-8 bg-[#ffffff] border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="text-[12px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
              Data Collection Protocol
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              Headless QEMU Serial Telemetry Pipeline
            </h2>
            <p className="text-[#86868b] text-[16px] max-w-3xl leading-relaxed">
              NeuroSched streams comma-separated value (CSV) execution telemetry directly over COM1 UART port 0x3F8 during automated integration testing.
            </p>
          </div>

          <div className="border border-[#e0e0e0] bg-[#f5f5f7] rounded-[14px] p-6 font-mono text-[13px] overflow-x-auto space-y-2 text-[#1d1d1f]">
            <div className="text-[#86868b]"># Headless QEMU runner script: scripts/boot-test.sh</div>
            <div className="text-[#1d4ed8]">qemu-system-i386 -kernel build/kernel.elf -serial stdio -display none -no-reboot -m 32M</div>
            <div className="text-[#86868b] pt-2"># Sample CSV event telemetry emitted per scheduler tick:</div>
            <div className="text-[#16a34a]">TICK,PHASE,PROC_ID,BURST_REM,WAIT_TICKS,SCORE,DECISION</div>
            <div>0,NEURAL,P2,3,0,0.8421,DISPATCHED</div>
            <div>1,NEURAL,P2,2,0,0.8650,DISPATCHED</div>
            <div>2,NEURAL,P7,2,2,0.8812,DISPATCHED</div>
            <div className="text-[#d97706]">14,NEURAL,P3,11,14,0.6120,FALLBACK_ROUND_ROBIN</div>
          </div>
        </div>
      </section>

      {/* Next Step Callout */}
      <section className="py-14 px-4 lg:px-8 bg-[#fafafc] border-b border-[#e0e0e0] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
            Inspect the Mathematical Model
          </h3>
          <p className="text-[#86868b] text-[16px] leading-relaxed">
            Learn how the 5-element feature vector and Taylor series sigmoid produce these empirical results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('architecture')}
              className="appleBtnPrimary text-[14px]"
            >
              <span>Explore Architecture</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => onNavigate('docs')}
              className="appleBtnSecondary text-[14px]"
            >
              <span>Read Documentation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
