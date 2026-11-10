// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { siteConfig, socialLinks } from "@/config/site";

export const alt = "Axkarl Reborn | Redes Sociales Oficiales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function LinksOGImage() {
  const ICON_SIZE = 48;
  const ICON_GAP = 24;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0d1b3e",
        backgroundImage:
          "radial-gradient(circle at 20% 30%, #1e3a78 0%, #0d1b3e 70%)",
      }}
    >
      {/* Columna Izquierda: Perfil / Identidad */}
      <div
        style={{
          width: "48%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 40px",
          textAlign: "center",
        }}
      >
        {/* Avatar limpio con gradiente */}
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #4c55b6 0%, #8c95fb 100%)",
            boxShadow: "0 12px 40px rgba(76, 85, 182, 0.4)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: "#142550",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="64"
              height="64"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>

        <h1
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 8px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.name}
        </h1>

        <p
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.7)",
            margin: 0,
          }}
        >
          Redes Sociales Oficiales
        </p>
      </div>

      {/* Separador vertical */}
      <div
        style={{
          width: "2px",
          height: "60%",
          backgroundColor: "rgba(255, 255, 255, 0.12)",
        }}
      />

      {/* Columna Derecha: 5 Redes Sociales y URL */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: `${ICON_GAP}px`,
            flexWrap: "wrap",
            maxWidth: "460px",
          }}
        >
          {socialLinks.map((icon) => (
            <div
              key={icon.id}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffffff"
                width={ICON_SIZE}
                height={ICON_SIZE}
              >
                <path d={icon.svgPath} />
              </svg>
            </div>
          ))}
        </div>

        <p
          style={{
            color: "rgba(255, 255, 255, 0.75)",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginTop: "48px",
            marginBottom: 0,
          }}
        >
          {siteConfig.pageUrl.replace(/^https?:\/\/(www\.)?/, "")}
        </p>
      </div>
    </div>,
    { ...size }
  );
}
