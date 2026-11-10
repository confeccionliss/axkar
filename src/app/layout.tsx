import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/perfil.jpg`,
        secureUrl: `${siteConfig.url}/images/perfil.jpg`,
        width: 1024,
        height: 1536,
        type: "image/jpeg",
        alt: `${siteConfig.name} | Foto de Perfil Oficial`,
      },
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        secureUrl: `${siteConfig.url}/images/og-image.jpg`,
        width: 1024,
        height: 1536,
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
        url: `${siteConfig.url}/images/perfil.jpg`,
        alt: `${siteConfig.name} | Foto de Perfil Oficial`,
      },
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1024,
        height: 1536,
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

export const viewport: Viewport = {
  themeColor: "#4c55b6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${notoSerif.variable} light`}
      style={{ colorScheme: "light" }}
    >
      <body className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip antialiased">
        <main
          id="main-content"
          className="w-full max-w-full flex-grow overflow-x-clip"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
