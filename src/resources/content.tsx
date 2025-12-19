import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
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
  headline: <>Économie appliquée, data et impact réel</>,
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
      Je suis {person.name}, spécialisé(e) en{" "}
      <Text as="span" size="xl" weight="strong">
        économie appliquée et data
      </Text>
      . J’analyse des données réelles pour aider à la décision (politiques publiques,
      entreprises, projets sociaux) et je construis des outils reproductibles (notebooks,
      tableaux de bord, rapports).
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
    title: "Profil",
    description: (
      <>
        {person.name} est spécialisé(e) en économie appliquée et data. Son intérêt principal :
        transformer des données brutes (enquêtes, données administratives, séries temporelles,
        données ouvertes) en analyses claires et actionnables pour les décideurs.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences",
    experiences: [
      {
        company: "Projet data – Tableau de bord emploi",
        timeframe: "2024 - Aujourd’hui",
        role: "Data analyst / data engineer",
        achievements: [
          <>
            Construction d’un tableau de bord interactif sur l’emploi (indicateurs, filtres,
            visualisations) à partir de données publiques.
          </>,
          <>
            Automatisation de la collecte, du nettoyage et de l’actualisation des données dans un
            pipeline reproductible (scripts + notebooks).
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Capture de projet data",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Formation & projets académiques",
        timeframe: "Avant 2024",
        role: "Étudiant(e) / junior",
        achievements: [
          <>
            Réalisation de plusieurs études quantitatives (économie appliquée, statistiques,
            économétrie) avec R / Python.
          </>,
          <>
            Travail sur des mini-projets de groupe : analyse de données, rédaction de rapports,
            présentations orales.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
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
    title: "Compétences techniques",
    skills: [
      {
        title: "Python / R",
        description: (
          <>Analyse de données, notebooks reproductibles, visualisations et reporting.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "R",
            icon: "r",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Outils data & web",
        description: (
          <>Création de dashboards simples et sites pour présenter les résultats et projets.</>
        ),
        tags: [
          {
            name: "Excel",
            icon: "excel",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
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

export { person, social, newsletter, home, about, blog, work, gallery };
