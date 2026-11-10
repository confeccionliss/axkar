import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso Legal y Transparencia",
  description:
    "Aviso legal, titularidad del dominio, declaración de independencia y canales de contacto de Axkarl Reborn.",
  alternates: {
    canonical: `${siteConfig.url}/aviso-legal`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoLegalPage() {
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
          Aviso Legal y Transparencia
        </h1>
        <p className="text-xs text-slate-500 mb-6">
          Información regulatoria, contacto y cumplimiento de plataformas (Meta, Google, X, TikTok)
        </p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              1. Identificación del Titular del Dominio
            </h2>
            <p>
              En cumplimiento con los principios de transparencia y buenas prácticas digitales, se informa que el responsable y titular de este portal web ({siteConfig.url}) es:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Titular:</strong> {siteConfig.name}</li>
              <li><strong>Actividad:</strong> Presencia digital, divulgación y desarrollo de proyectos web.</li>
              <li><strong>Correo de contacto:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-indigo-600 underline font-medium"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li><strong>Canal en Twitter (X):</strong>{" "}
                <a
                  href="https://x.com/iamaxkarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 underline font-medium"
                >
                  {siteConfig.twitterHandle}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. Declaración de Independencia y Marcas Registradas
            </h2>
            <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 italic">
              {siteConfig.legal.disclaimer}
            </p>
            <p className="mt-3">
              Los logotipos de Facebook, WhatsApp, Telegram, Twitter/X y TikTok mostrados en este portal se utilizan exclusivamente con fines de referencia nominativa para permitir a los usuarios navegar hacia los perfiles oficiales correspondientes. Su inclusión no implica afiliación comercial, patrocinio, aval ni representación institucional.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Cumplimiento de Políticas de Plataformas (Meta Platform Terms)
            </h2>
            <p>
              Este sitio web se ha diseñado respetando rigurosamente las Normas Comunitarias y Condiciones de la Plataforma de Meta (Meta Platforms, Inc.), en particular la cláusula §4.a sobre acciones incentivadas y prevención de <em>engagement-bait</em>. No se condiciona el acceso a contenidos mediante suscripciones forzadas ni se emplean técnicas engañosas de captación de tráfico.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. Directrices E-E-A-T de Google
            </h2>
            <p>
              Para garantizar los estándares de Experiencia, Conocimiento, Autoridad y Confianza (E-E-A-T), este sitio declara explícitamente su autoría, proporciona canales de comunicación directa y ofrece enlaces directos y verificables a las plataformas públicas de {siteConfig.name}.
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

