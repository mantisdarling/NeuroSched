import React from 'react';
import { Github, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const handleNav = (target, e) => {
    if (onNavigate) {
      if (e) e.preventDefault();
      onNavigate(target);
    }
  };

  return (
    <footer className="relative bg-[#fefbf4] border-t border-[#e6e2d8] text-[#7a7469] text-[12px] leading-relaxed overflow-hidden">
      
      {/* ── Top Section: Footnotes & Directory Navigation ─────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 pt-14 pb-8 space-y-8">
        
        {/* Footnote Notes */}
        <div className="space-y-2 text-[#8c8577] border-b border-[#e6e2d8] pb-6">
          <p>
            1. Average process wait time reduction of 16.8% was benchmarked under headless QEMU i386 emulation comparing the embedded 5 to 8 to 1 MLP against standard Round Robin over a 10 process synthetic workload with equal 64 tick execution horizons.
          </p>
          <p>
            2. Zero heap allocations guarantee refers to freestanding C execution without <code className="font-mono text-[11px] text-[#2b261f]">malloc()</code>; all neural weight matrices and PCB records are allocated statically in <code className="font-mono text-[11px] text-[#2b261f]">.rodata</code> and stack memory.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]">
          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#2b261f]">Kernel Core</h4>
            <ul className="space-y-2 text-[#7a7469]">
              <li>
                <a 
                  href="/architecture" 
                  onClick={(e) => handleNav('architecture', e)} 
                  className="hover:text-[#2b261f] transition-colors"
                >
                  x86 Architecture
                </a>
              </li>
              <li>
                <a 
                  href="/simulator" 
                  onClick={(e) => handleNav('simulator', e)} 
                  className="hover:text-[#2b261f] transition-colors"
                >
                  Neural Simulator
                </a>
              </li>
              <li>
                <a 
                  href="/docs" 
                  onClick={(e) => handleNav('docs', e)} 
                  className="hover:text-[#2b261f] transition-colors"
                >
                  Freestanding C Docs
                </a>
              </li>
              <li>
                <a 
                  href="/benchmarks" 
                  onClick={(e) => handleNav('benchmarks', e)} 
                  className="hover:text-[#2b261f] transition-colors"
                >
                  QEMU Telemetry
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  onClick={(e) => handleNav('faq', e)} 
                  className="hover:text-[#2b261f] transition-colors"
                >
                  Knowledge Base FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#2b261f]">Hardware Specs</h4>
            <ul className="space-y-2 text-[#7a7469]">
              <li><span className="text-[#2b261f] font-medium">Multiboot2</span> Spec 0x36D76289</li>
              <li><span className="text-[#2b261f] font-medium">FPU</span> x87 Hardware Acceleration</li>
              <li><span className="text-[#2b261f] font-medium">COM1</span> 38400 8N1 @ 0x3F8</li>
              <li><span className="text-[#2b261f] font-medium">VGA</span> 80 by 25 Color @ 0xB8000</li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#2b261f]">Governance</h4>
            <ul className="space-y-2 text-[#7a7469]">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav('about', e)}
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  About NeuroSched
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav('contact', e)}
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  Contact Engineering
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/CERTIFICATE.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9c6a3b] transition-colors flex items-center gap-1 font-medium text-[#2b261f]"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9c6a3b]" />
                  <span>Project Certificate</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/INFO.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  Project Info
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  Contributing (DCO 1.1)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  Security Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-semibold text-[#2b261f]">Legal and Trust</h4>
            <ul className="space-y-2 text-[#7a7469]">
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => handleNav('privacy', e)}
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleNav('terms', e)}
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9c6a3b] transition-colors"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mantisdarling/NeuroSched"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9c6a3b] transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Artwork Stage: 100% Uncropped Panoramic Background ───────────────
          Maintains exact 1024x384 (2.667:1) aspect ratio on every screen size.
          The character on the right, mountains on the left, and open sky are
          100% visible on desktop, tablet, and mobile with zero cropping.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden select-none" style={{ aspectRatio: '1024 / 384' }}>
        <picture>
          <source
            type="image/webp"
            srcSet="/footer-artwork-480.webp 480w, /footer-artwork-768.webp 768w, /footer-artwork.webp 1024w"
            sizes="100vw"
          />
          <img
            src="/footer-artwork.jpg"
            alt=""
            width="1024"
            height="384"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain object-bottom pointer-events-none"
            style={{ display: 'block' }}
          />
        </picture>

        {/* Brand Overlay positioned in the calm sky between mountains & character */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[4%] md:pt-[5%] pointer-events-none">
          <div className="text-center px-4">
            <span
              className="block font-semibold tracking-tight text-[#2b261f]"
              style={{
                fontSize: 'clamp(1.4rem, 3.5vw, 2.75rem)',
                letterSpacing: '-0.03em',
                textShadow: '0 1px 12px rgba(254, 251, 244, 0.85)',
              }}
            >
              NeuroSched
            </span>
            <span
              className="block font-mono tracking-widest uppercase text-[#8c7e6c] mt-1"
              style={{
                fontSize: 'clamp(0.65rem, 1.1vw, 0.85rem)',
                letterSpacing: '0.15em',
                textShadow: '0 1px 8px rgba(254, 251, 244, 0.9)',
              }}
            >
              32 bit x86 AI Operating System Kernel
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom Legal & Attribution Bar ─────────────────────────────────── */}
      <div className="relative z-10 w-full border-t border-[#e6e2d8] bg-[#fbf7ee]">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#8c8577]">
          <div>
            Copyright 2026 <strong className="text-[#2b261f] font-semibold">MANTIS</strong> (mantisdarling). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/privacy"
              onClick={(e) => handleNav('privacy', e)}
              className="hover:text-[#2b261f] transition-colors"
            >
              Privacy
            </a>
            <span className="text-[#c7bfaf]">|</span>
            <a
              href="/terms"
              onClick={(e) => handleNav('terms', e)}
              className="hover:text-[#2b261f] transition-colors"
            >
              Terms
            </a>
            <span className="text-[#c7bfaf]">|</span>
            <a
              href="/contact"
              onClick={(e) => handleNav('contact', e)}
              className="hover:text-[#2b261f] transition-colors"
            >
              Contact
            </a>
            <span className="text-[#c7bfaf]">|</span>
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2b261f] transition-colors"
            >
              mantisdarling/NeuroSched
            </a>
            <span className="text-[#c7bfaf]">|</span>
            <span>Open Source (MIT)</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
