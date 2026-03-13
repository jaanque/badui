import Link from "next/link";
import Image from "next/image";
import { NavbarAuth } from "@/components/home/NavbarAuth";

function HandDrawnUnderline() {
  return (
    <svg 
      className="absolute -bottom-1 left-0 w-full h-1.5 text-[#E9A319] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
      viewBox="0 0 100 10" 
      preserveAspectRatio="none"
    >
      <path 
        d="M2 5 Q 50 1, 98 5" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        className="animate-draw"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#1C1917]/10 bg-[#FAFAF7]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between gap-6"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="badui.dev – home"
          className="relative group flex items-center gap-3 shrink-0"
        >
          <div className="relative">
            <Image
              src="/baboon.png"
              alt=""
              aria-hidden="true"
              width={38}
              height={38}
              className="object-contain border-2 border-[#1C1917] bg-[#F0EFE9] p-1 shadow-[2px_2px_0_rgba(28,25,23,0.1)] sketchy-border-2 transition-all group-hover:rotate-6 group-hover:scale-110"
            />
          </div>
          <div className="relative pt-1">
            <span className="font-black text-[1.4rem] tracking-tighter text-[#1C1917] transition-colors group-hover:text-[#E9A319]">badui.dev</span>
            <HandDrawnUnderline />
          </div>
        </Link>

        {/* Primary links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-black uppercase tracking-widest text-[#1C1917]/50">
          <Link href="/#categories" className="relative group hover:text-[#1C1917] transition-all py-1">
            Categories
            <HandDrawnUnderline />
          </Link>
          <Link href="/#library" className="relative group hover:text-[#1C1917] transition-all py-1">
            Library
            <HandDrawnUnderline />
          </Link>
          <Link href="/#guides" className="relative group hover:text-[#1C1917] transition-all py-1">
            Guides
            <HandDrawnUnderline />
          </Link>
          <Link href="/#impact" className="relative group hover:text-[#1C1917] transition-all py-1">
            Impact
            <HandDrawnUnderline />
          </Link>
        </div>

        {/* Auth — client component handles session state */}
        <NavbarAuth />
      </nav>
    </header>
  );
}
