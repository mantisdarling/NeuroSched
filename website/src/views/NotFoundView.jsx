import React from 'react';
import { ArrowLeft, Home, BookOpen, Activity, AlertCircle, Terminal, Search } from 'lucide-react';

export default function NotFoundView({ onNavigate }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Error Code Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20 text-[13px] font-mono font-semibold">
          <AlertCircle className="w-4 h-4" />
          <span>Error 404 — Page Not Found</span>
        </div>

        {/* Display Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Kernel Page Fault.
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed max-w-lg mx-auto">
            The requested operating system memory address or URL route does not exist in the active descriptor table.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="appleBtnPrimary text-[15px] flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
          
          <button
            onClick={() => onNavigate('docs')}
            className="appleBtnSecondary text-[15px] flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Documentation</span>
          </button>

          <button
            onClick={() => onNavigate('simulator')}
            className="appleBtnSecondary text-[15px] flex items-center gap-2"
          >
            <Activity className="w-4 h-4" />
            <span>Launch Simulator</span>
          </button>
        </div>

        {/* Search Suggestion Directory */}
        <div className="pt-8 border-t border-[#e0e0e0] text-[13px] text-[#86868b] space-y-2">
          <div>Popular routes you might be looking for:</div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[#1d4ed8]">
            <button onClick={() => onNavigate('architecture')} className="hover:underline">/architecture</button>
            <span>•</span>
            <button onClick={() => onNavigate('benchmarks')} className="hover:underline">/benchmarks</button>
            <span>•</span>
            <button onClick={() => onNavigate('faq')} className="hover:underline">/faq</button>
            <span>•</span>
            <button onClick={() => onNavigate('about')} className="hover:underline">/about</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:underline">/contact</button>
          </div>
        </div>

      </div>
    </div>
  );
}
