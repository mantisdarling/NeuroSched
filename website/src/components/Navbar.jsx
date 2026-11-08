import React, { useState, useEffect } from 'react';
import { Github, Menu, X } from 'lucide-react';

export default function Navbar({ currentView = 'home', currentMode, toggleMode, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (view, e) => {
    if (e) e.preventDefault();
    setMobileOpen(false);
    if (onNavigate) onNavigate(view);
  };

  const navItems = [
    { id: 'home',         label: 'Home',        href: '/' },
    { id: 'architecture', label: 'Architecture', href: '/architecture' },
    { id: 'simulator',    label: 'Simulator',    href: '/simulator' },
    { id: 'benchmarks',   label: 'Benchmarks',   href: '/benchmarks' },
    { id: 'faq',          label: 'FAQ',          href: '/faq' },
    { id: 'docs',         label: 'Docs',         href: '/docs' },
  ];

  return (
    <>
      {/* ── Global Nav: pure black 44 px ── */}
      <div className="global-nav px-4 lg:px-8 z-50 relative">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

          {/* Left: wordmark */}
          <a
            href="/"
            onClick={(e) => go('home', e)}
            className="text-white type-nav font-medium hover:opacity-70 transition-opacity"
            aria-label="NeuroSched home"
          >
            NeuroSched
          </a>

          {/* Centre: nav links (desktop only) */}
          <nav
            className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2"
            aria-label="Global navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => go(item.id, e)}
                className="type-nav text-[#cccccc] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: GitHub + mobile hamburger */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 type-nav text-[#cccccc] hover:text-white transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden text-[#cccccc] hover:text-white transition-colors p-1"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Sub-nav: parchment frosted 52 px, sticky ── */}
      <header className="sub-nav sticky top-0 z-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">

          {/* Left: product title */}
          <a
            href="/"
            onClick={(e) => go('home', e)}
            className="type-tagline text-[#1d1d1f] hover:opacity-70 transition-opacity"
          >
            NeuroSched
          </a>

          {/* Centre: page links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Section navigation">
            {navItems.map((item) => {
              const active = currentView === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => go(item.id, e)}
                  className={`text-[14px] font-[400] letter-spacing-[-0.224px] transition-colors ${
                    active
                      ? 'text-[#0066cc] font-semibold'
                      : 'text-[#1d1d1f] hover:text-[#0066cc]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: mode + CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMode}
              className="hidden sm:block text-[12px] text-[#7a7a7a] hover:text-[#1d1d1f] transition-colors"
              title="Switch explanation depth"
            >
              {currentMode === 'architect' ? 'Kernel view' : 'Plain view'}
            </button>

            <button
              onClick={(e) => go('simulator', e)}
              className="btn-nav-primary"
            >
              Launch
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden text-[#1d1d1f] hover:text-[#0066cc] transition-colors p-1"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-[96px] inset-x-0 z-30 bg-[#f5f5f7] border-b border-[#e0e0e0]
                     px-6 py-4 space-y-1 shadow-sm"
        >
          {navItems.map((item) => {
            const active = currentView === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => go(item.id, e)}
                className={`flex items-center justify-between py-2.5 border-b border-[#f0f0f0]
                            text-[17px] font-[400] letter-spacing-[-0.374px] transition-colors ${
                              active ? 'text-[#0066cc]' : 'text-[#1d1d1f] hover:text-[#0066cc]'
                            }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3 flex flex-wrap gap-4">
            <a href="/about"   onClick={(e) => go('about',   e)} className="text-[14px] text-[#7a7a7a] hover:text-[#0066cc]">About</a>
            <a href="/contact" onClick={(e) => go('contact', e)} className="text-[14px] text-[#7a7a7a] hover:text-[#0066cc]">Contact</a>
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#0066cc] flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
