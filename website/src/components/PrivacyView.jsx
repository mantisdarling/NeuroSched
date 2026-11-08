import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PrivacyView({ onNavigateHome }) {
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
            <span className="text-[#1d1d1f] font-medium">Privacy Policy</span>
          </div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#16a34a]/10 text-[#16a34a] rounded-full text-[12px] font-semibold tracking-wide uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>Compliance and Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight">
              Privacy Policy.
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#86868b] leading-relaxed">
              Transparent data protection standards, cookie disclosures, and privacy commitments for NeuroSched visitors.
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

          {/* Core Summary Card */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-2xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2.5">
              <Lock className="w-6 h-6 text-[#16a34a]" />
              <span>Our Privacy Commitment</span>
            </h2>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              At NeuroSched, accessible from <span className="font-mono text-[13px] text-[#1d1d1f]">https://neurosched.vercel.app</span>, the privacy of our visitors is of paramount importance. This Privacy Policy document delineates the types of information collected and recorded by NeuroSched and how that information is utilized.
            </p>
            <p className="text-[15.5px] text-[#52525b] leading-relaxed">
              If you have additional questions or require more information regarding our privacy practices, please contact us directly via our GitHub repository discussions or issue tracker.
            </p>
          </div>

          {/* Log Files Card */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1d4ed8]" />
              <span>Server Log Files</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              NeuroSched follows standard procedures for utilizing log files. These files log visitors when they access web pages. All modern hosting platforms perform this as part of infrastructure telemetry and hosting analytics. The information collected by log files includes internet protocol addresses, browser application type, Internet Service Provider details, timestamp stamps, referring exit pages, and approximate click tallies. These details are not linked to any personally identifiable information. The purpose is strictly analyzing usage trends, managing the platform, tracking aggregate traffic flow, and gathering demographic context.
            </p>
          </div>

          {/* Cookies and Google AdSense Disclosures */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-5">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#3b82f6]" />
              <span>Cookies and Web Beacons</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              Like any modern web application, NeuroSched utilizes cookies. These cookies store information including visitor preferences and the pages on the website that the visitor accessed or visited. The information is utilized to optimize user experience by customizing web page content based on browser type or other technical environment indicators.
            </p>

            <div className="p-5 bg-[#f5f5f7] rounded-xl border border-[#e0e0e0] space-y-3">
              <h3 className="text-[16px] font-semibold text-[#1d1d1f]">
                Google DoubleClick DART Cookie Policy
              </h3>
              <p className="text-[14.5px] text-[#52525b] leading-relaxed">
                Google is a third party vendor on our site. Google uses cookies, known as DART cookies, to serve ads to site visitors based upon their visit to our site and other internet destinations. Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at the official Google advertising portal:
              </p>
              <div className="pt-1">
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13.5px] font-semibold text-[#1d4ed8] hover:underline"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </div>
            </div>

            <p className="text-[15px] text-[#52525b] leading-relaxed">
              Third party ad servers or ad networks employ technologies like cookies, JavaScript, or Web Beacons within their advertisements and respective links appearing on NeuroSched. These technologies automatically receive your internet protocol address. These tools measure the effectiveness of advertising campaigns and personalize the advertising content displayed to you. NeuroSched maintains no access to or control over these cookies used by third party advertisers.
            </p>
          </div>

          {/* GDPR Rights Card */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
              <span>General Data Protection Regulation (GDPR) Rights</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              We want to make sure you are fully aware of all your data protection entitlements. Every European Union user is entitled to the following fundamental rights:
            </p>
            <ul className="space-y-2 text-[14.5px] text-[#52525b] list-disc pl-5">
              <li>
                <strong className="text-[#1d1d1f]">The Right to Access:</strong> You have the right to request copies of your personal data.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">The Right to Rectification:</strong> You have the right to request correction of any information you believe is inaccurate.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">The Right to Erasure:</strong> You have the right to request that we erase your personal data under certain qualifying conditions.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">The Right to Restrict Processing:</strong> You have the right to request restriction of the processing of your personal data.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">The Right to Object to Processing:</strong> You have the right to object to our processing of your personal data.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">The Right to Data Portability:</strong> You have the right to request transfer of the data we have collected to another organization or directly to you.
              </li>
            </ul>
          </div>

          {/* CCPA Privacy Rights */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#3b82f6]" />
              <span>California Consumer Privacy Act (CCPA) Disclosures</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              Under the CCPA, California consumers hold specific legal rights:
            </p>
            <ul className="space-y-2 text-[14.5px] text-[#52525b] list-disc pl-5">
              <li>
                <strong className="text-[#1d1d1f]">Right to Know:</strong> Request disclosure of categories and specific pieces of personal data collected.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">Right to Delete:</strong> Request deletion of any personal data collected from the consumer.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">Right to Opt Out of Sale:</strong> Request that a business that sells personal data not sell the personal data. NeuroSched does not sell consumer personal data.
              </li>
              <li>
                <strong className="text-[#1d1d1f]">Right to Non Discrimination:</strong> Equal service and pricing regardless of exercising privacy entitlements.
              </li>
            </ul>
          </div>

          {/* Children Information */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-4">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#eab308]" />
              <span>Children Privacy Protection (COPPA)</span>
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              Protecting youth while using the internet is an essential priority. We encourage parents and legal guardians to observe, participate in, and monitor their children online activity. NeuroSched does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided this kind of information on our website, please notify us immediately and we will promptly remove such records.
            </p>
          </div>

          {/* User Consent */}
          <div className="appleCardLight p-8 bg-white border border-[#e0e0e0] space-y-3">
            <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">
              Consent
            </h2>
            <p className="text-[15px] text-[#52525b] leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its terms and conditions.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
