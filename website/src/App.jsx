import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Docs from './components/Docs';

import HomeView from './views/HomeView';
import ArchitectureView from './views/ArchitectureView';
import BenchmarksView from './views/BenchmarksView';
import SimulatorView from './views/SimulatorView';
import FAQView from './views/FAQView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import PrivacyView from './views/PrivacyView';
import TermsView from './views/TermsView';
import NotFoundView from './views/NotFoundView';
import ServerErrorView from './views/ServerErrorView';

const SEO_META = {
  home: {
    title: 'Operating System — NeuroSched x86 AI Operating System',
    description: 'Operating system definition, architecture, and live simulation of NeuroSched — the open-source 32-bit x86 AI operating system kernel with embedded neural scheduling.',
    canonical: 'https://neurosched.vercel.app/'
  },
  docs: {
    title: 'Documentation — NeuroSched Kernel Architecture & Freestanding C Engine',
    description: 'Complete technical specifications for the NeuroSched 32-bit x86 kernel: Multiboot2 handshake, x87 FPU setup, 5-8-1 MLP forward pass, Taylor sigmoid math, and zero-malloc layout.',
    canonical: 'https://neurosched.vercel.app/docs'
  },
  architecture: {
    title: 'Architecture — 32-Bit x86 Neural Engine & Kernel Design | NeuroSched',
    description: 'In-depth breakdown of the NeuroSched kernel architecture: 5-element PCB state vector, MLP layer topology, Taylor polynomial expansions, and zero dynamic heap design.',
    canonical: 'https://neurosched.vercel.app/architecture'
  },
  benchmarks: {
    title: 'Verified Benchmarks — QEMU Empirical Performance | NeuroSched',
    description: 'Empirical performance benchmarks comparing NeuroSched against standard Round Robin across 64 ticks: 16.8% lower wait time, 14.2% faster turnaround, and 50 safe fallbacks.',
    canonical: 'https://neurosched.vercel.app/benchmarks'
  },
  simulator: {
    title: 'Interactive Simulator & Hardware Shell | NeuroSched',
    description: 'Simulate the NeuroSched operating system kernel in your browser. Live 60 FPS neural canvas, adjustable confidence fallback threshold slider, and COM1 serial console replay.',
    canonical: 'https://neurosched.vercel.app/simulator'
  },
  faq: {
    title: 'Operating System FAQ — What is an Operating System & Examples | NeuroSched',
    description: 'Comprehensive operating system FAQ: what is an operating system, what is an operating system example, What is OS type in BIOS, Linux operating system, Android operating system, and AI operating system architecture.',
    canonical: 'https://neurosched.vercel.app/faq'
  },
  about: {
    title: 'About Us — NeuroSched AI Operating System Project',
    description: 'Learn about the mission, engineering philosophy, and architecture behind NeuroSched, the open-source 32-bit x86 AI operating system with deterministic neural scheduling.',
    canonical: 'https://neurosched.vercel.app/about'
  },
  contact: {
    title: 'Contact Us — NeuroSched Engineering Team & Community',
    description: 'Get in touch with the NeuroSched operating system developers for collaborations, research inquiries, contributions, and security reports.',
    canonical: 'https://neurosched.vercel.app/contact'
  },
  privacy: {
    title: 'Privacy Policy — NeuroSched Operating System',
    description: 'Privacy policy for NeuroSched website and interactive web simulator. Zero tracking, client-side only compute, and complete data privacy.',
    canonical: 'https://neurosched.vercel.app/privacy'
  },
  terms: {
    title: 'Terms & Conditions — NeuroSched Operating System',
    description: 'Terms of service and MIT License terms for the NeuroSched x86 AI operating system kernel, simulator, and documentation.',
    canonical: 'https://neurosched.vercel.app/terms'
  },
  '404': {
    title: '404 - Kernel Page Fault | NeuroSched Operating System',
    description: 'Page not found. The requested operating system memory address or kernel page could not be located in the address space.',
    canonical: 'https://neurosched.vercel.app/404'
  },
  '500': {
    title: '500 - Kernel Panic | NeuroSched Operating System',
    description: 'Internal server error. A fatal kernel interrupt was encountered during processing.',
    canonical: 'https://neurosched.vercel.app/500'
  }
};

