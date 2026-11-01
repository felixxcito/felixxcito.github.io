/* Datos de proyectos. Las capturas se cargan desde data/shots.js (generado). */
window.OWNER = "felixxcito";
window.PROJECTS = [
  {
    slug: "os-sim-pro",
    repo: "os-sim-pro",
    kind: "uni",
    featured: true,
    title: "OS-Sim Pro",
    course: "Sistemas Operativos",
    tagline: "Simulador de sistema operativo de escritorio con planificador, memoria y detección de interbloqueo.",
    description:
      "Programa de escritorio que simula un sistema operativo completo: ventanas, navegador, procesador de texto, hoja de cálculo y terminal. Debajo corre un núcleo simulado que muestra en vivo cómo se reparten CPU, RAM y recursos.",
    points: [
      "CPU de 4 núcleos con Round Robin, cambios de contexto y diagrama de Gantt.",
      "4 GB de RAM con First-Fit y Best-Fit, fragmentación externa y compactación animada.",
      "Detección de interbloqueo por grafo de espera y por matrices, más envejecimiento contra inanición.",
      "Aplicaciones reales: Escritor abre y guarda .docx, Hojas abre .xlsx y .csv."
    ],
    stack: ["React", "TypeScript", "Vite", "Electron"],
    logos: ["react", "typescript", "vite", "electron"]
  },
  {
    slug: "proyecto-final-felix-arocha",
    repo: "proyecto-final-felix-arocha",
    kind: "uni",
    title: "Aula Virtual LPR",
    course: "Lenguajes de Programación",
    tagline: "Plataforma de clases con cuatro microservicios en cuatro lenguajes, orquestados con Docker.",
    description:
      "Plataforma web con cuentas de estudiante, profesor y administrador, verificación de correo por código, pase de lista, notificaciones y un asistente de IA para resolver dudas.",
    points: [
      "Microservicios en Python, Node.js, Java y Go detrás de un API Gateway con Nginx.",
      "PostgreSQL y MongoDB, todo levantado con Docker Compose.",
      "Registro con código de 6 dígitos al correo, recuperación de clave y sesión recordada.",
      "Más de 190 commits de historial en el repositorio."
    ],
    stack: ["Python", "Node.js", "Java", "Go", "Docker"],
    logos: ["python", "nodedotjs", "openjdk", "go", "docker", "postgresql", "mongodb", "nginx"]
  },
  {
    slug: "simulador-datastream",
    repo: "simulador-datastream",
    kind: "uni",
    title: "DataStream Networks",
    course: "Métodos Cuantitativos",
    tagline: "Simulador de eventos discretos que optimiza el tráfico de un centro de datos.",
    description:
      "Dashboard visual hecho con SimPy y Pygame que aplica programación dinámica y optimización no lineal para reducir latencia, congestión y consumo energético. Genera reportes en PDF con análisis de IA o, sin conexión, con reglas locales.",
    points: [
      "Enrutamiento por programación dinámica verificado contra Dijkstra.",
      "Asignación de tareas como problema de mochila de dos dimensiones (RAM y CPU).",
      "Reporte PDF con IA (NVIDIA NIM) y modo local sin clave."
    ],
    stack: ["Python", "SimPy", "Pygame"],
    logos: ["python"]
  },
  {
    slug: "echonotes",
    repo: "echonotes",
    kind: "uni",
    title: "EchoNotes",
    course: "Proyecto académico",
    tagline: "Transcripción musical automática: del audio a MIDI, partituras y tablaturas.",
    description:
      "Adaptación de un modelo abierto de transcripción multiinstrumento (MuScriptor, licencia MIT). Mi trabajo fue traducir la interfaz y la línea de comandos al español, rediseñar la web con tema claro y documentar el sistema con diagramas, talleres y plan de calidad.",
    points: [
      "Backend en Python con API FastAPI y línea de comandos; frontend en React con Vite.",
      "Salida en MIDI, PDF, MusicXML y tablaturas de guitarra y bajo.",
      "Documentación académica: diagramas de clases, cronograma y calidad del software."
    ],
    stack: ["Python", "FastAPI", "React", "Vite"],
    logos: ["python", "fastapi", "react", "vite", "docker"]
  },
  {
    slug: "simulador-so-movil",
    repo: "simulador-so-movil",
    kind: "uni",
    title: "Simulador de SO móvil",
    course: "Sistemas de Operación",
    tagline: "Un teléfono completo en tu escritorio, con multitarea real y Low Memory Killer.",
    description:
      "Emulador escrito en Java 17 y JavaFX que implementa los requisitos RF-01 a RF-14 de un sistema operativo móvil: multitarea, batería, archivos, cámara, GPS virtual y ajustes. Todo el arte es original y se dibuja en código.",
    points: [
      "Multitarea con Low Memory Killer y gestión de batería.",
      "Sistema de archivos virtual persistente, galería, mapas y mensajes.",
      "Modo oscuro, centro de control, notificaciones y teclado propio."
    ],
    stack: ["Java 17", "JavaFX"],
    logos: ["openjdk"]
  },
  {
    slug: "wordpress-docker-redis",
    repo: "wordpress-docker-redis",
    kind: "uni",
    title: "WordPress con Redis",
    course: "Lenguajes de Programación",
    tagline: "Stack de cuatro contenedores con caché de objetos en Redis.",
    description:
      "WordPress sobre una imagen propia con phpredis, MariaDB, Redis como cuarto servicio y Adminer para inspeccionar la base de datos desde el navegador.",
    points: [
      "Imagen propia basada en php8.3-apache con extensión phpredis.",
      "Configuración por variables de entorno, sin credenciales en el repositorio."
    ],
    stack: ["Docker Compose", "WordPress", "Redis"],
    logos: ["docker", "wordpress", "redis"]
  },
  {
    slug: "semana10-jwt-fastapi",
    repo: "semana10-jwt-fastapi",
    kind: "uni",
    title: "API con JWT en FastAPI",
    course: "Unidad IV",
    tagline: "Login con JWT, rutas públicas, privadas y con control de rol.",
    description:
      "API pequeña y clara que muestra autenticación con tokens, endpoints protegidos y autorización por rol (administrador y estudiante), con evidencias de cada caso.",
    points: [
      "Respuestas 200 y 403 demostradas con capturas de la documentación interactiva."
    ],
    stack: ["FastAPI", "JWT", "Python"],
    logos: ["fastapi", "python"]
  },
  {
    slug: "portafolio-demos",
    repo: "portafolio-demos",
    kind: "personal",
    title: "Cuatro sitios demo",
    course: "Proyecto personal",
    tagline: "Agencia creativa, inmobiliaria, lanzamiento de producto y tablero de datos, cada uno con identidad propia.",
    description:
      "Cuatro sitios completos sobre un mismo proyecto Next.js: Nova con shader WebGL propio y scroll cinemático, Altura con filtros, comparador y calculadora de hipoteca, Impulso con configurador 3D y Cifra, un tablero de datos con gráficas propias.",
    points: [
      "WebGL con shader propio, GSAP ScrollTrigger y scroll suave con Lenis.",
      "Formularios validados, comparador y calculadora financiera.",
      "Cifra: gráficas SVG sin librerías, estado en la URL y carga de CSV.",
      "Desplegado en Vercel."
    ],
    stack: ["Next.js", "Three.js", "GSAP", "Tailwind"],
    logos: ["nextdotjs", "react", "typescript", "tailwindcss", "vercel"],
    live: "https://portafolio-demos-psi.vercel.app"
  },
  {
    slug: "ivonny-swim",
    repo: "ivonny-swim",
    kind: "personal",
    title: "Ivonny Swim",
    course: "Cliente real",
    tagline: "Tienda web de trajes de baño con panel propio para su dueña.",
    description:
      "Tienda en producción con catálogo público y un panel desde el que la dueña administra productos y fotos desde el teléfono, con desbloqueo biométrico por Face ID.",
    points: [
      "Catálogo editable sin tocar código, con base de datos y fotos en Supabase.",
      "Políticas de seguridad por fila: cualquiera lee, solo quien inicia sesión escribe.",
      "Desplegado en Vercel."
    ],
    stack: ["JavaScript", "Supabase", "Vercel"],
    logos: ["supabase", "vercel"],
    live: "https://ivonny-swim.vercel.app"
  },
  {
    slug: "residencial-las-palmas",
    repo: "residencial-las-palmas",
    kind: "personal",
    title: "Residencial Las Palmas",
    course: "Proyecto personal",
    tagline: "Administración de condominios: cuotas, reservas, visitas y mantenimiento.",
    description:
      "Aplicación full-stack para administrar un condominio, responsive e instalable como PWA, con roles de administrador y residente.",
    points: [
      "Residentes y unidades, cuotas y pagos, reservas de áreas comunes y control de visitas.",
      "Autenticación con NextAuth, base de datos con Prisma y gráficas con Recharts.",
      "Interfaz con Tailwind y shadcn/ui, pensada primero para móvil."
    ],
    stack: ["Next.js", "Prisma", "NextAuth", "Tailwind"],
    logos: ["nextdotjs", "typescript", "prisma", "sqlite", "tailwindcss"]
  },
  {
    slug: "finanzas-pareja",
    repo: "finanzas-pareja",
    kind: "personal",
    title: "Finanzas en pareja",
    course: "Proyecto personal",
    tagline: "Panel de gastos, ingresos, deudas, inversión y ahorro, con tasas de Venezuela en tiempo real.",
    description:
      "Aplicación que uso en la vida real, publicada con datos de demostración. Funciona desde el teléfono, guarda todo en una base SQLite remota y los nombres de la pareja son editables desde Ajustes.",
    points: [
      "Bolsillos, deudas con compras en cuotas estilo Cashea, inversión y metas de ahorro.",
      "Tasas de cambio en vivo y conversión entre USD, USDT y bolívares.",
      "Nombres editables: renombrar a la pareja actualiza todo el panel.",
      "Fotos de facturas adjuntas y acceso con contraseña compartida."
    ],
    stack: ["Node.js", "libSQL", "Vercel"],
    logos: ["nodedotjs", "sqlite", "vercel"]
  }
];

