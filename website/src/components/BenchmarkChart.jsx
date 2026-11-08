import React, { useState } from 'react';
import { BarChart3, TrendingUp, Cpu, Clock } from 'lucide-react';

export default function BenchmarkChart() {
  const [activeMetric, setActiveMetric] = useState('wait');

  const metrics = [
    { id: 'wait', label: 'Average Wait Time (Ticks)', rr: 34.40, nn: 28.60, unit: 'ticks', delta: '16.8% lower' },
    { id: 'turnaround', label: 'Average Turnaround (Ticks)', rr: 40.80, nn: 35.00, unit: 'ticks', delta: '14.2% faster' },
    { id: 'throughput', label: 'Workload Execution Speed', rr: 1.0, nn: 1.2, unit: 'x speed', delta: '20.0% speedup' }
  ];

  const current = metrics.find(m => m.id === activeMetric);
  const maxVal = Math.max(current.rr, current.nn) * 1.25;

  return (
    <div className="appleCardDark bg-[#1d1d1f] p-7 space-y-6 border border-[rgba(255,255,255,0.1)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div className="space-y-1">
          <div className="text-[12px] font-semibold text-[#3b82f6] uppercase tracking-wider flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Empirical Execution Bench</span>
          </div>
          <h3 className="text-[21px] font-semibold text-white tracking-tight">Round Robin vs Neural Scheduler</h3>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex bg-[#2c2c2e] p-1 rounded-full">
          {metrics.map(m => (
            <button
              key={m.id}
              onClick={() => setActiveMetric(m.id)}
              className={`applePressable px-4 py-1.5 text-[13px] rounded-full font-medium transition-all ${
                activeMetric === m.id
                  ? 'bg-[#ffffff] text-[#1d1d1f] shadow-sm'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              {m.id === 'wait' ? 'Wait Time' : m.id === 'turnaround' ? 'Turnaround' : 'Throughput'}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Bar Comparison */}
      <div className="space-y-5 pt-1">
        <div className="space-y-2">
          <div className="flex justify-between text-[14px]">
            <span className="text-[#86868b]">Round Robin Baseline</span>
            <span className="text-white font-mono font-medium">{current.rr} {current.unit}</span>
          </div>
          <div className="w-full bg-[#2c2c2e] h-7 rounded-full overflow-hidden">
            <div 
              className="bg-[#48484a] h-full rounded-full transition-all duration-700 flex items-center justify-end pr-3.5 text-[12px] font-medium text-white"
              style={{ width: `${(current.rr / maxVal) * 100}%` }}
            >
              Baseline
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[14px]">
            <span className="text-[#3b82f6] font-medium">Neural Scheduler + Fallback</span>
            <span className="text-[#3b82f6] font-mono font-semibold">{current.nn} {current.unit}</span>
          </div>
          <div className="w-full bg-[#2c2c2e] h-7 rounded-full overflow-hidden">
            <div 
              className="bg-[#1d4ed8] h-full rounded-full transition-all duration-700 flex items-center justify-end pr-3.5 text-[12px] font-medium text-white"
              style={{ width: `${(current.nn / maxVal) * 100}%` }}
            >
              Neural Optimum
            </div>
          </div>
        </div>
      </div>

      {/* Delta Badge */}
      <div className="bg-[#16a34a]/10 border border-[#16a34a]/30 p-3.5 rounded-[14px] flex items-center justify-between text-[14px]">
        <div className="flex items-center gap-2 text-[#16a34a] font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>Performance Delta Improvement</span>
        </div>
        <span className="text-[#16a34a] font-semibold text-[15px]">{current.delta}</span>
      </div>
    </div>
  );
}
