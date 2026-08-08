import { Metadata } from "next";
import { getActualitesList } from "@/data/actualites";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Conseils & Actualités | DÉPANNAGE 49 Angers",
  description: "Découvrez tous nos conseils et actualités sur la plomberie, l'électricité, le chauffage et la sécurité. Dépannage 49, votre expert maintenance à Angers.",
  openGraph: {
    title: "Conseils & Actualités | DÉPANNAGE 49 Angers",
    description: "Découvrez tous nos conseils et actualités sur la plomberie, l'électricité, le chauffage et la sécurité.",
    url: 'https://depannage49.com/actualites',
  }
};

export default function ActualitesPage() {
  const articles = getActualitesList();

  return (
    <>
      <div className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
              Conseils & Actualités
            </h1>
            <p className="text-xl text-slate-600">
              Retrouvez nos conseils d'experts pour l'entretien de votre logement et les dernières actualités de notre entreprise multiservices.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {articles.map((article) => (
              <div key={article.slug} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
                {article.imageUrl && (
                  <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative shrink-0">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col justify-center w-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-slate-800 mb-4 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600 mb-8 text-lg">
                    {article.description}
                  </p>
                  <Link 
                    href={`/actualites/${article.slug}`}
                    className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 mt-auto"
                  >
                    Lire l'article complet
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
