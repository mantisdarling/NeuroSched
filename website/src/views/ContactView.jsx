import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, ShieldAlert, Github, CheckCircle2, Send, HelpCircle } from 'lucide-react';

export default function ContactView({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'research', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-[#ffffff] border-b border-[#e0e0e0] pt-12 pb-14 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-[13px] text-[#86868b]">
            <a 
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
              className="hover:text-[#1d4ed8] flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </a>
            <span>/</span>
            <span className="text-[#1d1d1f] font-medium">Contact Us</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Inquiries & Research Collaboration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Contact the Maintainers.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Have questions regarding bare-metal OS scheduling, neural network C inference, or academic collaboration? Reach out through our official communication channels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Quick Channels */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Form Column */}
          <div className="md:col-span-7 appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-6">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">Send a Direct Message</h2>
            
            {submitted ? (
              <div className="p-6 bg-[#16a34a]/10 border border-[#16a34a]/30 rounded-[14px] text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] mx-auto" />
                <h3 className="text-xl font-semibold text-[#1d1d1f]">Message Received!</h3>
                <p className="text-[14px] text-[#52525b] leading-relaxed">
                  Thank you for reaching out. We will review your message regarding <strong className="text-[#1d1d1f]">{formData.subject}</strong> and respond to <strong className="text-[#1d1d1f]">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'research', message: '' });
                  }}
                  className="appleBtnSecondary text-[13px] !py-1.5 !px-4 mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-[14px]">
                <div className="space-y-1.5">
                  <label className="font-semibold text-[#1d1d1f] block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Linus Torvalds"
                    className="w-full px-4 py-2.5 rounded-[8px] border border-[#e0e0e0] bg-[#fafafc] focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all text-[#1d1d1f]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-[#1d1d1f] block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-[8px] border border-[#e0e0e0] bg-[#fafafc] focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all text-[#1d1d1f]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-[#1d1d1f] block">Inquiry Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[8px] border border-[#e0e0e0] bg-[#fafafc] focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all text-[#1d1d1f]"
                  >
                    <option value="research">Academic / Thesis Research Collaboration</option>
                    <option value="kernel">Kernel & Assembly Implementation Question</option>
                    <option value="security">Security Vulnerability Disclosure</option>
                    <option value="contribution">Code Contribution / PR Inquiry</option>
                    <option value="general">General Feedback</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-[#1d1d1f] block">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, research thesis, or technical question..."
                    className="w-full px-4 py-2.5 rounded-[8px] border border-[#e0e0e0] bg-[#fafafc] focus:outline-none focus:border-[#1d4ed8] focus:bg-white transition-all text-[#1d1d1f]"
                  />
                </div>

                <button
                  type="submit"
                  className="appleBtnPrimary w-full text-[15px] font-medium !py-3 shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels Column */}
          <div className="md:col-span-5 space-y-5 text-[14px]">
            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#1d4ed8] font-semibold">
                <Github className="w-5 h-5" />
                <span>GitHub Issues & Discussions</span>
              </div>
              <p className="text-[#52525b] text-[13.5px] leading-relaxed">
                For public bug reports, build failures, or feature suggestions, open an issue directly in our GitHub repository for peer-reviewed tracking.
              </p>
              <a
                href="https://github.com/mantisdarling/NeuroSched/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#1d4ed8] font-medium hover:underline text-[13px]"
              >
                Open GitHub Issues ↗
              </a>
            </div>

            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#ef4444] font-semibold">
                <ShieldAlert className="w-5 h-5" />
                <span>Security Disclosures</span>
              </div>
              <p className="text-[#52525b] text-[13.5px] leading-relaxed">
                To report potential vulnerabilities or safety fallback circumventions, follow our coordinated security policy at <code className="text-xs bg-[#f5f5f7] px-1 py-0.5 rounded font-mono">SECURITY.md</code>.
              </p>
              <a
                href="https://github.com/mantisdarling/NeuroSched/blob/main/SECURITY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#ef4444] font-medium hover:underline text-[13px]"
              >
                Read Security Policy ↗
              </a>
            </div>

            <div className="appleCardLight p-6 bg-white border border-[#e0e0e0] space-y-3">
              <div className="flex items-center gap-2.5 text-[#16a34a] font-semibold">
                <HelpCircle className="w-5 h-5" />
                <span>Frequently Asked Questions</span>
              </div>
              <p className="text-[#52525b] text-[13.5px] leading-relaxed">
                Common questions about x86 FPU setup, 0 bytes malloc guarantees, and Taylor series sigmoid approximations are answered in our knowledge base.
              </p>
              <a
                href="/faq"
                onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
                className="inline-block text-[#16a34a] font-medium hover:underline text-[13px]"
              >
                View Technical FAQ →
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
