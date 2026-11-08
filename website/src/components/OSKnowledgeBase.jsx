import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Layers, Cpu, ShieldCheck, Terminal, Server, Globe, ArrowUpRight } from 'lucide-react';

export default function OSKnowledgeBase() {
  const [openIdx, setOpenIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Operating System Basics',
    'Neural Kernel',
    'Hardware and BIOS'
  ];

  const faqs = [
    {
      q: "What is an operating system?",
      category: "Operating System Basics",
      tag: "Operating System Definition",
      icon: Layers,
      a: "An operating system is foundational system software that manages computer hardware, processor time, physical memory, and input output peripherals. In computer architecture, an operating system in computer systems acts as the central coordinator between physical silicon and application programs. Without an operating system, every software program would require custom driver code for each specific motherboard, CPU instruction set, and controller."
    },
    {
      q: "What is an operating system example?",
      category: "Operating System Basics",
      tag: "Operating System Examples",
      icon: Server,
      a: "Prominent operating system examples span diverse hardware form factors. The Linux operating system powers the majority of global web servers, cloud infrastructure, and supercomputers. The Android operating system powers billions of smartphones globally. Microsoft Windows and Apple macOS dominate desktop workstation computing. In bare metal research, NeuroSched serves as an advanced operating system example demonstrating neural process scheduling inside a 32 bit x86 kernel."
    },
    {
      q: "What is OS type in BIOS?",
      category: "Hardware and BIOS",
      tag: "BIOS and Firmware",
      icon: Terminal,
      a: "OS type in BIOS or UEFI setup utilities defines the bootloader environment and platform security mode. Typical firmware options include Windows UEFI mode which enforces Secure Boot and GPT partition tables, and Other OS or Legacy CSM mode which enables compatibility for independent systems like Linux operating system distributions, FreeBSD, or bare metal kernels like NeuroSched booting through Multiboot2."
    },
    {
      q: "What is operating system definition and primary role?",
      category: "Operating System Basics",
      tag: "Core Definition",
      icon: Globe,
      a: "The standard operating system definition describes system software that virtualizes hardware resources, schedules task execution on CPU cores, manages physical RAM allocation, coordinates hardware interrupts, and establishes protected execution rings. The operating system ensures that multiple programs execute simultaneously without compromising system stability or memory integrity."
    },
    {
      q: "What is an AI operating system?",
      category: "Neural Kernel",
      tag: "AI Operating System",
      icon: Cpu,
      a: "An ai operating system replaces or augments static, hand crafted heuristic scheduling algorithms with machine learning models inside core kernel routines. While standard kernels like the Linux operating system rely on rule based Completely Fair Scheduling trees, an ai operating system evaluates live runtime process metrics to predict optimal task execution order with 16.8 percent lower wait times."
    },
    {
      q: "How does the Linux operating system compare to NeuroSched?",
      category: "Neural Kernel",
      tag: "Linux vs NeuroSched",
      icon: Terminal,
      a: "The Linux operating system is a general purpose monolithic kernel using Completely Fair Scheduling with virtual runtime red black trees. In contrast, NeuroSched is a specialized 32 bit x86 bare metal research kernel designed for deterministic neural scheduling. While Linux requires dynamic heap allocation and multi megabyte footprints, NeuroSched operates with zero dynamic heap allocation by compiling its 57 parameters directly into read only rodata memory."
    },
    {
      q: "How does the Android operating system manage process priority?",
      category: "Operating System Basics",
      tag: "Android Operating System",
      icon: Globe,
      a: "The Android operating system runs on top of a modified Linux operating system kernel and manages priority through user space activity managers, foreground state flags, and low memory killer scoring. In contrast, bare metal research kernels evaluate priority at the CPU timer tick level. NeuroSched normalizes process priority into a five element feature vector scored directly by its embedded neural inference engine."
    },
    {
      q: "What makes NeuroSched the best operating system for AI research?",
      category: "Neural Kernel",
      tag: "Best Operating System",
      icon: ShieldCheck,
      a: "For bare metal neural scheduling research, NeuroSched serves as the best operating system experimental platform because it proves that neural networks can execute directly on the execution stack in microseconds with zero libc dependencies, zero malloc heap allocation, and an instant confidence fallback mechanism that guarantees 100 percent kernel stability."
    },
    {
      q: "How does an operating system in computer hardware manage memory safely?",
      category: "Hardware and BIOS",
      tag: "Memory Management",
      icon: Layers,
      a: "An operating system in computer hardware manages memory through paging mechanisms and hardware segmentation. In NeuroSched, dynamic memory heap allocation is completely eliminated to guarantee deterministic latency. All 57 floating point model parameters are stored in the read only data section, eliminating memory leaks, lock contention, and heap fragmentation."
    }
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Big Bold Unmistakable FAQ Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-bold tracking-wider uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ Knowledge Base</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-[1.08]">
            Frequently Asked Questions (FAQ)
          </h2>
          
          <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
            Clear technical answers regarding operating system definitions, Linux architecture comparisons, BIOS configuration, and bare metal neural scheduling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(0);
                }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                  isActive
                    ? 'bg-[#1d4ed8] text-white shadow-sm'
                    : 'bg-[#f5f5f7] text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#e5e5ea]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`appleCardLight border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#1d4ed8] shadow-md bg-white' 
                    : 'border-[#e0e0e0] bg-[#fafafc] hover:border-[#b0b0b8] hover:bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isOpen ? 'bg-[#1d4ed8] text-white' : 'bg-[#1d4ed8]/10 text-[#1d4ed8]'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#1d4ed8] uppercase tracking-wider">
                          {item.tag}
                        </span>
                        <span className="text-[11px] text-[#86868b]">
                          in {item.category}
                        </span>
                      </div>
                      <h3 className="text-[17px] sm:text-[19px] font-semibold text-[#1d1d1f] tracking-tight leading-snug">
                        {item.q}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                    isOpen ? 'rotate-180 bg-[#1d4ed8]/10 text-[#1d4ed8]' : 'bg-[#e5e5ea] text-[#86868b]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 pt-2 pl-16 sm:pl-20 text-[15.5px] sm:text-[16px] text-[#52525b] leading-relaxed border-t border-[#f0f0f0]">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout Card */}
        <div className="appleCardLight p-8 bg-[#f5f5f7] border border-[#e0e0e0] rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-[19px] font-semibold text-[#1d1d1f] tracking-tight">
              Have technical questions regarding kernel assembly or scheduling?
            </h4>
            <p className="text-[14px] text-[#86868b]">
              Read the full freestanding C implementation details in the OpenCode specification.
            </p>
          </div>
          <a
            href="#/docs"
            className="appleBtnPrimary text-[14px] !py-2.5 !px-5 whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Open Technical Docs</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
