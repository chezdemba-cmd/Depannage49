"use client";

import { motion } from "framer-motion";
import { 
  Droplet, 
  Zap, 
  ThermometerSun, 
  Wind, 
  Key, 
  Maximize, 
  Lightbulb 
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Plomberie",
    icon: Droplet,
    description: "Recherche de fuites, installations sanitaires et dépannage d'urgence.",
    href: "/services/plomberie",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Électricité",
    icon: Zap,
    description: "Mise aux normes, tableaux électriques et dépannage courant fort.",
    href: "/services/electricite",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    title: "Chauffage",
    icon: ThermometerSun,
    description: "Installation et entretien de chaudières, radiateurs et pompes à chaleur.",
    href: "/services/chauffage",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Climatisation",
    icon: Wind,
    description: "Maintenance et pose de systèmes de climatisation réversible.",
    href: "/services/climatisation",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    title: "Serrurerie",
    icon: Key,
    description: "Ouverture de porte, blindage et sécurisation d'accès.",
    href: "/services/serrurerie",
    color: "text-slate-500",
    bg: "bg-slate-50",
  },
  {
    title: "Vitrerie",
    icon: Maximize,
    description: "Remplacement de double vitrage, vitrines et fenêtres.",
    href: "/services/vitrerie",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Éclairage",
    icon: Lightbulb,
    description: "Éclairage domestique, public, LED et relamping.",
    href: "/services/eclairage",
    color: "text-amber-500",
    bg: "bg-amber-50",
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Nos Domaines d&apos;Intervention</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-primary">Une expertise technique complète</h3>
          <p className="text-muted-foreground mt-4 text-lg">
            Des solutions sur-mesure pour tous vos besoins en maintenance, installation et dépannage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/50 group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-7 w-7 ${service.color}`} />
                    </div>
                    <h4 className="text-xl font-bold font-heading mb-3 text-primary group-hover:text-secondary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground line-clamp-3">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
