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
      title: "PROYECTOS",
      repo: "> REPOSITORIO",
      demo: "> DEMO",
      doc: "> DOCUMENTACIÓN",
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
          items: [
            {
              id: "tfg", title: "TFG-GRAVITY (2025)", desc: "Plataforma web integral para gestionar todo el ciclo de vida de licencias de software SaaS.",
              image: "https://i.imgur.com/uPvFJ1U.jpeg",
              contributions: ["Sistema de Autenticación Robusto", "Gestión de Licencias e Integración con PayPal", "Chatbot IA con OpenAI GPT-4o-mini", "Panel Administrativo y Sistema de Tickets"],
              tech: "Python, Flask, MySQL, JavaScript, OpenAI, PayPal",
              links: [{ type: "repo", url: "https://github.com/ibim4ster/TFG-GRAVITY" }, { type: "doc", url: "https://drive.google.com/file/d/1FBqu_wv533xr_tcU2T_OpdA-1tcfONmE/view?usp=sharing" }]
            },
            {
              id: "gatepass", title: "Gravity Gate Pass (2026)", desc: "Sistema de control de acceso y seguridad de código abierto para gestión de eventos.",
              image: "https://i.imgur.com/sjP0WpL.png",
              contributions: ["Desarrollo de sistemas de credenciales digitales seguras", "Implementación de lógica de acceso en puertas", "Diseño de interfaz frontend para administración"],
              tech: "JavaScript, Seguridad Web",
              creds: { user: "admin", pass: "admin123" },
              links: [{ type: "repo", url: "https://github.com/ibim4ster/gravity-gate-pass" }, { type: "demo", url: "https://gravity-gate-pass.lovable.app/" }]
            },
            {
              id: "presupuestos", title: "PRESUPUESTOS (2025)", desc: "Herramienta financiera para generar y gestionar propuestas de presupuestos comerciales.",
              image: "https://i.imgur.com/R94YLdP.png",
              contributions: ["Motor de cálculo para estimación de costes", "Generación de PDF e informes automatizados", "Persistencia de datos para registros de clientes y productos"],
              tech: "Desarrollo de Aplicaciones, Lógica de Negocio",
              creds: { user: "admin", pass: "admin" },
              links: [{ type: "repo", url: "https://github.com/ibim4ster/PRESUPUESTOS-" }, { type: "demo", url: "https://presupuestos-tau.vercel.app/" }]
            },
            {
              id: "kandido", title: "KANDIDO (2026)", desc: "Sistema de gestión de reclutamiento y seguimiento de candidatos con IA.",
              image: "https://i.imgur.com/mGUTNHa.png",
              contributions: ["Arquitectura backend para base de datos de candidatos", "Implementación de algoritmos de filtrado y búsqueda", "Panel de usuario para gestión de flujo de trabajo de RRHH"],
              tech: "Desarrollo Web, Bases de Datos, IA",
              links: [{ type: "demo", url: "https://kandido.vercel.app/" }]
            },
            {
              id: "portfolio", title: "Professional Portfolio (2026)", desc: "Sitio web personal que muestra una selección curada de proyectos de ingeniería y desarrollo.",
              image: "https://i.imgur.com/g7Mhaah.png",
              contributions: ["Diseño UI/UX moderno y responsivo", "Carga de recursos y rendimiento optimizados", "Componentes interactivos de demostración de proyectos"],
              tech: "HTML/CSS, JavaScript, Diseño Web",
              links: [{ type: "demo", url: "https://ibai-gallego.vercel.app/" }]
            },
            {
              id: "zombie", title: "Zombie Wave Prototype (2024)", desc: "Juego de acción trepidante desarrollado en un sprint de 48 horas (Unity).",
              contributions: ["Programación C# en Unity", "IA de enemigos y lógica de escalada de oleadas", "Prototipado rápido de bucles de juego principales"],
              tech: "Unity, C#, Diseño de Juegos"
            },
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
            }
          ]
        },
        mobile: {
          title: "EXTENSIONES DE APLICACIONES MÓVILES",
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
          title: "PROYECTOS ADICIONALES Y EMPRENDIMIENTO",
          items: [
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
      title: "PROJECTS",
      repo: "> REPOSITORY",
      demo: "> DEMO",
      doc: "> DOCUMENTATION",
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
          items: [
            {
              id: "tfg", title: "TFG-GRAVITY (2025)", desc: "Comprehensive web platform to manage the entire lifecycle of SaaS software licenses.",
              image: "https://i.imgur.com/uPvFJ1U.jpeg",
              contributions: ["Robust Authentication System", "License Management & PayPal Integration", "AI Chatbot with OpenAI GPT-4o-mini", "Admin Dashboard & Ticketing System"],
              tech: "Python, Flask, MySQL, JavaScript, OpenAI, PayPal",
              links: [{ type: "repo", url: "https://github.com/ibim4ster/TFG-GRAVITY" }, { type: "doc", url: "https://drive.google.com/file/d/1FBqu_wv533xr_tcU2T_OpdA-1tcfONmE/view?usp=sharing" }]
            },
            {
              id: "gatepass", title: "Gravity Gate Pass (2026)", desc: "Open-source security and access control system for event management.",
              image: "https://i.imgur.com/sjP0WpL.png",
              contributions: ["Development of secure digital credential systems", "Implementation of gate-access logic", "Frontend interface design for administration"],
              tech: "JavaScript, Web Security",
              creds: { user: "admin", pass: "admin123" },
              links: [{ type: "repo", url: "https://github.com/ibim4ster/gravity-gate-pass" }, { type: "demo", url: "https://gravity-gate-pass.lovable.app/" }]
            },
            {
              id: "presupuestos", title: "PRESUPUESTOS (2025)", desc: "Financial tool for generating and managing commercial budget proposals.",
              image: "https://i.imgur.com/R94YLdP.png",
              contributions: ["Calculation engine for cost estimation", "PDF generation and automated reporting", "Data persistence for client and product records"],
              tech: "Application Development, Business Logic",
              creds: { user: "admin", pass: "admin" },
              links: [{ type: "repo", url: "https://github.com/ibim4ster/PRESUPUESTOS-" }, { type: "demo", url: "https://presupuestos-tau.vercel.app/" }]
            },
            {
              id: "kandido", title: "KANDIDO (2026)", desc: "Recruitment and candidate tracking management system with AI.",
              image: "https://i.imgur.com/mGUTNHa.png",
              contributions: ["Backend architecture for candidate database", "Implementation of filtering and search algorithms", "User dashboard for HR workflow management"],
              tech: "Web Development, Databases, AI",
              links: [{ type: "demo", url: "https://kandido.vercel.app/" }]
            },
            {
              id: "portfolio", title: "Professional Portfolio (2026)", desc: "Personal showcase website featuring a curated selection of engineering and development projects.",
              image: "https://i.imgur.com/g7Mhaah.png",
              contributions: ["Modern and responsive UI/UX design", "Optimized asset loading and performance", "Interactive project demonstration components"],
              tech: "HTML/CSS, JavaScript, Web Design",
              links: [{ type: "demo", url: "https://ibai-gallego.vercel.app/" }]
            },
            {
              id: "zombie", title: "Zombie Wave Prototype (2024)", desc: "Fast-paced action game developed in a 48-hour sprint (Unity).",
              contributions: ["C# programming in Unity", "Enemy AI and wave escalation logic", "Rapid prototyping of core gameplay loops"],
              tech: "Unity, C#, Game Design"
            },
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
            }
          ]
        },
        mobile: {
          title: "MOBILE APPLICATIONS EXTENSIONS",
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
          title: "ADDITIONAL PROJECTS & ENTREPRENEURSHIP",
          items: [
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
