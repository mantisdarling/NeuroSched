import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Cpu, Brain, Terminal, Layers } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What makes NeuroSched different from traditional schedulers like Linux CFS or Round Robin?",
      a: "Traditional operating systems rely on rigid, hand-crafted heuristics—Round Robin grants uniform time slices regardless of task urgency, while Linux CFS balances a red-black tree of virtual runtime. NeuroSched evaluates a real-time 5-dimensional feature vector (wait ticks, remaining burst, priority, I/O affinity, yield count) through an embedded 2-layer Multi-Layer Perceptron (MLP) to dynamically score process execution order, achieving a 16.8% reduction in average wait time.",
      tag: "Scheduling Theory",
      icon: Brain
    },
    {
      q: "How does NeuroSched achieve zero dynamic memory allocation (0 Bytes malloc)?",
      a: "Dynamic heap allocation inside an OS kernel introduces fragmentation, lock contention, and non-deterministic latency. NeuroSched eliminates malloc completely by placing all 57 static float model weights (228 bytes) directly in the read-only data (.rodata) section of the ELF binary. All intermediate hidden layer activations are allocated strictly on the execution stack.",
      tag: "Memory Architecture",
      icon: Cpu
    },
    {
      q: "How does the kernel execute floating-point math without triggering an Interrupt 7 (#NM) trap?",
      a: "On x86 protected mode entry, floating-point instructions trigger an unhandled Device Not Available (#NM) exception unless the coprocessor is unlocked in Control Register 0. NeuroSched's assembly entry point (boot/boot.S) clears the Emulation flag (CR0.EM=0) and asserts Monitor Coprocessor (CR0.MP=1) and Numeric Error (CR0.NE=1) before running fninit to initialize the x87 FPU stack ST(0)-ST(7).",
      tag: "Bare Metal x86",
      icon: Layers
    },
    {
      q: "How is the transcendental Sigmoid activation computed without math.h in freestanding C?",
      a: "Because standard C runtime libraries (libc and libm) are unavailable in a bare-metal kernel, NeuroSched approximates sigmoid σ(x) = 1 / (1 + e^-x) using a 6-term Taylor polynomial expansion of e^x. The inputs are clamped to [-10.0f, +10.0f] to prevent coprocessor register overflow while maintaining ±0.5% numerical precision.",
      tag: "Freestanding Math",
      icon: Terminal
    },
    {
      q: "What is the confidence fallback threshold and how does it prevent kernel instability?",
      a: "To eliminate out-of-distribution failure modes, NeuroSched enforces a confidence barrier (NN_CONF_THRESH = 0.65f). If the top predicted process score falls below 0.65, the scheduler logs an event over COM1 serial UART and immediately reverts to deterministic O(1) Round Robin dispatch for that timer tick, guaranteeing 100% kernel stability.",
      tag: "Safety & Determinism",
      icon: ShieldCheck
    },
    {
      q: "How do I build, test, and emulate NeuroSched locally?",
      a: "NeuroSched requires standard x86 build tools (gcc, make, qemu-system-i386, xorriso). Run 'make clean && make' to produce the Multiboot2 kernel ELF binary and bootable ISO image, or execute 'bash scripts/boot-test.sh' to launch headless QEMU emulation with real-time CSV execution telemetry streaming over COM1 serial port (0x3F8).",
      tag: "Developer Workflow",
      icon: HelpCircle
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
            Technical Architecture & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-[17px] text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            In-depth technical answers regarding bare-metal x86 design, freestanding neural inference, and kernel safety invariants.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="appleCardLight border border-[#e0e0e0] bg-[#fafafc] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 select-none hover:bg-[#f5f5f7] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#1d1d1f] leading-snug">
                        {item.q}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#86868b] shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? 'rotate-180 text-[#1d4ed8]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-[15px] sm:text-[16px] text-[#52525b] leading-[1.7] border-t border-[#e5e5ea] pl-16">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
