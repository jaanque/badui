import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { MarqueeTicker } from "@/components/home/MarqueeTicker";
import { ImpactStats } from "@/components/home/ImpactStats";
import { Categories } from "@/components/home/Categories";
import { FilteredPatterns } from "@/components/home/FilteredPatterns";
import { ImprovementGuides } from "@/components/home/ImprovementGuides";
import { ToolsAndResources } from "@/components/home/ToolsAndResources";
import { HallOfShame } from "@/components/home/HallOfShame";
import { ContributeCTA } from "@/components/home/ContributeCTA";
import { Footer } from "@/components/home/Footer";
import { ScrollDistort } from "@/components/ui/ScrollDistort";

/**
 * Home page — 10-section flow
 *  1.  Hero             → headline + stats
 *  2.  MarqueeTicker    → decorative
 *  3.  ImpactStats      → dark stats band (why bad UI costs money)
 *  4.  Anatomy          → annotated bad-UI diagram (dark)
 *  5.  Categories       → 12 pattern categories
 *  6.  FilteredPatterns → filterable antipattern library
 *  7.  ImprovementGuides→ 6 WCAG/Nielsen quick guides
 *  8.  ToolsAndResources→ 9 curated free tools
 *  9.  HallOfShame      → 3 documented patterns
 *  10. ContributeCTA    → submit a pattern
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
          <ImpactStats />
          <Categories />
          <FilteredPatterns />
          <ImprovementGuides />
          <ToolsAndResources />
          <HallOfShame />
          <ContributeCTA />
        </main>
      </ScrollDistort>

      <Footer />
    </>
  );
}
