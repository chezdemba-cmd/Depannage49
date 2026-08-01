"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Réactivité garantie",
    description: "Intervention rapide 24h/24 et 7j/7 pour toutes vos urgences dans le Maine-et-Loire.",
    icon: Clock,
  },
  {
    title: "Qualité certifiée",
    description: "Des professionnels qualifiés et un respect strict des normes en vigueur (NF, DTU).",
    icon: ShieldCheck,
  },
  {
    title: "Transparence totale",
    description: "Devis gratuits, détaillés et sans engagement avant toute intervention.",
    icon: CheckCircle2,
  },
  {
    title: "Satisfaction client",
    description: "Des centaines d'avis positifs et un suivi personnalisé de vos chantiers.",
    icon: ThumbsUp,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary/10 transform -skew-y-6 rounded-3xl -z-10"></div>
              <Image 
                src="/flyers.png" 
                alt="Pourquoi choisir Dépannage 49" 
                width={600} 
                height={600} 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-slate-800">98%</p>
                    <p className="text-sm text-slate-500 font-medium">Clients satisfaits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Nos Engagements</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
              Pourquoi faire appel à DÉPANNAGE 49 ?
            </h3>
            <p className="text-muted-foreground text-lg mb-10">
              Nous combinons le professionnalisme des grands groupes et la proximité d'un artisan local pour vous offrir un service technique irréprochable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-secondary border border-primary/10">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-800">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
