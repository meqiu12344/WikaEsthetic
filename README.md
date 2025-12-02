# 💅 wikaesthetic - Profesjonalna Strona Internetowa

Nowoczesna, responsywna strona internetowa dla salonu kosmetycznego specjalizującego się w stylizacji paznokci oraz laminacji brwi i rzęs.

## ✨ Funkcje

### SEO i Marketing
- ✅ **Pełna optymalizacja SEO** - meta tagi, nagłówki, strukturalne dane Schema.org
- ✅ **JSON-LD** dla lepszej widoczności w Google
- ✅ **Open Graph** dla mediów społecznościowych
- ✅ **Szybkie ładowanie** dzięki Next.js 16
- ✅ **Mobile-first** - pełna responsywność

### Funkcjonalności
- 📱 **Szybka rezerwacja** przez Booksy (sticky CTA)
- 🎨 **Nowoczesny design** z gradientami i animacjami
- ♿ **Dostępność** - focus states, semantyczny HTML
- 📊 **Gotowość na analytics** (Google Analytics, Meta Pixel)

### Strony
1. **Strona główna** - hero, usługi, opinie, CTA
2. **Usługi** - szczegółowe opisy zabiegów z procesem i korzyściami
3. **Cennik** - przejrzysta tabela cen
4. **Portfolio** - galeria realizacji
5. **O nas** - historia, zespół, wartości
6. **Kontakt** - dane kontaktowe, formularz, mapa
7. **FAQ** - najczęściej zadawane pytania

## 🚀 Szybki start

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## ⚙️ Konfiguracja

### 1. Edytuj dane firmy
Plik: `lib/site-config.ts`

```typescript
export const siteConfig = {
  name: "wikaesthetic",           // Nazwa salonu
  city: "Warszawa",                 // Miasto
  phone: "+48 123 456 789",         // Telefon
  email: "kontakt@wikaesthetic.pl", // Email
  booksy: "https://booksy.com/...", // Link Booksy
  instagram: "https://instagram.com/...",
  facebook: "https://facebook.com/...",
  // ... więcej ustawień
}
```

### 2. Dodaj zdjęcia
- Umieść zdjęcia w folderze `public/images/`
- Format: WebP dla lepszej optymalizacji
- Przykłady: portfolio, team, gallery

### 3. Google Maps
W pliku `app/kontakt/page.tsx` zamień placeholder na prawdziwy iframe Google Maps

### 4. Analytics (opcjonalnie)
Dodaj w `app/layout.tsx`:
- Google Analytics
- Facebook Pixel
- Google Tag Manager

## 🎨 Personalizacja kolorów

W `app/globals.css` zmień zmienne CSS:

```css
:root {
  --primary: #ec4899;      /* Główny kolor (pink) */
  --primary-dark: #db2777;
  --accent: #f472b6;
  /* ... */
}
```

## 📱 Responsywność

Strona jest w pełni responsywna:
- **Mobile** (< 640px) - sticky CTA, hamburger menu
- **Tablet** (640px - 1024px) - 2 kolumny
- **Desktop** (> 1024px) - pełny layout

## 🔍 SEO - Co zrobione

✅ Unique title i description dla każdej strony
✅ Semantic HTML (header, main, section, article)
✅ Schema.org JSON-LD (BeautySalon)
✅ Alt tags dla obrazków (przykłady w kodzie)
✅ Sitemap i robots.txt (dodaj ręcznie w `public/`)
✅ Open Graph tags
✅ Canonical URLs

## 📈 Rekomendacje po wdrożeniu

1. **Google Search Console** - dodaj stronę i zweryfikuj
2. **Google My Business** - połącz z stroną
3. **Booksy Integration** - upewnij się że link działa
4. **Analytics** - dodaj GA4 i monitoruj ruch
5. **Social Media** - regularnie publikuj zdjęcia z portfolio
6. **Blog** - rozważ dodanie bloga z poradami (zwiększy SEO)

## 🚀 Deployment

### Vercel (Rekomendowane)
```bash
npm i -g vercel
vercel
```

### Własny serwer
```bash
npm run build
npm start
```

## 📞 Wsparcie

Strona jest gotowa do wdrożenia. Pamiętaj o:
- [ ] Zmianie danych w `site-config.ts`
- [ ] Dodaniu prawdziwych zdjęć
- [ ] Podłączeniu Google Maps
- [ ] Testowaniu formularza kontaktowego
- [ ] Ustawieniu domeny i SSL

## 🔧 Stack technologiczny

- **Next.js 16** - React framework z server-side rendering
- **TypeScript** - type safety
- **Tailwind CSS** - utility-first styling
- **Geist Font** - nowoczesna typografia

---

**Powodzenia! 🎉**
