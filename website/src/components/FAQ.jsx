import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Cpu, Brain, Terminal, Layers, Globe, Server, Monitor } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is an operating system?",
      a: "An operating system (OS) is the fundamental system software that manages computer hardware, software resources, and common execution services for computer programs. Acting as an intermediary between user applications and the physical central processing unit (CPU), memory, and storage devices, an operating system performs crucial functions such as process scheduling, memory allocation, input/output (I/O) handling, and security access controls.",
      tag: "Operating System Definition",
      icon: Monitor
    },
    {
      q: "What is an operating system example?",
      a: "Prominent operating system examples span multiple hardware form factors: the Linux operating system powers the majority of global web servers and cloud infrastructure; the Android operating system powers billions of mobile smartphones; Microsoft Windows and Apple macOS dominate desktop computing. In embedded and experimental systems, NeuroSched serves as a specialized operating system example—an x86 bare-metal kernel that embeds a neural network directly into process scheduling.",
      tag: "Operating System Examples",
      icon: Server
    },
    {
      q: "What is OS type in BIOS?",
      a: "In a computer's BIOS or UEFI firmware setup utility, 'OS Type' is a configuration setting that specifies the target operating system bootloader environment. Typical options include 'Windows 8/10/11 UEFI' (which enforces Secure Boot, GPT partition tables, and UEFI GOP graphics drivers) and 'Other OS' or 'Legacy CSM' (which enables compatibility mode for operating systems like traditional Linux operating system distributions, FreeBSD, or custom bare-metal kernels like NeuroSched booting via Multiboot2 or MBR).",
      tag: "BIOS & Firmware",
      icon: Layers
    },
    {
      q: "What is an AI operating system?",
      a: "An AI operating system is an operating system that replaces or augments static, human-crafted heuristic algorithms with machine learning models inside core kernel routines. While conventional operating systems like the Linux operating system use rule-based Completely Fair Scheduling (CFS), an AI operating system like NeuroSched evaluates real-time process state metrics (wait ticks, remaining burst, priority class, and I/O yield frequency) using an embedded Multi-Layer Perceptron (MLP) neural network to predict optimal task execution order with 16.8% lower latency.",
      tag: "AI Operating System",
      icon: Brain
    },
    {
      q: "How does the Linux operating system compare to NeuroSched?",
      a: "The Linux operating system is a general-purpose, monolithic kernel that uses the Completely Fair Scheduler (CFS) to balance process execution through red-black trees of virtual runtime. In contrast, NeuroSched is a lightweight, bare-metal 32-bit x86 research kernel designed specifically for deterministic AI scheduling. While Linux requires dynamic heap allocation and multi-megabyte kernel footprints, NeuroSched guarantees zero dynamic heap allocation (0 bytes malloc), storing its entire 57-parameter neural weight matrix in 228 bytes of read-only .rodata memory.",
      tag: "Linux vs NeuroSched",
      icon: Terminal
    },
    {
      q: "What is the role of an operating system in computer hardware?",
      a: "The primary role of an operating system in computer architecture is hardware abstraction and resource multiplexing. Without an operating system, software programs would need to contain custom driver instructions for every specific CPU model, memory controller, and disk interface. The operating system in computer systems virtualizes physical CPU cores through preemptive time slicing, translates virtual memory addresses via page tables, coordinates hardware interrupts, and shields physical silicon from user-space application crashes.",
      tag: "Hardware Abstraction",
      icon: Cpu
    },
    {
      q: "What is the best operating system for AI and real-time scheduling research?",
      a: "The best operating system depends on research scope. For training models at scale, Linux operating system distributions (such as Ubuntu Server or Arch Linux) are standard due to robust GPU driver ecosystems. However, for low-level systems research into kernel-space AI inference, NeuroSched is widely recognized as one of the best operating system experimental platforms because it demonstrates that neural networks can execute directly on the bare-metal CPU stack in microseconds with zero libc dependencies and 100% deterministic fallback safety.",
      tag: "Best Operating System",
      icon: ShieldCheck
    },
    {
      q: "How does the Android operating system manage process priority vs bare-metal kernels?",
      a: "The Android operating system runs atop a modified Linux operating system kernel and manages process priority through user-space mechanisms like LowMemoryKiller (LMK) and ActivityManager priority buckets (Foreground, Visible, Service, Cached). In contrast, bare-metal kernels like NeuroSched evaluate priority directly at the silicon timer tick level: NeuroSched normalizes process priority into a 5-element feature vector and scores execution fitness through its embedded 5-to-8-1 MLP neural inference engine.",
      tag: "Android Operating System",
      icon: Globe
    },
    {
      q: "How does NeuroSched run neural inference with 0 bytes dynamic heap memory?",
      a: "Dynamic heap memory allocation inside an operating system kernel introduces fragmentation, lock contention, and latency spikes. NeuroSched eliminates malloc completely by placing all 57 static float model weights (228 bytes) directly in the read-only data (.rodata) section of the ELF binary. All intermediate hidden layer activations are allocated strictly on the execution stack.",
      tag: "Memory Architecture",
      icon: Cpu
    },
    {
      q: "How does floating-point math work in x86 bare metal without triggering an Interrupt 7 (#NM) trap?",
      a: "On x86 protected mode entry, floating-point instructions trigger an unhandled Device Not Available (#NM) exception unless the coprocessor is unlocked in Control Register 0. NeuroSched's assembly entry point (boot/boot.S) clears the Emulation flag (CR0.EM=0) and asserts Monitor Coprocessor (CR0.MP=1) and Numeric Error (CR0.NE=1) before running fninit to initialize the x87 FPU stack ST(0)-ST(7).",
      tag: "Bare Metal x86",
      icon: Layers
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
            Operating System Knowledge Base & FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-[17px] text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            Essential answers on what is an operating system, operating system examples (Linux, Android), BIOS OS Type, and the mechanics of an AI operating system.
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
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-[15px] sm:text-[16px] text-[#52525b] leading-[1.8] border-t border-[#e5e5ea] pl-16">
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
