"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import type { DbAntipattern } from "./data";

import { MagnetButton } from "@/components/ui/MagnetButton";

/* ─── Types ────────────────────────────────────────────────── */
interface FilteredPatternsClientProps {
  patterns: DbAntipattern[];
  variant?: "home" | "full";
}

/* ─── Constants (Outside for hydration stability) ─────────── */
const IMPACT_COLOR: Record<string, string> = {
  Critical: "bg-[#E9A319] text-[#1C1917] border-[#1C1917] shadow-[2px_2px_0_#1C1917]",
  High: "bg-[#1C1917] text-[#FAFAF7] border-[#1C1917] shadow-[2px_2px_0_#E9A319]",
  Medium: "bg-[#F0EFE9] text-[#1C1917] border-[#1C1917]/20",
  Low: "bg-white text-[#1C1917]/50 border-[#1C1917]/10",
};

const TILTS = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "", "-rotate-1", "rotate-1"];

/* ─── Impact badge ─────────────────────────────────────────── */
function ImpactBadge({ impact }: { impact: string }) {
  const colorPart = IMPACT_COLOR[impact] || IMPACT_COLOR.Medium;
  const dotColor = impact === "Critical" || impact === "High" ? "bg-[#1C1917]" : "bg-[#1C1917]/30";

  return (
    <span
      aria-label={`Impact: ${impact}`}
      className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 border sketchy-border ${colorPart}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden />
      {impact}
    </span>
  );
}

/* ─── Artistic Highlights ("Resaltes") ─────────────────────── */
function SketchyHighlight() {
  return (
    <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#E9A319] pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
      <path d="M2 8 C 20 4, 50 10, 98 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-draw" />
    </svg>
  );
}

/* ─── Cover image placeholder ──────────────────────────────── */
function CoverPlaceholder({ category }: { category: string }) {
  const initial = category[0]?.toUpperCase() ?? "?";
  return (
    <div className="w-full h-full bg-[#F0EFE9] flex flex-col items-center justify-center gap-2 border-b border-[#1C1917]/8">
      <span className="text-4xl font-black text-[#1C1917]/10 select-none">{initial}</span>
      <span className="text-[9px] font-black uppercase tracking-widest text-[#1C1917]/20">{category}</span>
    </div>
  );
}

