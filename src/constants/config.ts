type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    videos: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Jorge Holguin — Portafolio",
    fullName: "Jorge Holguin",
    email: "jorge.holguin1105@gmail.com",
  },
  hero: {
    name: "Jorge Holguin",
    p: ["Soy un Desarrollador de Software con experiencia en desarrollo de sitios web, aplicaciones móviles y software. Revisa mis proyectos y habilidades."],
  },
  contact: {
    p: "Ponte en contacto conmigo",
    h2: "Contacto",
    form: {
      name: {
        span: "Tu nombre",
        placeholder: "¿Cuál es tu nombre?",
      },
      email: { span: "Tu correo electrónico", placeholder: "¿Cual es tu correo?" },
      message: {
        span: "Tu mensaje",
        placeholder: "Escribe lo que me quieres decir",
      },
    },
  },
  sections: {
    about: {
      p: "Introducción",
      h2: "Sobre Mí.",
      content: `Soy un desarrollador de software y creador de contenido en Youtube, especializado en TypeScript y JavaScript, con experiencia en frameworks como React. Colaboro estrechamente con los clientes para crear soluciones de software innovadoras y efectivas. ¡Llevemos tu idea al mundo real!`,
    },
    experience: {
      p: "Esto es lo que he hecho hasta ahora",
      h2: "Experiencia de Trabajo.",
    },
    videos: {
      p: "Me apasiona crear contenido",
      h2: "Mis Videos.",
      content: `En esta lista, te mostraré los videos que considero más destacados. Además, me encantaría saber tu opinión sobre qué contenido relacionado con inteligencia artificial te gustaría ver en el futuro.`,
    },
    works: {
      p: "Mi trabajo",
      h2: "Proyectos.",
      content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demostraciones en vivo, reflejando mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.`,
    },
  },
};
