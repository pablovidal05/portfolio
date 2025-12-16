import type { Metadata } from "next";
import { Inter, Crimson_Text, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { LocaleProvider } from "@/contexts/LocaleContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson-text",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Vidal - Portafolio",
  description: "Diseñador Digital especializado en UX/UI, Growth Design y E-commerce",
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
        className={`${inter.variable} ${crimsonText.variable} ${libreBaskerville.variable} antialiased bg-black text-white`}
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
