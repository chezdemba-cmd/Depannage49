import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Features } from "@/components/sections/Features";
import { ContactCTA } from "@/components/sections/ContactCTA";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DÉPANNAGE 49 | Entreprise multiservices de maintenance technique à Angers",
  description: "Dépannage 49, votre entreprise multiservices de maintenance technique dans le Maine-et-Loire (49). Interventions d'urgence 7j/7 et travaux d'installation (plomberie, électricité, etc.). Devis gratuit.",
  openGraph: {
    title: "DÉPANNAGE 49 | Entreprise multiservices de maintenance technique à Angers",
    description: "Interventions d'urgence 7j/7 et travaux d'installation dans tout le Maine-et-Loire (49). Devis gratuit.",
    url: 'https://depannage49.com',
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
