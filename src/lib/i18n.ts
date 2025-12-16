export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  return defaultLocale;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname;
}

export function addLocaleToPath(pathname: string, locale: Locale): string {
  if (pathname === "/") {
    return locale === defaultLocale ? "/" : `/${locale}`;
  }
  const cleanPath = removeLocaleFromPath(pathname);
  return locale === defaultLocale ? cleanPath : `/${locale}${cleanPath}`;
}

