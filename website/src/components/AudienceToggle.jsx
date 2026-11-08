import React from 'react';
import { HelpCircle, Code2, Zap } from 'lucide-react';

export default function AudienceToggle({ currentMode, setMode }) {
  return (
    <section className="py-10 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Toggle Description */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[12px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
            Interactive Experience
          </div>
          <h2 className="text-[21px] font-semibold text-[#1d1d1f] tracking-tight">
            Tailor technical depth to your perspective.
          </h2>
          <p className="text-[15px] text-[#86868b]">
            Switch between plain English conceptual explanations and low level kernel implementation specifications.
          </p>
        </div>

        {/* Segmented Pill Controls */}
        <div className="inline-flex items-center bg-[#e5e5ea] p-1 rounded-full">
          <button
            onClick={() => setMode('beginner')}
            className={`applePressable flex items-center gap-2 px-5 py-2 text-[14px] rounded-full font-medium transition-all ${
              currentMode === 'beginner'
                ? 'bg-[#ffffff] text-[#1d1d1f] shadow-sm'
                : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Beginner (ELIF5)</span>
          </button>

          <button
            onClick={() => setMode('architect')}
            className={`applePressable flex items-center gap-2 px-5 py-2 text-[14px] rounded-full font-medium transition-all ${
              currentMode === 'architect'
                ? 'bg-[#ffffff] text-[#1d1d1f] shadow-sm'
                : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>System Architect</span>
          </button>
        </div>

      </div>
    </section>
  );
}
