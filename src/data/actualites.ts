export type ActualiteData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string[];
  seoTitle: string;
  seoDescription: string;
  imageUrl?: string;
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
  },
  "les-cles-perdues-comment-eviter-le-stress-et-securiser-votre-maison": {
      "slug": "les-cles-perdues-comment-eviter-le-stress-et-securiser-votre-maison",
      "title": "Les clés perdues : Comment éviter le stress et sécuriser votre maison",
      "description": "Perdre vos clés peut être une source de stress considérable. Découvrez des conseils pratiques pour gérer cette situation et sécuriser rapidement votre domicile.",
      "date": "2026-08-08",
      "category": "Serrurerie",
      "content": [
          "La perte de clés est un incident courant qui peut arriver à tout le monde. Que ce soit des clés de maison, de voiture ou de bureau, il est essentiel d'adopter une approche calme et méthodique pour résoudre ce problème.",
          "Tout d'abord, avant de paniquer, prenez un moment pour retracer vos pas. Souvent, les clés égarées se trouvent dans des endroits familiers tels que votre sac, une poche de manteau ou même dans le bureau. Un bon système d'organisation peut également vous aider à retrouver vos précieuses clés plus facilement à l'avenir.",
          "Si malgré vos recherches, vous ne parvenez pas à retrouver vos clés, il est temps d'envisager de changer les serrures. Cela peut sembler une solution extrême, mais cela garantit la sécurité de votre domicile, surtout si vous avez perdu vos clés dans un lieu public.",
          "Pour éviter ces situations stressantes à l'avenir, pensez à investir dans des clés numériques ou des serrures intelligentes. Ces systèmes vous permettent d'accéder à votre domicile sans clé physique et sont souvent plus sécurisés que les serrures traditionnelles.",
          "En cas de besoin d'une assistance professionnelle, n'hésitez pas à contacter Dépannage 49 à Angers. Nos experts en serrurerie sont à votre disposition pour vous aider à résoudre rapidement ce genre de problème et à renforcer la sécurité de votre domicile."
      ],
      "seoTitle": "Clés perdues ? Dépannage 49 à Angers vous aide !",
      "seoDescription": "Découvrez comment gérer la perte de clés et sécuriser votre maison avec Dépannage 49 à Angers. Conseils pratiques pour éviter le stress.",
      "imageUrl": ""
  },
  "mode-demploi-de-la-regulation-du-chauffage-optimisez-votre-confort-": {
      "slug": "mode-demploi-de-la-regulation-du-chauffage-optimisez-votre-confort-",
      "title": "Mode d'emploi de la régulation du chauffage : Optimisez votre confort !",
      "description": "Découvrez comment une régulation efficace de votre système de chauffage peut améliorer votre confort tout en réduisant vos factures d'énergie. Des conseils pratiques pour le chauffage à Angers.",
      "date": "2026-08-08",
      "category": "Chauffage & Clim",
      "content": [
          "La régulation du chauffage est un élément souvent sous-estimé dans la gestion du confort thermique d'un logement. En effet, un système de chauffage bien régulé permet non seulement de garantir une température agréable, mais aussi de réaliser des économies d'énergie significatives.",
          "De nombreux logements sont équipés de thermostats traditionnels qui ne permettent pas une gestion optimale de la température. En investissant dans un thermostat programmable ou intelligent, vous pouvez ajuster automatiquement la température en fonction de vos horaires de présence, ce qui évite de chauffer inutilement lorsque vous n'êtes pas chez vous.",
          "L'installation de vannes thermostatiques sur les radiateurs représente une autre solution efficace. Ces vannes permettent de régler la température pièce par pièce, ce qui vous donne la possibilité de chauffer uniquement les zones que vous utilisez, optimisant ainsi votre consommation énergétique.",
          "Il est également crucial de vérifier régulièrement l'état de votre système de chauffage. Un entretien préventif, tel que le nettoyage des filtres et la purge des radiateurs, contribuera à son bon fonctionnement. Un système mal entretenu est souvent source de pannes et peut entraîner une consommation énergétique accrue.",
          "Enfin, pensez à la programmation hebdomadaire de votre système de chauffage. Cela vous permet de définir une température idéale pour vos nuits, vos journées de travail et vos week-ends selon votre emploi du temps. Une gestion proactive de votre chauffage peut faire la différence sur votre facture à la fin du mois.",
          "En conclusion, une bonne régulation du chauffage est la clé d'un confort thermique optimal et d'économies d'énergie. N'hésitez pas à faire appel à des professionnels de \"Dépannage 49\" à Angers pour vous aider à mettre en place ces solutions."
      ],
      "seoTitle": "Optimisez votre chauffage à Angers avec Dépannage 49",
      "seoDescription": "Améliorez votre confort thermique et réduisez vos factures d'énergie grâce à une régulation efficace de votre chauffage à Angers avec Dépannage 49.",
      "imageUrl": ""
  },
  "comment-choisir-un-chauffage-economique-et-performant-": {
      "slug": "comment-choisir-un-chauffage-economique-et-performant-",
      "title": "Comment choisir un chauffage économique et performant ?",
      "description": "Découvrez les critères essentiels pour sélectionner un système de chauffage adapté, performant et économique pour votre maison à Angers.",
      "date": "2026-08-08",
      "category": "Chauffage & Clim",
      "content": [
          "Choisir un système de chauffage peut sembler complexe en raison de la variété des options disponibles. Il est essentiel de considérer non seulement le confort thermique, mais aussi l'efficacité énergétique et les coûts d'installation et de fonctionnement. Dans cet article, nous vous guiderons à travers les principaux facteurs à prendre en compte.",
          "Le premier critère à évaluer est le type de combustible ou d'énergie utilisé. Les chauffages électriques, à gaz, ou à bois présentent des avantages et des inconvénients différents. Par exemple, un système à gaz est souvent plus économique à l'usage, tandis qu'un chauffage électrique peut être plus simple à installer. Pensez également à la disponibilité de ces ressources dans votre région à Angers.",
          "L'efficacité énergétique est un autre point crucial. Optez pour des équipements classés A+ ou A++, qui garantissent une réduction significative de votre consommation d'énergie. Les chaudières à condensation ou les pompes à chaleur sont des options à envisager, car elles utilisent les ressources de manière optimale, tout en vous permettant de réaliser des économies sur votre facture de chauffage.",
          "N'oubliez pas de prendre en compte la superficie de votre logement et son isolation. Un système de chauffage surdimensionné peut entraîner des coûts inutiles, tout comme un chauffage insuffisant. Assurez-vous que votre maison est correctement isolée pour limiter les déperditions de chaleur, cela augmentera l'efficacité de votre chauffage et diminuera son coût d'exploitation.",
          "Enfin, n'hésitez pas à faire appel à un professionnel de 'Dépannage 49' pour obtenir des conseils personnalisés. Chaque maison est unique et un expert pourra vous aider à trouver la solution de chauffage qui répond parfaitement à vos besoins et à votre budget, tout en garantissant votre confort.",
          "Choisir un système de chauffage est une décision stratégique pour votre maison. En tenant compte de ces critères, vous pourrez investir dans un équipement qui répond à vos attentes, tout en étant respectueux de l'environnement."
      ],
      "seoTitle": "Choisir un chauffage économique à Angers - Dépannage 49",
      "seoDescription": "Découvrez comment sélectionner un chauffage performant et économique pour votre maison à Angers avec nos conseils d'experts.",
      "imageUrl": ""
  },
  "comment-choisir-le-bon-vitrage-pour-votre-maison-": {
      "slug": "comment-choisir-le-bon-vitrage-pour-votre-maison-",
      "title": "Comment choisir le bon vitrage pour votre maison ?",
      "description": "Le choix du vitrage est essentiel pour améliorer le confort et l'efficacité énergétique de votre maison. Découvrez les critères à prendre en compte pour votre selection.",
      "date": "2026-08-08",
      "category": "Vitrerie",
      "content": [
          "Le vitrage joue un rôle crucial dans l'isolation thermique et acoustique de votre maison. Un bon vitrage peut réduire vos factures d'énergie et améliorer votre confort quotidien.",
          "Il existe plusieurs types de vitrage, tels que le simple, le double et le triple vitrage. Le double vitrage est souvent recommandé pour ses performances thermiques supérieures par rapport au simple vitrage.",
          "Lorsque vous choisissez votre vitrage, pensez également à l'indice de transmission lumineuse. Plus cet indice est élevé, plus la lumière naturelle pourra entrer dans votre maison, ce qui peut améliorer votre bien-être.",
          "Un autre aspect à considérer est l'efficacité énergétique. Des vitrages spécifiques, comme le vitrage à faible émissivité, peuvent minimiser les pertes de chaleur et, en même temps, maximiser l'apport solaire.",
          "Pensez enfin à la sécurité. Le vitrage feuilleté ou le vitrage trempé peut offrir une plus grande résistance aux chocs, ce qui est particulièrement important pour les fenêtres en rez-de-chaussée ou les zones sensibles.",
          "Pour un choix éclairé et adapté à votre maison, n’hésitez pas à faire appel à un professionnel de la vitrerie. Chez Dépannage 49, nous sommes à votre disposition pour vous conseiller et installer vos vitrages."
      ],
      "seoTitle": "Choisir le bon vitrage à Angers | Dépannage 49",
      "seoDescription": "Découvrez comment choisir le vitrage idéal pour votre maison à Angers avec Dépannage 49. Confort et efficacité énergétique au rendez-vous.",
      "imageUrl": ""
  },
  "comment-choisir-le-bon-verre-pour-vos-fenetres-": {
      "slug": "comment-choisir-le-bon-verre-pour-vos-fenetres-",
      "title": "Comment choisir le bon verre pour vos fenêtres ?",
      "description": "Le choix du verre pour vos fenêtres peut influencer l'isolation thermique et phonique de votre maison. Découvrez les différents types de verre et leurs avantages.",
      "date": "2026-08-08",
      "category": "Vitrerie",
      "content": [
          "Le choix du verre pour vos fenêtres est crucial pour assurer le confort de votre habitation. En effet, le type de vitrage peut avoir un impact significatif sur l'isolation thermique et phonique de votre maison.",
          "Il existe plusieurs types de verre, chacun ayant ses propres caractéristiques. Le verre simple, le double vitrage et le triple vitrage offrent des niveaux d'isolation différents, ce qui est essentiel à prendre en compte selon votre région.",
          "Le verre à haut rendement énergétique est une excellente option pour ceux qui cherchent à réduire leurs factures d'énergie. Ce type de vitrage est conçu pour refléter la chaleur extérieure en été et la conserver en hiver.",
          "Pour une protection supplémentaire contre le bruit, optez pour un vitrage acoustique, qui réduit efficacement les nuisances sonores. Cela peut être particulièrement intéressant si vous habitez près d'une route passante ou dans un environnement bruyant.",
          "Enfin, n'oubliez pas de considérer la sécurité. Le verre trempé ou le verre feuilleté sont de bonnes options pour renforcer la sécurité de vos fenêtres, tout en offrant une excellente clarté.",
          "Avant de faire votre choix, il est conseillé de consulter un professionnel comme Dépannage 49, qui pourra vous guider vers la meilleure solution adaptée à vos besoins."
      ],
      "seoTitle": "Choisir le bon verre pour vos fenêtres à Angers",
      "seoDescription": "Découvrez comment choisir le verre idéal pour vos fenêtres à Angers avec Dépannage 49 et améliorez votre confort thermique et phonique.",
      "imageUrl": ""
  },
  "eclairage-led-pourquoi-et-comment-passer-a-cette-technologie-": {
      "slug": "eclairage-led-pourquoi-et-comment-passer-a-cette-technologie-",
      "title": "Éclairage LED : Pourquoi et comment passer à cette technologie ?",
      "description": "Découvrez les avantages de l'éclairage LED pour votre domicile à Angers. Apprenez comment réaliser cette transition bénéfique pour votre espace et vos finances.",
      "date": "2026-08-08",
      "category": "Électricité",
      "content": [
          "L'éclairage LED est de plus en plus prisé dans les foyers en raison de ses nombreux avantages. Dans cet article, nous allons explorer pourquoi il est judicieux de remplacer vos anciennes ampoules par des modèles LED.",
          "Tout d'abord, l'un des principaux avantages des LED est leur efficacité énergétique. En effet, elles consomment jusqu'à 80% moins d'énergie que les ampoules classiques, ce qui se traduit par des factures d'électricité considérablement réduites.",
          "Ensuite, la longévité est un autre point fort des ampoules LED. Elles peuvent durer jusqu'à 25 000 heures, contre seulement 1 000 heures pour une ampoule à incandescence. Cela signifie moins de remplacements, donc un gain de temps et d'argent.",
          "Un autre aspect intéressant est la variété des éclairages disponibles. Les LEDs offrent un large choix de couleurs et de températures de lumière, permettant de créer l'atmosphère souhaitée dans chaque pièce de votre maison.",
          "Enfin, bien qu'investir dans des ampoules LED puisse sembler coûteux au départ, le retour sur investissement est rapide grâce aux économies réalisées sur votre consommation d'énergie. Il est donc temps de faire le choix de la durabilité et de l'économie.",
          "Pour faciliter votre transition vers l'éclairage LED, n'hésitez pas à faire appel à un professionnel, comme Dépannage 49, afin de vous guider dans cette démarche et assurer une installation sans souci."
      ],
      "seoTitle": "Éclairage LED à Angers - Dépannage 49",
      "seoDescription": "Découvrez comment passer à l'éclairage LED à Angers et ses avantages pour votre maison avec Dépannage 49.",
      "imageUrl": ""
  },
  "comment-choisir-la-bonne-serrure-pour-votre-domicile-": {
      "slug": "comment-choisir-la-bonne-serrure-pour-votre-domicile-",
      "title": "Comment choisir la bonne serrure pour votre domicile ?",
      "description": "Le choix d'une serrure est crucial pour la sécurité de votre maison. Cet article vous guide à travers les différents types de serrures et leur installation.",
      "date": "2026-08-08",
      "category": "Serrurerie",
      "content": [
          "La sécurité de votre domicile commence par le choix d'une bonne serrure. Avec de nombreuses options disponibles sur le marché, il est essentiel de comprendre les principaux types de serrures et leurs avantages.",
          "Les serrures à fouillot, souvent utilisées sur les portes d'entrée, offrent un bon niveau de sécurité et sont faciles à utiliser. Elles permettent l'accès avec une clé et un verrouillage simple.",
          "Les serrures à cylindre, quant à elles, sont populaires pour leur efficacité. Elles peuvent être équipées de clés de sécurité, offrant une protection supplémentaire contre les cambriolages.",
          "Pour ceux qui recherchent une sécurité maximale, les serrures multipoints sont une excellente option. Elles verrouillent la porte à plusieurs points, rendant l'effraction plus difficile.",
          "N'oubliez pas de considérer les normes de sécurité en vigueur. Optez pour des serrures certifiées A2P, qui garantissent un niveau de résistance éprouvé.",
          "Enfin, l'installation par un professionnel de la serrurerie, comme ceux de Dépannage 49 à Angers, est recommandée pour s'assurer que votre serrure soit posée correctement et fonctionne efficacement."
      ],
      "seoTitle": "Choisir serrure à Angers | Dépannage 49",
      "seoDescription": "Découvrez comment choisir la serrure idéale pour sécuriser votre domicile à Angers avec les conseils de Dépannage 49.",
      "imageUrl": ""
  },
  "detecter-et-prevenir-les-fuites-deau-souterraines": {
      "slug": "detecter-et-prevenir-les-fuites-deau-souterraines",
      "title": "Détecter et Prévenir les Fuites d'Eau Souterraines",
      "description": "Découvrez comment identifier et prévenir les fuites d'eau souterraines dans votre maison. Un guide complet pour éviter les dégâts matériels.",
      "date": "2026-08-08",
      "category": "Plomberie",
      "content": [
          "Les fuites d'eau souterraines représentent un véritable casse-tête pour de nombreux propriétaires. Souvent invisibles au premier abord, elles peuvent causer des dommages considérables à votre habitation et engendrer des coûts de réparation élevés.",
          "Pour détecter une fuite d'eau souterraine, surveillez votre compteur d'eau. Si celui-ci continue de tourner alors que tous vos appareils sont à l'arrêt, il y a de fortes chances qu'une fuite soit présente quelque part dans votre système.",
          "Une autre méthode efficace consiste à inspecter votre jardin. Des zones où le sol est anormalement humide ou boueux peuvent indiquer une fuite d'eau sous terre. Ces signes peuvent parfois être accompagnés d'une croissance excessive de végétation.",
          "Si vous suspectez une fuite, il est essentiel d'agir rapidement. Non seulement cela peut éviter des dommages structurels, mais cela permet également de réduire votre consommation d'eau et, par conséquent, votre facture.",
          "Pour prévenir les fuites d'eau souterraines, procédez à des inspections régulières de vos canalisations et de votre système de plomberie. Pensez à faire appel à un professionnel comme Dépannage 49 pour des vérifications approfondies et des conseils personnalisés."
      ],
      "seoTitle": "Fuites d'Eau Souterraines : Conseils à Angers | Dépannage 49",
      "seoDescription": "Apprenez à détecter et prévenir les fuites d'eau souterraines dans votre maison à Angers avec Dépannage 49. Evitez les dégâts matériels !",
      "imageUrl": ""
  },
  "comment-choisir-le-vitrage-adapte-a-votre-habitat-": {
      "slug": "comment-choisir-le-vitrage-adapte-a-votre-habitat-",
      "title": "Comment choisir le vitrage adapté à votre habitat ?",
      "description": "Le choix du vitrage est crucial pour le confort et la performance énergétique de votre habitat. Découvrez les différents types de vitrages et leurs avantages.",
      "date": "2026-08-08",
      "category": "Vitrerie",
      "content": [
          "Lorsque l'on envisage de remplacer des fenêtres ou des portes en verre, le choix du vitrage est primordial. En effet, il joue un rôle important dans l'isolation thermique, phonique, et même la sécurité de votre domicile.",
          "Il existe plusieurs types de vitrage : simple, double et triple. Le vitrage simple est de moins en moins utilisé, tandis que le double vitrage reste le standard le plus courant. Le triple vitrage, bien que plus coûteux, offre une performance isolante optimale pour les habitations situées dans des régions très froides.",
          "Le vitrage à contrôle solaire est une excellente option pour limiter la chaleur à l'intérieur en été. Ce type de vitrage est traité pour réfléchir les rayons du soleil, ce qui permet de maintenir une température agréable sans consommer d'énergie supplémentaire pour la climatisation.",
          "Pour les maisons situées près de zones bruyantes, opter pour un vitrage acoustique peut faire la différence. Ce vitrage est conçu avec des couches spécifiques pour réduire le bruit extérieur, améliorant ainsi votre confort quotidien.",
          "Enfin, pour garantir la sécurité des occupants, il est possible d'installer du vitrage sécurisé, tel que le verre feuilleté ou le verre trempé. Ce type de vitrage résiste mieux aux chocs et réduit les risques de blessures en cas de casse.",
          "En conséquence, choisir le bon vitrage nécessite de considérer divers facteurs tels que l'emplacement de votre habitation, votre budget et vos besoins spécifiques en matière de confort et de sécurité."
      ],
      "seoTitle": "Vitrage : Choisir le meilleur pour votre habitat à Angers",
      "seoDescription": "Découvrez comment choisir le vitrage adapté à votre habitat à Angers avec nos conseils d'experts en vitrerie chez Dépannage 49.",
      "imageUrl": ""
  },
  "les-5-signes-annonciateurs-dune-panne-de-chaudiere-a-surveiller": {
      "slug": "les-5-signes-annonciateurs-dune-panne-de-chaudiere-a-surveiller",
      "title": "Les 5 signes annonciateurs d'une panne de chaudière à surveiller",
      "description": "Apprenez à identifier les signes précurseurs d'une panne de chaudière. Un entretien préventif peut vous éviter des désagréments coûteux.",
      "date": "2026-08-08",
      "category": "Chauffage & Clim",
      "content": [
          "Une chaudière est un élément essentiel de votre confort domestique. Toutefois, des signes indiquant une panne imminente peuvent facilement passer inaperçus.",
          "Le premier signe à surveiller est un bruit inhabituel. Des cliquetis, des sifflements ou des grondements peuvent être le signe de pièces usées ou de dépôts dans le système.",
          "Un autre indicateur est la température de l'eau. Si vous remarquez une variation importante ou si l'eau met plus de temps à chauffer, un entretien s'impose.",
          "La présence de fuites d'eau ou de condensation autour de la chaudière est également préoccupante. Cela pourrait désigner un joint défectueux ou un problème plus sérieux.",
          "Vous devez aussi être attentif à la pression de votre chaudière. Une pression anormale peut affecter son fonctionnement et conduire à une panne.",
          "Enfin, un rendement de chauffage en baisse indique que votre chaudière pourrait avoir besoin d'une bonne révision. Ne tardez pas à faire appel à des experts pour éviter des réparations coûteuses."
      ],
      "seoTitle": "Signes de panne de chaudière à Angers | Dépannage 49",
      "seoDescription": "Découvrez les signes de panne de chaudière à Angers et comment y remédier pour un confort optimal avec Dépannage 49.",
      "imageUrl": ""
  },
  "les-secrets-pour-optimiser-la-duree-de-vie-de-votre-chaudiere": {
      "slug": "les-secrets-pour-optimiser-la-duree-de-vie-de-votre-chaudiere",
      "title": "Les Secrets pour Optimiser la Durée de Vie de Votre Chaudière",
      "description": "Découvrez comment optimiser la durée de vie de votre chaudière grâce à des conseils pratiques et efficaces. Évitez les pannes et réduisez vos factures de chauffage !",
      "date": "2026-08-08",
      "category": "Chauffage & Clim",
      "content": [
          "Pour assurer le bon fonctionnement de votre chaudière, un entretien régulier est essentiel. Vérifiez la pression, régulièrement le filtre et nettoyez les conduits pour retenir l'efficacité du système.",
          "Il est essentiel de purger les radiateurs de votre système de chauffage au moins une fois par an. Cela permet d'éliminer les bulles d'air qui peuvent entraver la circulation de l'eau chaude et réduire l'efficacité de votre chauffage.",
          "Utilisez un thermostat programmable pour réguler la température de votre maison. Cela permet non seulement de renforcer votre confort, mais également de diminuer votre consommation d'énergie et prolonger la vie de votre chaudière.",
          "Faites appel à des professionnels pour une vérification annuelle. Des techniciens expérimentés de 'Dépannage 49' peuvent détecter les potentielles défaillances et effectuer des réparations nécessaires avant qu'elles ne deviennent des problèmes majeurs.",
          "En hiver, évitez de baisser trop la température lorsque vous quittez votre domicile. Une chute drastique peut engendrer une surconsommation d’énergie lorsque vous chauffez à nouveau, mettant ainsi à mal votre chaudière.",
          "Enfin, isolez correctement votre maison. Une bonne isolation réduit la charge sur votre système de chauffage et augmente son efficacité, ce qui permet à votre chaudière de durer plus longtemps."
      ],
      "seoTitle": "Optimiser Chaudière Angers | Dépannage 49",
      "seoDescription": "Apprenez à prolonger la vie de votre chaudière avec nos conseils pratiques pour un chauffage efficace à Angers et ses environs.",
      "imageUrl": "/images/actualites/les-secrets-pour-optimiser-la-duree-de-vie-de-votre-chaudiere.png"
  }
};

export const getActualitesList = () => Object.values(actualitesData);
