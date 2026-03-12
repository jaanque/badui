import Link from "next/link";
import Image from "next/image";
import { Trash2, ExternalLink } from "lucide-react";

export function ContributeCTA() {
  return (
    <section aria-labelledby="cta-heading" className="px-6 py-24 z-10 bg-[#FAFAF7]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-[3px] border-[#1C1917]/32 p-10 md:p-16 bg-[#F0EFE9] shadow-[7px_7px_0_rgba(28,25,23,0.09)] -rotate-[0.4deg] sketchy-border-3">
          <div className="flex justify-center mb-6" aria-hidden>
            <Image src="/baboon.png" alt="" width={56} height={56}
              className="object-contain border-2 border-[#1C1917]/18 bg-[#FAFAF7] p-0.5 sketchy-border animate-float" />
          </div>
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-black mb-4">Found an antipattern we haven't documented?</h2>
          <p className="text-lg text-[#1C1917]/55 font-medium mb-3 max-w-sm mx-auto">
            Add it to the library. Your contribution helps teams ship better products.
          </p>
          <p className="text-xs text-[#1C1917]/35 font-bold uppercase tracking-widest mb-10">
            Open source · CC BY 4.0 · No login required
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit"
              aria-label="Submit a UI antipattern to the open-source library"
              className="group inline-flex items-center justify-center gap-2 h-14 px-9 text-lg font-black bg-[#E9A319] text-[#1C1917] border-[3px] border-[#1C1917]/55 shadow-[4px_4px_0_rgba(28,25,23,0.18)] hover:shadow-none hover:translate-y-1 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border">
              <Trash2 className="size-5" strokeWidth={2.5} aria-hidden />Submit a pattern
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer"
              aria-label="View the badui.dev source code on GitHub (opens in new tab)"
              className="group inline-flex items-center justify-center gap-2 h-14 px-9 text-lg font-black bg-transparent hover:bg-[#1C1917]/[0.04] text-[#1C1917] border-[3px] border-[#1C1917]/25 shadow-[4px_4px_0_rgba(28,25,23,0.08)] hover:shadow-none hover:translate-y-1 focus-visible:ring-4 focus-visible:ring-[#1C1917]/35 focus-visible:ring-offset-2 transition-all sketchy-border-2">
              <ExternalLink className="size-4" strokeWidth={2.5} aria-hidden />View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
