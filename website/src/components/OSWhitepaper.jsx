import React from 'react';
import { BookOpen, Cpu, ShieldCheck, Layers, Terminal, Sparkles } from 'lucide-react';

export default function OSWhitepaper() {
  return (
    <section id="whitepaper" className="py-20 px-4 lg:px-8 bg-[#fafafc] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Whitepaper</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Operating System Architecture and Learned Scheduling.
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed">
            An in depth examination of operating system fundamentals, heuristic limitations, and bare metal neural inference.
          </p>
        </div>

        {/* Whitepaper Card Container */}
        <article className="appleCardLight p-8 sm:p-12 space-y-8 bg-white border border-[#e0e0e0] shadow-sm">

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              1. What is an Operating System in Computer Architecture
            </h3>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              When investigating <strong>what is an operating system</strong>, one must evaluate its essential function in modern computer engineering. An <strong>operating system in computer</strong> systems operates as the primary supervisor layer bridging physical silicon with user space processes. The formal <strong>operating system definition</strong> establishes that an operating system virtualizes execution cores, arbitrates hardware interrupts, manages physical memory allocation, and establishes protected execution rings that prevent program faults from crashing the underlying hardware.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              Every day <strong>operating system examples</strong> such as the <strong>Linux operating system</strong> and the <strong>Android operating system</strong> employ sophisticated scheduling algorithms to ensure that multiple running applications receive balanced processor execution time. Standard Linux kernels rely on the Completely Fair Scheduler, balancing execution through red black binary search trees. On mobile devices, the Android operating system prioritizes foreground activities through user space activity managers while background daemons hibernate to preserve battery life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-[#fafafc] rounded-xl border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#1d4ed8] font-semibold text-[15px]">
                <Cpu className="w-5 h-5" />
                <span>The Classical Operating System Heuristic</span>
              </div>
              <p className="text-[14.5px] text-[#52525b] leading-relaxed">
                Traditional operating system kernels execute static scheduling policies including Round Robin time slicing, Priority Queues, and Shortest Job First. While fast, these human crafted heuristics cannot dynamically reconfigure their decision logic when complex mixed workloads occur.
              </p>
            </div>

            <div className="p-6 bg-[#fafafc] rounded-xl border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#16a34a] font-semibold text-[15px]">
                <ShieldCheck className="w-5 h-5" />
                <span>The Modern AI Operating System Paradigm</span>
              </div>
              <p className="text-[14.5px] text-[#52525b] leading-relaxed">
                NeuroSched introduces a genuine <strong>ai operating system</strong> for 32 bit x86 hardware. By substituting static rules with an embedded Multi Layer Perceptron evaluating five runtime process metrics, NeuroSched achieves a 16.8 percent reduction in average process wait time.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] tracking-tight">
              2. Why NeuroSched Serves as the Best Operating System Experiment
            </h3>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              Systems researchers evaluating the <strong>best operating system</strong> for bare metal machine learning require strict determinism. Typical artificial intelligence libraries depend on the standard C library and dynamic memory heap allocation with malloc. In contrast, NeuroSched proves that an <strong>ai operating system</strong> can execute directly inside freestanding kernel space with zero bytes of dynamic heap allocation. All 57 floating point model parameters reside permanently in read only rodata memory, and intermediate activations compute strictly on the execution stack.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#52525b] leading-relaxed">
              Safety is paramount in operating system engineering. To eliminate unpredictable behavior on novel workload patterns, NeuroSched enforces a hard confidence boundary of 0.65. When neural confidence drops below this gate, the scheduler automatically defers to Round Robin execution for that timer tick, guaranteeing 100 percent kernel stability with zero kernel panics.
            </p>
          </div>

        </article>

      </div>
    </section>
  );
}
