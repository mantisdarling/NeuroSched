import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, EyeOff, FileText, Globe, Cookie, HelpCircle } from 'lucide-react';

export default function PrivacyView({ onNavigate }) {
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
            <span className="text-[#1d1d1f] font-medium">Privacy Policy</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy & AdSense Compliance Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Privacy & Cookie Policy.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Last Updated: November 2026. NeuroSched adheres to rigorous data privacy principles, GDPR/CCPA standards, and Google AdSense partner guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 px-4 lg:px-8 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        <div className="max-w-4xl mx-auto appleCardLight p-8 sm:p-12 bg-white border border-[#e0e0e0] space-y-8 text-[15px] sm:text-[16px] text-[#52525b] leading-[1.8]">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">1. Overview and Core Philosophy</h2>
            <p>
              The <strong>NeuroSched Project</strong> (<a href="https://neurosched.vercel.app" className="text-[#1d4ed8]">https://neurosched.vercel.app</a>) is an open-source systems architecture research initiative maintained by MANTIS. We are committed to upholding transparency, data sovereignty, and user privacy across all web endpoints, interactive simulators, and documentation pages.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">2. Information We Collect and Client-Side Execution</h2>
            <p>
              We prioritize zero data harvesting:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#374151]">
              <li><strong>Interactive Simulator:</strong> All neural network inference simulations run 100% locally in your client web browser through HTML5 Canvas and JavaScript. No process states or memory telemetry are transmitted to our servers.</li>
              <li><strong>Contact Submissions:</strong> If you voluntarily reach out via our contact form, we collect only the name, email address, and message text you provide solely to answer your technical or academic inquiry. We never sell, share, or monetize contact inquiries.</li>
              <li><strong>Automatic Technical Logs:</strong> Standard web server log files (such as IP address, browser user-agent, referring page, and timestamp) are processed automatically by our hosting platform (Vercel) to defend against DDoS attacks and ensure network stability.</li>
            </ul>
          </div>

          {/* Section 3: AdSense Disclosures */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#1d4ed8]" />
              <span>3. Google AdSense and Third-Party Advertising Disclosures</span>
            </h2>
            <p>
              To support continuous open-source research and cloud infrastructure costs, this website may display advertisements served by <strong>Google AdSense</strong> and authorized third-party ad networks. In compliance with Google's publisher guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#374151]">
              <li>
                <strong>Third-Party Cookies:</strong> Google and other third-party vendors use cookies to serve ads based on your prior visits to this website or other sites on the Internet.
              </li>
              <li>
                <strong>DoubleClick / Advertising Cookies:</strong> Google’s use of advertising cookies enables it and its partners to serve targeted ads based on your visits to our site and/or other sites across the Internet.
              </li>
              <li>
                <strong>Personalized Advertising Opt-Out:</strong> You may opt out of personalized advertising by visiting Google's official Ad Settings page: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] underline">adssettings.google.com</a>.
              </li>
              <li>
                <strong>Network Advertising Initiative (NAI):</strong> Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] underline">optout.networkadvertising.org</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] underline">www.aboutads.info</a>.
              </li>
            </ul>
          </div>

          {/* Section 4: Cookie Policy */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <Cookie className="w-5 h-5 text-[#f59e0b]" />
              <span>4. Cookie Policy and Local Storage</span>
            </h2>
            <p>
              Cookies are small data files placed on your device to enhance site navigation and remember user preferences:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-[#374151]">
              <li><strong>Strictly Necessary Storage:</strong> Used to maintain browser session state and secure delivery of web assets.</li>
              <li><strong>Preference Memory:</strong> LocalStorage stores your chosen technical view mode (System Architect vs Beginner ELIF5) and simulator slider parameters locally on your device.</li>
              <li><strong>Analytics Cookies:</strong> We utilize anonymized Google Analytics (gtag.js) to understand visitor volume, Core Web Vitals, and page loading speed. IP addresses are masked.</li>
              <li><strong>Advertising Cookies:</strong> Set by Google AdSense to prevent repetitive ad displays and gauge advertisement efficacy.</li>
            </ul>
            <p>
              You can control, block, or delete cookies at any time through your browser settings (Chrome, Safari, Firefox, Edge). Note that disabling cookies will not impede your ability to read documentation or use the kernel simulator.
            </p>
          </div>

          {/* Section 5: GDPR */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">5. GDPR Compliance (EEA and UK Visitors)</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), visitors located in the European Economic Area (EEA) and the United Kingdom enjoy specific statutory rights:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#374151]">
              <li><strong>Right of Access:</strong> Request confirmation of whether your personal data is processed.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate information.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request immediate deletion of any submitted contact correspondence.</li>
              <li><strong>Right to Restrict Processing & Data Portability:</strong> Obtain a structured copy of data provided to us.</li>
            </ul>
          </div>

          {/* Section 6: CCPA / CPRA */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">6. CCPA and CPRA Privacy Notice (California Residents)</h2>
            <p>
              The California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant California residents specific disclosures:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#374151]">
              <li>NeuroSched does <strong>not sell</strong> personal information to third parties.</li>
              <li>NeuroSched does not share personal information for cross-context behavioral advertising except as facilitated through standard AdSense cookies (which you may opt out of via the links in Section 3).</li>
              <li>California residents may submit verifiable requests to delete any stored contact information by emailing maintainers.</li>
            </ul>
          </div>

          {/* Section 7: COPPA */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">7. Children's Online Privacy Protection (COPPA)</h2>
            <p>
              NeuroSched is designed for computer science students, kernel developers, and researchers. We do not knowingly collect or solicit personal data from children under the age of 13. If you believe a child under 13 has submitted information through our contact form, please notify us immediately for prompt deletion.
            </p>
          </div>

          {/* Section 8: Inquiries */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight">8. Contact Information and Data Controller</h2>
            <p>
              For any questions regarding this Privacy Policy, cookie preferences, or data deletion requests, contact the project maintainer:
            </p>
            <div className="p-4 bg-[#f5f5f7] rounded-[10px] space-y-1 font-mono text-[13px] text-[#1d1d1f]">
              <p>Maintainer: MANTIS (@mantisdarling)</p>
              <p>Project: NeuroSched x86 Neural Operating System</p>
              <p>Repository: github.com/mantisdarling/NeuroSched</p>
              <p>Direct Inquiries: <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-[#1d4ed8] underline">neurosched.vercel.app/contact</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
