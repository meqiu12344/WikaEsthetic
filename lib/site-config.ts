// Konfiguracja strony - EDYTUJ te wartości
export const siteConfig = {
  name: "WikaEsthetic",
  city: "Wrocław",
  tagline: "Profesjonalna stylizacja paznokci i laminacja brwi oraz rzęs",
  
  // Kontakt
  phone: "+48 123 456 789",
  email: "kontakt@wikaesthetic.pl",
  address: {
    street: "ul. Przykładowa 12",
    postal: "00-000",
    city: "Warszawa",
  },
  
  // Social & Booksy
  booksy: "https://booksy.com/pl-pl/twoj-salon",
  instagram: "https://instagram.com/twoj_profil",
  facebook: "https://facebook.com/twoj_profil",
  
  // SEO
  url: "https://twoja-domena.pl",
  description: "Profesjonalne studio stylizacji paznokci, laminacji brwi i rzęs w Warszawie. Certyfikowane stylistki, bezpieczne produkty, szybka rezerwacja online.",
  
  // Godziny otwarcia
  hours: {
    weekdays: "10:00 - 19:00",
    saturday: "9:00 - 15:00",
    sunday: "Nieczynne",
  },
} as const;

// Usługi
export const services = [
  {
    id: "manicure-hybrydowy",
    name: "Manicure hybrydowy",
    shortDesc: "Trwały efekt do 3 tygodni, profesjonalne wykonanie",
    price: "120 zł",
    duration: "60 min",
    description: "Manicure hybrydowy to idealne rozwiązanie dla osób ceniących długotrwały, estetyczny wygląd paznokci. Używamy produktów renomowanych marek, dbając o zdrowie naturalnej płytki.",
    benefits: [
      "Trwałość do 3 tygodni",
      "Szeroki wybór kolorów",
      "Bezpieczne dla naturalnej płytki",
      "Profesjonalne wykonanie",
    ],
    process: [
      "Dezynfekcja i przygotowanie płytki",
      "Nadanie kształtu",
      "Aplikacja bazy, koloru i topu",
      "Utwardzanie w lampie UV/LED",
      "Pielęgnacja skórek",
    ],
  },
  {
    id: "paznokcie-zelowe",
    name: "Paznokcie żelowe - przedłużanie",
    shortDesc: "Naturalne przedłużenia, idealny kształt i długość",
    price: "200-260 zł",
    duration: "2-2.5 h",
    description: "Przedłużanie żelowe metodami bezpiecznymi dla naturalnej płytki. Oferujemy modelowanie na tipsach, formach oraz na naturalnej płytce.",
    benefits: [
      "Naturalny wygląd",
      "Możliwość dowolnego kształtu",
      "Wzmocnienie naturalnych paznokci",
      "Trwałość i elastyczność",
    ],
    process: [
      "Przygotowanie płytki",
      "Dobór metody (tips/forme)",
      "Aplikacja żelu",
      "Modelowanie kształtu",
      "Piłowanie i wykończenie",
    ],
  },
  {
    id: "laminacja-brwi",
    name: "Laminacja brwi",
    shortDesc: "Uniesienie i modelowanie włosków, efekt pełniejszych brwi",
    price: "140 zł",
    duration: "50 min",
    description: "Zabieg modelujący strukturę włosków brwi, nadający im uporządkowany, pełniejszy wygląd. Wykonujemy z opcjonalnym farbowaniem henną.",
    benefits: [
      "Efekt pełniejszych brwi",
      "Uporządkowany kształt",
      "Trwałość 4-8 tygodni",
      "Bezpieczne preparaty",
    ],
    process: [
      "Konsultacja i dobór kształtu",
      "Oczyszczenie brwi",
      "Aplikacja preparatu laminującego",
      "Neutralizacja",
      "Opcjonalna henna i regulacja",
    ],
  },
  {
    id: "laminacja-rzes",
    name: "Laminacja rzęs",
    shortDesc: "Podkręcenie i pogrubienie naturalnych rzęs",
    price: "150 zł",
    duration: "60 min",
    description: "Lash lift - zabieg podkręcający i unoszący naturalne rzęsy od nasady, dający efekt optycznego wydłużenia. Opcjonalne farbowanie.",
    benefits: [
      "Efekt podkręconych rzęs",
      "Optyczne wydłużenie",
      "Trwałość 6-8 tygodni",
      "Bez potrzeby używania zalotki",
    ],
    process: [
      "Oczyszczenie rzęs",
      "Dobór wałeczka",
      "Aplikacja preparatu",
      "Neutralizacja",
      "Opcjonalne farbowanie",
    ],
  },
] as const;

