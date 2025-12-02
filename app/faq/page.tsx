import { faqs } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Najczęściej Zadawane Pytania",
  description: "Odpowiedzi na najczęstsze pytania dotyczące stylizacji paznokci, laminacji brwi i rzęs. Przygotowanie do zabiegów, przeciwwskazania, pielęgnacja.",
};

export default function FAQPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Najczęściej zadawane pytania
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Znajdź odpowiedzi na najczęstsze pytania dotyczące naszych usług
            </p>
          </div>
        </Reveal>

        {/* Categories */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {["Manicure", "Laminacja brwi", "Laminacja rzęs"].map((cat, idx) => (
            <Reveal key={cat} delay={idx * 80}>
              <div className="card cursor-pointer p-4 text-center text-sm font-medium text-gray-700 hover:bg-pink-50">
                {cat}
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 80}>
              <details className="card group overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900">
                  <span>{faq.q}</span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-pink-600 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t bg-gray-50 px-6 py-4 text-gray-600">{faq.a}</div>
              </details>
            </Reveal>
          ))}
        </div>

        {/* Additional Help */}
        <Reveal delay={600}>
          <div className="card mt-12 bg-gradient-to-r from-pink-50 to-purple-50 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">Nie znalazłaś odpowiedzi?</h2>
            <p className="mb-6 text-gray-600">
              Skontaktuj się z nami bezpośrednio - chętnie odpowiemy na wszystkie pytania
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/kontakt">Zadaj pytanie</Button>
              <Button href={`tel:${siteConfig.phone}`} variant="secondary">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zadzwoń
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Tips */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal delay={700}>
            <div className="card p-6">
              <div className="mb-3 text-3xl">💡</div>
              <h3 className="mb-2 font-semibold text-gray-900">Porady przed wizytą</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Przyjedź bez makijażu na oczu (laminacja)</li>
                <li>• Nie używaj olejków przed wizytą</li>
                <li>• Poinformuj o alergiach</li>
                <li>• Przyjedź punktualnie</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={750}>
            <div className="card p-6">
              <div className="mb-3 text-3xl">✨</div>
              <h3 className="mb-2 font-semibold text-gray-900">Pielęgnacja po zabiegu</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Unikaj wody przez 24h</li>
                <li>• Nie pocieraj miejsca zabiegu</li>
                <li>• Stosuj zalecone produkty</li>
                <li>• Unikaj sauny i basenu</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
