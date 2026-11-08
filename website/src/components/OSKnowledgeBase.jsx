import React, { useState } from 'react';
import { ChevronDown, BookOpen, Layers, Cpu, ShieldCheck, Terminal, Server, Globe, HelpCircle } from 'lucide-react';

export default function OSKnowledgeBase() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "what is an operating system",
      a: "An operating system is foundational system software that manages computer hardware, memory, processor time, and input output devices. An operating system in computer architecture serves as the master coordinator between hardware and application programs. Without an operating system, every software program would require custom driver code for each motherboard and processor model.",
      tag: "Operating System Definition"
    },
    {
      q: "what is an operating system example",
      a: "Prominent operating system examples span multiple computing environments. The Linux operating system powers enterprise servers and supercomputers worldwide. The Android operating system runs on mobile smartphones. Microsoft Windows and Apple macOS dominate desktop workstations. In experimental bare metal research, NeuroSched serves as an advanced operating system example featuring neural process scheduling on 32 bit x86 hardware.",
      tag: "Operating System Examples"
    },
    {
      q: "What is OS type in BIOS?",
      a: "OS type in BIOS or UEFI firmware defines the bootloader environment and security mode. Settings typically distinguish between Windows UEFI mode with Secure Boot, and Other OS or Legacy CSM mode which enables compatibility for independent kernels such as Linux operating system distributions, FreeBSD, and custom bare metal kernels like NeuroSched booting through Multiboot2.",
      tag: "BIOS and Firmware"
    },
    {
      q: "what is operating system definition",
      a: "The formal operating system definition describes system software that virtualizes hardware resources, schedules task execution on CPU cores, manages physical RAM, coordinates interrupts, and provides safe execution boundaries for user space applications. The operating system in computer systems guarantees that multiple programs share memory and processor execution cycles safely.",
      tag: "Core Definition"
    },
    {
      q: "what is an ai operating system",
      a: "An ai operating system incorporates machine learning models directly into kernel resource arbitration, replacing static rule based heuristics with predictive neural networks. While standard kernels like the Linux operating system rely on hand crafted completely fair scheduling trees, an ai operating system evaluates live runtime process state vectors to forecast optimal execution order with lower latency.",
      tag: "AI Operating System"
    },
    {
      q: "how does linux operating system compare to neurosched",
      a: "The Linux operating system is a general purpose monolithic kernel utilizing Completely Fair Scheduling with virtual runtime trees. In contrast, NeuroSched is a specialized 32 bit x86 research kernel designed for deterministic neural scheduling. While Linux requires dynamic heap allocation and large kernel footprints, NeuroSched guarantees zero dynamic heap allocation by placing all 57 model weights in read only rodata memory.",
      tag: "Linux vs NeuroSched"
    },
    {
      q: "how does android operating system manage task execution",
      a: "The Android operating system executes on top of a modified Linux operating system kernel, prioritizing tasks through user space activity managers and out of memory scoring. In contrast, bare metal research kernels evaluate priority at the hardware timer tick level. NeuroSched normalizes priority into a five element feature vector scored directly by its embedded neural inference engine.",
      tag: "Android Architecture"
    },
    {
      q: "what makes neurosched the best operating system for ai research",
      a: "For bare metal neural scheduling research, NeuroSched serves as the best operating system experimental platform because it operates with zero dynamic heap allocation, direct x87 floating point coprocessor execution, and an instant confidence fallback mechanism that prevents kernel instability on unknown workloads.",
      tag: "Best Operating System"
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Operating System Architecture and Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Understanding the Operating System.
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed">
            Comprehensive technical insights into operating system architecture, scheduling heuristics, and bare metal neural execution.
          </p>
        </div>

        {/* SEO Editorial Article */}
        <article className="appleCardLight p-8 sm:p-12 space-y-8 bg-[#fafafc] border border-[#e0e0e0]">
          
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              What is an Operating System in Computer Architecture
            </h3>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              When exploring <strong>what is an operating system</strong>, one must examine its primary role in computer hardware. An <strong>operating system in computer</strong> systems functions as the master supervisor program that bridges physical silicon resources with user space applications. The canonical <strong>operating system definition</strong> establishes that an operating system virtualizes physical CPU execution cores, coordinates access to system memory, arbitrates hardware interrupts, and provides protected execution rings that isolate software faults.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              Classical <strong>operating system examples</strong> such as the <strong>Linux operating system</strong> and the <strong>Android operating system</strong> employ sophisticated scheduling algorithms to ensure that background services and foreground interactive processes share processing time harmoniously. In standard Linux systems, the Completely Fair Scheduler balances execution through red black binary search trees tracking virtual runtime. In Android mobile platforms, user space background daemons coordinate with the underlying kernel to suspend inactive processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-white rounded-xl border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#1d4ed8] font-semibold text-[15px]">
                <Cpu className="w-5 h-5" />
                <span>The Classical Operating System Heuristic</span>
              </div>
              <p className="text-[14.5px] text-[#52525b] leading-relaxed">
                Standard operating system designs utilize static rules including Round Robin time slicing, Priority Queues, and Shortest Job First heuristics. While deterministic, these hand crafted rules cannot automatically adapt to changing workload distributions.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#16a34a] font-semibold text-[15px]">
                <ShieldCheck className="w-5 h-5" />
                <span>The Modern AI Operating System Paradigm</span>
              </div>
              <p className="text-[14.5px] text-[#52525b] leading-relaxed">
                NeuroSched introduces a genuine <strong>ai operating system</strong> kernel for 32 bit x86 hardware. By replacing static rules with an embedded neural network evaluating five runtime process metrics, NeuroSched reduces average process wait times by 16.8 percent.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              Why NeuroSched Serves as the Best Operating System Experiment
            </h3>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              Researchers evaluating the <strong>best operating system</strong> for bare metal machine learning require strict guarantees. Conventional neural network libraries rely heavily on standard C libraries and dynamic memory allocation with malloc. In contrast, NeuroSched proves that an <strong>ai operating system</strong> can execute directly inside freestanding kernel space with zero bytes of dynamic heap allocation. All 57 floating point model parameters reside permanently in read only rodata memory, and intermediate activations execute strictly on the stack.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              Safety remains paramount in operating system design. To prevent unexpected scheduling anomalies on out of distribution workloads, NeuroSched implements a hard confidence gate set at 0.65. If neural confidence drops below this boundary, the scheduler automatically defers to Round Robin execution for that timer tick, guaranteeing 100 percent kernel stability.
            </p>
          </div>

        </article>

        {/* Interactive FAQ Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              Operating System Frequently Asked Questions
            </h3>
            <p className="text-[15px] text-[#86868b]">
              Answers to common questions regarding operating system architecture, BIOS settings, and kernel design.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
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
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <h4 className="text-[16px] sm:text-[17px] font-semibold text-[#1d1d1f] leading-snug">
                        {item.q}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#86868b] shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? 'rotate-180 text-[#1d4ed8]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-[15px] text-[#52525b] leading-relaxed border-t border-[#e0e0e0]">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
