import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Cpu, Brain, Terminal, Layers, Globe, Server, Monitor } from 'lucide-react';

/*
  FAQ — Apple.com accordion style
  Clean divider lines. No decorative icon circles.
  Used both on HomeView (first 4 items) and standalone FAQView (all 10).
*/

const ALL_FAQS = [
  {
    q: 'What is an operating system?',
    tag: 'Operating System Definition',
    a: 'An operating system (OS) is the foundational software layer that manages a computer\'s hardware resources — allocating processor time, memory, and I/O peripherals between competing processes. Acting as an intermediary between user applications and physical hardware, an operating system performs process scheduling, memory allocation, I/O handling, and security access controls. Without an operating system, every application would need custom driver code for every CPU model and peripheral.',
  },
  {
    q: 'What is an operating system example?',
    tag: 'Operating System Examples',
    a: 'Prominent operating system examples span every hardware category: the Linux operating system powers the majority of global web servers and cloud infrastructure; the Android operating system runs on billions of smartphones; Microsoft Windows and macOS dominate desktop computing; FreeRTOS and Zephyr target embedded microcontrollers. NeuroSched is a research-grade operating system example — a 32-bit x86 bare-metal kernel that embeds a neural network directly into process scheduling.',
  },
  {
    q: 'What is OS type in BIOS?',
    tag: 'BIOS & Firmware',
    a: 'In a BIOS or UEFI firmware setup utility, "OS Type" specifies the target bootloader environment. Options typically include "Windows UEFI" (which enforces Secure Boot and GPT partition tables) and "Other OS" or "Legacy CSM" (which enables compatibility mode for Linux, FreeBSD, or bare-metal kernels like NeuroSched booting via Multiboot2). Selecting the wrong OS type causes boot failures — particularly when Secure Boot rejects an unsigned custom kernel binary.',
  },
  {
    q: 'What is an AI operating system?',
    tag: 'AI Operating System',
    a: 'An AI operating system replaces or augments static kernel heuristics with machine learning inference inside core kernel routines. While conventional operating systems like Linux use rule-based Completely Fair Scheduling (CFS), an AI operating system like NeuroSched evaluates real-time process state metrics through an embedded Multi-Layer Perceptron to predict optimal task execution order — achieving 16.8% lower average wait time with 100% deterministic fallback safety.',
  },
  {
    q: 'How does the Linux operating system compare to NeuroSched?',
    tag: 'Linux vs NeuroSched',
    a: 'The Linux operating system is a general-purpose monolithic kernel using the Completely Fair Scheduler (CFS) with virtual runtime balanced in red-black trees. NeuroSched is a lightweight 32-bit x86 research kernel designed for deterministic AI scheduling. Linux requires dynamic heap allocation and multi-megabyte kernel footprints; NeuroSched guarantees zero dynamic heap allocation (0 bytes malloc), storing its entire 57-parameter neural weight matrix in 228 bytes of read-only .rodata memory.',
  },
  {
    q: 'What is the role of an operating system in computer hardware?',
    tag: 'Hardware Abstraction',
    a: 'The primary role of an operating system in computer architecture is hardware abstraction and resource multiplexing. The operating system virtualizes physical CPU cores through preemptive time slicing, translates virtual memory addresses via page tables, coordinates hardware interrupts, and shields physical silicon from user-space crashes. Without this abstraction layer, software would need custom driver instructions for every specific CPU model and peripheral.',
  },
  {
    q: 'What is the best operating system for AI and real-time scheduling research?',
    tag: 'Best Operating System',
    a: 'The best operating system for AI research depends on scope. For large-scale model training, Linux distributions (Ubuntu Server, Arch Linux) are standard due to mature GPU driver ecosystems. For low-level kernel-space AI inference research, NeuroSched demonstrates that neural networks can execute directly on the bare-metal CPU stack in microseconds with zero libc dependencies and 100% deterministic fallback safety — making it the best operating system substrate for this specific research question.',
  },
  {
    q: 'How does the Android operating system manage process priority?',
    tag: 'Android Operating System',
    a: 'The Android operating system runs atop a modified Linux kernel and manages process priority through user-space mechanisms — LowMemoryKiller (LMK) and ActivityManager priority buckets (Foreground, Visible, Service, Cached). In contrast, NeuroSched evaluates priority directly at the CPU timer tick level: it normalizes five process state features into a vector and scores execution fitness through its embedded 5→8→1 MLP neural inference engine at every scheduling decision.',
  },
  {
    q: 'How does NeuroSched run neural inference with 0 bytes heap memory?',
    tag: 'Memory Architecture',
    a: 'Dynamic heap allocation inside a kernel introduces fragmentation, lock contention, and latency spikes. NeuroSched eliminates malloc completely by placing all 57 static float model weights (228 bytes) directly in the .rodata section of the ELF binary at compile time. All intermediate hidden layer activations are computed on the kernel execution stack. This guarantees bounded, deterministic inference latency — a requirement no heap-based approach can satisfy.',
  },
  {
    q: 'How does floating-point math work in x86 bare metal without triggering an #NM trap?',
    tag: 'Bare Metal x86',
    a: 'On x86 protected mode entry, floating-point instructions trigger a Device Not Available (#NM, Interrupt 7) exception unless the FPU coprocessor is explicitly unlocked in Control Register 0. NeuroSched\'s assembly boot entry (boot/boot.S) clears the Emulation flag (CR0.EM=0) and sets Monitor Coprocessor (CR0.MP=1) and Numeric Error (CR0.NE=1), then executes fninit to initialize the x87 FPU register stack ST(0)–ST(7) before any C floating-point code runs.',
  },
];

export default function FAQ({ limit }) {
  const [openIdx, setOpenIdx] = useState(null);
  const items = limit ? ALL_FAQS.slice(0, limit) : ALL_FAQS;

  return (
    <div className="divide-y divide-[#e0e0e0] border-t border-[#e0e0e0]">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full text-left py-5 flex items-start justify-between gap-6 group"
              aria-expanded={isOpen}
            >
              <div>
                <span
                  className="block mb-1 font-semibold uppercase"
                  style={{ fontSize: 11, letterSpacing: '0.08em', color: '#7a7a7a' }}
                >
                  {item.tag}
                </span>
                <span
                  className="block text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors"
                  style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.47, letterSpacing: '-0.374px' }}
                >
                  {item.q}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#0066cc]' : 'text-[#7a7a7a]'
                }`}
              />
            </button>

            {isOpen && (
              <div
                className="pb-5 text-[#333333]"
                style={{ fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px' }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
