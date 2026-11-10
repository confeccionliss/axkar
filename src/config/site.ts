// ──────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DEL SITIO OFICIAL Y LINK IN BIO - AXKARL REBORN
// ──────────────────────────────────────────────────────────────────────

export interface LinkItem {
  id: string;
  svgPath: string;
  label: string;
  sublabel: string;
  href: string;
  color: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Axkarl Reborn",
  publisher: "Axkarl Reborn",
  creator: "Axkarl Reborn",
  author: {
    name: "Axkarl Reborn",
    url: "https://www.axkar.com",
  },
  /** URL pública canónica donde se despliega este sitio */
  url: "https://www.axkar.com",
  pageUrl: "https://www.axkar.com",
  twitterHandle: "@iamaxkarl",
  contactEmail: "contacto@axkar.com",
  locale: "es_ES",
  title: "Axkarl Reborn | Redes Sociales y Sitio Oficial",
  description:
    "Espacio oficial de Axkarl Reborn. Conéctate y sígueme en mis redes sociales verificadas para estar al día con mis proyectos y novedades.",
  keywords:
    "Axkarl Reborn, @iamaxkarl, axkar.reborn, ax_karl, its.axkarl, redes sociales oficiales Axkarl Reborn, Twitter Axkarl, Facebook Axkarl, Telegram Axkarl, WhatsApp Axkarl, TikTok Axkarl, perfil oficial, creador digital, tecnología",
  profile: {
    avatarSrc: "/images/perfil.jpg",
    avatarAlt: "Foto de perfil oficial de Axkarl Reborn",
    coverSrc: "/images/portada.jpg",
    coverAlt: "Foto de portada oficial de Axkarl Reborn",
    ariaLabel: "Perfil oficial y redes sociales de Axkarl Reborn",
    badgeText: "Perfil Oficial Verificado",
    role: "Creador Digital & Desarrollador",
    bio: "¡Bienvenido a mi espacio oficial! Te invito a seguirme y conectar en mis redes sociales para estar al día con mis proyectos y novedades.",
    aboutShort:
      "Canal de comunicación directo y oficial de Axkarl Reborn. Aquí encontrarás acceso inmediato y seguro a todas mis plataformas digitales comunitarias.",
  },
  legal: {
    disclaimer:
      "Este sitio web es el portal personal e independiente de Axkarl Reborn. No está afiliado, patrocinado, respaldado ni administrado por Meta Platforms, Inc. (Facebook, Instagram, WhatsApp), Telegram FZ-LLC, X Corp., o ByteDance Ltd. Todas las marcas registradas y logotipos pertenecen a sus respectivos propietarios.",
    copyright: `© ${new Date().getFullYear()} Axkarl Reborn. Todos los derechos reservados.`,
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
      { label: "Aviso Legal", href: "/aviso-legal" },
    ] as LegalLink[],
  },
};

export const socialLinks: LinkItem[] = [
  {
    id: "telegram",
    svgPath:
      "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
    label: "Telegram",
    sublabel: "@ax_karl",
    href: "https://t.me/ax_karl",
    color: "#229ED9",
  },
  {
    id: "tiktok",
    svgPath:
      "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    label: "TikTok",
    sublabel: "@its.axkarl",
    href: "https://www.tiktok.com/@its.axkarl",
    color: "#010101",
  },
  {
    id: "twitter",
    svgPath:
      "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.847L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117Z",
    label: "Twitter (X)",
    sublabel: "@iamaxkarl",
    href: "https://x.com/iamaxkarl",
    color: "#010101",
  },
  {
    id: "facebook",
    svgPath:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    label: "Facebook",
    sublabel: "@axkar.reborn",
    href: "https://facebook.com/axkar.reborn",
    color: "#1877F2",
  },
  {
    id: "whatsapp",
    svgPath:
      "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
    label: "WhatsApp",
    sublabel: "Comunidad Oficial",
    href: "https://chat.whatsapp.com/DVdS5lbfY805uxvWdo4jYs",
    color: "#25D366",
  },
];
