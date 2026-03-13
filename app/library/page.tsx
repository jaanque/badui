import { Navbar } from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";
import { FilteredPatterns } from "@/components/home/FilteredPatterns";

export const metadata = {
  title: "Library Archive | Bad UI",
  description: "Browse our complete database of interactive antipatterns and professional fixes.",
};

export default function LibraryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF7] pt-8">
        <FilteredPatterns variant="full" />
      </main>
      <Footer />
    </>
  );
}
