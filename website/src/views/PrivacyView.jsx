import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, FileText } from 'lucide-react';

export default function PrivacyView({ onNavigate }) {
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
            <span className="text-[#1d1d1f] font-medium">Privacy Policy</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy & Data Sovereignty Statement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Privacy Policy.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Effective Date: November 2026. NeuroSched is committed to zero data surveillance and transparent open-source operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto appleCardLight p-8 sm:p-12 bg-white border border-[#e0e0e0] space-y-8 text-[15px] sm:text-[16px] text-[#52525b] leading-[1.8]">
          
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">1. Overview and Core Philosophy</h2>
            <p>
              The <strong>NeuroSched Project</strong> (<a href="https://neurosched.vercel.app" className="text-[#1d4ed8]">https://neurosched.vercel.app</a>) is an open-source educational and systems architecture research platform. We firmly believe in user privacy and data sovereignty. We do not sell, rent, monetize, or harvest user personal data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">2. Information We Do Not Collect</h2>
            <p>
              When you browse the website, read documentation, or interact with the client-side neural scheduler simulator:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#374151]">
              <li>We do <strong>not</strong> collect personally identifiable information (PII) such as your real name, physical address, or phone number unless you voluntarily submit an inquiry through our contact form.</li>
              <li>We do <strong>not</strong> access your local filesystem, hardware peripherals, or system processes.</li>
              <li>All neural network inference simulations run 100% locally in your browser's JavaScript engine via HTML5 Canvas. Zero simulation telemetry is sent back to any remote database.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">3. Client-Side Browser Storage</h2>
            <p>
              The website may store non-sensitive state in your browser's local memory (<code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">localStorage</code> or session state) solely to preserve your user experience preferences, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#374151]">
              <li>Your selected explanation mode (<code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">System Architect</code> vs <code className="font-mono text-xs bg-[#f5f5f7] px-1 py-0.5 rounded">Beginner ELIF5</code>).</li>
              <li>Simulator configurations (e.g. simulation speed multiplier and confidence fallback threshold slider value).</li>
            </ul>
            <p>These values never leave your computer and can be cleared at any time through your browser settings.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">4. Web Analytics and Technical Telemetry</h2>
            <p>
              To monitor uptime, Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift), and broken links, we use anonymized, privacy-compliant telemetry. This includes aggregate data such as browser type, approximate region (country-level), screen dimensions, and referral URLs. IP addresses are automatically anonymized, and no tracking cookies are placed for cross-site behavioral profiling.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">5. Third-Party Hosting and Repositories</h2>
            <p>
              This website is hosted on Vercel's global CDN infrastructure, and the underlying source code is hosted on GitHub. These third-party services maintain their own privacy practices and log standard HTTP network requests (e.g., access timestamps, HTTP status codes) required to deliver web assets securely.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">6. Contact for Privacy Matters</h2>
            <p>
              If you have any questions about this Privacy Policy or our open-source data practices, please file an issue or reach out directly at our <button onClick={() => onNavigate('contact')} className="text-[#1d4ed8] underline underline-offset-2">Contact Page</button>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
