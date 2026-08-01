"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Premium CSS */}
      <div className="absolute inset-0 z-0 bg-primary">
        {/* Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,124,0,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,35,65,0.8),transparent_50%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-semibold text-sm border border-secondary/30 backdrop-blur-sm mb-4">
            Intervention rapide 24/7 dans tout le 49
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight leading-tight">
            Votre partenaire technique de proximité dans le <span className="text-secondary whitespace-nowrap">Maine-et-Loire</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light">
            Plomberie • Électricité • Chauffage • Climatisation • Serrurerie • Vitrerie • Éclairage
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto text-lg h-14 px-8 bg-secondary hover:bg-secondary/90 text-white border-0 shadow-lg shadow-secondary/20")}
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:+33759046370"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto text-lg h-14 px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-md")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.26,192.39,109.8,237.4,102.83,281.39,81.1,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
