import { createClient } from "@/lib/supabase/server";
import { redirect }     from "next/navigation";
import { logout }       from "@/lib/supabase/actions";
import { Navbar }       from "@/components/home/Navbar";
import { Footer }       from "@/components/home/Footer";
import { ProfileForm }  from "@/components/profile/ProfileForm";
import { Settings, User as UserIcon, Shield, Package, ArrowRight } from "lucide-react";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch detailed profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const displayName = profile?.display_name || user.email?.split("@")[0] || "User";

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full py-20 border-b-2 border-[#1C1917]/5 overflow-hidden">
        {/* Paper grain */}
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 border border-[#1C1917]/22 bg-[#F0EFE9] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#1C1917]/60">
                User Dashboard
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-[#1C1917] tracking-tighter -rotate-1">
                Hello, <span className="text-[#E9A319]">{displayName}</span>.
              </h1>
              <p className="text-xl font-semibold text-[#1C1917]/60 max-w-xl">
                Manage your credentials, track your reports, and customize how the community sees you.
              </p>
            </div>

            <div className="flex gap-4">
               <div className="border-2 border-[#1C1917]/10 p-4 bg-white shadow-[4px_4px_0_rgba(28,25,23,0.04)] sketchy-border text-center min-w-[120px]">
                  <p className="text-[10px] font-black uppercase text-[#1C1917]/40">Reports</p>
                  <p className="text-2xl font-black text-[#1C1917]">0</p>
               </div>
               <div className="border-2 border-[#1C1917]/10 p-4 bg-white shadow-[4px_4px_0_rgba(28,25,23,0.04)] sketchy-border text-center min-w-[120px]">
                  <p className="text-[10px] font-black uppercase text-[#1C1917]/40">Kudos</p>
                  <p className="text-2xl font-black text-[#E9A319]">12</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="space-y-8">
            <nav className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#1C1917] text-white border-2 border-[#1C1917] shadow-[4px_4px_0_rgba(233,163,25,1)] transition-all sketchy-border cursor-pointer">
                <UserIcon size={18} />
                <span className="font-black text-sm uppercase tracking-wide">Public Profile</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-[#F0EFE9] transition-all cursor-not-allowed grayscale">
                <Shield size={18} />
                <span className="font-bold text-sm uppercase tracking-wide">Security</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 text-[#1C1917]/60 hover:text-[#1C1917] hover:bg-[#F0EFE9] transition-all cursor-not-allowed grayscale">
                <Package size={18} />
                <span className="font-bold text-sm uppercase tracking-wide">Contributions</span>
              </div>
            </nav>

            <div className="border-t-2 border-dashed border-[#1C1917]/10 pt-8">
               <form action={logout}>
                <button
                  type="submit"
                  className="group flex items-center justify-between w-full p-4 border-2 border-red-500/30 text-red-500/70 hover:text-red-600 hover:bg-red-500/5 transition-all sketchy-border-2"
                >
                  <span className="font-black text-sm uppercase tracking-widest">Sign out</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </aside>

          {/* Main Form Content */}
          <section className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-10 flex items-center justify-center bg-[#E9A319] text-[#1C1917] border-2 border-[#1C1917] rotate-3 shadow-[3px_3px_0_rgba(28,25,23,1)] sketchy-border font-black text-lg">
                   {(profile?.username || user.email || "?")[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#1C1917]">General Settings</h2>
                  <p className="text-sm font-semibold text-[#1C1917]/50">This information will be visible to other members of badui.dev.</p>
                </div>
              </div>

              <div className="h-px w-full bg-[#1C1917]/10" />

              <ProfileForm profile={{
                id: user.id,
                username: profile?.username || null,
                display_name: profile?.display_name || null,
                bio: profile?.bio || null,
                avatar_url: profile?.avatar_url || null,
                website: profile?.website || null
              }} />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