/* ─── Main client component ────────────────────────────────── */
export function FilteredPatternsClient({ patterns, variant = "home" }: FilteredPatternsClientProps) {
  const IMPACT_LEVELS = ["All", "Critical", "High", "Medium", "Low"] as const;
  const allCategories = useMemo(() => ["All", ...Array.from(new Set(patterns.map((p) => p.category)))], [patterns]);

  const [impact, setImpact] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = patterns.filter((p) => {
      const matchImpact = impact === "All" || p.impact === impact;
      const matchCategory = category === "All" || p.category === category;
      const matchSearch = !search || 
        p.title.toLowerCase().includes(search.toLowerCase()) || 
        p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchImpact && matchCategory && matchSearch;
    });

    if (variant === "home") {
      return result.slice(0, 3);
    }
    return result;
  }, [patterns, impact, category, search, variant]);

  return (
    <section 
      aria-labelledby="library-heading" 
      className={`px-6 z-10 ${variant === "home" ? "py-20 bg-[#F0EFE9]" : "py-16 bg-[#FAFAF7]"}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header - Home Variant */}
        {variant === "home" && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E9A319] mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#E9A319]" />
                Catalogue
              </p>
              <h2 id="library-heading" className="text-4xl md:text-5xl font-black text-[#1C1917] tracking-tight mb-6">
                Antipattern Library
              </h2>
              <p className="text-lg text-[#1C1917]/60 font-medium leading-relaxed">
                Discover the most common UI pitfalls through our curated collection of problematic patterns and their professional fixes.
              </p>
            </div>
            
            <MagnetButton 
              href="/library" 
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1C1917] text-[#FAFAF7] font-black uppercase tracking-widest text-xs sketchy-border-2 transition-opacity hover:opacity-90"
            >
              Explore Full Archive
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </MagnetButton>
          </div>
        )}

        {/* Search & Header - Full Variant */}
        {variant === "full" && (
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
              <div className="relative">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E9A319] mb-6">Full Interactive Archive</p>
                <h1 className="flex flex-col text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tighter leading-[0.85] text-[#1C1917] select-none">
                  <span>Library</span>
                  <span className="italic font-serif font-medium text-[#1C1917]/90 -mt-[0.1em] pl-4">Archive.</span>
                </h1>
                <p className="mt-8 text-xl text-[#1C1917]/50 font-semibold max-w-md leading-relaxed">
                  Browse our complete database of interactive antipatterns.
                </p>
              </div>
              
              <div className="relative w-full md:w-[500px] group self-end">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none z-20">
                  <Search className="size-5 text-[#1C1917]/40 group-focus-within:text-[#E9A319] transition-colors" strokeWidth={3} />
                </div>
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, category, or impact..."
                  className="w-full pl-14 pr-12 py-5 bg-white border-2 border-[#1C1917] focus:border-[#E9A319] outline-none font-bold text-base shadow-[4px_4px_0_#1C1917] focus:shadow-[6px_6px_0_#E9A319] focus:-translate-x-0.5 focus:-translate-y-0.5 transition-all sketchy-border-2 relative z-10"
                />
                {search && (
                  <button 
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-[#1C1917]/5 rounded-xl transition-colors z-20"
                    title="Clear search"
                  >
                    <X className="size-5 text-[#1C1917]/40" />
                  </button>
                )}
              </div>
            </div>

            {/* Audit Desk Filter Panel */}
            <div className="flex flex-col gap-10 p-10 bg-[#FAFAF7] border-2 border-[#1C1917] shadow-[12px_12px_0_rgba(28,25,23,0.05)] sketchy-border-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9A319]/5 blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 text-[#1C1917]">
                <div className="p-2 bg-[#E9A319] border border-[#1C1917] rotate-2 shadow-[2px_2px_0_#1C1917]">
                  <SlidersHorizontal className="size-4 text-[#1C1917]" strokeWidth={3} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Refine Collection Parameters</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Impact Level */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-[#1C1917]/30 uppercase tracking-[0.25em]">Impact Severity</span>
                    <div className="flex-grow h-px bg-[#1C1917]/5" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {IMPACT_LEVELS.map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setImpact(lvl)}
                        className={`group relative h-10 px-6 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                          impact === lvl 
                            ? "bg-[#1C1917] text-[#FAFAF7] border-[#1C1917] shadow-[3px_3px_0_#E9A319]" 
                            : "bg-white text-[#1C1917]/40 border-[#1C1917]/10 hover:border-[#1C1917]/40 hover:text-[#1C1917]"
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-[#1C1917]/30 uppercase tracking-[0.25em]">Focus Area</span>
                    <div className="flex-grow h-px bg-[#1C1917]/5" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`group relative h-10 px-5 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                          category === cat 
                            ? "bg-[#1C1917] text-[#FAFAF7] border-[#1C1917] shadow-[3px_3px_0_#E9A319]" 
                            : "bg-white text-[#1C1917]/40 border-[#1C1917]/10 hover:border-[#1C1917]/40 hover:text-[#1C1917]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Result Stats */}
            <div className="mt-10 flex items-center justify-between border-b-2 border-dashed border-[#1C1917]/5 pb-6">
              <div className="flex items-center gap-4">
                <p className="text-xs font-bold text-[#1C1917]/40">
                  Showing <span className="text-[#1C1917]">{filtered.length}</span> patterns
                </p>
                {(impact !== "All" || category !== "All" || search) && (
                  <button 
                    onClick={() => { setImpact("All"); setCategory("All"); setSearch(""); }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#1C1917]/5 text-[9px] font-black text-[#1C1917] uppercase tracking-widest rounded-full hover:bg-[#1C1917]/10 transition-colors"
                  >
                    <X className="size-3" />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="py-32 text-center bg-[#F0EFE9]/30 border-2 border-dashed border-[#1C1917]/5 rounded-[40px] sketchy-border">
            <div className="size-20 bg-[#F0EFE9] border-2 border-[#1C1917]/5 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Search className="size-10 text-[#1C1917]/10" />
            </div>
            <p className="text-3xl font-black text-[#1C1917] mb-3">Zero matches, captain.</p>
            <p className="text-sm text-[#1C1917]/30 font-medium max-w-sm mx-auto">Try broadening your search or choosing a different category to explore more bad designs.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" role="list">
            {filtered.map((item, i) => (
              <article key={item.id} role="listitem" className="h-full">
                <Link
                  href={`/antipatterns/${item.slug}`}
                  className="group block outline-none h-full"
                >
                  <div className={`h-full flex flex-col bg-[#FAFAF7] border-2 border-[#1C1917] shadow-[8px_8px_0_rgba(28,25,23,0.06)] group-hover:shadow-[12px_12px_0_rgba(233,163,25,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden sketchy-border-3 ${TILTS[i % TILTS.length]}`}>
                    
                    <div className="relative w-full h-56 shrink-0 overflow-hidden bg-[#F0EFE9] border-b-2 border-[#1C1917]/5">
                      {item.cover_url ? (
                        <Image
                          src={item.cover_url}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <CoverPlaceholder category={item.category} />
                      )}
                      <div className="absolute top-5 left-5">
                        <ImpactBadge impact={item.impact} />
                      </div>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E9A319]">
                          {item.category}
                        </span>
                        <div className="h-px flex-grow mx-4 bg-[#1C1917]/5" />
                      </div>
                      
                      <h3 className="text-2xl font-black leading-[1.1] text-[#1C1917] mb-4 tracking-tighter">
                        {item.title}
                      </h3>
                      
                      <p className="text-[15px] text-[#1C1917]/65 font-semibold leading-[1.5] line-clamp-3 mb-8">
                        {item.excerpt}
                      </p>

                      <div className="mt-auto pt-6 border-t border-dashed border-[#1C1917]/10 flex items-center justify-between">
                        <span className="text-[10px] font-black text-[#1C1917]/40 group-hover:text-[#1C1917] transition-all uppercase tracking-[0.25em]">
                          Full Audit Report
                        </span>
                        <ArrowRight className="size-4 text-[#1C1917]/40 group-hover:text-[#1C1917] group-hover:translate-x-1 transition-all" strokeWidth={3} />
                      </div>
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
