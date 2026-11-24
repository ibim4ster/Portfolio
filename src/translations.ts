import { ownProjects, jobs, aiItems, certifications, type Language } from './content';
export type { Language };

const build = (l: Language) => ({
  jobs: jobs.map(j => ({
    date: `[ ${j.date[l].toUpperCase()} ]`,
    title: j.role[l],
    company: typeof j.company === 'string' ? j.company : j.company[l],
    current: !!j.current,
    points: j.points[l],
  })),
  projects: ownProjects.map(p => ({
    id: p.id,
    title: `${p.title}${p.year ? ` (${p.year})` : ''}`,
    desc: p.desc[l],
    image: p.image,
    contributions: p.points[l],
    tech: p.tech.join(', '),
    creds: p.creds,
    links: p.links,
  })),
  ai: aiItems.map(a => ({ title: a.title[l], desc: a.desc[l] })),
  certs: certifications.map(c => ({ title: c.title[l], issuer: c.issuer, date: c.date[l], desc: c.desc[l], tags: c.tags })),
});
const B = { es: build('es'), en: build('en') };

export const translations = {
  es: {
    boot: {
      init: "> INITIATING SYSTEM...\n> LOADING PROFILE: IBAI GALLEGO FACES...\n> STATUS: SOFTWARE · IA · VÍDEO_",
      btn: "[ ACCEDER AL SISTEMA ]",
      tagline: "Desarrollador de software · IA · Producción audiovisual",
      hint: "Pulsa el botón, Enter o haz scroll para entrar",
      granted: "> ACCESO CONCEDIDO. BAJA PARA VER MÁS ↓"
    },
    nav: {
      lang: "ES",
      menu: {
        home: "INICIO",
        about: "SOBRE MÍ",
        projects: "PROYECTOS",
        skills: "HABILIDADES",
        experience: "EXPERIENCIA",
        contact: "CONTACTO"
      },
      cv: "CV",
      cvLong: "DESCARGAR CV (PDF)",
      cvFile: "/cv/Ibai_Gallego_CV_ES.pdf",
      themeTitle: "Cambiar colores"
    },
    core: {
      title: "EL NÚCLEO",
      bio: "Soy desarrollador de software con mentalidad freelance y perfil versátil. Construyo ERPs, webs, apps y automatizaciones con IA, y cuando hace falta también grabo y edito el vídeo. Me adapto rápido a nuevos entornos y retos, y siempre busco aportar más valor en cada proyecto.",
      facts: [
        { k: "AHORA", v: "SWAAP Media + freelance" },
        { k: "BASE", v: "Oyón-Oion, Álava · remoto" },
        { k: "CERTIFICACIÓN", v: "CCP Master · ICCP" },
        { k: "ESTADO", v: "Abierto a proyectos" }
      ],
      contactCta: "HABLEMOS",
      certTitle: "CERTIFICACIONES",
      certs: B.es.certs,
      academicTitle: "DATOS ACADÉMICOS",
      dam: {
        date: "[ 2022 - 2025 ]",
        title: "Grado Superior (DAM)",
        subtitle: "IES Comercio - Desarrollo de Aplicaciones Multiplataforma",
        p1: "Dominio de Java o C#, POO.",
        p2: "Apps nativas Android (Kotlin/Java) e iOS (Swift).",
        p3: "SQL (MySQL, Oracle) y NoSQL.",
        p4: "Diseño de interfaces, SAP, Odoo.",
        p5: "Unity, Unreal Engine."
      },
      smr: {
        date: "[ 2019 - 2021 ]",
        title: "Grado Medio (SMR)",
        subtitle: "IES Comercio - Sistemas Microinformáticos y Redes",
        p1: "Montar, reparar y diagnosticar ordenadores y servidores.",
        p2: "Configurar routers, switches, Wi-Fi e IP.",
        p3: "Windows y Linux (Terminal/comandos).",
        p4: "Firewalls, FTP, correo, copias de seguridad."
      }
    },
    skills: {
      title: "HABILIDADES TÉCNICAS",
      categories: {
        dev: "LENGUAJES Y DESARROLLO",
        data: "BASES DE DATOS Y ERP",
        tools: "ENTORNOS Y HERRAMIENTAS",
        design: "DISEÑO Y MULTIMEDIA"
      },
      ai: {
        title: "[ INTELIGENCIA ARTIFICIAL ]",
        items: B.es.ai
      }
    },
    experience: {
      title: "EXPERIENCIA LABORAL",
      jobs: B.es.jobs
    },
    projects: {
      title: "PROYECTOS",
      repo: "> REPOSITORIO",
      demo: "> DEMO",
      doc: "> DOCUMENTACIÓN",
      board: "> TABLERO TRELLO",
      all: "TODOS",
      current: "ACTUAL",
      tryIt: "PRUÉBALO, ES UNA DEMO",
      hint: "Pulsa \"VER MÁS\" en cada tarjeta para ver qué hice y con qué tecnologías.",
      more: "[ VER MÁS ]",
      close: "[ CERRAR ]",
      contributions: "CONTRIBUCIONES CLAVE:",
      tech: "TECNOLOGÍAS:",
      credentials: {
        user: "Usuario",
        pass: "Contraseña"
      },
      categories: {
        personal: {
          title: "PROYECTOS PERSONALES",
          items: B.es.projects
        },
        mobile: {
          title: "APPS MÓVILES",
          items: [
            {
              id: "swaap", title: "Swaap — Relay-Trucking (2023)", desc: "Sistema de optimización de transporte por relevos para eficiencia logística.",
              contributions: ["Desarrollo de app móvil en Flutter", "Diseño de backend DynamoDB", "Pipelines de datos en Python", "Modelos ML de pronóstico de series temporales"],
              tech: "Flutter, Python, DynamoDB, AWS, Machine Learning"
            },
            {
              id: "myfolder-mob", title: "MyFolder Mobile App", desc: "Versión móvil de la plataforma de intercambio de archivos MyFolder.",
              contributions: ["Diseño y desarrollo de app Flutter", "Implementación UI/UX", "Integración backend"],
              tech: "Flutter"
            },
            {
              id: "swaap-mob", title: "Swaap Mobile App", desc: "Plataforma logística móvil para operaciones de transporte por relevos.",
              contributions: ["Desarrollo móvil en Flutter", "Integración de datos en tiempo real", "Implementación de diseño UI"],
              tech: "Flutter"
            },
            {
              id: "silent-mob", title: "Silent Education Mobile App", desc: "Interfaz móvil para el sistema de monitorización de ruido en aulas.",
              contributions: ["Desarrollo en React Native", "Visualización de datos de sensores", "Implementación de UI multiplataforma"],
              tech: "React Native"
            }
          ]
        },
        additional: {
          title: "COLABORACIONES",
          items: [
            {
              id: "daytrading", title: "Daytrading Automation Platform (2024)", desc: "Plataforma de trading automatizado para ejecutar estrategias algorítmicas en mercados financieros.",
              contributions: ["Implementación de algoritmos de trading personalizados", "Integración con la plataforma WeBull usando SDK de Python", "Despliegue de infraestructura AWS para servidores de trading"],
              tech: "Python, AWS, Trading Algorítmico, APIs"
            },
            {
              id: "migasa", title: "Grupo Migasa — Optimization (2024)", desc: "Investigación y prototipado de optimización industrial.",
              contributions: ["Prototipo de optimización en Python", "Modelado matemático", "Pruebas de rendimiento"],
              tech: "Python, Optimización"
            },
            {
              id: "memories", title: "Memories of the Forgotten (2021)", desc: "Proyecto de juego narrativo discontinuado tras la fase de Kickstarter.",
              contributions: ["Sistemas de juego en C++", "Desarrollo en Unreal Engine", "Diseño de mecánicas principales"],
              tech: "C++, Unreal Engine"
            },
            {
              id: "energy", title: "Energy Crisis", desc: "Juego de simulación basado en sistemas actualmente en desarrollo.",
              contributions: ["Programación C# en Unity", "Diseño de sistemas de juego", "Desarrollo continuo"],
              tech: "Unity, C#"
            },
            {
              id: "robotics", title: "AI Robotics Vision System", desc: "Sistema de visión por computadora para percepción robótica usando datos sintéticos y deep learning.",
              contributions: ["Modelo de volumen de cuadrícula de ocupación basado en CNN", "Desarrollo de pipeline ML", "Generación de dataset sintético en Unreal Engine", "Investigación en percepción robótica"],
              tech: "Python, CNNs, Unreal Engine, Machine Learning"
            },
            {
              id: "myfoldr", title: "MyFoldr.io (2022)", desc: "Plataforma de intercambio de archivos en la nube para equipos pequeños y profesionales.",
              contributions: ["Desarrollo frontend en Angular", "Configuración de infraestructura AWS", "Servicios API REST", "Contribuciones a la arquitectura del sistema"],
              tech: "Angular, AWS, APIs REST"
            },
            {
              id: "silent", title: "Silent Education (2022)", desc: "Sistema IoT para medir y visualizar los niveles de ruido en las aulas.",
              contributions: ["Prototipo de hardware Raspberry Pi", "Servicios backend en Go", "Sistema de monitorización en tiempo real"],
              tech: "Raspberry Pi, Go, IoT"
            },
            {
              id: "smscalendar", title: "smscalendar.app", desc: "Aplicación de recordatorios SMS automatizados integrada con Google Calendar.",
              contributions: ["Integración API Google Calendar", "Sistema de programación de SMS automatizado"],
              tech: "Integración API, Automatización, Desarrollo Web"
            },
            {
              id: "kidix", title: "Kidix.ai", desc: "Asistente virtual basado en WhatsApp impulsado por ChatGPT.",
              contributions: ["Integración API OpenAI y WhatsApp", "Desarrollo backend para interacción IA"],
              tech: "API IA/ChatGPT, API WhatsApp Business, Desarrollo Backend"
            },
            {
              id: "smallmoments", title: "smallmomentsfamily.com", desc: "Plataforma de comercio electrónico para impresión de fotos móviles personalizadas.",
              contributions: ["Desarrollo de interfaz de tienda online", "Flujo de selección de imágenes", "Sistema de gestión de pedidos"],
              tech: "Desarrollo Web E-commerce, UI/UX"
            },
            {
              id: "smspubli", title: "SMSPubli.com", desc: "Plataforma B2B para campañas masivas de marketing por SMS.",
              contributions: ["Infraestructura de mensajería masiva", "Lógica de enrutamiento", "Desarrollo de panel de cliente"],
              tech: "APIs de Telecomunicaciones, Arquitectura Backend, Desarrollo Web"
            },
            {
              id: "bluemarlin", title: "BlueMarlin.studio", desc: "Consultoría tecnológica especializada en desarrollo web a medida e integraciones con WhatsApp.",
              contributions: ["Desarrollador principal en múltiples proyectos de clientes", "Desarrollo de webs a medida y herramientas de comunicación"],
              tech: "Desarrollo Web Full-Stack, Consultoría, Integraciones API"
            }
          ]
        }
      }
    },
    footer: {
      status: "STATUS: ONLINE",
      loc: "> LOC: Oyón-Oion / Álava"
    }
  },
  en: {
    boot: {
      init: "> INITIATING SYSTEM...\n> LOADING PROFILE: IBAI GALLEGO FACES...\n> STATUS: SOFTWARE · AI · VIDEO_",
      btn: "[ ACCESS SYSTEM ]",
      tagline: "Software developer · AI · Media production",
      hint: "Press the button, Enter or scroll to enter",
      granted: "> ACCESS GRANTED. SCROLL DOWN ↓"
    },
    nav: {
      lang: "EN",
      menu: {
        home: "HOME",
        about: "ABOUT ME",
        projects: "PROJECTS",
        skills: "SKILLS",
        experience: "EXPERIENCE",
        contact: "CONTACT"
      },
      cv: "CV",
      cvLong: "DOWNLOAD CV (PDF)",
      cvFile: "/cv/Ibai_Gallego_CV_EN.pdf",
      themeTitle: "Switch colours"
    },
    core: {
      title: "THE CORE",
      bio: "I'm a software developer with a freelance mindset and a versatile profile. I build ERPs, websites, apps and AI automations, and when needed I also shoot and edit the video. I adapt quickly to new environments and challenges, and I always look to add more value to every project.",
      facts: [
        { k: "NOW", v: "SWAAP Media + freelance" },
        { k: "BASED IN", v: "Oyón-Oion, Spain · remote" },
        { k: "CERTIFIED", v: "CCP Master · ICCP" },
        { k: "STATUS", v: "Open to projects" }
      ],
      contactCta: "LET'S TALK",
      certTitle: "CERTIFICATIONS",
      certs: B.en.certs,
      academicTitle: "ACADEMIC BACKGROUND",
      dam: {
        date: "[ 2022 - 2025 ]",
        title: "Higher National Diploma (Software Dev.)",
        subtitle: "IES Comercio - Multiplatform Application Development",
        p1: "Advanced Java & C#, OOP principles.",
        p2: "Native mobile apps for Android (Kotlin/Java) & iOS (Swift).",
        p3: "Relational (MySQL, Oracle) & NoSQL Databases.",
        p4: "UI/UX Design, ERP systems (SAP, Odoo).",
        p5: "Game Development (Unity, Unreal Engine)."
      },
      smr: {
        date: "[ 2020 - 2021 ]",
        title: "Vocational Degree (IT Systems)",
        subtitle: "IES Comercio - Microcomputer Systems & Networks",
        p1: "Hardware assembly, repair, and server diagnostics.",
        p2: "Network configuration (Routers, Switches, Wi-Fi, IP).",
        p3: "Windows & Linux Administration (CLI/Terminal).",
        p4: "Security (Firewalls, Backups) & Services (FTP, Mail)."
      }
    },
    skills: {
      title: "TECHNICAL SKILLS",
      categories: {
        dev: "LANGUAGES & DEVELOPMENT",
        data: "DATABASES & ERP",
        tools: "ENVIRONMENTS & TOOLS",
        design: "DESIGN & MULTIMEDIA"
      },
      ai: {
        title: "[ ARTIFICIAL INTELLIGENCE ]",
        items: B.en.ai
      }
    },
    experience: {
      title: "WORK EXPERIENCE",
      jobs: B.en.jobs
    },
    projects: {
      title: "PROJECTS",
      repo: "> REPOSITORY",
      demo: "> DEMO",
      doc: "> DOCUMENTATION",
      board: "> TRELLO BOARD",
      all: "ALL",
      current: "CURRENT",
      tryIt: "TRY IT, IT'S A DEMO",
      hint: "Hit \"READ MORE\" on any card to see what I built and with which tech.",
      more: "[ READ MORE ]",
      close: "[ CLOSE ]",
      contributions: "KEY CONTRIBUTIONS:",
      tech: "TECHNOLOGIES:",
      credentials: {
        user: "User",
        pass: "Password"
      },
      categories: {
        personal: {
          title: "PERSONAL PROJECTS",
          items: B.en.projects
        },
        mobile: {
          title: "MOBILE APPS",
          items: [
            {
              id: "swaap", title: "Swaap — Relay-Trucking (2023)", desc: "Relay-based trucking optimization system for logistics efficiency.",
              contributions: ["Flutter mobile app development", "DynamoDB backend design", "Python data pipelines", "Time-series ML forecasting models"],
              tech: "Flutter, Python, DynamoDB, AWS, Machine Learning"
            },
            {
              id: "myfolder-mob", title: "MyFolder Mobile App", desc: "Mobile version of MyFolder file-sharing platform.",
              contributions: ["Flutter app design and development", "UI/UX implementation", "Backend integration"],
              tech: "Flutter"
            },
            {
              id: "swaap-mob", title: "Swaap Mobile App", desc: "Mobile logistics platform for relay trucking operations.",
              contributions: ["Flutter mobile development", "Real-time data integration", "UI design implementation"],
              tech: "Flutter"
            },
            {
              id: "silent-mob", title: "Silent Education Mobile App", desc: "Mobile interface for classroom noise monitoring system.",
              contributions: ["React Native development", "Sensor data visualization", "Cross-platform UI implementation"],
              tech: "React Native"
            }
          ]
        },
        additional: {
          title: "COLLABORATIONS",
          items: [
            {
              id: "daytrading", title: "Daytrading Automation Platform (2024)", desc: "Automated trading platform for executing algorithmic strategies in financial markets.",
              contributions: ["Implementation of custom trading algorithms", "Integration with WeBull trading platform using Python SDK", "Deployment of AWS infrastructure for automated trading servers"],
              tech: "Python, AWS, Algorithmic Trading, APIs"
            },
            {
              id: "migasa", title: "Grupo Migasa — Optimization (2024)", desc: "Industrial optimization research and prototyping.",
              contributions: ["Python optimization prototype", "Mathematical modeling", "Performance testing"],
              tech: "Python, Optimization"
            },
            {
              id: "memories", title: "Memories of the Forgotten (2021)", desc: "Narrative-driven game project discontinued after Kickstarter phase.",
              contributions: ["C++ gameplay systems", "Unreal Engine development", "Core mechanics design"],
              tech: "C++, Unreal Engine"
            },
            {
              id: "energy", title: "Energy Crisis", desc: "Systems-driven simulation game currently in development.",
              contributions: ["C# programming in Unity", "Gameplay systems design", "Ongoing development"],
              tech: "Unity, C#"
            },
            {
              id: "robotics", title: "AI Robotics Vision System", desc: "Computer vision system for robotics perception using synthetic data and deep learning.",
              contributions: ["CNN-based stereo image to occupancy grid volume model", "ML pipeline development", "Unreal Engine synthetic dataset generation", "Robotics perception research"],
              tech: "Python, CNNs, Unreal Engine, Machine Learning"
            },
            {
              id: "myfoldr", title: "MyFoldr.io (2022)", desc: "Cloud file-sharing platform for small teams and professionals.",
              contributions: ["Angular frontend development", "AWS infrastructure setup", "REST API services", "System architecture contributions"],
              tech: "Angular, AWS, REST APIs"
            },
            {
              id: "silent", title: "Silent Education (2022)", desc: "IoT system for measuring and visualizing classroom noise levels.",
              contributions: ["Raspberry Pi hardware prototype", "Go backend services", "Real-time monitoring system"],
              tech: "Raspberry Pi, Go, IoT"
            },
            {
              id: "smscalendar", title: "smscalendar.app", desc: "Automated SMS reminder application integrated with Google Calendar.",
              contributions: ["Google Calendar API integration", "Automated SMS scheduling system"],
              tech: "API Integration, Automation, Web Development"
            },
            {
              id: "kidix", title: "Kidix.ai", desc: "WhatsApp-based virtual assistant powered by ChatGPT.",
              contributions: ["OpenAI API and WhatsApp integration", "Backend development for AI interaction"],
              tech: "AI/ChatGPT API, WhatsApp Business API, Backend Development"
            },
            {
              id: "smallmoments", title: "smallmomentsfamily.com", desc: "E-commerce platform for custom mobile photo printing.",
              contributions: ["Online store interface development", "Image selection workflow", "Order management system"],
              tech: "E-commerce Web Development, UI/UX"
            },
            {
              id: "smspubli", title: "SMSPubli.com", desc: "B2B platform for mass SMS marketing campaigns.",
              contributions: ["Bulk messaging infrastructure", "Routing logic", "Client dashboard development"],
              tech: "Telecommunications APIs, Backend Architecture, Web Development"
            },
            {
              id: "bluemarlin", title: "BlueMarlin.studio", desc: "Technology consultancy specializing in custom web development and WhatsApp integrations.",
              contributions: ["Lead developer across multiple client projects", "Development of bespoke websites and communication tools"],
              tech: "Full-Stack Web Development, Consulting, API Integrations"
            }
          ]
        }
      }
    },
    footer: {
      status: "STATUS: ONLINE",
      loc: "> LOC: Oyón-Oion / Álava, Spain"
    }
  }
};
