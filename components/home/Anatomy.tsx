import Link from "next/link";

/**
 * Anatomy of Bad UI — an annotated SVG diagram of a fictional website
 * showing 6 common antipatterns with numbered callouts.
 *
 * This makes abstract antipatterns tangible at a glance.
 */

const CALLOUTS = [
  { n: 1, title: "Invisible close button",  href: "/antipatterns/invisible-close",   desc: "White × on white. Contrast ratio: 1.3:1. WCAG fail." },
  { n: 2, title: "Cookie banner takeover",  href: "/antipatterns/cookie-banner",     desc: "Blocks 70% of viewport without a clear dismiss path." },
  { n: 3, title: "Autoplay video + audio",  href: "/antipatterns/autoplay-video",    desc: "Triggers panic. Users close the tab within 3 s." },
  { n: 4, title: "Dark pattern CTA",        href: "/antipatterns/dark-pattern-cta",  desc: '"Accept all" large amber. "Reject" tiny grey link.' },
  { n: 5, title: "Low contrast body text",  href: "/antipatterns/low-contrast-text", desc: "#9CA3AF on #F3F4F6. Ratio 1.9:1. Fails WCAG 1.4.3." },
  { n: 6, title: "Scroll-hijack hero",      href: "/antipatterns/scroll-hijack",     desc: "Mousewheel moves lateral carousel, not the page." },
];

