/**
 * CommunityRanking —
 * Gamification section: learn from the library, earn XP, climb the leaderboard.
 *
 * Left  → Join pitch + XP level track
 * Right → Live leaderboard preview + badge showcase
 */

/* ─── Data ──────────────────────────────────────────────── */

const LEVELS = [
  { name: "Newcomer",   xp: 0,    color: "bg-[#D1D5DB]"   },
  { name: "Reviewer",   xp: 250,  color: "bg-[#E9A319]/60" },
  { name: "Challenger", xp: 750,  color: "bg-[#E9A319]"    },
  { name: "Expert",     xp: 2000, color: "bg-[#D97706]"    },
  { name: "Master",     xp: 5000, color: "bg-[#92400E]"    },
];

const LEADERS = [
  { rank: 1, init: "A", name: "alexmoreno",  xp: 4820, badge: "⚡" },
  { rank: 2, init: "S", name: "sara_ux",     xp: 3910, badge: "🎯" },
  { rank: 3, init: "J", name: "jan_dev",     xp: 3205, badge: "🔥" },
  { rank: 4, init: "M", name: "mikaah",      xp: 2780, badge: "✦"  },
  { rank: 5, init: "R", name: "raf.designs", xp: 2410, badge: "★"  },
];

const BADGES = [
  { icon: "🔍", name: "Pattern Hunter",        desc: "Submit your first antipattern"       },
  { icon: "♿", name: "A11y Champion",          desc: "Spot 5 accessibility violations"     },
  { icon: "⚡", name: "Speed Review",           desc: "Review 10 patterns in one week"      },
  { icon: "🧪", name: "Lab Rat",               desc: "Test a code fix and verify it works" },
  { icon: "🎯", name: "Sniper",                desc: "Submit a pattern that gets verified" },
  { icon: "🏆", name: "Hall of Fame",          desc: "Reach Master rank"                   },
];

const RANK_COLORS: Record<number, string> = {
  1: "bg-[#E9A319] text-[#1C1917] border-[#E9A319]",
  2: "bg-[#D1D5DB] text-[#1C1917] border-[#D1D5DB]",
  3: "bg-[#92400E]/80 text-[#FAFAF7] border-[#92400E]/80",
};

/* ─── Component ─────────────────────────────────────────── */

export function CommunityRanking() {
  return (
    <section
      aria-labelledby="ranking-heading"
      className="px-6 py-24 z-10 bg-[#1C1917] text-[#FAFAF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/50 mb-3">
              Community · Learn · Compete
            </p>
            <h2
              id="ranking-heading"
              className="text-3xl md:text-4xl font-black text-[#FAFAF7] -rotate-1"
            >
              Learn. Document.<br />
              <span className="text-[#E9A319]">Climb the ranks.</span>
            </h2>
            <p className="mt-4 text-base text-[#FAFAF7]/72 font-medium max-w-md leading-relaxed">
              Every pattern you study, submit, or verify earns XP. Build your
              profile, unlock badges, and compete for the top of the leaderboard.
            </p>
          </div>

          {/* Mini stats */}
          <div className="flex gap-0 border-2 border-[#FAFAF7]/12 shrink-0">
            {[
              { v: "1.2k+", l: "Members"  },
              { v:   "45",  l: "This week" },
              { v:  "98%",  l: "Free"      },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center px-6 py-4 border-r border-[#FAFAF7]/12 last:border-r-0">
                <span className="text-xl font-black text-[#E9A319] tabular-nums">{s.v}</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FAFAF7]/40 mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left: XP levels + Badge showcase ── */}
          <div className="flex flex-col gap-6">

            {/* XP level track */}
            <div className="border-2 border-[#FAFAF7]/10 p-6">
              <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/45 mb-4">XP level track</p>
              <div className="flex items-stretch gap-0">
                {LEVELS.map((lvl, i) => (
                  <div key={lvl.name} className="flex-1 flex flex-col items-center gap-2">
                    {/* Tier bar */}
                    <div className={`w-full h-2 ${lvl.color} ${i === 0 ? "rounded-l" : ""} ${i === LEVELS.length - 1 ? "rounded-r" : ""}`} />
                    <span className="text-[8px] font-black uppercase tracking-wide text-[#FAFAF7]/45 text-center leading-tight">
                      {lvl.name}
                    </span>
                    <span className="text-[9px] font-mono text-[#FAFAF7]/28 tabular-nums">
                      {lvl.xp.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge grid */}
            <div className="border-2 border-[#FAFAF7]/10 p-6 flex-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/45 mb-4">Earnable badges</p>
              <div className="grid grid-cols-3 gap-3">
                {BADGES.map((b) => (
                  <div
                    key={b.name}
                    title={b.desc}
                    className="group flex flex-col items-center gap-1.5 py-4 px-2 border border-[#FAFAF7]/8 hover:border-[#E9A319]/40 hover:bg-[#E9A319]/5 transition-all cursor-default text-center"
                  >
                    <span className="text-2xl leading-none" role="img" aria-label={b.name}>{b.icon}</span>
                    <span className="text-[9px] font-black text-[#FAFAF7]/60 group-hover:text-[#E9A319] transition-colors uppercase tracking-wide leading-tight">
                      {b.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Leaderboard ── */}
          <div className="border-2 border-[#FAFAF7]/10 flex flex-col">
            <div className="px-6 py-4 border-b border-[#FAFAF7]/10 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-widest text-[#FAFAF7]/45">Top contributors</p>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#E9A319]/70 border border-[#E9A319]/30 px-2 py-0.5">
                This month
              </span>
            </div>

            {/* Leaderboard list */}
            <div className="flex flex-col flex-1">
              {LEADERS.map((l, i) => (
                <div
                  key={l.name}
                  className={`flex items-center gap-4 px-6 py-4 border-b border-[#FAFAF7]/6 last:border-b-0 hover:bg-[#FAFAF7]/4 transition-colors ${i === 0 ? "bg-[#E9A319]/8" : ""}`}
                >
                  {/* Rank badge */}
                  <span
                    className={`w-6 h-6 flex items-center justify-center text-[10px] font-black border shrink-0 ${RANK_COLORS[l.rank] ?? "bg-[#FAFAF7]/8 text-[#FAFAF7]/50 border-[#FAFAF7]/12"}`}
                  >
                    {l.rank}
                  </span>

                  {/* Avatar */}
                  <div className="w-8 h-8 flex items-center justify-center text-xs font-black bg-[#FAFAF7]/10 text-[#FAFAF7]/80 border border-[#FAFAF7]/12 shrink-0">
                    {l.init}
                  </div>

                  {/* Name + badge */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-black text-[#FAFAF7]/88 truncate">{l.name}</p>
                    <p className="text-[10px] text-[#FAFAF7]/38 font-medium">{l.badge} Top contributor</p>
                  </div>

                  {/* XP */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-black text-[#E9A319] tabular-nums">{l.xp.toLocaleString()}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#FAFAF7]/30">XP</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-6 py-5 border-t border-[#FAFAF7]/10 bg-[#FAFAF7]/3">
              <a
                href="/register"
                className="group flex items-center justify-center gap-2 w-full h-11 text-sm font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#E9A319]/80 hover:shadow-[3px_3px_0_rgba(233,163,25,0.3)] focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1917] transition-all sketchy-border"
              >
                Join and start earning XP
                <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
