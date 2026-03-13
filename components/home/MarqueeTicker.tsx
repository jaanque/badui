import { MARQUEE_ITEMS } from "./data";

/**
 * Enhanced Marquee Ticker — hand-drawn feel, premium typography.
 * Uses a manual SVG sparkle for a more organic look than font icons.
 */
export function MarqueeTicker() {
  // Triple items for ultra-smooth loop on larger screens
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative z-10 border-y-2 border-[#1C1917]/10 bg-[#F0EFE9] overflow-hidden py-4 select-none group"
    >
      <div className="marquee-track flex whitespace-nowrap group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-4">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1C1917]/45 italic">
              {item}
            </span>
            <div className="flex items-center justify-center size-5 text-[#E9A319]">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className={`w-full h-full transform transition-transform duration-1000 group-hover:rotate-45 ${i % 2 === 0 ? 'rotate-12' : '-rotate-6'}`}
              >
                <path d="M12 2C12 2 12.5 8 15 10.5C17.5 13 22 12 22 12C22 12 17.5 11 15 8.5C12.5 6 12 2 12 2Z" />
                <path d="M12 2C12 2 11.5 8 9 10.5C6.5 13 2 12 2 12C2 12 6.5 11 9 8.5C11.5 6 12 2 12 2Z" />
                <path d="M12 22C12 22 12.5 16 15 13.5C17.5 11 22 12 22 12C22 12 17.5 13 15 15.5C12.5 18 12 22 12 22Z" />
                <path d="M12 22C12 22 11.5 16 9 13.5C6.5 11 2 12 2 12C2 12 6.5 13 9 15.5C11.5 18 12 22 12 22Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
