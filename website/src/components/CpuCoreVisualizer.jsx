import React from 'react';
import { Cpu, Zap, Activity } from 'lucide-react';

export default function CpuCoreVisualizer() {
  const cores = [
    { id: 0, name: 'Core 0 (Scheduler Master)', load: 88, status: 'EXECUTING', process: 'P1 [CPU Hog]' },
    { id: 1, name: 'Core 1 (NN Inference FPU)', load: 64, status: 'INFERRING', process: '5 to 8 to 1 MLP' },
    { id: 2, name: 'Core 2 (I/O Dispatcher)', load: 32, status: 'WAITING', process: 'P2 [Interactive]' },
    { id: 3, name: 'Core 3 (COM1 UART Streamer)', load: 45, status: 'STREAMING', process: 'Telemetry Log' }
  ];

  return (
    <div className="appleCardDark bg-[#1d1d1f] p-7 space-y-6 border border-[rgba(255,255,255,0.1)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div className="space-y-1">
          <div className="text-[12px] font-semibold text-[#3b82f6] uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>x86 Hardware Processor Die</span>
          </div>
          <h3 className="text-[21px] font-semibold text-white tracking-tight">Core Dispatches & Register Pipeline</h3>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-[#16a34a] bg-[#16a34a]/10 border border-[#16a34a]/30 px-3 py-1 rounded-full font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>x87 Hardware FPU Active</span>
        </div>
      </div>

      {/* 4-Core Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cores.map(c => (
          <div key={c.id} className="bg-[#161617] border border-[rgba(255,255,255,0.08)] p-5 rounded-[14px] space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-white">{c.name}</span>
              <span className="text-[#3b82f6] font-mono text-[11px] font-semibold bg-[#3b82f6]/10 px-2 py-0.5 rounded-full">{c.status}</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[13px] text-[#86868b]">
                <span>Active Process</span>
                <span className="text-white font-medium">{c.process}</span>
              </div>
              <div className="w-full bg-[#2c2c2e] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#3b82f6] h-full rounded-full transition-all duration-500"
                  style={{ width: `${c.load}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[12px] text-[#86868b] pt-1">
              <span>Load: {c.load}%</span>
              <span className="font-mono">Clock: 3.20 GHz</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
