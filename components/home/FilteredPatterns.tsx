import { createClient } from "@/lib/supabase/server";
import { FilteredPatternsClient } from "@/components/home/FilteredPatternsClient";
import type { DbAntipattern } from "./data";

export type { DbAntipattern };

/**
 * Server Component — fetches published antipatterns from Supabase,
 * then passes them to the client component for filtering.
 */
export async function FilteredPatterns({ variant = "home" }: { variant?: "home" | "full" }) {
  const supabase = await createClient();

  const { data } = await supabase
    .from("antipatterns")
    .select("id, slug, title, excerpt, category, impact, cover_url")
    .eq("published", true)
    .order("created_at", { ascending: false });

  const patterns: DbAntipattern[] = data ?? [];

  return <FilteredPatternsClient patterns={patterns} variant={variant} />;
}
