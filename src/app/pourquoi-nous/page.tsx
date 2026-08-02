import { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Pourquoi Choisir DÉPANNAGE 49 ?",
  description: "Réactivité, disponibilité, transparence et qualité. Découvrez pourquoi les particuliers et professionnels nous font confiance dans le Maine-et-Loire.",
};

export default function PourquoiNousPage() {
  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Pourquoi Nous Choisir ?</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              DÉPANNAGE 49 s&apos;engage au quotidien pour vous offrir un service irréprochable. De la prise d&apos;appel à la fin du chantier, notre objectif est votre entière satisfaction.
            </p>
          </div>
        </div>
      </div>

      <Features />
      <ContactCTA />
    </>
  );
}
