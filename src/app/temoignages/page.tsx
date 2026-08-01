import { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Avis Clients | DÉPANNAGE 49",
  description: "Consultez les témoignages de nos clients satisfaits par nos services de dépannage dans le Maine-et-Loire.",
};

const temoignages = [
  {
    name: "Jean Dupont",
    role: "Particulier",
    content: "Une intervention ultra rapide en plein week-end pour une fuite d'eau importante. Le technicien a été très pro, a expliqué clairement le problème et le devis était tout à fait correct. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Marie Martin",
    role: "Gérante de commerce",
    content: "Nous avons fait appel à Dépannage 49 pour remettre aux normes l'électricité de notre boutique. Travail soigné, délais respectés et équipe très sympathique. Merci !",
    rating: 5,
  },
  {
    name: "Pierre Durand",
    role: "Syndic de copropriété",
    content: "Un partenaire fiable sur qui nous pouvons compter pour l'entretien de nos immeubles. Leur réactivité pour les problèmes de serrurerie et vitrerie est un vrai plus pour nos locataires.",
    rating: 5,
  },
  {
    name: "Sophie Leroy",
    role: "Particulier",
    content: "Remplacement de ma chaudière effectué avec un grand professionnalisme. Ils ont pris le temps de m'expliquer le fonctionnement de la nouvelle installation et ont laissé les lieux impeccables.",
    rating: 4,
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">La parole est à nos clients</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez ce qu'ils pensent de nos interventions.
          </p>
          
          <div className="mt-10 inline-flex items-center gap-4 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-6 w-6 fill-current" />)}
            </div>
            <div className="text-left">
              <div className="font-bold text-xl">4.9/5</div>
              <div className="text-sm text-primary-foreground/70">Sur plus de 150 avis Google</div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temoignages.map((avis, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-8 right-8 h-12 w-12 text-slate-100 rotate-180" />
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < avis.rating ? 'fill-current' : 'text-slate-200'}`} />
                  ))}
                </div>
                <p className="text-slate-700 text-lg italic mb-8 relative z-10 leading-relaxed">
                  "{avis.content}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                    {avis.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{avis.name}</h4>
                    <p className="text-slate-500 text-sm">{avis.role}</p>
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
