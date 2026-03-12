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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/52 mb-2">Browse by topic</p>
            <h2 id="categories-heading" className="text-3xl md:text-4xl font-black -rotate-1">
              Pattern Categories
            </h2>
          </div>
          <MagnetButton
            href="/categories"
            aria-label="View all 12 antipattern categories"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black text-[#1C1917] border-2 border-[#1C1917]/25 shadow-[3px_3px_0_rgba(28,25,23,0.10)] hover:border-[#E9A319] hover:shadow-[3px_3px_0_rgba(233,163,25,0.22)] hover:bg-[#E9A319]/8 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-colors sketchy-border shrink-0"
          >
            View all
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
          </MagnetButton>
        </div>

        {/* 3-col on desktop — bigger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1917]/10" role="list">
          {CATEGORIES.map((cat, i) => (
            <article key={cat.slug} role="listitem">
              <Link
                href={`/category/${cat.slug}`}
                aria-label={`${cat.title}: ${cat.description}`}
                className="group flex items-start gap-5 bg-[#FAFAF7] p-7 hover:bg-[#F0EFE9] focus-visible:bg-[#F0EFE9] focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-[#E9A319] transition-colors outline-none"
              >
                {/* Count + icon */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs font-black text-[#1C1917]/25 tabular-nums w-6 text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-10 h-10 flex items-center justify-center border-2 border-[#1C1917]/12 bg-[#F0EFE9] group-hover:border-[#E9A319] group-hover:bg-[#E9A319]/10 group-hover:rotate-12 transition-all duration-300 sketchy-border-2"
                    aria-hidden
                  >
                    <cat.icon className="size-5 text-[#1C1917]/60 group-hover:text-[#1C1917] transition-colors" strokeWidth={2} />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-grow min-w-0 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-black leading-tight mb-1.5">{cat.title}</h3>
                    <ArrowRight
                      className="size-4 shrink-0 text-[#1C1917]/20 group-hover:text-[#E9A319] group-hover:translate-x-0.5 transition-all mt-0.5"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="text-sm text-[#1C1917]/72 font-medium leading-relaxed">{cat.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
