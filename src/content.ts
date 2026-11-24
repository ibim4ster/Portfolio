export type Language = 'es' | 'en';
type L = { es: string; en: string };
type LList = { es: string[]; en: string[] };

export const CV_URL = 'https://drive.google.com/file/d/1oAYQ1lWYi6UJLiYdJCScsuwgHT1i3IYN/view?usp=sharing';
export const CONTACT_EMAIL = 'ibairakelmario@gmail.com';
export const LINKS = {
  linkedin: 'https://es.linkedin.com/in/ibai-gallego-faces-78623419a',
  github: 'https://github.com/ibim4ster',
  phoneEs: '+34 673 350 491',
  phoneUs: '+1 (305) 396-0014',
};

export type LinkType = 'demo' | 'repo' | 'doc' | 'board';
export interface Project {
  id: string;
  title: string;
  year?: string;
  image?: string;
  desc: L;
  points: LList;
  tech: string[];
  links?: { type: LinkType; url: string }[];
  creds?: { user: string; pass: string };
}

export const ownProjects: Project[] = [
  {
    id: 'swaap-media', title: 'SWAAP Media', year: '2026', image: '/projects/swaap-media.jpg',
    desc: { es: 'Web de SWAAP Media, agencia de producción audiovisual: vídeo, fotografía y contenido digital para deporte, eventos y marcas.', en: 'Website for SWAAP Media, a media production agency: video, photography and digital content for sports, events and brands.' },
    points: { es: ['Diseño y desarrollo completo de la web', 'Portfolio audiovisual de fútbol, fútbol americano y otros deportes', 'Optimizada para móvil y carga rápida de vídeo'], en: ['Full website design and development', 'Media portfolio for soccer, American football and other sports', 'Mobile-first and optimized for fast video loading'] },
    tech: ['Web design', 'Video', 'Photography'],
    links: [{ type: 'demo', url: 'https://swaapmedia.com' }],
  },
  {
    id: 'kandido', title: 'Kandido', year: '2026', image: 'https://i.imgur.com/mGUTNHa.png',
    desc: { es: 'Plataforma de CVs y reclutamiento con IA: analiza candidatos y ayuda a RR. HH. a decidir más rápido.', en: 'AI-powered CV and recruiting platform that analyses candidates and helps HR decide faster.' },
    points: { es: ['Arquitectura backend para la base de datos de candidatos', 'Filtrado y búsqueda inteligente de perfiles', 'Panel para gestionar el flujo de trabajo de RR. HH.'], en: ['Backend architecture for the candidate database', 'Smart profile filtering and search', 'Dashboard to manage the HR workflow'] },
    tech: ['AI', 'Web', 'Databases'],
    links: [{ type: 'demo', url: 'https://kandido.es' }],
  },
  {
    id: 'tfg', title: 'TFG Gravity', year: '2025', image: 'https://i.imgur.com/uPvFJ1U.jpeg',
    desc: { es: 'Mi proyecto de fin de grado: plataforma web para gestionar todo el ciclo de vida de licencias de software SaaS.', en: 'My final degree project: a web platform to manage the whole lifecycle of SaaS software licences.' },
    points: { es: ['Sistema de autenticación robusto', 'Gestión de licencias y pagos con PayPal', 'Chatbot de soporte con OpenAI GPT-4o-mini', 'Panel de administración y sistema de tickets'], en: ['Robust authentication system', 'Licence management and PayPal payments', 'Support chatbot with OpenAI GPT-4o-mini', 'Admin panel and ticketing system'] },
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript', 'OpenAI', 'PayPal'],
    links: [
      { type: 'repo', url: 'https://github.com/ibim4ster/TFG-GRAVITY' },
      { type: 'doc', url: 'https://drive.google.com/file/d/1FBqu_wv533xr_tcU2T_OpdA-1tcfONmE/view?usp=sharing' },
      { type: 'board', url: 'https://trello.com/b/UNoaKey4/tfg-ibaigallego-dam2' },
    ],
  },
  {
    id: 'gatepass', title: 'Gravity Gate Pass', year: '2026', image: 'https://i.imgur.com/sjP0WpL.png',
    desc: { es: 'Aplicación de venta de entradas y control de acceso a eventos con credenciales digitales.', en: 'Ticket sales and event access-control app with digital credentials.' },
    points: { es: ['Credenciales digitales seguras', 'Lógica de validación de accesos en puerta', 'Panel de administración'], en: ['Secure digital credentials', 'Door access validation logic', 'Admin dashboard'] },
    tech: ['JavaScript', 'Web security'],
    creds: { user: 'admin', pass: 'admin123' },
    links: [{ type: 'demo', url: 'https://gravity-gate-pass.lovable.app/' }, { type: 'repo', url: 'https://github.com/ibim4ster/gravity-gate-pass' }],
  },
  {
    id: 'presupuestos', title: 'Presupuestos', year: '2025', image: 'https://i.imgur.com/R94YLdP.png',
    desc: { es: 'App para que los comerciales creen presupuestos en segundos y los exporten a PDF.', en: 'App for sales reps to create quotes in seconds and export them to PDF.' },
    points: { es: ['Motor de cálculo de costes', 'Generación automática de PDF', 'Registro de clientes y productos'], en: ['Cost calculation engine', 'Automatic PDF generation', 'Customer and product records'] },
    tech: ['Web app', 'Business logic'],
    creds: { user: 'admin', pass: 'admin' },
    links: [{ type: 'demo', url: 'https://presupuestos-tau.vercel.app/' }, { type: 'repo', url: 'https://github.com/ibim4ster/PRESUPUESTOS-' }],
  },
  {
    id: 'swaap-digital', title: 'SWAAP Digital', year: '2026', image: 'https://i.imgur.com/O93b7Sp.png',
    desc: { es: 'Agencia de digitalización y desarrollo web profesional para empresas.', en: 'Digitalisation and professional web development agency for businesses.' },
    points: { es: ['Diseño UI/UX orientado a conversión', 'SEO y rendimiento', 'Web corporativa autogestionable'], en: ['Conversion-focused UI/UX', 'SEO and performance', 'Self-managed corporate website'] },
    tech: ['React', 'JavaScript', 'Web design'],
    links: [{ type: 'demo', url: 'https://swaapdigital.com/' }],
  },
  {
    id: 'swaap-sports', title: 'SWAAP Sports', year: '2026', image: 'https://i.imgur.com/t1BFacx.png',
    desc: { es: 'Portal deportivo con noticias y cobertura en tiempo real de fútbol.', en: 'Sports portal with news and real-time soccer coverage.' },
    points: { es: ['Frontend interactivo para la comunidad', 'Marcadores en tiempo real', 'Carga multimedia optimizada'], en: ['Interactive community frontend', 'Real-time scores', 'Optimized media loading'] },
    tech: ['React', 'Tailwind CSS', 'Sports APIs'],
    links: [{ type: 'demo', url: 'https://swaapsports.com/' }],
  },
  {
    id: 'swaap-logistics', title: 'SWAAP Logistics', year: '2026', image: 'https://i.imgur.com/f7kyJjd.png',
    desc: { es: 'Optimización de rutas y gestión de flotas para transporte terrestre.', en: 'Route optimization and fleet management for road transport.' },
    points: { es: ['Mapas interactivos y rutas dinámicas', 'Algoritmos de asignación de carga', 'Panel de telemetría de vehículos'], en: ['Interactive maps and dynamic routing', 'Load assignment algorithms', 'Vehicle telemetry dashboard'] },
    tech: ['React', 'Node.js', 'Google Maps API'],
    links: [{ type: 'demo', url: 'https://swaaplogistics.com/' }],
  },
  {
    id: 'soccerworld', title: 'Soccer World', year: '2025', image: 'https://i.imgur.com/NG3wmEC.png',
    desc: { es: 'Prototipo de tienda online de camisetas de fútbol de ligas y selecciones de todo el mundo.', en: 'Online store prototype for soccer shirts from leagues and national teams worldwide.' },
    points: { es: ['Catálogo por ligas y selecciones', 'Carrito de compra', 'Totalmente responsive'], en: ['Catalogue by league and national team', 'Shopping cart', 'Fully responsive'] },
    tech: ['HTML/CSS', 'JavaScript'],
    links: [{ type: 'demo', url: 'https://soccerworld.vercel.app/' }],
  },
  {
    id: 'portfolio', title: 'Este portfolio', year: '2026', image: 'https://i.imgur.com/g7Mhaah.png',
    desc: { es: 'La web que estás viendo, bilingüe y con una terminal escondida.', en: "The site you're looking at — bilingual, with a hidden terminal." },
    points: { es: ['Diseño y desarrollo propio', 'Formulario de contacto que llega al email', 'Terminal interactiva'], en: ['Designed and built from scratch', 'Contact form delivered by email', 'Interactive terminal'] },
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [{ type: 'repo', url: 'https://github.com/ibim4ster/Portfolio' }],
  },
  {
    id: 'zombie', title: 'Zombie Wave', year: '2024',
    desc: { es: 'Juego de acción por oleadas desarrollado en un sprint de 48 horas.', en: 'Wave-based action game built in a 48-hour sprint.' },
    points: { es: ['Programación en C# con Unity', 'IA de enemigos y escalado de oleadas', 'Prototipado rápido del bucle de juego'], en: ['C# programming in Unity', 'Enemy AI and wave scaling', 'Rapid gameplay-loop prototyping'] },
    tech: ['Unity', 'C#'],
  },
];

