import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pablo Vidal | Product Designer — Fintech & Design Systems",
    template: "%s | Pablo Vidal",
  },
  description:
    "Product Designer chileno especializado en fintech, design systems y conversión B2B. Convierto sistemas financieros complejos en experiencias simples y confiables.",
  keywords: [
    "Product Designer Chile",
    "Product Designer fintech",
    "UX UI Designer Chile",
    "Design Systems",
    "Diseñador de producto Chile",
    "Fintech design",
    "B2B SaaS design",
    "CRO",
    "Pablo Vidal",
  ],
  authors: [{ name: "Pablo Vidal", url: SITE_URL }],
  creator: "Pablo Vidal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Pablo Vidal — Product Designer",
    title: "Pablo Vidal | Product Designer — Fintech & Design Systems",
    description:
      "Product Designer chileno especializado en fintech, design systems y conversión B2B. Casos reales: design systems a escala, e-commerce B2B y plataformas SaaS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Vidal | Product Designer — Fintech & Design Systems",
    description:
      "Product Designer chileno especializado en fintech, design systems y conversión B2B.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "QFcWoS_gd_VsNzvZSgFaV9b2L0KQ95BtrbXudiBcS-g",
  },
  other: {
    "google-fonts":
      "https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pablo Vidal",
  jobTitle: "Product Designer",
  description:
    "Product Designer especializado en fintech, design systems y optimización de conversión B2B.",
  url: SITE_URL,
  email: "mailto:p.vidal005@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coquimbo",
    addressRegion: "Región de Coquimbo",
    addressCountry: "CL",
  },
  sameAs: [
    "https://www.linkedin.com/in/pablovidalg",
    "https://github.com/pablovidal05",
  ],
  knowsAbout: [
    "Product Design",
    "Design Systems",
    "Fintech",
    "UX/UI Design",
    "Conversion Rate Optimization",
    "B2B SaaS",
    "E-commerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=sentient@200,300,400,600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${sourceSerif4.variable} antialiased bg-black text-white`}
      >
        <LocaleProvider>
          <Loader />
          <Navigation />
          <main className="min-h-screen" style={{ paddingTop: '3.5rem' }}>
            {children}
          </main>
          <Footer />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
