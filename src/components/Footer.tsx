"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { useLocale } from "@/contexts/LocaleContext";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const { locale } = useLocale();

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const copiedText = locale === 'es' ? '¡Correo copiado!' : 'Email copied!';

  return (
    <footer className="bg-black border-t border-[#1A1A1A] px-6 md:px-12" style={{ height: '3.5rem' }}>
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-center text-center">
        <button
          onClick={handleCopy}
          className="text-base md:text-lg font-normal text-white hover:opacity-70 transition-opacity cursor-pointer"
        >
          {copied ? copiedText : profile.email}
        </button>
      </div>
    </footer>
  );
}

