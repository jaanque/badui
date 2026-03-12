/**
 * ImpactStats — research-backed UX statistics in large editorial type.
 * Each stat is quotable and links out to its source.
 * This section establishes the site's authority immediately after the ticker.
 */

const STATS = [
  {
    figure: "79%",
    claim: "of dissatisfied users never return to a site after a bad experience.",
    source: "Sweor, 2023",
    href: "https://www.sweor.com/firstimpressions",
  },
  {
    figure: "88%",
    claim: "of online consumers are less likely to return after a poor UX.",
    source: "Econsultancy",
    href: "https://econsultancy.com",
  },
  {
    figure: "70%",
    claim: "of e-commerce shopping carts are abandoned — mostly due to UX friction.",
    source: "Baymard Institute, 2024",
    href: "https://baymard.com/lists/cart-abandonment-rate",
  },
  {
    figure: "$100B",
    claim: "estimated annual revenue lost globally to avoidable UX errors.",
    source: "Forrester Research",
    href: "https://www.forrester.com",
  },
];

export function ImpactStats() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="px-6 py-20 z-10 bg-[#1C1917] text-[#FAFAF7]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/55 mb-3">Why this matters</p>
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-black text-[#FAFAF7] -rotate-1">
            Bad UI costs more than you think.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#FAFAF7]/8">
          {STATS.map((s, i) => (
            <div key={i} className="bg-[#1C1917] p-8 md:p-10 group">
              {/* Figure */}
              <p className="text-[clamp(3.5rem,8vw,6rem)] font-black tracking-tighter leading-none text-[#E9A319] mb-4 -rotate-1 tabular-nums">
                {s.figure}
              </p>
              {/* Claim */}
              <p className="text-base md:text-lg font-semibold text-[#FAFAF7]/88 leading-relaxed mb-4 max-w-sm">
                {s.claim}
              </p>
              {/* Source */}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source: ${s.source} (opens in new tab)`}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#FAFAF7]/55 hover:text-[#E9A319] transition-colors nav-link"
              >
                {s.source}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
