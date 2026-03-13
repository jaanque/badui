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

function TapeDecoration({ corner = "top-left", rotation = 0 }: { corner?: "top-left" | "top-right", rotation?: number }) {
  const baseRotation = corner === "top-left" ? -15 : 15;
  const finalRotation = baseRotation + rotation;
  
  const styles = {
    "top-left": "-top-3 -left-4",
    "top-right": "-top-3 -right-4"
  };

  return (
    <div 
      className={`absolute w-16 h-8 bg-[#E9A319]/20 backdrop-blur-[1px] border border-[#1C1917]/5 z-20 pointer-events-none transition-transform group-hover:scale-110 ${styles[corner]}`} 
      style={{ 
        transform: `rotate(${finalRotation}deg)`,
        clipPath: "polygon(5% 0%, 95% 2%, 100% 50%, 92% 98%, 8% 100%, 0% 55%, 4% 10%)" 
      }} 
    />
  );
}

export function ToolsAndResources() {
  return (
    <section aria-labelledby="tools-heading" className="px-6 py-24 z-10 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E9A319] mb-4">Toolkit</p>
          <h2 id="tools-heading" className="text-4xl md:text-6xl font-black text-[#1C1917] tracking-tight mb-6">
            Build Better. <span className="text-[#1C1917]/30">Test Better.</span>
          </h2>
          <p className="text-xl text-[#1C1917]/60 font-medium max-w-2xl leading-relaxed">
            A hand-picked collection of free tools that our editors use every day to find and document antipatterns.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" role="list">
          {TOOLS.map((tool, i) => (
            <article key={tool.name} role="listitem" className="relative group">
              <TapeDecoration corner={i % 2 === 0 ? "top-left" : "top-right"} />
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-white border-2 border-[#1C1917]/10 p-10 hover:border-[#E9A319] hover:-rotate-1 transition-all duration-300 shadow-[6px_6px_0_rgba(28,25,23,0.02)] hover:shadow-[10px_10px_0_rgba(233,163,25,0.1)] outline-none sketchy-border"
              >
                {/* Category badge */}
                <span className={`inline-block text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 border-2 mb-8 ${CATEGORY_COLORS[tool.category] ?? CATEGORY_COLORS["Standards"]} sketchy-border-2`}>
                  {tool.category}
                </span>

                {/* Tool name */}
                <h3 className="text-xl font-black text-[#1C1917] mb-4 group-hover:text-[#E9A319] transition-colors leading-tight">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#1C1917]/60 font-medium leading-relaxed">
                  {tool.desc}
                </p>

                {/* External link indicator */}
                <div className="mt-8 pt-6 border-t-2 border-dashed border-[#1C1917]/5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1C1917]/20 group-hover:text-[#1C1917] transition-colors">
                  Open Source Project ↗
                </div>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
