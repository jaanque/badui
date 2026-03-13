"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { logout } from "@/lib/supabase/actions";
import type { User } from "@supabase/supabase-js";

export function NavbarAuth() {
  const [user, setUser]       = useState<User | null>(null);
  const [open, setOpen]       = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef           = useRef<HTMLDivElement>(null);
  const supabase              = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (loading) {
    return <div className="h-7 w-20 bg-[#1C1917]/8 animate-pulse" aria-hidden />;
  }

  /* ── Logged OUT ── */
  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm font-black text-[#1C1917]/70 nav-link hover:text-[#1C1917] transition-colors focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center h-[34px] px-4 text-sm font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/50 shadow-[2px_2px_0_rgba(28,25,23,0.22)] hover:shadow-none hover:translate-y-px focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border whitespace-nowrap"
        >
          Register
        </Link>
      </div>
    );
  }

  /* ── Logged IN ── */
  const initials = (user.email ?? "?")[0].toUpperCase();

  return (
    <div className="flex items-center gap-3">

      {/* Upgrade to Pro — inline navbar button */}
      <Link
        href="/pro"
        className="hidden sm:inline-flex items-center gap-2 h-[34px] px-4 text-sm font-black text-[#1C1917] bg-[#E9A319] border-2 border-[#1C1917]/50 shadow-[2px_2px_0_rgba(28,25,23,0.22)] hover:shadow-none hover:translate-y-px focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border whitespace-nowrap"
      >
        <span aria-hidden className="text-[#1C1917]">⚡</span>
        Upgrade
        <span className="text-[9px] font-black uppercase tracking-widest bg-[#1C1917] text-[#E9A319] px-1.5 py-0.5 leading-none">
          PRO
        </span>
      </Link>

      {/* Avatar + dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Open profile menu"
          className="flex items-center gap-2.5 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 outline-none group"
        >
          <span className="w-8 h-8 flex items-center justify-center text-xs font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/45 group-hover:ring-2 group-hover:ring-[#E9A319]/60 group-hover:ring-offset-1 group-hover:opacity-90 transition-all sketchy-border">
            {initials}
          </span>
          <span className="hidden sm:block text-sm font-black text-[#1C1917]/75 max-w-[120px] truncate">
            {user.email}
          </span>
          <svg className={`size-3.5 text-[#1C1917]/40 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div
            role="menu"
            className="absolute right-0 top-full mt-2 w-48 bg-[#FAFAF7] border-2 border-[#1C1917]/18 shadow-[4px_4px_0_rgba(28,25,23,0.12)] z-50 sketchy-border-2"
          >
            <div className="px-4 py-3 border-b border-[#1C1917]/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/40">Signed in as</p>
              <p className="text-xs font-bold text-[#1C1917]/80 truncate mt-0.5">{user.email}</p>
            </div>
            <Link
              href="/profile"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1C1917]/72 hover:bg-[#F0EFE9] hover:text-[#1C1917] transition-colors focus-visible:outline-none focus-visible:bg-[#F0EFE9]"
            >
              Profile
            </Link>
            <form action={logout}>
              <button
                type="submit"
                role="menuitem"
                className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#1C1917]/72 hover:bg-[#F0EFE9] hover:text-[#1C1917] transition-colors border-t border-[#1C1917]/8 focus-visible:outline-none focus-visible:bg-[#F0EFE9]"
              >
                Sign out
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
