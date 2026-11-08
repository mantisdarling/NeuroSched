import React from 'react';
import { ArrowLeft, Cpu, ShieldCheck, Code, Globe, Award, ChevronRight, Terminal, Github } from 'lucide-react';

export default function AboutView({ onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#ffffff] border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <a 
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">About Us</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Project Mission & Engineering Background</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              About NeuroSched.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              NeuroSched is an experimental, bare-metal 32-bit x86 operating system kernel created to explore the frontiers of machine learning embedded directly into low-level operating system scheduling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Mission Card */}
          <div className="appleCardLight p-8 space-y-4 bg-white border border-[#e0e0e0]">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">Our Core Mission</h2>
            <p className="text-[16px] text-[#52525b] leading-[1.8]">
              Operating systems have relied on static heuristics—such as Round Robin, static priority queues, and Completely Fair Scheduler (CFS) virtual runtime trees—for over five decades. While these algorithms are simple and predictable, they struggle to balance interactive latency with compute-heavy batch workloads without complex manual tuning.
            </p>
            <p className="text-[16px] text-[#52525b] leading-[1.8]">
              NeuroSched was engineered to test whether a lightweight neural network (a 2-layer Multi-Layer Perceptron) can run directly inside the kernel's timer tick interrupt, making context-aware decisions in microseconds while guaranteeing 100% kernel stability through provable fallback mechanisms.
            </p>
          </div>

          {/* Key Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="appleCardLight p-7 space-y-3 bg-white border border-[#e0e0e0]">
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">Zero-Malloc Guarantee</h3>
              <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                Kernel heap allocators introduce fragmentation and non-deterministic locks. NeuroSched eliminates dynamic memory allocation entirely, storing all 57 static float weights (228 bytes) in the read-only data section (<code className="text-[#1d4ed8] font-mono text-xs">.rodata</code>).
              </p>
            </div>

            <div className="appleCardLight p-7 space-y-3 bg-white border border-[#e0e0e0]">
              <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">Deterministic Safety Fallback</h3>
              <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                If prediction confidence drops below <code className="text-[#16a34a] font-mono text-xs">0.65f</code>, the kernel automatically defers to standard Round Robin for that timer tick. AI enhances performance, but classical computer science guarantees safety.
              </p>
            </div>

            <div className="appleCardLight p-7 space-y-3 bg-white border border-[#e0e0e0]">
              <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">Bare-Metal Silicon Control</h3>
              <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                No virtual machines or user-space runtimes. NeuroSched configures hardware Control Register 0 (<code className="text-[#f59e0b] font-mono text-xs">CR0.EM=0, MP=1, NE=1</code>) to execute floating-point neural inference natively in the x87 FPU coprocessor.
              </p>
            </div>

            <div className="appleCardLight p-7 space-y-3 bg-white border border-[#e0e0e0]">
              <div className="w-10 h-10 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#1d1d1f]">Open-Source Transparency</h3>
              <p className="text-[14.5px] text-[#86868b] leading-relaxed">
                Licensed under the permissive MIT License. Every line of C, x86 assembly, and Python training scripts is publicly available for academic research, peer review, and community extension.
              </p>
            </div>
          </div>

          {/* Author & Maintainer */}
          <div className="appleCardLight p-8 space-y-4 bg-white border border-[#e0e0e0]">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">Project Governance & Author</h2>
            <p className="text-[16px] text-[#52525b] leading-[1.8]">
              NeuroSched is conceived, architected, and maintained by <strong>MANTIS</strong> (<a href="https://github.com/mantisdarling" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] underline underline-offset-2">@mantisdarling</a>). All contributions, issue disclosures, and pull requests adhere to Developer Certificate of Origin (DCO 1.1) standards.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="https://github.com/mantisdarling/NeuroSched"
                target="_blank"
                rel="noopener noreferrer"
                className="appleBtnPrimary text-[14px]"
              >
                <Github className="w-4 h-4 mr-1.5" />
                <span>GitHub Repository</span>
              </a>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                className="appleBtnSecondary text-[14px]"
              >
                <span>Contact the Maintainer</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
