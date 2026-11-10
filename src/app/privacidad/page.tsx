import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad oficial y protección de datos para el sitio web y perfiles de Axkarl Reborn.",
  alternates: {
    canonical: `${siteConfig.url}/privacidad`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-xs text-slate-500 mb-6">
          Última actualización: Noviembre 2026
        </p>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El presente sitio web ({siteConfig.url}) es un portal personal e independiente gestionado por{" "}
              <strong>{siteConfig.name}</strong>. Para cualquier duda o ejercicio de derechos respecto a privacidad, puedes contactar directamente a través del correo electrónico:{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-indigo-600 underline font-medium"
              >
                {siteConfig.contactEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              2. Datos Recopilados y Finalidad
            </h2>
            <p>
              Este sitio web opera como un directorio estático de enlaces oficiales (link in bio).{" "}
              <strong>No recopilamos, no almacenamos ni comercializamos datos personales</strong> de los visitantes de forma directa. No existen formularios de registro, ni pasarelas de pago, ni capturas ocultas de información.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              3. Cookies y Almacenamiento Local
            </h2>
            <p>
              Este sitio web no utiliza cookies publicitarias, cookies de seguimiento entre sitios (cross-site tracking) ni píxeles invasivos de telemetría. La navegación en esta página es puramente informativa y estática.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              4. Enlaces a Plataformas de Terceros
            </h2>
            <p>
              Nuestra página incluye enlaces salientes hacia servicios de redes sociales y mensajería gestionados por terceros (incluyendo Twitter/X, Meta/Facebook, WhatsApp, Telegram y TikTok). Al hacer clic en dichos enlaces, el usuario queda sujeto a las políticas de privacidad y condiciones de servicio particulares de cada entidad:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Meta Platforms, Inc. (Facebook, WhatsApp)</li>
              <li>Telegram FZ-LLC</li>
              <li>X Corp.</li>
              <li>ByteDance Ltd. (TikTok)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              5. Seguridad y Compromiso Anti-Phishing
            </h2>
            <p>
              {siteConfig.name} se compromete a mantener un entorno seguro y transparente. Este dominio no realiza redireccionamientos maliciosos, técnicas de cloaking, suplantación de identidad ni solicitud de credenciales de acceso.
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

