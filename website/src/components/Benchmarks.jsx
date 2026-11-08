import React, { useState } from 'react';
import { Award, TrendingUp, ShieldAlert, FileText, Check } from 'lucide-react';
import BenchmarkChart from './BenchmarkChart';
import CpuCoreVisualizer from './CpuCoreVisualizer';

export default function Benchmarks() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = () => {
    setDownloading(true);
    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 500);
  };

  return (
    <section id="benchmarks" className="py-20 px-4 lg:px-8 bg-[#272729] text-white border-b border-[#3a3a3c]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-[13px] font-semibold text-[#3b82f6] uppercase tracking-wider">
              Empirical Performance Validation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-tight">
              Verified QEMU Benchmarks.
            </h2>
            <p className="text-[17px] text-[#86868b] max-w-2xl leading-relaxed">
              Real benchmark outcomes captured directly over QEMU COM1 serial UART port during dual phase kernel execution.
            </p>
          </div>

          <button
            onClick={handleDownloadPDF}
            className="applePressable flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium text-[14px] px-5 py-2.5 rounded-full transition-all self-start md:self-auto"
          >
            {downloading ? <Check className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            <span>{downloading ? 'Preparing Report...' : 'Export PDF Report'}</span>
          </button>
        </div>

        {/* Metric Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="appleCardDark bg-[#1d1d1f] p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">Average Wait Time</span>
              <TrendingUp className="w-4 h-4 text-[#16a34a]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-semibold text-white tracking-tight">28.60 <span className="text-lg font-normal text-[#86868b]">Ticks</span></div>
              <div className="text-[13px] text-[#86868b]">vs 34.40 ticks (Round Robin)</div>
            </div>
            <div className="bg-[#16a34a]/10 border border-[#16a34a]/30 p-2.5 rounded-[10px] text-[#16a34a] text-[13px] font-medium">
              16.8% lower average wait time
            </div>
          </div>

          <div className="appleCardDark bg-[#1d1d1f] p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">Average Turnaround</span>
              <TrendingUp className="w-4 h-4 text-[#16a34a]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-semibold text-white tracking-tight">35.00 <span className="text-lg font-normal text-[#86868b]">Ticks</span></div>
              <div className="text-[13px] text-[#86868b]">vs 40.80 ticks (Round Robin)</div>
            </div>
            <div className="bg-[#16a34a]/10 border border-[#16a34a]/30 p-2.5 rounded-[10px] text-[#16a34a] text-[13px] font-medium">
              14.2% faster job completion
            </div>
          </div>

          <div className="appleCardDark bg-[#1d1d1f] p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">Fallback Safety</span>
              <ShieldAlert className="w-4 h-4 text-[#3b82f6]" />
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-semibold text-white tracking-tight">100% <span className="text-lg font-normal text-[#86868b]">Safe</span></div>
              <div className="text-[13px] text-[#86868b]">50 safety fallbacks triggered</div>
            </div>
            <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/30 p-2.5 rounded-[10px] text-[#3b82f6] text-[13px] font-medium">
              Zero kernel panic guarantee
            </div>
          </div>
        </div>

        {/* Interactive Metric Comparison Chart */}
        <BenchmarkChart />

        {/* Hardware CPU Core Visualizer */}
        <CpuCoreVisualizer />

        {/* Detailed Benchmark Comparison Table */}
        <div className="appleCardDark bg-[#1d1d1f] p-7 space-y-5 border border-[rgba(255,255,255,0.1)]">
          <div className="text-[16px] font-semibold text-white pb-3 border-b border-[rgba(255,255,255,0.08)]">
            Side by Side Execution Comparison Matrix
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.08)] text-[#86868b]">
                  <th className="py-3 px-4 font-medium">Metric</th>
                  <th className="py-3 px-4 font-medium">Round Robin</th>
                  <th className="py-3 px-4 font-medium">Neural + Fallback</th>
                  <th className="py-3 px-4 font-medium">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(255,255,255,0.06)] text-white">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Average Wait Time</td>
                  <td className="py-3.5 px-4 text-[#86868b] font-mono">34.40 ticks</td>
                  <td className="py-3.5 px-4 text-[#3b82f6] font-semibold font-mono">28.60 ticks</td>
                  <td className="py-3.5 px-4 text-[#16a34a] font-medium">+16.8% faster</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Average Turnaround</td>
                  <td className="py-3.5 px-4 text-[#86868b] font-mono">40.80 ticks</td>
                  <td className="py-3.5 px-4 text-[#3b82f6] font-semibold font-mono">35.00 ticks</td>
                  <td className="py-3.5 px-4 text-[#16a34a] font-medium">+14.2% faster</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Total Ticks Elapsed</td>
                  <td className="py-3.5 px-4 font-mono">64 ticks</td>
                  <td className="py-3.5 px-4 font-mono">64 ticks</td>
                  <td className="py-3.5 px-4 text-[#86868b]">100% finished</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">NN Fallback Triggers</td>
                  <td className="py-3.5 px-4 text-[#86868b]">N/A</td>
                  <td className="py-3.5 px-4 text-[#d97706] font-mono font-medium">50 times</td>
                  <td className="py-3.5 px-4 text-[#16a34a] font-medium">100% stable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
