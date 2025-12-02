import { siteConfig } from "@/lib/site-config";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Nas - Kim Jesteśmy",
  description: `Poznaj ${siteConfig.name} - pasjonujący zespół stylistek, nasze wartości i podejście do klienta. Doświadczenie, profesjonalizm i indywidualne podejście.`,
};

export default function ONasPage() {
  const team = [
    {
      name: "Anna",
      role: "Główna stylistka paznokci",
      experience: "8 lat doświadczenia",
      specialty: "Żel, hybryda, nail art",
    },
    {
      name: "Marta",
      role: "Specjalistka stylizacji brwi i rzęs",
      experience: "5 lat doświadczenia",
      specialty: "Laminacja, henna, regulacja",
    },
  ];

  const values = [
    {
      icon: "💎",
      title: "Jakość",
      desc: "Używamy wyłącznie produktów premium najwyższej jakości",
    },
    {
      icon: "🤝",
      title: "Zaufanie",
      desc: "Budujemy długotrwałe relacje oparte na profesjonalizmie",
    },
    {
      icon: "✨",
      title: "Perfekcja",
      desc: "Każdy szczegół ma znaczenie - dążymy do idealnego efektu",
    },
    {
      icon: "💝",
      title: "Indywidualność",
      desc: "Każda klientka jest dla nas wyjątkowa",
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Poznaj {siteConfig.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Jesteśmy zespołem pasjonatów, który kocha swoją pracę i dba o każdy detal
            </p>
          </div>
        </Reveal>

        {/* Story */}
        <Reveal delay={100}>
          <div className="card mt-16 overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 lg:p-12">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">Nasza historia</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    {siteConfig.name} powstało z pasji do piękna i chęci dzielenia się naszą wiedzą oraz umiejętnościami. 
                    Od początku naszą misją było tworzenie miejsca, w którym każda kobieta poczuje się wyjątkowo.
                  </p>
                  <p>
                    Przez lata zbudowałyśmy zespół doświadczonych stylistek, które regularnie podnoszą swoje kwalifikacje 
                    na szkoleniach w Polsce i za granicą. Współpracujemy z najlepszymi markami w branży beauty.
                  </p>
                  <p>
                    Dziś jesteśmy dumne z setki zadowolonych klientek, które wracają do nas, polecają nas swoim 
                    przyjaciółkom i obdarzają nas zaufaniem. To dla nich robimy to, co kochamy.
                  </p>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Dlaczego my?</h3>
                <ul className="space-y-4">
                  {[
                    "Certyfikowane stylistki z wieloletnim doświadczeniem",
                    "Regularne szkolenia i kursy doskonalące",
                    "Produkty premium: Semilac, Indigo, Thuya",
                    "Sterylne narzędzia i najwyższe standardy higieny",
                    "Indywidualne podejście do każdej klientki",
                    "Przyjazna atmosfera i profesjonalna obsługa",
                    "Dogodna lokalizacja w centrum miasta",
                    "Prosta rezerwacja online 24/7",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-6 w-6 flex-shrink-0 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Team */}
        <div className="mt-16">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Nasz zespół</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {team.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 100}>
                <div className="card p-8 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"></div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-pink-600">{member.role}</p>
                  <p className="mb-3 text-sm text-gray-600">{member.experience}</p>
                  <div className="rounded-lg bg-pink-50 px-4 py-2 text-sm text-gray-700">
                    {member.specialty}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Nasze wartości</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 100}>
                <div className="card p-6 text-center">
                  <div className="mb-3 text-4xl">{value.icon}</div>
                  <h3 className="mb-2 font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <Reveal delay={300}>
          <div className="card mt-16 bg-gradient-to-r from-pink-50 to-purple-50 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Certyfikaty i szkolenia</h2>
            <p className="mb-6 text-gray-600">
              Nasze stylistki posiadają certyfikaty z renomowanych szkół takich jak:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
              <span className="rounded-full bg-white px-4 py-2">Indigo Nails Academy</span>
              <span className="rounded-full bg-white px-4 py-2">Semilac Professional</span>
              <span className="rounded-full bg-white px-4 py-2">Thuya Expert</span>
              <span className="rounded-full bg-white px-4 py-2">Lash Lift Master</span>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Gotowa na spotkanie z nami?
            </h2>
            <Button href={siteConfig.booksy}>Umów pierwszą wizytę</Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
