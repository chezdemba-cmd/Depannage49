import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Heart, Shield } from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "L'Entreprise | DÉPANNAGE 49",
  description: "Découvrez notre vision, notre mission et nos valeurs. DÉPANNAGE 49, votre partenaire technique de proximité dans le Maine-et-Loire.",
};

const valeurs = [
  {
    title: "Proximité",
    description: "Une équipe ancrée localement, à l'écoute de ses clients et capable d'intervenir rapidement sur tout le territoire du 49.",
    icon: Heart,
  },
  {
    title: "Excellence technique",
    description: "Une maîtrise parfaite de nos différents métiers, garantie par des techniciens formés et certifiés.",
    icon: Target,
  },
  {
    title: "Fiabilité",
    description: "Le respect des délais, des devis et des normes de sécurité pour des installations durables.",
    icon: Shield,
  },
];

export default function EntreprisePage() {
  return (
    <>
      <div className="relative py-24 md:py-32 overflow-hidden">
        <Image 
          src="/entreprise_hero.jpg"
          alt="Bâtiment moderne"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 drop-shadow-md">Notre Entreprise</h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              DÉPANNAGE 49 est née d'une volonté simple : apporter aux particuliers et aux professionnels du <span className="whitespace-nowrap">Maine-et-Loire</span> un service technique de très haute qualité, alliant la rigueur des grands groupes à la proximité d'un artisan local.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Notre Vision</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
                Devenir la référence technique incontournable du <span className="whitespace-nowrap">Maine-et-Loire</span>
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dans un monde où les technologies du bâtiment évoluent rapidement, nous croyons qu'il est essentiel de pouvoir s'appuyer sur un partenaire de confiance, capable d'intervenir sur une multitude de corps d'état avec le même niveau d'exigence.
                </p>
                <p>
                  Notre structure s'inspire des méthodes des grandes entreprises de services techniques, tout en conservant une taille humaine qui nous permet d'être réactifs et adaptables à chaque situation.
                </p>
              </div>
              
              <ul className="mt-8 space-y-3">
                {[
                  "Un interlocuteur unique pour tous vos travaux",
                  "Des interventions sécurisées et normées",
                  "Un suivi client premium de A à Z"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-secondary h-5 w-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-4 border-white">
                <Image 
                  src="/entreprise_team.jpg" 
                  alt="Notre équipe en intervention" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Nos Valeurs</h2>
            <p className="text-primary-foreground/80 text-lg">
              Chaque intervention que nous réalisons est guidée par trois piliers fondamentaux qui font l'ADN de DÉPANNAGE 49.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((valeur, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="bg-secondary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <valeur.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{valeur.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
