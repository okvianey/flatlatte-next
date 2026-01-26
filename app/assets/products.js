export const products = [
  {
    id: "catalogo-whatsapp",
    name: "Catálogo de Ventas por WhatsApp",
    emoji: "📱",
    price: "Desde $1,900 MXN",
    basePrice: 1900,
    tagline: 'Listo para empezar a vender en 48 horas',
    reassurance: [
      'Pago único',
      'Ideal para empezar rápido'
    ],
    description:
      "La forma más simple de mostrar tus productos y vender directo por WhatsApp.",
    features: [
      "Hasta 2 secciones",
      "Catálogo con hasta 10 productos",
      "Botón directo a WhatsApp",
      "Dominio gratuito (tunegocio.flatlatte.com)",
      // "Entrega en 48 horas",
      "2 revisiones incluidas",
      // "Video tutorial"
    ],
    cta: "Quiero vender por WhatsApp",
    ejemplo: "https://bocanada.flatlatte.com/",
    type: 'whatsapp',
    highlight: true
  },
  {
    id: "web-google-negocio",
    name: "Página Web Profesional + Google",
    emoji: "🌐",
    price: "Desde $4,500 MXN",
    basePrice: 4500,
    tagline: 'Tu negocio visible y confiable todos los días',
    reassurance: [
      'Pago único',
      'Presencia profesional'
    ],
    description:
      "Una página profesional para que tu negocio se vea confiable, aparezca en Google y reciba clientes todos los días.",
    features: [
      "Hasta 5 secciones",
      "Perfil de Google optimizado",
      "Conexión con WhatsApp o reservas",
      "Hosting + dominio por 1 año**",
      "3 revisiones incluidas"
    ],
    cta: "Quiero presencia profesional",
    ejemplo: "https://www.spanishwithmonse.com/",
    type: 'web',
    highlight: false
  }
];

export const extras = [
  // 🧩 Extras rápidos (impulsivos)
  {
    id: "copy",
    title: "Escribimos los textos por ti",
    description:
      "Redactamos los textos de tu página para explicar claramente qué vendes y cómo contactarte.",
    price: 1200,
    level: "quick",
    availableFor: ["web", "whatsapp"],
  },
  {
    id: "optimizacion-seo",
    title: "Tu negocio aparece en Google",
    description:
      "Configuramos tu perfil para que más personas te encuentren cuando buscan tu servicio.",
    price: 1200,
    level: "quick",
    availableFor: ["whatsapp"],
  },
  {
    id: "orders",
    title: "Recibir pedidos fácilmente",
    description:
      "Recibe pedidos en tu WhatsApp, de forma ordenada y fácil para ti y tus clientes.",
    price: 1200,
    level: "quick",
    availableFor: ["web"],
  },
  {
    id: "blog",
    title: "Blog inicial",
    description: "Tu sitio listo para crecer con contenido.",
    price: 1200,
    level: "quick",
    availableFor: ["web"],
  },

  // ⚙️ Extra estructural
  {
    id: "panel",
    title: "Panel de control fácil",
    description: "Haz cambios tú mismo sin pagar cada ajuste.",
    price: 2400,
    level: "structural",
    availableFor: ["web", "whatsapp"],
  },
  {
    id: "domain",
    icon: "bi-pencil-square",
    title: "Dominio (tunegocio.com) + Hospedaje",
    description: "Tu marca con nombre profesional.",
    price: 1550,
    availableFor: ["whatsapp"],
  },
  {
    id: "agenda",
    title: "Agenda que se llena sola",
    description:
      "Configuras tus horarios una vez y las reservas se acomodan automáticamente sin ajustes manuales.",
    price: 2000,
    availableFor: ["web"],
  },
];


  export const mantenimientoPlans = [
    {
      title: "Enlace Flatlatte",
      price: 400,
      features: [
        "Enlace activo (tumarca.flatlatte.com)",
        "Mantenimiento técnico",
        "Respaldo de seguridad",
      ]
    },
    {
      title: "Enlace personalizado",
      price: 1600,
      features: [
        "Dominio (tunegocio.com) y hospedaje",
        "Mantenimiento técnico",
        "Respaldo de seguridad"
      ]
    }
  ];

export const bundles = [
  {
    id: 'autonomo',
    title: 'Pack Negocio Profesional',
    subtitle: 'Todo lo que la mayoría de negocios agrega después',
    appliesTo: 'web',
    extras: ['panel', 'copy', 'orders'],
    originalPrice: 4800,
    bundlePrice: 3200,
    highlight: true
  },
  {
    id: 'mas-alcance',
    title: 'Más Alcance',
    subtitle: 'Optimizado para que más personas te encuentren en Google',
    appliesTo: 'whatsapp',
    extras: ['copy', 'optimizacion-seo', 'domain'],
    originalPrice: 3950,
    bundlePrice: 2400,
    highlight: true
  },

];

