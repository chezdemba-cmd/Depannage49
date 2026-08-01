import { Metadata } from "next";
import { Building2, Home, Building, Utensils, Hotel, Key } from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Nos Clients | DÉPANNAGE 49",
  description: "Solutions sur-mesure pour particuliers, professionnels, agences immobilières, syndics, commerces, hôtels et conciergeries Airbnb dans le 49.",
};

const clients = [
  {
    title: "Particuliers",
    icon: Home,
    besoins: "Dépannage d'urgence, rénovation, installation.",
    solutions: "Intervention rapide, devis transparents, respect du domicile.",
    benefices: "Tranquillité d'esprit, sécurité, confort amélioré.",
  },
  {
    title: "Agences Immobilières & Syndics",
    icon: Building2,
    besoins: "Gestion des sinistres, maintenance des parties communes, remises en état.",
    solutions: "Processus dédié, reporting photo, réactivité maximale pour les locataires.",
    benefices: "Gain de temps, valorisation du patrimoine, satisfaction locataire.",
  },
  {
    title: "Commerces & Entreprises",
    icon: Building,
    besoins: "Continuité d'activité, mise aux normes, aménagement.",
    solutions: "Interventions hors horaires d'ouverture, contrats de maintenance, solutions tertiaires.",
    benefices: "Aucune perte d'exploitation, image de marque préservée, sécurité.",
  },
  {
    title: "Restaurants & Hôtels",
    icon: Utensils,
    besoins: "Dépannage express plomberie/électricité, climatisation.",
    solutions: "Astreinte 7j/7, discrétion des équipes, respect des normes d'hygiène.",
    benefices: "Expérience client maintenue, conformité sanitaire.",
  },
  {
    title: "Conciergeries Airbnb",
    icon: Key,
    besoins: "Interventions d'urgence entre deux locations.",
    solutions: "Service prioritaire, réparation express, compte-rendu digital immédiat.",
    benefices: "Avis voyageurs préservés, rentabilité optimisée.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ils nous font confiance</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            À chaque secteur ses exigences. DÉPANNAGE 49 adapte ses process et ses interventions à la réalité de votre quotidien.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {clients.map((client, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-secondary/10 p-5 rounded-2xl shrink-0 text-secondary">
                  <client.icon className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-6">{client.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-primary text-white rounded-xl p-5 shadow-md transition-transform hover:-translate-y-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                        Vos Besoins
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">{client.besoins}</p>
                    </div>
                    <div className="bg-primary text-white rounded-xl p-5 shadow-md transition-transform hover:-translate-y-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        Nos Solutions
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">{client.solutions}</p>
                    </div>
                    <div className="bg-primary text-white rounded-xl p-5 shadow-md transition-transform hover:-translate-y-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        Bénéfices
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">{client.benefices}</p>
                    </div>
                  </div>
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
