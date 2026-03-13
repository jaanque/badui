"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagnetButton } from "@/components/ui/MagnetButton";

function SketchyBloom({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#E9A319] animate-pulse">
        <path d="M12 2C12 2 12.5 8 15 10.5C17.5 13 22 12 22 12C22 12 17.5 11 15 8.5C12.5 6 12 2 12 2Z" />
        <path d="M12 22C12 22 11.5 16 9 13.5C6.5 11 2 12 2 12C2 12 6.5 13 9 15.5C11.5 18 12 22 12 22Z" />
      </svg>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let animationFrameId: number;
    const updatePos = () => {
      setMousePos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.1,
        y: prev.y + (targetPos.y - prev.y) * 0.1,
      }));
      animationFrameId = requestAnimationFrame(updatePos);
    };
    animationFrameId = requestAnimationFrame(updatePos);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setTargetPos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-heading"
      className="relative w-full pt-16 pb-20 overflow-hidden bg-[#FAFAF7]"
    >
      {/* Decorative full-width light leaks */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E9A319]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1C1917]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Reactive Spotlight Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(233, 163, 25, 0.12), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl relative">

            <div
              role="status"
              className="animate-fade-up mb-8 inline-flex items-center gap-3 border-2 border-[#1C1917]/10 bg-[#F0EFE9] px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-[#1C1917]/60 shadow-[4px_4px_0_rgba(28,25,23,0.05)] sketchy-border"
            >
              <Sparkles className="size-3.5 text-[#E9A319]" fill="currentColor" />
              Over 200 Antipatterns Documented
            </div>

            <h1
              id="hero-heading"
              className="animate-fade-up-delay-1 flex flex-col items-center text-[clamp(3.5rem,8vw,8.5rem)] font-black tracking-tighter leading-none text-[#1C1917] select-none"
            >
              <div className="flex items-center gap-4">
                <span className="inline-block hover:rotate-2 transition-transform duration-500">The</span>
                <span className="inline-block relative">
                  UI
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 text-[#E9A319]/80" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M2 8 C 30 2, 70 12, 98 4" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" className="animate-draw" />
                  </svg>
                </span>
              </div>
              
              <div className="relative flex flex-col items-end -mt-[0.05em]">
                <span className="inline-block -rotate-1 hover:rotate-0 transition-transform duration-500 text-[#1C1917]/90 italic font-medium font-serif px-2">
                  Antipattern
                </span>
                <span className="text-[0.38em] tracking-normal -mt-[0.3em] mr-4 hover:rotate-2 transition-transform duration-500">
                  Library.
                </span>
              </div>
            </h1>

            <p className="animate-fade-up-delay-2 mt-8 text-xl md:text-2xl font-semibold text-[#1C1917]/65 max-w-2xl mx-auto leading-[1.5]">
              Stop shipping broken experiences. Our research-backed catalog
              exposes the <span className="text-[#1C1917] font-black">dark patterns</span> and <span className="text-[#1C1917] font-black underline decoration-wavy decoration-[#E9A319]/40 underline-offset-4">accessibility fails</span> killing your conversion rate.
            </p>

            <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap gap-5 justify-center">
              <MagnetButton
                href="/library"
                className="group inline-flex items-center justify-center gap-3 h-16 px-10 text-lg font-black bg-[#1C1917] text-[#FAFAF7] border-2 border-[#1C1917] shadow-[6px_6px_0_rgba(233,163,25,0.4)] hover:shadow-none hover:translate-y-1 transition-all sketchy-border"
              >
                Explore Archive
                <ArrowRight className="size-5 group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
              </MagnetButton>

              <Link
                href="/categories"
                className="group inline-flex items-center justify-center gap-3 h-16 px-10 text-lg font-black bg-white text-[#1C1917] border-2 border-[#1C1917]/20 shadow-[6px_6px_0_rgba(28,25,23,0.06)] hover:shadow-none hover:translate-y-1 transition-all sketchy-border-2"
              >
                Browse Taxonomy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
