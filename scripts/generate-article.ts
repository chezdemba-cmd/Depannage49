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
    // 1. Lire l'historique pour garantir l'unicité
    const actualitesPath = path.join(process.cwd(), 'src', 'data', 'actualites.ts');
    let actualitesFile = await fs.readFile(actualitesPath, 'utf8');
    const existingTitles = [...actualitesFile.matchAll(/title:\s*"([^"]+)"/g)].map(m => m[1]);
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Tu es un expert en maintenance de bâtiment (plombier, électricien, chauffagiste, vitrier, serrurier) travaillant pour l'entreprise "Dépannage 49" située à Angers et ses alentours.
          Tu dois rédiger un article de blog/conseil de haute qualité, clair, instructif et professionnel pour la catégorie "${category}".
          
          RÈGLE ABSOLUE D'UNICITÉ : Voici les titres des articles DÉJÀ publiés sur le site : [${existingTitles.join(' | ')}].
          Tu dois OBLIGATOIREMENT choisir un sujet 100% INÉDIT qui ne répète pas ces thèmes. Trouve un nouvel angle, un nouveau problème courant ou un nouveau conseil.
          
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

    console.log(`Texte généré avec succès : "${articleData.title}"`);
    console.log("Génération de l'image d'illustration en cours (DALL-E 3)...");

    // 2. Générer l'image
    let imageUrl = "";
    try {
      const prompt = encodeURIComponent(`A professional, highly realistic photograph illustrating: ${articleData.title}. Maintenance and repair business context. No text in the image.`);
      const tempUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&nologo=true`;
      
      console.log("Téléchargement de l'image...");
      const imgResponse = await fetch(tempUrl);
      if (!imgResponse.ok) throw new Error("Erreur de téléchargement");
      const imgBuffer = await imgResponse.arrayBuffer();
      
      const localPath = `/images/actualites/${slug}.png`;
      const absolutePath = path.join(process.cwd(), 'public', 'images', 'actualites', `${slug}.png`);
      await fs.writeFile(absolutePath, Buffer.from(imgBuffer));
      imageUrl = localPath;
      console.log("Image générée et sauvegardée localement avec succès !");
    } catch (imgError) {
      console.error("Erreur lors de la génération de l'image :", imgError);
      // On continue même sans image
    }

    const newArticle = {
      slug,
      title: articleData.title,
      description: articleData.description,
      date,
      category,
      content: articleData.content,
      seoTitle: articleData.seoTitle,
      seoDescription: articleData.seoDescription,
      imageUrl,
    };

    console.log(`Article généré avec succès : "${newArticle.title}"`);

    // Mise à jour du fichier actualites.ts
    actualitesFile = await fs.readFile(actualitesPath, 'utf8');

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

    // --- PARTAGE VIA MAKE.COM (WEBHOOK) ---
    const articleUrl = `https://depannage49.com/actualites/${slug}`;
    const message = `✨ Nouvel article ! ✨\n\n${newArticle.title}\n\n${newArticle.description}\n\n👉 Lisez tous nos conseils ici : ${articleUrl}`;
    
    const payload = {
      title: newArticle.title,
      message: message,
      url: articleUrl,
      imageUrl: newArticle.imageUrl
    };
    
    await fs.writeFile(path.join(process.cwd(), 'latest_article.json'), JSON.stringify(payload, null, 2));
    console.log("Fichier latest_article.json créé. Le webhook sera déclenché après le déploiement.");

  } catch (error) {
    console.error("Erreur lors de la génération de l'article :", error);
  }
}

generateArticle();
