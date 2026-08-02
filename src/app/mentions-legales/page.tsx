import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | DÉPANNAGE 49",
  description: "Mentions légales du site DÉPANNAGE 49, intervenant dans le Maine-et-Loire.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Mentions Légales</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Informations légales et réglementaires concernant le site internet DÉPANNAGE 49.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate md:prose-lg">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>DÉPANNAGE 49</strong> est édité par :
            </p>
            <ul>
              <li><strong>Nom de l'entreprise :</strong> DÉPANNAGE 49</li>
              <li><strong>Adresse :</strong> Place Jean Vilar, 49000 Angers, France</li>
              <li><strong>Téléphone :</strong> 07 59 04 63 70</li>
              <li><strong>Email :</strong> <a href="mailto:49depannage@gmail.com">49depannage@gmail.com</a></li>
            </ul>

            <h2>2. Hébergement</h2>
            <p>
              Le site est hébergé par :
            </p>
            <p>
              <em>(À compléter avec les informations de votre hébergeur - ex: Vercel, OVH, Hostinger, etc.)</em>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse.
            </p>

            <h2>4. Responsabilité</h2>
            <p>
              Les informations proposées sur ce site le sont à titre indicatif. <strong>DÉPANNAGE 49</strong> s'efforce de maintenir ces informations à jour et exactes, mais ne saurait garantir l'exactitude, l'exhaustivité ou l'actualité des informations diffusées sur son site.
            </p>
            <p>
              En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>

            <h2>5. Liens hypertextes</h2>
            <p>
              La mise en place de liens hypertextes vers le site de <strong>DÉPANNAGE 49</strong> est libre sous réserve que cela ne porte pas atteinte aux intérêts de l'entreprise. <strong>DÉPANNAGE 49</strong> décline toute responsabilité quant au contenu des sites tiers qui seraient liés au sien par des liens hypertextes.
            </p>

            <h2>6. Données personnelles</h2>
            <p>
              Pour plus d'informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <a href="/confidentialite">Politique de confidentialité</a>.
            </p>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="m-0 text-sm text-slate-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
