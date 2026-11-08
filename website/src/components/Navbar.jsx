import React, { useState } from 'react';
import { Github, ExternalLink, Menu, X } from 'lucide-react';

export default function Navbar({ currentMode, toggleMode, onNavigateDocs, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLink = (targetView, anchorId, e) => {
    if (typeof window === 'undefined') return;
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    
    if (isHome && anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (onNavigate) {
      onNavigate(targetView);
    }
  };

  return (
    <>
      {/* Global Nav (44px, Pure Black #000000) */}
      <div className="bg-[#000000] text-white text-[12px] tracking-[-0.12px] h-[44px] flex items-center px-4 lg:px-8 border-b border-[#222222] z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="/" 
              onClick={(e) => handleLink('home', null, e)}
              className="font-semibold text-white tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-[14px] font-medium tracking-tight text-white">NeuroSched</span>
            </a>
            <span className="hidden sm:inline-block text-[#7a7a7a]">|</span>
            <span className="hidden sm:inline-block text-[#86868b] text-[12px]">32 bit x86 Bare Metal AI Kernel</span>
          </div>

          <div className="flex items-center gap-5 text-[#86868b]">
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-[12px]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#7a7a7a]" />
            </a>
            <a
              href="https://github.com/mantisdarling/NeuroSched/blob/main/INFO.md"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-[12px] hidden md:inline-block"
            >
              Project Info
            </a>
          </div>
        </div>
      </div>

      {/* Frosted Sub Nav (52px, Sticky, Frosted Glass) */}
      <header className="sticky top-0 z-40 appleFrostedNav border-b border-[#e0e0e0] h-[52px] flex items-center px-4 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* Sub nav product title */}
          <div className="flex items-center gap-3">
            <a 
              href="/" 
              onClick={(e) => handleLink('home', null, e)}
              className="text-[21px] font-semibold text-[#1d1d1f] tracking-tight leading-none hover:opacity-80 transition-opacity"
            >
              NeuroSched
            </a>
            <span className="text-[11px] font-medium bg-[#e5e5ea] text-[#1d1d1f] px-2 py-0.5 rounded-full uppercase tracking-wider">
              v1.0
            </span>
          </div>

          {/* Desktop Nav Links and Action Blue Pill */}
          <div className="hidden md:flex items-center gap-7 text-[14px]">
            <nav className="flex items-center gap-6 text-[#1d1d1f]">
              <a 
                href="/#howtouse" 
                onClick={(e) => handleLink('home', 'howtouse', e)}
                className="hover:text-[#1d4ed8] transition-colors"
              >
                How to Use
              </a>
              <a 
                href="/simulator" 
                onClick={(e) => handleLink('simulator', 'simulator', e)}
                className="hover:text-[#1d4ed8] transition-colors flex items-center gap-1"
              >
                <span>Simulator</span>
              </a>
              <a 
                href="/architecture" 
                onClick={(e) => handleLink('architecture', 'architecture', e)}
                className="hover:text-[#1d4ed8] transition-colors"
              >
                Architecture
              </a>
              <a
                href="/docs"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateDocs) onNavigateDocs();
                  else if (onNavigate) onNavigate('docs');
                }}
                className="hover:text-[#1d4ed8] transition-colors"
              >
                Docs
              </a>
              <a 
                href="/#code" 
                onClick={(e) => handleLink('home', 'code', e)}
                className="hover:text-[#1d4ed8] transition-colors"
              >
                Code
              </a>
              <a 
                href="/benchmarks" 
                onClick={(e) => handleLink('benchmarks', 'benchmarks', e)}
                className="hover:text-[#1d4ed8] transition-colors"
              >
                Benchmarks
              </a>
              <a 
                href="/faq" 
                onClick={(e) => handleLink('faq', 'faq', e)}
                className="hover:text-[#1d4ed8] transition-colors"
              >
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-3 pl-3 border-l border-[#e0e0e0]">
              {/* Audience Mode Switcher Capsule */}
              <button
                onClick={toggleMode}
                className="applePressable text-[13px] text-[#1d1d1f] bg-[#ffffff] border border-[#e0e0e0] rounded-full px-3 py-1 flex items-center gap-1.5 hover:border-[#1d4ed8] transition-colors"
                title="Switch explanation depth"
              >
                <span className="text-[#86868b] text-[11px] uppercase font-medium">Mode:</span>
                <span className="font-semibold text-[#1d4ed8]">
                  {currentMode === 'architect' ? 'System Architect' : 'Beginner ELIF5'}
                </span>
              </button>

              {/* Action Blue Primary Pill */}
              <a
                href="/simulator"
                onClick={(e) => handleLink('simulator', 'simulator', e)}
                className="appleBtnPrimary text-[14px] !py-1.5 !px-4 shadow-none"
              >
                <span>Launch</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMode}
              className="text-[11px] bg-[#ffffff] border border-[#e0e0e0] text-[#1d4ed8] font-medium rounded-full px-2.5 py-1"
            >
              {currentMode === 'architect' ? 'Architect' : 'ELIF5'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#1d1d1f] hover:text-[#1d4ed8]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden sticky top-[96px] z-30 bg-[#ffffff] border-b border-[#e0e0e0] px-6 py-6 space-y-4 text-[17px] text-[#1d1d1f]">
          <a
            href="/#howtouse"
            onClick={(e) => handleLink('home', 'howtouse', e)}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            How to Use
          </a>
          <a
            href="/simulator"
            onClick={(e) => handleLink('simulator', 'simulator', e)}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            Simulator
          </a>
          <a
            href="/architecture"
            onClick={(e) => handleLink('architecture', 'architecture', e)}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            Architecture
          </a>
          <a
            href="/docs"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onNavigateDocs) onNavigateDocs();
              else if (onNavigate) onNavigate('docs');
            }}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            Docs
          </a>
          <a
            href="/#code"
            onClick={(e) => handleLink('home', 'code', e)}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            Code
          </a>
          <a
            href="/benchmarks"
            onClick={(e) => handleLink('benchmarks', 'benchmarks', e)}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            Benchmarks
          </a>
          <a
            href="/faq"
            onClick={(e) => handleLink('faq', 'faq', e)}
            className="block py-2 border-b border-[#f0f0f0] hover:text-[#1d4ed8]"
          >
            FAQ
          </a>
          <a
            href="https://github.com/mantisdarling/NeuroSched"
            target="_blank"
            rel="noreferrer"
            className="block py-2 text-[#1d4ed8] font-medium"
          >
            View on GitHub
          </a>
        </div>
      )}
    </>
  );
}
