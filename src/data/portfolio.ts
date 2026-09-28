export const PLACEHOLDER_URL = "#lien-a-completer";

export const profil = {
  nom: "Linda KRID",
  titre: "Élève ingénieure en Génie Logiciel & Informatique Décisionnelle",
  localisation: "Troyes, France",
  email: "lindakrid18@gmail.com",
  cv: "/cv-linda-krid.pdf",
  introduction:
    "Étudiante en 3ème année du cycle ingénieur en Génie Logiciel et Informatique Décisionnelle, passionnée par l’Intelligence Artificielle et le développement de solutions logicielles intelligentes.",
  aPropos: [
    "Étudiante en 3ème année du cycle ingénieur en Génie Logiciel et Informatique Décisionnelle, je suis actuellement à la recherche d’un stage de fin d’études (PFE) afin de mettre en pratique mes connaissances et d’approfondir mes compétences.",
    "Passionnée par l’Intelligence Artificielle, je m’intéresse particulièrement à l’IA générative, aux Large Language Models, au Machine Learning et au développement de solutions logicielles intelligentes.",
    "Sérieuse, motivée et curieuse, je suis prête à m’adapter et à apprendre au sein d’un environnement professionnel stimulant.",
  ],
};

export const reseaux = {
  linkedin: "https://www.linkedin.com/in/linda-krid",
  github: "https://github.com/Linda-krid",
};

export const rotationMetiers = [
  "Intelligence Artificielle",
  "IA Générative",
  "Large Language Models",
  "Machine Learning",
  "Génie Logiciel",
  "Automatisation intelligente",
];

export const domaines = [
  {
    titre: "Intelligence Artificielle",
    texte: "Conception de systèmes capables d’analyser, comprendre et décider.",
  },
  {
    titre: "IA Générative",
    texte: "Génération de contenus, rapports et réponses contextualisées.",
  },
  { titre: "LLMs & RAG", texte: "Recherche augmentée et exploitation de bases documentaires." },
  { titre: "Machine Learning", texte: "Modélisation, entraînement et évaluation de modèles." },
  {
    titre: "Génie Logiciel",
    texte: "Applications web robustes, maintenables et bien architecturées.",
  },
  {
    titre: "Automatisation",
    texte: "Workflows intelligents pour fiabiliser les tâches répétitives.",
  },
];

export type Experience = {
  entreprise: string;
  intitule: string;
  periode: string;
  projet: string;
  sousTitre?: string;
  description: string;
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    entreprise: "VISS",
    intitule: "Stage d’été",
    periode: "Juillet 2026",
    projet: "CarbonAI",
    sousTitre: "Plateforme intelligente de calcul et d’analyse de l’empreinte carbone",
    description:
      "Développement d’une plateforme web permettant de collecter les données d’activité, calculer l’empreinte carbone et automatiser la génération de formulaires, rapports et recommandations.",
    technologies: ["Laravel", "MySQL", "n8n", "LLM", "IA générative", "Automatisation"],
  },
  {
    entreprise: "IIT",
    intitule: "Projet de Fin d’Année (PFA)",
    periode: "Juin 2026",
    projet: "OptiSense",
    sousTitre: "Analyse intelligente des conversations d’un centre d’appel spécialisé",
    description:
      "Développement d’une application web intégrant un chatbot conversationnel et une analyse automatique des conversations.",
    technologies: ["React", "FastAPI", "LLM", "RAG"],
  },
  {
    entreprise: "Piximind",
    intitule: "Stage d’été",
    periode: "Juillet 2025",
    projet: "Pipeline intelligent de traitement des données web",
    description: "Automatisation de l’extraction et de l’analyse des données web.",
    technologies: ["LLMs", "n8n"],
  },
];

export type Projet = {
  id: string;
  numero: string;
  type?: string;
  categorie: string;
  titre: string;
  description: string;
  fonctionnalites: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  problematique: string;
  solution: string;
  architecture: string;
};

const A_COMPLETER = "Information à compléter — cette partie sera renseignée prochainement.";

