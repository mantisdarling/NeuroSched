import React from 'react';
import { Github, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleNav = (view, e) => {
    if (onNavigate) {
      if (e) e.preventDefault();
      onNavigate(view);
    }
  };

  return (
    <footer className="py-14 px-4 lg:px-8 bg-[#f5f5f7] border-t border-[#e0e0e0] text-[#86868b] text-[12px] leading-relaxed select-none">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Footnote Disclaimers */}
        <div className="space-y-2 text-[#86868b] text-[11.5px] border-b border-[#e0e0e0] pb-6 leading-normal">
          <p>
            1. Average process wait time reduction of 16.8% was benchmarked under headless QEMU i386 emulation comparing the embedded 5-8-1 MLP neural inference engine against circular Round Robin across 64 CPU timer ticks.
          </p>
          <p>
            2. Zero dynamic heap allocation refers to freestanding C execution without <code className="font-mono text-[11px] text-[#1d1d1f]">malloc()</code>; all model weights are compiled into <code className="font-mono text-[11px] text-[#1d1d1f]">.rodata</code> and execution activations remain strictly on the execution stack.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
          
          {/* Column 1: Kernel Architecture */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Kernel Architecture</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li>
                <a href="/architecture" onClick={(e) => handleNav('architecture', e)} className="hover:text-[#1d4ed8] transition-colors">
                  x86 Kernel Design
                </a>
              </li>
              <li>
                <a href="/simulator" onClick={(e) => handleNav('simulator', e)} className="hover:text-[#1d4ed8] transition-colors">
                  Neural Simulator
                </a>
              </li>
              <li>
                <a href="/docs" onClick={(e) => handleNav('docs', e)} className="hover:text-[#1d4ed8] transition-colors">
                  Freestanding C Docs
                </a>
              </li>
              <li>
                <a href="/benchmarks" onClick={(e) => handleNav('benchmarks', e)} className="hover:text-[#1d4ed8] transition-colors">
                  QEMU Benchmarks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Knowledge Base */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Knowledge Base</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li>
                <a href="/faq" onClick={(e) => handleNav('faq', e)} className="hover:text-[#1d4ed8] transition-colors">
                  Operating System FAQ
                </a>
              </li>
              <li>
                <a href="/faq" onClick={(e) => handleNav('faq', e)} className="hover:text-[#1d4ed8] transition-colors">
                  BIOS OS Type Guide
                </a>
              </li>
              <li>
                <span className="text-[#1d1d1f] font-mono text-[11.5px]">Multiboot2 0x36D76289</span>
              </li>
              <li>
                <span className="text-[#1d1d1f] font-mono text-[11.5px]">COM1 38400 8N1 @ 0x3F8</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Governance */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Governance & Legal</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li>
                <a href="/about" onClick={(e) => handleNav('about', e)} className="hover:text-[#1d4ed8] transition-colors">
                  About NeuroSched
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleNav('contact', e)} className="hover:text-[#1d4ed8] transition-colors">
                  Contact Maintainers
                </a>
              </li>
              <li>
                <a href="/privacy" onClick={(e) => handleNav('privacy', e)} className="hover:text-[#1d4ed8] transition-colors">
                  Privacy & Cookie Policy
                </a>
              </li>
              <li>
                <a href="/terms" onClick={(e) => handleNav('terms', e)} className="hover:text-[#1d4ed8] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Open Source Repository */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Open Source</h4>
            <ul className="space-y-2 text-[#6e6e73]">
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/CERTIFICATE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors flex items-center gap-1.5 font-medium text-[#1d1d1f]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ed8]" />
                  <span>Project Certificate</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/INFO.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d4ed8] transition-colors"
                >
                  Project Technical Info
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Attribution Row */}
        <div className="pt-6 border-t border-[#e0e0e0] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#86868b]">
          <div>
            Copyright © 2026 <strong className="text-[#1d1d1f] font-semibold">MANTIS</strong> (<a href="https://github.com/mantisdarling" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d4ed8] underline">@mantisdarling</a>). All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/mantisdarling/NeuroSched" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">
              mantisdarling/NeuroSched
            </a>
            <span className="text-[#d1d5db]">|</span>
            <span>Open Source (MIT)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
