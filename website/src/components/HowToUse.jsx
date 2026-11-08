import React from 'react';
import { HelpCircle, Sliders, Terminal, Play, FileText, CheckCircle2 } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      num: '01',
      title: 'Select Perspective',
      desc: 'Toggle between System Architect (low level C and assembly execution) and Beginner ELIF5 mode for intuitive conceptual explanations.',
      icon: HelpCircle
    },
    {
      num: '02',
      title: 'Simulate Workloads',
      desc: 'Play the real time process scheduler timeline. Adjust playback speeds (1x, 2x, 5x) and drag the confidence fallback threshold.',
      icon: Play
    },
    {
      num: '03',
      title: 'Send Serial Commands',
      desc: 'Type commands into the in-browser COM1 serial terminal (boot, run rr, run nn, stats, weights) to observe live kernel UART output.',
      icon: Terminal
    },
    {
      num: '04',
      title: 'Inspect and Benchmark',
      desc: 'Review freestanding C source implementations, copy cross compilation toolchain commands, or export an official PDF evaluation report.',
      icon: FileText
    }
  ];

  return (
    <section id="howtouse" className="py-20 px-4 lg:px-8 bg-[#ffffff] border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
            Interactive User Guide
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            How to explore NeuroSched.
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed">
            A step by step walk through of the dual phase scheduler simulator, interactive serial UART console, and empirical benchmarks.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.num} 
                className="appleCardLight bg-[#f5f5f7] p-7 space-y-4 flex flex-col justify-between hover:border-[#1d4ed8] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-[#1d4ed8] tracking-wider">
                      STEP {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#ffffff] border border-[#e0e0e0] flex items-center justify-center text-[#1d1d1f]">
                      <Icon className="w-4 h-4 text-[#1d4ed8]" />
                    </div>
                  </div>
                  <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[15px] text-[#86868b] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e0e0e0] flex items-center gap-1.5 text-[#16a34a] text-[13px] font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ready to test</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