// Dodatkowe usługi
export const additionalServices = [
  { name: "Manicure hybrydowy + ściąganie", price: "140 zł", duration: "75 min" },
  { name: "Uzupełnienie żel", price: "160-200 zł", duration: "1.5 h" },
  { name: "Henna brwi + regulacja", price: "60 zł", duration: "25 min" },
  { name: "Regulacja brwi", price: "40 zł", duration: "15 min" },
] as const;

// FAQ
export const faqs = [
  {
    q: "Jak długo trzyma się manicure hybrydowy?",
    a: "Manicure hybrydowy utrzymuje się od 2 do 3 tygodni, w zależności od tempa wzrostu Twoich paznokci oraz pielęgnacji.",
  },
  {
    q: "Czy laminacja brwi jest bezpieczna?",
    a: "Tak, używamy certyfikowanych preparatów najwyższej jakości. Przed zabiegiem przeprowadzamy konsultację i w razie potrzeby test uczuleniowy.",
  },
  {
    q: "Jak przygotować się do laminacji rzęs?",
    a: "Przyjdź bez makijażu oczu i nie używaj tuszu na rzęsach przed zabiegiem. Unikaj sztucznych rzęs na 2 tygodnie przed laminacją.",
  },
  {
    q: "Czy mogę przyjść z popękanymi paznokciami?",
    a: "Tak, podczas wizyty ocenimy stan płytki i zaproponujemy najlepsze rozwiązanie - może być potrzebne wzmocnienie lub regeneracja.",
  },
  {
    q: "Jak mogę zmienić lub odwołać rezerwację?",
    a: "Rezerwacje można modyfikować w aplikacji Booksy lub telefonicznie, preferowane min. 24h przed wizytą.",
  },
  {
    q: "Jakie produkty stosujecie?",
    a: "Współpracujemy z renomowanymi markami takimi jak Semilac, Indigo, Thuya i innymi, certyfikowanymi w UE.",
  },
  {
    q: "Czy wykonujecie zabiegi dla alergików?",
    a: "Tak, posiadamy produkty hipoalergiczne. Poinformuj nas o alergiach podczas rezerwacji - przygotujemy odpowiednie produkty.",
  },
] as const;

// Opinie klientek
export const testimonials = [
  {
    name: "Anna K.",
    text: "Najlepsze paznokcie w Warszawie! Delikatne wykonanie, a hybryda trzyma się 3 tygodnie bez odpryśnięć. Polecam!",
    rating: 5,
  },
  {
    name: "Monika W.",
    text: "Laminacja brwi przeszła moje oczekiwania. Brwi wyglądają naturalnie, a efekt trzyma się ponad miesiąc.",
    rating: 5,
  },
  {
    name: "Kasia M.",
    text: "Profesjonalna obsługa, czysto i higienicznie. Moje rzęsy po laminacji wyglądają jak po tuszu 24/7!",
    rating: 5,
  },
  {
    name: "Ewa L.",
    text: "Świetny stosunek ceny do jakości. Atmosfera, efekty i łatwa rezerwacja przez Booksy - wszystko 10/10.",
    rating: 5,
  },
] as const;
