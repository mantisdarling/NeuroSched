import React from 'react';
import { Github, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const go = (view, e) => {
    if (e) e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  const cols = [
    {
      heading: 'Kernel',
      links: [
        { label: 'Architecture',    view: 'architecture' },
        { label: 'Hardware Simulator', view: 'simulator' },
        { label: 'QEMU Benchmarks', view: 'benchmarks' },
        { label: 'Technical Docs',  view: 'docs' },
      ],
    },
    {
      heading: 'Learn',
      links: [
        { label: 'Operating System FAQ', view: 'faq' },
        { label: 'What is an OS',        view: 'faq' },
        { label: 'Linux vs NeuroSched',  view: 'faq' },
        { label: 'OS in BIOS',           view: 'faq' },
      ],
    },
    {
      heading: 'Project',
      links: [
        { label: 'About NeuroSched',   view: 'about' },
        { label: 'Contact',            view: 'contact' },
        { label: 'Privacy Policy',     view: 'privacy' },
        { label: 'Terms of Service',   view: 'terms' },
      ],
    },
    {
      heading: 'Open Source',
      external: [
        { label: 'GitHub Repository',    href: 'https://github.com/mantisdarling/NeuroSched' },
        { label: 'MIT License',          href: 'https://github.com/mantisdarling/NeuroSched/blob/main/LICENSE' },
        { label: 'Contributing Guide',   href: 'https://github.com/mantisdarling/NeuroSched/blob/main/CONTRIBUTING.md' },
        { label: 'Security Policy',      href: 'https://github.com/mantisdarling/NeuroSched/blob/main/SECURITY.md' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="max-w-[980px] mx-auto">

        {/* Fine-print footnotes */}
        <div
          className="border-b border-[#e0e0e0] pb-6 mb-10 space-y-1.5"
          style={{ fontSize: 12, lineHeight: 1.5, color: '#7a7a7a' }}
        >
          <p>
            1. The 16.8% average process wait-time reduction was measured under
            headless QEMU i386 emulation comparing the embedded 5–8–1 MLP neural
            inference engine against circular Round Robin across 64 CPU timer ticks.
          </p>
          <p>
            2. Zero dynamic heap allocation means freestanding C execution without{' '}
            <code className="mono" style={{ fontSize: 11, color: '#1d1d1f' }}>malloc()</code>.
            All 57 model weights (228 bytes) reside in{' '}
            <code className="mono" style={{ fontSize: 11, color: '#1d1d1f' }}>.rodata</code>;
            activations live on the kernel execution stack.
          </p>
        </div>

        {/* Directory grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {cols.map((col) => (
            <div key={col.heading}>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 1.29,
                  letterSpacing: '-0.224px',
                  color: '#1d1d1f',
                  marginBottom: 12,
                }}
              >
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links?.map((l) => (
                  <li key={l.label}>
                    <a
                      href={`/${l.view === 'home' ? '' : l.view}`}
                      onClick={(e) => go(l.view, e)}
                      className="link"
                      style={{ fontSize: 12, lineHeight: 2.41 }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {col.external?.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      style={{ fontSize: 12, lineHeight: 2.41 }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Attribution row */}
        <div
          className="border-t border-[#e0e0e0] pt-6 flex flex-col sm:flex-row
                     items-start sm:items-center justify-between gap-3"
          style={{ fontSize: 12, color: '#7a7a7a' }}
        >
          <div>
            Copyright &copy; 2026{' '}
            <strong style={{ color: '#1d1d1f', fontWeight: 600 }}>MANTIS</strong>{' '}
            (
            <a
              href="https://github.com/mantisdarling"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              @mantisdarling
            </a>
            ). Open source under the MIT License.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mantisdarling/NeuroSched"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#1d1d1f] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>mantisdarling/NeuroSched</span>
            </a>
            <span className="text-[#e0e0e0]">|</span>
            <a
              href="https://github.com/mantisdarling/NeuroSched/blob/main/CERTIFICATE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#1d1d1f] transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0066cc]" />
              <span>Certified</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
