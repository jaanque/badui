import Link from "next/link";
import { register } from "@/lib/supabase/actions";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  const { error, success } = await searchParams;

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-4">

      <div aria-hidden className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E\")" }} />

      <div className="w-full max-w-md">

        <Link href="/" className="flex items-center justify-center gap-2 mb-10 hover:opacity-70 transition-opacity">
          <span className="font-black text-xl tracking-tight text-[#1C1917]">← badui.dev</span>
        </Link>

        <div className="border-[3px] border-[#1C1917]/35 p-8 md:p-10 bg-[#FAFAF7] shadow-[6px_6px_0_rgba(28,25,23,0.12)] rotate-[0.3deg] sketchy-border-3">

          <h1 className="text-3xl font-black tracking-tight mb-1">Join badui.dev</h1>
          <p className="text-sm text-[#1C1917]/65 font-medium mb-8">Create a free account to submit and track antipatterns.</p>

          {/* Success */}
          {success && (
            <div role="status" className="mb-6 border-2 border-[#E9A319]/60 bg-[#E9A319]/10 px-4 py-3 text-sm font-bold text-[#1C1917]/80 sketchy-border">
              ✓ Check your email for a confirmation link.
            </div>
          )}

          {/* Error */}
          {error && (
            <div role="alert" className="mb-6 border-2 border-[#1C1917]/25 bg-[#F0EFE9] px-4 py-3 text-sm font-bold text-[#1C1917]/80 sketchy-border">
              {decodeURIComponent(error)}
            </div>
          )}

          {!success && (
            <form action={register} className="flex flex-col gap-5">
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
                <label htmlFor="password" className="block text-xs font-black uppercase tracking-widest text-[#1C1917]/55 mb-2">
                  Password <span className="normal-case tracking-normal font-medium text-[#1C1917]/38">(min. 8 characters)</span>
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className="w-full border-2 border-[#1C1917]/20 bg-white px-4 py-3 text-sm font-medium text-[#1C1917] placeholder:text-[#1C1917]/30 focus-visible:outline-none focus-visible:border-[#E9A319] focus-visible:ring-2 focus-visible:ring-[#E9A319]/30 sketchy-border-2 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 h-12 w-full text-base font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/50 shadow-[3px_3px_0_rgba(28,25,23,0.18)] hover:shadow-none hover:translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border"
              >
                Create account
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-sm font-medium text-[#1C1917]/55">
            Already have an account?{" "}
            <Link href="/login" className="font-black text-[#1C1917] nav-link transition-colors">
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
