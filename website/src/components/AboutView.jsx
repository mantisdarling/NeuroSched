import React from 'react';
import { ArrowLeft, Cpu, ShieldCheck, Code, Globe, Award, Terminal, Github } from 'lucide-react';

export default function AboutView({ onNavigateHome }) {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-white border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full Showcase</span>
            </button>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">About NeuroSched</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Project Mission and Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              About NeuroSched.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              An open source research operating system kernel exploring deterministic machine learning inside bare metal systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Mission Card */}
          <div className="appleCardLight p-8 sm:p-10 bg-white border border-[#e0e0e0] space-y-5">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <Globe className="w-6 h-6 text-[#1d4ed8]" />
              <span>Project Genesis and Vision</span>
            </h2>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              Operating system kernels have historically relied on heuristic dispatch algorithms designed decades ago. While Round Robin, Priority Queues, and Completely Fair Scheduling provide predictable execution, they operate strictly on static human engineered formulas that cannot dynamically discover multi variable workload patterns.
            </p>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              NeuroSched was engineered by MANTIS (mantisdarling) to answer a fundamental computer systems research question: Can a lightweight neural network execute inside freestanding kernel space to schedule processes with lower wait latency, without sacrificing mathematical determinism or introducing memory safety risks?
            </p>
          </div>

          {/* Three Core Guarantees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center font-bold">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Zero Malloc Layout</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                All 57 floating point model parameters reside in read only rodata memory. Neural activations execute entirely on the kernel stack with 0 bytes dynamic heap allocation.
              </p>
            </div>

            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Deterministic Safety</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                A hard confidence gate at 0.65 ensures that any uncertain or out of distribution workload automatically defers to Round Robin, guaranteeing 100 percent kernel stability.
              </p>
            </div>

            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Hardware Math</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Direct x87 FPU hardware acceleration initialized via Control Register 0 flags in assembly before entering freestanding C execution routines.
              </p>
            </div>
          </div>

          {/* Governance and Author Profile Card */}
          <div className="appleCardLight p-8 sm:p-10 bg-white border border-[#e0e0e0] space-y-6">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
              Maintainer and Open Source Governance
            </h2>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              NeuroSched is maintained by MANTIS under the permissive MIT Open Source License. Contributions adhere to the Developer Certificate of Origin (DCO version 1.1) to ensure rigorous peer review, academic integrity, and software traceability.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/mantisdarling/NeuroSched"
                target="_blank"
                rel="noreferrer"
                className="appleBtnPrimary text-[14px] !py-2.5 !px-5 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Repository</span>
              </a>
              <button
                onClick={onNavigateHome}
                className="appleBtnSecondary text-[14px] !py-2.5 !px-5"
              >
                <span>Back to Showcase</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