export function Anatomy() {
  return (
    <section
      aria-labelledby="anatomy-heading"
      className="px-6 py-24 z-10 bg-[#1C1917] text-[#FAFAF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/55 mb-3">Visual reference</p>
          <h2 id="anatomy-heading" className="text-3xl md:text-4xl font-black -rotate-1 mb-4">
            Anatomy of a Bad UI
          </h2>
          <p className="text-base text-[#FAFAF7]/72 font-medium leading-relaxed">
            A single page can commit six different antipatterns simultaneously.
            Here they all are, in their natural habitat.
          </p>
        </div>

        {/* Grid: SVG left, callout list right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

          {/* Browser mockup SVG */}
          <div className="border-2 border-[#FAFAF7]/12 bg-[#FAFAF7]/4 overflow-hidden" style={{ borderRadius: "4px 4px 0 0" }}>

            {/* Browser chrome */}
            <div className="bg-[#2D2A28] border-b border-[#FAFAF7]/10 px-4 py-2.5 flex items-center gap-2.5" aria-hidden>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FAFAF7]/20" />
                <div className="w-3 h-3 rounded-full bg-[#FAFAF7]/20" />
                <div className="w-3 h-3 rounded-full bg-[#FAFAF7]/20" />
              </div>
              <div className="flex-grow mx-4 bg-[#1C1917] rounded h-5 px-3 flex items-center">
                <span className="text-[10px] text-[#FAFAF7]/35 font-mono">badstore.example.com</span>
              </div>
            </div>

            {/* Page content (SVG) */}
            <svg
              role="img"
              aria-label="Annotated diagram of a fictional website with 6 labeled antipatterns"
              viewBox="0 0 800 520"
              className="w-full block bg-[#F3F4F6]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Page background */}
              <rect width="800" height="520" fill="#F3F4F6" />

              {/* Nav bar */}
              <rect width="800" height="48" fill="#1C1917" />
              <rect x="16" y="14" width="60" height="20" rx="2" fill="#E9A319" />
              <rect x="96" y="18" width="40" height="12" rx="2" fill="#FAFAF7" opacity="0.4" />
              <rect x="148" y="18" width="40" height="12" rx="2" fill="#FAFAF7" opacity="0.4" />
              <rect x="200" y="18" width="40" height="12" rx="2" fill="#FAFAF7" opacity="0.4" />

              {/* Hero area with low contrast text (callout 5) */}
              <rect x="0" y="48" width="800" height="180" fill="#F3F4F6" />
              {/* Low contrast text block */}
              <rect x="40" y="70" width="280" height="22" rx="2" fill="#9CA3AF" />
              <rect x="40" y="100" width="220" height="14" rx="2" fill="#9CA3AF" opacity="0.7" />
              <rect x="40" y="120" width="200" height="14" rx="2" fill="#9CA3AF" opacity="0.7" />
              <rect x="40" y="140" width="200" height="14" rx="2" fill="#9CA3AF" opacity="0.6" />
              <rect x="40" y="160" width="100" height="34" rx="2" fill="#9CA3AF" opacity="0.5" />
              {/* Callout 5 dot */}
              <circle cx="40" cy="80" r="10" fill="#E9A319" />
              <text x="40" y="84" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">5</text>

              {/* Scroll-hijack carousel arrows (callout 6) */}
              <rect x="420" y="48" width="360" height="180" fill="#E5E7EB" />
              <rect x="420" y="48" width="360" height="180" fill="url(#stripe)" opacity="0.3" />
              <text x="600" y="135" textAnchor="middle" fill="#9CA3AF" fontSize="13" fontWeight="700">← CAROUSEL (scroll to move) →</text>
              <circle cx="430" cy="58" r="10" fill="#E9A319" />
              <text x="430" y="62" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">6</text>

              {/* Autoplay video strip (callout 3) */}
              <rect x="0" y="228" width="800" height="90" fill="#1C1917" />
              <rect x="320" y="238" width="160" height="70" rx="2" fill="#2D2A28" />
              <polygon points="380,250 420,273 380,296" fill="#E9A319" />
              {/* Sound wave lines */}
              <line x1="498" y1="258" x2="498" y2="308" stroke="#E9A319" strokeWidth="2" opacity="0.7" />
              <line x1="506" y1="263" x2="506" y2="303" stroke="#E9A319" strokeWidth="2" opacity="0.5" />
              <line x1="514" y1="268" x2="514" y2="298" stroke="#E9A319" strokeWidth="2" opacity="0.3" />
              <text x="600" y="278" textAnchor="middle" fill="#FAFAF7" fontSize="11" fontWeight="700" opacity="0.5">♫ AUTOPLAY ON</text>
              <circle cx="328" cy="236" r="10" fill="#E9A319" />
              <text x="328" y="240" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">3</text>

              {/* Product grid area */}
              <rect x="0" y="318" width="800" height="202" fill="#F9FAFB" />
              <rect x="20" y="334" width="180" height="160" rx="2" fill="#E5E7EB" />
              <rect x="214" y="334" width="180" height="160" rx="2" fill="#E5E7EB" />
              <rect x="408" y="334" width="180" height="160" rx="2" fill="#E5E7EB" />
              <rect x="602" y="334" width="180" height="160" rx="2" fill="#E5E7EB" />

              {/* Cookie banner (callout 2) — overlapping bottom */}
              <rect x="0" y="416" width="800" height="104" fill="white" />
              <rect x="0" y="416" width="800" height="2" fill="#D1D5DB" />
              <rect x="20" y="430" width="480" height="12" rx="2" fill="#9CA3AF" opacity="0.6" />
              <rect x="20" y="450" width="420" height="10" rx="2" fill="#9CA3AF" opacity="0.4" />
              <rect x="20" y="468" width="360" height="10" rx="2" fill="#9CA3AF" opacity="0.4" />
              {/* Accept all — large */}
              <rect x="560" y="432" width="120" height="36" rx="2" fill="#E9A319" />
              <text x="620" y="455" textAnchor="middle" fill="#1C1917" fontSize="11" fontWeight="800">ACCEPT ALL</text>
              {/* Reject link — tiny */}
              <text x="696" y="460" textAnchor="middle" fill="#9CA3AF" fontSize="9">reject</text>
              <circle cx="8" cy="424" r="10" fill="#E9A319" />
              <text x="8" y="428" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">2</text>

              {/* Dark pattern callout 4 on cookie banner */}
              <circle cx="560" cy="432" r="10" fill="#E9A319" />
              <text x="560" y="436" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">4</text>

              {/* Overlay modal (callout 1) — invisible close button */}
              <rect x="200" y="100" width="400" height="300" rx="2" fill="white" />
              <rect x="200" y="100" width="400" height="300" rx="2" stroke="#D1D5DB" strokeWidth="1" fill="none" />
              {/* Modal content */}
              <rect x="220" y="140" width="360" height="16" rx="2" fill="#1C1917" opacity="0.8" />
              <rect x="220" y="164" width="320" height="10" rx="2" fill="#9CA3AF" opacity="0.5" />
              <rect x="220" y="180" width="300" height="10" rx="2" fill="#9CA3AF" opacity="0.4" />
              <rect x="220" y="220" width="360" height="100" rx="2" fill="#F3F4F6" />
              <rect x="280" y="340" width="240" height="36" rx="2" fill="#E9A319" />
              <text x="400" y="363" textAnchor="middle" fill="#1C1917" fontSize="12" fontWeight="800">SUBSCRIBE NOW</text>
              {/* × button — invisible (white on white) */}
              <circle cx="592" cy="108" r="12" fill="white" stroke="#E5E7EB" strokeWidth="1" />
              <text x="592" y="112" textAnchor="middle" fill="#E5E7EB" fontSize="12">×</text>
              {/* Callout 1 */}
              <circle cx="604" cy="96" r="10" fill="#E9A319" />
              <text x="604" y="100" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">1</text>

              {/* Overlay scrim */}
              <rect x="0" y="48" width="800" height="520" fill="#1C1917" opacity="0.35" />
              {/* Re-draw modal on top */}
              <rect x="200" y="80" width="400" height="300" rx="2" fill="white" />
              <rect x="200" y="80" width="400" height="2" fill="#E9A319" />
              <rect x="220" y="100" width="280" height="16" rx="2" fill="#1C1917" opacity="0.75" />
              <rect x="220" y="124" width="320" height="10" rx="2" fill="#9CA3AF" opacity="0.5" />
              <rect x="220" y="140" width="300" height="10" rx="2" fill="#9CA3AF" opacity="0.4" />
              <rect x="220" y="160" width="360" height="80" rx="2" fill="#F3F4F6" />
              <rect x="270" y="260" width="260" height="36" rx="2" fill="#E9A319" />
              <text x="400" y="283" textAnchor="middle" fill="#1C1917" fontSize="12" fontWeight="800">SUBSCRIBE NOW</text>
              <circle cx="592" cy="88" r="12" fill="white" stroke="#E5E7EB" strokeWidth="1" />
              <text x="592" y="92" textAnchor="middle" fill="#E5E7EB" fontSize="13">×</text>
              {/* Callout 1 badge */}
              <circle cx="608" cy="74" r="11" fill="#E9A319" />
              <text x="608" y="78" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">1</text>
            </svg>
          </div>

          {/* Callout list */}
          <div className="flex flex-col gap-0 border-t-2 border-[#FAFAF7]/10" role="list" aria-label="Annotated antipatterns">
            {CALLOUTS.map((c) => (
              <Link
                key={c.n}
                href={c.href}
                aria-label={`Antipattern ${c.n}: ${c.title}`}
                className="group flex items-start gap-4 px-0 py-5 border-b-2 border-[#FAFAF7]/10 hover:pl-2 focus-visible:pl-2 focus-visible:outline-none transition-all"
              >
                {/* Number badge */}
                <span
                  aria-hidden
                  className="shrink-0 w-7 h-7 flex items-center justify-center text-xs font-black bg-[#E9A319] text-[#1C1917] mt-0.5"
                >
                  {c.n}
                </span>
                <div>
                  <p className="text-sm font-black text-[#FAFAF7] mb-0.5 group-hover:text-[#E9A319] transition-colors">
                    {c.title}
                  </p>
                  <p className="text-xs text-[#FAFAF7]/60 font-medium leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