export const projets: Projet[] = [
  {
    id: "optisense",
    numero: "01",
    categorie: "IA Générative • LLM • RAG",
    titre: "OptiSense",
    description:
      "Application web dédiée à l’analyse intelligente des conversations d’un centre d’appel spécialisé.",
    fonctionnalites: [
      "Chatbot conversationnel",
      "Analyse automatique des conversations",
      "Intégration de LLM",
      "Utilisation du RAG",
      "Application web",
    ],
    technologies: ["React", "FastAPI", "LLM", "RAG"],
    image: "/images/projet-optisense.jpg",
    imageAlt:
      "Illustration abstraite associant conversation, intelligence artificielle et analyse de données",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "carbonai",
    numero: "02",
    categorie: "IA Générative • Automatisation • Environnement",
    titre: "CarbonAI",
    description:
      "Plateforme intelligente dédiée au calcul et à l’analyse de l’empreinte carbone des entreprises.",
    fonctionnalites: [
      "Collecte des données d’activité",
      "Calcul de l’empreinte carbone",
      "Génération dynamique de formulaires",
      "Automatisation des rapports",
      "Recommandations",
      "Intégration de l’IA générative",
      "Automatisation des workflows",
    ],
    technologies: ["Laravel", "MySQL", "n8n", "LLM", "IA générative"],
    image: "/images/projet-carbonai.jpg",
    imageAlt:
      "Illustration abstraite associant intelligence artificielle, données et environnement",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "pipeline-web",
    numero: "03",
    categorie: "IA • Automatisation",
    titre: "Pipeline intelligent de traitement des données web",
    description:
      "Pipeline intelligent permettant d’automatiser l’extraction et l’analyse des données web.",
    fonctionnalites: ["Extraction automatisée des données web", "Analyse assistée par LLM"],
    technologies: ["LLMs", "n8n"],
    image: "/images/projet-pipeline.jpg",
    imageAlt: "Illustration abstraite d’un flux de données automatisé",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "smartscan",
    numero: "04",
    type: "Projet académique",
    categorie: "Mobile • IA • Computer Vision",
    titre: "SmartScan",
    description:
      "Application mobile Flutter transformant la caméra du téléphone en assistant de reconnaissance intelligent.",
    fonctionnalites: [
      "Reconnaissance de texte par OCR",
      "Lecture de QR codes et codes-barres",
      "Détection d’objets et de visages",
      "Historique des analyses",
    ],
    technologies: ["Flutter", "Dart", "Google ML Kit", "Firebase", "Provider"],
    image: "/images/projet-optisense.jpg",
    imageAlt: "Illustration claire d’une application mobile de reconnaissance intelligente",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "data-mining-project",
    numero: "05",
    type: "Projet académique",
    categorie: "Machine Learning • Data Science",
    titre: "Data Mining Project",
    description:
      "Projet de data mining consacré à l’application et à la comparaison de modèles de Machine Learning sur un jeu de données d’assurance.",
    fonctionnalites: [
      "Préparation des données",
      "Entraînement de plusieurs modèles",
      "Comparaison des performances",
      "Analyse des résultats",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
    image: "/images/projet-pipeline.jpg",
    imageAlt: "Illustration claire d’un flux d’analyse de données",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "gestion-projets",
    numero: "06",
    type: "Projet académique",
    categorie: "Java • Jakarta EE • Gestion",
    titre: "Gestion Projets",
    description:
      "Application web de gestion de projets permettant aux administrateurs de gérer les utilisateurs, les projets, les catégories et les affectations.",
    fonctionnalites: [
      "Authentification et gestion des rôles",
      "Gestion des utilisateurs et projets",
      "Gestion des catégories",
      "Tableau de bord administrateur",
    ],
    technologies: ["Java 17", "Jakarta EE", "JSP", "JPA", "Hibernate", "MySQL", "Maven"],
    image: "/images/projet-carbonai.jpg",
    imageAlt: "Illustration claire d’une application de gestion de projets",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "clinique-app",
    numero: "07",
    type: "Projet académique",
    categorie: "Angular • Firebase • Gestion",
    titre: "Clinique App",
    description:
      "Application web de gestion d’une clinique pour organiser les patients, les médecins, les rendez-vous et les ordonnances.",
    fonctionnalites: [
      "Authentification et inscription",
      "Gestion des patients et médecins",
      "Gestion des rendez-vous",
      "Tableau de bord par rôle",
    ],
    technologies: ["Angular 21", "TypeScript", "Firebase", "AngularFire", "Bootstrap", "Chart.js"],
    image: "/images/projet-carbonai.jpg",
    imageAlt: "Illustration claire d’une application web de gestion de clinique",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
  {
    id: "event-planner",
    numero: "08",
    type: "Projet académique",
    categorie: "Laravel • Gestion d’événements",
    titre: "EventPlanner",
    description:
      "Application web permettant de consulter, créer et gérer des événements et les inscriptions des utilisateurs.",
    fonctionnalites: [
      "Consultation des événements publics",
      "Création de compte et authentification",
      "Inscription aux événements",
      "Administration des catégories et événements",
    ],
    technologies: ["PHP 8.2", "Laravel 12", "SQLite", "Vite", "Tailwind CSS", "Node.js"],
    image: "/images/projet-pipeline.jpg",
    imageAlt: "Illustration claire d’une application de gestion d’événements",
    problematique: A_COMPLETER,
    solution: A_COMPLETER,
    architecture: A_COMPLETER,
  },
];

export const competences = [
  { categorie: "Langages de programmation", items: ["Python", "Java", "C++", "PHP", "C#", "SQL"] },
  {
    categorie: "Frameworks & Développement Web",
    items: ["Angular", "FastAPI", "Laravel", "Spring Boot", ".NET"],
  },
  { categorie: "Machine Learning", items: ["Scikit-learn", "NumPy", "Pandas"] },
  { categorie: "Deep Learning", items: ["TensorFlow", "PyTorch", "Keras"] },
  {
    categorie: "IA Générative & LLMs",
    items: ["LLMs", "RAG", "Prompt Engineering", "Fine-tuning"],
  },
  { categorie: "DevOps & Conteneurisation", items: ["Docker"] },
  { categorie: "Méthodologies", items: ["Agile", "Scrum"] },
];

export const formations = [
  {
    etablissement: "Université de Technologie de Troyes — UTT",
    lieu: "Troyes, France",
    periode: "2026 — Présent",
    intitule: "Cycle ingénieur — Génie Logiciel et Informatique Décisionnelle",
    actuel: true,
  },
  {
    etablissement: "Institut International de Technologie — IIT",
    lieu: "Sfax, Tunisie",
    periode: "2024 — 2026",
    intitule: "Cycle ingénieur — Génie Logiciel et Informatique Décisionnelle",
    actuel: false,
  },
  {
    etablissement: "Institut International de Technologie — IIT",
    lieu: "Sfax, Tunisie",
    periode: "2022 — 2024",
    intitule: "Cycle Préparatoire Mathématiques — Physique",
    actuel: false,
  },
];

export const certifications = [
  {
    titre: "EFE Certificate",
    sousTitre: "Green Business Model Canvas",
    annee: "2026",
    description: "Certificat de participation — Formation Green Business Model Canvas",
  },
  {
    titre: "L’Agora des Projets",
    sousTitre: "Accrochez votre Startup-IIT",
    annee: "2026",
    description: "Présentation et valorisation d’un projet entrepreneurial.",
  },
  {
    titre: "Cisco Certified Network Associate",
    sousTitre: "CCNA",
    annee: "2025",
    description: "Certification réseau Cisco.",
  },
];

export const langues = [
  { langue: "Arabe", niveau: "Langue maternelle" },
  { langue: "Français", niveau: "B2" },
  { langue: "Anglais", niveau: "Niveau intermédiaire" },
  { langue: "Allemand", niveau: "A2" },
];

export const vieAssociative = [
  { nom: "Club Python IIT" },
  { nom: "Club Tunivisions IIT ISB" },
  { nom: "Club IEEE IIT" },
];

export const sections = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "experiences", label: "Expériences" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
