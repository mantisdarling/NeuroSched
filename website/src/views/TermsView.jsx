import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function TermsView({ onNavigate }) {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#ffffff] border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">Terms & Conditions</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Open Source Legal Terms & Use Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Terms & Conditions.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Effective Date: November 2026. Please read these terms carefully before accessing or contributing to the NeuroSched project.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto appleCardLight p-8 sm:p-12 bg-white border border-[#e0e0e0] space-y-8 text-[15px] sm:text-[16px] text-[#52525b] leading-[1.8]">
          
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, reading documentation, downloading source code, or compiling the NeuroSched kernel binary, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">2. Open Source License (MIT)</h2>
            <p>
              The NeuroSched operating system kernel source code, assembly bootloaders, and training scripts are distributed under the terms of the <strong>MIT License</strong>. You are granted permission, free of charge, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to the conditions set forth in the official LICENSE file.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">3. Research & Experimental Nature</h2>
            <p>
              NeuroSched is an <em>experimental academic research kernel</em>. It is designed to demonstrate neural process scheduling inside a 32-bit protected mode environment without dynamic heap allocations. It is not intended for mission-critical, life-support, commercial avionics, medical, or production server deployment without rigorous independent formal verification.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">4. Disclaimer of Warranty</h2>
            <p className="p-4 bg-[#f5f5f7] rounded-[8px] border-l-4 border-[#1d4ed8] font-mono text-xs sm:text-[13px] text-[#1d1d1f]">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">5. User Contributions and Pull Requests</h2>
            <p>
              Any contribution submitted to the project (via pull requests, code patches, or documentation improvements) shall be licensed under the MIT License without any additional terms or conditions, in accordance with the Developer Certificate of Origin (DCO 1.1).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">6. Modifications to Terms</h2>
            <p>
              We reserve the right to revise or update these Terms & Conditions at any time without prior notice. By continuing to use this website after any revisions are posted, you agree to be bound by the updated terms.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
