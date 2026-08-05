import { Metadata } from "next";
import { actualitesData } from "@/data/actualites";
import { notFound } from "next/navigation";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = actualitesData[resolvedParams.slug];
  
  if (!article) {
    return { title: "Article non trouvé" };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: `https://depannage49.fr/actualites/${resolvedParams.slug}`,
    }
  };
}

export default async function ActualiteDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = actualitesData[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/actualites" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux actualités
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <div className="flex items-center text-white/80 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(article.date).toLocaleDateString('fr-FR')}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
              {article.description}
            </p>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}
