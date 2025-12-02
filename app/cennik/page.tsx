import { services, additionalServices, siteConfig } from "@/lib/site-config";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cennik - Ceny Usług Kosmetycznych",
  description: `Sprawdź aktualny cennik ${siteConfig.name}. Przejrzyste ceny, bez ukrytych kosztów. Rezerwuj online przez Booksy.`,
};

export default function CennikPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cennik usług
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Przejrzyste ceny, bez ukrytych kosztów. Płatność gotówką lub kartą.
            </p>
          </div>
        </Reveal>

        {/* Main Services Table */}
        <Reveal delay={100}>
          <div className="card mt-12 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center text-white">
              <h2 className="text-2xl font-bold">Główne usługi</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Usługa
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Czas trwania
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                      Cena
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {services.map((service) => (
                    <tr key={service.id} className="hover:bg-pink-50/50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.shortDesc}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{service.duration}</td>
                      <td className="px-6 py-4 text-right text-lg font-semibold text-pink-600">
                        {service.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Additional Services */}
        <Reveal delay={200}>
          <div className="card mt-8 overflow-hidden">
            <div className="bg-gray-50 p-6">
              <h2 className="text-xl font-bold text-gray-900">Usługi dodatkowe</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-gray-200">
                  {additionalServices.map((service) => (
                    <tr key={service.name} className="hover:bg-pink-50/50">
                      <td className="px-6 py-4 font-medium text-gray-900">{service.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{service.duration}</td>
                      <td className="px-6 py-4 text-right text-lg font-semibold text-pink-600">
                        {service.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Info Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal delay={300}>
            <div className="card p-6 text-center">
              <div className="mb-3 text-3xl">💳</div>
              <h3 className="mb-2 font-semibold text-gray-900">Formy płatności</h3>
              <p className="text-sm text-gray-600">Gotówka, karta płatnicza, BLIK</p>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <div className="card p-6 text-center">
              <div className="mb-3 text-3xl">🎁</div>
              <h3 className="mb-2 font-semibold text-gray-900">Karty podarunkowe</h3>
              <p className="text-sm text-gray-600">Dostępne w recepcji salonu</p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="card p-6 text-center">
              <div className="mb-3 text-3xl">⏰</div>
              <h3 className="mb-2 font-semibold text-gray-900">Anulowanie</h3>
              <p className="text-sm text-gray-600">Bezpłatne do 24h przed wizytą</p>
            </div>
          </Reveal>
        </div>

        {/* Important Info */}
        <Reveal delay={450}>
          <div className="mt-8 rounded-xl border border-pink-200 bg-pink-50 p-6">
            <h3 className="mb-3 font-semibold text-gray-900">Ważne informacje:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Ceny mogą ulec zmianie w zależności od indywidualnych potrzeb klientki</li>
              <li>• Przy pierwszej wizycie rekomendujemy konsultację z stylistką</li>
              <li>• Możliwość zakupu pakietów zabiegowych z rabatem</li>
              <li>• Ceny obowiązują od grudnia 2025 roku</li>
            </ul>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={500}>
          <div className="mt-12 text-center">
            <Button href={siteConfig.booksy}>Zarezerwuj wizytę online</Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