window.SKILL_GROUPS = [
  {
    id: "ia",
    label: "Desarrollo con IA",
    icon: "robot",
    blurb: "Mi forma de trabajar: Claude Code como herramienta principal, con revisión y pruebas de mi parte.",
    skills: [
      { name: "Claude Code", note: "Flujo diario de desarrollo, de la idea al repositorio publicado.", ev: ["os-sim-pro", "proyecto-final-felix-arocha", "portafolio-demos"] },
      { name: "Prompts avanzados", note: "Especificaciones claras, subagentes y verificación de resultados.", ev: ["simulador-datastream", "echonotes"] },
      { name: "POO y múltiples lenguajes", note: "Python, TypeScript, Java, Go y Node.js según lo pida el problema.", ev: ["simulador-so-movil", "proyecto-final-felix-arocha", "os-sim-pro"] },
      { name: "Integración de IA en productos", note: "Asistente en el aula virtual y reportes con modelos de NVIDIA.", ev: ["proyecto-final-felix-arocha", "simulador-datastream"] }
    ]
  },
  {
    id: "datos",
    label: "Datos y ETL",
    icon: "database",
    blurb: "Mover, guardar y consultar datos sin perderlos por el camino.",
    skills: [
      { name: "Conectores ETL", note: "Sincronización de datos empresariales entre sistemas.", ev: [] },
      { name: "SQL", note: "PostgreSQL, SQLite y migraciones con Prisma.", ev: ["proyecto-final-felix-arocha", "residencial-las-palmas", "finanzas-pareja"] },
      { name: "NoSQL", note: "MongoDB junto a bases relacionales en un mismo sistema.", ev: ["proyecto-final-felix-arocha"] },
      { name: "Bases de datos vectoriales", note: "Experiencia en el trabajo; sin repositorio público.", ev: [] }
    ]
  },
  {
    id: "retail",
    label: "Retail y ERPs",
    icon: "briefcase",
    blurb: "Experiencia en el trabajo, por eso no hay código público de esta parte.",
    skills: [
      { name: "Integración con POS", note: "Control y conexión de software de punto de venta.", ev: [] },
      { name: "ERPs: Odoo, Profit y KLK", note: "Integración directa con sistemas empresariales.", ev: [] },
      { name: "Catman y predicción", note: "Análisis y predicción de demanda por categoría de producto.", ev: [] }
    ]
  },
  {
    id: "auto",
    label: "Automatización y QA",
    icon: "gear-six",
    blurb: "Que las cosas se avisen solas y que lo publicado funcione.",
    skills: [
      { name: "Telegram bots", note: "Alertas en tiempo real e interacción con sistemas centrales.", ev: [] },
      { name: "QA y pruebas", note: "Pruebas automáticas con pytest y Vitest, y revisión manual.", ev: ["os-sim-pro", "simulador-datastream"] },
      { name: "Git y GitHub", note: "Historial ordenado, ramas y repositorios públicos y privados.", ev: ["proyecto-final-felix-arocha", "os-sim-pro", "portafolio-demos"] },
      { name: "Docker y despliegue", note: "Contenedores con Compose y publicaciones en Vercel.", ev: ["proyecto-final-felix-arocha", "wordpress-docker-redis", "ivonny-swim"] }
    ]
  }
];
