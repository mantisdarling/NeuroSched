import React from 'react';
import { RefreshCw, Home, ShieldAlert } from 'lucide-react';

export default function ServerErrorView({ onNavigate }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20 text-[13px] font-mono font-semibold">
          <ShieldAlert className="w-4 h-4" />
          <span>Error 500 — Kernel Panic / Server Error</span>
        </div>

        {/* Display Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Unexpected Trap Occurred.
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed max-w-lg mx-auto">
            An internal server or render exception halted execution. The deterministic fallback has caught the state.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => window.location.reload()}
            className="appleBtnPrimary text-[15px] flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reload Application</span>
          </button>
          
          <button
            onClick={() => onNavigate('home')}
            className="appleBtnSecondary text-[15px] flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Safe Reboot to Home</span>
          </button>
        </div>

      </div>
    </div>
  );
}
