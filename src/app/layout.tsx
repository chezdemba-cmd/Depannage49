import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://depannage49.fr'),
  title: {
    default: "DÉPANNAGE 49 | Entreprise multiservices de maintenance technique à Angers",
    template: "%s | DÉPANNAGE 49"
  },
  description: "Dépannage 49, votre entreprise multiservices de maintenance technique dans le Maine-et-Loire (49). Plomberie, électricité, chauffage, climatisation, serrurerie, vitrerie. Dépannage d'urgence à Angers et alentours.",
  keywords: ["dépannage Angers", "dépannage 49", "maintenance technique Angers", "entreprise multiservices Angers", "plombier Angers", "électricien Angers", "chauffagiste Angers", "serrurier Angers", "Maine-et-Loire"],
  authors: [{ name: "DÉPANNAGE 49" }],
  openGraph: {
    title: "DÉPANNAGE 49 | Entreprise multiservices de maintenance technique à Angers",
    description: "Dépannage 49, votre entreprise multiservices de maintenance technique dans le Maine-et-Loire (49). Plomberie, électricité, chauffage, climatisation, serrurerie, vitrerie. Dépannage d'urgence à Angers et alentours.",
    url: 'https://depannage49.fr',
    siteName: 'Dépannage 49',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DÉPANNAGE 49 | Entreprise multiservices de maintenance technique à Angers",
    description: "Dépannage 49, votre entreprise multiservices de maintenance technique dans le Maine-et-Loire (49). Plomberie, électricité, chauffage, climatisation, serrurerie, vitrerie. Dépannage d'urgence à Angers et alentours.",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 mt-[80px]">
          {children}
        </main>
        <Footer />
        <QuoteModal />
      </body>
    </html>
  );
}
