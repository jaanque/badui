import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RECENT_ANTIPATTERNS } from "./data";

function ImpactBadge({ impact }: { impact: string }) {
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

export function RecentAntipatterns() {
  return (
    <section aria-labelledby="recent-heading" className="px-6 pt-20 pb-28 z-10 bg-[#F0EFE9]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 mb-2">Recently added</p>
            <h2 id="recent-heading" className="text-3xl md:text-4xl font-black rotate-1 inline-block">Keep Suffering.</h2>
          </div>
          <Link
            href="/antipatterns"
            aria-label="Browse the full antipattern library"
            className="group inline-flex items-center gap-1.5 text-sm font-black text-[#1C1917]/45 nav-link hover:text-[#1C1917] transition-colors shrink-0 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2"
          >
            Full library <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {RECENT_ANTIPATTERNS.map((item) => (
            <article key={item.slug} role="listitem" aria-label={`${item.title}, ${item.impact} impact`} className="h-full">
              <Link
                href={`/antipatterns/${item.slug}`}
                aria-label={`Read analysis: ${item.title} — ${item.impact} impact`}
                className="group card-lift block outline-none h-full"
              >
                <div className={`h-full flex flex-col bg-[#FAFAF7] border-2 border-[#1C1917]/10 shadow-[3px_3px_0_rgba(28,25,23,0.08)] group-hover:border-[#E9A319] group-hover:shadow-[5px_5px_0_rgba(233,163,25,0.17)] group-focus-visible:ring-4 group-focus-visible:ring-[#E9A319] sketchy-border-2 transition-all ${item.tilt}`}>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-2 mb-5 flex-wrap">
                      <span className="text-xs font-black uppercase tracking-widest bg-[#F0EFE9] border border-[#1C1917]/12 px-2 py-0.5 text-[#1C1917]/55">{item.category}</span>
                      <ImpactBadge impact={item.impact} />
                    </div>
                    <h3 className="text-base font-black leading-snug mb-3 group-hover:underline group-hover:decoration-wavy group-hover:decoration-[#E9A319] group-hover:underline-offset-3 transition-all">{item.title}</h3>
                    <p className="text-sm text-[#1C1917]/52 font-medium leading-relaxed">{item.excerpt}</p>
                  </div>
                  <div className="px-6 pb-5 pt-4 mt-auto border-t-2 border-dashed border-[#1C1917]/8">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#1C1917]/38 group-hover:text-[#1C1917] transition-colors">
                      Read analysis <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </span>
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