export interface MiniProject { id: string; title: string; year?: string; desc: L; tech: string[] }

export const mobileProjects: MiniProject[] = [
  { id: 'swaap-relay', title: 'Swaap — Relay Trucking', year: '2023', desc: { es: 'App de transporte por relevos con backend en DynamoDB y modelos de predicción.', en: 'Relay-trucking app with a DynamoDB backend and forecasting models.' }, tech: ['Flutter', 'Python', 'AWS', 'ML'] },
  { id: 'myfolder-mob', title: 'MyFoldr Mobile', desc: { es: 'Versión móvil de la plataforma de archivos MyFoldr.', en: 'Mobile version of the MyFoldr file platform.' }, tech: ['Flutter'] },
  { id: 'swaap-mob', title: 'Swaap Mobile', desc: { es: 'Plataforma logística móvil con datos en tiempo real.', en: 'Mobile logistics platform with real-time data.' }, tech: ['Flutter'] },
  { id: 'silent-mob', title: 'Silent Education Mobile', desc: { es: 'App para visualizar el nivel de ruido de las aulas.', en: 'App to visualise classroom noise levels.' }, tech: ['React Native'] },
];

export const contributions: MiniProject[] = [
  { id: 'daytrading', title: 'Daytrading Automation', year: '2024', desc: { es: 'Plataforma de trading algorítmico con ejecución automática de estrategias, gestión de riesgo y despliegue en AWS.', en: 'Algorithmic trading platform with automatic strategy execution, risk management and AWS deployment.' }, tech: ['Python', 'AWS', 'WeBull SDK'] },
  { id: 'migasa', title: 'Grupo Migasa', year: '2024', desc: { es: 'Investigación de optimización logística para uno de los mayores productores de aceite del mundo: algoritmos de asignación y simulación de flota de cisternas.', en: "Logistics optimization research for one of the world's largest olive oil producers: assignment algorithms and tanker fleet simulation." }, tech: ['Python', 'OR-Tools', 'SQL'] },
  { id: 'robotics', title: 'AI Robotics Vision', desc: { es: 'Visión por computador para robótica con detección de objetos en tiempo real.', en: 'Computer vision for robotics with real-time object detection.' }, tech: ['Python', 'CNN', 'Unreal Engine'] },
  { id: 'memories', title: 'Memories of the Forgotten', year: '2021', desc: { es: 'Prototipo de aventura narrativa con entornos 3D, puzles y narrativa ramificada.', en: 'Narrative adventure prototype with 3D environments, puzzles and branching story.' }, tech: ['Unreal Engine', 'C++'] },
  { id: 'myfoldr', title: 'MyFoldr.io', year: '2022', desc: { es: 'Plataforma de gestión y organización de archivos con web y apps móviles.', en: 'File management platform with web and mobile apps.' }, tech: ['Angular', 'AWS'] },
  { id: 'silent', title: 'Silent Education', year: '2022', desc: { es: 'Dispositivo para controlar el ruido en clase con vúmetro, umbral ajustable y carcasa impresa en 3D.', en: 'Classroom noise-control device with VU meter, adjustable threshold and 3D-printed casing.' }, tech: ['Raspberry Pi', 'Python', '3D printing'] },
  { id: 'kidix', title: 'Kidix.ai', desc: { es: 'Asistente con ChatGPT dentro de WhatsApp. Producto lanzado con cobertura en medios en España.', en: 'ChatGPT assistant inside WhatsApp. Launched product with media coverage in Spain.' }, tech: ['OpenAI', 'WhatsApp API'] },
  { id: 'smscalendar', title: 'SMSCalendar', desc: { es: 'SaaS de recordatorios automáticos por SMS integrado con Google Calendar.', en: 'SaaS for automated SMS reminders integrated with Google Calendar.' }, tech: ['SaaS', 'Google API'] },
  { id: 'smspubli', title: 'SMSPubli', desc: { es: 'Plataforma B2B de marketing por SMS con panel de cliente y analítica de campañas.', en: 'B2B bulk SMS marketing platform with client dashboard and campaign analytics.' }, tech: ['B2B', 'Backend'] },
  { id: 'smallmoments', title: 'SmallMomentsFamily', desc: { es: 'E-commerce de productos fotográficos personalizados con envío a domicilio.', en: 'E-commerce for personalised photo products with home delivery.' }, tech: ['E-commerce'] },
  { id: 'bluemarlin', title: 'BlueMarlin.studio', desc: { es: 'Estudio de consultoría tecnológica: productos digitales, automatización e IA.', en: 'Technology consulting studio: digital products, automation and AI.' }, tech: ['Consulting'] },
  { id: 'energy', title: 'Energy Crisis', desc: { es: 'Juego de simulación basado en sistemas.', en: 'Systems-based simulation game.' }, tech: ['Unity', 'C#'] },
];

