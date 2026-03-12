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
export function ImprovementGuides() {
  return (
    <section aria-labelledby="guides-heading" className="px-6 py-24 z-10 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/35 mb-2">Quick reference</p>
            <h2 id="guides-heading" className="text-3xl md:text-4xl font-black -rotate-1">
              How to Improve Your UI
            </h2>
            <p className="mt-3 text-base text-[#1C1917]/72 font-medium max-w-xl">
              Six foundational practices, each mapped to a WCAG criterion or Nielsen heuristic —
              the fastest way to lift quality across any product.
            </p>
          </div>
          <MagnetButton
            href="/guides"
            aria-label="View all improvement guides"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black text-[#1C1917] border-2 border-[#1C1917]/25 shadow-[3px_3px_0_rgba(28,25,23,0.10)] hover:border-[#E9A319] hover:shadow-[3px_3px_0_rgba(233,163,25,0.22)] hover:bg-[#E9A319]/8 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-colors sketchy-border shrink-0"
          >
            All guides
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
          </MagnetButton>
        </div>

        {/* Guide cards — 2-col layout, each with rules checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1917]/8" role="list">
          {GUIDES.map((guide) => (
            <article key={guide.slug} role="listitem" className="bg-[#FAFAF7]">
              <Link
                href={`/guides/${guide.slug}`}
                aria-label={`${guide.title} — ${guide.standard}`}
                className="group flex flex-col h-full p-7 hover:bg-[#F0EFE9] focus-visible:bg-[#F0EFE9] focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-[#E9A319] transition-colors outline-none"
              >
                {/* Top: number + standard badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-black text-[#1C1917]/22 tabular-nums">{guide.number}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#E9A319]/15 border border-[#E9A319]/40 px-2 py-0.5 text-[#1C1917]/70">
                    {guide.standard}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black mb-3 group-hover:underline group-hover:decoration-wavy group-hover:decoration-[#E9A319] group-hover:underline-offset-3 transition-all">
                  {guide.title}
                </h3>

                {/* Quick rule */}
                <p className="text-sm text-[#1C1917]/75 font-medium leading-relaxed mb-5 flex-grow">
                  {guide.quick}
                </p>

                {/* Checklist */}
                <ul className="space-y-1.5 mb-5">
                  {guide.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-medium text-[#1C1917]/78">
                      <Check
                        className="size-3.5 text-[#E9A319] shrink-0 mt-0.5"
                        strokeWidth={3}
                        aria-hidden
                      />
                      {rule}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-xs font-black text-[#1C1917]/38 group-hover:text-[#1C1917] transition-colors mt-auto">
                  Read full guide
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={3} />
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
