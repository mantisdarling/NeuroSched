import React from 'react';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import Quickstart from '../components/Quickstart';

/*
  HomeView — alternating full-bleed product tiles (apple.com pattern)
  Tile rhythm: white → dark (#272729) → parchment (#f5f5f7) → dark-2 (#2a2a2c) → white
  Single accent: Action Blue #0066cc
  No decorative gradients. No card shadows. Product-shadow on terminal only.
  SEO: 600+ words about the tool, all target keywords embedded naturally.
*/

const NAV = (onNavigate) => (view, e) => {
  if (e) e.preventDefault();
  if (onNavigate) onNavigate(view);
};

export default function HomeView({ currentMode, setMode, onNavigate }) {
  const go = NAV(onNavigate);

  return (
    <div>

      {/* ── Tile 1: Hero (white) ── */}
      <Hero currentMode={currentMode} onNavigate={onNavigate} />

      {/* ── Tile 2: Subsystem grid (dark #272729) ── */}
      <section className="tile-dark border-b border-[#3a3a3c]" aria-label="Kernel subsystems">
        <div className="max-w-[980px] mx-auto text-center">

          <p className="text-[#2997ff] font-semibold mb-4" style={{ fontSize: 17, letterSpacing: '-0.374px' }}>
            Subsystems
          </p>
          <h2
            className="type-display-lg text-white max-w-[640px] mx-auto mb-4"
            style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
          >
            Every layer of the kernel, documented.
          </h2>
          <p className="text-[#cccccc] max-w-[520px] mx-auto mb-14" style={{ fontSize: 17, lineHeight: 1.47 }}>
            Architecture, live simulator, verified benchmarks, and full technical
            documentation — each in its own dedicated page.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {[
              {
                view: 'architecture',
                title: 'Architecture',
                desc: '5-dimensional PCB state vector. 5→8→1 MLP layer topology. 6-term Taylor sigmoid polynomial. 0-byte malloc layout.',
                tag: 'x86 Kernel',
              },
              {
                view: 'simulator',
                title: 'Hardware Simulator',
                desc: 'Live 60 FPS neural canvas forward-pass. Adjustable confidence fallback slider. COM1 serial console replay.',
                tag: 'Interactive',
              },
              {
                view: 'benchmarks',
                title: 'Benchmarks',
                desc: '64-tick QEMU i386 telemetry. 16.8% lower average wait. 14.2% faster turnaround. 50 safe Round Robin fallbacks.',
                tag: 'Empirical',
              },
              {
                view: 'docs',
                title: 'Documentation',
                desc: 'Multiboot2 handshake, x87 FPU flags, MLP C source, .rodata weight layout, COM1 serial driver — full spec.',
                tag: 'Reference',
              },
              {
                view: 'faq',
                title: 'OS Knowledge Base',
                desc: 'What is an operating system, Linux vs NeuroSched, OS types in BIOS, Android vs x86 kernel differences.',
                tag: 'FAQ',
              },
              {
                view: 'about',
                title: 'About the Project',
                desc: 'Open source under MIT. Built by MANTIS (@mantisdarling). Academic bare-metal kernel research project.',
                tag: 'Open Source',
              },
            ].map((item) => (
              <a
                key={item.view}
                href={`/${item.view}`}
                onClick={(e) => go(item.view, e)}
                className="card-dark hover:border-[#0066cc] group block transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <span
                  className="inline-block mb-3 text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: '#7a7a7a', letterSpacing: '0.08em' }}
                >
                  {item.tag}
                </span>
                <h3 className="type-body-strong text-white mb-2 group-hover:text-[#2997ff] transition-colors">
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.57, color: '#cccccc' }}>{item.desc}</p>
                <span
                  className="inline-block mt-4 link-dark"
                  style={{ fontSize: 14, fontWeight: 400 }}
                >
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tile 3: SEO editorial article (parchment #f5f5f7) ── */}
      <section className="tile-parchment border-b border-[#e0e0e0]" aria-label="About NeuroSched operating system">
        <div className="max-w-[740px] mx-auto">

          <p className="text-[#0066cc] font-semibold mb-4" style={{ fontSize: 17, letterSpacing: '-0.374px' }}>
            Operating System
          </p>
          <h2
            className="type-display-lg text-[#1d1d1f] mb-6"
            style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
          >
            What is NeuroSched?
          </h2>

          <article
            className="space-y-5 text-[#1d1d1f]"
            style={{ fontSize: 17, lineHeight: 1.47, letterSpacing: '-0.374px' }}
          >
            <p>
              An <strong>operating system</strong> is the foundational software layer that
              manages a computer's hardware resources — allocating processor time, memory,
              and I/O peripherals between competing processes. The{' '}
              <strong>operating system definition</strong> at its core is a resource
              arbitrator: it decides which program runs next, for how long, and with what
              priority. NeuroSched is a research-grade bare-metal{' '}
              <strong>operating system</strong> that replaces the static heuristic at the
              heart of that arbitration with a trained neural network.
            </p>

            <p>
              Traditional schedulers — present in every <strong>Linux operating system</strong>,
              every <strong>Android operating system</strong>, and every desktop OS — rely on
              deterministic rules: Round Robin divides CPU time in fixed slices;
              Shortest Job First estimates burst length; Priority Queues assign static ranks.
              These rules are simple, predictable, and fast — but they cannot adapt to
              workload patterns they were not explicitly coded to handle. NeuroSched
              demonstrates that a compact 5–8–1 Multi-Layer Perceptron, compiled directly
              into kernel binary space, can outperform Round Robin on average process wait
              time by <strong>16.8%</strong> without any dynamic memory allocation.
            </p>

            <h3
              className="text-[#1d1d1f]"
              style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif', fontSize: 24, fontWeight: 600, lineHeight: 1.19, letterSpacing: '-0.01em' }}
            >
              How the Neural Scheduler Works
            </h3>

            <p>
              At each scheduling tick the kernel reads five normalized values from the
              Process Control Block of every runnable process:{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>wait_ticks</code>,{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>remaining_burst</code>,{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>priority</code>,{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>io_bound</code>, and{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>io_yield_count</code>.
              These five values form the input vector to the MLP. The network's hidden layer
              applies ReLU activation across eight neurons. The output neuron produces a
              single confidence score via a 6-term Taylor series polynomial approximation
              of the sigmoid function — avoiding any dependency on{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>math.h</code> or
              the C standard library.
            </p>

            <p>
              The process with the highest confidence score above{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>NN_CONF_THRESH = 0.65f</code>{' '}
              is dispatched. If no process clears the threshold — signaling an
              out-of-distribution workload the network is uncertain about — the scheduler
              falls back to standard Round Robin for that tick. This confidence gate is
              why NeuroSched achieves <strong>100% kernel stability</strong> with zero
              kernel panics across all tested workloads. It is what separates a
              research-grade <strong>AI operating system</strong> from a brittle proof of concept.
            </p>

            <h3
              className="text-[#1d1d1f]"
              style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif', fontSize: 24, fontWeight: 600, lineHeight: 1.19, letterSpacing: '-0.01em' }}
            >
              Operating System Examples — Where NeuroSched Fits
            </h3>

            <p>
              <strong>Operating system examples</strong> span a wide range of architectures:
              Linux, Windows, macOS, Android, FreeRTOS, and seL4. Among these,
              NeuroSched occupies the same category as bare-metal research kernels —
              systems like xv6, Redox OS, and OSDev community kernels — that are built
              from scratch to explore a specific systems question. NeuroSched's question
              is: can neural inference replace hand-coded scheduling heuristics without
              sacrificing determinism or memory safety?
            </p>

            <p>
              The x86 32-bit Protected Mode target was chosen deliberately.{' '}
              <strong>What is an operating system</strong> at the hardware level is best
              understood on a minimal architecture where every register, every flag, and
              every memory address is under explicit programmer control. The Multiboot2
              boot protocol (magic constant{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>0x36D76289</code>)
              establishes a clean handshake between the bootloader and kernel binary before
              any C code executes. The x87 FPU is enabled via assembly CR0 flag
              manipulation before the neural inference path is entered.
            </p>

            <h3
              className="text-[#1d1d1f]"
              style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif', fontSize: 24, fontWeight: 600, lineHeight: 1.19, letterSpacing: '-0.01em' }}
            >
              The Best Operating System for Machine Learning Research
            </h3>

            <p>
              Researchers evaluating the <strong>best operating system</strong> substrate for
              embedded machine learning inference need three guarantees that most general-purpose
              kernels cannot provide simultaneously: no dynamic allocator (which would
              introduce non-deterministic latency), direct hardware floating-point access
              (which requires FPU setup before the C runtime), and a hard safety gate that
              prevents the ML component from corrupting scheduler state on uncertain inputs.
              NeuroSched provides all three. It is not intended as a production{' '}
              <strong>operating system</strong> replacement for Linux or Android — it is a
              rigorous proof that the architecture is feasible.
            </p>

            <p>
              Empirical QEMU telemetry across 64 scheduling ticks shows the neural
              scheduler delivers an average process wait time of 28.60 ticks versus 34.40
              ticks under Round Robin — a <strong>16.8% reduction</strong>. Average
              turnaround drops from 40.80 to 35.00 ticks, a <strong>14.2% improvement</strong>.
              All 57 floating-point model weights (228 bytes) are stored in the{' '}
              <code className="mono text-[#0066cc]" style={{ fontSize: 14 }}>.rodata</code>{' '}
              section of the kernel binary. No heap allocation occurs at any point during
              inference — not at boot, not during scheduling ticks, not during fallback.
            </p>
          </article>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={(e) => go('architecture', e)} className="btn-primary">
              Read the Architecture
            </button>
            <button onClick={(e) => go('benchmarks', e)} className="btn-ghost">
              View Benchmarks
            </button>
          </div>
        </div>
      </section>

      {/* ── Tile 4: Quick start (dark-2 #2a2a2c) ── */}
      <section className="tile-dark-2 border-b border-[#3a3a3c]" aria-label="Developer quick start">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-[#2997ff] font-semibold mb-4" style={{ fontSize: 17, letterSpacing: '-0.374px' }}>
            Open Source
          </p>
          <h2
            className="type-display-lg text-white mb-5"
            style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
          >
            Run it in three commands.
          </h2>
          <p className="text-[#cccccc] mb-12 max-w-[480px] mx-auto" style={{ fontSize: 17, lineHeight: 1.47 }}>
            Requires an{' '}
            <code className="mono" style={{ fontSize: 14, color: '#2997ff' }}>i686-elf</code>{' '}
            GCC cross-compiler, NASM, Make, and QEMU. Runs headlessly on any
            Linux host.
          </p>

          <div className="text-left max-w-[640px] mx-auto space-y-3">
            {[
              {
                step: '01',
                label: 'Clone the repository',
                cmd: 'git clone https://github.com/mantisdarling/NeuroSched.git && cd NeuroSched',
              },
              {
                step: '02',
                label: 'Build the kernel binary',
                cmd: 'make all',
              },
              {
                step: '03',
                label: 'Run in QEMU — watch the serial output',
                cmd: 'make run',
              },
            ].map((item) => (
              <div key={item.step} className="card-dark flex gap-5 items-start">
                <span
                  className="mono shrink-0 mt-0.5"
                  style={{ fontSize: 11, fontWeight: 600, color: '#7a7a7a', letterSpacing: '0.08em' }}
                >
                  {item.step}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[#cccccc] mb-2" style={{ fontSize: 13, letterSpacing: '-0.01em' }}>
                    {item.label}
                  </p>
                  <code
                    className="mono block bg-[#1d1d1f] rounded px-4 py-2.5 text-[#2997ff] overflow-x-auto"
                    style={{ fontSize: 13, lineHeight: 1.6 }}
                  >
                    {item.cmd}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
            <button onClick={(e) => go('docs', e)} className="btn-ghost-dark">
              Read the Docs
            </button>
          </div>
        </div>
      </section>

      {/* ── Tile 5: FAQ (white) ── */}
      <section className="tile-light border-b border-[#e0e0e0]" aria-label="Frequently asked questions">
        <div className="max-w-[740px] mx-auto">
          <p className="text-[#0066cc] font-semibold mb-4" style={{ fontSize: 17, letterSpacing: '-0.374px' }}>
            Knowledge Base
          </p>
          <h2
            className="type-display-lg text-[#1d1d1f] mb-10"
            style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif' }}
          >
            Frequently asked questions.
          </h2>
          <FAQ />
          <div className="mt-10">
            <button onClick={(e) => go('faq', e)} className="btn-ghost">
              View full FAQ page
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
