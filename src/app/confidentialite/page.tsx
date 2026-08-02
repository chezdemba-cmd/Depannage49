import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | DÉPANNAGE 49",
  description: "Politique de confidentialité et protection des données personnelles de DÉPANNAGE 49.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Politique de Confidentialité</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              DÉPANNAGE 49 s'engage à protéger la vie privée de ses utilisateurs et la confidentialité de leurs données personnelles.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate md:prose-lg">
            <h2>1. Collecte des données personnelles</h2>
            <p>
              Nous collectons les données personnelles que vous nous fournissez volontairement, notamment lorsque vous :
            </p>
            <ul>
              <li>Remplissez notre formulaire de contact</li>
              <li>Faites une demande de devis</li>
              <li>Nous contactez par téléphone ou par email</li>
            </ul>
            <p>
              Les données collectées peuvent inclure : votre nom, prénom, adresse postale, adresse email, numéro de téléphone, ainsi que toute information liée à votre demande d'intervention.
            </p>

            <h2>2. Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul>
              <li>Traiter vos demandes d'intervention, de dépannage ou de devis</li>
              <li>Vous contacter concernant nos services</li>
              <li>Gérer la facturation et le suivi de notre relation commerciale</li>
              <li>Améliorer la qualité de nos services</li>
            </ul>

            <h2>3. Conservation des données</h2>
            <p>
              Nous conservons vos données personnelles uniquement le temps nécessaire à l'accomplissement des finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur. Les données liées à la facturation sont conservées conformément aux obligations légales (10 ans).
            </p>

            <h2>4. Partage des données</h2>
            <p>
              DÉPANNAGE 49 s'engage à ne jamais vendre, louer ou céder vos données personnelles à des tiers à des fins commerciales. Vos données peuvent être partagées uniquement avec nos sous-traitants techniques (hébergement web) qui sont tenus à des obligations strictes de confidentialité.
            </p>

            <h2>5. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute destruction, perte, altération ou accès non autorisé.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable (RGPD), vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul>
              <li>Droit d'accès et de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse suivante : <strong><a href="mailto:49depannage@gmail.com">49depannage@gmail.com</a></strong>.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Notre site web utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle permettant de vous identifier directement.
            </p>

            <h2>8. Modification de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.
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
