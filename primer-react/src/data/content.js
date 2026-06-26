export const siteConfig = {
  name: 'Ozkr',
  title: 'ÓSCAR ALEJANDRE',
  subtitle: 'PRECISIÓN EN TINTA Y CÓDIGO',
  description: 'Un diálogo entre la piel humana y la arquitectura digital. Conceptos minimalistas renderizados con precisión quirúrgica.',
};

export const navigation = {
  desktop: [
    { href: '#inicio', label: 'INICIO', isActive: true },
    { href: '#galeria', label: 'GALERÍA', isActive: false },
    { href: '#testimonios', label: 'TESTIMONIOS', isActive: false },
    { href: '#contacto', label: 'CONTACTO', isActive: false },
    { href: '#cv', label: 'CV', isActive: false },
  ],
  mobile: [
    { href: '#inicio', label: 'INICIO' },
    { href: '#galeria', label: 'GALERÍA' },
    { href: '#testimonios', label: 'TESTIMONIOS' },
    { href: '#contacto', label: 'CONTACTO' },
    { href: '#cv', label: 'CV' },
  ],
  bottomNav: [
    { href: '#inicio', label: 'INICIO', icon: 'home' },
    { href: '#galeria', label: 'GALERÍA', icon: 'photo_library' },
    { href: '#testimonios', label: 'RESEÑAS', icon: 'star' },
    { href: '#contacto', label: 'CONTACTO', icon: 'alternate_email' },
    { href: '#cv', label: 'CV', icon: 'description' },
  ],
};

export const heroContent = {
  badge: 'ESTÉTICA CURADA',
  titleLine1: 'ÓSCAR ALEJANDRE.',
  titleLine2: 'PRECISIÓN EN TINTA Y CÓDIGO.',
  subtitle: 'Un diálogo entre la piel humana y la arquitectura digital. Conceptos minimalistas renderizados con precisión quirúrgica.',
  ctaPrimary: 'VER PORTAFOLIO',
  ctaSecondary: 'CONTÁCTAME',
  scrollText: 'Desplazar',
};

export const galleryContent = {
  title: 'GALERÍA',
  subtitle: 'Trabajos Recientes / 2026',
  tags: ['BLACKWORK', 'GEOMÉTRICO', 'MINIMAL', 'ORGÁNICO'],
  items: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop',
      label: 'SERIE 01',
      likes: 42,
      year: '2026',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=600&fit=crop',
      label: 'MANDALA',
      likes: 89,
      year: '2025',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1542727313-4f3e99aa3778?w=600&h=600&fit=crop',
      label: 'LINEAS',
      likes: 56,
      year: '2026',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1590246814883-57c511e76823?w=600&h=600&fit=crop',
      label: 'ORGÁNICO',
      likes: 73,
      year: '2025',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1612601137134-d798b19663e9?w=600&h=600&fit=crop',
      label: 'GEOMÉTRICO',
      likes: 128,
      year: '2026',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1552374196-c802891f2bdf?w=600&h=600&fit=crop',
      label: 'BLACKWORK',
      likes: 94,
      year: '2025',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1596803244618-8d5c4c0dd987?w=600&h=600&fit=crop',
      label: 'MINIMAL',
      likes: 67,
      year: '2026',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1590246814883-57c511e76823?w=600&h=600&fit=crop',
      label: 'DOTWORK',
      likes: 81,
      year: '2025',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=600&fit=crop',
      label: 'ABSTRACT',
      likes: 55,
      year: '2026',
    },
  ],
};

export const testimonialsContent = {
  title: 'TESTIMONIOS',
  subtitle: 'Lo que dicen mis clientes',
  bio: {
    title: 'MI FILOSOFÍA',
    text: 'Cada diseño nace de un diálogo. No creo en el tatuaje como simple adorno, sino como una extensión de quien lo porta. Mi estudio es un laboratorio donde la geometría, el blackwork y el minimalismo se fusionan para crear piezas que trascienden la moda pasajera.\n\nFormado en diseño de interfaces y dirección creativa, aplico los mismos principios de precisión y composición que uso en el código a cada trazo sobre la piel. Para mí, tatuar es programar sobre el lienzo más honesto que existe.',
  },
  items: [
    {
      id: 1,
      name: 'María G.',
      location: 'CDMX',
      text: 'Ozkr transformó mi idea en una obra de arte. La precisión de sus líneas y la atención al detalle superaron mis expectativas. Un verdadero artista.',
      rating: 5,
      tattoo: 'Blackwork - Brazo completo',
    },
    {
      id: 2,
      name: 'Carlos R.',
      location: 'Monterrey',
      text: 'Viajé expresamente para que Ozkr me tatuara. Vale cada kilómetro. Su estudio es un espacio de creación único y el resultado habla por sí solo.',
      rating: 5,
      tattoo: 'Geométrico - Pecho',
    },
    {
      id: 3,
      name: 'Ana S.',
      location: 'Guadalajara',
      text: 'Mi tercer tatuaje con Ozkr y no será el último. Ha evolucionado su estilo manteniendo esa esencia oscura y precisa que lo caracteriza.',
      rating: 5,
      tattoo: 'Minimal - Antebrazo',
    },
    {
      id: 4,
      name: 'Diego M.',
      location: 'Morelia',
      text: 'La experiencia completa es increíble. Desde la consulta inicial hasta el resultado final, todo es profesional. Su blackwork es simplemente impecable.',
      rating: 5,
      tattoo: 'Blackwork - Pantorrilla',
    },
  ],
};

