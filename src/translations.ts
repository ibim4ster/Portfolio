export type Language = 'es' | 'en';

export const translations = {
  es: {
    boot: {
      init: "> INITIATING SYSTEM...\n> LOADING PROFILE: IBAI GALLEGO FACES...\n> STATUS: FULL-STACK & AI SPECIALIST_",
      btn: "[ ACCEDER AL SISTEMA ]",
      granted: "> ACCESS GRANTED. SCROLL DOWN."
    },
    nav: {
      lang: "ES",
      menu: {
        home: "INICIO",
        about: "SOBRE MÍ",
        projects: "PROYECTOS",
        skills: "HABILIDADES",
        experience: "EXPERIENCIA"
      }
    },
    core: {
      title: "EL NÚCLEO",
      bio: "Soy un entusiasta de la informática desde temprana edad. Me caracterizo por ser sociable y disfrutar del aprendizaje constante. Siempre estoy buscando oportunidades para crecer tanto en el ámbito personal como profesional.",
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
        date: "[ 2020 - 2021 ]",
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
        items: [
          { title: "Desarrollo de Software Asistido", desc: "Uso intensivo de Cursor y LLMs para la generación de código, reduciendo tiempos de entrega mediante automatización." },
          { title: "Diseño y Prototipado", desc: "Manejo de Figma para UI/UX, integrando el diseño visual con el flujo de desarrollo posterior." },
          { title: "Prototipado Rápido con IA", desc: "Creación de aplicaciones web funcionales y MVPs en tiempo récord utilizando Lovable, Base44 y Antigravity." },
          { title: "Integración de Modelos y APIs", desc: "Implementación de Anthropic, Google Gemini y OpenAI dentro de aplicaciones propias." },
          { title: "Entornos de Experimentación", desc: "Configuración y uso de Google AI Studio y Claude para diseño de prompts, depuración y refactorización." },
          { title: "Automatización de Tareas Técnicas", desc: "Generación automática de documentación, casos de prueba y traducción de lógica entre lenguajes." }
        ]
      }
    },
    experience: {
      title: "EXPERIENCIA LABORAL",
      jobs: [
        {
          date: "[ JUN 2025 - ACTUALIDAD ]",
          title: "Logic Soluciones Software | Grupo Pancorbo",
          points: [
            "Formación avanzada de Sage 50, 200, Despachos y Ágora + titulación.",
            "Automatizar procesos de los trabajadores (Aplicaciones web internas).",
            "Instalación, configuración y formación de ERPs para empresas.",
            "Personalización de informes en SQL y módulos a medida en C#.",
            "Configuración de servidores (Windows Server y Linux).",
            "Mantenimiento de páginas WordPress y plugins."
          ]
        },
        {
          date: "[ MAR 2025 - JUN 2025 ]",
          title: "Logic Soluciones Software (Prácticas)",
          points: [
            "Formación intensiva de Sage 50 y Ágora.",
            "Instalación, configuración y formación de programas ERP y facturadores.",
            "Servicio técnico de los programas y atención al cliente.",
            "Realizar presupuestos, albaranes, facturas y contabilidad."
          ]
        },
        {
          date: "[ 2021 - 2023 ]",
          title: "Trabajo en Hostelería | Camarero",
          points: [
            "Atención en barra y terraza.",
            "Desarrollo de habilidades de trato al cliente y trabajo bajo presión."
          ]
        },
        {
          date: "[ MAR 2021 - JUN 2021 ]",
          title: "Arluy (Prácticas) | Dpto. Informática",
          points: [
            "Soporte al cliente tanto de la empresa y en remoto.",
            "Creación y configuración de página PrestaShop con los productos.",
            "Instalación de antenas MikroTik para teléfonos inalámbricos.",
            "Implementación de Sistema Automático de incidencias (Power Automate, Excel, SharePoint)."
          ]
        }
      ]
    },
    projects: {
      title: "PROYECTOS PERSONALES",
      repo: "> REPOSITORIO",
      demo: "> DEMO",
      doc: "> DOCUMENTACIÓN",
      credentials: {
        user: "Usuario",
        pass: "Contraseña"
      },
      items: [
        {
          title: "TFG-GRAVITY",
          desc: "Trabajo de fin de curso. Plataforma integral."
        },
        {
          title: "Gravity Gate Pass",
          desc: "Venta de tickets y control de acceso."
        },
        {
          title: "App Presupuestos",
          desc: "Realizar presupuestos de manera ágil (Comerciales)."
        }
      ]
    },
    footer: {
      status: "STATUS: ONLINE",
      loc: "> LOC: Oyón-Oion / Álava"
    }
  },
  en: {
    boot: {
      init: "> INITIATING SYSTEM...\n> LOADING PROFILE: IBAI GALLEGO FACES...\n> STATUS: FULL-STACK & AI SPECIALIST_",
      btn: "[ ACCESS SYSTEM ]",
      granted: "> ACCESS GRANTED. SCROLL DOWN."
    },
    nav: {
      lang: "EN",
      menu: {
        home: "HOME",
        about: "ABOUT ME",
        projects: "PROJECTS",
        skills: "SKILLS",
        experience: "EXPERIENCE"
      }
    },
    core: {
      title: "THE CORE",
      bio: "I have been an IT enthusiast since an early age. I consider myself a highly sociable person who thrives on continuous learning. I am constantly seeking opportunities to grow both personally and professionally.",
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
        items: [
          { title: "AI-Assisted Software Development", desc: "Intensive use of Cursor and LLMs for code generation, drastically reducing delivery times through automation." },
          { title: "Design & Prototyping", desc: "Proficient in Figma for UI/UX, seamlessly integrating visual design with the subsequent development workflow." },
          { title: "Rapid AI Prototyping", desc: "Creation of functional web applications and MVPs in record time using platforms like Lovable, Base44, and Antigravity." },
          { title: "Model & API Integration", desc: "Technical implementation of Anthropic, Google Gemini, and OpenAI services into custom applications." },
          { title: "Experimentation Environments", desc: "Configuration and use of Google AI Studio and Claude for prompt engineering, debugging, and code refactoring." },
          { title: "Technical Task Automation", desc: "Automated generation of documentation, test cases, and logic translation across different programming languages." }
        ]
      }
    },
    experience: {
      title: "WORK EXPERIENCE",
      jobs: [
        {
          date: "[ JUN 2025 - PRESENT ]",
          title: "Software Developer | Logic Soluciones",
          points: [
            "Advanced certification and training in Sage 50, 200, Despachos, and Ágora.",
            "Process automation through the development of internal web applications.",
            "Installation, configuration, and training of ERP systems for enterprise clients.",
            "Custom report generation in SQL and bespoke module development in C#.",
            "Server configuration and administration (Windows Server and Linux).",
            "WordPress website maintenance and plugin management."
          ]
        },
        {
          date: "[ MAR 2025 - JUN 2025 ]",
          title: "Software Development Intern | Logic Soluciones",
          points: [
            "Intensive training in Sage 50 and Ágora ERP systems.",
            "Assisted in the installation and configuration of billing and ERP software.",
            "Provided technical support and customer service for software issues.",
            "Managed internal accounting tasks including budgeting and invoicing."
          ]
        },
        {
          date: "[ 2021 - 2023 ]",
          title: "Hospitality Industry | Bartender",
          points: [
            "Provided excellent customer service in high-paced bar and terrace environments.",
            "Developed strong soft skills, conflict resolution, and the ability to work under pressure."
          ]
        },
        {
          date: "[ MAR 2021 - JUN 2021 ]",
          title: "IT Support Intern | Arluy",
          points: [
            "Provided remote and on-site IT support for corporate employees.",
            "Created and configured a PrestaShop e-commerce platform for company products.",
            "Installed MikroTik antennas for wireless telephone networks.",
            "Implemented an automated ticketing system using Power Automate, Excel, and SharePoint."
          ]
        }
      ]
    },
    projects: {
      title: "PERSONAL PROJECTS",
      repo: "> REPOSITORY",
      demo: "> DEMO",
      doc: "> DOCUMENTATION",
      credentials: {
        user: "User",
        pass: "Password"
      },
      items: [
        {
          title: "TFG-GRAVITY",
          desc: "Capstone degree project. Comprehensive platform."
        },
        {
          title: "Gravity Gate Pass",
          desc: "Ticket sales and access control."
        },
        {
          title: "App Presupuestos",
          desc: "Agile budgeting application (Sales reps)."
        }
      ]
    },
    footer: {
      status: "STATUS: ONLINE",
      loc: "> LOC: Oyón-Oion / Álava, Spain"
    }
  }
};
