const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Personnel",
    year: "2025",
    tag: "Design / UI",
    category: "design",
    status: "ongoing",
    statusLabel: "En cours",
    image: 'img/5.png',
    color: "#e8d5b7",
    shortDesc: "Conception et développement de mon portfolio avec une timeline interactive.",
    fullDesc: "Création d'un site portfolio complet pour présenter mon parcours académique et professionnel. La page principale met en avant une timeline animée qui retrace mon évolution depuis le BAC STI2D jusqu'à mon Bachelor en Chef de projet digital.",
    skills: ["HTML/CSS", "Design", "Figma"],
    outcomes: [
      "Timeline responsive avec positionnement proportionnel",
      "Identité visuelle cohérente warm/beige",
      "Optimisé pour tous les supports"
    ],
    link: "projet.html?id=1"
  },
  {
    id: 2,
    title: "Projet PGE Epitech",
    year: "2024",
    tag: "Gestion de projet",
    category: "gestion",
    status: "done",
    statusLabel: "Terminé",
    icon: "🚀",
    color: "#d4c5e2",
    shortDesc: "Premier grand projet en équipe dans le cadre du PGE Epitech.",
    fullDesc: "Dans le cadre de l'entrée au PGE Epitech, coordination d'un projet en équipe pluridisciplinaire. Mise en pratique des méthodes agiles, gestion des sprints, communication avec les parties prenantes et livraison d'un produit fonctionnel dans les délais.",
    skills: ["Agile / Scrum", "Gestion d'équipe", "Communication"],
    outcomes: [
      "Livraison dans les délais impartis",
      "Gestion d'une équipe de 4 personnes",
      "Présentation finale devant jury"
    ],
    link: "projet.html?id=2"
  },
  {
    id: 3,
    title: "App Web Prototype",
    year: "2025",
    tag: "Web / Dev",
    category: "web",
    status: "ongoing",
    statusLabel: "En cours",
    icon: "img/5.png",
    color: "#b7d5e8",
    shortDesc: "Développement d'un prototype d'application web dans le cadre du Bachelor.",
    fullDesc: "Conception et développement d'un prototype d'application web dans le cadre du Bachelor 1 Chef de Projet Digital. Le projet comprend la phase de cadrage, les wireframes, le développement front-end et les tests utilisateurs.",
    skills: ["HTML/CSS", "JavaScript", "UX Research"],
    outcomes: [
      "Wireframes validés par les utilisateurs",
      "Prototype fonctionnel livré",
      "Tests utilisateurs conduits"
    ],
    link: "projet.html?id=3"
  },
  {
    id: 4,
    title: "Identité Visuelle",
    year: "2024",
    tag: "Design / UI",
    category: "design",
    status: "done",
    statusLabel: "Terminé",
    icon: "✏️",
    color: "#e8d7b7",
    shortDesc: "Création d'une identité visuelle complète pour un projet fictif.",
    fullDesc: "Exercice de création d'identité visuelle globale : logo, charte graphique, déclinaisons sur différents supports print et digital. Travail sur la cohérence de la marque, le choix typographique et la palette de couleurs.",
    skills: ["Figma", "Illustrator", "Branding"],
    outcomes: [
      "Charte graphique complète livrée",
      "Déclinaisons print et digital",
      "Présentation client simulée"
    ],
    link: "projet.html?id=4"
  },
  {
    id: 5,
    title: "Audit UX",
    year: "2025",
    tag: "Gestion de projet",
    category: "gestion",
    status: "done",
    statusLabel: "Terminé",
    icon: "🔍",
    color: "#d5e8d4",
    shortDesc: "Audit d'expérience utilisateur d'un site existant avec recommandations.",
    fullDesc: "Réalisation d'un audit UX complet d'un site e-commerce existant. Analyse heuristique, tests de parcours utilisateurs, identification des points de friction et rédaction d'un rapport de recommandations priorisées.",
    skills: ["UX Audit", "Tests utilisateurs", "Rapport"],
    outcomes: [
      "20 points de friction identifiés",
      "Rapport de 30 pages rendu",
      "Plan d'actions priorisé"
    ],
    link: "projet.html?id=5"
  },
  {
    id: 6,
    title: "Intégration HTML/CSS",
    year: "2024",
    tag: "Web / Dev",
    category: "web",
    status: "done",
    statusLabel: "Terminé",
    icon: "⚡",
    color: "#e8e4b7",
    shortDesc: "Intégration pixel-perfect d'une maquette Figma en HTML/CSS.",
    fullDesc: "Exercice d'intégration web à partir d'une maquette Figma fournie. Réalisation d'une intégration responsive pixel-perfect en HTML5 et CSS3 pur, avec attention portée aux animations, transitions et accessibilité.",
    skills: ["HTML5", "CSS3", "Responsive"],
    outcomes: [
      "Intégration responsive validée",
      "Score accessibilité > 90",
      "Animations CSS fluides"
    ],
    link: "projet.html?id=6"
  }
];

/* ── Render cards ── */
function renderCards(filter = 'all') {
  const grid = document.getElementById('grid');
  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty">Aucun projet dans cette catégorie.</div>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <a class="project-card" href="${p.link}">
      <div class="card-inner">
        <div class="card-img" style="background:${p.color}">
          <span class="emoji">${p.image}</span>
        </div>
        <div class="card-info">
          <div>
            <div class="card-meta">
              <span class="card-year">${p.year}</span>
              <span class="card-dot"></span>
              <span class="card-tag">${p.tag}</span>
            </div>
            <div class="card-title">${p.title}</div>
            <div class="card-desc">${p.shortDesc}</div>
          </div>
          <div class="card-info-bottom">
            <div class="card-skills">
              ${p.skills.slice(0, 3).map(s => `<span class="skill-pill">${s}</span>`).join('')}
            </div>
            <span class="card-status ${p.status}">${p.statusLabel}</span>
          </div>
          <span class="card-arrow">→</span>
        </div>
      </div>
    </a>
  `).join('');
}

/* ── Scroll hint ── */
const gridEl = document.getElementById('grid');
const hint   = document.getElementById('scrollHint');
if (true) {
  gridEl.addEventListener('scroll', () => {
    hint.style.opacity = gridEl.scrollTop > 80 ? '0' : '1';
  }, { passive: true });
}

