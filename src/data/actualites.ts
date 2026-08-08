export type ActualiteData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
};

export const actualitesData: Record<string, ActualiteData> = {
  "pourquoi-mon-ballon-d-eau-chaude-fuit": {
    slug: "pourquoi-mon-ballon-d-eau-chaude-fuit",
    title: "Pourquoi mon ballon d'eau chaude fuit-il ?",
    description: "Découvrez les causes principales d'une fuite sur un chauffe-eau et les bons réflexes à avoir avant l'arrivée du plombier.",
    date: "2024-05-15",
    category: "Plomberie",
    content: [
      "Une fuite sur un ballon d'eau chaude (ou cumulus) est un problème fréquent qui nécessite souvent l'intervention rapide d'un professionnel pour éviter un dégât des eaux.",
      "La première cause d'une fuite est souvent liée au groupe de sécurité. Il est normal qu'un peu d'eau s'écoule pendant la chauffe, mais si le goutte-à-goutte est continu, la pièce est probablement entartrée ou défectueuse.",
      "Une autre cause possible est la corrosion de la cuve. Si l'eau fuit directement depuis la cuve (et non par un raccord), c'est malheureusement le signe que le ballon est percé et doit être remplacé.",
      "Les bons réflexes : Coupez immédiatement l'alimentation électrique de votre chauffe-eau depuis le tableau électrique. Ensuite, fermez l'arrivée d'eau froide située sur le groupe de sécurité.",
      "Si vous habitez dans le Maine-et-Loire, nos plombiers experts peuvent intervenir rapidement pour diagnostiquer et réparer ou remplacer votre équipement."
    ],
    seoTitle: "Fuite Ballon d'Eau Chaude : Que faire ? | Conseils Dépannage 49",
    seoDescription: "Votre chauffe-eau fuit ? Découvrez les causes et les bons réflexes à adopter. Dépannage 49, votre plombier expert à Angers vous conseille.",
  },
  "mise-aux-normes-electriques": {
    slug: "mise-aux-normes-electriques",
    title: "Mise aux normes électriques : Quand et pourquoi ?",
    description: "L'installation électrique de votre logement est-elle sécurisée ? Zoom sur l'importance de la mise aux normes.",
    date: "2024-06-02",
    category: "Électricité",
    content: [
      "Une installation électrique vétuste représente un risque majeur pour votre sécurité (incendies, électrisations). C'est pourquoi la mise aux normes est essentielle, particulièrement dans les logements anciens.",
      "La norme NFC 15-100 encadre aujourd'hui toutes les installations électriques basse tension en France. Elle impose notamment la présence d'un disjoncteur différentiel 30mA, un nombre minimum de prises par pièce et une liaison équipotentielle dans la salle de bain.",
      "Si vos prises n'ont pas de broche de terre, si vos fils sont isolés par du tissu ou si votre tableau électrique est encore équipé de fusibles en porcelaine, il est grand temps d'envisager une rénovation.",
      "Lors de la vente d'un bien immobilier ou de travaux de rénovation importants, un diagnostic électrique est obligatoire. En cas d'anomalies, nos artisans électriciens interviennent pour remettre votre installation en conformité.",
      "Basés à Angers, nous sécurisons les installations électriques dans tout le 49. Demandez votre diagnostic de sécurité."
    ],
    seoTitle: "Mise aux Normes Électriques Angers | Conseils Dépannage 49",
    seoDescription: "Sécurisez votre logement avec une mise aux normes électriques. Découvrez nos conseils et faites appel à notre électricien à Angers.",
  },
  "entretenir-sa-climatisation": {
    slug: "entretenir-sa-climatisation",
    title: "Les bons gestes pour entretenir sa climatisation",
    description: "Un entretien régulier de votre climatisation réversible garantit de meilleures performances et une qualité d'air optimale.",
    date: "2024-07-20",
    category: "Chauffage & Clim",
    content: [
      "L'été approche et votre climatiseur va tourner à plein régime. Pour garantir son efficacité, réduire votre consommation électrique et prolonger sa durée de vie, un entretien régulier est indispensable.",
      "Le geste le plus simple que vous pouvez faire vous-même est le nettoyage des filtres. Ouvrez l'unité intérieure, retirez les filtres et dépoussiérez-les avec un aspirateur ou rincez-les à l'eau tiède (séchez-les bien avant de les remettre). Cela devrait être fait toutes les 2 à 3 semaines en période d'utilisation intensive.",
      "Pensez également à dépoussiérer l'unité extérieure et vérifiez qu'aucune feuille ou branche ne bloque le ventilateur.",
      "Cependant, un entretien professionnel annuel est vivement recommandé (voire obligatoire selon la quantité de fluide frigorigène). Nos frigoristes vérifieront l'étanchéité du circuit, le rendement de l'appareil et réaliseront un nettoyage antibactérien profond.",
      "Dépannage 49 propose des contrats de maintenance pour votre climatisation dans le Maine-et-Loire."
    ],
    seoTitle: "Entretien Climatisation Angers : Les Bons Gestes | Dépannage 49",
    seoDescription: "Comment bien entretenir sa climatisation ? Nettoyage des filtres, vérification. Dépannage 49, votre expert clim à Angers.",
  },
  "securisez-votre-installation-electrique-conseils-essentiels": {
      "slug": "securisez-votre-installation-electrique-conseils-essentiels",
      "title": "Sécurisez votre Installation Électrique : Conseils Essentiels",
      "description": "Découvrez comment protéger votre installation électrique à Angers avec nos conseils pratiques. Apprenez à prévenir les pannes et à garantir la sécurité de votre foyer.",
      "date": "2026-08-08",
      "category": "Électricité",
      "content": [
          "L'électricité est un élément essentiel de notre quotidien. Que ce soit pour éclairer votre maison, faire fonctionner vos appareils électroménagers ou alimenter vos équipements technologiques, il est crucial d'avoir une installation électrique sûre et bien entretenue.",
          "La première étape pour assurer la sécurité de votre installation électrique est de vérifier régulièrement vos câbles et prises. Des signes de vieillissement, comme des fissures, des brûlures ou des décolorations, peuvent indiquer un danger imminent.",
          "Il est également important d'installer des dispositifs de protection, tels que des disjoncteurs différentiels. Ces appareils sont conçus pour couper l'électricité en cas de fuite, protégeant ainsi votre maison des risques d'électrocution et d'incendie.",
          "Ne négligez pas non plus l'importance d'un éclairage extérieur adéquat. Cela contribue non seulement à la sécurité de votre propriété, mais également à dissuader les intrus. Pensez à installer des détecteurs de mouvement pour plus de praticité et de sécurité.",
          "Enfin, en cas de doute sur l'état de votre installation électrique, n'hésitez pas à faire appel à un professionnel qualifié comme Dépannage 49 à Angers. Nous vous aiderons à effectuer un diagnostic complet et à réaliser les réparations nécessaires."
      ],
      "seoTitle": "Sécurité Électrique à Angers | Dépannage 49",
      "seoDescription": "Assurez la sécurité de votre installation électrique à Angers avec nos conseils pratiques et l'expertise de Dépannage 49."
  }
};

export const getActualitesList = () => Object.values(actualitesData);
