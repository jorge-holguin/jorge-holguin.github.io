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
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaSquareXTwitter } from "react-icons/fa6";


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
  astro,
  tailwind,
  nodejs,
  //mongodb,
  git,
  figma,
  docker,
  freelancer,
  escape,
  quakewatch,
  youtube_juego_ruleta,
  personalweb,
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
  youtube_juego_unity,
  youtube_como_funciona_ia,
  youtube_crear_chatbot,
  youtube_libro,
  youtube_prompt_engine,
  youtube_short_virales,
  youtube_crear_gpts,
  youtube_clon_voz,
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
      "Te enseño a crear tu propio videojuego 2D en Unity utilizando ChatGPT, este juego fue inspirado en el dinosaurio de Google, pero protagonizado por Mota, mi perro Schnauzer.",
    image: youtube_juego_unity,
    sourceCodeLink: "https://youtu.be/wGmkzCEr0NM",
  },

  {
    name: "Crea un CHATBOT de IA personalizado para tu ECOMMERCE",
    description:
      "Te muestro el proceso completo para crear un chatbot, cómo entrenarlo con tus datos y finalmente cómo integrarlo en tu sitio web, todo con una herramienta muy fácil de usar llamada VoiceFlow ",
    image: youtube_crear_chatbot,
    sourceCodeLink: "https://youtu.be/G1_bgs9tbkU",
  },

  {
    name: "Utilizo La IA Para Jugar a La Ruleta",
    description:
      "Utilizó un modelo de machine learning, el cual se entrenó con un extenso dataset de 10.000 lanzamientos obtenido mediante Web Scrapping. El modelo se diseñó con el objetivo de maximizar las ganancias en la ruleta Lightning Roulette",
    image: youtube_juego_ruleta,
    sourceCodeLink: "https://youtu.be/HzEaKCT9KGU",
  },

  {
    name: "¿Como usar y crear tu propio ChatGPT personalizado?",
    description:
      "Te enseño como utilizar y crear los GPTs personalizados de ChatGPT, incluyendo la integración de APIs externas para mejorar las funcionalidades de estos GPTs.",
    image: youtube_crear_gpts,
    sourceCodeLink: "https://youtu.be/_iP91hJuvZk",
  },

  {
    name: "Cómo Hacer SHORTS de Motivación VIRALES con IA",
    description:
      "Descubre cómo crear videos cortos de motivación y estoicismo que generan millones de vistas utilizando herramientas gratuitas de inteligencia artificial.",
    image: youtube_short_virales,
    sourceCodeLink: "https://youtu.be/QLxjgu0Hj2c",
  },

  {
    name: "Como funciona la IA que crea imágenes",
    description:
      "Video explicativo sobre cómo la inteligencia artificial puede generar imágenes que no han existido antes, a través de los modelos de difusión como DALL-E y StableDiffusion.",
    image: youtube_como_funciona_ia,
    sourceCodeLink: "https://youtu.be/wGmkzCEr0NM",
  },

  {
    name: "Curso de Engineering Prompting",
    description:
      "El curso Engineering Prompting para Desarrolladores introduce el uso del modelo de lenguaje largo (LLM), como GPT, y la creación de prompts personalizados para diversas aplicaciones con la API de OpenAI. Con esta selección de videos podrás crear mejores prompts",
    image: youtube_prompt_engine,
    sourceCodeLink: "https://www.youtube.com/playlist?list=PLQ2oFUnTA-DVK_6u8BiqEA4Z_w3SHL3a6",
  },

  {
    name: "✅Como CLONAR Tu VOZ con IA 🤖",
    description:
      "Este tutorial de Eleven Labs te enseño a cómo clonar tu voz con inteligencia artificial, abriendo oportunidades para distribuir tu contenido en diferentes idiomas.",
    image: youtube_clon_voz,
    sourceCodeLink: "https://youtu.be/ad-mdGVaz4w",
  },

  {
    name: "✅ Cómo ESCRIBIR un LIBRO con CHATGPT",
    description:
      "En este video te enseño a cómo usar IA para crear un libro y publicarlo en Amazon KDP, desde la generación de contenido hasta la configuración de la cuenta y la venta del libro",
    image: youtube_libro,
    sourceCodeLink: "https://youtu.be/xeOwlsywY8o",
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
    sourceCodeLink: "https://github.com/jorge-holguin/El-Escape-de-youtube_juego_unity",
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
    image: quakewatch,
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
    image: youtube_juego_ruleta,
    sourceCodeLink: "https://github.com/jorge-holguin/Ruleta_Mejorada",
  },

  {
    name: "Web Personal",
    description:
      "Pagina Web Personal hecha con el framework Astro",
    tags: [
      {
        name: "Astro",
        color: "red-text-gradient",
        image: astro,

      },
      {
        name: "Tailwind",
        color: "white-text-gradient",
        image: tailwind,

      },
      
    ],
    image: personalweb,
    sourceCodeLink: "https://github.com/jorge-holguin/personal-website",
  },

];

export const FOOTER_DATA = [
  {
    title: "Comunidad",
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
    title: "Redes Sociales",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/vidadigitalai",
      },
      {
        name: "X(Ex-Twitter)",
        icon: FaSquareXTwitter,
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
    title: "Sobre Mí",
    data: [
      {
        name: "Regalamé un café",
        icon: null,
        link: "https://buymeacoffee.com/vidadigital",
      },
      {
        name: "Aprende sobre herramientas de IA",
        icon: null,
        link: "https://youtube.com/@vidadigital1994",
      },
      {
        name: "Contactame",
        icon: null,
        link: "mailto:jorge.holguin1105@gmail.com",
      },
    ],
  },
] as const;

export { services, technologies, experiences, videos, projects };
