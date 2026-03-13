import Link from "next/link";
import { ArrowLeft, AlertTriangle, CheckCircle, Code2, ExternalLink, Accessibility, MousePointer2 } from "lucide-react";
import { createClient, createStaticClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import type { DbAntipattern } from "@/components/home/data";

/* ─── Impact Level Data ────────────────────────────────────── */

const IMPACT_CONFIG: Record<string, { label: string; color: string; bg: string; description: string }> = {
  Critical: {
    label: "Critical",
    color: "text-[#1C1917]",
    bg: "bg-[#E9A319]",
    description: "Severe usability roadblock. High risk of immediate abandonment.",
  },
  High: {
    label: "High Impact",
    color: "text-[#1C1917]",
    bg: "bg-[#E9A319]/70",
    description: "Major friction point. Significantly degrades user satisfaction.",
  },
  Medium: {
    label: "Medium Impact",
    color: "text-[#1C1917]/80",
    bg: "bg-[#F0EFE9]",
    description: "Consistent annoyance. Slows down users and erodes trust.",
  },
  Low: {
    label: "Low Impact",
    color: "text-[#1C1917]/60",
    bg: "bg-transparent",
    description: "Minor polish issue. Mostly aesthetic or edge-case friction.",
  },
};

/* ─── Page ────────────────────────────────────────────────────────────── */

export default async function AntipatternPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: pattern } = await supabase
    .from("antipatterns")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!pattern) notFound();

  const {
    title,
    category,
    impact,
    wcag_refs = [],
    nielsen_refs = [],
    why,
    stat_line,
    bad_description,
    good_description,
    code_fix,
    business_impact,
    pro_tip,
    user_story
  } = pattern as DbAntipattern;

  const impactConfig = IMPACT_CONFIG[impact] ?? IMPACT_CONFIG.Medium;

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1917] font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Texture Layer */}
      <div aria-hidden className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      
      {/* Grid Pattern Layer */}
      <div aria-hidden className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: "radial-gradient(#1C1917 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />

      {/* Slim header */}
      <header className="sticky top-0 z-50 border-b-2 border-[#1C1917]/10 bg-[#FAFAF7]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-[54px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-black text-[#1C1917]/50 hover:text-[#1C1917] transition-colors nav-link">
            <ArrowLeft className="size-4" strokeWidth={3} /> badui.dev / research
          </Link>
          <div className="flex items-center gap-4">
             <span className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/30 tabular-nums">Ref: AP-{slug.slice(0,4).toUpperCase()}</span>
             <div className="h-4 w-px bg-[#1C1917]/10" />
             <span className="text-xs font-black uppercase tracking-widest text-[#1C1917]/40">{category}</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 relative">
        
        {/* ── Section: Header / Blueprint ── */}
        <div className="relative mb-24">
          <div className="max-w-4xl relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#E9A319] mb-4">Case Study / {category}</p>
            <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-black tracking-tighter leading-[0.85] mb-8 drop-shadow-[6px_6px_0_rgba(233,163,25,0.15)]">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6">
               {/* Impact Stamp */}
               <div className={`relative px-6 py-2 border-4 border-dashed inline-block rotate-[-2deg] ${impact === 'Critical' ? 'border-red-500/30 text-red-600' : 'border-amber-500/30 text-amber-600'}`}>
                  <div className="absolute inset-0 bg-current opacity-[0.03] pointer-events-none" />
                  <span className="text-sm font-black uppercase tracking-[0.2em]">{impact} Impact</span>
                  {/* Mock Stamp Effect */}
                  <div className="absolute -top-1 -right-1 size-2 rounded-full bg-current opacity-20" />
                  <div className="absolute -bottom-1 -left-1 size-2 rounded-full bg-current opacity-20" />
               </div>

               {stat_line && (
                  <p className="text-sm font-bold text-[#1C1917]/50 max-w-sm leading-snug">
                    <span className="mr-2 inline-block size-1.5 rounded-full bg-[#E9A319]" />
                    {stat_line}
                  </p>
               )}
            </div>
          </div>

          {/* Research Note Sticky */}
          <div className="hidden lg:block absolute top-0 right-0 w-72 bg-white p-6 shadow-xl sketchy-border-3 rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="size-3 bg-[#E9A319]/20 rounded-full absolute top-3 left-3" />
             <h2 className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/30 mb-4">Researcher's Summary</h2>
             <p className="text-sm font-bold text-[#1C1917]/70 leading-relaxed italic">
               "{why}"
             </p>
          </div>
        </div>

        {/* ── Pod: The Observation Layer (Evidence) ── */}
        <section className="mb-24 relative">
          <div className="flex items-center gap-4 mb-10">
             <div className="h-[2px] w-12 bg-[#1C1917]" />
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#1C1917]/30 italic">01 / Observation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             {/* Problem Side */}
             <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                   <span className="text-xs font-black uppercase tracking-widest bg-[#1C1917]/10 px-3 py-1 rounded-full">Rejected State</span>
                   <AlertTriangle className="size-4 text-red-500 opacity-50" />
                </div>
                <div className="border-2 border-[#1C1917]/15 bg-white p-1 shadow-sm sketchy-border group hover:border-red-500/30 transition-colors">
                   <div className="aspect-[4/3] bg-[#F0EFE9] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)" }} />
                      <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-700">💀</span>
                   </div>
                   <div className="p-6">
                      <p className="text-sm font-bold text-[#1C1917]/60 leading-relaxed italic border-l-2 border-[#1C1917]/10 pl-4">
                        {bad_description}
                      </p>
                   </div>
                </div>
                {/* Connector Arrow (Mock) */}
                <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 z-20">
                   <div className="w-4 h-[2px] bg-[#E9A319] rotate-45 mb-4" />
                   <div className="w-10 h-[2px] bg-[#E9A319]" />
                   <div className="w-4 h-[2px] bg-[#E9A319] -rotate-45 mt-4" />
                </div>
             </div>

             {/* Solution Side */}
             <div className="relative mt-8 md:mt-0">
                <div className="mb-4 flex items-center justify-between">
                   <span className="text-xs font-black uppercase tracking-widest bg-[#E9A319]/20 text-[#E9A319] px-3 py-1 rounded-full">Optimal Flow</span>
                   <CheckCircle className="size-4 text-[#E9A319] opacity-70" />
                </div>
                <div className="border-2 border-[#E9A319] bg-white p-1 shadow-[8px_8px_0_rgba(233,163,25,0.05)] sketchy-border-2 group hover:shadow-[12px_12px_0_rgba(233,163,25,0.08)] transition-all">
                   <div className="aspect-[4/3] bg-amber-50 flex items-center justify-center">
                      <CheckCircle className="size-16 text-[#E9A319] stroke-[1] animate-draw" />
                   </div>
                   <div className="p-6">
                      <p className="text-sm font-bold text-[#1C1917]/80 leading-relaxed italic border-l-2 border-[#E9A319]/40 pl-4">
                        {good_description}
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* User Voice Bubble */}
          {user_story && (
            <div className="max-w-2xl mx-auto mt-16 bg-[#1C1917] text-[#FAFAF7] p-10 sketchy-border-3 relative">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 size-12 bg-[#1C1917] rotate-45" />
               <div className="relative z-10 italic font-medium text-lg leading-relaxed text-center text-[#FAFAF7]/80">
                  "{user_story}"
               </div>
               <div className="mt-6 text-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">— Anonymous User Report</span>
               </div>
            </div>
          )}
        </section>

        {/* ── Pod: The Justification Layer (Impact & Standards) ── */}
        <section className="mb-24">
           <div className="flex items-center gap-4 mb-10">
             <div className="h-[2px] w-12 bg-[#1C1917]" />
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#1C1917]/30 italic">02 / Justification</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
             {/* Business Consequences */}
             <div className="lg:col-span-3 bg-white border-2 border-[#1C1917] p-10 sketchy-border flex flex-col justify-between shadow-[8px_8px_0_#1C191708]">
                <div>
                   <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#E9A319] mb-6">Commercial Risk Assessment</h3>
                   <div className="flex gap-4 mb-8">
                      <div className="size-2 bg-[#1C1917] rotate-45" />
                      <p className="text-2xl font-black tracking-tight leading-tight">
                        {business_impact}
                      </p>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t-2 border-[#1C1917]/5 pt-8">
                   <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#1C1917]/30 mb-2">Severity</span>
                      <span className={`text-xs font-black uppercase px-2 py-1 ${impactConfig.bg} ${impactConfig.color}`}>{impact}</span>
                   </div>
                   <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#1C1917]/30 mb-2">Confidence Range</span>
                      <span className="text-xs font-black uppercase">High / Documented</span>
                   </div>
                </div>
             </div>

             {/* Standards Shelf */}
             <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#F0EFE9] p-8 sketchy-border-2 border-2 border-dashed border-[#1C1917]/10">
                   <h3 className="text-xs font-black uppercase tracking-widest text-[#1C1917]/40 mb-6 flex items-center gap-2">
                     <Accessibility className="size-3" /> Accessibility Check
                   </h3>
                   <ul className="space-y-4">
                     {wcag_refs.map(r => (
                        <li key={r} className="flex items-start gap-3 bg-white/50 p-3 text-xs font-bold border-l-2 border-[#E9A319]">
                           {r}
                        </li>
                     ))}
                   </ul>
                </div>

                <div className="bg-[#F0EFE9] p-8 sketchy-border border-2 border-dashed border-[#1C1917]/10">
                   <h3 className="text-xs font-black uppercase tracking-widest text-[#1C1917]/40 mb-6 flex items-center gap-2">
                     <MousePointer2 className="size-3" /> Heuristic Violation
                   </h3>
                   <ul className="space-y-4">
                     {nielsen_refs.map(r => (
                        <li key={r} className="flex items-start gap-3 bg-white/50 p-3 text-xs font-bold border-l-2 border-[#1C1917]">
                           {r}
                        </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </section>

        {/* ── Pod: The Solution Layer (Implementation) ── */}
        <section className="mb-24">
           <div className="flex items-center gap-4 mb-10">
             <div className="h-[2px] w-12 bg-[#1C1917]" />
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#1C1917]/30 italic">03 / Implementation</h2>
          </div>

          <div className="relative group mb-12">
             <div className="absolute -inset-2 bg-gradient-to-r from-amber-200 to-amber-100 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
             
             {/* Sticky Note on Code */}
             {pro_tip && (
               <div className="absolute -top-12 right-12 z-20 w-56 bg-amber-100 p-5 shadow-xl rotate-3 group-hover:rotate-1 transition-transform cursor-default border-t-[8px] border-amber-300">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-700/60 block mb-2 underline decoration-dashed underline-offset-4">Pro Tip</span>
                  <p className="text-xs font-black text-amber-900/80 leading-relaxed italic">
                    {pro_tip}
                  </p>
               </div>
             )}

             <div className="relative bg-[#1C1917] p-1 shadow-2xl sketchy-border overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 bg-[#1C1917]/50 border-b border-white/5">
                   <div className="flex gap-1.5">
                      <div className="size-2 rounded-full bg-red-500/50" />
                      <div className="size-2 rounded-full bg-amber-500/50" />
                      <div className="size-2 rounded-full bg-green-500/50" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/30">badui_fix.tsx</span>
                </div>
                <pre className="p-8 text-[13px] text-[#FAFAF7] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                   <code>{code_fix}</code>
                </pre>
             </div>
          </div>
        </section>

        {/* ── Footer / Navigation ── */}
        <footer className="pt-16 border-t-2 border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-10">
           <Link href="/" className="group flex flex-col items-start focus-visible:ring-4 focus-visible:ring-amber-400 p-2 rounded transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1C1917]/20 mb-1">Catalog</span>
              <span className="text-2xl font-black inline-flex items-center gap-3">
                 <ArrowLeft className="size-5 group-hover:-translate-x-1.5 transition-transform" strokeWidth={3} /> Library
              </span>
           </Link>

           <div className="flex items-center gap-6">
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1C1917]/30 hover:text-[#1C1917] transition-colors">
                 Report Update
              </button>
              <Link href="/" className="bg-[#1C1917] text-white px-8 py-3 font-black uppercase tracking-widest text-xs sketchy-border hover:bg-[#E9A319] hover:text-[#1C1917] transition-all">
                 Next Case Study
              </Link>
           </div>
        </footer>

      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const supabase = createStaticClient();
  const { data } = await supabase.from("antipatterns").select("slug");
  return (data ?? []).map((p) => ({ slug: p.slug }));
}
