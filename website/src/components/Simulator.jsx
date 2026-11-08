import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sliders, AlertTriangle, ShieldCheck, Activity } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';

export default function Simulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [tick, setTick] = useState(0);
  const [threshold, setThreshold] = useState(0.65);
  const [speed, setSpeed] = useState(1);
  const [fallbackCount, setFallbackCount] = useState(0);

  // Initial 10 process workload matching kernel.c
  const initialProcesses = [
    { id: 1, name: 'P1 (CPU Hog)', burst: 10, remaining: 10, prio: 4, io: false },
    { id: 2, name: 'P2 (Interactive)', burst: 3, remaining: 3, prio: 5, io: true },
    { id: 3, name: 'P3 (Background)', burst: 12, remaining: 12, prio: 1, io: false },
    { id: 4, name: 'P4 (Balanced)', burst: 6, remaining: 6, prio: 3, io: true },
    { id: 5, name: 'P5 (Realtime)', burst: 8, remaining: 8, prio: 5, io: false },
    { id: 6, name: 'P6 (Batch)', burst: 11, remaining: 11, prio: 2, io: false },
    { id: 7, name: 'P7 (Interactive)', burst: 2, remaining: 2, prio: 4, io: true },
    { id: 8, name: 'P8 (Compute)', burst: 5, remaining: 5, prio: 3, io: false },
    { id: 9, name: 'P9 (Low Prio IO)', burst: 4, remaining: 4, prio: 2, io: true },
    { id: 10, name: 'P10 (System)', burst: 3, remaining: 3, prio: 4, io: true }
  ];

  const [rrProcs, setRrProcs] = useState(initialProcesses);
  const [nnProcs, setNnProcs] = useState(initialProcesses);
  const [activeProcess, setActiveProcess] = useState(1);
  const [currentConf, setCurrentConf] = useState(0.82);

  // Reset simulator
  const handleReset = () => {
    setIsRunning(false);
    setTick(0);
    setFallbackCount(0);
    setRrProcs(initialProcesses);
    setNnProcs(initialProcesses);
    setActiveProcess(1);
    setCurrentConf(0.82);
  };

  // Simulation Tick Loop
  useEffect(() => {
    if (!isRunning) return;

    const intervalTime = 500 / speed;
    const timer = setInterval(() => {
      setTick((prevTick) => {
        if (prevTick >= 64) {
          setIsRunning(false);
          return 64;
        }

        // Simulate NN confidence score calculation for active process
        const simulatedConf = 0.45 + Math.random() * 0.45;
        setCurrentConf(simulatedConf);

        if (simulatedConf < threshold) {
          setFallbackCount((prev) => prev + 1);
        }

        // Cycle active process
        const activeIdx = (prevTick % 10) + 1;
        setActiveProcess(activeIdx);

        // Update process remaining burst
        setNnProcs((prev) =>
          prev.map((p) =>
            p.id === activeIdx && p.remaining > 0
              ? { ...p, remaining: p.remaining - 1 }
              : p
          )
        );

        return prevTick + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isRunning, speed, threshold]);

  return (
    <section id="simulator" className="py-20 px-4 lg:px-8 bg-[#272729] text-white border-b border-[#3a3a3c]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-[13px] font-semibold text-[#3b82f6] uppercase tracking-wider">
              Interactive Hardware Simulator
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-tight">
              Live OS Scheduler and Neural Canvas.
            </h2>
            <p className="text-[17px] text-[#86868b] max-w-2xl leading-relaxed">
              Observe process dispatching in real time. Adjust inference confidence thresholds to test the deterministic safety fallback.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-3 bg-[#1d1d1f] p-2 rounded-full border border-[rgba(255,255,255,0.1)] self-start md:self-auto">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="applePressable flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium text-[14px] px-5 py-2 rounded-full transition-all"
            >
              {isRunning ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              <span>{isRunning ? 'Pause' : 'Start Simulation'}</span>
            </button>

            <button
              onClick={handleReset}
              className="applePressable p-2 bg-[#2c2c2e] hover:bg-[#3a3a3c] text-white rounded-full transition-all"
              title="Reset Simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1 pl-2 pr-1 border-l border-[#3a3a3c] text-[13px] text-[#86868b]">
              <span className="mr-1">Speed:</span>
              {[1, 2, 5].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2.5 py-0.5 rounded-full font-medium transition-colors ${
                    speed === s ? 'bg-[#ffffff] text-[#1d1d1f]' : 'hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Gauges HUD */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="appleCardDark bg-[#1d1d1f] p-5">
            <div className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">Current Tick</div>
            <div className="text-3xl font-semibold text-white mt-1 tracking-tight">{tick} <span className="text-lg font-normal text-[#86868b]">/ 64</span></div>
          </div>

          <div className="appleCardDark bg-[#1d1d1f] p-5">
            <div className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">Round Robin Baseline</div>
            <div className="text-3xl font-semibold text-white mt-1 tracking-tight">34.40 <span className="text-sm font-normal text-[#86868b]">ticks</span></div>
          </div>

          <div className="appleCardDark bg-[#1d1d1f] p-5 border-[#3b82f6]/40">
            <div className="text-[12px] uppercase font-semibold text-[#3b82f6] tracking-wider">Neural Scheduler</div>
            <div className="text-3xl font-semibold text-[#3b82f6] mt-1 tracking-tight">28.60 <span className="text-sm font-normal text-[#86868b]">ticks</span></div>
            <div className="text-[12px] text-[#16a34a] font-medium mt-1">16.8% faster response</div>
          </div>

          <div className="appleCardDark bg-[#1d1d1f] p-5">
            <div className="text-[12px] uppercase font-semibold text-[#86868b] tracking-wider">Fallbacks Triggered</div>
            <div className="text-3xl font-semibold text-[#d97706] mt-1 tracking-tight">{fallbackCount}</div>
            <div className="text-[12px] text-[#86868b] mt-1">0 panics recorded</div>
          </div>
        </div>

        {/* Confidence Threshold Slider Card */}
        <div className="appleCardDark bg-[#1d1d1f] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[14px] font-medium text-white">
              <Sliders className="w-4 h-4 text-[#3b82f6]" />
              <span>Confidence Fallback Threshold (<code className="font-mono text-xs text-[#3b82f6]">NN_CONF_THRESH</code>)</span>
            </div>
            <div className="text-[15px] font-semibold text-[#3b82f6]">
              {(threshold * 100).toFixed(0)}%
            </div>
          </div>

          <input
            type="range"
            min="0.50"
            max="0.90"
            step="0.05"
            value={threshold}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              if (!isNaN(val)) {
                setThreshold(Math.min(Math.max(val, 0.50), 0.90));
              }
            }}
            className="w-full h-1.5 bg-[#3a3a3c] rounded-lg appearance-none cursor-pointer accent-[#3b82f6]"
          />

          <div className="flex justify-between text-[13px] text-[#86868b]">
            <span>0.50 (Aggressive Model Trust)</span>
            <span className="text-white font-medium">0.65 (Kernel Default)</span>
            <span>0.90 (Conservative Fallback)</span>
          </div>
        </div>

        {/* Dual Layout: Neural Synapse Canvas & Process Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Neural Synapse Canvas Visualizer */}
          <div className="lg:col-span-5 appleCardDark bg-[#1d1d1f] p-6 space-y-4">
            <div className="flex items-center justify-between text-[14px] pb-3 border-b border-[rgba(255,255,255,0.08)]">
              <span className="font-medium text-white">MLP Forward Pass (5 to 8 to 1)</span>
              <span className="text-[12px] text-[#3b82f6] font-medium">60 fps Canvas</span>
            </div>
            
            <NeuralCanvas
              currentConfidence={currentConf}
              isRunning={isRunning}
              activeProcess={activeProcess}
            />

            {currentConf < threshold && (
              <div className="flex items-center gap-2.5 bg-[#d97706]/10 border border-[#d97706]/30 p-3 rounded-[12px] text-[#d97706] text-[13px]">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Confidence {(currentConf * 100).toFixed(0)}% &lt; {(threshold * 100).toFixed(0)}%: Deferring to Round Robin for tick stability</span>
              </div>
            )}
          </div>

          {/* Process Timeline Bars */}
          <div className="lg:col-span-7 appleCardDark bg-[#1d1d1f] p-6 space-y-4">
            <div className="text-[14px] font-medium text-white pb-3 border-b border-[rgba(255,255,255,0.08)] flex justify-between">
              <span>Workload Execution Queue</span>
              <span className="text-[#86868b]">10 Active Processes</span>
            </div>

            <div className="space-y-3 max-h-[310px] overflow-y-auto pr-1">
              {nnProcs.map((proc) => {
                const percent = ((proc.burst - proc.remaining) / proc.burst) * 100;
                const isActive = proc.id === activeProcess;
                return (
                  <div key={proc.id} className="space-y-1.5 text-[13px]">
                    <div className="flex justify-between">
                      <span className={isActive ? 'text-[#3b82f6] font-semibold' : 'text-white'}>
                        {proc.name}
                      </span>
                      <span className="text-[#86868b] font-mono text-[12px]">
                        rem: {proc.remaining}/{proc.burst}
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#2c2c2e] rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          isActive ? 'bg-[#3b82f6]' : 'bg-[#16a34a]'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
