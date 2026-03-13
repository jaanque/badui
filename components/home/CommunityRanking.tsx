/**
 * ContributorTrack —
 * Professional contribution & learning section.
 * No emoji, no XP gaming language.
 * Frames community participation as expertise-building and catalog stewardship.
 */

/* ─── Data ──────────────────────────────────────────────── */

const TIERS = [
  { name: "Newcomer",   label: "0 contributions",    color: "bg-[#D1D5DB]"   },
  { name: "Reviewer",   label: "5+ contributions",   color: "bg-[#E9A319]/55" },
  { name: "Analyst",    label: "15+ contributions",  color: "bg-[#E9A319]"    },
  { name: "Expert",     label: "40+ contributions",  color: "bg-[#D97706]"    },
  { name: "Curator",    label: "100+ contributions", color: "bg-[#92400E]"    },
];

const LEADERS = [
  { rank: 1, init: "A", name: "alexmoreno",  score: 482, tier: "Curator"  },
  { rank: 2, init: "S", name: "sara_ux",     score: 391, tier: "Expert"   },
  { rank: 3, init: "J", name: "jan_dev",     score: 320, tier: "Expert"   },
  { rank: 4, init: "M", name: "mikaah",      score: 278, tier: "Analyst"  },
  { rank: 5, init: "R", name: "raf.designs", score: 241, tier: "Analyst"  },
];

const EXPERTISE_AREAS = [
  { code: "A11y",   name: "Accessibility",     req: "Spot 5 WCAG violations"          },
  { code: "FORM",   name: "Forms & Inputs",    req: "Document 3 form antipatterns"    },
  { code: "NAV",    name: "Navigation",        req: "Submit 3 navigation patterns"    },
  { code: "PERF",   name: "Performance",       req: "Add a performance impact entry"  },
  { code: "WCAG",   name: "WCAG Compliance",   req: "Verify 3 accessibility entries"  },
  { code: "COPY",   name: "UX Writing",        req: "Submit 2 copywriting patterns"   },
];

const RANK_STYLE: Record<number, string> = {
  1: "bg-[#E9A319] text-[#1C1917] border-[#E9A319]",
  2: "bg-[#C0C0C0]/60 text-[#1C1917] border-[#C0C0C0]/60",
  3: "bg-[#92400E]/70 text-[#FAFAF7] border-[#92400E]/70",
};

/* ─── Component ─────────────────────────────────────────── */

export function CommunityRanking() {
  return (
    <section
      aria-labelledby="contributor-heading"
      className="px-6 py-24 z-10 bg-[#1C1917] text-[#FAFAF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/45 mb-3">
              Community · Contributions · Expertise
            </p>
            <h2
              id="contributor-heading"
              className="text-3xl md:text-4xl font-black text-[#FAFAF7] -rotate-1"
            >
              Learn from the catalog.<br />
              <span className="text-[#E9A319]">Contribute to it.</span>
            </h2>
            <p className="mt-4 text-base text-[#FAFAF7]/70 font-medium max-w-md leading-relaxed">
              Study documented antipatterns, submit new entries, and verify
              existing ones. Every contribution builds your profile and improves
              the reference for the entire community.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-0 border-2 border-[#FAFAF7]/10 shrink-0">
            {[
              { v: "1.2k+", l: "Contributors" },
              { v:   "45",  l: "This month"   },
              { v: "Free",  l: "Always"        },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center px-6 py-4 border-r border-[#FAFAF7]/10 last:border-r-0">
                <span className="text-xl font-black text-[#E9A319] tabular-nums">{s.v}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FAFAF7]/38 mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left: Tier track + Expertise areas ── */}
          <div className="flex flex-col gap-6">

            {/* Contribution tier track */}
            <div className="border-2 border-[#FAFAF7]/10 p-6">
              <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/42 mb-5">
                Contributor tiers
              </p>
              <div className="flex items-stretch gap-0 mb-3">
                {TIERS.map((t, i) => (
                  <div key={t.name} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-full h-1.5 ${t.color} ${i === 0 ? "rounded-l" : ""} ${i === TIERS.length - 1 ? "rounded-r" : ""}`}
                    />
                    <span className="text-[8px] font-black uppercase tracking-wide text-[#FAFAF7]/42 text-center leading-tight">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {TIERS.map((t) => (
                  <span key={t.name} className="text-[8px] font-mono text-[#FAFAF7]/25 tabular-nums">
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Expertise areas */}
            <div className="border-2 border-[#FAFAF7]/10 p-6 flex-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/42 mb-4">
                Expertise areas
              </p>
              <div className="grid grid-cols-3 gap-2">
                {EXPERTISE_AREAS.map((a) => (
                  <div
                    key={a.code}
                    title={a.req}
                    className="group flex flex-col gap-1.5 p-3 border border-[#FAFAF7]/8 hover:border-[#E9A319]/35 hover:bg-[#FAFAF7]/3 transition-all cursor-default"
                  >
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#E9A319]/80 group-hover:text-[#E9A319]">
                      {a.code}
                    </span>
                    <span className="text-[10px] font-bold text-[#FAFAF7]/55 group-hover:text-[#FAFAF7]/80 leading-tight transition-colors">
                      {a.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Leaderboard ── */}
          <div className="border-2 border-[#FAFAF7]/10 flex flex-col">
            <div className="px-6 py-4 border-b border-[#FAFAF7]/10 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/42">
                Top contributors
              </p>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#E9A319]/65 border border-[#E9A319]/25 px-2 py-0.5">
                This month
              </span>
            </div>

            <div className="flex flex-col flex-1">
              {LEADERS.map((l, i) => (
                <div
                  key={l.name}
                  className={`flex items-center gap-4 px-6 py-4 border-b border-[#FAFAF7]/6 last:border-b-0 hover:bg-[#FAFAF7]/3 transition-colors ${i === 0 ? "bg-[#E9A319]/6" : ""}`}
                >
                  {/* Rank badge */}
                  <span
                    className={`w-6 h-6 flex items-center justify-center text-[10px] font-black border shrink-0 tabular-nums ${RANK_STYLE[l.rank] ?? "bg-[#FAFAF7]/6 text-[#FAFAF7]/45 border-[#FAFAF7]/10"}`}
                  >
                    {l.rank}
                  </span>

                  {/* Avatar initial */}
                  <div className="w-8 h-8 flex items-center justify-center text-xs font-black bg-[#FAFAF7]/8 text-[#FAFAF7]/75 border border-[#FAFAF7]/10 shrink-0">
                    {l.init}
                  </div>

                  {/* Name + tier */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-black text-[#FAFAF7]/85 truncate">{l.name}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#FAFAF7]/35 mt-0.5">{l.tier}</p>
                  </div>

                  {/* Score */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-black text-[#E9A319] tabular-nums">{l.score}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#FAFAF7]/28">score</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 py-5 border-t border-[#FAFAF7]/10 bg-[#FAFAF7]/2">
              <a
                href="/register"
                className="group flex items-center justify-center gap-2 w-full h-11 text-sm font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#E9A319]/70 hover:shadow-[3px_3px_0_rgba(233,163,25,0.25)] focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1917] transition-all sketchy-border"
              >
                Create a contributor profile
                <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
