export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  try {
    const cleSecrete = process.env.GEMINI_API_KEY;
    
    if (!cleSecrete) {
      return res.status(500).json({ erreur: "La clé GEMINI_API_KEY est manquante dans Vercel." });
    }

    const messageUtilisateur = req.body.message || "";
    const adresseGemini = https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${cleSecrete};

    const reponse = await fetch(adresseGemini, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: messageUtilisateur }] }]
      })
    });

    const donnees = await reponse.json();

    if (donnees.error) {
      return res.status(400).json({ erreur: Erreur Google Gemini: ${donnees.error.message} });
    }

    const texteDeGemini = donnees.candidates[0].content.parts[0].text;
    return res.status(200).json({ reponse: texteDeGemini });

  } catch (erreur) {
    return res.status(500).json({ erreur: Erreur système: ${erreur.message} });
  }
}
