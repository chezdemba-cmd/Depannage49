import fs from 'fs/promises';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const CATEGORIES = ["Plomberie", "Électricité", "Chauffage & Clim", "Vitrerie", "Serrurerie"];

// Fonction pour créer un slug à partir du titre
function slugify(text: string) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

async function generateArticle() {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'votre_cle_api_ici') {
    console.error("ERREUR : Veuillez configurer OPENAI_API_KEY dans le fichier .env.local à la racine du projet.");
    process.exit(1);
  }

  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  console.log(`Génération d'un article pour la catégorie : ${category}...`);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Tu es un expert en maintenance de bâtiment (plombier, électricien, chauffagiste, vitrier, serrurier) travaillant pour l'entreprise "Dépannage 49" située à Angers et ses alentours.
          Tu dois rédiger un article de blog/conseil de haute qualité, clair, instructif et professionnel pour la catégorie "${category}".
          L'article doit être divisé en paragraphes clairs.
          Génère le résultat au format JSON avec les clés suivantes :
          - title (titre accrocheur et utile pour le lecteur)
          - description (résumé de 2-3 lignes)
          - content (tableau de chaînes de caractères, un élément par paragraphe, 4 à 6 paragraphes au total)
          - seoTitle (titre SEO de moins de 60 caractères, incluant "Angers" ou "Dépannage 49")
          - seoDescription (description SEO de moins de 160 caractères)
          Ne renvoie QUE le JSON valide.`
        }
      ],
      response_format: { type: "json_object" }
    });

    const responseContent = completion.choices[0].message.content;
    if (!responseContent) throw new Error("Réponse vide de l'IA");

    const articleData = JSON.parse(responseContent);
    const slug = slugify(articleData.title);
    const date = new Date().toISOString().split('T')[0]; // Date du jour (YYYY-MM-DD)

    const newArticle = {
      slug,
      title: articleData.title,
      description: articleData.description,
      date,
      category,
      content: articleData.content,
      seoTitle: articleData.seoTitle,
      seoDescription: articleData.seoDescription,
    };

    console.log(`Article généré avec succès : "${newArticle.title}"`);

    // Mise à jour du fichier actualites.ts
    const actualitesPath = path.join(process.cwd(), 'src', 'data', 'actualites.ts');
    let actualitesFile = await fs.readFile(actualitesPath, 'utf8');

    // On cherche la fin de l'objet actualitesData
    const insertPosition = actualitesFile.lastIndexOf('};');
    
    if (insertPosition === -1) {
      throw new Error("Impossible de trouver la fin de l'objet actualitesData dans le fichier.");
    }

    // On vérifie s'il faut ajouter une virgule avant le nouvel élément
    const textBefore = actualitesFile.substring(0, insertPosition).trimEnd();
    const needsComma = !textBefore.endsWith(',');
    
    // On formate le nouvel article en chaîne TypeScript
    const articleString = `\n  "${slug}": ${JSON.stringify(newArticle, null, 4).replace(/\n/g, '\n  ')}`;
    
    const newContent = textBefore + (needsComma ? ',' : '') + articleString + '\n' + actualitesFile.substring(insertPosition);

    await fs.writeFile(actualitesPath, newContent, 'utf8');
    
    console.log("Fichier src/data/actualites.ts mis à jour avec succès ! L'article est maintenant publié sur le site.");

  } catch (error) {
    console.error("Erreur lors de la génération de l'article :", error);
  }
}

generateArticle();
