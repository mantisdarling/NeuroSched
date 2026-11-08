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
import OSKnowledgeBase from './components/OSKnowledgeBase';
import Quickstart from './components/Quickstart';
import Footer from './components/Footer';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import PrivacyView from './components/PrivacyView';
import TermsView from './components/TermsView';
import ErrorView from './components/ErrorView';
import { ArrowLeft, Cpu, Activity, TrendingUp, HelpCircle } from 'lucide-react';

const SEO_MAP = {
  home: {
    title: "Operating System: NeuroSched x86 AI Operating System",
    description: "Operating system definition, architecture, and live simulation of NeuroSched, the open source 32 bit x86 AI operating system kernel with embedded neural scheduling, zero malloc, and verified benchmarks.",
    canonical: "https://neurosched.vercel.app/"
  },
  simulator: {
    title: "Interactive Kernel Simulator: NeuroSched Operating System",
    description: "Simulate the NeuroSched operating system kernel in your browser. Live 60 FPS neural canvas forward pass visualizer, confidence fallback threshold, and COM1 serial console.",
    canonical: "https://neurosched.vercel.app/simulator"
  },
  architecture: {
    title: "Kernel Architecture: 32 Bit x86 Neural Engine | NeuroSched",
    description: "In depth breakdown of the NeuroSched operating system architecture: 5 element PCB state vector, MLP layer topology, Taylor sigmoid polynomial, and zero dynamic heap design.",
    canonical: "https://neurosched.vercel.app/architecture"
  },
  benchmarks: {
    title: "Verified Benchmarks: QEMU Empirical Performance | NeuroSched",
    description: "Empirical performance benchmarks comparing NeuroSched against standard Round Robin across 64 ticks: 16.8 percent lower wait time, 14.2 percent faster turnaround.",
    canonical: "https://neurosched.vercel.app/benchmarks"
  },
  faq: {
    title: "Operating System FAQ: What is an Operating System | NeuroSched",
    description: "Comprehensive operating system FAQ: what is an operating system, what is an operating system example, What is OS type in BIOS, Linux operating system, and AI operating system architecture.",
    canonical: "https://neurosched.vercel.app/faq"
  },
  docs: {
    title: "Documentation: NeuroSched Kernel Architecture and Freestanding C Engine",
    description: "Complete technical specifications for the NeuroSched 32 bit x86 kernel: Multiboot2 handshake, x87 FPU setup, 5 8 1 MLP forward pass, Taylor sigmoid math, and zero malloc layout.",
    canonical: "https://neurosched.vercel.app/docs"
  },
  about: {
    title: "About NeuroSched: x86 Neural Operating System Kernel",
    description: "Discover the genesis and vision behind NeuroSched, the open source 32 bit x86 AI operating system kernel with freestanding machine learning scheduling.",
    canonical: "https://neurosched.vercel.app/about"
  },
  contact: {
    title: "Contact Engineering: NeuroSched Research Team",
    description: "Get in touch with the NeuroSched research maintainers for academic collaboration, kernel bug reports, or security vulnerability disclosures.",
    canonical: "https://neurosched.vercel.app/contact"
  },
  privacy: {
    title: "Privacy Policy: NeuroSched Data Protection and Cookie Disclosures",
    description: "NeuroSched privacy policy detailing cookie usage, Google DoubleClick DART ad policies, GDPR entitlements, CCPA disclosures, and zero user tracking.",
    canonical: "https://neurosched.vercel.app/privacy"
  },
  terms: {
    title: "Terms of Use: NeuroSched Open Source MIT Licensing",
    description: "Terms of use and open source MIT licensing conditions for NeuroSched 32 bit x86 operating system source code and academic citations.",
    canonical: "https://neurosched.vercel.app/terms"
  },
  notfound: {
    title: "404: Page Not Found | NeuroSched Operating System",
    description: "The requested operating system route or memory sector could not be resolved in the active partition.",
    canonical: "https://neurosched.vercel.app/404"
  },
  error: {
    title: "500: Internal Server Exception | NeuroSched Operating System",
    description: "An unexpected runtime instruction exception was trapped by the supervisor layer.",
    canonical: "https://neurosched.vercel.app/500"
  }
};

