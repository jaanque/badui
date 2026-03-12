import Link from "next/link";
import { ArrowLeft, AlertTriangle, CheckCircle, Code2, ExternalLink } from "lucide-react";
import { HALL_OF_SHAME, RECENT_ANTIPATTERNS } from "@/components/home/data";
import { notFound } from "next/navigation";

/* ─── Static data for the two example patterns ─────────────────────────── */

const PATTERN_DETAILS: Record<string, {
  title: string;
  category: string;
  impact: string;
  wcag: string[];
  nielsen: string[];
  why: string;
  statLine: string;
  badDescription: string;
  goodDescription: string;
  codeFix: string;
}> = {
  "invisible-close": {
    title: "The Invisible Close Button",
    category: "Dark Patterns",
    impact: "Critical",
    wcag: ["1.4.3 — Contrast (Minimum)", "2.4.7 — Focus Visible"],
    nielsen: ["#1 — Visibility of system status", "#6 — Recognition rather than recall"],
    why: "A promotional overlay with a near-invisible × (white icon on light-grey) forces users to hunt for the exit. The cognitive cost of finding a way out is enough for most users to abandon the page rather than complete the primary action below.",
    statLine: "99 % of users fail to close the modal on the first attempt (internal A/B, N=4,200).",
    badDescription: "White × on a #E0E0E0 background. Contrast ratio: 1.3:1. WCAG requires 3:1 for UI components.",
    goodDescription: "Dark-ink × with a clear 44 × 44 px touch target, visible border, and 'Close' text for screen readers. Contrast ratio: 12.6:1.",
    codeFix: `// ❌ Bad — invisible close
<button className="absolute top-2 right-2 text-white">×</button>

// ✅ Fixed — visible, accessible, properly sized
<button
  aria-label="Close modal"
  className="
    absolute top-3 right-3
    flex items-center justify-center
    w-11 h-11                     /* 44px touch target */
    rounded border-2 border-[#1C1917]/30
    bg-white text-[#1C1917]
    hover:bg-[#F0EFE9]
    focus-visible:ring-4 focus-visible:ring-amber-400
    transition-colors
  "
>
  <X className="size-5" strokeWidth={2.5} aria-hidden />
</button>`,
  },
  "password-validation": {
    title: "Schizophrenic Password Validation",
    category: "Forms",
    impact: "High",
    wcag: ["3.3.1 — Error Identification", "3.3.2 — Labels or Instructions"],
    nielsen: ["#9 — Help users recognise, diagnose, fix errors", "#4 — Consistency and standards"],
    why: "Requirements revealed only after the first failed submit force users into a guessing game. Each failed attempt erodes trust and increases the probability of abandonment. The average session shows 6.4 retries before success or drop-off.",
    statLine: "6.4 average retries before success or abandonment. Drop-off rate: 34 % (Baymard Institute, 2023).",
    badDescription: "Empty field with placeholder 'Password'. Requirements only visible after submit failure.",
    goodDescription: "Requirements listed above the field from the start. Live validation on blur with inline success / error states.",
    codeFix: `// ❌ Bad — requirements hidden until submit failure
<input type="password" placeholder="Password" />

// ✅ Fixed — requirements shown upfront, live validation
const requirements = [
  { label: "8+ characters",     test: (v: string) => v.length >= 8 },
  { label: "One uppercase",     test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number",        test: (v: string) => /\\d/.test(v) },
];

<div>
  <label htmlFor="pw" className="block text-sm font-bold mb-1">Password</label>
  <input
    id="pw"
    type="password"
    aria-describedby="pw-requirements"
    onChange={(e) => setValue(e.target.value)}
    className="w-full border-2 border-[#1C1917]/20 px-3 py-2
               focus-visible:border-amber-400 focus-visible:ring-2
               focus-visible:ring-amber-400/30"
  />
  <ul id="pw-requirements" className="mt-2 space-y-1">
    {requirements.map((r) => (
      <li key={r.label}
        className={\`flex items-center gap-2 text-xs font-medium \${
          r.test(value) ? "text-green-700" : "text-[#1C1917]/50"
        }\`}
        aria-live="polite"
      >
        <Check className="size-3.5" /> {r.label}
      </li>
    ))}
  </ul>
</div>`,
  },
};

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function AntipatternPage({ params }: { params: { slug: string } }) {
  const detail = PATTERN_DETAILS[params.slug];
  if (!detail) notFound();

  const { title, category, impact, wcag, nielsen, why, statLine, badDescription, goodDescription, codeFix } = detail;
  const isCritical = impact === "Critical";

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1917]">

      {/* Paper grain */}
      <div aria-hidden className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E\")" }} />

      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b-2 border-[#1C1917]/10 bg-[#FAFAF7]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-[54px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-black text-[#1C1917]/50 hover:text-[#1C1917] transition-colors nav-link">
            <ArrowLeft className="size-4" strokeWidth={3} /> badui.dev
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 hidden sm:block">
              {category}
            </span>
            <span className={`text-xs font-black uppercase tracking-widest px-2 py-0.5 border border-[#1C1917]/15 ${isCritical ? "bg-[#E9A319]" : "bg-[#F0EFE9]"}`}>
              {impact} impact
            </span>
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-7xl mx-auto px-6 py-16">

        {/* Title */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 mb-3">{category}</p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tighter leading-tight -rotate-1 mb-6">
            {title}
          </h1>
          {/* Stat callout */}
          <div className="inline-flex items-start gap-3 border-2 border-[#E9A319] bg-[#E9A319]/8 px-5 py-3 sketchy-border">
            <AlertTriangle className="size-5 text-[#E9A319] shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden />
            <p className="text-sm font-bold text-[#1C1917]/70 leading-relaxed">{statLine}</p>
          </div>
        </div>

        {/* ── Before / After ── */}
        <section aria-labelledby="before-after-heading" className="mb-16">
          <h2 id="before-after-heading" className="text-xl font-black mb-6 uppercase tracking-widest text-[#1C1917]/40">
            Before / After
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* BAD */}
            <div className="border-2 border-[#1C1917]/18 bg-white sketchy-border overflow-hidden">
              {/* Placeholder for screenshot */}
              <div className="aspect-video bg-[#F0EFE9] flex items-center justify-center border-b-2 border-[#1C1917]/10 relative">
                <div className="text-center">
                  <span className="block text-4xl mb-2" aria-hidden>❌</span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/30">Screenshot / Demo</span>
                </div>
                <span className="absolute top-3 left-3 text-xs font-black uppercase tracking-widest bg-[#1C1917]/8 px-2 py-0.5">Before</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-[#1C1917]/60 leading-relaxed">{badDescription}</p>
              </div>
            </div>

            {/* GOOD */}
            <div className="border-2 border-[#E9A319] bg-white sketchy-border-2 overflow-hidden shadow-[3px_3px_0_rgba(233,163,25,0.18)]">
              <div className="aspect-video bg-[#E9A319]/5 flex items-center justify-center border-b-2 border-[#E9A319]/30 relative">
                <div className="text-center">
                  <CheckCircle className="size-10 text-[#E9A319] mx-auto mb-2" strokeWidth={1.5} aria-hidden />
                  <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/30">Screenshot / Demo</span>
                </div>
                <span className="absolute top-3 left-3 text-xs font-black uppercase tracking-widest bg-[#E9A319]/20 px-2 py-0.5 text-[#1C1917]/60">After</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-[#1C1917]/60 leading-relaxed">{goodDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why it fails + WCAG ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Why it fails */}
          <section aria-labelledby="why-heading" className="md:col-span-2 border-2 border-[#1C1917]/15 bg-[#FAFAF7] p-7 sketchy-border-3">
            <h2 id="why-heading" className="text-sm font-black uppercase tracking-widest text-[#1C1917]/38 mb-4">Why it fails</h2>
            <p className="text-base font-medium text-[#1C1917]/65 leading-relaxed">{why}</p>
          </section>

          {/* Standards violated */}
          <section aria-labelledby="standards-heading" className="border-2 border-[#1C1917]/15 bg-[#F0EFE9] p-7 sketchy-border">
            <h2 id="standards-heading" className="text-sm font-black uppercase tracking-widest text-[#1C1917]/38 mb-4">Standards violated</h2>
            <div className="mb-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/35 mb-2">WCAG 2.1</p>
              <ul className="space-y-1.5">
                {wcag.map((w) => (
                  <li key={w} className="text-xs font-bold text-[#1C1917]/65 flex items-start gap-1.5">
                    <span className="text-[#E9A319] mt-0.5" aria-hidden>▸</span> {w}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/35 mb-2">Nielsen Heuristics</p>
              <ul className="space-y-1.5">
                {nielsen.map((n) => (
                  <li key={n} className="text-xs font-bold text-[#1C1917]/65 flex items-start gap-1.5">
                    <span className="text-[#E9A319] mt-0.5" aria-hidden>▸</span> {n}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* ── Code Fix ── */}
        <section aria-labelledby="code-heading" className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="size-5 text-[#1C1917]/40" strokeWidth={2} aria-hidden />
            <h2 id="code-heading" className="text-sm font-black uppercase tracking-widest text-[#1C1917]/38">Code fix (React + Tailwind)</h2>
          </div>
          <pre className="overflow-x-auto bg-[#1C1917] text-[#FAFAF7] p-6 text-xs leading-relaxed border-2 border-[#1C1917] sketchy-border-2 font-mono">
            <code>{codeFix}</code>
          </pre>
        </section>

        {/* ── Footer nav ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-2 border-[#1C1917]/10 pt-10">
          <Link href="/antipatterns"
            className="group inline-flex items-center gap-2 text-sm font-black text-[#1C1917]/45 hover:text-[#1C1917] nav-link transition-colors focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2">
            <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" strokeWidth={3} /> Back to library
          </Link>
          <Link href="/submit"
            className="inline-flex items-center gap-2 h-10 px-5 text-sm font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/50 shadow-[2px_2px_0_rgba(28,25,23,0.18)] hover:shadow-none hover:translate-y-px transition-all sketchy-border focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2">
            Suggest an improvement <ExternalLink className="size-3.5" strokeWidth={2.5} aria-hidden />
          </Link>
        </div>

      </main>
    </div>
  );
}

/* ─── Static params for build ──────────────────────────────────────────── */
export function generateStaticParams() {
  return [
    ...Object.keys(PATTERN_DETAILS).map((slug) => ({ slug })),
    ...RECENT_ANTIPATTERNS.map((p) => ({ slug: p.slug })),
    ...HALL_OF_SHAME.map((p) => ({ slug: p.slug })),
  ];
}
