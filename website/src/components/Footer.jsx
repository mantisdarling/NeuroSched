import React from 'react';
import { Github, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-t border-[#e0e0e0] text-[#86868b] text-[12px] leading-relaxed">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Footnote Notes */}
        <div className="space-y-2 text-[#86868b] border-b border-[#e0e0e0] pb-6">
          <p>
            1. Average process wait time reduction of 16.8% was benchmarked under headless QEMU i386 emulation comparing the embedded 5 to 8 to 1 MLP against standard Round Robin over a 10 process synthetic workload with equal 64 tick execution horizons.
          </p>
          <p>
            2. Zero heap allocations guarantee refers to freestanding C execution without <code className="font-mono text-[11px] text-[#1d1d1f]">malloc()</code>; all neural weight matrices and PCB records are allocated statically in <code className="font-mono text-[11px] text-[#1d1d1f]">.rodata</code> and stack memory.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]">
          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#1d1d1f]">Kernel Core</h4>
            <ul className="space-y-2 text-[#86868b]">
              <li><a href="#architecture" className="hover:text-[#1d1d1f] transition-colors">x86 Architecture</a></li>
              <li><a href="#simulator" className="hover:text-[#1d1d1f] transition-colors">Neural Scheduler</a></li>
              <li><a href="#code" className="hover:text-[#1d1d1f] transition-colors">Freestanding C Engine</a></li>
              <li><a href="#benchmarks" className="hover:text-[#1d1d1f] transition-colors">QEMU Telemetry</a></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#1d1d1f]">Hardware Specs</h4>
            <ul className="space-y-2 text-[#86868b]">
              <li><span className="text-[#1d1d1f]">Multiboot2</span> Spec 0x36D76289</li>
              <li><span className="text-[#1d1d1f]">FPU</span> x87 Hardware Acceleration</li>
              <li><span className="text-[#1d1d1f]">COM1</span> 38400 8N1 @ 0x3F8</li>
              <li><span className="text-[#1d1d1f]">VGA</span> 80×25 Color @ 0xB8000</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#1d1d1f]">Governance</h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/CERTIFICATE.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors flex items-center gap-1 font-medium text-[#1d1d1f]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>Project Certificate</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/INFO.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  Project Info
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  Contributing (DCO 1.1)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  Security Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#1d1d1f]">Repository</h4>
            <ul className="space-y-2 text-[#86868b]">
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://neurosched.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  Live Production URL
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Attribution Row (No dots) */}
        <div className="pt-6 border-t border-[#e0e0e0] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#86868b]">
          <div>
            Copyright © 2026 <strong className="text-[#1d1d1f] font-semibold">MANTIS</strong> (mantisdarling). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/mantisdarling/NeuroSched" target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f]">
              mantisdarling/NeuroSched
            </a>
            <span className="text-[#7a7a7a]">|</span>
            <span>Open Source (MIT)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
