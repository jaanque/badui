"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { RECENT_ANTIPATTERNS, HALL_OF_SHAME, type AntipatternItem } from "./data";

/* ─── Merge + deduplicate for a richer list ─── */
const ALL_PATTERNS: AntipatternItem[] = [
  ...HALL_OF_SHAME.map((i) => ({
    title:    i.title,
    category: i.label,
    impact:   "Critical" as const,
    excerpt:  i.excerpt,
    slug:     i.slug,
    tilt:     i.tilt,
  })),
  ...RECENT_ANTIPATTERNS,
];

const IMPACT_LEVELS = ["All", "Critical", "High", "Medium", "Low"] as const;
const CATEGORIES    = ["All", ...Array.from(new Set(ALL_PATTERNS.map((p) => p.category)))] as const;

type ImpactFilter = typeof IMPACT_LEVELS[number];
type CatFilter    = typeof CATEGORIES[number];

function ImpactDot({ impact }: { impact: string }) {
  const isUrgent = impact === "Critical" || impact === "High";
  return (
    <span
      aria-label={`Impact: ${impact}`}
      className={`inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest px-2 py-0.5 border border-[#1C1917]/12 ${
        isUrgent ? "bg-[#E9A319] text-[#1C1917]" : "bg-transparent text-[#1C1917]/48"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isUrgent ? "bg-[#1C1917]" : "bg-[#1C1917]/30"}`} aria-hidden />
      {impact}
    </span>
  );
}

/**
 * Filterable antipattern list — by impact level and by category.
 * Client-only; uses no external state management.
 */
export function FilteredPatterns() {
  const [impact,   setImpact]   = useState<ImpactFilter>("All");
  const [category, setCategory] = useState<CatFilter>("All");

  const filtered = ALL_PATTERNS.filter((p) => {
    const matchImpact   = impact   === "All" || p.impact   === impact;
    const matchCategory = category === "All" || p.category === category;
    return matchImpact && matchCategory;
  });

  return (
    <section aria-labelledby="library-heading" className="px-6 py-24 z-10 bg-[#F0EFE9]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 mb-2">Browse the library</p>
          <h2 id="library-heading" className="text-3xl md:text-4xl font-black rotate-1 inline-block">
            Antipattern Library
          </h2>
          <p className="mt-3 text-base text-[#1C1917]/72 font-medium">
            Filter by impact level or topic to find what you need.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filter antipatterns">

          {/* Impact filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 self-center mr-1">Impact:</span>
            {IMPACT_LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setImpact(lvl)}
                aria-pressed={impact === lvl}
                className={`h-8 px-3 text-xs font-black uppercase tracking-widest border-2 transition-all sketchy-border focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-1 ${
                  impact === lvl
                    ? "bg-[#1C1917] text-[#FAFAF7] border-[#1C1917]"
                    : "bg-transparent text-[#1C1917]/70 border-[#1C1917]/25 hover:border-[#1C1917]/60 hover:text-[#1C1917]"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px bg-[#1C1917]/12 mx-1 hidden sm:block" aria-hidden />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 self-center mr-1">Topic:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`h-8 px-3 text-xs font-black uppercase tracking-widest border-2 transition-all sketchy-border-2 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-1 ${
                  category === cat
                    ? "bg-[#1C1917] text-[#FAFAF7] border-[#1C1917]"
                    : "bg-transparent text-[#1C1917]/55 border-[#1C1917]/20 hover:border-[#1C1917]/50 hover:text-[#1C1917]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-xs font-bold text-[#1C1917]/58 mb-6" aria-live="polite" aria-atomic>
          {filtered.length} pattern{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Pattern list */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center border-2 border-dashed border-[#1C1917]/15">
            <p className="text-2xl font-black mb-2">No patterns match these filters.</p>
            <p className="text-sm text-[#1C1917]/45 font-medium">Try removing a filter or selecting "All".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {filtered.map((item) => (
              <article key={item.slug} role="listitem" aria-label={`${item.title}, ${item.impact} impact`} className="h-full">
                <Link
                  href={`/antipatterns/${item.slug}`}
                  aria-label={`Read analysis: ${item.title} — ${item.impact} impact`}
                  className="group card-lift block outline-none h-full"
                >
                  <div className={`h-full flex flex-col bg-[#FAFAF7] border-2 border-[#1C1917]/10 shadow-[2px_2px_0_rgba(28,25,23,0.07)] group-hover:border-[#E9A319] group-hover:shadow-[4px_4px_0_rgba(233,163,25,0.16)] group-focus-visible:ring-4 group-focus-visible:ring-[#E9A319] sketchy-border transition-all ${item.tilt}`}>
                    <div className="p-5 flex-grow">
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-[#F0EFE9] border border-[#1C1917]/15 px-2 py-0.5 text-[#1C1917]/72">
                          {item.category}
                        </span>
                        <ImpactDot impact={item.impact} />
                      </div>
                      <h3 className="text-sm font-black leading-snug mb-2 group-hover:underline group-hover:decoration-wavy group-hover:decoration-[#E9A319] group-hover:underline-offset-3 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#1C1917]/72 font-medium leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    <div className="px-5 pb-4 pt-3 mt-auto border-t border-dashed border-[#1C1917]/8">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#1C1917]/35 group-hover:text-[#1C1917] transition-colors uppercase tracking-widest">
                        Read analysis <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
