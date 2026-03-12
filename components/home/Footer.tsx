import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "Categories",   href: "/categories" },
  { label: "Library",      href: "/antipatterns" },
  { label: "Submit",       href: "/submit" },
  { label: "Mission",      href: "/about" },
  { label: "GitHub",       href: "https://github.com" },
  { label: "RSS",          href: "/rss" },
] as const;

/**
 * Site footer.
 * Accessibility: contentinfo landmark, aria-label on footer nav.
 */
export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="px-6 py-14 border-t-2 border-[#1C1917]/8 bg-[#FAFAF7] z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Brand */}
        <div className="-rotate-1 max-w-[220px]">
          <Link href="/" aria-label="badui.dev home" className="flex items-center gap-2.5 mb-3 w-fit hover:opacity-75 transition-opacity">
            <Image
              src="/baboon.png"
              alt=""
              aria-hidden
              width={28}
              height={28}
              className="object-contain border border-[#1C1917]/16 bg-[#F0EFE9] p-0.5 sketchy-border"
            />
            <span className="font-black text-base">badui.dev</span>
          </Link>
          <p className="text-sm text-[#1C1917]/38 font-medium leading-relaxed">
            Avoid everything you see here.<br />Your users will thank you.
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-14 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-bold text-[#1C1917]/42 nav-link hover:text-[#1C1917] transition-colors focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2"
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer", "aria-label": `${l.label} (opens in new tab)` } : {})}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      {/* Divider squiggle */}
      <div className="max-w-7xl mx-auto my-10" aria-hidden>
        <svg className="w-full text-[#1C1917]/8" viewBox="0 0 1200 14" fill="none" preserveAspectRatio="none">
          <path d="M0 7 C200 1,400 13,600 7 S900 1,1100 7 S1150 11,1200 7"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-[#1C1917]/28 font-medium">
          © 2026 badui.dev · the baboon of design · CC BY 4.0
        </p>
        <p className="text-xs text-[#1C1917]/22 font-medium">
          Built with Next.js 15 · Tailwind CSS v4
        </p>
      </div>
    </footer>
  );
}
