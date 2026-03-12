/**
 * Tools & Resources — a curated grid of free tools every UI dev/designer should have.
 * Each card links out to the tool and shows its category and what it does in one line.
 * Gives the site immediate practical value beyond documentation.
 */

const TOOLS = [
  {
    name: "WebAIM Contrast Checker",
    category: "Accessibility",
    desc: "Check foreground/background colour contrast against WCAG 2.1 AA & AAA in real time.",
    href: "https://webaim.org/resources/contrastchecker/",
    tilt: "-rotate-1",
  },
  {
    name: "axe DevTools",
    category: "Automated testing",
    desc: "Browser extension that surfaces WCAG violations on any page with zero setup.",
    href: "https://www.deque.com/axe/devtools/",
    tilt: "rotate-1",
  },
  {
    name: "WAVE Evaluation Tool",
    category: "Accessibility",
    desc: "Visual accessibility feedback injected directly into the page you're testing.",
    href: "https://wave.webaim.org/",
    tilt: "rotate-2",
  },
  {
    name: "Lighthouse",
    category: "Performance + A11y",
    desc: "Built into Chrome DevTools. Scores accessibility, SEO, performance in one report.",
    href: "https://developer.chrome.com/docs/lighthouse/overview/",
    tilt: "-rotate-2",
  },
  {
    name: "Colour & Contrast",
    category: "Design",
    desc: "Visualise your entire palette's contrast ratios simultaneously — great for dark modes.",
    href: "https://colourcontrast.cc/",
    tilt: "rotate-1",
  },
  {
    name: "Who Can Use",
    category: "Accessibility",
    desc: "Shows how people with different visual impairments perceive your colour combination.",
    href: "https://www.whocanuse.com/",
    tilt: "-rotate-1",
  },
  {
    name: "WCAG 2.1 Quick Reference",
    category: "Standards",
    desc: "The official W3C success criteria, filterable by level (A, AA, AAA) and guideline.",
    href: "https://www.w3.org/WAI/WCAG21/quickref/",
    tilt: "rotate-2",
  },
  {
    name: "Nielsen Norman Group",
    category: "Research",
    desc: "The most cited UX research resource. 10 usability heuristics + thousands of articles.",
    href: "https://www.nngroup.com/",
    tilt: "-rotate-1",
  },
  {
    name: "Baymard Institute",
    category: "Research",
    desc: "600+ UX guidelines backed by 245,000+ hours of e-commerce usability research.",
    href: "https://baymard.com/",
    tilt: "rotate-1",
  },
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  "Accessibility":       "bg-[#E9A319]/20 text-[#1C1917]/70 border-[#E9A319]/40",
  "Automated testing":   "bg-[#F0EFE9] text-[#1C1917]/60 border-[#1C1917]/12",
  "Performance + A11y":  "bg-[#F0EFE9] text-[#1C1917]/60 border-[#1C1917]/12",
  "Design":              "bg-[#F0EFE9] text-[#1C1917]/60 border-[#1C1917]/12",
  "Standards":           "bg-[#F0EFE9] text-[#1C1917]/60 border-[#1C1917]/12",
  "Research":            "bg-[#F0EFE9] text-[#1C1917]/60 border-[#1C1917]/12",
};

export function ToolsAndResources() {
  return (
    <section aria-labelledby="tools-heading" className="px-6 py-24 z-10 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1917]/52 mb-2">Free tools</p>
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-black rotate-1 inline-block mb-4">
            Build Better. Test Better.
          </h2>
          <p className="text-base text-[#1C1917]/72 font-medium max-w-xl">
            The exact tools our editors use to find, validate, and document antipatterns.
            All free.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1917]/8" role="list">
          {TOOLS.map((tool) => (
            <article key={tool.name} role="listitem" className="bg-[#FAFAF7]">
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tool.name} — ${tool.category} (opens in new tab)`}
                className="group flex flex-col h-full p-7 hover:bg-[#F0EFE9] focus-visible:bg-[#F0EFE9] focus-visible:ring-inset focus-visible:ring-4 focus-visible:ring-[#E9A319] transition-colors outline-none"
              >
                {/* Category badge */}
                <span className={`self-start text-[10px] font-black uppercase tracking-widest px-2 py-0.5 border mb-4 ${CATEGORY_COLORS[tool.category] ?? CATEGORY_COLORS["Standards"]}`}>
                  {tool.category}
                </span>

                {/* Tool name */}
                <h3 className="text-base font-black mb-2 group-hover:text-[#1C1917] group-hover:underline group-hover:decoration-wavy group-hover:decoration-[#E9A319] group-hover:underline-offset-3 transition-all flex-grow-0">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1C1917]/72 font-medium leading-relaxed flex-grow">
                  {tool.desc}
                </p>

                {/* External link indicator */}
                <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-[#1C1917]/35 group-hover:text-[#E9A319] transition-colors">
                  Open tool ↗
                </p>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
