import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Términos y condiciones de uso del portal oficial y enlaces comunitarios de Axkarl Reborn.",
  alternates: {
    canonical: `${siteConfig.url}/terminos`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosPage() {
  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, #fbf8fe, #efecf6)",
      }}
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 sm:p-10 shadow-sm border border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          ← Volver al perfil oficial
        </Link>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Términos de Servicio
        </h1>
        <p className="text-xs text-slate-500 mb-6">
          Última actualización: Noviembre 2026
        </p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              1. Aceptación de los Términos
            </h2>
            <p>
              El acceso y uso de este sitio web ({siteConfig.url}) implica la aceptación plena de los presentes Términos de Servicio. Si no estás de acuerdo con alguna disposición, te recomendamos abstenerte de utilizar esta página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. Objeto del Sitio Web
            </h2>
            <p>
              Este sitio web tiene carácter estrictamente informativo y sirve de índice verificado para acceder a los canales, proyectos y perfiles comunitarios legítimos de <strong>{siteConfig.name}</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Uso Permitido y Buenas Prácticas
            </h2>
            <p>
              Queda expresamente prohibido el uso de este portal o de sus recursos para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Realizar actividades fraudulentas, suplantación de identidad o ataques de denegación de servicio.</li>
              <li>Scraping automatizado malicioso o alteración de la infraestructura.</li>
              <li>Vincular este dominio en campañas de spam o esquemas no autorizados en redes sociales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. Propiedad Intelectual
            </h2>
            <p>
              El diseño, textos, gráficos, logotipos identificativos propios y código fuente de este sitio web son propiedad de {siteConfig.name} o se utilizan bajo licencias autorizadas. Las marcas comerciales, isotipos y nombres de plataformas externas (Facebook, WhatsApp, Telegram, X, TikTok) pertenecen a sus titulares respectivos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              5. Limitación de Responsabilidad
            </h2>
            <p>
              {siteConfig.name} no se responsabiliza por las caídas temporales de servicio de las redes sociales externas enlazadas, ni por el contenido que terceros puedan publicar dentro de dichas plataformas comunitarias.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>{siteConfig.legal.copyright}</span>
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

