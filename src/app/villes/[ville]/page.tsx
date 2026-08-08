import { Metadata } from "next";
import { villesData } from "@/data/villes";
import { notFound } from "next/navigation";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { MapPin } from "lucide-react";

type Props = {
  params: Promise<{ ville: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const ville = villesData[resolvedParams.ville];
  
  if (!ville) {
    return { title: "Ville non trouvée" };
  }

  return {
    title: ville.seoTitle,
    description: ville.seoDescription,
    openGraph: {
      title: ville.seoTitle,
      description: ville.seoDescription,
      url: `https://depannage49.com/villes/${resolvedParams.ville}`,
    }
  };
}

export default async function VilleDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const ville = villesData[resolvedParams.ville];

  if (!ville) {
    notFound();
  }

  return (
    <>
      <div className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/10 shadow-sm border border-white/20 mb-8">
              <MapPin className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Votre artisan de proximité à {ville.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              {ville.description}
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-heading text-primary mb-6">
            Dépannage d'urgence & Maintenance technique
          </h2>
          <p className="text-lg text-slate-600">
            Dépannage 49 est votre partenaire de confiance pour tous vos travaux de plomberie, électricité, chauffage, climatisation, serrurerie et vitrerie à <strong>{ville.name}</strong> et ses environs. Nos équipes interviennent rapidement 7j/7 pour sécuriser vos installations.
          </p>
        </div>
      </div>

      <ServicesOverview />
      
      <ContactCTA />
    </>
  );
}