export interface Job { role: L; company: string | L; date: L; points: LList; current?: boolean }

export const jobs: Job[] = [
  {
    role: { es: 'Producción audiovisual y desarrollo web', en: 'Media production & web development' }, company: 'SWAAP Media',
    date: { es: 'Ago 2026 — Actualidad', en: 'Aug 2026 — Present' }, current: true,
    points: {
      es: ['Producción, edición de vídeo, fotografía y contenido digital para fútbol, fútbol americano y otros deportes.', 'Contenido audiovisual para eventos, marcas y proyectos más allá del deporte.', 'Diseño y desarrollo de la web de la agencia: swaapmedia.com.'],
      en: ['Video production, editing, photography and digital content for soccer, American football and other sports.', 'Audiovisual content for events, brands and projects beyond sports.', 'Designed and developed the agency website: swaapmedia.com.'],
    },
  },
  {
    role: { es: 'Desarrollador de software freelance', en: 'Freelance software developer' }, company: { es: 'Proyectos independientes', en: 'Independent projects' },
    date: { es: 'Actualidad', en: 'Present' }, current: true,
    points: { es: ['Soluciones de software, web, automatización e IA para proyectos independientes.'], en: ['Software, web, automation and AI solutions for independent projects.'] },
  },
  {
    role: { es: 'Técnico y desarrollador ERP', en: 'ERP technician & developer' }, company: 'Logic Soluciones Software · Grupo Pancorbo',
    date: { es: 'Jun 2025 — Jul 2026', en: 'Jun 2025 — Jul 2026' },
    points: {
      es: ['Formación avanzada y certificación en Sage 50, 200, Despachos y Ágora.', 'Aplicaciones web internas para automatizar procesos y subir la productividad del equipo.', 'Desarrollo de un ERP a medida y módulos personalizados en C#.', 'Informes personalizados en SQL (facturas, albaranes, pedidos).', 'Instalación, configuración y formación de ERPs y facturadores; demos a potenciales clientes.', 'Configuración de servidores Windows Server y Linux; mantenimiento de webs WordPress.', 'Implantación de control horario, cámaras de seguridad y motor de reservas.'],
      en: ['Advanced training and certification in Sage 50, 200, Despachos and Ágora.', 'Internal web apps to automate processes and boost team productivity.', 'Custom ERP development and bespoke modules in C#.', 'Custom SQL reports (invoices, delivery notes, orders).', 'ERP and invoicing software installation, setup and training; demos for prospects.', 'Windows Server and Linux configuration; WordPress site maintenance.', 'Rolled out time-tracking, security cameras and a booking engine.'],
    },
  },
  {
    role: { es: 'Prácticas — soporte ERP', en: 'Internship — ERP support' }, company: 'Logic Soluciones Software · Grupo Pancorbo',
    date: { es: 'Mar 2025 — Jun 2025 · 400 h', en: 'Mar 2025 — Jun 2025 · 400 h' },
    points: {
      es: ['Formación intensiva en Sage 50 y Ágora.', 'Instalación, configuración y formación de ERPs y facturadores.', 'Soporte técnico y atención al cliente.', 'Presupuestos, albaranes, facturas y contabilidad.'],
      en: ['Intensive training in Sage 50 and Ágora.', 'ERP and invoicing software installation, setup and training.', 'Technical support and customer service.', 'Quotes, delivery notes, invoices and accounting.'],
    },
  },
  {
    role: { es: 'Camarero (temporadas de verano)', en: 'Bar server (summer seasons)' }, company: { es: 'Hostelería', en: 'Hospitality' },
    date: { es: 'Veranos 2021 · 2022 · 2023', en: 'Summers 2021 · 2022 · 2023' },
    points: { es: ['Servicio de barra y terraza; trato con clientes y trabajo bajo presión.'], en: ['Bar and terrace service; customer-facing work under pressure.'] },
  },
  {
    role: { es: 'Prácticas — Dpto. de Informática', en: 'Internship — IT department' }, company: 'Arluy',
    date: { es: 'Mar 2021 — Jun 2021 · 400 h', en: 'Mar 2021 — Jun 2021 · 400 h' },
    points: {
      es: ['Soporte a usuarios presencial y en remoto; instalación de equipos.', 'Creación de usuarios, permisos y políticas locales.', 'Tienda online en PrestaShop con el catálogo de productos.', 'Sistema automático de incidencias con Power Automate, Excel y SharePoint.', 'Antenas MikroTik para telefonía inalámbrica; reparación de equipos e impresoras.'],
      en: ['On-site and remote user support; equipment installation.', 'User accounts, permissions and local policies.', 'PrestaShop online store with the product catalogue.', 'Automated incident system with Power Automate, Excel and SharePoint.', 'MikroTik antennas for wireless phones; computer and printer repair.'],
    },
  },
];

