import { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Nos Réalisations | DÉPANNAGE 49",
  description: "Découvrez nos chantiers et interventions techniques : plomberie, électricité, chauffage, climatisation en images.",
};

const realisations = [
  {
    title: "Rénovation de tableau électrique",
    category: "Électricité",
    description: "Mise aux normes complète d'un tableau électrique pour un appartement ancien à Angers.",
    image: "/rea_electricite.png",
  },
  {
    title: "Installation climatisation réversible",
    category: "Climatisation",
    description: "Pose d'un système multi-split dans des bureaux d'entreprise.",
    image: "/rea_clim.png",
  },
  {
    title: "Remplacement chauffe-eau",
    category: "Plomberie",
    description: "Intervention d'urgence suite à une fuite sur un chauffe-eau de 200L.",
    image: "/rea_plomberie.png",
  },
  {
    title: "Sécurisation suite effraction",
    category: "Serrurerie",
    description: "Remplacement de serrure 3 points et pose de blindage sur porte palière.",
    image: "/rea_serrurerie.png",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Nos Réalisations</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Quelques exemples de nos interventions récentes dans le <span className="whitespace-nowrap">Maine-et-Loire</span>. Des professionnels à votre service pour des résultats impeccables.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {realisations.map((realisation, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={realisation.image} 
                    alt={realisation.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      {realisation.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-slate-800 mb-3 group-hover:text-secondary transition-colors">{realisation.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {realisation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
