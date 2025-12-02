import { services, additionalServices, siteConfig } from "@/lib/site-config";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi - Manicure, Laminacja Brwi i Rzęs",
  description: "Pełna oferta usług: manicure hybrydowy, paznokcie żelowe, laminacja brwi i rzęs. Sprawdź opisy zabiegów i zarezerwuj wizytę online.",
};

export default function UslugiPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Nasze usługi
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Profesjonalne zabiegi wykonywane przez certyfikowane stylistki z wieloletnim doświadczeniem
            </p>
          </div>
        </Reveal>

        {/* Main Services */}
        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div className="card overflow-hidden">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
                      {service.price} • {service.duration}
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">{service.name}</h2>
                    <p className="mb-6 text-gray-600">{service.description}</p>

                    <h3 className="mb-3 font-semibold text-gray-900">Korzyści:</h3>
                    <ul className="mb-6 space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Button href={siteConfig.booksy}>Zarezerwuj teraz</Button>
                      <Button href={`/uslugi/${service.id}`} variant="secondary">
                        Szczegóły
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8">
                    <h3 className="mb-4 font-semibold text-gray-900">Przebieg zabiegu:</h3>
                    <ol className="space-y-3">
                      {service.process.map((step, idx) => (
                        <li key={step} className="flex gap-3 text-sm text-gray-700">
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-pink-600">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Services */}
        <Reveal delay={300}>
          <div className="mt-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Dodatkowe usługi</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service) => (
                <div key={service.name} className="card p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{service.name}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-pink-600">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={400}>
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Masz pytania dotyczące zabiegów?
            </h2>
            <p className="mb-6 text-gray-600">
              Skontaktuj się z nami lub sprawdź naszą sekcję FAQ
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/kontakt">Skontaktuj się</Button>
              <Button href="/faq" variant="secondary">Zobacz FAQ</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