export const ctaContent = {
  title: '¿LISTO PARA TU PRÓXIMO TATUAJE?',
  subtitle: 'Acepto proyectos selectos para 2026. Cada pieza es única y comienza con una conversación.',
  features: [
    'Consulta inicial sin costo',
    'Diseño personalizado',
    'Sesiones en CDMX y Morelia',
  ],
  cta: 'RESERVA TU CITA',
};

export const tattoosContent = {
  title: 'TRABAJOS DE TATTOO',
  subtitle: 'Selección Curada / 2026',
  tags: ['MINIMAL', 'GEOMÉTRICO'],
  items: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=800&fit=crop',
      label: 'SERIE 01',
      span: 'col-span-12 md:col-span-4',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=600&fit=crop',
      label: null,
      span: 'md:col-span-4',
      aspect: 'aspect-square',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1542727313-4f3e99aa3778?w=600&h=600&fit=crop',
      label: null,
      span: 'md:col-span-4',
      aspect: 'aspect-square',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1590246814883-57c511e76823?w=1200&h=600&fit=crop',
      label: 'TATTOO EXPERIMENTAL',
      span: 'col-span-12',
      aspect: 'h-64 md:h-80',
    },
  ],
};

export const cvContent = {
  profile: {
    title: 'PERFIL',
    description: 'Creador multidisciplinario basado en CDMX. Enfocado en la intersección de la narrativa visual y la ejecución técnica. Especializado en blackwork de alto contraste y interfaces digitales modernas.',
  },
  skills: [
    { name: 'BLACKWORK', level: 'VETERANO' },
    { name: 'DISEÑO DE INTERFACES', level: 'SENIOR' },
    { name: 'DIRECCIÓN CREATIVA', level: 'DIRECTOR' },
  ],
  experience: [
    {
      company: 'Ozkr STUDIOS',
      period: '2020 — PRESENTE',
      description: 'Lead Artist y Director Creativo. Definió el lenguaje estético del estudio, fusionando estéticas oscuras industriales con diseños minimalistas de tattoo.',
    },
    {
      company: 'OBSIDIAN LABS',
      period: '2017 — 2020',
      description: 'Senior UI/UX Designer. Desarrolló soluciones digitales de alta gama para marcas de lujo, enfocándose en layouts brutalistas y motion design.',
    },
    {
      company: 'COLECTIVO FREELANCE',
      period: '2015 — 2017',
      description: 'Comunicación visual para diversos proyectos artísticos y sellos discográficos independientes en Europa y Latinoamérica.',
    },
  ],
};

export const blogContent = {
  title: 'EDITORIAL',
  articles: [
    {
      category: 'ENSAYOS / 01',
      title: 'LA ÉTICA DE LA PERMANENCIA',
      excerpt: 'Explorando las implicaciones filosóficas de marcar el cuerpo en una era de transitoriedad digital y tendencias efímeras.',
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&h=400&fit=crop',
    },
    {
      category: 'DISEÑO / 04',
      title: 'BRUTALISMO EN INTERFACES',
      excerpt: 'Cómo la honestidad estructural cruda está reclamando la web de la monotonía pulida de los sistemas de diseño corporativos.',
      image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop',
    },
    {
      category: 'PROCESO / 12',
      title: 'HERRAMIENTAS PARA PRECISIÓN',
      excerpt: 'Una inmersión profunda en el hardware y software utilizado para cerrar la brecha entre bocetos digitales y la piel.',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop',
    },
  ],
};

