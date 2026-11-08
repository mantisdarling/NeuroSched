import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2 } from 'lucide-react';

export default function SerialTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    'NeuroSched v1.0 COM1 Serial UART Shell (38400 baud, 8N1 @ 0x3F8)',
    'Type "help" for available kernel commands.',
    ''
  ]);
  const terminalBoxRef = useRef(null);

  useEffect(() => {
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.replace(/[^\w\s]/gi, '').trim().toLowerCase();
    if (!rawCmd) return;

    let response = [];
    if (rawCmd === 'help') {
      response = [
        'Available NeuroSched Kernel Commands:',
        '  help       Display command reference menu',
        '  boot       Simulate Multiboot2 boot sequence',
        '  run rr     Execute Round Robin process scheduler pass',
        '  run nn     Execute Neural Network scheduler pass with fallback checks',
        '  stats      Display empirical QEMU performance metrics comparison',
        '  weights    Dump 5 to 8 to 1 neural weight matrix parameters',
        '  clear      Clear serial console history'
      ];
    } else if (rawCmd === 'boot') {
      response = [
        '[BOOT] Multiboot2 handoff verified (EAX=0x36D76289)',
        '[BOOT] Setting up 16 KiB System V ABI kernel stack',
        '[BOOT] Enabling x87 FPU via CR0 flags (EM=0, MP=1)',
        '[BOOT] COM1 UART (38400 8N1 @ 0x3F8) and VGA (80 by 25 @ 0xB8000) online',
        '[BOOT] NeuroSched kernel ready.'
      ];
    } else if (rawCmd === 'run rr' || rawCmd === 'rr') {
      response = [
        '[RR] Executing Round Robin simulation over 10 processes...',
        '[RR] Quantum: 1 tick | Total Ticks: 64',
        '[RR] Avg Wait Time: 34.40 ticks | Avg Turnaround: 40.80 ticks',
        '[RR] Simulation complete.'
      ];
    } else if (rawCmd === 'run nn' || rawCmd === 'nn') {
      response = [
        '[NN] Executing Neural Network scheduler simulation...',
        '[NN] Model: 5 inputs to 8 hidden (ReLU) to 1 output (Sigmoid)',
        '[NN] Evaluating process scores tick by tick...',
        '[WARN] Confidence 0.58f < 0.65f on tick 14: Triggered Fallback to Round Robin',
        '[NN] Total Ticks: 64 | Fallbacks Triggered: 50 times',
        '[NN] Avg Wait Time: 28.60 ticks (16.8% Wait Reduction!)'
      ];
    } else if (rawCmd === 'stats') {
      response = [
        '===========================================================',
        '  NEUROSCHED: Scheduling Algorithm Comparison',
        '===========================================================',
        '  Metric               Round Robin    Neural plus Fallback',
        '  Avg Wait Time:       34.40 ticks    28.60 ticks',
        '  Avg Turnaround:      40.80 ticks    35.00 ticks',
        '  Total Ticks:         64             64',
        '  NN Fallbacks:        none           50 times',
        '===========================================================',
        '  RESULT: Neural scheduler achieved 16.8% lower wait time!'
      ];
    } else if (rawCmd === 'weights') {
      response = [
        '[WEIGHTS] 5 to 8 to 1 MLP Parameter Matrix (57 Floats Total)',
        'W1 Layer 1 (5 by 8):',
        '  [+0.42, -0.18, +0.85, +0.33, -0.09, +0.61, -0.27, +0.74]',
        '  [-0.65, +0.91, -0.12, +0.44, +0.58, -0.36, +0.82, -0.15]',
        '  [+0.31, +0.22, +0.67, -0.54, +0.19, +0.88, -0.41, +0.05]',
        '  [-0.08, +0.77, +0.49, +0.16, -0.62, +0.29, +0.53, -0.84]',
        '  [+0.93, -0.34, +0.07, +0.71, +0.25, -0.19, +0.64, +0.48]',
        'W2 Layer 2 (8 by 1):',
        '  [+1.12, -0.84, +0.95, +0.47, -0.63, +1.28, -0.39, +0.76]'
      ];
    } else if (rawCmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else {
      response = [
        `Unknown command: "${rawCmd}". Type "help" for a list of available commands.`
      ];
    }

    setLogs((prev) => [...prev, `neuro> ${inputVal}`, ...response, '']);
    setInputVal('');
  };

  return (
    <div className="appleCardDark bg-[#1d1d1f] p-5 sm:p-7 space-y-5 border border-[rgba(255,255,255,0.1)]">
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-2 text-[14px] text-[#3b82f6] font-medium">
          <Terminal className="w-4 h-4" />
          <span>Interactive Serial Shell (COM1 UART)</span>
        </div>
        <button
          onClick={() => setLogs([])}
          className="text-[#86868b] hover:text-white transition-colors p-1"
          title="Clear Console"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal Screen */}
      <div 
        ref={terminalBoxRef} 
        className="bg-[#161617] rounded-[14px] border border-[rgba(255,255,255,0.08)] p-5 font-mono text-[13px] leading-relaxed h-64 overflow-y-auto space-y-1 text-white"
      >
        {logs.map((line, idx) => (
          <div 
            key={idx} 
            className={
              line.startsWith('neuro>') 
                ? 'text-[#3b82f6] font-semibold' 
                : line.startsWith('[WARN]') 
                ? 'text-[#d97706]' 
                : line.startsWith('[RESULT]') || line.includes('16.8%') 
                ? 'text-[#16a34a] font-medium' 
                : 'text-[#86868b]'
            }
          >
            {line}
          </div>
        ))}
      </div>

      {/* Interactive Command Input Form */}
      <form onSubmit={handleCommand} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex items-center bg-[#161617] border border-[rgba(255,255,255,0.12)] rounded-full px-4 py-1.5 focus-within:border-[#3b82f6] transition-colors">
          <span className="font-mono text-xs text-[#3b82f6] font-semibold shrink-0 select-none mr-2.5">
            neuro&gt;
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type help, boot, run nn, or stats..."
            className="w-full bg-transparent border-none py-1 font-mono text-[13px] text-white focus:outline-none placeholder:text-[#71717a]"
          />
        </div>
        <button
          type="submit"
          className="applePressable bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium text-[14px] px-6 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all shrink-0"
        >
          <span>Send</span>
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
