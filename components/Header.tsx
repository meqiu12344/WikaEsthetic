"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/uslugi", label: "Usługi" },
  { href: "/cennik", label: "Cennik" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/o-nas", label: "O nas" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="floating-bar-container">
          <nav className="floating-bar">
            {/* Mobile row: logo left, hamburger right */}
            <div className="flex items-center justify-between md:hidden">
              <Link href="/" className="text-lg font-semibold gradient-text">
                {siteConfig.name}
              </Link>
              <button
                aria-label="Otwórz menu"
                className="p-2 rounded-md hover:bg-pink-50 text-gray-700"
                onClick={() => setOpen((v) => !v)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop grid: 25% | 50% | 25% */}
            <div className="hidden md:grid md:grid-cols-4 md:items-center md:gap-4">
              <div className="col-span-1 flex items-center">
                <Link href="/" className="text-xl font-bold gradient-text">
                  {siteConfig.name}
                </Link>
              </div>
              <div className="col-span-2 flex items-center justify-center gap-6">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-pink-600">
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="col-span-1 flex items-center justify-end">
                <Button href={siteConfig.booksy} className="shadow-md" variant="primary">
                  Rezerwuj online
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
          <div className="rounded-2xl border bg-white/90 backdrop-blur-md shadow-xl p-4">
            <div className="grid gap-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-pink-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Button href={siteConfig.booksy} className="w-full" variant="primary">
                Rezerwuj online
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
