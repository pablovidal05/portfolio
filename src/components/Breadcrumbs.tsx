"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { addLocaleToPath } from "@/lib/i18n";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { locale } = useLocale();

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-[#999999]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link
                href={addLocaleToPath(item.href, locale)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

