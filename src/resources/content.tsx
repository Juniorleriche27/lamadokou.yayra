import { About, BasePageConfig, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yayra",
  lastName: "Lamadokou",
  name: `Yayra Lamadokou`,
  role: "Économie appliquée Data & Machine Learning",
  avatar: "/images/avatar.jpg",
  email: "ylamadokou@gmail.com",
  location: "Africa/Lome", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "Anglais"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Newsletter de {person.firstName}</>,
  description: <>Actualités sur mes projets data, analyses et études.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
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
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://web.facebook.com/pelageyayra.lamadokou.9",
    essential: false,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site personnel présentant mon parcours et mes projets en ${person.role}`,
  headline: <>Économie • Data • Machine Learning</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">{person.name}</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Diplômé en économie, j’ai construit une base solide en microéconomie, macroéconomie,
      finance publique, commerce international, ainsi qu’en statistique et économétrie. Cette
      formation m’a appris à analyser un problème, à structurer un raisonnement, et à relier les
      phénomènes économiques à leurs mécanismes : croissance, fluctuations, échanges entre pays,
      et impacts sur la société, en particulier en Afrique.
      <br />
      <br />
      Les enseignements de statistique avancée et d’économétrie avancée m’ont donné le goût de la
      modélisation : comprendre un phénomène, le formaliser, tester des hypothèses, puis interpréter
      les résultats avec rigueur. C’est là que j’ai compris une chose simple : les décisions futures se
      prennent mieux quand elles reposent sur des données bien exploitées.
      <br />
      <br />
      J’ai donc choisi d’approfondir l’aspect technique. J’ai commencé par Python, puis j’ai élargi
      vers la data analysis et la data engineering, avant de me concentrer aujourd’hui sur
      l’apprentissage automatique. Je travaille aussi avec R et Stata pour l’analyse statistique.
      <br />
      <br />
      Mon objectif est d’utiliser les données et l’apprentissage automatique pour contribuer à réduire
      le chômage des jeunes en Afrique. Dans cette logique, j’ai lancé KORYXA, une plateforme pensée
      pour s’attaquer à cette problématique, avec l’ambition de structurer l’accès aux opportunités
      et de mieux connecter compétences, formation et emploi.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Découvrir ${person.name}, ${person.role} basé(e) à ${person.location}`,
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
        Formé(e) en économie avec une spécialisation en statistique et économétrie, je mobilise la
        microéconomie, la macroéconomie et l’économétrie pour relier les phénomènes observés à leurs
        mécanismes et mesurer leurs impacts concrets.
        <br />
        <br />
        Je développe des compétences data / ML pour mettre les données au service de la réduction du
        chômage des jeunes en Afrique. J’ai lancé KORYXA pour connecter compétences, formation et
        emploi.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projets",
    experiences: [
      {
        company: "Tableau de bord emploi (ML)",
        timeframe: "2024 - Aujourd’hui",
        role: "Data analyst / data engineer",
        achievements: [
          <>
            Pipeline complet (collecte, nettoyage, features) pour alimenter des modèles de
            prévision d’indicateurs d’emploi et produire des tableaux de bord interactifs.
          </>,
          <>
            Tests d’algorithmes (régression, forêts, XGBoost) avec validation croisée et suivi des
            métriques (RMSE, MAE) dans des notebooks versionnés.
          </>,
        ],
        images: [],
      },
      {
        company: "Assistant LLM pour la veille",
        timeframe: "2024",
        role: "Concepteur prompts / intégration LLM",
        achievements: [
          <>
            Création d’un assistant de synthèse pour résumer articles et rapports, avec consignes
            de style et extraction de points clés.
          </>,
          <>
            Intégration des sorties dans des notes structurées (objectifs, insights, actions) pour
            alimenter les briefs projet.
          </>,
        ],
        images: [],
      },
      {
        company: "Analyses statistiques académiques",
        timeframe: "Avant 2024",
        role: "R / Stata",
        achievements: [
          <>
            Études quantitatives (micro/macro, développement) : modèles économétriques, tests
            d’hypothèses, interprétation critique.
          </>,
          <>
            Rédaction de rapports et présentations, en synthétisant jeux de données, méthodes et
            limites des résultats.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Parcours & certifications",
    institutions: [
      {
        name: "Université (économie / data)",
        description: (
          <>Parcours en économie appliquée, statistiques et analyse de données.</>
        ),
      },
      {
        name: "Formations en ligne",
        description: (
          <>Cours et certifications en data (Python, notebooks, visualisation, machine learning).</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Économie & outils",
    skills: [
      {
        title: "Économie",
        description: (
          <>Micro, macro, économie internationale, développement ; modélisation, statistique et économétrie.</>
        ),
        tags: [
          { name: "Microéconomie" },
          { name: "Macroéconomie" },
          { name: "Économétrie" },
        ],
        images: [],
      },
      {
        title: "Analyse statistique",
        description: (
          <>Régressions, tests, séries temporelles avec Stata et R ; diagnostics et interprétation rigoureuse.</>
        ),
        tags: [
          { name: "Stata" },
          { name: "R" },
          { name: "Tests d’hypothèse" },
        ],
        images: [],
      },
      {
        title: "Python data",
        description: (
          <>Nettoyage, préparation et visualisation avec pandas, numpy, notebooks documentés et versions contrôlées.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Pandas" },
          { name: "NumPy" },
        ],
        images: [],
      },
      {
        title: "Machine Learning",
        description: (
          <>Préparation des données, ingénierie de features, entraînement, validation croisée et suivi des métriques.</>
        ),
        tags: [
          { name: "Scikit-learn" },
          { name: "Validation croisée" },
          { name: "Métriques" },
        ],
        images: [],
      },
      {
        title: "Rédaction de projet",
        description: (
          <>Structuration de problématiques, objectifs, méthodologie, budget et plan d’exécution pour dossiers ML / data.</>
        ),
        tags: [
          { name: "Cadrage" },
          { name: "Budget" },
          { name: "Planification" },
        ],
        images: [],
      },
    ],
  },
};

const cv: BasePageConfig = {
  path: "/cv",
  label: "CV",
  title: `CV – ${person.name}`,
  description: `CV détaillé et compétences de ${person.name}`,
};

const blog: Blog = {
  path: "/blog",
  label: "Articles",
  title: "Analyses et notes de blog",
  description: `Articles courts sur mes projets, méthodes et réflexions autour de la data`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projets",
  title: `Projets – ${person.name}`,
  description: `Projets data et études menés par ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Galerie – ${person.name}`,
  description: `Sélection de visuels et captures liés à mes projets`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, cv };
