import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, ShieldAlert, Send, Github, CheckCircle2, Globe, Terminal } from 'lucide-react';

export default function ContactView({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Research Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

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
            <span className="text-[#1d1d1f] font-medium">Contact</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Developer and Academic Channels</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Contact Engineering.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Connect directly with the NeuroSched research team for technical questions, academic peer review, or security disclosures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Quick Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8]/10 text-[#1d4ed8] flex items-center justify-center font-bold">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Public Discussions</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Join architectural RFC threads, kernel optimization proposals, and QEMU replication questions on GitHub.
              </p>
              <a
                href="https://github.com/mantisdarling/NeuroSched/discussions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#1d4ed8] hover:underline pt-1"
              >
                <span>GitHub Discussions</span>
                <span>→</span>
              </a>
            </div>

            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#16a34a]/10 text-[#16a34a] flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Issue Tracker</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Report reproducible kernel panics, Multiboot2 boot loader quirks, or floating point rounding edge cases.
              </p>
              <a
                href="https://github.com/mantisdarling/NeuroSched/issues"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#16a34a] hover:underline pt-1"
              >
                <span>Open an Issue</span>
                <span>→</span>
              </a>
            </div>

            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f]">Security Policy</h3>
              <p className="text-[14px] text-[#86868b] leading-relaxed">
                Responsible disclosure protocol for memory safety vulnerabilities or CPU state corruption bugs.
              </p>
              <a
                href="https://github.com/mantisdarling/NeuroSched/blob/main/SECURITY.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#ef4444] hover:underline pt-1"
              >
                <span>Security Guidelines</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="appleCardLight p-8 sm:p-10 bg-white border border-[#e0e0e0] space-y-6">
            <div className="space-y-2 border-b border-[#e0e0e0] pb-5">
              <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">
                Send a Research Message
              </h2>
              <p className="text-[15px] text-[#86868b]">
                Inquire about academic benchmarking, dataset replication, or university systems curriculum usage.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#16a34a]/10 rounded-2xl border border-[#16a34a]/20">
                <div className="w-12 h-12 bg-[#16a34a] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f]">Message Dispatch Recorded</h3>
                <p className="text-[15px] text-[#52525b] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your transmission has been queued for review by the NeuroSched kernel maintainers.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Research Inquiry', message: '' });
                  }}
                  className="appleBtnSecondary text-[13px] !py-2 !px-4 mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-[#1d1d1f]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Linus Torvalds"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f5f5f7] border border-[#e0e0e0] rounded-xl text-[14px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-[#1d1d1f]">
                      Electronic Mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@domain.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f5f5f7] border border-[#e0e0e0] rounded-xl text-[14px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#1d1d1f]">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f5f5f7] border border-[#e0e0e0] rounded-xl text-[14px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:bg-white transition-all"
                  >
                    <option value="Research Inquiry">Academic or Research Inquiry</option>
                    <option value="Kernel Architecture">Kernel Architecture or Freestanding C</option>
                    <option value="Bug Report">QEMU Emulation Bug or Anomaly</option>
                    <option value="Licensing and Usage">Licensing or Curriculum Usage</option>
                    <option value="Other">Other Technical Topic</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#1d1d1f]">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your inquiry, research questions, or proposed kernel benchmarks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f5f5f7] border border-[#e0e0e0] rounded-xl text-[14px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-[12px] text-[#86868b]">
                    Protected under NeuroSched MIT terms. No personal data sold or tracked.
                  </p>
                  <button
                    type="submit"
                    className="appleBtnPrimary text-[14px] !py-2.5 !px-6 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Maintainer Info Banner */}
          <div className="p-6 bg-white border border-[#e0e0e0] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-[15px] font-semibold text-[#1d1d1f]">
                Looking for Source Code and Kernel Binaries?
              </h4>
              <p className="text-[13px] text-[#86868b]">
                Inspect the full git commit tree, build scripts, and ISO artifacts on the official GitHub repository.
              </p>
            </div>
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noreferrer"
              className="appleBtnSecondary text-[13px] !py-2 !px-4 flex items-center gap-2 whitespace-nowrap"
            >
              <Github className="w-4 h-4" />
              <span>GitHub mantisdarling</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
