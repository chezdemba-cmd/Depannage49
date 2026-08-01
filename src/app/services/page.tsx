import { Metadata } from "next";
import { getServicesList } from "@/data/services";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Nos Services | DÉPANNAGE 49",
  description: "Découvrez toutes nos expertises techniques : plomberie, électricité, chauffage, climatisation, serrurerie, vitrerie et éclairage dans le 49.",
};

export default function ServicesPage() {
  const services = getServicesList();

  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Nos Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            DÉPANNAGE 49 regroupe plusieurs corps de métiers pour répondre à tous vos besoins d'installation, de maintenance et de dépannage.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-secondary group overflow-hidden">
                  <div className={`h-2 w-full ${service.bg.replace('bg-', 'bg-').replace('-50', '-500')}`} />
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold font-heading mb-4 text-primary group-hover:text-secondary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${service.bg.replace('bg-', 'bg-').replace('-50', '-500')}`} />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-slate-400 italic">Et plus encore...</li>
                      )}
                    </ul>
                    <span className="inline-block mt-auto text-sm font-semibold text-secondary group-hover:underline">
                      En savoir plus &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
