import React from 'react';
import { ArrowLeft, BookOpen, Scale, FileCode, CheckCircle, ShieldAlert, Award } from 'lucide-react';

export default function TermsView({ onNavigateHome }) {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-white border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full Showcase</span>
            </button>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">Terms of Use</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal and Licensing Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Terms of Use.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Open source MIT license provisions, software warranty disclaimer, and academic research citations.
            </p>
            <p className="text-[13px] text-[#86868b]">
              Effective Date: November 9, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Agreement Overview */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <BookOpen className="w-6 h-6 text-[#1d4ed8]" />
              <span>Agreement to Terms</span>
            </h2>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              These Terms of Use constitute a legally binding agreement between you, whether personally or on behalf of an entity, and NeuroSched concerning your access to and use of the <span className="font-mono text-[13px] text-[#1d1d1f]">https://neurosched.vercel.app</span> website as well as any associated software repositories, binary artifacts, or documentation.
            </p>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              By accessing the website or downloading kernel source code, you agree that you have read, understood, and agreed to be bound by all of these Terms of Use.
            </p>
          </div>

          {/* MIT Open Source License Terms */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <FileCode className="w-5 h-5 text-[#16a34a]" />
              <span>The MIT License (Open Source)</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              NeuroSched source code, kernel assembly routines, and mathematical training scripts are licensed under the terms of the MIT License:
            </p>
            <div className="p-6 bg-[#252527] text-[#e5e5e7] rounded-xl font-mono text-[13px] leading-relaxed space-y-4 border border-[#3a3a3c]">
              <p>
                Copyright (c) 2026 MANTIS (mantisdarling)
              </p>
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
              </p>
              <p>
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
              </p>
            </div>
          </div>

          {/* Disclaimer of Warranty */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#ef4444]" />
              <span>Disclaimer of Warranty</span>
            </h2>
            <div className="p-5 bg-[#ef4444]/10 rounded-xl border border-[#ef4444]/20 space-y-2">
              <p className="text-[14px] text-[#7f1d1d] font-mono leading-relaxed">
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              NeuroSched is an experimental academic operating system designed for computer architecture research and emulation via QEMU or Bochs. Bare metal execution on physical hardware is performed at your own risk.
            </p>
          </div>

          {/* Intellectual Property and Attribution */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-[#3b82f6]" />
              <span>Academic Citations and Attribution</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              If you utilize NeuroSched kernel architecture, benchmark methodologies, or MLP process scheduling algorithms within academic publications or technical research papers, please provide proper attribution using the following citation format:
            </p>
            <div className="p-5 bg-[#f5f5f7] rounded-xl border border-[#e0e0e0] font-mono text-[12.5px] text-[#1d1d1f] leading-relaxed overflow-x-auto">
              @misc&#123;neurosched2026,<br />
              &nbsp;&nbsp;author = &#123;MANTIS&#125;,<br />
              &nbsp;&nbsp;title = &#123;NeuroSched: Freestanding 32 Bit x86 Operating System with Embedded Neural Scheduling&#125;,<br />
              &nbsp;&nbsp;year = &#123;2026&#125;,<br />
              &nbsp;&nbsp;publisher = &#123;GitHub&#125;,<br />
              &nbsp;&nbsp;journal = &#123;GitHub Repository&#125;,<br />
              &nbsp;&nbsp;howpublished = &#123;\url&#123;https://github.com/mantisdarling/NeuroSched&#125;&#125;<br />
              &#125;
            </div>
          </div>

          {/* Governing Law */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-3">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#16a34a]" />
              <span>Modifications and Governing Principles</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              We reserve the right to revise these Terms of Use at our sole discretion. Any updates will take effect immediately upon posting to this page with an updated effective date. Continued use of the website or software following such modifications constitutes your acceptance of the revised terms.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
