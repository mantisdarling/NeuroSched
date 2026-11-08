import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceToggle from './components/AudienceToggle';
import HowToUse from './components/HowToUse';
import Simulator from './components/Simulator';
import Architecture from './components/Architecture';
import Docs from './components/Docs';
import CodeExplorer from './components/CodeExplorer';
import SerialTerminal from './components/SerialTerminal';
import WeightHeatmap from './components/WeightHeatmap';
import MultiAlgoComparison from './components/MultiAlgoComparison';
import Benchmarks from './components/Benchmarks';
import Quickstart from './components/Quickstart';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const isDocsRoute = () => {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  return (
    hash === '#docs' ||
    hash === '#/docs' ||
    hash.startsWith('#/docs/') ||
    hash.startsWith('#docs/') ||
    path === '/docs' ||
    path.startsWith('/docs/')
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState(() => (isDocsRoute() ? 'docs' : 'home'));
  const [currentMode, setCurrentMode] = useState('architect');

  useEffect(() => {
    const handleLocationChange = () => {
      if (isDocsRoute()) {
        setCurrentView('docs');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentView === 'docs') {
      document.body.style.backgroundColor = '#000000';
      document.documentElement.style.backgroundColor = '#000000';
    } else {
      document.body.style.backgroundColor = '#f5f5f7';
      document.documentElement.style.backgroundColor = '#f5f5f7';
    }
  }, [currentView]);

  const navigateToDocs = () => {
    window.location.hash = '#/docs';
    setCurrentView('docs');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const launchSimulatorFromDocs = () => {
    window.location.hash = '#simulator';
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('simulator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMode = () => {
    setCurrentMode((prev) => (prev === 'architect' ? 'beginner' : 'architect'));
  };

  // If on docs route, ONLY render the standalone OpenCode-style Docs page
  if (currentView === 'docs') {
    return (
      <Docs
        onNavigateHome={navigateToHome}
        onLaunchSimulator={launchSimulatorFromDocs}
      />
    );
  }

  // Otherwise render the full landing showcase page
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased">
      <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={navigateToDocs} />
      <Hero currentMode={currentMode} />
      <AudienceToggle currentMode={currentMode} setMode={setCurrentMode} />
      <HowToUse />
      <Simulator />
      
      {/* Interactive Shell & Neural Inspector Section */}
      <section className="py-20 px-4 lg:px-8 border-b border-[#3a3a3c] bg-[#252527] text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-[13px] font-semibold text-[#3b82f6] uppercase tracking-wider">
              Kernel Telemetry and Neural Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-tight">
              Interactive Shell and Model Inspector.
            </h2>
            <p className="text-[17px] text-[#86868b] leading-relaxed">
              Test low level kernel routines in the serial console, inspect individual MLP synaptic weights, and evaluate benchmark outcomes.
            </p>
          </div>

          <div className="space-y-8">
            <SerialTerminal />
            <WeightHeatmap />
            <MultiAlgoComparison />
          </div>

        </div>
      </section>

      <Architecture currentMode={currentMode} />
      <CodeExplorer />
      <Benchmarks />
      <Quickstart />
      <FAQ />
      <Footer />
    </div>
  );
}
