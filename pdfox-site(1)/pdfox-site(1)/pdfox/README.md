# 🦊 PDFOX.io — Suite PDF Gratuite & IA

Site de conversion PDF professionnel avec fonctionnalités IA Claude.

---

## 📁 Structure du projet

```
pdfox/
├── index.html              ← Page d'accueil
├── vercel.json             ← Config déploiement Vercel
├── css/
│   └── style.css           ← Styles globaux
├── js/
│   ├── main.js             ← Animations, menu, cookie
│   └── tools.js            ← Liste des 16 outils
└── pages/
    ├── tool.html           ← Page générique pour chaque outil
    ├── ai-summarizer.html  ← Résumeur IA (Claude)
    ├── ai-chat.html        ← Chat PDF IA (à créer)
    ├── ai-rewrite.html     ← Réécriture IA (à créer)
    ├── ai-metadata.html    ← Métadonnées IA (à créer)
    ├── blog.html           ← Blog SEO (à créer)
    ├── about.html          ← À propos (à créer)
    ├── contact.html        ← Contact (à créer)
    ├── privacy.html        ← Confidentialité (à créer)
    └── terms.html          ← CGU (à créer)
```

---

## 🚀 Lancer en local

### Option 1 — VS Code avec Live Server (recommandé)
1. Ouvre le dossier `pdfox/` dans VS Code
2. Installe l'extension **Live Server** (ritwickdey.liveserver)
3. Clic droit sur `index.html` → **"Open with Live Server"**
4. Le site s'ouvre sur `http://localhost:5500`

### Option 2 — Terminal simple
```bash
# Python (préinstallé sur Mac/Linux)
cd pdfox
python3 -m http.server 3000
# Ouvrir http://localhost:3000

# Node.js
npx serve .
# Ouvrir http://localhost:3000
```

---

## 📤 Déployer sur GitHub + Vercel

### Étape 1 — GitHub
```bash
# Dans le dossier pdfox/
git init
git add .
git commit -m "🦊 Initial commit — PDFOX.io"

# Créer un repo sur github.com puis :
git remote add origin https://github.com/TON_USERNAME/pdfox-io.git
git branch -M main
git push -u origin main
```

### Étape 2 — Vercel (gratuit)
1. Va sur **vercel.com** → "Sign up" avec GitHub
2. Clique **"New Project"**
3. Sélectionne ton repo `pdfox-io`
4. Framework Preset : **"Other"**
5. Clique **"Deploy"**
6. Ton site est en ligne sur `https://pdfox-io.vercel.app` ✅

### Étape 3 — Domaine personnalisé (optionnel)
Dans Vercel → Settings → Domains → Ajoute `pdfox.io`

---

## 🔑 Configurer la clé API Claude

Pour les fonctionnalités IA, tu dois ajouter ta clé Anthropic :

### En local
Crée un fichier `js/config.js` :
```javascript
// NE PAS committer ce fichier sur GitHub !
window.ANTHROPIC_KEY = 'sk-ant-...ta-clé...';
```

### Sur Vercel (production)
1. Vercel Dashboard → Settings → Environment Variables
2. Ajoute : `ANTHROPIC_API_KEY` = `sk-ant-...ta-clé...`

> ⚠️ Ne jamais mettre la clé API directement dans le code HTML/JS versionné.

---

## 💰 Ajouter Google AdSense

Quand ton compte AdSense est approuvé :
1. Remplace les commentaires `<!-- Google AdSense · Slot: ... -->` par ton code AdSense
2. Exemple :
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

---

## 🛠️ Outils inclus & fonctionnels

| Outil | Statut | Librairie |
|-------|--------|-----------|
| Compresser PDF | ✅ Fonctionnel | pdf-lib |
| Fusionner PDF | ✅ Fonctionnel | pdf-lib |
| Pivoter PDF | ✅ Fonctionnel | pdf-lib |
| JPG vers PDF | ✅ Fonctionnel | jsPDF |
| PDF vers JPG | ✅ Fonctionnel | PDF.js |
| Résumeur IA | ✅ Fonctionnel | Claude API |
| Autres outils | 🔄 Interface prête | Backend à connecter |

---

## 📈 SEO — Checklist post-déploiement

- [ ] Soumettre sitemap sur Google Search Console
- [ ] Créer compte Google Analytics
- [ ] Demander approbation Google AdSense
- [ ] Publier les 10 articles de blog
- [ ] Créer profils réseaux sociaux
- [ ] Soumettre sur Product Hunt & AlternativeTo

---

## 📞 Support

Construit avec ❤️ par Charles — Propulsé par Claude AI (Anthropic)
