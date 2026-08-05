const config = {
  // Información Corporativa Principal (Coincide exacto con Certificado de Cámara de Comercio)
  company: {
    name: "Constructora Ecoedif SAS",
    shortName: "ECOEDIF",
    legalName: "CONSTRUCTORA ECOEDIF S.A.S.",
    nit: "901148227-1",
    slogan: "Ingeniería, Edificación y Desarrollo Sostenible",
    tagline: "Firma colombiana especializada en obras civiles, remodelaciones de alta gama, proyectos comerciales e infraestructura bioclimática.",
    aboutShort: "Constructora Ecoedif SAS es una compañía dedicada al desarrollo integral de obras de edificación, diseño de espacios corporativos y consultoría en ingeniería sostenible en Colombia.",
    aboutFull: `Con sede principal en la ciudad de Medellín, **Constructora Ecoedif SAS** (NIT 901148227-1) es una empresa colombiana orientada a la planificación, diseño y ejecución de obras de infraestructura comercial, residencial e industrial.

Desde nuestra fundación, nos hemos distinguido por la aplicación de metodologías constructivas eficientes, el uso racional de recursos, estándares estrictos de seguridad industrial y el cumplimiento puntual de los cronogramas contractuales en cada uno de nuestros proyectos.`,
    foundedYear: "2018",
    logo: "logo.jpg"
  },

  // Contacto & Ubicación Principal
  contact: {
    phone: "+57 310 4670052",
    phoneClean: "573104670052",
    email: "constructoraecoedifsass470@gmail.com",
    address: "Carrera 63 # 49 A 31",
    city: "Medellín",
    state: "Antioquia",
    country: "Colombia",
    postalCode: "050035",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.079219358249!2d-75.58434!3d6.2539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f800000001%3A0x1!2sCra.%2063%20%2349a-31%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco",
    schedule: "Lunes a Viernes: 7:30 AM - 5:30 PM",
  },

  // Branding & Colores
  theme: {
    primary: "#0e4b75",     // Ocean Blue Corporativo
    primaryHover: "#0a3858",
    secondary: "#10b981",   // Emerald Green
    secondaryHover: "#059669",
    accent: "#34d399",
    darkBg: "#0B0F17",
    cardBg: "#111827",
  },

  // Redes Sociales Oficiales
  social: {
    facebook: "https://www.facebook.com/constructoraecoedif",
    instagram: "https://www.instagram.com/constructoraecoedif",
    linkedin: "https://www.linkedin.com/company/constructoraecoedif",
    whatsapp: "https://api.whatsapp.com/send?phone=573104670052&text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20constructivos."
  },

  // Servicios Corporativos
  services: [
    {
      id: "construccion",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0V7m0 4h4m-4 0H7m4-4h4M7 7h4"></path></svg>`,
      title: "Construcción de Obras Civiles",
      description: "Desarrollo y gestión técnica de edificaciones comerciales, industriales y proyectos de infraestructura civil con garantía estructural."
    },
    {
      id: "remodelaciones",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-6 8a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4zm-6 4a2 2 0 100-4 2 2 0 000 4zm-6 4a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"></path></svg>`,
      title: "Adecuaciones & Remodelaciones",
      description: "Modernización de instalaciones de oficinas, locales comerciales y sedes institucionales priorizando ergonomía y acabados de alta durabilidad."
    },
    {
      id: "arquitectura",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>`,
      title: "Diseño & Planificación Técnica",
      description: "Elaboración de planos arquitectónicos, renders 3D, cálculos estructurales y especificaciones técnicas detalladas para presupuestos optimizados."
    },
    {
      id: "consultoria",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
      title: "Gestión & Interventoría de Obra",
      description: "Supervisión técnica permanente, control administrativo y control de calidad en obra para asegurar el cumplimiento normativo."
    }
  ],

  // Portafolio de Obras
  gallery: [
    {
      title: "Sede Empresarial Bioclimática",
      category: "Infraestructura Comercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Complejo Residencial de Altura",
      category: "Vivienda Urbana",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modernización de Oficinas Administrativas",
      category: "Arquitectura Interior",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Estructuras & Acabados Industriales",
      category: "Ingeniería de Obras",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Cifras Corporativas Generales
  stats: [
    { label: "Experiencia en el Sector", value: "8+ Años" },
    { label: "Proyectos Realizados", value: "100+" },
    { label: "Cumplimiento Técnico", value: "100%" },
    { label: "Calidad Certificada", value: "ISO Standards" }
  ]
};
