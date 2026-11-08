import React from 'react';
import { ArrowLeft, RefreshCw, Terminal, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ErrorView({ code = 404, onNavigateHome, onNavigateDocs }) {
  const is500 = code === 500;

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide uppercase shadow-sm border border-[#e0e0e0] bg-white text-[#1d1d1f]">
          <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
          <span>{is500 ? 'Status Code 500' : 'Status Code 404'}</span>
        </div>

        {/* Large Geometric Graphic */}
        <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl bg-white border border-[#e0e0e0] shadow-sm transform -rotate-3"></div>
          <div className="absolute inset-0 rounded-3xl bg-white border border-[#e0e0e0] shadow-sm transform rotate-3 opacity-60"></div>
          <div className="relative z-10 text-5xl font-mono font-bold text-[#1d1d1f]">
            {is500 ? '500' : '404'}
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-tight">
            {is500 ? 'Internal Server Exception.' : 'Page Not Found.'}
          </h1>
          <p className="text-[16px] text-[#86868b] max-w-md mx-auto leading-relaxed">
            {is500
              ? 'An unexpected runtime instruction fault occurred. Kernel state has been trapped safely without data loss.'
              : 'The requested route or memory address does not exist in the active operating system partition.'}
          </p>
        </div>

        {/* Quick Diagnostic Card */}
        <div className="p-4 bg-white border border-[#e0e0e0] rounded-2xl text-left font-mono text-[12px] text-[#52525b] space-y-1 shadow-sm">
          <div className="flex items-center justify-between text-[#86868b] border-b border-[#f0f0f0] pb-2 mb-2">
            <span className="flex items-center gap-1.5 font-semibold text-[#1d1d1f]">
              <Terminal className="w-3.5 h-3.5 text-[#1d4ed8]" />
              <span>Kernel Diagnostic Frame</span>
            </span>
            <span>EIP: 0x{is500 ? 'DEADBEEF' : 'C0000404'}</span>
          </div>
          <div>CR0: 0x80000011 (Paging Enabled, FPU Monitored)</div>
          <div>CS: 0x08 (Ring 0 Kernel Code Segment)</div>
          <div>ESP: 0x001FFFF0 (Stack Frame Preserved)</div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {is500 ? (
            <button
              onClick={() => window.location.reload()}
              className="appleBtnPrimary text-[14px] !py-2.5 !px-6 flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Kernel Page</span>
            </button>
          ) : (
            <button
              onClick={onNavigateHome}
              className="appleBtnPrimary text-[14px] !py-2.5 !px-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Full Showcase</span>
            </button>
          )}

          <button
            onClick={onNavigateDocs || onNavigateHome}
            className="appleBtnSecondary text-[14px] !py-2.5 !px-6 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Technical Docs</span>
          </button>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-[12px] text-[#86868b]">
          <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
          <span>NeuroSched Freestanding Fault Handler</span>
        </div>

      </div>
    </div>
  );
}
