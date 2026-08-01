import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{ service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service];
  
  if (!service) {
    return { title: "Service non trouvé" };
  }

  return {
    title: `${service.title} - Intervention & Dépannage | DÉPANNAGE 49`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.service];

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className={`py-16 md:py-24 ${service.bg}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-white shadow-sm border border-white/50`}>
                  <service.icon className={`h-10 w-10 ${service.color}`} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-800">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {service.description}
              </p>
            </div>
            
            <div className="w-full md:w-1/2 relative hidden md:block">
              <div className="relative h-[300px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={service.image} 
                  alt={`Intervention en ${service.title}`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3 space-y-10">
              <div>
                <h2 className="text-3xl font-bold font-heading text-primary mb-6">Notre Expertise en {service.title}</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  {service.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-heading text-slate-800 mb-6">Ce que nous faisons :</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className={`h-6 w-6 shrink-0 ${service.color}`} />
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white">
                <div className="h-48 relative bg-slate-200">
                   {/* Fallback pattern if image is not specific */}
                   <Image 
                     src={service.image} 
                     alt={`Intervention ${service.title}`} 
                     fill
                     className="object-cover"
                   />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold font-heading text-primary mb-4">Besoin d'un devis ?</h3>
                  <p className="text-slate-600 mb-6 text-sm">
                    Obtenez une estimation rapide et gratuite pour vos travaux de {service.title.toLowerCase()}.
                  </p>
                  <a href="/contact" className="flex items-center justify-center w-full py-3 px-4 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-colors mb-3">
                    Demander un devis
                  </a>
                  <a href="tel:+33759046370" className="flex items-center justify-center w-full py-3 px-4 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                    Appeler une urgence
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
