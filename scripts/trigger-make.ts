import fs from 'fs/promises';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function triggerMake() {
  if (!process.env.MAKE_WEBHOOK_URL || !process.env.MAKE_WEBHOOK_URL.startsWith('http')) {
    console.log("Publication externe ignorée : MAKE_WEBHOOK_URL n'est pas configuré.");
    process.exit(0);
  }

  try {
    const payloadPath = path.join(process.cwd(), 'latest_article.json');
    const payloadData = await fs.readFile(payloadPath, 'utf8');
    const payload = JSON.parse(payloadData);

    console.log("Envoi des informations à Make.com pour la publication Facebook...");
    
    const makeResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (makeResponse.ok) {
      console.log("Les données ont été envoyées à Make.com avec succès !");
    } else {
      console.error("Erreur lors de l'envoi à Make.com :", await makeResponse.text());
    }
  } catch (error) {
    console.error("Erreur lors du déclenchement de Make.com :", error);
  }
}

triggerMake();
