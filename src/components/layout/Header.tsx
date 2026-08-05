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
  { name: "Éclairage Public", href: "/services/eclairage" },
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
              L&apos;entreprise
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
            <div className="flex items-center gap-3 mr-2">
              <a href="https://www.facebook.com/profile.php?id=61592804099219" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@depannage49" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">TikTok</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
            <a 
              href="#devis"
              className={cn(buttonVariants(), "bg-primary hover:bg-primary/90 text-white font-medium")}
            >
              Demander un devis
            </a>
            <a 
              href="tel:+33759046370"
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
                    L&apos;entreprise
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
                <a 
                  href="#devis" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(buttonVariants(), "w-full bg-primary")}
                >
                  Demander un devis
                </a>
                <a 
                  href="tel:+33759046370"
                  className={cn(buttonVariants({ variant: "outline" }), "w-full border-secondary text-secondary")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler une urgence
                </a>
                <div className="flex items-center justify-center gap-4 pt-4 mt-2 border-t border-slate-100">
                  <a href="https://www.facebook.com/profile.php?id=61592804099219" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-primary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@depannage49" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-primary transition-colors">
                    <span className="sr-only">TikTok</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
