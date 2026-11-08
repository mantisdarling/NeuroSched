import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const baseHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('[ERROR] dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

const pages = [
  {
    slug: 'docs',
    title: 'Documentation - NeuroSched Kernel Architecture & Freestanding C Engine',
    description: 'Complete technical specifications for the NeuroSched 32-bit x86 kernel: Multiboot2 handshake, x87 FPU setup, 5-8-1 MLP forward pass, Taylor sigmoid math, and zero-malloc layout.',
    canonical: 'https://neurosched.vercel.app/docs'
  },
  {
    slug: 'architecture',
    title: 'Architecture - 32-Bit x86 Neural Engine & Kernel Design | NeuroSched',
    description: 'In-depth breakdown of the NeuroSched kernel architecture: 5-element PCB state vector, MLP layer topology, Taylor polynomial expansions, and zero dynamic heap design.',
    canonical: 'https://neurosched.vercel.app/architecture'
  },
  {
    slug: 'benchmarks',
    title: 'Verified Benchmarks - QEMU Empirical Performance | NeuroSched',
    description: 'Empirical performance benchmarks comparing NeuroSched against standard Round Robin across 64 ticks: 16.8% lower wait time, 14.2% faster turnaround, and 50 safe fallbacks.',
    canonical: 'https://neurosched.vercel.app/benchmarks'
  },
  {
    slug: 'simulator',
    title: 'Interactive Simulator & Hardware Shell | NeuroSched',
    description: 'Simulate the NeuroSched operating system kernel in your browser. Live 60 FPS neural canvas, adjustable confidence fallback threshold slider, and COM1 serial console replay.',
    canonical: 'https://neurosched.vercel.app/simulator'
  },
  {
    slug: 'faq',
    title: 'Operating System FAQ - What is an Operating System & Examples | NeuroSched',
    description: 'Comprehensive operating system FAQ: what is an operating system, what is an operating system example, What is OS type in BIOS, Linux operating system, Android operating system, and AI operating system architecture.',
    canonical: 'https://neurosched.vercel.app/faq'
  },
  {
    slug: 'about',
    title: 'About Us - NeuroSched AI Operating System Project',
    description: 'Learn about the mission, engineering philosophy, and architecture behind NeuroSched, the open-source 32-bit x86 AI operating system with deterministic neural scheduling.',
    canonical: 'https://neurosched.vercel.app/about'
  },
  {
    slug: 'contact',
    title: 'Contact Us - NeuroSched Engineering Team & Community',
    description: 'Get in touch with the NeuroSched operating system developers for collaborations, research inquiries, contributions, and security reports.',
    canonical: 'https://neurosched.vercel.app/contact'
  },
  {
    slug: 'privacy',
    title: 'Privacy Policy - NeuroSched Operating System',
    description: 'Privacy policy for NeuroSched website and interactive web simulator. Zero tracking, client-side only compute, and complete data privacy.',
    canonical: 'https://neurosched.vercel.app/privacy'
  },
  {
    slug: 'terms',
    title: 'Terms & Conditions - NeuroSched Operating System',
    description: 'Terms of service and MIT License terms for the NeuroSched x86 AI operating system kernel, simulator, and documentation.',
    canonical: 'https://neurosched.vercel.app/terms'
  },
  {
    slug: '404',
    title: '404 - Kernel Page Fault | NeuroSched Operating System',
    description: 'Page not found. The requested operating system memory address or kernel page could not be located in the address space.',
    canonical: 'https://neurosched.vercel.app/404'
  },
  {
    slug: '500',
    title: '500 - Kernel Panic | NeuroSched Operating System',
    description: 'Internal server error. A fatal kernel interrupt was encountered during processing.',
    canonical: 'https://neurosched.vercel.app/500'
  }
];

console.log('Generating static HTML pages for multipage SEO...');

pages.forEach((page) => {
  const pageDir = path.join(distDir, page.slug);
  fs.mkdirSync(pageDir, { recursive: true });

  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${page.canonical}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/i,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${page.canonical}" />`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/i,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/i,
    `<meta name="twitter:description" content="${page.description}" />`
  );

  // Ensure relative assets become absolute
  html = html.replace(/src="\.\/assets\//g, 'src="/assets/');
  html = html.replace(/href="\.\/assets\//g, 'href="/assets/');
  html = html.replace(/href="\.\/manifest\.json"/g, 'href="/manifest.json"');

  const outPath = path.join(pageDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`✓ Generated static page: /${page.slug} -> dist/${page.slug}/index.html`);

  // Also write dist/${page.slug}.html for static web hosts without trailingSlash
  const cleanHtmlPath = path.join(distDir, `${page.slug}.html`);
  fs.writeFileSync(cleanHtmlPath, html, 'utf8');
  console.log(`✓ Generated clean static page: dist/${page.slug}.html`);

  // Direct root fallback for 404.html and 500.html
  if (page.slug === '404' || page.slug === '500') {
    const rootOutPath = path.join(distDir, `${page.slug}.html`);
    fs.writeFileSync(rootOutPath, html, 'utf8');
    console.log(`✓ Generated root error handler: dist/${page.slug}.html`);
  }
});

console.log('All static multipage documents generated successfully.');
