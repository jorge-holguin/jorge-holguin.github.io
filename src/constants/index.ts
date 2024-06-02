import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TVideos,
  TProject,
} from "../types";

import { FaYoutube} from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {
  mobile,
  openai,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  //astro,
  tailwind,
  nodejs,
  //mongodb,
  git,
  figma,
  docker,
  freelancer,
  escape,
  jobit,
  tripguide,
  threejs,
  //nextjs,
  expressjs,
  csharp,
  //net,
  //mysql,
  postgresql,
  //scala,
  python,
  numpy,
  //azure,
  //aws,
  unity,
  //linux,
  //youtube,
  //wordpress,
  mota
} from "../assets";



export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Sobre Mí",
  },
  {
    id: "work",
    title: "Experiencia",
  },

  {
    id: "skills",
    title: "Habilidades",
  },

  {
    id: "projects",
    title: "Proyectos",
  },

  {
    id: "videos",
    title: "Videos",
  },
  {
    id: "contact",
    title: "Contacto",
  },

 
];

const services: TService[] = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Android Native Developer",
    icon: mobile,
  },
  {
    title: "AI expert",
    icon: openai,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Julio 2021 - Now",
    points: [
      "Creación y mantenimiento de aplicaciones web utilizando el stack MERN (MongoDB, Express, React y Node.js), así como Next.js.",
      "Implementación de soluciones de bases de datos utilizando .NET, SQL Server y C#.",
      "Uso de lenguajes de programación como Scala y Python para el mantenimiento de aplicaciones y procesos de Big Data en la plataforma Azure.",
      "Despliegue de modelos de machine learning en producción utilizando Azure Machine Learning y Azure Cognitive Services.",
    ],
  },
];


const videos: TVideos[] = [
  {
    name: "El Escape de Mota - Infinity Runner 2D",
    description:
      "Videojuego 2D en Unity, inspirado en el dinosaurio de Google, ahora protagonizado por Mota, mi perro Schnauzer.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
        image: csharp,
      },
      {
        name: "Unity",
        color: "green-text-gradient",
        image: unity,

      },
    ],
    image: mota,
    sourceCodeLink: "https://youtu.be/wGmkzCEr0NM",
  },
]

const projects: TProject[] = [
  {
    name: "El Escape de Mota - Infinity Runner 2D",
    description:
      "Videojuego 2D en Unity, inspirado en el dinosaurio de Google, ahora protagonizado por Mota, mi perro Schnauzer.",
    tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
          image: csharp,
        },
        {
          name: "Unity",
          color: "green-text-gradient",
          image: unity,
  
        },
    ],
    image: escape,
    sourceCodeLink: "https://github.com/jorge-holguin/El-Escape-de-Mota",
   },
  {
    name: "QuakeWatch",
    description:
      "QuakeWatch es una aplicación web que visualiza datos de terremotos en tiempo real, utilizando un backend en Ruby on Rails para servir datos desde la API de USGS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
        image: reactjs,
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
        image: tailwind,

      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
        image: nodejs,
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/jorge-holguin/QuakeViewFrontend",
  },
  {
    name: "Modelo Predictivo de Machine Learning",
    description:
      "Modelo Predictivo de Machine Learning basado en el algoritmo Random Forest para jugar en la ruleta. Script hecho con Python y con datos obtenidos a partir de WebScrapping",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
        image: python,

      },
      {
        name: "Numpy",
        color: "green-text-gradient",
        image: numpy,

      },
      
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/jorge-holguin/Ruleta_Mejorada",
  },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@vidadigital1994",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/jorge-holguin",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/invite/M9WDc7xX",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/vidadigitalai",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/VidaDigitalIA",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/jorgeholguinc/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://buymeacoffee.com/vidadigital",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://youtube.com/@vidadigital1994",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:jorge.holguin1105@gmail.com",
      },
    ],
  },
] as const;

export { services, technologies, experiences, videos, projects };
