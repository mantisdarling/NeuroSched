import React, { useState } from 'react';

export default function OSKnowledgeBase() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is an operating system?",
      a: "An operating system is foundational system software that manages computer hardware, processor time, physical memory, and input output peripherals. In computer architecture, an operating system in computer systems acts as the central coordinator between physical silicon and application programs. Without an operating system, every software program would require custom driver code for each specific motherboard, CPU instruction set, and controller."
    },
    {
      q: "What is an operating system example?",
      a: "Prominent operating system examples span diverse hardware form factors. The Linux operating system powers the majority of global web servers, cloud infrastructure, and supercomputers. The Android operating system powers billions of smartphones globally. Microsoft Windows and Apple macOS dominate desktop workstation computing. In bare metal research, NeuroSched serves as an advanced operating system example demonstrating neural process scheduling inside a 32 bit x86 kernel."
    },
    {
      q: "What is OS type in BIOS?",
      a: "OS type in BIOS or UEFI setup utilities defines the bootloader environment and platform security mode. Typical firmware options include Windows UEFI mode which enforces Secure Boot and GPT partition tables, and Other OS or Legacy CSM mode which enables compatibility for independent systems like Linux operating system distributions, FreeBSD, or bare metal kernels like NeuroSched booting through Multiboot2."
    },
    {
      q: "What is operating system definition and primary role?",
      a: "The standard operating system definition describes system software that virtualizes hardware resources, schedules task execution on CPU cores, manages physical RAM allocation, coordinates hardware interrupts, and establishes protected execution rings. The operating system ensures that multiple programs execute simultaneously without compromising system stability or memory integrity."
    },
    {
      q: "What is an AI operating system?",
      a: "An ai operating system replaces or augments static, hand crafted heuristic scheduling algorithms with machine learning models inside core kernel routines. While standard kernels like the Linux operating system rely on rule based Completely Fair Scheduling trees, an ai operating system evaluates live runtime process metrics to predict optimal task execution order with 16.8 percent lower wait times."
    },
    {
      q: "How does the Linux operating system compare to NeuroSched?",
      a: "The Linux operating system is a general purpose monolithic kernel using Completely Fair Scheduling with virtual runtime red black trees. In contrast, NeuroSched is a specialized 32 bit x86 bare metal research kernel designed for deterministic neural scheduling. While Linux requires dynamic heap allocation and multi megabyte footprints, NeuroSched operates with zero dynamic heap allocation by compiling its 57 parameters directly into read only rodata memory."
    },
    {
      q: "How does the Android operating system manage process priority?",
      a: "The Android operating system runs on top of a modified Linux operating system kernel and manages priority through user space activity managers, foreground state flags, and low memory killer scoring. In contrast, bare metal research kernels evaluate priority at the CPU timer tick level. NeuroSched normalizes process priority into a five element feature vector scored directly by its embedded neural inference engine."
    },
    {
      q: "What makes NeuroSched the best operating system for AI research?",
      a: "For bare metal neural scheduling research, NeuroSched serves as the best operating system experimental platform because it proves that neural networks can execute directly on the execution stack in microseconds with zero libc dependencies, zero malloc heap allocation, and an instant confidence fallback mechanism that guarantees 100 percent kernel stability."
    },
    {
      q: "How does an operating system in computer hardware manage memory safely?",
      a: "An operating system in computer hardware manages memory through paging mechanisms and hardware segmentation. In NeuroSched, dynamic memory heap allocation is completely eliminated to guarantee deterministic latency. All 57 floating point model parameters are stored in the read only data section, eliminating memory leaks, lock contention, and heap fragmentation."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-12 bg-white text-[#1d1d1f] border-b border-[#e5e5ea]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Pinned Header in Concourse Style */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            
            {/* Top Eyebrow with Geometric Indicator */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#1d4ed8]"></span>
                <span className="w-1.5 h-1.5 rounded-sm bg-[#3b82f6]"></span>
                <span className="w-1.5 h-1.5 rounded-sm bg-[#93c5fd]"></span>
              </div>
              <span className="text-[13px] font-semibold text-[#1d1d1f] tracking-wide uppercase">
                FAQs
              </span>
            </div>

            {/* Editorial Title matching Concourse design */}
            <h2 className="text-4xl sm:text-5xl lg:text-[46px] font-serif font-normal text-[#1d1d1f] tracking-tight leading-[1.12]">
              Frequently asked<br />questions.
            </h2>

            <p className="text-[15px] text-[#71717a] leading-relaxed pt-1">
              Explore key concepts about operating system design, kernel heuristics, and bare metal neural scheduling.
            </p>
          </div>

          {/* Right Column: Clean Accordion Rows */}
          <div className="lg:col-span-8 space-y-2.5">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-lg transition-all duration-150 ${
                    isOpen ? 'bg-[#f7f7f9]' : 'bg-[#fafafc] hover:bg-[#f4f4f7]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full text-left py-5 px-6 flex items-start gap-4 select-none"
                    aria-expanded={isOpen}
                  >
                    {/* Plus / Minus Indicator Icon */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#1d1d1f]">
                      {isOpen ? (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                          <rect y="7" width="16" height="2" rx="1" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M7 1a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1 -2 0V9H1a1 1 0 0 1 0 -2h6V1z" />
                        </svg>
                      )}
                    </div>

                    {/* Question Heading */}
                    <div className="flex-1">
                      <span className="text-[16px] sm:text-[17px] font-medium text-[#1d1d1f] tracking-tight leading-snug block">
                        {item.q}
                      </span>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="pt-4 text-[14.5px] sm:text-[15px] text-[#55555c] leading-[1.75]">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
