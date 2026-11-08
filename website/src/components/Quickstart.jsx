import React, { useState } from 'react';
import { Terminal, Copy, Check, Cpu, Play, Brain } from 'lucide-react';

export default function Quickstart() {
  const [copiedMake, setCopiedMake] = useState(false);
  const [copiedBoot, setCopiedBoot] = useState(false);
  const [copiedTrain, setCopiedTrain] = useState(false);

  const makeCommand = "make clean && make";
  const bootCommand = "bash scripts/boot-test.sh";
  const trainCommand = "python scripts/train.py --epochs 500";

  const copyToClipboard = (text, setFn) => {
    navigator.clipboard.writeText(text);
    setFn(true);
    setTimeout(() => setFn(false), 2000);
  };

  return (
    <section id="quickstart" className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
            Developer Quickstart
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Run and Train NeuroSched Locally.
          </h2>
          <p className="text-[17px] text-[#86868b] leading-relaxed">
            Essential commands to cross compile the bare metal kernel, execute headless QEMU benchmarks, and train neural network weights.
          </p>
        </div>

        {/* 3 Core Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Command 1: Build Kernel */}
          <div className="appleCardLight bg-[#f5f5f7] p-7 space-y-5 flex flex-col justify-between hover:border-[#1d4ed8] transition-colors">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight">1. Compile Kernel Binary</h3>
                <Cpu className="w-5 h-5 text-[#1d4ed8]" />
              </div>
              <div className="bg-[#ffffff] border border-[#e0e0e0] rounded-[12px] p-3.5 font-mono text-[13px] text-[#1d4ed8]">
                <code>{makeCommand}</code>
              </div>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Compiles 32-bit x86 ELF binary (<code className="text-[#1d1d1f] font-mono text-xs">build/kernel.elf</code>) and generates bootable GRUB ISO image (<code className="text-[#1d1d1f] font-mono text-xs">build/neurosched.iso</code>).
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(makeCommand, setCopiedMake)}
              className="applePressable flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#e5e5ea] border border-[#e0e0e0] py-2.5 rounded-full text-[13px] font-medium text-[#1d1d1f] transition-all w-full mt-2"
            >
              {copiedMake ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4 text-[#1d4ed8]" />}
              <span>{copiedMake ? 'Copied Command' : 'Copy Make Command'}</span>
            </button>
          </div>

          {/* Command 2: Execute QEMU Benchmark */}
          <div className="appleCardLight bg-[#f5f5f7] p-7 space-y-5 flex flex-col justify-between hover:border-[#1d4ed8] transition-colors">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight">2. Run QEMU Simulation</h3>
                <Play className="w-5 h-5 text-[#1d4ed8]" />
              </div>
              <div className="bg-[#ffffff] border border-[#e0e0e0] rounded-[12px] p-3.5 font-mono text-[13px] text-[#1d4ed8]">
                <code>{bootCommand}</code>
              </div>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Boots kernel headless inside QEMU, runs Round Robin vs Neural scheduler, and streams COM1 serial telemetry logs.
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(bootCommand, setCopiedBoot)}
              className="applePressable flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#e5e5ea] border border-[#e0e0e0] py-2.5 rounded-full text-[13px] font-medium text-[#1d1d1f] transition-all w-full mt-2"
            >
              {copiedBoot ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4 text-[#1d4ed8]" />}
              <span>{copiedBoot ? 'Copied Command' : 'Copy Boot Command'}</span>
            </button>
          </div>

          {/* Command 3: Train Neural Network */}
          <div className="appleCardLight bg-[#f5f5f7] p-7 space-y-5 flex flex-col justify-between hover:border-[#1d4ed8] transition-colors">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f] tracking-tight">3. Train Neural Network</h3>
                <Brain className="w-5 h-5 text-[#1d4ed8]" />
              </div>
              <div className="bg-[#ffffff] border border-[#e0e0e0] rounded-[12px] p-3.5 font-mono text-[13px] text-[#1d4ed8]">
                <code>{trainCommand}</code>
              </div>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Trains 5 to 8 to 1 MLP using pure NumPy SGD, exporting verified float matrix coefficients to <code className="text-[#1d1d1f] font-mono text-xs">include/nn_weights.h</code>.
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(trainCommand, setCopiedTrain)}
              className="applePressable flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#e5e5ea] border border-[#e0e0e0] py-2.5 rounded-full text-[13px] font-medium text-[#1d1d1f] transition-all w-full mt-2"
            >
              {copiedTrain ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4 text-[#1d4ed8]" />}
              <span>{copiedTrain ? 'Copied Command' : 'Copy Train Command'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
