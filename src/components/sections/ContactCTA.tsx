"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PhoneCall, Calendar } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Besoin d'une intervention rapide ?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Nos équipes sont prêtes à intervenir dans tout le Maine-et-Loire. Demandez votre devis gratuit dès maintenant.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Demander un devis
              </Link>
              <a 
                href="tel:+33759046370"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto h-14 px-8 text-lg bg-white hover:bg-slate-50 text-primary border-0")}
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Appeler le 07 59 04 63 70
              </a>
            </div>
            
            <p className="text-sm text-primary-foreground/60 mt-8">
              Intervention en urgence possible 24h/24 et 7j/7
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
