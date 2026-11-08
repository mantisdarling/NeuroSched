import React, { useState, useEffect } from 'react';
import {
  Copy,
  Check,
  Github,
  ChevronDown,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';

export default function Docs({ onNavigateHome }) {
  const [activeDoc, setActiveDoc] = useState('intro');
  const [activeTab, setActiveTab] = useState('qemu');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Keyboard shortcut listener for Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const el = document.getElementById('openCodeSearchInput');
        if (el) el.focus();
      } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        const el = document.getElementById('openCodeSearchInput');
        if (el) el.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Left sidebar navigation groups matching the OpenCode bracket notation
  const navigationGroups = [
    {
      group: null,
      items: [
        { id: 'intro', title: 'Intro' },
        { id: 'config', title: 'Config' },
        { id: 'quickstart', title: 'Quickstart' },
        { id: 'troubleshooting', title: 'Troubleshooting' }
      ]
    },
    {
      group: 'KERNEL CORE',
      items: [
        { id: 'multiboot', title: 'Multiboot2' },
        { id: 'fpu', title: 'x87 FPU' },
        { id: 'vga', title: 'VGA Driver' },
        { id: 'uart', title: 'COM1 Serial' }
      ]
    },
    {
      group: 'NEURAL ENGINE',
      items: [
        { id: 'mlpTopology', title: 'MLP Topology' },
        { id: 'taylorSigmoid', title: 'Taylor Sigmoid' },
        { id: 'zeroMalloc', title: 'Zero Malloc' }
      ]
    },
    {
      group: 'SAFETY & FALLBACK',
      items: [
        { id: 'confidenceGuard', title: 'Confidence Guard' },
        { id: 'roundRobin', title: 'Round Robin' }
      ]
    },
    {
      group: 'TRAINING',
      items: [
        { id: 'trainSgd', title: 'Python SGD' },
        { id: 'weightsHeader', title: 'Weights Header' }
      ]
    },
    {
      group: 'VERIFICATION',
      items: [
        { id: 'qemuTelemetry', title: 'QEMU Telemetry' },
        { id: 'benchmarks', title: 'Benchmarks' }
      ]
    }
  ];

  // Code snippets for the multitab terminal block in Intro
  const codeTabs = {
    qemu: 'bash scripts/boot-test.sh',
    make: 'make clean && make',
    train: 'python scripts/train.py --epochs 500 --out include/nn_weights.h',
    iso: 'grub-mkrescue -o build/neurosched.iso isodir',
    clone: 'git clone https://github.com/mantisdarling/NeuroSched.git'
  };

  // Full article contents with genuine NeuroSched implementation facts
  const docDatabase = {
    intro: {
      title: 'Intro',
      description: "NeuroSched is an open source 32 bit x86 bare metal operating system kernel. It features an embedded C neural network inference engine that optimizes CPU process scheduling with zero dynamic heap allocation.",
      contents: [
        { id: 'cli', label: 'CLI' },
        { id: 'architecture', label: 'Architecture' },
        { id: 'invariants', label: 'Invariants' },
        { id: 'targets', label: 'Targets' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          {/* Section: CLI / Multi-Tab Box */}
          <div id="cli" className="space-y-4">
            <h2 className="text-[20px] font-bold text-white tracking-tight">
              CLI
            </h2>

            <div className="border border-[#1f1f23] bg-[#070709] rounded-[4px] overflow-hidden shadow-xs">
              {/* Tab Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#000000] border-b border-[#1f1f23] text-[13.5px]">
                <div className="flex items-center gap-2 overflow-x-auto">
                  {Object.keys(codeTabs).map((tabKey) => (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-2.5 py-1 rounded-[3px] font-medium transition-colors ${
                        activeTab === tabKey
                          ? 'bg-[#1e40af] text-white'
                          : 'text-[#71717a] hover:text-[#60a5fa]'
                      }`}
                    >
                      {tabKey}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => copyToClipboard(codeTabs[activeTab])}
                  className="openCodePressable text-[13px] text-[#71717a] hover:text-[#60a5fa] flex items-center gap-1.5 transition-colors font-medium shrink-0 ml-2"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-[#22c55e]" /> : null}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Line */}
              <div className="p-5 px-6 text-[14px] leading-[1.7] text-[#f4f4f5] overflow-x-auto select-all">
                <code>{codeTabs[activeTab]}</code>
              </div>
            </div>

            <p className="text-[16px] text-[#a1a1aa] leading-[1.75] pt-1">
              The automated build pipeline compiles the freestanding C kernel and packages the hybrid El Torito ISO using <code className="text-[#60a5fa] bg-[#141416] border border-[#27272a] px-2 py-0.5 rounded-[3px] text-[13.5px] font-mono">neurosched</code> toolchains. The Make commands require GCC 10.0 or later; older versions cannot target Multiboot2 ELF32.
            </p>

            <p className="text-[14.5px] text-[#71717a]">
              Direct host OS package managers are not required.
            </p>
          </div>

          {/* Download a standalone binary for your platform */}
          <div id="targets" className="space-y-3 pt-3">
            <div className="text-[17px] font-bold text-white">
              Target execution modes for your environment:
            </div>
            <ul className="space-y-2 text-[15.5px] text-[#a1a1aa] pt-1">
              <li className="flex items-center gap-2.5">
                <span className="text-[#52525b] font-bold">▪</span>
                <span>
                  <strong className="text-[#d4d4d8] font-medium">Headless QEMU: </strong>
                  <a href="#cli" onClick={() => setActiveTab('qemu')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">Serial UART</a> | <a href="#cli" onClick={() => setActiveTab('qemu')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">CSV Telemetry</a> | <span className="text-[#71717a]">Automated</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#52525b] font-bold">▪</span>
                <span>
                  <strong className="text-[#d4d4d8] font-medium">Bootable ISO: </strong>
                  <a href="#cli" onClick={() => setActiveTab('iso')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">GRUB Multiboot2</a> | <a href="#cli" onClick={() => setActiveTab('iso')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">USB Flash</a> | <span className="text-[#71717a]">Hybrid</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#52525b] font-bold">▪</span>
                <span>
                  <strong className="text-[#d4d4d8] font-medium">Kernel ELF32: </strong>
                  <a href="#cli" onClick={() => setActiveTab('make')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">i686 Protected Mode</a> | <span className="text-[#f59e0b] font-mono text-[14px]">x87 FPU</span> | <span className="text-[#71717a]">Zero Malloc</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#52525b] font-bold">▪</span>
                <span>
                  <strong className="text-[#d4d4d8] font-medium">NumPy Trainer: </strong>
                  <a href="#cli" onClick={() => setActiveTab('train')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">5 to 8 to 1 MLP</a> | <a href="#cli" onClick={() => setActiveTab('train')} className="underline underline-offset-3 hover:text-[#60a5fa] text-white">SGD Optimizer</a> | <span className="text-[#71717a]">Header Export</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Section: Architecture Overview */}
          <div id="architecture" className="space-y-4 pt-8 border-t border-[#18181b]">
            <h2 className="text-[20px] font-bold text-white tracking-tight">
              Architecture
            </h2>
            <p className="text-[16px] text-[#a1a1aa] leading-[1.75]">
              At each timer tick interrupt, the scheduler extracts a 5 dimensional feature vector from each runnable Process Control Block (PCB):
            </p>

            <div className="border border-[#1f1f23] rounded-[4px] overflow-x-auto bg-[#000000]">
              <table className="w-full text-left text-[14px] min-w-[500px]">
                <thead className="bg-[#09090b] text-[#71717a] border-b border-[#1f1f23]">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Feature</th>
                    <th className="py-3 px-4 font-semibold">Formula</th>
                    <th className="py-3 px-4 font-semibold">Objective</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1f1f23] text-[#d4d4d8]">
                  <tr>
                    <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">wait_ticks</td>
                    <td className="py-3 px-4 font-mono text-[#a1a1aa]">wait_ticks / dynamic_max_wait</td>
                    <td className="py-3 px-4 text-[#71717a]">Aging task boost; starvation prevention</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">remaining_burst</td>
                    <td className="py-3 px-4 font-mono text-[#a1a1aa]">remaining_burst / dynamic_max_burst</td>
                    <td className="py-3 px-4 text-[#71717a]">Shortest Job First affinity</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">priority</td>
                    <td className="py-3 px-4 font-mono text-[#a1a1aa]">normalize(prio, 1.0, 5.0)</td>
                    <td className="py-3 px-4 text-[#71717a]">Static user priority weight</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">io_bound</td>
                    <td className="py-3 px-4 font-mono text-[#a1a1aa]">io_bound ? 1.0 : 0.0</td>
                    <td className="py-3 px-4 text-[#71717a]">Interactive latency responsiveness</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">io_yield_count</td>
                    <td className="py-3 px-4 font-mono text-[#a1a1aa]">normalize(yields, 0.0, 7.0)</td>
                    <td className="py-3 px-4 text-[#71717a]">Voluntary yield history</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Invariants */}
          <div id="invariants" className="space-y-4 pt-8 border-t border-[#18181b]">
            <h2 className="text-[20px] font-bold text-white tracking-tight">
              Invariants
            </h2>
            <ul className="space-y-3 text-[15.5px] text-[#a1a1aa]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#52525b] font-bold mt-0.5">▪</span>
                <span><strong className="text-white font-medium">Zero Dynamic Memory: </strong>No heap allocator exists in kernel space. All 57 model weights are positioned in <code className="text-[#60a5fa] text-[14px]">.rodata</code> (228 bytes total).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#52525b] font-bold mt-0.5">▪</span>
                <span><strong className="text-white font-medium">Native x87 FPU: </strong>Configures CR0 (<code className="text-[#f59e0b] font-mono text-[14px]">EM=0, MP=1, NE=1</code>) to execute floating point inference in hardware registers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#52525b] font-bold mt-0.5">▪</span>
                <span><strong className="text-white font-medium">Deterministic Fallback: </strong>When prediction confidence drops below <code className="text-[#ef4444] font-mono text-[14px]">0.65f</code>, the kernel falls back to standard Round Robin.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },

    config: {
      title: 'Config',
      description: 'Kernel build flags, hardware tuning options, and scheduler configuration constants.',
      contents: [
        { id: 'constants', label: 'Scheduler Constants' },
        { id: 'cflags', label: 'Compiler Options' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            Configuration parameters are defined in <code className="text-white bg-[#141416] border border-[#27272a] px-2 py-0.5 rounded-[3px] text-[13.5px]">kernel/scheduler.h</code> and <code className="text-white bg-[#141416] border border-[#27272a] px-2 py-0.5 rounded-[3px] text-[13.5px]">include/nn_weights.h</code>, controlling process limits and confidence gates.
          </p>

          <div className="border border-[#1f1f23] rounded-[4px] overflow-x-auto bg-[#000000]">
            <table className="w-full text-left text-[14px] min-w-[500px]">
              <thead className="bg-[#09090b] text-[#71717a] border-b border-[#1f1f23]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Constant</th>
                  <th className="py-3 px-4 font-semibold">Value</th>
                  <th className="py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f1f23] text-[#d4d4d8]">
                <tr>
                  <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">MAX_PROCS</td>
                  <td className="py-3 px-4 font-mono text-white">16</td>
                  <td className="py-3 px-4 text-[#71717a]">Maximum process slots allocated in static PCB table</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">WORKLOAD_SIZE</td>
                  <td className="py-3 px-4 font-mono text-white">10</td>
                  <td className="py-3 px-4 text-[#71717a]">Deterministic benchmark workload size</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">NN_CONF_THRESH</td>
                  <td className="py-3 px-4 font-mono text-[#ef4444]">0.65f</td>
                  <td className="py-3 px-4 text-[#71717a]">Confidence boundary below which Round Robin triggers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#60a5fa] font-mono font-medium">COM1_PORT</td>
                  <td className="py-3 px-4 font-mono text-[#f59e0b]">0x3F8</td>
                  <td className="py-3 px-4 text-[#71717a]">Base I/O address for 16550 serial telemetry UART</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    quickstart: {
      title: 'Quickstart',
      description: 'Step-by-step commands for cloning, compiling the 32 bit kernel ELF binary, and launching headless QEMU emulation.',
      contents: [
        { id: 'prereqs', label: 'Prerequisites' },
        { id: 'compile', label: 'Compilation' },
        { id: 'test', label: 'Verification' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            NeuroSched includes a streamlined Makefile that compiles assembly entry points, freestanding C drivers, neural inference, and packages a bootable GRUB ISO image.
          </p>

          <div id="prereqs" className="space-y-3">
            <h3 className="text-[17px] font-bold text-white uppercase tracking-tight">1. Install Toolchain Dependencies</h3>
            <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>sudo apt-get update && sudo apt-get install -y \
  build-essential gcc-multilib qemu-system-x86 grub-pc-bin xorriso python3</code>
            </pre>
          </div>

          <div id="compile" className="space-y-3">
            <h3 className="text-[17px] font-bold text-white uppercase tracking-tight">2. Build Kernel & Bootable ISO</h3>
            <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>make clean && make</code>
            </pre>
          </div>

          <div id="test" className="space-y-3">
            <h3 className="text-[17px] font-bold text-white uppercase tracking-tight">3. Execute QEMU Telemetry Test</h3>
            <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>bash scripts/boot-test.sh</code>
            </pre>
          </div>
        </div>
      )
    },

    troubleshooting: {
      title: 'Troubleshooting',
      description: 'Common issues encountered during cross compilation, GRUB ISO generation, and QEMU serial trapping.',
      contents: [
        { id: 'nmTrap', label: 'Interrupt 7 (#NM) Exception' },
        { id: 'xorriso', label: 'Missing xorriso / grub-mkrescue' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <div id="nmTrap" className="space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-[17px] font-bold text-white">FPU Trap (#NM) Exception</h3>
              <span className="text-[12px] font-mono text-[#ef4444] bg-[#450a0a]/30 border border-[#ef4444]/40 px-2 py-0.5 rounded font-bold">
                Hardware Trap
              </span>
            </div>
            <p className="text-[15.5px] text-[#a1a1aa]">
              If QEMU triggers an unhandled Interrupt 7 exception upon executing floating point instructions, ensure that <code className="text-[#60a5fa]">boot.S</code> clears the EM flag in CR0 (<code className="text-[#f59e0b]">EM=0</code>) before executing <code className="text-[#60a5fa]">fninit</code>.
            </p>
          </div>
          <div id="xorriso" className="space-y-3 pt-4 border-t border-[#18181b]">
            <h3 className="text-[17px] font-bold text-white">Missing xorriso</h3>
            <p className="text-[15.5px] text-[#a1a1aa]">
              If <code className="text-white">grub-mkrescue</code> fails with an error stating xorriso cannot be found, install the package via <code className="text-[#60a5fa]">sudo apt install xorriso</code>.
            </p>
          </div>
        </div>
      )
    },

    multiboot: {
      title: 'Multiboot2 Specification Handshake',
      description: 'Preserving bootloader magic signatures, setting up stack boundaries, and entering 32 bit protected mode.',
      contents: [
        { id: 'header', label: 'Multiboot2 Header' },
        { id: 'registers', label: 'Register Preservation' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            The kernel entry point is in <code className="text-[#60a5fa]">boot/boot.S</code>. The assembly header declares the Multiboot2 magic number (<code className="text-[#f59e0b]">0xE85250D6</code>) and architecture tag 0 (32 bit i386), along with a Multiboot1 compatibility header for direct QEMU loading.
          </p>

          <div id="header" className="border border-[#1f1f23] bg-[#070709] rounded-[4px] overflow-hidden">
            <pre className="p-4 text-[13.5px] text-[#f4f4f5] overflow-x-auto leading-[1.6]">
<code>{`.equ MB2_MAGIC,     0xE85250D6      /* Silicon Magic Signature */
.equ MB2_ARCH,      0               /* 32-bit i386 */
.equ MB2_HDR_LEN,   24              /* Header length */
.equ MB2_CHECKSUM,  (0 - MB2_MAGIC - MB2_ARCH - MB2_HDR_LEN)

.section .multiboot2, "a"
.align 8
multiboot2_header:
    .long   MB2_MAGIC
    .long   MB2_ARCH
    .long   MB2_HDR_LEN
    .long   MB2_CHECKSUM`}</code>
            </pre>
          </div>

          <div id="registers" className="space-y-3">
            <h3 className="text-[17px] font-bold text-white uppercase tracking-tight">Register Preservation</h3>
            <p className="text-[15.5px] text-[#a1a1aa]">
              GRUB delivers <code className="text-[#f59e0b]">0x36D76289</code> into register <code className="text-white">EAX</code> and the Multiboot structure pointer into <code className="text-white">EBX</code>. NeuroSched preserves these registers in <code className="text-white">ESI/EDI</code> prior to initializing the 16 KiB BSS stack pointer.
            </p>
          </div>
        </div>
      )
    },

    fpu: {
      title: 'x87 Hardware FPU Setup',
      description: 'Configuring Control Register 0 (CR0) to execute hardware floating point instructions without emulation traps.',
      contents: [
        { id: 'cr0', label: 'CR0 Flags' },
        { id: 'code', label: 'Assembly Routine' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-mono text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-2.5 py-1 rounded">
              Silicon Hardware Coprocessor
            </span>
          </div>

          <p>
            On x86 protected mode entry, floating point coprocessor operations trap into Interrupt 7 (#NM) unless enabled in CR0. NeuroSched configures CR0 directly in assembly:
          </p>

          <div id="code" className="border border-[#1f1f23] bg-[#070709] rounded-[4px] overflow-hidden">
            <pre className="p-4 text-[13.5px] text-[#f4f4f5] overflow-x-auto leading-[1.6]">
<code>{`/* Configure CR0 to unlock native x87 hardware floating point */
mov %cr0, %eax
and $0xFFFFFFFB, %eax    /* Clear EM (bit 2 = 0) to avoid software trap */
or  $0x00000022, %eax    /* Set MP (bit 1) and NE (bit 5) */
mov %eax, %cr0

fninit                   /* Reset FPU register stack ST(0)-ST(7) */`}</code>
            </pre>
          </div>
        </div>
      )
    },

    vga: {
      title: 'VGA Text Buffer Driver',
      description: 'Direct memory mapped frame buffer driver writing characters and color attributes to physical memory address 0xB8000.',
      contents: [
        { id: 'mmio', label: 'MMIO Layout' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            VGA 80x25 text mode maps characters and colors to physical memory starting at <code className="text-[#f59e0b]">0xB8000</code>. Each character occupies 2 bytes: ASCII character code and attribute byte (foreground + background).
          </p>
          <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>{`volatile uint16_t* vga_buffer = (uint16_t*)0xB8000;
void vga_putchar(char c, uint8_t color) {
    vga_buffer[row * 80 + col] = (uint16_t)c | ((uint16_t)color << 8);
}`}</code>
          </pre>
        </div>
      )
    },

    uart: {
      title: 'COM1 Serial UART Driver',
      description: '16550 UART serial driver configured at I/O port 0x3F8 for real time telemetry streaming.',
      contents: [
        { id: 'ports', label: 'Port Mapping' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            Configured at I/O port <code className="text-[#f59e0b]">0x3F8</code> (38400 baud, 8 data bits, no parity, 1 stop bit). Streams scheduling event CSV rows directly to host terminal pipes during automated testing.
          </p>
        </div>
      )
    },

    mlpTopology: {
      title: 'MLP Topology (5 to 8 to 1)',
      description: 'Mathematical matrix specification and forward inference structure of the kernel neural network.',
      contents: [
        { id: 'topology', label: 'Layer Sizes' },
        { id: 'weights', label: 'Parameter Count' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            The neural inference engine evaluates a 5 dimensional feature vector per runnable process using a 2 layer Multi Layer Perceptron:
          </p>
          <div className="border border-[#1f1f23] bg-[#070709] p-5 rounded-[4px] space-y-2.5 text-[15px]">
            <div>▪ <strong className="text-white font-medium">Input Layer:</strong> 5 features (wait_ticks, remaining_burst, priority, io_bound, io_yield_count)</div>
            <div>▪ <strong className="text-white font-medium">Hidden Layer:</strong> 8 neurons with ReLU activations (40 weights + 8 biases)</div>
            <div>▪ <strong className="text-white font-medium">Output Layer:</strong> 1 score neuron (8 weights + 1 bias) = <strong className="text-[#60a5fa]">57 static float parameters (228 bytes)</strong> in <code className="text-[#f59e0b]">.rodata</code></div>
          </div>
        </div>
      )
    },

    taylorSigmoid: {
      title: 'Taylor Series Sigmoid Math',
      description: 'Computing transcendental activation functions in freestanding C without math.h.',
      contents: [
        { id: 'formula', label: 'Polynomial Derivation' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            Because <code className="text-[#60a5fa]">math.h</code> is unavailable in a bare metal kernel, sigmoid activation <code className="text-[#60a5fa]">σ(x)</code> is computed via a 6 term Taylor polynomial approximation of the exponential function:
          </p>
          <div className="border border-[#1f1f23] bg-[#09090b] p-4 text-[#60a5fa] text-[15px] rounded-[4px] font-mono font-medium">
            e^t ≈ 1 + t + t²/2 + t³/6 + t⁴/24 + t⁵/120  (clamped at [-10, +10])
          </div>
          <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>{`static float sigmoid(float x) {
    if (x >= 10.0f)  return 0.9999f;
    if (x <= -10.0f) return 0.0001f;
    float t = x >= 0.0f ? x : -x;
    float ex = 1.0f + t + (t*t)/2.0f + (t*t*t)/6.0f
                    + (t*t*t*t)/24.0f + (t*t*t*t*t)/120.0f;
    return x >= 0.0f ? ex / (1.0f + ex) : 1.0f / (1.0f + ex);
}`}</code>
          </pre>
        </div>
      )
    },

    zeroMalloc: {
      title: 'Zero Malloc Static Memory Layout',
      description: 'Eliminating heap allocation by compiling network weights directly into .rodata binary sections.',
      contents: [
        { id: 'memory', label: 'Memory Map' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            Dynamic memory allocation in operating system kernels introduces heap fragmentation, lock contention, and latency spikes. NeuroSched guarantees <strong>0 Bytes malloc</strong>:
          </p>
          <div className="border border-[#1f1f23] bg-[#070709] p-5 rounded-[4px] space-y-2.5 text-[15px]">
            <div>▪ <strong className="text-white font-medium">.rodata:</strong> W1[5][8], B1[8], W2[8][1], B2[1] (<span className="text-[#f59e0b]">57 static float constants = 228 bytes</span>)</div>
            <div>▪ <strong className="text-white font-medium">.data:</strong> Process Control Block array (MAX_PROCS=16)</div>
            <div>▪ <strong className="text-white font-medium">.bss:</strong> 16 KiB reserved boot stack, zero initialized</div>
          </div>
        </div>
      )
    },

    confidenceGuard: {
      title: 'Confidence Fallback Guard',
      description: 'Deterministic safeguard when neural scoring encounters out of distribution workloads.',
      contents: [
        { id: 'threshold', label: 'Threshold Condition' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          {/* Deep Crimson accent for critical safeguard on dark canvas */}
          <div className="border-l-4 border-[#ef4444] bg-[#450a0a]/30 border border-[#ef4444]/40 p-4 rounded-[4px] flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#ef4444]">
              [CRITICAL SAFEGUARD] Confidence Threshold Barrier
            </span>
            <span className="text-[12px] font-mono text-[#ef4444] bg-[#ef4444]/15 px-2.5 py-1 rounded border border-[#ef4444]/40 font-bold">
              c &lt; 0.65f
            </span>
          </div>

          <p>
            To guarantee kernel determinism, NeuroSched enforces a confidence fallback threshold (<code className="text-[#60a5fa]">NN_CONF_THRESH = 0.65f</code>). If the maximum predicted process score drops below 0.65:
          </p>
          <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>{`if (best_score < NN_CONF_THRESH) {
    /* Deep Crimson event trigger */
    serial_printf("[WARN] Confidence %.2f < %.2f -> RR fallback\\n",
                  best_score, NN_CONF_THRESH);
    fallback_counter++;
    return schedule_round_robin();
}`}</code>
          </pre>
        </div>
      )
    },

    roundRobin: {
      title: 'Round Robin Safeguard',
      description: 'The classical round robin scheduler acting as the provable deterministic foundation.',
      contents: [
        { id: 'circular', label: 'Circular Traversal' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            When neural inference falls back, the kernel switches to an O(1) circular Round Robin traversal, granting an equal quantum time slice of 1 tick to ensure progress and starvation freedom.
          </p>
        </div>
      )
    },

    trainSgd: {
      title: 'Python NumPy Training Pipeline',
      description: 'Training the 5 to 8 to 1 Multi Layer Perceptron without heavy ML frameworks.',
      contents: [
        { id: 'sgd', label: 'SGD Optimizer' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            Weights are trained using <code className="text-[#60a5fa]">scripts/train.py</code> via pure NumPy Stochastic Gradient Descent (SGD) with binary cross entropy loss, eliminating dependencies on PyTorch or TensorFlow.
          </p>
          <pre className="border border-[#1f1f23] bg-[#070709] p-4 text-[13.5px] text-[#f4f4f5] rounded-[4px] overflow-x-auto leading-[1.6]">
<code>python scripts/train.py --epochs 500 --lr 0.05 --out include/nn_weights.h</code>
          </pre>
        </div>
      )
    },

    weightsHeader: {
      title: 'C Weights Header Export',
      description: 'Automated code generation translating trained weights into static C array definitions.',
      contents: [
        { id: 'header', label: 'Generated Header' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            The trainer automatically outputs <code className="text-[#60a5fa]">include/nn_weights.h</code> formatted cleanly for direct freestanding compilation into the kernel ELF.
          </p>
        </div>
      )
    },

    qemuTelemetry: {
      title: 'QEMU Serial Telemetry Protocol',
      description: 'Real time CSV execution logging streamed across COM1 serial port during emulation.',
      contents: [
        { id: 'harness', label: 'Serial Runner' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            The kernel streams CSV logs to COM1 serial UART, allowing headless test harnesses to collect and plot benchmark metrics without display dependencies.
          </p>
        </div>
      )
    },

    benchmarks: {
      title: 'Empirical Verification Outcomes',
      description: 'Verified benchmarks comparing Round Robin vs Neural Scheduling over 64 ticks.',
      contents: [
        { id: 'wait', label: 'Average Wait Time' },
        { id: 'turnaround', label: 'Turnaround Time' }
      ],
      render: () => (
        <div className="space-y-8 text-[16px] text-[#a1a1aa] leading-[1.75]">
          <p>
            Results captured directly from COM1 serial UART telemetry output during QEMU emulation across the 10-process benchmark workload:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-[#1f1f23] bg-[#070709] p-5 rounded-[4px] space-y-1.5 shadow-xs">
              <div className="text-[12px] uppercase text-[#71717a] font-semibold tracking-wider">Average Wait Time</div>
              {/* Soft Blue for metrics */}
              <div className="text-3xl font-bold text-[#60a5fa]">28.60 ticks</div>
              <div className="text-[13px] text-[#22c55e] font-medium">16.8% faster than Round Robin (34.40t)</div>
            </div>
            <div className="border border-[#1f1f23] bg-[#070709] p-5 rounded-[4px] space-y-1.5 shadow-xs">
              <div className="text-[12px] uppercase text-[#71717a] font-semibold tracking-wider">Average Turnaround</div>
              <div className="text-3xl font-bold text-[#60a5fa]">35.00 ticks</div>
              <div className="text-[13px] text-[#22c55e] font-medium">14.2% faster than Round Robin (40.80t)</div>
            </div>
          </div>
        </div>
      )
    }
  };

  const currentArticle = docDatabase[activeDoc] || docDatabase.intro;

  // Filtered navigation
  const filteredNavGroups = navigationGroups.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((group) => group.items.length > 0);

  return (
    <div className="openCodeRoot min-h-screen bg-[#000000] text-[#f4f4f5] font-openCodeMono selection:bg-[#1d4ed8] selection:text-white antialiased">
      
      {/* Top Header Bar matching OpenCode: Square glyph + DOCS v dropdown + GitHub */}
      <header className="sticky top-0 z-50 bg-[#000000] h-[52px] px-6 lg:px-12 flex items-center justify-between border-b border-[#1f1f23]">
        
        {/* Top Left: Square glyph + DOCS v dropdown */}
        <div className="relative flex items-center gap-3">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="openCodePressable flex items-center gap-2 text-white font-bold text-[14px] tracking-wide uppercase hover:text-[#60a5fa] transition-colors"
          >
            {/* Square Logo Glyph from OpenCode */}
            <div className="w-3.5 h-3.5 border-2 border-white rounded-[2px] flex items-center justify-center">
              <div className="w-1 h-1 bg-white" />
            </div>
            <span>DOCS</span>
            <ChevronDown className="w-3 h-3 text-[#71717a]" />
          </button>

          {/* Quick return to showcase link */}
          <button
            onClick={onNavigateHome}
            className="text-[12px] text-[#71717a] hover:text-white flex items-center gap-1 transition-colors pl-3 border-l border-[#1f1f23]"
            title="Return to Showcase Landing Page"
          >
            <ArrowLeft className="w-3 h-3 text-[#60a5fa]" />
            <span>Showcase</span>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-10 left-0 w-48 bg-[#09090b] border border-[#27272a] rounded-[4px] shadow-2xl p-1 z-50 text-[12px] space-y-0.5">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  onNavigateHome();
                }}
                className="w-full text-left px-2.5 py-1.5 rounded-[3px] text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
              >
                Showcase Home
              </button>
              <a
                href="https://github.com/mantisdarling/NeuroSched"
                target="_blank"
                rel="noreferrer"
                onClick={() => setDropdownOpen(false)}
                className="block px-2.5 py-1.5 rounded-[3px] text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
              >
                GitHub Repository ↗
              </a>
              <a
                href="https://github.com/mantisdarling/NeuroSched/blob/main/INFO.md"
                target="_blank"
                rel="noreferrer"
                onClick={() => setDropdownOpen(false)}
                className="block px-2.5 py-1.5 rounded-[3px] text-[#a1a1aa] hover:text-white hover:bg-[#18181b]"
              >
                Project INFO.md ↗
              </a>
            </div>
          )}
        </div>

        {/* Top Right: Mobile toggle & GitHub Icon */}
        <div className="flex items-center gap-4">
          {/* Mobile Navigation Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#a1a1aa] hover:text-white border border-[#27272a] rounded-[3px]"
            title="Toggle Documentation Topics"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4" />}
          </button>

          <a
            href="https://github.com/mantisdarling/NeuroSched"
            target="_blank"
            rel="noreferrer"
            className="text-[#71717a] hover:text-white transition-colors"
            title="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </header>

      {/* Mobile Drawer Navigation (Visible on phones & tablets when toggled) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b] border-b border-[#27272a] px-6 py-4 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Mobile Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full bg-[#141416] border border-[#27272a] rounded-[4px] px-3.5 py-2 text-[13.5px] text-white placeholder-[#52525b] focus:outline-none focus:border-[#60a5fa] transition-colors"
            />
          </div>

          {filteredNavGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1">
              {group.group && (
                <div className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider pt-2">
                  {group.group}
                </div>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = activeDoc === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveDoc(item.id);
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left py-1.5 text-[14px] flex items-center gap-2 ${
                        isActive ? 'text-white font-bold' : 'text-[#82828a]'
                      }`}
                    >
                      <span className={isActive ? 'text-[#60a5fa]' : 'text-[#52525b]'}>
                        {isActive ? '[-]' : '[ ]'}
                      </span>
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main 3-Column Grid Layout: full measure matching OpenCode */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 pt-8 sm:pt-10 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 min-h-[calc(100vh-52px)]">
        
        {/* Left Column: Bracket Navigation Sidebar (~240px / 3 cols) */}
        <nav className="hidden lg:block lg:col-span-3 space-y-6 select-none pr-3">
          {filteredNavGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1.5">
              {group.group && (
                <div className="text-[12px] font-bold text-[#52525b] uppercase tracking-[0.14em] pt-4 pb-1">
                  {group.group}
                </div>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = activeDoc === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveDoc(item.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`openCodePressable w-full text-left py-0.5 text-[15px] leading-[30px] flex items-center gap-2.5 transition-colors ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-[#82828a] hover:text-white'
                      }`}
                    >
                      <span className={isActive ? 'text-[#60a5fa] font-bold' : 'text-[#52525b]'}>
                        {isActive ? '[-]' : '[ ]'}
                      </span>
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Center Column: Main Article Body (~820px / 6 cols, OpenCode scale) */}
        <main className="lg:col-span-6 space-y-6 max-w-[820px] w-full min-w-0">
          {/* Article Title */}
          <h1 className="text-[32px] sm:text-[38px] font-bold text-white tracking-[-0.03em] leading-tight">
            {currentArticle.title}
          </h1>

          {/* Subtitle paragraph */}
          <p className="text-[15px] sm:text-[16px] text-[#a1a1aa] leading-[1.75]">
            {currentArticle.description}
          </p>

          {/* Active Article Content */}
          <div className="pt-2">
            {currentArticle.render()}
          </div>
        </main>

        {/* Right Column: Search + CONTENTS (~240px / 3 cols) */}
        <aside className="hidden lg:block lg:col-span-3 space-y-8 select-none pl-4">
          
          {/* Search Box with Ctrl K */}
          <div className="relative">
            <input
              id="openCodeSearchInput"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-[#0c0c0e] border border-[#222225] rounded-[4px] px-3.5 py-2 text-[13.5px] text-white placeholder-[#52525b] focus:outline-none focus:border-[#60a5fa] transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-[#52525b] font-mono">
              Ctrl K
            </span>
          </div>

          {/* CONTENTS Section Outline */}
          <div className="space-y-3 text-[14px]">
            <div className="text-[12px] font-bold text-[#52525b] uppercase tracking-[0.14em] pb-1">
              CONTENTS
            </div>

            <div className="space-y-1.5">
              {currentArticle.contents.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`openCodePressable block text-[15px] leading-[30px] transition-colors ${
                    idx === 0
                      ? 'text-white font-bold pl-3 border-l-2 border-[#60a5fa]'
                      : 'text-[#82828a] hover:text-white pl-3 border-l-2 border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Metadata Footnote */}
          <div className="pt-8 border-t border-[#1f1f23] text-[12px] text-[#52525b] space-y-1.5">
            <div>Maintainer: <span className="text-[#a1a1aa] font-semibold">MANTIS</span></div>
            <div>Target: <span className="text-[#a1a1aa] font-semibold">32 bit x86 Bare Metal</span></div>
            <div>License: <span className="text-[#a1a1aa] font-semibold">MIT</span></div>
          </div>

        </aside>

      </div>
    </div>
  );
}
