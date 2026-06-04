// Liste des 16 outils PDFOX
const TOOLS = [
  { name: 'PDF vers Word',        desc: 'Convertissez votre PDF en .docx éditable.',         icon: '📄', color: 'c-blue',   slug: 'pdf-to-word'   },
  { name: 'Word vers PDF',        desc: 'Transformez vos .docx en PDF professionnel.',        icon: '📝', color: 'c-orange', slug: 'word-to-pdf'   },
  { name: 'Compresser PDF',       desc: 'Réduisez la taille jusqu\'à 90% sans perte.',        icon: '🗜️', color: 'c-green',  slug: 'compress'      },
  { name: 'Fusionner PDF',        desc: 'Combinez plusieurs PDF en un seul document.',        icon: '🔗', color: 'c-purple', slug: 'merge'         },
  { name: 'Diviser PDF',          desc: 'Extrayez des pages ou divisez en plusieurs fichiers.',icon: '✂️', color: 'c-pink',   slug: 'split'         },
  { name: 'PDF vers JPG',         desc: 'Convertissez chaque page en image HD.',              icon: '🖼️', color: 'c-teal',   slug: 'pdf-to-jpg'    },
  { name: 'JPG vers PDF',         desc: 'Transformez vos photos en PDF partageable.',         icon: '📸', color: 'c-yellow', slug: 'jpg-to-pdf'    },
  { name: 'PDF vers PowerPoint',  desc: 'Convertissez vos présentations PDF en .pptx.',       icon: '📊', color: 'c-orange', slug: 'pdf-to-pptx'   },
  { name: 'PDF vers Excel',       desc: 'Extrayez tableaux et données en fichier Excel.',     icon: '📈', color: 'c-green',  slug: 'pdf-to-excel'  },
  { name: 'Signer PDF',           desc: 'Ajoutez votre signature électronique légale.',       icon: '✍️', color: 'c-blue',   slug: 'sign'          },
  { name: 'Protéger PDF',         desc: 'Sécurisez vos documents avec un mot de passe.',      icon: '🔒', color: 'c-red',    slug: 'protect'       },
  { name: 'Déverrouiller PDF',    desc: 'Supprimez les restrictions d\'un PDF protégé.',      icon: '🔓', color: 'c-purple', slug: 'unlock'        },
  { name: 'OCR PDF',              desc: 'Rendez vos scans cherchables et éditables.',         icon: '🔍', color: 'c-teal',   slug: 'ocr'           },
  { name: 'Pivoter PDF',          desc: 'Corrigez l\'orientation de vos pages PDF.',          icon: '🔄', color: 'c-yellow', slug: 'rotate'        },
  { name: 'Filigrane PDF',        desc: 'Ajoutez un watermark texte ou image.',               icon: '💧', color: 'c-pink',   slug: 'watermark'     },
  { name: 'HTML vers PDF',        desc: 'Convertissez n\'importe quelle page web en PDF.',    icon: '🌐', color: 'c-blue',   slug: 'html-to-pdf'   },
];

// Générer les cartes dans la homepage
function renderTools(list = TOOLS) {
  const grid = document.getElementById('toolsGrid');
  if (!grid) return;
  grid.innerHTML = list.map(t => `
    <a class="tool-card fade-up" href="pages/tool.html?tool=${t.slug}">
      <div class="tool-icon ${t.color}">${t.icon}</div>
      <div class="tool-name">${t.name}</div>
      <div class="tool-desc">${t.desc}</div>
      <span class="tool-arrow">→</span>
    </a>
  `).join('');
  observeFadeUp();
}

// Recherche d'outil
function searchTool() {
  const q = document.getElementById('searchInput')?.value.toLowerCase().trim();
  if (!q) { document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' }); return; }
  const results = TOOLS.filter(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
  if (results.length > 0) {
    renderTools(results);
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    renderTools();
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
  }
}

// Enter sur le champ de recherche
document.addEventListener('DOMContentLoaded', () => {
  renderTools();
  document.getElementById('searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') searchTool();
  });
});
