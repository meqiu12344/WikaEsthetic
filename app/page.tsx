import { siteConfig, services, testimonials } from "@/lib/site-config";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Profesjonalna stylizacja paznokci i laminacja brwi oraz rzęs | ${siteConfig.city}`,
  description: `${siteConfig.description} Zarezerwuj wizytę online przez Booksy.`,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-200 opacity-30 blur-3xl"></div>
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {siteConfig.tagline}
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Profesjonalne studio w {siteConfig.city}. Certyfikowane stylistki, 
                bezpieczne produkty premium i kompleksowa obsługa. Odkryj perfekcję 
                stylizacji paznokci, brwi i rzęs.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={siteConfig.booksy}>
                  📅 Zarezerwuj wizytę online
                </Button>
                <Button href="/uslugi" variant="secondary">
                  Zobacz pełną ofertę
                </Button>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certyfikowane stylistki
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Produkty premium
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Rezerwacja online 24/7
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nasze najpopularniejsze usługi
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Odkryj pełną gamę profesjonalnych zabiegów kosmetycznych
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 100}>
                <div className="card group p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <span className="text-2xl">
                      {service.id === "manicure-hybrydowy" && "💅"}
                      {service.id === "paznokcie-zelowe" && "✨"}
                      {service.id === "laminacja-brwi" && "🎨"}
                      {service.id === "laminacja-rzes" && "👁️"}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">{service.shortDesc}</p>
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="font-semibold text-pink-600">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                  <Link
                    href={`/uslugi/${service.id}`}
                    className="text-sm font-medium text-pink-600 hover:text-pink-700"
                  >
                    Dowiedz się więcej →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 text-center">
              <Button href="/uslugi" variant="secondary">
                Zobacz wszystkie usługi i cennik
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dlaczego warto nas wybrać?
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏆",
                title: "Doświadczenie i certyfikaty",
                desc: "Zespół stylistek z wieloletnim doświadczeniem i certyfikatami z renomowanych szkoleń.",
              },
              {
                icon: "🧴",
                title: "Produkty premium",
                desc: "Współpracujemy z najlepszymi markami: Semilac, Indigo, Thuya i innymi.",
              },
              {
                icon: "✨",
                title: "Sterylność i higiena",
                desc: "Najwyższe standardy czystości, sterylne narzędzia i jednorazowe akcesoria.",
              },
              {
                icon: "💝",
                title: "Indywidualne podejście",
                desc: "Każda wizyta zaczyna się od konsultacji i dopasowania zabiegu do Twoich potrzeb.",
              },
              {
                icon: "📍",
                title: "Dogodna lokalizacja",
                desc: `Salon w centrum ${siteConfig.city} z wygodnym dojazdem komunikacją miejską.`,
              },
              {
                icon: "⚡",
                title: "Szybka rezerwacja",
                desc: "Rezerwuj wizytę online 24/7 przez Booksy - prosto i wygodnie.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="card p-6 text-center">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Co mówią nasze klientki
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Ponad 500 zadowolonych klientek - dołącz do nich!
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 100}>
                <div className="card p-6">
                  <div className="mb-3 flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Gotowa na metamorfozę?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-pink-100">
              Zarezerwuj wizytę online już teraz i ciesz się profesjonalnymi zabiegami w przyjaznej atmosferze.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.booksy} className="bg-white text-pink-600 hover:bg-pink-50">
                Umów wizytę przez Booksy
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
