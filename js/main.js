// ── MENU MOBILE ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── COOKIE BANNER ──
function closeCookie() {
  document.getElementById('cookieBanner').style.display = 'none';
  localStorage.setItem('pdfox_cookie', '1');
}
if (localStorage.getItem('pdfox_cookie')) {
  const b = document.getElementById('cookieBanner');
  if (b) b.style.display = 'none';
}

// ── FADE UP AU SCROLL ──
function observeFadeUp() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    obs.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', observeFadeUp);
// FUNCTION MAGIQUE : Elle envoie le texte à votre serveur Vercel qui appelle Gemini
async function appelerGemini(texteUtilisateur) {
    try {
        // On appelle votre route sécurisée
        const reponseServeur = await fetch('/api/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: texteUtilisateur }),
        });

        const donnees = await reponseServeur.json();
        
        if (donnees.reponse) {
            return donnees.reponse;
        } else {
            console.error("Erreur retournée par le serveur :", donnees.erreur);
            return "Désolé, une erreur est survenue.";
        }
    } catch (erreur) {
        console.error("Erreur de connexion au serveur :", erreur);
        return "Impossible de se connecter à l'IA actuellement.";
    }
}

// ÉCOUTEUR DE BOUTON : On détecte le clic sur votre bouton de recherche
document.addEventListener('DOMContentLoaded', () => {
    // On cible le bouton bleu "Chercher" de votre barre de recherche
    const boutonChercher = document.querySelector('button, .btn-primary'); 
    // On cible la barre de texte où l'utilisateur écrit
    const barreRecherche = document.querySelector('input[type="text"]');

    if (boutonChercher && barreRecherche) {
        boutonChercher.addEventListener('click', async (e) => {
            e.preventDefault(); // On empêche la page de se recharger inutilement
            
            const texteSaisi = barreRecherche.value.trim();
            if (!texteSaisi) {
                alert("Veuillez taper une consigne ou une question !");
                return;
            }

            // On change temporairement le texte du bouton pour montrer que l'IA réfléchit
            const texteDorigine = boutonChercher.innerHTML;
            boutonChercher.innerHTML = "L'IA réfléchit...";
            boutonChercher.disabled = true;

            // On appelle Gemini
            const resultatIA = await appelerGemini(texteSaisi);

            // Pour l'instant, on affiche le résultat dans une alerte à l'écran
            // (On pourra créer une jolie zone d'affichage juste après)
            alert("Résultat de l'analyse :\n\n" + resultatIA);

            // On remet le bouton à son état normal
            boutonChercher.innerHTML = texteDorigine;
            boutonChercher.disabled = false;
        });
    }
});
