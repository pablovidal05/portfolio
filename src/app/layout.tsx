import type { Metadata } from "next";
import { JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { LocaleProvider } from "@/contexts/LocaleContext";

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
  title: "Pablo Vidal | Product Designer & Design Systems",
  description: "Product Designer con experiencia en escalabilidad de sistemas y optimización de conversión B2B. Soluciones de diseño alineadas a la ingeniería y objetivos de negocio.",
  other: {
    "google-fonts": "https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap",
  },
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
      </body>
    </html>
  );
}
