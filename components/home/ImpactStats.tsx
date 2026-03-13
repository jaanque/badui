import { ArrowRight } from "lucide-react";

/**
 * ImpactStats — research-backed UX statistics in large editorial type.
 * Each stat is quotable and links out to its source.
 */

const STATS = [
  {
    figure: "88%",
    claim: "of users won't return after a single bad interface experience.",
    source: "Econsultancy",
    href: "https://econsultancy.com",
  },
  {
    figure: "70%",
    claim: "of cart abandonment is directly attributed to poor UX — not price.",
    source: "Baymard Institute, 2024",
    href: "https://baymard.com/lists/cart-abandonment-rate",
  },
  {
    figure: "$1.4B",
    claim: "saved by Amazon after fixing a single confusing checkout field.",
    source: "UX Collective",
    href: "https://uxdesign.cc",
  },
  {
    figure: "100×",
    claim: "cheaper to fix a usability issue before launch than after.",
    source: "Nielsen Norman Group",
    href: "https://www.nngroup.com",
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
        <div className="mb-16 text-center md:text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FAFAF7]/40 mb-4 px-1">Evidence based</p>
          <h2 id="stats-heading" className="text-4xl md:text-6xl font-black text-[#FAFAF7] leading-[1.2] max-w-2xl">
            Every bad pattern has a <span className="text-[#E9A319]">measurable</span> cost.
          </h2>
          <div className="w-24 h-1.5 bg-[#E9A319] mt-8 hidden md:block sketchy-border" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="relative bg-[#FAFAF7]/[0.02] border border-[#FAFAF7]/10 p-10 group transition-all hover:bg-[#FAFAF7]/[0.05] hover:-translate-y-1 sketchy-border">
              {/* Figure */}
              <div className="relative inline-block mb-10">
                <p className="relative z-10 text-[clamp(3rem,6vw,5rem)] font-black tracking-tighter leading-none text-[#E9A319] tabular-nums">
                  {s.figure}
                </p>
              </div>
              
              {/* Claim */}
              <p className="text-lg font-bold text-[#FAFAF7]/90 leading-snug mb-6">
                {s.claim}
              </p>
              
              {/* Source */}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#FAFAF7]/30 hover:text-[#E9A319] transition-colors"
              >
                {s.source}
                <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
