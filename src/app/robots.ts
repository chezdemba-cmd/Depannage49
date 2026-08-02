import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Remplacez cette URL par votre vrai nom de domaine une fois en ligne
  const baseUrl = 'https://depannage49.fr';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Empêche l'indexation de potentiels fichiers ou routes privés
      disallow: ['/private/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