export const contactContent = {
  title: 'COLABORAR',
  subtitle: 'Aceptando comisiones selectas para tattoo y consultoría de diseño para Q4 2026.',
  form: {
    nameLabel: 'NOMBRE',
    emailLabel: 'CORREO',
    messageLabel: 'MENSAJE / DETALLES DEL PROYECTO',
    submitText: 'ENVIAR CONSULTA',
  },
};

export const footerContent = {
  socials: [
    { name: 'INSTAGRAM', url: '#' },
    { name: 'GITHUB', url: '#' },
    { name: 'LINKEDIN', url: '#' },
    { name: 'TWITTER', url: '#' },
  ],
  copyright: '© 2026 Ozkr.MX — CREADO CON PRECISIÓN',
};

export const preloaderContent = {
  text: 'Ozkr',
};

export const cvPageContent = {
  header: {
    name: 'OSCAR MANUEL LOZANO ALEJANDRE',
    title: 'Desarrollador Frontend / UI Developer',
    location: 'Morelia, Michoacán, México',
  },
  contact: {
    email: 'tu@email.com',
    phone: '+52 XXX XXX XXXX',
    links: {
      linkedin: 'https://www.linkedin.com/in/oscar-alejandre-1a1703318/',
      github: 'https://github.com/OzkrDev',
      instagram: 'https://www.instagram.com/ozkr.alejandre?igsh=eTRpOHRhdThwYmR5',
      portfolio: 'tu-sitio.com',
    },
  },
  profile: {
    title: 'PERFIL PROFESIONAL',
    description: 'Desarrollador Frontend con enfoque en UI y experiencia en la construcción de interfaces web funcionales, visualmente estructuradas y orientadas a la experiencia del usuario. Cuento con más de 3 años de experiencia participando en el desarrollo de sistemas institucionales, donde he trabajado en la implementación de interfaces, optimización de flujos y traducción de requerimientos de negocio en soluciones digitales. Complemento mi perfil técnico con conocimientos en diseño gráfico y branding, lo que me permite desarrollar interfaces no solo funcionales, sino también visualmente coherentes y orientadas a usuario.',
  },
  experience: [
    {
      company: 'Sistema de Gestión de Becas (SGB)',
      institution: 'Institutional Development',
      period: 'MAR 2023 — PRESENTE',
      role: 'UI Development Lead',
      description: 'Desarrollo y optimización de módulos administrativos para plataformas institucionales de alto tráfico. Liderazgo en la implementación de sistemas de Login, Resolutivos y Admin UI.',
    },
    {
      company: 'Moysa Construction Florida LLC',
      institution: 'Corporate Systems',
      period: 'ENE 2021 — FEB 2022',
      role: 'Software Developer',
      description: 'Construcción de herramientas de gestión de proyectos internos y interfaces para clientes del sector construcción. Sistemas de tracking de proyectos y gestión de inventario.',
    },
  ],
  projects: [
    {
      title: 'SGB Universidad',
      description: 'Lead UI Developer para los módulos de infraestructura de Resolutivos y Login. Sistemas de gestión de becas con alta concurrencia.',
    },
    {
      title: 'Moysa Dashboard',
      description: 'Sistemas internos personalizados para gestión arquitectónica y de construcción. Interfaces de seguimiento de proyectos.',
    },
    {
      title: 'Custom Components Library',
      description: 'Biblioteca de componentes reutilizables, accesibles y de alto rendimiento para entornos React y Tailwind.',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      category: 'Backend',
      items: ['PHP'],
    },
    {
      category: 'Bases de Datos',
      items: ['MySQL'],
    },
    {
      category: 'Herramientas',
      items: ['Git', 'APIs REST'],
    },
    {
      category: 'Diseño',
      items: ['Adobe Photoshop', 'Adobe Illustrator'],
    },
  ],
  keySkills: [
    'Interpretación de requerimientos de negocio',
    'Diseño de interfaces desde cero',
    'Atención al detalle visual',
    'Resolución de problemas técnicos',
    'Enfoque en experiencia de usuario',
    'Comunicación con áreas no técnicas',
  ],
  education: {
    title: 'Ingeniería en Tecnologías de la Información y Comunicación',
    institutions: [
      'Universidad Tecnológica de Morelia (UTM)',
      'Instituto Tecnológico de Morelia (ITM)',
    ],
    period: '20XX',
  },
  extras: [
    { label: 'Inglés', value: 'Lectura técnica básica' },
    { label: 'Experiencia adicional', value: 'Diseño gráfico, branding y producción visual' },
    { label: 'Interés', value: 'Desarrollo frontend enfocado en UI y experiencia digital' },
  ],
};
