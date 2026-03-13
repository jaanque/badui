import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "120+", label: "Antipatterns" },
  { value: "12",   label: "Categories"   },
  { value: "47",   label: "Code fixes"   },
  { value: "Free", label: "Always"       },
];

const CARDS = [
  {
    n:        "01",
    title:    "Invisible close button",
    category: "Feedback",
    stat:     "Contrast 1.3:1",
    severity: 3,
    bar:      88,
    tilt:     "rotate-2",
    accent:   "#E9A319",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    preview: (
      /* Tiny modal mockup — close button invisible */
      <div className="relative bg-[#F3F4F6] border border-[#E5E7EB] p-2 h-14 flex items-start justify-between">
        <div className="space-y-1 pt-0.5">
          <div className="h-1.5 w-20 bg-[#9CA3AF]/70 rounded" />
          <div className="h-1 w-14 bg-[#9CA3AF]/40 rounded" />
        </div>
        {/* × button — white on white */}
        <div className="w-5 h-5 bg-white border border-[#F3F4F6] flex items-center justify-center text-[9px] text-[#F3F4F6] font-black">×</div>
      </div>
    ),
  },
  {
    n:        "02",
    title:    "Ambiguous error messages",
    category: "Copywriting",
    stat:     "+67% rage-clicks",
    severity: 3,
    bar:      72,
    tilt:     "-rotate-1",
    accent:   "#1C1917",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
        <path d="M10 3l7.5 13H2.5L10 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M10 8v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    preview: (
      <div className="bg-[#FEF2F2] border border-[#FECACA] p-2 h-14 flex flex-col justify-center gap-1">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]/50" />
          <div className="h-1.5 w-24 bg-[#EF4444]/30 rounded" />
        </div>
        <div className="h-1 w-32 bg-[#9CA3AF]/40 rounded" />
        <div className="h-1 w-20 bg-[#9CA3AF]/30 rounded" />
      </div>
    ),
  },
  {
    n:        "03",
    title:    "Disabled submit button",
    category: "Forms",
    stat:     "18% drop-off",
    severity: 2,
    bar:      55,
    tilt:     "rotate-1",
    accent:   "#E9A319",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
        <rect x="2" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M6 6V5a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    preview: (
      <div className="bg-[#F9FAFB] p-2 h-14 flex flex-col justify-between">
        <div className="flex gap-1.5">
          <div className="h-6 flex-1 bg-white border border-[#D1D5DB] rounded" />
          <div className="h-6 flex-1 bg-white border border-[#D1D5DB] rounded" />
        </div>
        <div className="h-6 w-full bg-[#D1D5DB] rounded flex items-center justify-center">
          <div className="h-1.5 w-12 bg-[#9CA3AF]/60 rounded" />
        </div>
      </div>
    ),
  },
  {
    n:        "04",
    title:    "Scroll-jacked hero",
    category: "Navigation",
    stat:     "48% bounce rate",
    severity: 2,
    bar:      62,
    tilt:     "-rotate-2",
    accent:   "#1C1917",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
        <path d="M3 8h14M8 3l-5 5 5 5M12 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    preview: (
      <div className="bg-[#1C1917] p-2 h-14 flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-1.5 w-16 bg-[#FAFAF7]/30 rounded" />
          <div className="h-1 w-10 bg-[#FAFAF7]/15 rounded" />
        </div>
        <div className="flex gap-0.5">
          {[0,1,2,3].map(i => (
            <div key={i} className={`w-1 rounded-full ${i === 1 ? "h-6 bg-[#E9A319]" : "h-3 bg-[#FAFAF7]/20"}`} />
          ))}
        </div>
      </div>
    ),
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

        {/* ── Left: copy ── */}
        <div>
          <div
            role="status"
            aria-label="Library updated March 2026"
            className="animate-fade-up mb-7 inline-flex items-center gap-2 border border-[#1C1917]/22 bg-[#F0EFE9] px-4 py-1.5 text-[11px] font-black uppercase tracking-widest"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E9A319] opacity-80" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E9A319]" />
            </span>
            Updated March 2026
          </div>

          <h1
            id="hero-heading"
            className="animate-fade-up-delay-1 text-[clamp(3rem,6.5vw,6.5rem)] font-black tracking-tighter leading-[0.88] text-[#1C1917] -rotate-1"
          >
            The UI<br />Antipattern<br />Library.
          </h1>

          <div className="animate-fade-up-delay-1">
            <svg aria-hidden className="text-[#E9A319]/70 w-[clamp(160px,50%,340px)] mt-2"
              viewBox="0 0 340 12" fill="none" preserveAspectRatio="none">
              <path className="animate-draw" d="M2 9 C50 2,100 12,170 7 S260 1,338 8"
                stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <p className="animate-fade-up-delay-2 mt-7 text-lg md:text-xl font-semibold text-[#1C1917]/78 max-w-md leading-relaxed">
            Real-world UI mistakes, quantified impact, and code-ready fixes —
            for every developer and designer.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/categories" aria-label="Explore all UI antipattern categories"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-base font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/50 shadow-[3px_3px_0_rgba(28,25,23,0.18)] hover:shadow-none hover:translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border">
              Explore antipatterns
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
            </Link>
            <Link href="/submit" aria-label="Submit a UI antipattern to the library"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-base font-black bg-transparent hover:bg-[#1C1917]/[0.04] text-[#1C1917] border-2 border-[#1C1917]/22 shadow-[3px_3px_0_rgba(28,25,23,0.08)] hover:shadow-none hover:translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#1C1917]/30 focus-visible:ring-offset-2 transition-all sketchy-border-2">
              Submit a pattern
            </Link>
          </div>

          <div className="animate-fade-up-delay-4 mt-12 grid grid-cols-4 gap-0 max-w-sm border-2 border-[#1C1917]/12 divide-x-2 divide-[#1C1917]/12">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-4 px-1 text-center">
                <span className="text-xl md:text-2xl font-black tracking-tight text-[#1C1917]">{s.value}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#1C1917]/42 mt-0.5 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: floating cards ── */}
        <div className="hidden lg:block relative h-[510px] animate-fade-up-delay-3" aria-hidden>
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`absolute w-[260px] xl:w-[286px] border-2 border-[#1C1917]/16 bg-[#FAFAF7] shadow-[4px_4px_0_rgba(28,25,23,0.10)] hover:shadow-[6px_6px_0_rgba(28,25,23,0.14)] hover:-translate-y-1 ${card.tilt} sketchy-border transition-all duration-200`}
              style={{ top: `${i * 118}px`, marginLeft: i % 2 === 0 ? "0px" : "52px" }}
            >
              {/* Header */}
              <div
                className="px-3 py-2 flex items-center justify-between border-b-2 border-[#1C1917]/10"
                style={{ background: card.accent === "#E9A319" ? "#E9A319" : "#1C1917" }}
              >
                <div className="flex items-center gap-1.5"
                  style={{ color: card.accent === "#E9A319" ? "#1C1917" : "#FAFAF7" }}>
                  {card.icon}
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-70">
                    {card.category}
                  </span>
                </div>
                <span
                  className="text-[9px] font-black px-2 py-0.5 uppercase tracking-wide"
                  style={{
                    background: card.accent === "#E9A319" ? "#1C1917" : "#E9A319",
                    color:      card.accent === "#E9A319" ? "#FAFAF7"  : "#1C1917",
                  }}
                >
                  {card.stat}
                </span>
              </div>

              {/* Body */}
              <div className="p-3">
                {/* Number + title */}
                <div className="flex items-start gap-2 mb-2.5">
                  <span className="text-[9px] font-black text-[#E9A319] mt-0.5 tabular-nums">{card.n}</span>
                  <p className="text-xs font-black text-[#1C1917] leading-snug">{card.title}</p>
                </div>

                {/* Mini UI preview */}
                <div className="mb-2.5 overflow-hidden border border-[#1C1917]/10">
                  {card.preview}
                </div>

                {/* Impact bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-[#1C1917]/8 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E9A319] rounded-full" style={{ width: `${card.bar}%` }} />
                  </div>
                  {/* Severity dots */}
                  <div className="flex gap-0.5 shrink-0">
                    {[0,1,2].map(d => (
                      <div key={d} className={`w-1.5 h-1.5 rounded-full ${d < card.severity ? "bg-[#E9A319]" : "bg-[#1C1917]/12"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Dashed annotation arrow */}
          <svg className="absolute bottom-4 right-2 text-[#E9A319]/45 w-20 animate-float-slow"
            viewBox="0 0 70 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 51 C12 35, 38 18, 66 3" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeDasharray="3 4" />
            <circle cx="66" cy="3" r="2.5" fill="currentColor" />
          </svg>
        </div>

      </div>
    </section>
  );
}
