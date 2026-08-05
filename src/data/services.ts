import { Droplet, Zap, ThermometerSun, Wind, Key, Maximize, Lightbulb, LucideIcon } from "lucide-react";

export type ServiceData = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: string[];
  features: string[];
  color: string;
  bg: string;
  image: string;
  imageSecondary: string;
};

export const servicesData: Record<string, ServiceData> = {
  "plomberie": {
    id: "plomberie",
    title: "Plomberie",
    icon: Droplet,
    description: "Recherche de fuites, installations sanitaires et dépannage d'urgence.",
    content: [
      "Intervention rapide pour tout problème de plomberie dans le Maine\u2011et\u2011Loire.",
      "Nos plombiers certifiés sont équipés pour diagnostiquer et réparer efficacement toutes vos installations, qu'il s'agisse de tuyauterie ancienne ou de systèmes récents."
    ],
    features: ["Recherche de fuite", "Installation", "Sanitaires", "Chauffe-eau", "Dépannage"],
    color: "text-blue-500",
    bg: "bg-blue-50",
    image: "/rea_plomberie.png",
    imageSecondary: "/service_plomberie_2.png",
  },
  "electricite": {
    id: "electricite",
    title: "Électricité",
    icon: Zap,
    description: "Mise aux normes, tableaux électriques et dépannage courant fort.",
    content: [
      "Sécurisez vos installations électriques avec nos experts certifiés.",
      "Nous intervenons sur tous types de chantiers électriques, de la simple réparation de prise à la rénovation complète de votre tableau électrique."
    ],
    features: ["Installation", "Dépannage", "Mise aux normes", "Courant fort", "Tableaux électriques", "Éclairage"],
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    image: "/rea_electricite.png",
    imageSecondary: "/service_electricite_2.png",
  },
  "chauffage": {
    id: "chauffage",
    title: "Chauffage",
    icon: ThermometerSun,
    description: "Installation et entretien de chaudières, radiateurs et pompes à chaleur.",
    content: [
      "Optimisez votre confort thermique tout en réduisant votre facture énergétique.",
      "Spécialistes du chauffage, nous vous conseillons sur les meilleures solutions adaptées à votre habitat."
    ],
    features: ["Installation", "Entretien", "Dépannage", "Radiateurs", "Chaudières"],
    color: "text-red-500",
    bg: "bg-red-50",
    image: "/service_chauffage.png",
    imageSecondary: "/service_chauffage_2.png",
  },
  "climatisation": {
    id: "climatisation",
    title: "Climatisation",
    icon: Wind,
    description: "Maintenance et pose de systèmes de climatisation réversible.",
    content: [
      "Profitez d'un air frais en été et d'une chaleur douce en hiver.",
      "Nos frigoristes assurent l'installation, l'entretien et le dépannage de vos climatisations dans le respect strict des normes environnementales."
    ],
    features: ["Installation", "Maintenance", "Entretien", "Climatisation réversible"],
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    image: "/rea_clim.png",
    imageSecondary: "/service_clim_2.png",
  },
  "serrurerie": {
    id: "serrurerie",
    title: "Serrurerie",
    icon: Key,
    description: "Ouverture de porte, blindage et sécurisation d'accès.",
    content: [
      "Votre sécurité est notre priorité.",
      "Intervention en urgence pour les portes claquées ou bloquées, avec des solutions de sécurisation durables et certifiées A2P."
    ],
    features: ["Ouverture de porte", "Blindage", "Remplacement de serrure", "Sécurisation"],
    color: "text-slate-500",
    bg: "bg-slate-50",
    image: "/rea_serrurerie.png",
    imageSecondary: "/service_serrurerie_2.png",
  },
  "vitrerie": {
    id: "vitrerie",
    title: "Vitrerie / Ouvrants",
    icon: Maximize,
    description: "Remplacement de double vitrage, vitrines et fenêtres.",
    content: [
      "Artisans vitriers qualifiés pour tous vos travaux de menuiserie vitrée.",
      "Remplacement suite à un bris de glace, ou amélioration de l'isolation de votre logement grâce au double ou triple vitrage."
    ],
    features: ["Remplacement de vitrage", "Double vitrage", "Vitrines", "Fenêtres"],
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    image: "/service_vitrerie.png",
    imageSecondary: "/service_vitrerie_2.png",
  },
  "eclairage": {
    id: "eclairage",
    title: "Éclairage Public",
    icon: Lightbulb,
    description: "Réseaux d'éclairage public, travaux et dépannage aérien et souterrain.",
    content: [
      "Spécialistes des réseaux d'éclairage public, nous assurons l'installation, la maintenance et le dépannage de vos infrastructures.",
      "Nos équipes interviennent sur les réseaux de distribution aériens et souterrains pour garantir la sécurité et la continuité de service de vos installations, que ce soit pour les collectivités ou le domaine privé."
    ],
    features: ["Réseaux d'éclairage public", "Travaux aériens", "Travaux souterrains", "Dépannage réseau", "Maintenance LED"],
    color: "text-amber-500",
    bg: "bg-amber-50",
    image: "/service_eclairage_public.png",
    imageSecondary: "/service_eclairage_public_2.png",
  }
};

export const getServicesList = () => Object.values(servicesData);
