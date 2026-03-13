import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { MarqueeTicker } from "@/components/home/MarqueeTicker";
import { ImpactStats } from "@/components/home/ImpactStats";
import { FilteredPatterns } from "@/components/home/FilteredPatterns";
import { Categories } from "@/components/home/Categories";
import { ImprovementGuides } from "@/components/home/ImprovementGuides";
import { ToolsAndResources } from "@/components/home/ToolsAndResources";
import { ContributeCTA } from "@/components/home/ContributeCTA";
import { Footer } from "@/components/home/Footer";
import { ScrollDistort } from "@/components/ui/ScrollDistort";

/**
 * Home page — 8-section flow
 *  1. Hero              → headline + stats
 *  2. MarqueeTicker     → decorative ticker
 *  3. ImpactStats       → why bad UI costs money (dark)
 *  4. FilteredPatterns  → searchable antipattern library
 *  5. Categories        → 12 pattern categories
 *  6. ImprovementGuides → WCAG/Nielsen quick guides
 *  7. ToolsAndResources → curated free tools
 *  8. ContributeCTA     → submit a pattern
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <ScrollDistort maxSkew={4} threshold={9.0} stiffness={0.14} damping={0.72}>
        <main
          id="main-content"
          className="flex flex-col overflow-x-hidden bg-[#FAFAF7] text-[#1C1917]"
        >
          {/* Paper grain — decorative */}
          <div
            aria-hidden
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E\")",
            }}
          />

          <Hero />
          <MarqueeTicker />
          <div id="impact"><ImpactStats /></div>
          <div id="library"><FilteredPatterns /></div>
          <div id="categories"><Categories /></div>
          <div id="guides"><ImprovementGuides /></div>
          <ToolsAndResources />
          <ContributeCTA />
        </main>
      </ScrollDistort>

      <Footer />
    </>
  );
}
