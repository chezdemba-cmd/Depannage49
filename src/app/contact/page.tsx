"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Contactez-nous</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Une urgence ? Un projet d'installation ? Remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone ou WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+33759046370"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white shadow-lg")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Urgence 24/7 : 07 59 04 63 70
              </a>
              <a 
                href="https://wa.me/33759046370" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto h-14 px-8 text-lg border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info & Map */}
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                  <MapPin className="h-8 w-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Adresse</h3>
                    <p className="text-slate-600 text-sm">Place Jean Vilar<br/>49000 Angers, France</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                  <Phone className="h-8 w-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Téléphone</h3>
                    <p className="text-slate-600 text-sm">07 59 04 63 70<br/>07 59 04 63 70 (Urgences)</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                  <Mail className="h-8 w-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Email</h3>
                    <p className="text-slate-600 text-sm">49depannage@gmail.com</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
                  <Clock className="h-8 w-8 text-secondary shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Horaires</h3>
                    <p className="text-slate-600 text-sm">Lun - Sam : 8h00 - 19h00<br/>Dimanche : Urgences 24/7</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed (Placeholder URL, should be replaced with real embed URL) */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86082.90263625732!2d-0.6274415444122115!3d47.4704516584288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878e1b6f63be3%3A0x40d37521e089d70!2sAngers!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation DÉPANNAGE 49"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                <h2 className="text-3xl font-bold font-heading text-primary mb-2">Demande de devis en ligne</h2>
                <p className="text-slate-500 mb-8">Remplissez le formulaire, nous vous répondrons sous 24h.</p>
                
                <form action="https://formsubmit.co/49depannage@gmail.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="Nouvelle demande de contact - Site Web" />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Prénom</Label>
                      <Input id="firstname" name="Prénom" placeholder="Jean" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nom</Label>
                      <Input id="lastname" name="Nom" placeholder="Dupont" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="jean.dupont@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" name="Téléphone" type="tel" placeholder="07 59 04 63 70" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Type de demande</Label>
                    <select 
                      id="service" 
                      name="Service concerné"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Sélectionnez un domaine</option>
                      <option value="plomberie">Plomberie</option>
                      <option value="electricite">Électricité</option>
                      <option value="chauffage">Chauffage / Climatisation</option>
                      <option value="serrurerie">Serrurerie</option>
                      <option value="vitrerie">Vitrerie</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Votre message</Label>
                    <Textarea 
                      id="message" 
                      name="Message"
                      placeholder="Décrivez votre problème ou votre projet avec le plus de détails possible..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg">
                    Envoyer ma demande
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
