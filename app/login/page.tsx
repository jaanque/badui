import Link from "next/link";
import { login } from "@/lib/supabase/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-4">

      {/* Paper grain */}
      <div aria-hidden className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E\")" }} />

      <div className="w-full max-w-md">

        {/* Logo link */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-10 hover:opacity-70 transition-opacity">
          <span className="font-black text-xl tracking-tight text-[#1C1917]">← badui.dev</span>
        </Link>

        <div className="border-[3px] border-[#1C1917]/35 p-8 md:p-10 bg-[#FAFAF7] shadow-[6px_6px_0_rgba(28,25,23,0.12)] -rotate-[0.3deg] sketchy-border-3">

          <h1 className="text-3xl font-black tracking-tight mb-1">Welcome back.</h1>
          <p className="text-sm text-[#1C1917]/65 font-medium mb-8">Sign in to your badui.dev account.</p>

          {/* Error */}
          {error && (
            <div role="alert" className="mb-6 border-2 border-[#1C1917]/25 bg-[#F0EFE9] px-4 py-3 text-sm font-bold text-[#1C1917]/80 sketchy-border">
              {decodeURIComponent(error)}
            </div>
          )}

          <form action={login} className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-[#1C1917]/55 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full border-2 border-[#1C1917]/20 bg-white px-4 py-3 text-sm font-medium text-[#1C1917] placeholder:text-[#1C1917]/30 focus-visible:outline-none focus-visible:border-[#E9A319] focus-visible:ring-2 focus-visible:ring-[#E9A319]/30 sketchy-border-2 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-xs font-black uppercase tracking-widest text-[#1C1917]/55">
                  Password
                </label>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full border-2 border-[#1C1917]/20 bg-white px-4 py-3 text-sm font-medium text-[#1C1917] placeholder:text-[#1C1917]/30 focus-visible:outline-none focus-visible:border-[#E9A319] focus-visible:ring-2 focus-visible:ring-[#E9A319]/30 sketchy-border-2 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-12 w-full text-base font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/50 shadow-[3px_3px_0_rgba(28,25,23,0.18)] hover:shadow-none hover:translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm font-medium text-[#1C1917]/55">
            No account?{" "}
            <Link href="/register" className="font-black text-[#1C1917] nav-link hover:text-[#1C1917] transition-colors">
              Create one →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
