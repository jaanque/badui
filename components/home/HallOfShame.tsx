import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HALL_OF_SHAME } from "./data";

export function HallOfShame() {
  return (
    <section aria-labelledby="hall-of-shame-heading" className="px-6 py-20 z-10 bg-[#F0EFE9]">
      <div className="max-w-7xl mx-auto">
        <div className="border-[3px] border-[#1C1917]/45 p-8 md:p-12 bg-[#FAFAF7] shadow-[7px_7px_0_rgba(28,25,23,0.10)] rotate-[0.25deg] sketchy-border-3">

          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-10">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center border-2 border-[#1C1917]/22 bg-[#F0EFE9] sketchy-border-2" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 opacity-55" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6m-6 4h6M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2M9 4a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/38 mb-1">Catalog entries</p>
              <h2 id="hall-of-shame-heading" className="text-3xl md:text-4xl font-black leading-tight">Documented Patterns</h2>
              <p className="mt-2 text-base text-[#1C1917]/75 font-medium">
                Three antipatterns with measured real-world impact — and how to fix them.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {HALL_OF_SHAME.map((item) => (
              <article key={item.slug} role="listitem" aria-label={`${item.title} — ${item.stat}`} className="h-full">
                <Link
                  href={`/antipatterns/${item.slug}`}
                  aria-label={`Read full analysis: ${item.title} (${item.stat})`}
                  className="group card-lift block outline-none h-full"
                >
                  <div className={`h-full bg-[#F0EFE9] border-2 border-[#1C1917]/15 p-6 shadow-[3px_3px_0_rgba(28,25,23,0.09)] group-hover:border-[#E9A319] group-hover:shadow-[6px_6px_0_rgba(233,163,25,0.20)] group-focus-visible:ring-4 group-focus-visible:ring-[#E9A319] sketchy-border transition-all ${item.tilt}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/40">{item.label}</span>
                      <span className="text-xs font-black bg-[#E9A319] px-2 py-0.5 sketchy-border border border-[#1C1917]/20">{item.stat}</span>
                    </div>
                    <h3 className="text-lg font-black leading-snug mb-3 group-hover:underline group-hover:decoration-wavy group-hover:decoration-[#E9A319] group-hover:underline-offset-3 transition-all">{item.title}</h3>
                    <p className="text-sm text-[#1C1917]/72 font-medium leading-relaxed">{item.excerpt}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-black text-[#1C1917]/38 group-hover:text-[#1C1917] transition-colors">
                      Read full analysis <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
