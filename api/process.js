export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erreur: 'Méthode non autorisée' });
  }

  const messageUtilisateur = req.body.message;

  try {
    const cleSecrete = process.env.GEMINI_API_KEY;
    const adresseGemini = https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${cleSecrete};

    const reponse = await fetch(adresseGemini, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: messageUtilisateur }] }]
      })
    });

    const donnees = await reponse.json();
    const texteDeGemini = donnees.candidates[0].content.parts[0].text;

    return res.status(200).json({ reponse: texteDeGemini });
  } catch (erreur) {
    return res.status(500).json({ erreur: 'Erreur de connexion à l\'intelligence artificielle.' });
  }
}
