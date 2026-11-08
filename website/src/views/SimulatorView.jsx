import React from 'react';
import Simulator from '../components/Simulator';
import SerialTerminal from '../components/SerialTerminal';
import WeightHeatmap from '../components/WeightHeatmap';
import MultiAlgoComparison from '../components/MultiAlgoComparison';
import { ArrowLeft, Activity, Sliders, Terminal, ChevronRight, BookOpen } from 'lucide-react';

export default function SimulatorView({ onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Page Header with Breadcrumbs */}
      <section className="bg-[#ffffff] border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <a 
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">Simulator</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time OS Dispatch & Telemetry Shell</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Interactive Hardware Simulator & Neural Canvas.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Step through process execution ticks, adjust the neural confidence fallback threshold slider in real time, inspect synaptic weight matrices, and run test routines in the serial console.
            </p>
          </div>

          {/* Quick Sub-navigation Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-[13px]">
            <a href="#canvas" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Neural Canvas
            </a>
            <a href="#terminal" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Serial Console
            </a>
            <a href="#weights" className="px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#e0e0e0] hover:border-[#1d4ed8] transition-colors text-[#1d1d1f]">
              Weight Heatmap
            </a>
            <button 
              onClick={() => onNavigate('benchmarks')} 
              className="px-3.5 py-1.5 rounded-full bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors flex items-center gap-1"
            >
              <span>View Benchmark Results</span>
              <span>→</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Simulator & Neural Canvas Component */}
      <div id="canvas">
        <Simulator />
      </div>

      {/* Serial Terminal, Heatmap & Multi-algo Comparison Strip */}
      <section id="terminal" className="py-20 px-4 lg:px-8 border-b border-[#3a3a3c] bg-[#252527] text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-[13px] font-semibold text-[#3b82f6] uppercase tracking-wider">
              Low-Level Kernel Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
              Interactive Shell and Model Inspector.
            </h2>
            <p className="text-[17px] text-[#86868b] leading-relaxed">
              Execute low-level routines inside the interactive serial shell, inspect individual MLP synaptic weights, and evaluate multi-algorithm execution timelines.
            </p>
          </div>

          <div className="space-y-8">
            <SerialTerminal />
            <div id="weights">
              <WeightHeatmap />
            </div>
            <MultiAlgoComparison />
          </div>

        </div>
      </section>

      {/* Next Step Callout */}
      <section className="py-14 px-4 lg:px-8 bg-[#ffffff] border-b border-[#e0e0e0] text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
            Read the Freestanding C Implementation
          </h3>
          <p className="text-[#86868b] text-[16px] leading-relaxed">
            Discover how the forward pass is coded without math.h in pure freestanding C.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/docs"
              onClick={(e) => { e.preventDefault(); onNavigate('docs'); }}
              className="appleBtnPrimary text-[14px]"
            >
              <span>Open Documentation</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
