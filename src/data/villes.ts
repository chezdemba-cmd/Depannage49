export type VilleData = {
  id: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export const villesData: Record<string, VilleData> = {
  "angers": {
    id: "angers",
    name: "Angers",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage à Angers.",
    seoTitle: "Dépannage Angers | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique à Angers. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  },
  "cholet": {
    id: "cholet",
    name: "Cholet",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage à Cholet.",
    seoTitle: "Dépannage Cholet | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique intervenant à Cholet. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  },
  "saumur": {
    id: "saumur",
    name: "Saumur",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage à Saumur.",
    seoTitle: "Dépannage Saumur | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique intervenant à Saumur. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  },
  "avrille": {
    id: "avrille",
    name: "Avrillé",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage à Avrillé.",
    seoTitle: "Dépannage Avrillé | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique intervenant à Avrillé. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  },
  "trelaze": {
    id: "trelaze",
    name: "Trélazé",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage à Trélazé.",
    seoTitle: "Dépannage Trélazé | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique intervenant à Trélazé. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  },
  "les-ponts-de-ce": {
    id: "les-ponts-de-ce",
    name: "Les Ponts-de-Cé",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage aux Ponts-de-Cé.",
    seoTitle: "Dépannage Les Ponts-de-Cé | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique intervenant aux Ponts-de-Cé. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  },
  "beaucouze": {
    id: "beaucouze",
    name: "Beaucouzé",
    description: "Intervention rapide pour tous vos travaux de maintenance et dépannage à Beaucouzé.",
    seoTitle: "Dépannage Beaucouzé | Plombier, Électricien, Chauffagiste - Dépannage 49",
    seoDescription: "Entreprise multiservices de maintenance technique intervenant à Beaucouzé. Dépannage d'urgence 7j/7 en plomberie, électricité, chauffage, serrurerie et vitrerie.",
  }
};

export const getVillesList = () => Object.values(villesData);
