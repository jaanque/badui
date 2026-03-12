import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "120+", label: "Antipatterns" },
  { value: "12",   label: "Categories"   },
  { value: "47",   label: "Code fixes"   },
  { value: "Free", label: "Always"       },
];

/* Cards floating on the right — each represents a real antipattern */
const CARDS = [
  {
    title:    "Invisible close button",
    category: "Feedback",
    stat:     "Contrast 1.3:1",
    tilt:     "rotate-2",
    top:      "top-0",
    offset:   "ml-0",
    accent:   "bg-[#E9A319]",
  },
  {
    title:    "Ambiguous error messages",
    category: "Copywriting",
    stat:     "+67% rage-clicks",
    tilt:     "-rotate-1",
    top:      "top-28",
    offset:   "ml-12",
    accent:   "bg-[#F0EFE9]",
  },
  {
    title:    "Disabled submit button",
    category: "Forms",
    stat:     "18% drop-off",
    tilt:     "rotate-1",
    top:      "top-56",
    offset:   "ml-4",
    accent:   "bg-[#FAFAF7]",
  },
  {
    title:    "Scroll-jacked hero",
    category: "Navigation",
    stat:     "48% bounce rate",
    tilt:     "-rotate-2",
    top:      "top-[336px]",
    offset:   "ml-16",
    accent:   "bg-[#F0EFE9]",
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

        {/* ── Left column: text ─────────────────── */}
        <div>

          {/* Status pill */}
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

          {/* H1 */}
          <h1
            id="hero-heading"
            className="animate-fade-up-delay-1 text-[clamp(3rem,6.5vw,6.5rem)] font-black tracking-tighter leading-[0.88] text-[#1C1917] -rotate-1"
          >
            The UI<br />Antipattern<br />Library.
          </h1>

          {/* Underline */}
          <div className="animate-fade-up-delay-1">
            <svg
              aria-hidden
              className="text-[#E9A319]/60 w-[clamp(160px,50%,340px)] mt-2"
              viewBox="0 0 340 12" fill="none" preserveAspectRatio="none"
            >
              <path
                className="animate-draw"
                d="M2 9 C50 2,100 12,170 7 S260 1,338 8"
                stroke="currentColor" strokeWidth="3" strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 mt-7 text-lg md:text-xl font-semibold text-[#1C1917]/78 max-w-md leading-relaxed">
            Real-world UI mistakes, quantified impact, and code-ready fixes —
            for every developer and designer.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/categories"
              aria-label="Explore all UI antipattern categories"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-base font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/50 shadow-[3px_3px_0_rgba(28,25,23,0.18)] hover:shadow-none hover:translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border"
            >
              Explore antipatterns
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
            </Link>
            <Link
              href="/submit"
              aria-label="Submit a UI antipattern to the library"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-base font-black bg-transparent hover:bg-[#1C1917]/[0.04] text-[#1C1917] border-2 border-[#1C1917]/22 shadow-[3px_3px_0_rgba(28,25,23,0.08)] hover:shadow-none hover:translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#1C1917]/30 focus-visible:ring-offset-2 transition-all sketchy-border-2"
            >
              Submit a pattern
            </Link>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up-delay-4 mt-12 grid grid-cols-4 gap-0 max-w-sm border-2 border-[#1C1917]/12 divide-x-2 divide-[#1C1917]/12">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center py-4 px-1 text-center">
                <span className="text-xl md:text-2xl font-black tracking-tight text-[#1C1917]">{s.value}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#1C1917]/42 mt-0.5 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: floating antipattern cards ─────────────────── */}
        <div
          className="hidden lg:block relative h-[490px] animate-fade-up-delay-3"
          aria-hidden
        >
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`absolute ${card.top} ${card.offset} w-[260px] xl:w-[290px] border-2 border-[#1C1917]/18 bg-[#FAFAF7] shadow-[4px_4px_0_rgba(28,25,23,0.10)] ${card.tilt} sketchy-border transition-transform hover:-translate-y-1`}
            >
              {/* Card header stripe */}
              <div className={`${card.accent} border-b-2 border-[#1C1917]/12 px-4 py-2.5 flex items-center justify-between`}>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/58">{card.category}</span>
                <span className="text-[10px] font-black px-2 py-0.5 bg-[#1C1917] text-[#FAFAF7]">{card.stat}</span>
              </div>
              {/* Card body */}
              <div className="px-4 py-4">
                <p className="text-sm font-black text-[#1C1917] leading-snug">{card.title}</p>
                {/* Fake bar */}
                <div className="mt-3 h-1.5 bg-[#1C1917]/8 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E9A319] rounded-full" style={{ width: `${40 + Math.floor(Math.random() * 40)}%` }} />
                </div>
                {/* Fake lines */}
                <div className="mt-3 space-y-1.5">
                  <div className="h-2 bg-[#1C1917]/8 rounded" style={{ width: "80%" }} />
                  <div className="h-2 bg-[#1C1917]/6 rounded" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          ))}

          {/* Decorative annotation line */}
          <svg
            className="absolute bottom-8 right-4 text-[#E9A319]/50 w-24 animate-float-slow"
            viewBox="0 0 80 60" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 56 C10 40, 40 20, 76 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
            <circle cx="76" cy="4" r="3" fill="currentColor" />
          </svg>
        </div>

      </div>
    </section>
  );
}
