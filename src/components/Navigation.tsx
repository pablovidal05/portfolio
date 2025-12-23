"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { usePathname } from "next/navigation";
import { addLocaleToPath } from "@/lib/i18n";

export default function Navigation() {
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { href: "/info", label: t("nav.info") },
  ];

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "en" : "es";
    setLocale(newLocale);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-black border-b border-[#1A1A1A]" style={{ height: '3.5rem' }}>
      <nav className="max-w-[1440px] mx-auto h-full flex items-center justify-between" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
        <Link
          href={addLocaleToPath("/", locale)}
          className="text-lg md:text-xl font-normal text-white tracking-[-0.01em] hover:opacity-70 transition-opacity cursor-pointer"
        >
          Pablo Vidal
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => {
            const href = addLocaleToPath(link.href, locale);
            const isActive = pathname === href || pathname === `/${locale}${link.href}`;
            return (
              <Link
                key={link.href}
                href={href}
                className={`text-base font-normal transition-opacity ${
                  isActive ? "text-white" : "text-white hover:opacity-70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Switch de idioma - Oculto */}
          {/* <button
            onClick={toggleLocale}
            className="relative inline-flex items-center h-7 w-14 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            style={{
              backgroundColor: locale === "es" ? "#333333" : "#666666",
            }}
            aria-label="Toggle language"
          >
            <span
              className="inline-block h-5 w-5 rounded-full bg-white transition-all duration-300 shadow-sm"
              style={{
                transform: locale === "es" ? "translateX(3px)" : "translateX(31px)",
              }}
            />
            <span className="absolute left-0 right-0 flex items-center justify-between px-1.5 text-[10px] font-normal text-white pointer-events-none">
              <span style={{ opacity: locale === "es" ? 1 : 0.4 }}>ES</span>
              <span style={{ opacity: locale === "en" ? 1 : 0.4 }}>EN</span>
            </span>
          </button> */}
        </div>
      </nav>
    </header>
  );
}

