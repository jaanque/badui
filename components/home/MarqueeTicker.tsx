import { MARQUEE_ITEMS } from "./data";

/**
 * CSS-only horizontal marquee — no JS, no hydration issues.
 * Accessibility: aria-hidden (decorative only), prefers-reduced-motion pauses it.
 */
export function MarqueeTicker() {
  // Duplicate items for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative z-10 border-y-2 border-[#1C1917]/10 bg-[#F0EFE9] overflow-hidden py-3 select-none"
    >
      <div className="marquee-track flex gap-0 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest text-[#1C1917]/40 px-6">
            {item}
            <span className="text-[#E9A319] text-base" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
