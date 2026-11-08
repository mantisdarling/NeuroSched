import React, { useState } from 'react';
import { Trophy, ShieldCheck } from 'lucide-react';

export default function MultiAlgoComparison() {
  const [selectedAlgo, setSelectedAlgo] = useState('nn');

  const algorithms = [
    { id: 'rr', name: 'Round Robin (Baseline)', wait: 34.40, turnaround: 40.80, starvations: 4, winner: false },
    { id: 'prio', name: 'Static Priority', wait: 32.10, turnaround: 38.50, starvations: 6, winner: false },
    { id: 'sjf', name: 'Shortest Job First', wait: 30.50, turnaround: 36.20, starvations: 2, winner: false },
    { id: 'nn', name: 'NeuroSched (MLP plus Fallback)', wait: 28.60, turnaround: 35.00, starvations: 0, winner: true }
  ];

  return (
    <div className="appleCardDark bg-[#1d1d1f] p-5 sm:p-7 space-y-6 border border-[rgba(255,255,255,0.1)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div className="space-y-1">
          <div className="text-[12px] font-semibold text-[#3b82f6] uppercase tracking-wider flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5" />
            <span>4 Way Algorithm Benchmark</span>
          </div>
          <h3 className="text-[21px] font-semibold text-white tracking-tight">
            Multi Algorithm Scheduling Comparison
          </h3>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-[#16a34a] bg-[#16a34a]/10 border border-[#16a34a]/30 px-3 py-1 rounded-full font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>NeuroSched Optimum (16.8% lower wait)</span>
        </div>
      </div>

      {/* Algorithm Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {algorithms.map((a) => (
          <div
            key={a.id}
            onClick={() => setSelectedAlgo(a.id)}
            className={`appleCard p-5 cursor-pointer space-y-3.5 transition-all ${
              a.winner
                ? 'bg-[#272729] border-2 border-[#1d4ed8]'
                : selectedAlgo === a.id
                ? 'bg-[#272729] border border-[#3b82f6]'
                : 'bg-[#161617] border border-[rgba(255,255,255,0.08)] hover:border-[#86868b]'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-semibold text-white">{a.name}</span>
              {a.winner && (
                <span className="bg-[#1d4ed8] text-white font-semibold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Winner
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-[13px]">
              <div className="flex justify-between">
                <span className="text-[#86868b]">Avg Wait:</span>
                <span className={`font-mono ${a.winner ? 'text-[#3b82f6] font-semibold' : 'text-white'}`}>
                  {a.wait} ticks
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#86868b]">Turnaround:</span>
                <span className="text-white font-mono">{a.turnaround} ticks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#86868b]">Starvations:</span>
                <span className={`font-mono ${a.starvations === 0 ? 'text-[#16a34a] font-semibold' : 'text-[#d97706]'}`}>
                  {a.starvations}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
