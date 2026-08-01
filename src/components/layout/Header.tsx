"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Plomberie", href: "/services/plomberie" },
  { name: "Électricité", href: "/services/electricite" },
  { name: "Chauffage", href: "/services/chauffage" },
  { name: "Climatisation", href: "/services/climatisation" },
  { name: "Serrurerie", href: "/services/serrurerie" },
  { name: "Vitrerie", href: "/services/vitrerie" },
  { name: "Éclairage", href: "/services/eclairage" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DÉPANNAGE 49"
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/entreprise"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              L'entreprise
            </Link>
            
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Services <ChevronDown className="h-4 w-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100 py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/clients"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Nos clients
            </Link>
            <Link
              href="/realisations"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/contact"
              className={cn(buttonVariants(), "bg-primary hover:bg-primary/90 text-white font-medium")}
            >
              Demander un devis
            </Link>
            <a 
              href="tel:+33200000000"
              className={cn(buttonVariants({ variant: "outline" }), "border-secondary text-secondary hover:bg-secondary hover:text-white group")}
            >
              <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Urgence 24/7
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src="/logo.png"
                  alt="DÉPANNAGE 49"
                  width={150}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="flex flex-col gap-6">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/entreprise"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    L'entreprise
                  </Link>
                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between text-lg font-medium"
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-slate-600 py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link
                    href="/clients"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    Nos clients
                  </Link>
                  <Link
                    href="/realisations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    Réalisations
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
              <div className="p-4 border-t flex flex-col gap-3">
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(buttonVariants(), "w-full bg-primary")}
                >
                  Demander un devis
                </Link>
                <a 
                  href="tel:+33200000000"
                  className={cn(buttonVariants({ variant: "outline" }), "w-full border-secondary text-secondary")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler une urgence
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