export const education = [
  {
    title: { es: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)', en: 'Higher Vocational Training in Cross-Platform App Development (DAM)' },
    place: 'IES Comercio', date: '2022 — 2025',
    desc: { es: 'Java y C# con POO, apps Android e iOS, SQL y NoSQL, UI/UX, ERPs (SAP, Odoo), acceso a datos y videojuegos con Unity y Unreal.', en: 'Java and C# with OOP, Android and iOS apps, SQL and NoSQL, UI/UX, ERPs (SAP, Odoo), data access and games with Unity and Unreal.' },
  },
  {
    title: { es: 'Grado Medio en Sistemas Microinformáticos y Redes (SMR)', en: 'Intermediate Vocational Training in Computer Systems & Networks (SMR)' },
    place: 'IES Comercio', date: '2019 — 2021',
    desc: { es: 'Hardware, redes (routers, switches, Wi-Fi), Windows y Linux, seguridad y copias, servicios (correo, FTP) y helpdesk.', en: 'Hardware, networking (routers, switches, Wi-Fi), Windows and Linux, security and backups, services (email, FTP) and helpdesk.' },
  },
];

export const skillGroups: { title: L; items: string[] }[] = [
  { title: { es: 'Lenguajes', en: 'Languages' }, items: ['Java', 'Python', 'C#', 'C++', 'PHP', 'Go', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'XML', 'SQL'] },
  { title: { es: 'Frameworks', en: 'Frameworks' }, items: ['React', 'Angular', 'Flutter', 'Flask', 'Tailwind CSS'] },
  { title: { es: 'ERP y bases de datos', en: 'ERP & databases' }, items: ['Sage 50', 'Sage 200', 'Sage Despachos', 'Ágora', 'SQL Server', 'MySQL', 'HeidiSQL', 'MongoDB'] },
  { title: { es: 'Entornos y herramientas', en: 'Tools & environments' }, items: ['Git', 'Visual Studio', 'Antigravity', 'Android Studio', 'NetBeans', 'IntelliJ', 'VirtualBox', 'VMware', 'AWS', 'Windows Server', 'Linux', 'WordPress', 'Raspberry Pi', 'Unity', 'Unreal Engine'] },
  { title: { es: 'Diseño y multimedia', en: 'Design & media' }, items: ['Figma', 'Premiere', 'DaVinci Resolve', 'Sony Vegas', 'Photoshop', 'Canva'] },
];

