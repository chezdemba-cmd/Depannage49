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
  title: "DÉPANNAGE 49 | Votre partenaire technique dans le Maine-et-Loire",
  description: "Plomberie, électricité, chauffage, climatisation, serrurerie, vitrerie. Interventions rapides et professionnelles à Angers et dans tout le 49.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}
