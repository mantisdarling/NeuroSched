import React, { useState } from 'react';
import { Cpu, Terminal, Github, ExternalLink, Activity, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ currentView = 'home', currentMode, toggleMode, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (view, e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate(view);
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'architecture', label: 'Architecture', href: '/architecture' },
    { id: 'simulator', label: 'Simulator', href: '/simulator' },
    { id: 'benchmarks', label: 'Benchmarks', href: '/benchmarks' },
    { id: 'faq', label: 'FAQ', href: '/faq' },
    { id: 'docs', label: 'Docs', href: '/docs' }
  ];

  return (
    <>
      {/* Global Nav (44px, Pure Black #000000) */}
      <div className="bg-[#000000] text-white text-[12px] tracking-[-0.12px] h-[44px] flex items-center px-4 lg:px-8 border-b border-[#222222] z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('home', e)} 
              className="font-semibold text-white tracking-tight hover:text-[#60a5fa] transition-colors"
            >
              <span className="text-[14px] font-medium tracking-tight text-white">NeuroSched</span>
            </a>
            <span className="hidden sm:inline-block text-[#7a7a7a]">|</span>
            <span className="hidden sm:inline-block text-[#86868b] text-[12px]">32 bit x86 Bare Metal AI Kernel</span>
          </div>

          <div className="flex items-center gap-5 text-[#86868b]">
            <a
              href="/about"
              onClick={(e) => handleLinkClick('about', e)}
              className="hover:text-white transition-colors text-[12px] hidden sm:inline-block"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="hover:text-white transition-colors text-[12px] hidden sm:inline-block"
            >
              Contact
            </a>
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-[12px]"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#7a7a7a]" />
            </a>
            <a
              href="https://github.com/mantisdarling/NeuroSched/blob/main/INFO.md"
              target="_blank"
              rel="noopener noreferrer"
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
              onClick={(e) => handleLinkClick('home', e)}
              className="text-[21px] font-semibold text-[#1d1d1f] tracking-tight leading-none hover:opacity-80 transition-opacity"
            >
              NeuroSched
            </a>
            <span className="text-[11px] font-medium bg-[#e5e5ea] text-[#1d1d1f] px-2 py-0.5 rounded-full uppercase tracking-wider">
              v1.0
            </span>
          </div>

          {/* Desktop Nav Links & Action Blue Pill */}
          <div className="hidden md:flex items-center gap-7 text-[14px]">
            <nav className="flex items-center gap-6 text-[#1d1d1f]">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    className={`transition-colors py-1 ${
                      isActive
                        ? 'text-[#1d4ed8] font-semibold border-b-2 border-[#1d4ed8]'
                        : 'text-[#1d1d1f] hover:text-[#1d4ed8]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
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
              <button
                onClick={(e) => handleLinkClick('simulator', e)}
                className="appleBtnPrimary text-[14px] !py-1.5 !px-4 shadow-none cursor-pointer"
              >
                <span>Launch</span>
              </button>
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

      {/* Mobile Drawer Menu (Responsive for Phones and Tablets) */}
      {mobileMenuOpen && (
        <div className="md:hidden sticky top-[96px] z-30 bg-[#ffffff] border-b border-[#e0e0e0] px-6 py-6 space-y-3 text-[17px] text-[#1d1d1f] max-h-[80vh] overflow-y-auto">
          <div className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider pb-1">
            Navigation Pages
          </div>
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(item.id, e)}
                className={`flex items-center justify-between py-2.5 border-b border-[#f0f0f0] transition-colors ${
                  isActive ? 'text-[#1d4ed8] font-bold pl-2 border-l-4 border-l-[#1d4ed8]' : 'hover:text-[#1d4ed8]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#86868b]" />
              </a>
            );
          })}
          
          <div className="pt-2 space-y-1">
            <a
              href="/about"
              onClick={(e) => handleLinkClick('about', e)}
              className="block py-2 text-[#52525b] hover:text-[#1d4ed8]"
            >
              About Project →
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="block py-2 text-[#52525b] hover:text-[#1d4ed8]"
            >
              Contact Us →
            </a>
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-[#1d4ed8] font-medium"
            >
              View on GitHub ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
