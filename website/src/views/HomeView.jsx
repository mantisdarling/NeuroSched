import React from 'react';
import Hero from '../components/Hero';
import AudienceToggle from '../components/AudienceToggle';
import HowToUse from '../components/HowToUse';
import Quickstart from '../components/Quickstart';
import FAQ from '../components/FAQ';
import { Cpu, Terminal, TrendingUp, BookOpen, ChevronRight, Activity, ShieldCheck, Layers, Server, Monitor, Globe } from 'lucide-react';

export default function HomeView({ currentMode, setMode, onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Hero Showcase */}
      <Hero currentMode={currentMode} onNavigate={onNavigate} />

      {/* Audience Toggle (Architect vs ELIF5) */}
      <AudienceToggle currentMode={currentMode} setMode={setMode} />

      {/* Multipage Hub Feature Grid */}
      <section className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
              Multipage Subsystems
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Explore the NeuroSched Kernel.
            </h2>
            <p className="text-[17px] text-[#86868b] leading-relaxed">
              NeuroSched is organized into dedicated architectural sub-systems. Explore each core domain below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tile 1: Architecture */}
            <div 
              onClick={() => onNavigate('architecture')}
              className="appleCardLight p-7 space-y-4 cursor-pointer hover:border-[#1d4ed8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight flex items-center justify-between">
                  <span>Architecture</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#1d4ed8] transition-colors" />
                </h3>
                <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                  5-dimensional PCB state vector, 5-8-1 MLP layer matrix, 6-term Taylor sigmoid math, and 0 bytes malloc layout.
                </p>
              </div>
              <div className="pt-2 text-[13px] font-medium text-[#1d4ed8] flex items-center gap-1">
                <span>View Architecture Page</span>
                <span>→</span>
              </div>
            </div>

            {/* Tile 2: Live Simulator */}
            <div 
              onClick={() => onNavigate('simulator')}
              className="appleCardLight p-7 space-y-4 cursor-pointer hover:border-[#1d4ed8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight flex items-center justify-between">
                  <span>Hardware Simulator</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#16a34a] transition-colors" />
                </h3>
                <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                  Live 60 FPS neural canvas forward-pass visualizer, confidence slider, COM1 console replay, and weight heatmap.
                </p>
              </div>
              <div className="pt-2 text-[13px] font-medium text-[#16a34a] flex items-center gap-1">
                <span>Launch Interactive Simulator</span>
                <span>→</span>
              </div>
            </div>

            {/* Tile 3: Benchmarks */}
            <div 
              onClick={() => onNavigate('benchmarks')}
              className="appleCardLight p-7 space-y-4 cursor-pointer hover:border-[#1d4ed8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight flex items-center justify-between">
                  <span>Verified Benchmarks</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#3b82f6] transition-colors" />
                </h3>
                <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                  QEMU serial telemetry metrics showing 16.8% lower average wait time and 14.2% faster turnaround over Round Robin.
                </p>
              </div>
              <div className="pt-2 text-[13px] font-medium text-[#3b82f6] flex items-center gap-1">
                <span>Explore Benchmark Metrics</span>
                <span>→</span>
              </div>
            </div>

            {/* Tile 4: Technical Documentation */}
            <div 
              onClick={() => onNavigate('docs')}
              className="appleCardLight p-7 space-y-4 cursor-pointer hover:border-[#1d4ed8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight flex items-center justify-between">
                  <span>Technical Docs</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#f59e0b] transition-colors" />
                </h3>
                <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                  3-column terminal documentation engine with bracket navigation, multi-tab CLI box, and full kernel reference.
                </p>
              </div>
              <div className="pt-2 text-[13px] font-medium text-[#f59e0b] flex items-center gap-1">
                <span>Open Documentation Engine</span>
                <span>→</span>
              </div>
            </div>

            {/* Tile 5: FAQ & Knowledge Base */}
            <div 
              onClick={() => onNavigate('faq')}
              className="appleCardLight p-7 space-y-4 cursor-pointer hover:border-[#1d4ed8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight flex items-center justify-between">
                  <span>Technical FAQ</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#8b5cf6] transition-colors" />
                </h3>
                <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                  Deep technical answers regarding x86 FPU coprocessor CR0 flags, Taylor math bounds, and safety invariants.
                </p>
              </div>
              <div className="pt-2 text-[13px] font-medium text-[#8b5cf6] flex items-center gap-1">
                <span>View Knowledge Base</span>
                <span>→</span>
              </div>
            </div>

            {/* Tile 6: Source Code Explorer */}
            <a 
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noreferrer"
              className="appleCardLight p-7 space-y-4 hover:border-[#1d4ed8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#111827]/10 text-[#111827] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight flex items-center justify-between">
                  <span>GitHub Repository</span>
                  <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#1d4ed8] transition-colors" />
                </h3>
                <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                  Freestanding C source code, x86 assembly bootloader, linker scripts, and automated QEMU test harnesses.
                </p>
              </div>
              <div className="pt-2 text-[13px] font-medium text-[#1d4ed8] flex items-center gap-1">
                <span>Browse Code on GitHub</span>
                <span>↗</span>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* How to Use Section */}
      <HowToUse />

      {/* 600+ Word Comprehensive On-Page Technical SEO Guide */}
      <section className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
        <article className="max-w-4xl mx-auto space-y-10">
          
          {/* Header */}
          <header className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Comprehensive Technical Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              What Is an Operating System? Understanding System Architecture and the Rise of the AI Operating System
            </h2>
            <p className="text-[17px] text-[#86868b] leading-relaxed">
              An authoritative examination of operating system definition, major operating system examples, and how NeuroSched pioneers neural process scheduling in bare-metal x86 computing.
            </p>
          </header>

          {/* Section 1: Definition & Role */}
          <div className="space-y-4 text-[16px] text-[#52525b] leading-[1.85]">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <Monitor className="w-6 h-6 text-[#1d4ed8]" />
              <span>1. Operating System Definition: What Is an Operating System in Computer Systems?</span>
            </h3>
            <p>
              To answer the foundational question—<strong>what is an operating system</strong>—one must examine the structural boundary between hardware electronics and user software. In computer science, the formal <strong>operating system definition</strong> designates it as the core system software that manages computer hardware components, coordinates memory resources, schedules processor execution time, and provides universal shared APIs for application software.
            </p>
            <p>
              Without an <strong>operating system in computer</strong> hardware, software engineers would be forced to write individual low-level assembly driver instructions for every specific central processing unit (CPU) instruction set architecture (ISA), memory controller, keyboard peripheral, and graphics buffer. The <strong>operating system</strong> solves this complexity by establishing an abstraction layer: it virtualizes hardware execution through preemptive multitasking, manages physical RAM allocation through memory management units (MMU) and page directories, and coordinates device access via interrupt service routines (ISRs).
            </p>
          </div>

          {/* Section 2: Operating System Examples */}
          <div className="space-y-4 text-[16px] text-[#52525b] leading-[1.85]">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <Server className="w-6 h-6 text-[#16a34a]" />
              <span>2. Real-World Operating System Examples: Linux, Android, and Windows</span>
            </h3>
            <p>
              When inquiring <strong>what is an operating system example</strong>, modern computing offers diverse implementations tailored to specific hardware paradigms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#374151]">
              <li>
                <strong>Linux Operating System</strong>: The premier open-source monolithic kernel powering enterprise cloud computing, supercomputers, and web servers. The <strong>linux operating system</strong> utilizes the Completely Fair Scheduler (CFS), organizing runnable tasks in a balanced red-black binary tree based on individual task virtual runtime (<code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">vruntime</code>).
              </li>
              <li>
                <strong>Android Operating System</strong>: Powering billions of mobile smartphones and embedded smart displays, the <strong>android operating system</strong> combines a modified Linux operating system kernel with the Android Runtime (ART) and user-space priority managers like LowMemoryKiller (LMK) to prioritize battery life and immediate touch latency.
              </li>
              <li>
                <strong>Desktop and Embedded Systems</strong>: Commercial <strong>operating system examples</strong> such as Microsoft Windows (hybrid NT kernel) and Apple macOS (Darwin/XNU kernel), alongside specialized real-time operating systems (RTOS) like FreeRTOS and VxWorks used in automotive controllers and aerospace avionics.
              </li>
            </ul>
          </div>

          {/* Section 3: The Rise of the AI Operating System */}
          <div className="space-y-4 text-[16px] text-[#52525b] leading-[1.85]">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <Brain className="w-6 h-6 text-[#8b5cf6]" />
              <span>3. The Emergence of the AI Operating System: How NeuroSched Reinvents CPU Scheduling</span>
            </h3>
            <p>
              While traditional <strong>operating system examples</strong> have delivered remarkable utility, their internal scheduling heuristics remain fundamentally static. Conventional schedulers rely on fixed, hand-crafted rules—such as uniform quantum slices in Round Robin or heuristic priority decay. Under mixed real-world workloads where long compute-heavy batch tasks run concurrently with bursts of interactive I/O jobs, static algorithms inevitably suffer from starvation and inflated queue wait times.
            </p>
            <p>
              This limitation catalyzed the creation of the <strong>ai operating system</strong>. NeuroSched is an experimental, bare-metal 32-bit x86 <strong>ai operating system</strong> kernel where CPU scheduling decisions are predicted dynamically by an embedded neural network inference engine running in freestanding C. Rather than relying on rigid formulas, NeuroSched extracts a real-time 5-dimensional process state vector at every timer interrupt tick:
            </p>

            <div className="border border-[#e0e0e0] rounded-[12px] overflow-hidden my-4">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-[#f5f5f7] border-b border-[#e0e0e0] text-[#1d1d1f]">
                  <tr>
                    <th className="p-3.5 font-semibold">Input Feature</th>
                    <th className="p-3.5 font-semibold">Kernel PCB Source</th>
                    <th className="p-3.5 font-semibold">Scheduling Objective</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e0e0e0] text-[#52525b]">
                  <tr>
                    <td className="p-3.5 font-mono text-[#1d4ed8] font-semibold">wait_ticks</td>
                    <td className="p-3.5 font-mono text-xs">wait_ticks / dynamic_max_wait</td>
                    <td className="p-3.5">Starvation prevention & task aging acceleration</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono text-[#1d4ed8] font-semibold">remaining_burst</td>
                    <td className="p-3.5 font-mono text-xs">remaining_burst / dynamic_max_burst</td>
                    <td className="p-3.5">Shortest Job First affinity for rapid job completion</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono text-[#1d4ed8] font-semibold">priority</td>
                    <td className="p-3.5 font-mono text-xs">normalize(priority, 1.0, 5.0)</td>
                    <td className="p-3.5">Static user-space scheduling class weight</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono text-[#1d4ed8] font-semibold">io_bound</td>
                    <td className="p-3.5 font-mono text-xs">p-&gt;io_bound ? 1.0 : 0.0</td>
                    <td className="p-3.5">Interactive response prioritization</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-mono text-[#1d4ed8] font-semibold">io_yield_count</td>
                    <td className="p-3.5 font-mono text-xs">normalize(yield_count, 0.0, 7.0)</td>
                    <td className="p-3.5">Historical voluntary yield frequency tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              To execute neural inference safely inside kernel space, NeuroSched guarantees <strong>0 Bytes dynamic heap allocation (zero malloc)</strong>. All 57 static float parameters (228 bytes total across W1, B1, W2, B2) are compiled directly into the binary's read-only data (<code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">.rodata</code>) section. Hidden layer activations utilize the Rectified Linear Unit (ReLU), while output scores are calculated using a 6-term Taylor polynomial approximation of the sigmoid function clamped to <code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">[-10, +10]</code>, avoiding dependencies on standard C math libraries (<code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">math.h</code>).
            </p>
          </div>

          {/* Section 4: Why NeuroSched is the Best OS Experiment */}
          <div className="space-y-4 text-[16px] text-[#52525b] leading-[1.85]">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#1d4ed8]" />
              <span>4. Performance & Safety: Why NeuroSched Represents the Best Operating System Experiment</span>
            </h3>
            <p>
              Researchers evaluating the <strong>best operating system</strong> for machine-learning-assisted scheduling require absolute determinism. NeuroSched solves the unpredictability of artificial intelligence by implementing a hard-coded <strong>confidence fallback threshold (<code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">NN_CONF_THRESH = 0.65f</code>)</strong>. When the highest neural score drops below 0.65 (signaling an out-of-distribution workload), the kernel immediately defers to circular Round Robin dispatch for that tick, guaranteeing 100% kernel stability with zero kernel panics.
            </p>
            <p>
              In verified headless QEMU i386 telemetry tests, NeuroSched demonstrates a **16.8% lower average process wait time** (28.60 ticks versus 34.40 ticks under Round Robin) and a **14.2% faster average turnaround time** (35.00 ticks versus 40.80 ticks). By combining bare-metal x87 FPU hardware acceleration, zero-malloc memory safety, and learned process scoring, NeuroSched exemplifies the future of intelligent <strong>operating system</strong> architecture.
            </p>
          </div>

        </article>
      </section>

      {/* Developer Quickstart Commands */}
      <Quickstart />

      {/* FAQ Accordion */}
      <FAQ />
    </div>
  );
}
