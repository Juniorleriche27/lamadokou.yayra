import { About, Blog, CV, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yayra",
  lastName: "Lamadokou",
  name: "Yayra Lamadokou",
  role: "Diplômé en économie • Data • Machine Learning",
  avatar: "/images/ma_photo.jpeg",
  email: "ylamadokou@gmail.com",
  location: "Africa/Lome", // IANA time zone identifier
  locationLabel: "Lomé, Togo",
  languages: ["Français", "Anglais"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter de {person.firstName}</>,
  description: <>Actualités sur mes projets, analyses et études.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Juniorleriche27",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yayra-junior-lamadokou-387973241",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  // Optionnel : garde Facebook seulement si tu veux vraiment l’afficher
  // {
  //   name: "Facebook",
  //   icon: "facebook",
  //   link: "https://web.facebook.com/pelageyayra.lamadokou.9",
  //   essential: false,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site personnel présentant mon parcours et mes projets (économie, data, machine learning).`,
  headline: <>Économie • Data • Machine Learning</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">{person.name}</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projet mis en avant
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Économiste orienté data. J’analyse des données publiques et construis des indicateurs utiles aux décisions
      (emploi, éducation, développement).
      <br />
      J’outille ces analyses avec Python, R et Stata, et je développe des projets en data engineering et machine learning.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrir le parcours et les compétences de ${person.name}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Compétences",
    description: (
      <>
        Mon socle est l’économie (microéconomie, macroéconomie, finance publique, commerce international) et les
        méthodes quantitatives (statistique, économétrie). Je m’en sers pour poser un cadre d’analyse, formuler des
        hypothèses, et interpréter des résultats avec prudence.
        <br />
        <br />
        Sur le plan technique, je travaille avec Python, R et Stata pour l’analyse statistique, la préparation des
        données, et la présentation des résultats. Je développe aussi des projets en apprentissage automatique et
        un prototype autour des modèles de langage (LLM) via Streamlit.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projets",
    experiences: [
      {
        company: "Tableau de bord emploi",
        timeframe: "2024 - Aujourd’hui",
        role: "Analyse de données / ingénierie des données",
        achievements: [
          <>Tableau de bord sur l'emploi (indicateurs, filtres, visualisations) à partir de données publiques.</>,
          <>Préparation des données : collecte, nettoyage, mise à jour via scripts et notebooks.</>,
        ],
        images: [],
      },
      {
        company: "Analyses économiques (notebooks)",
        timeframe: "2023 - Aujourd’hui",
        role: "Études quantitatives",
        achievements: [
          <>Analyses statistiques et économétriques avec R / Stata / Python.</>,
          <>Rédaction de rapports et synthèses à partir de résultats chiffrés.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Parcours & certifications",
    institutions: [
      {
        name: "Économie",
        description: <>Formation en économie, statistique et économétrie.</>,
      },
      {
        name: "Data / Machine Learning",
        description: <>Formations et certifications en analyse de données, data engineering et apprentissage automatique.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Économie & outils",
    skills: [
      {
        title: "Économie",
        description: (
          <>
            Microéconomie, macroéconomie, économie internationale, économie du développement, finance publique.
            Capacité à relier un cadre théorique à des données et à en tirer des enseignements.
          </>
        ),
        tags: [
          { name: "Microéconomie", icon: "javascript" },
          { name: "Macroéconomie", icon: "javascript" },
          { name: "Économétrie", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Analyse statistique",
        description: (
          <>
            Stata et R : régression, tests statistiques, analyse de séries temporelles selon les besoins de l’étude.
          </>
        ),
        tags: [
          { name: "Stata", icon: "javascript" },
          { name: "R", icon: "r" },
        ],
        images: [],
      },
      {
        title: "Python data",
        description: (
          <>
            Préparation des données (pandas, numpy), visualisations, notebooks, automatisation de traitements.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Pandas", icon: "python" },
          { name: "NumPy", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Machine Learning",
        description: (
          <>
            Préparation des données, entraînement (classification, régression), validation et évaluation avec des métriques.
          </>
        ),
        tags: [
          { name: "Scikit-learn", icon: "python" },
          { name: "Classification", icon: "python" },
          { name: "Régression", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Rédaction de projet",
        description: (
          <>
            Problématique, objectifs, méthodologie, budget, planification, restitution écrite et orale.
          </>
        ),
        tags: [
          { name: "Méthodologie", icon: "javascript" },
          { name: "Reporting", icon: "javascript" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Articles",
  title: "Analyses et notes",
  description: "Notes sur mes projets, méthodes et retours d’expérience autour de la data.",
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets data, machine learning et analyses menés par ${person.name}.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Captures et visuels liés à mes projets.`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

const cv: CV = {
  path: "/cv",
  label: "CV",
  title: `CV – ${person.name}`,
  description: `Curriculum vitae de ${person.name} — ${person.role}`,
  profile: {
    summary: [
      "Diplômé en économie, je relie analyse économique et analyse de données : cadrer une question, poser des hypothèses, préparer les données, analyser, puis présenter des résultats.",
      "Outils : Python, R et Stata. Je travaille sur l’analyse statistique, la visualisation, et des tableaux de bord, avec une attention portée aux limites des données et à l’interprétation.",
      "Je développe des projets en apprentissage automatique (classification, régression, évaluation) et un prototype LLM via Streamlit.",
    ],
  },
  experience: {
    work: [
      {
        company: "Tableau de bord emploi",
        role: "Analyse de données / ingénierie des données",
        timeframe: "2024 - Aujourd’hui",
        achievements: [
          "Tableau de bord sur l’emploi (indicateurs, filtres, visualisations) à partir de données publiques.",
          "Préparation et mise à jour des données via scripts et notebooks.",
        ],
        technologies: ["Python", "Pandas", "Visualisation", "Tableaux de bord"],
      },
    ],
    projects: [
      {
        name: "Projet Akowe - Indice SSA",
        type: "Analyse de données (EdStats)",
        description:
          "Construction d’un indice pour prioriser les pays d’Afrique subsaharienne pour une EdTech en combinant 4 dimensions : taille du marché, dynamique, capacité de paiement et faisabilité opérationnelle.",
        technologies: ["Python", "Jupyter", "Pandas", "Analyse de données"],
        link: "https://github.com/Juniorleriche27/projet_edstat",
      },
      {
        name: "Projets Force N - Data Analyse",
        type: "Analyse de données (notebooks)",
        description:
          "Série de 3 notebooks : analyse des salaires (âge, genre, niveau d’études, expérience), analyse des ventes, prédiction de la réadmission de patients diabétiques.",
        technologies: ["Python", "Jupyter", "Pandas", "Visualisation", "Classification"],
        link: "https://github.com/Juniorleriche27/projet_data_analyse_force_n",
      },
      {
        name: "Projet Zindi - Data Engineer Force N",
        type: "Data engineering",
        description:
          "Nettoyage et fusion de données utilisateurs/transactions pour un challenge de détection de fraude : masquage des PII et export d’un CSV conforme.",
        technologies: ["Python", "Data engineering", "ETL", "Qualité des données"],
        link: "https://github.com/Juniorleriche27/projet_data_engenieur_force_n",
      },
    ],
  },
  education: [
    {
      degree: "Économie",
      institution: "Université de Lomé",
      timeframe: "",
      description: "Formation en économie.",
    },
  ],
  skills: {
    technical: [
      {
        category: "Économie",
        items: ["Microéconomie", "Macroéconomie", "Économie monétaire internationale", "Économie du développement", "Finance publique", "Statistique avancée & économétrie"],
      },
      {
        category: "Analyse de données",
        items: ["Statistique & économétrie", "Python (pandas, numpy, matplotlib, seaborn, scikit-learn)", "R", "Stata", "Visualisation"],
      },
      {
        category: "Machine Learning / LLM",
        items: ["Classification", "Régression", "Évaluation", "Prototype LLM (Streamlit)"],
      },
      {
        category: "Rédaction",
        items: ["Rédaction de projet", "Méthodologie", "Reporting"],
      },
    ],
  },
  certifications: [
    {
      name: "Certificat Data Engineering",
      issuer: "Force N",
      // Place le PDF ici : public/certificats/force-n-data-engineering.pdf
      link: "/certificats/force-n-data-engineering.pdf",
    },
  ],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Débutant-intermédiaire" },
  ],
  activities: [
    {
      name: "KORYXA",
      description: "Projet de plateforme orientée compétences, formation et emploi. https://innovaplus.africa/",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, cv };
