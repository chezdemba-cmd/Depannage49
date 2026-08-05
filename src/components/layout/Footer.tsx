import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="DÉPANNAGE 49"
              width={180}
              height={50}
              className="h-12 w-auto bg-white p-2 rounded-md object-contain"
            />
            <p className="text-primary-foreground/80 text-sm mt-4 leading-relaxed">
              Votre partenaire technique de confiance dans le <span className="whitespace-nowrap">Maine-et-Loire</span>. 
              Interventions rapides et professionnelles pour particuliers et professionnels.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61592804099219" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300 text-primary-foreground/80">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@depannage49" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300 text-primary-foreground/80">
                <span className="sr-only">TikTok</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/entreprise" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  L&apos;entreprise
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Nos clients
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Nos expertises</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/plomberie" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Plomberie
                </Link>
              </li>
              <li>
                <Link href="/services/electricite" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Électricité
                </Link>
              </li>
              <li>
                <Link href="/services/chauffage" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Chauffage & Climatisation
                </Link>
              </li>
              <li>
                <Link href="/services/serrurerie" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Serrurerie
                </Link>
              </li>
              <li>
                <Link href="/services/vitrerie" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Vitrerie
                </Link>
              </li>
              <li>
                <Link href="/services/eclairage" className="text-primary-foreground/80 hover:text-secondary hover:pl-2 transition-all">
                  Éclairage Public
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-2">
                <a href="tel:+33759046370" className="flex items-center gap-3 group">
                  <div className="p-2 bg-secondary/20 rounded-lg group-hover:bg-secondary transition-colors">
                    <Phone className="h-5 w-5 text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/60 uppercase font-semibold">Urgences 24/7</p>
                    <p className="text-lg font-bold text-white">07 59 04 63 70</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Place Jean Vilar<br />
                  49000 Angers, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:49depannage@gmail.com" className="text-primary-foreground/80 text-sm hover:text-secondary">
                  49depannage@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Lun - Sam : 8h00 - 19h00<br />
                  Dimanche : Urgences uniquement
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} DÉPANNAGE 49. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
