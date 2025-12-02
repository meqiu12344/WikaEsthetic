import { siteConfig } from "@/lib/site-config";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Nasze Realizacje",
  description: "Zobacz efekty naszej pracy: manicure hybrydowy, paznokcie żelowe, laminacja brwi i rzęs. Inspiracje i przykłady stylizacji.",
};

export default function PortfolioPage() {
  // Przykładowe kategorie - dodaj prawdziwe zdjęcia
  const categories = [
    { name: "Manicure Hybrydowy", count: 45, color: "pink" },
    { name: "Paznokcie Żelowe", count: 32, color: "purple" },
    { name: "Laminacja Brwi", count: 28, color: "blue" },
    { name: "Laminacja Rzęs", count: 24, color: "green" },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nasze realizacje
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Inspiruj się efektami naszej pracy. Każda stylizacja to unikalne dzieło sztuki.
            </p>
          </div>
        </Reveal>

        {/* Categories */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <Reveal key={cat.name} delay={idx * 100}>
              <div className="card cursor-pointer p-6 text-center">
                <h3 className="mb-2 font-semibold text-gray-900">{cat.name}</h3>
                <p className="text-sm text-gray-500">{cat.count} zdjęć</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Gallery Placeholder */}
        <Reveal delay={400}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(9)].map((_, idx) => (
              <div
                key={idx}
                className="card aspect-square overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 p-4"
              >
                <div className="flex h-full items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Zdjęcie {idx + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Instagram CTA */}
        <Reveal delay={500}>
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">Więcej inspiracji na Instagramie!</h2>
            <p className="mb-6 text-pink-100">
              Śledź nas na Instagram, aby być na bieżąco z najnowszymi stylizacjami i promocjami
            </p>
            <Button href={siteConfig.instagram} className="bg-white text-pink-600 hover:bg-pink-50">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Obserwuj nas
            </Button>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              📸 Wszystkie zdjęcia zostały wykonane za zgodą naszych klientek
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
