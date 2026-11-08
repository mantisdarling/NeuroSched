import React from 'react';
import FAQ from '../components/FAQ';
import { ArrowLeft, ShieldCheck, BookOpen, Terminal, ChevronRight, HelpCircle } from 'lucide-react';

export default function FAQView({ onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Page Header with Breadcrumbs */}
      <section className="bg-[#ffffff] border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-4">
          
          {/* Breadcrumb Navigation */}
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
            <span className="text-[#1d1d1f] font-medium">FAQ</span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Kernel Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Frequently Asked Technical Questions.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Authoritative technical answers regarding bare-metal x86 constraints, zero-malloc heap guarantees, x87 FPU coprocessor assembly, and freestanding neural activation math.
            </p>
          </div>

        </div>
      </section>

      {/* Main FAQ Accordion Component */}
      <FAQ />

      {/* Additional Deep Questions Strip */}
      <section className="py-16 px-4 lg:px-8 bg-[#fafafc] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
              Looking for Complete Source References?
            </h2>
            <p className="text-[#86868b] text-[15.5px] leading-relaxed">
              All implementation invariants discussed here can be verified directly in the open-source kernel codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href="/docs"
              onClick={(e) => { e.preventDefault(); onNavigate('docs'); }}
              className="appleCardLight p-6 text-left hover:border-[#1d4ed8] transition-all group block"
            >
              <div className="flex items-center justify-between pb-2">
                <span className="text-[13px] font-mono text-[#1d4ed8] font-semibold">Docs Engine</span>
                <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#1d4ed8] transition-colors" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Read 3-Column Kernel Specs</h3>
              <p className="text-[#86868b] text-[13.5px] mt-1">Full documentation with code snippets, registers, and CLI execution tabs.</p>
            </a>

            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="appleCardLight p-6 text-left hover:border-[#1d4ed8] transition-all group"
            >
              <div className="flex items-center justify-between pb-2">
                <span className="text-[13px] font-mono text-[#111827] font-semibold">GitHub Repo</span>
                <ChevronRight className="w-4 h-4 text-[#86868b] group-hover:text-[#1d4ed8] transition-colors" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Browse Freestanding C Code</h3>
              <p className="text-[#86868b] text-[13.5px] mt-1">Review kernel/nn_infer.c, boot/boot.S, and linker.ld on GitHub.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