const getRouteFromLocation = () => {
  if (typeof window === 'undefined') return 'home';
  let path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (path.endsWith('.html')) path = path.replace(/\.html$/, '');
  if (path === '' || path === '/' || path === '/index') return 'home';

  const hash = window.location.hash.toLowerCase().replace(/\/+$/, '');

  if (path === '/docs' || hash === '#docs' || hash === '#/docs') return 'docs';
  if (path === '/architecture' || hash === '#architecture' || hash === '#/architecture') return 'architecture';
  if (path === '/benchmarks' || hash === '#benchmarks' || hash === '#/benchmarks') return 'benchmarks';
  if (path === '/simulator' || hash === '#simulator' || hash === '#/simulator') return 'simulator';
  if (path === '/faq' || hash === '#faq' || hash === '#/faq') return 'faq';
  if (path === '/about' || hash === '#about' || hash === '#/about') return 'about';
  if (path === '/contact' || hash === '#contact' || hash === '#/contact') return 'contact';
  if (path === '/privacy' || hash === '#privacy' || hash === '#/privacy') return 'privacy';
  if (path === '/terms' || hash === '#terms' || hash === '#/terms') return 'terms';
  if (path === '/404' || hash === '#404' || hash === '#/404') return '404';
  if (path === '/500' || hash === '#500' || hash === '#/500') return '500';

  return 'home';
};

const updatePageSEO = (view) => {
  if (typeof document === 'undefined') return;

  const meta = SEO_META[view] || SEO_META.home;
  document.title = meta.title;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', meta.description);

  let canonEl = document.querySelector('link[rel="canonical"]');
  if (canonEl) canonEl.setAttribute('href', meta.canonical);

  const ogTitleEl = document.querySelector('meta[property="og:title"]');
  if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);

  const ogDescEl = document.querySelector('meta[property="og:description"]');
  if (ogDescEl) ogDescEl.setAttribute('content', meta.description);

  const ogUrlEl = document.querySelector('meta[property="og:url"]');
  if (ogUrlEl) ogUrlEl.setAttribute('content', meta.canonical);
};

export default function App() {
  const [currentView, setCurrentView] = useState(() => getRouteFromLocation());
  const [currentMode, setCurrentMode] = useState('architect');

  useEffect(() => {
    const handleLocationChange = () => {
      const nextView = getRouteFromLocation();
      setCurrentView(nextView);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    updatePageSEO(currentView);

    if (currentView === 'docs') {
      document.body.style.backgroundColor = '#000000';
      document.documentElement.style.backgroundColor = '#000000';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.documentElement.style.backgroundColor = '#ffffff';
    }
  }, [currentView]);

  const navigateTo = (view) => {
    const targetPath = view === 'home' ? '/' : `/${view}`;
    
    // Only push if path is changing
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    
    setCurrentView(view);
    updatePageSEO(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMode = () => {
    setCurrentMode((prev) => (prev === 'architect' ? 'beginner' : 'architect'));
  };

  // Dedicated OpenCode Docs Page
  if (currentView === 'docs') {
    return (
      <Docs
        onNavigateHome={() => navigateTo('home')}
      />
    );
  }

  // Multipage Showcase Views
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white font-sans antialiased flex flex-col justify-between">
      <div>
        <Navbar
          currentView={currentView}
          currentMode={currentMode}
          toggleMode={toggleMode}
          onNavigate={navigateTo}
        />

        <main>
          {currentView === 'home' && (
            <HomeView
              currentMode={currentMode}
              setMode={setCurrentMode}
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'architecture' && (
            <ArchitectureView
              currentMode={currentMode}
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'benchmarks' && (
            <BenchmarksView
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'simulator' && (
            <SimulatorView
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'faq' && (
            <FAQView
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'about' && (
            <AboutView
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'contact' && (
            <ContactView
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'privacy' && (
            <PrivacyView
              onNavigate={navigateTo}
            />
          )}

          {currentView === 'terms' && (
            <TermsView
              onNavigate={navigateTo}
            />
          )}

          {currentView === '404' && (
            <NotFoundView
              onNavigate={navigateTo}
            />
          )}

          {currentView === '500' && (
            <ServerErrorView
              onNavigate={navigateTo}
            />
          )}
        </main>
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
