import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { kernelCodeSnippets } from '../data/codeSnippets';

export default function CodeExplorer() {
  const [activeTab, setActiveTab] = useState('bootStub');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'bootStub', label: 'boot.S (Assembly)' },
    { id: 'nnInference', label: 'nn_infer.c (C Engine)' },
    { id: 'schedulerLogic', label: 'scheduler.c (Fallback)' },
    { id: 'trainerScript', label: 'train.py (Model Training)' }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(kernelCodeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-20 px-4 lg:px-8 bg-[#ffffff] text-[#1d1d1f] border-b border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-[13px] font-semibold text-[#1d4ed8] uppercase tracking-wider">
              Source Code Explorer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Freestanding C and Assembly Code.
            </h2>
            <p className="text-[17px] text-[#86868b] max-w-2xl leading-relaxed">
              Inspect actual kernel implementation files directly from the repository.
            </p>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="applePressable flex items-center gap-2 bg-[#f5f5f7] hover:bg-[#e5e5ea] border border-[#e0e0e0] px-5 py-2.5 rounded-full text-[14px] font-medium text-[#1d1d1f] transition-all self-start md:self-auto"
          >
            {copied ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4 text-[#1d4ed8]" />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#f5f5f7] rounded-full max-w-fit border border-[#e0e0e0]">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`applePressable px-4 py-2 text-[13px] rounded-full font-medium transition-all ${
                activeTab === t.id
                  ? 'bg-[#ffffff] text-[#1d1d1f] shadow-sm'
                  : 'text-[#86868b] hover:text-[#1d1d1f]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Code Display Container */}
        <div className="appleCardDark bg-[#1d1d1f] border border-[#3a3a3c] overflow-hidden">
          <div className="bg-[#161617] border-b border-[#333336] px-5 py-3 flex items-center justify-between text-[12px] font-mono text-[#86868b]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-white">{tabs.find(t => t.id === activeTab)?.label}</span>
            </div>
            <span>Freestanding C99 / GNU Gas</span>
          </div>

          <div className="p-6 overflow-x-auto font-mono text-[13px] leading-relaxed text-[#ffffff] max-h-[460px] overflow-y-auto">
            <pre className="whitespace-pre">
              <code>{kernelCodeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
