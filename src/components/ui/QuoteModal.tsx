"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
    const handleHashChange = () => {
      if (window.location.hash === "#devis") {
        setIsOpen(true);
        document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
      } else {
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!isOpen) return null;

  const closeModal = () => {
    window.location.hash = "";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8 md:p-10 overflow-y-auto">
          <h2 className="text-3xl font-bold font-heading text-primary mb-2">Demande de devis</h2>
          <p className="text-slate-500 mb-8">
            Remplissez ce formulaire. Votre demande sera envoyée directement sur notre boîte e-mail.
          </p>
          
          <form action="https://formsubmit.co/49depannage@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="Nouvelle demande de devis - Site Web" />
            <input type="hidden" name="_next" value={origin ? `${origin}/?success=true` : ""} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="modal-firstname">Prénom</Label>
                <Input id="modal-firstname" name="Prénom" placeholder="Jean" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-lastname">Nom</Label>
                <Input id="modal-lastname" name="Nom" placeholder="Dupont" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="modal-email">Email</Label>
                <Input id="modal-email" name="email" type="email" placeholder="jean.dupont@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-phone">Téléphone</Label>
                <Input id="modal-phone" name="Téléphone" type="tel" placeholder="07 59 04 63 70" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-service">Type de demande</Label>
              <select 
                id="modal-service" 
                name="Service concerné"
                defaultValue=""
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="" disabled>Sélectionnez un domaine</option>
                <option value="Plomberie">Plomberie</option>
                <option value="Électricité">Électricité</option>
                <option value="Chauffage / Climatisation">Chauffage / Climatisation</option>
                <option value="Serrurerie">Serrurerie</option>
                <option value="Vitrerie">Vitrerie</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-message">Votre message</Label>
              <Textarea 
                id="modal-message" 
                name="Message"
                placeholder="Décrivez votre problème ou votre projet avec le plus de détails possible..." 
                className="min-h-[120px]"
                required
              />
            </div>

            <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg font-semibold">
              Envoyer ma demande
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
