import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { MagnetButton } from "@/components/ui/MagnetButton";

const GUIDES = [
  {
    number: "01",
    title: "Colour Contrast",
    standard: "WCAG 1.4.3",
    quick: "Normal text needs 4.5:1. Large text (≥18 pt) needs 3:1. Never rely solely on colour to convey meaning.",
    rules: ["Use oklch() or HSL for predictable lightness", "Test with browser DevTools contrast checker", "Add a secondary cue (icon, pattern, label)"],
    slug: "colour-contrast",
  },
  {
    number: "02",
    title: "Keyboard Navigation",
    standard: "WCAG 2.1.1",
    quick: "Every interactive element must be reachable and operable via keyboard alone. No keyboard traps.",
    rules: ["Add :focus-visible styles — never remove outline", "Use tabindex=\"0\" for custom widgets", "Test with Tab, Shift+Tab, Enter, Space, Arrow keys"],
    slug: "keyboard-navigation",
  },
  {
    number: "03",
    title: "Error Handling",
    standard: "Nielsen #9",
    quick: "Show errors inline, next to the field. Be specific. Never blame the user. Offer a way out.",
    rules: ["Validate on blur + on submit, never only on submit", "Use aria-describedby to link field + error message", "State what is wrong AND how to fix it"],
    slug: "error-handling",
  },
  {
    number: "04",
    title: "Touch Target Size",
    standard: "WCAG 2.5.5",
    quick: "Minimum 44 × 44 CSS px for any interactive element on touch devices. 48 × 48 is safer.",
    rules: ["Use padding to extend the clickable area, not just the visible one", "Add 8 px minimum gap between adjacent targets", "Test on a real device, not just DevTools"],
    slug: "touch-targets",
  },
  {
    number: "05",
    title: "Form Labels",
    standard: "WCAG 1.3.1",
    quick: "Every input needs a persistent visible label. Placeholder text is not a label — it disappears on focus.",
    rules: ["Use <label for> or aria-labelledby, never aria-label alone", "Float-labels are acceptable but risky — test with screen readers", "Mark required fields explicitly, not just with colour"],
    slug: "form-labels",
  },
  {
    number: "06",
    title: "Loading States",
    standard: "Nielsen #1",
    quick: "Show system status at all times. Users should never wonder if something is happening.",
    rules: ["Add a spinner or skeleton within 100 ms of an action", "Use aria-live='polite' to announce async updates", "Persist form state on error — never reset the form"],
    slug: "loading-states",
  },
];

/**
 * "How to improve your UI" — quick-reference accessibility & best-practice guides.
 * Gives the site editorial depth beyond just documenting bad examples.
 */
function WavyUnderline() {
  return (
    <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#E9A319]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
      <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function ImprovementGuides() {
  return (
    <section aria-labelledby="guides-heading" className="px-6 py-24 z-10 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E9A319] mb-4">Methodology</p>
            <h2 id="guides-heading" className="text-4xl md:text-6xl font-black text-[#1C1917] tracking-tight">
              How to Improve Your UI
            </h2>
            <p className="mt-6 text-xl text-[#1C1917]/60 font-medium leading-relaxed">
              Six foundational practices mapped to WCAG 2.1 — the fastest way to lift quality across any digital product.
            </p>
          </div>
          <MagnetButton
            href="/guides"
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FAFAF7] border-2 border-[#1C1917] bg-[#1C1917] shadow-[6px_6px_0_rgba(233,163,25,0.4)] hover:shadow-none hover:translate-y-1 transition-all sketchy-border"
          >
            All Best Practices
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </MagnetButton>
        </div>

        {/* Guide cards — 3-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {GUIDES.map((guide) => (
            <article key={guide.slug} role="listitem" className="bg-white border-2 border-[#1C1917]/10 p-8 hover:border-[#1C1917] transition-all duration-300 shadow-[4px_4px_0_rgba(28,25,23,0.03)] hover:shadow-[8px_8px_0_rgba(28,25,23,0.06)] group/card sketchy-border-2">
              <Link
                href={`/guides/${guide.slug}`}
                className="flex flex-col h-full outline-none"
              >
                {/* Top: number + standard badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-black text-[#1C1917]/15 tabular-nums">Ref. {guide.number}</span>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-[#F0EFE9] border-2 border-[#1C1917]/5 px-3 py-1 text-[#1C1917]/50 sketchy-border">
                    {guide.standard}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#1C1917] mb-4 relative inline-block self-start group-hover/card:text-[#E9A319] transition-colors">
                  {guide.title}
                  <WavyUnderline />
                </h3>

                {/* Quick rule */}
                <p className="text-base text-[#1C1917]/70 font-medium leading-relaxed mb-8 flex-grow">
                  {guide.quick}
                </p>

                {/* Checklist */}
                <ul className="space-y-3 mb-8 bg-[#F0EFE9]/30 p-5 border-2 border-[#1C1917]/5 sketchy-border-3">
                  {guide.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold text-[#1C1917]/80">
                      <div className="size-4 bg-[#E9A319] flex items-center justify-center shrink-0 mt-0.5 rounded-sm shadow-[1.5px_1.5px_0_rgba(28,25,23,1)]">
                        <Check className="size-3 text-[#1C1917]" strokeWidth={4} />
                      </div>
                      {rule}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#1C1917]/30 group-hover/card:text-[#1C1917] transition-colors mt-auto">
                  Documentation 
                  <ArrowRight className="size-3 group-hover/card:translate-x-1 transition-transform" strokeWidth={3} />
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