const getRouteFromLocation = () => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const hash = window.location.hash.toLowerCase();

  if (path === '/docs' || hash === '#/docs' || hash === '#docs') return 'docs';
  if (path === '/simulator') return 'simulator';
  if (path === '/architecture') return 'architecture';
  if (path === '/benchmarks') return 'benchmarks';
  if (path === '/faq') return 'faq';
  if (path === '/about') return 'about';
  if (path === '/contact') return 'contact';
  if (path === '/privacy') return 'privacy';
  if (path === '/terms') return 'terms';
  if (path === '/404') return 'notfound';
  if (path === '/500') return 'error';
  if (path === '/' || path === '') return 'home';

  return 'notfound';
};

const updatePageSEO = (view) => {
  if (typeof document === 'undefined') return;
  const meta = SEO_MAP[view] || SEO_MAP.home;
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

function App() {
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
      document.body.style.backgroundColor = '#f5f5f7';
      document.documentElement.style.backgroundColor = '#f5f5f7';
    }
  }, [currentView]);

  const navigateTo = (view) => {
    const targetPath = view === 'home' ? '/' : `/${view}`;
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

  /* Standalone OpenCode Terminal Docs Page */
  if (currentView === 'docs') {
    return (
      <Docs
        onNavigateHome={() => navigateTo('home')}
        onLaunchSimulator={() => {
          navigateTo('simulator');
        }}
      />
    );
  }

  /* Dedicated Simulator Deep Dive Page */
  if (currentView === 'simulator') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          
          <div className="bg-white border-b border-[#e0e0e0] py-6 px-4 lg:px-8">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1d4ed8] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Full Showcase</span>
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] rounded-full text-[12px] font-semibold">
                <Activity className="w-3.5 h-3.5" />
                <span>Live Interactive Simulator</span>
              </div>
            </div>
          </div>

          <Simulator />

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
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated Architecture Deep Dive Page */
  if (currentView === 'architecture') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          
          <div className="bg-white border-b border-[#e0e0e0] py-6 px-4 lg:px-8">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1d4ed8] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Full Showcase</span>
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Kernel Architecture</span>
              </div>
            </div>
          </div>

          <Architecture currentMode={currentMode} />
          <CodeExplorer />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated Benchmarks Deep Dive Page */
  if (currentView === 'benchmarks') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          
          <div className="bg-white border-b border-[#e0e0e0] py-6 px-4 lg:px-8">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1d4ed8] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Full Showcase</span>
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded-full text-[12px] font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Verified Benchmarks</span>
              </div>
            </div>
          </div>

          <Benchmarks />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated FAQ Knowledge Base Page */
  if (currentView === 'faq') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          
          <div className="bg-white border-b border-[#e0e0e0] py-6 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1d4ed8] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Full Showcase</span>
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Knowledge Base</span>
              </div>
            </div>
          </div>

          <OSKnowledgeBase />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated About Page */
  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          <AboutView onNavigateHome={() => navigateTo('home')} />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated Contact Page */
  if (currentView === 'contact') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          <ContactView onNavigateHome={() => navigateTo('home')} />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated Privacy Policy Page */
  if (currentView === 'privacy') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          <PrivacyView onNavigateHome={() => navigateTo('home')} />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Dedicated Terms of Use Page */
  if (currentView === 'terms') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          <TermsView onNavigateHome={() => navigateTo('home')} />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* 404 Page Not Found View */
  if (currentView === 'notfound') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          <ErrorView code={404} onNavigateHome={() => navigateTo('home')} onNavigateDocs={() => navigateTo('docs')} />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* 500 Internal Error View */
  if (currentView === 'error') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased flex flex-col justify-between">
        <div>
          <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
          <ErrorView code={500} onNavigateHome={() => navigateTo('home')} onNavigateDocs={() => navigateTo('docs')} />
        </div>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  /* Full Landing Showcase Experience */
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] selection:bg-[#1d4ed8] selection:text-white font-sans antialiased">
      <Navbar currentMode={currentMode} toggleMode={toggleMode} onNavigateDocs={() => navigateTo('docs')} onNavigate={navigateTo} />
      <Hero currentMode={currentMode} />
      <AudienceToggle currentMode={currentMode} setMode={setCurrentMode} />
      <HowToUse />
      <Simulator />
      
      {/* Interactive Shell and Neural Inspector Section */}
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
      <OSKnowledgeBase />
      <Quickstart />
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Kernel trapped exception:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased flex flex-col justify-between">
          <ErrorView code={500} onNavigateHome={() => window.location.href = '/'} onNavigateDocs={() => window.location.href = '/docs'} />
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Root() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
