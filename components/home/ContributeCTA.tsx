import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { MagnetButton } from "@/components/ui/MagnetButton";

function SketchyBloom({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-8 text-[#E9A319]">
        <path d="M12 2C12 2 12.5 8 15 10.5C17.5 13 22 12 22 12C22 12 17.5 11 15 8.5C12.5 6 12 2 12 2Z" />
        <path d="M12 22C12 22 11.5 16 9 13.5C6.5 11 2 12 2 12C2 12 6.5 13 9 15.5C11.5 18 12 22 12 22Z" />
      </svg>
    </div>
  );
}

export function ContributeCTA() {
  return (
    <section aria-labelledby="cta-heading" className="px-6 py-20 z-10 bg-[#FAFAF7] overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <SketchyBloom className="absolute -top-10 -left-10 rotate-12" />
        <SketchyBloom className="absolute -bottom-10 -right-10 -rotate-12" />

        <div className="relative border-4 border-[#1C1917] p-12 md:p-24 bg-[#F0EFE9] shadow-[12px_12px_0_#1C1917] sketchy-border">
          {/* Inner decorative frame */}
          <div className="absolute inset-4 border-2 border-dashed border-[#1C1917]/10 pointer-events-none sketchy-border-2" />

          {/* Icon Badge */}
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 flex items-center justify-center border-2 border-[#1C1917] bg-[#FAFAF7] rotate-3 shadow-[4px_4px_0_#1C1917] sketchy-border">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#1C1917]" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h2 id="cta-heading" className="text-4xl md:text-6xl font-black mb-6 text-[#1C1917] tracking-tighter">
            Spotted a <span className="text-[#E9A319] italic font-serif">bad</span> pattern?
          </h2>
          
          <p className="text-xl text-[#1C1917]/60 font-semibold mb-3 max-w-lg mx-auto leading-relaxed">
            Every entry is reviewed by our board, standardized for impact, and published to help 100k+ developers.
          </p>

          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1C1917]/30 mb-12">
            Open Source • Community Powered • CC BY 4.0
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagnetButton href="/submit"
              className="group inline-flex items-center justify-center gap-3 h-16 px-10 text-lg font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917] shadow-[4px_4px_0_#1C1917] hover:shadow-none hover:translate-y-1 transition-all sketchy-border">
              Report Pattern <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
            </MagnetButton>
            
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 h-16 px-10 text-lg font-black bg-white text-[#1C1917] border-2 border-[#1C1917] shadow-[4px_4px_0_#1C1917] hover:shadow-none hover:translate-y-1 transition-all sketchy-border-2">
              <ExternalLink className="size-5" strokeWidth={2.5} /> GitHub Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
