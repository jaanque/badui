import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "./data";
import { MagnetButton } from "@/components/ui/MagnetButton";

/**
 * Categories — the primary navigation.
 * Bigger cards with more visual presence.
 */

export function Categories() {
  return (
    <section aria-labelledby="categories-heading" className="px-6 py-24 z-10 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
          <div className="max-w-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E9A319] mb-4">Database</p>
            <h2 id="categories-heading" className="text-4xl md:text-6xl font-black text-[#1C1917] tracking-tight">
              Pattern Categories
            </h2>
            <div className="flex mt-4">
              <svg className="text-[#E9A319]/40 w-48 h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M2 5 L 98 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="animate-draw" />
              </svg>
            </div>
          </div>
          <MagnetButton
            href="/categories"
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-widest text-[#1C1917] border-2 border-[#1C1917] bg-white shadow-[6px_6px_0_rgba(28,25,23,0.1)] hover:shadow-none hover:translate-y-1 transition-all sketchy-border"
          >
            View Full Taxonomy
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </MagnetButton>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {CATEGORIES.map((cat, i) => (
            <article key={cat.slug} role="listitem" className="relative group">
              <Link
                href={`/category/${cat.slug}`}
                className="block h-full bg-[#FAFAF7] border-2 border-[#1C1917]/10 p-10 hover:border-[#1C1917] hover:bg-[#F0EFE9] hover:shadow-[8px_8px_0_rgba(233,163,25,0.1)] transition-all duration-300 sketchy-border-2 outline-none"
              >
                <div className="flex flex-col gap-8">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 flex items-center justify-center border-2 border-[#1C1917] bg-[#FAFAF7] group-hover:rotate-12 transition-transform duration-500 shadow-[4px_4px_0_rgba(28,25,23,0.1)] sketchy-border">
                      <cat.icon className="size-7 text-[#1C1917]" strokeWidth={2.5} />
                    </div>
                    <span className="text-xs font-black text-[#1C1917]/20 tabular-nums">0{i + 1}</span>
                  </div>

                  {/* Copy */}
                  <div>
                    <h3 className="text-xl font-black text-[#1C1917] mb-3 group-hover:text-[#E9A319] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#1C1917]/60 font-medium leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Bottom link */}
                  <div className="pt-4 border-t-2 border-dashed border-[#1C1917]/5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1C1917]/30 group-hover:text-[#1C1917] transition-all">
                    Explore collection
                    <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
