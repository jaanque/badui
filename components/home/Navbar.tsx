import Link from "next/link";
import Image from "next/image";
import { NavbarAuth } from "@/components/home/NavbarAuth";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#1C1917]/10 bg-[#FAFAF7]/96 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 h-[62px] flex items-center justify-between gap-6"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="badui.dev – home"
          className="flex items-center gap-2.5 hover-wobble transition-opacity hover:opacity-75 shrink-0"
        >
          <Image
            src="/baboon.png"
            alt=""
            aria-hidden="true"
            width={34}
            height={34}
            className="object-contain border-2 border-[#1C1917]/18 bg-[#F0EFE9] p-0.5 sketchy-border"
          />
          <span className="font-black text-[1.2rem] tracking-tight">badui.dev</span>
        </Link>

        {/* Primary links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-bold text-[#1C1917]/70">
          <Link href="/categories"   className="nav-link hover:text-[#1C1917] transition-colors">Categories</Link>
          <Link href="/antipatterns" className="nav-link hover:text-[#1C1917] transition-colors">Library</Link>
          <Link href="/guides"       className="nav-link hover:text-[#1C1917] transition-colors">Guides</Link>
          <Link href="/about"        className="nav-link hover:text-[#1C1917] transition-colors">Mission</Link>
        </div>

        {/* Auth — client component handles session state */}
        <NavbarAuth />
      </nav>
    </header>
  );
}