export const aiItems: { title: L; desc: L }[] = [
  { title: { es: 'Desarrollo asistido', en: 'AI-assisted development' }, desc: { es: 'Cursor, Antigravity, Claude Code y LLMs para generar código y reducir drásticamente los tiempos de entrega.', en: 'Cursor, Antigravity, Claude Code and LLMs to generate code and drastically cut delivery times.' } },
  { title: { es: 'Diseño y prototipado', en: 'Design & prototyping' }, desc: { es: 'Figma, Claude Design y Google AI Studio para UI/UX integrada con el desarrollo.', en: 'Figma, Claude Design and Google AI Studio for UI/UX that flows into development.' } },
  { title: { es: 'MVPs en tiempo récord', en: 'MVPs in record time' }, desc: { es: 'Apps web funcionales con Lovable, Base44 y Antigravity.', en: 'Working web apps with Lovable, Base44 and Antigravity.' } },
  { title: { es: 'Integración de modelos', en: 'Model & API integration' }, desc: { es: 'Anthropic, Google Gemini y OpenAI dentro de aplicaciones propias.', en: 'Anthropic, Google Gemini and OpenAI inside custom applications.' } },
  { title: { es: 'Agentes de voz', en: 'Voice agents' }, desc: { es: 'ElevenLabs: agentes de voz en lenguaje natural que atienden llamadas como asistentes de negocio.', en: 'ElevenLabs: natural-language voice agents that handle phone calls as business assistants.' } },
  { title: { es: 'Automatización técnica', en: 'Technical automation' }, desc: { es: 'Documentación, casos de prueba y traducción de lógica entre lenguajes con IA.', en: 'AI-generated documentation, test cases and logic translation between languages.' } },
];

export const certifications = [
  {
    title: { es: 'Certified Computing Professional (CCP) — nivel Master', en: 'Certified Computing Professional (CCP) — Master level' },
    issuer: 'ICCP · Institute for Certification of Computing Professionals',
    date: { es: 'Nov 2026 — válida hasta 2030', en: 'Nov 2026 — valid through 2030' },
    desc: {
      es: 'Certificación profesional internacional que acredita competencias en informática tras superar una evaluación integral de habilidades IT. Especialidades: gestión de sistemas de información (IS/IT Management) e inteligencia artificial.',
      en: 'International professional certification for computing professionals, earned by passing a comprehensive IT skills assessment. Specialties: IS/IT Management and Artificial Intelligence.',
    },
    tags: ['IS/IT Management', 'Artificial Intelligence', 'IT Skills Assessment'],
  },
];
