import type { Metadata } from "next";
import { LinkInBio } from "@/components/LinkInBio";
import { siteConfig, socialLinks } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  alternates: {
    canonical: siteConfig.pageUrl,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.pageUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        secureUrl: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${siteConfig.name} | Redes Sociales Oficiales`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | Redes Sociales Oficiales`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "es",
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/og-image.jpg`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        alternateName: ["iamaxkarl", "axkarl"],
        url: siteConfig.url,
        image: `${siteConfig.url}/images/perfil.jpg`,
        description: siteConfig.description,
        jobTitle: siteConfig.profile.role,
        sameAs: socialLinks.map((link) => link.href),
        knowsAbout: [
          "Tecnología",
          "Desarrollo Web",
          "Redes Sociales",
          "Creación de Contenido Digital",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contactEmail,
          contactType: "general",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteConfig.url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LinkInBio />
    </>
  );
}
