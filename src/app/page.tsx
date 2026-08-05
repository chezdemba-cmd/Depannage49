import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Features } from "@/components/sections/Features";
import { ContactCTA } from "@/components/sections/ContactCTA";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DÉPANNAGE 49 | Expert Plombier, Électricien & Chauffagiste à Angers",
  description: "Interventions d'urgence 7j/7 et travaux d'installation dans tout le Maine-et-Loire (49). Plomberie, électricité, chauffage, climatisation, serrurerie et vitrerie. Devis gratuit.",
  openGraph: {
    title: "DÉPANNAGE 49 | Expert Plombier, Électricien & Chauffagiste à Angers",
    description: "Interventions d'urgence 7j/7 et travaux d'installation dans tout le Maine-et-Loire (49). Devis gratuit.",
    url: 'https://depannage49.fr',
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Features />
      <ContactCTA />
    </>
  );
}
