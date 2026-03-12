import { createClient } from "@/lib/supabase/server";
import { redirect }     from "next/navigation";
import { logout }       from "@/lib/supabase/actions";
import { Navbar }       from "@/components/home/Navbar";
import { Footer }       from "@/components/home/Footer";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-62px)] bg-[#FAFAF7] flex items-center justify-center px-6 py-20">
        {/* Paper grain */}
        <div aria-hidden className="fixed inset-0 pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E\")" }} />

        <div className="w-full max-w-md">
          <div className="border-[3px] border-[#1C1917]/35 p-8 md:p-10 bg-[#FAFAF7] shadow-[6px_6px_0_rgba(28,25,23,0.12)] -rotate-[0.3deg] sketchy-border-3">

            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 flex items-center justify-center text-2xl font-black bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917]/45 sketchy-border">
                {(user.email ?? "?")[0].toUpperCase()}
              </div>
              <div>
                <h1 className="text-xl font-black">My Profile</h1>
                <p className="text-sm text-[#1C1917]/65 font-medium mt-0.5 truncate max-w-[220px]">{user.email}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="border-t-2 border-dashed border-[#1C1917]/12 pt-6 space-y-4 mb-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/40 mb-1">User ID</p>
                <p className="text-xs font-mono text-[#1C1917]/60 break-all">{user.id}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/40 mb-1">Member since</p>
                <p className="text-sm font-medium text-[#1C1917]/70">
                  {new Date(user.created_at).toLocaleDateString("en-GB", {
                    day: "numeric", month: "long", year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Sign out */}
            <form action={logout}>
              <button
                type="submit"
                className="w-full h-11 text-sm font-black border-2 border-[#1C1917]/25 text-[#1C1917]/70 hover:bg-[#F0EFE9] hover:text-[#1C1917] focus-visible:ring-4 focus-visible:ring-[#E9A319] focus-visible:ring-offset-2 transition-all sketchy-border-2"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
