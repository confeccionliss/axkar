// SERVER COMPONENT — sin "use client", sin JavaScript en el navegador
// Los links son <a> puros: el navegador maneja el deep-link nativo.

import Image from "next/image";
import Link from "next/link";
import { ShareButton } from "@/components/ShareButton";
import { siteConfig, socialLinks } from "@/config/site";

export function LinkInBio() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "linear-gradient(to bottom, #fbf8fe, #efecf6)",
      }}
    >
      {/* Overrides and Responsive styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Default mobile styling */
            #links-main {
              width: 100%;
              max-width: 480px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 1.25rem 1.25rem 5rem !important;
              box-sizing: border-box;
              margin: 0 auto !important;
              background-color: transparent !important;
              border: none !important;
              box-shadow: none !important;
              position: relative !important;
            }

            .desktop-dashed-border {
              display: none;
            }

            /* Tablet/Desktop card container */
            @media (min-width: 540px) {
              #links-main {
                background-color: #ffffff !important;
                border: 1px solid rgba(20, 48, 103, 0.35) !important;
                border-radius: 1rem !important;
                box-shadow: 0 0 25px 6px rgba(20, 48, 103, 0.15), 0 0 10px 2px rgba(20, 48, 103, 0.1) !important;
                padding: 2rem 2.5rem !important;
                margin-top: 0.5rem !important;
                margin-bottom: 5rem !important;
                position: relative !important;
              }
              .desktop-dashed-border {
                display: block !important;
              }
            }
          `,
        }}
      />

      {/* Espaciador superior (solo en desktop/tablet) */}
      <div aria-hidden="true" className="hidden sm:block sm:h-[4.25rem]" />

      <div id="links-main">
        {/* Marco de bordes punteados (solo en Desktop) */}
        <div className="desktop-dashed-border border-primary pointer-events-none absolute inset-3 z-20 rounded-[12px] border-[2px] border-dashed" />

        {/* Facebook-style Cover Banner */}
        <div
          className="animate-fade-in-up relative w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm"
          style={{
            height: "9.5rem",
            minHeight: "9.5rem",
            width: "100%",
          }}
        >
          <Image
            src={siteConfig.profile.coverSrc}
            alt={siteConfig.profile.coverAlt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 480px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        {/* Profile Section */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "2rem",
            width: "100%",
          }}
          aria-label={siteConfig.profile.ariaLabel}
        >
          {/* Avatar - Facebook style, overlapping the cover photo */}
          <div
            className="animate-fade-in-up"
            style={{
              width: "7.5rem",
              height: "7.5rem",
              borderRadius: "50%",
              padding: "4px",
              background: "#ffffff",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              marginTop: "-3.75rem",
              marginBottom: "1rem",
              position: "relative",
              zIndex: 10,
              flexShrink: 0,
              animationDelay: "100ms",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#f1f5f9",
                position: "relative",
              }}
            >
              <Image
                src={siteConfig.profile.avatarSrc}
                alt={siteConfig.profile.avatarAlt}
                width={150}
                height={150}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              marginBottom: "0.5rem",
              animationDelay: "200ms",
              position: "relative",
              zIndex: 30,
            }}
          >
            <h1
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#32323b",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {siteConfig.name}
            </h1>
            <ShareButton />
          </div>

          <p
            className="animate-fade-in-up"
            style={{
              color: "#5f5e68",
              fontWeight: 500,
              lineHeight: 1.5,
              maxWidth: "20rem",
              margin: 0,
              fontSize: "0.9rem",
              animationDelay: "250ms",
            }}
          >
            {siteConfig.profile.bio}
          </p>
        </section>

        {/* Social Links */}
        <section
          style={{ width: "100%" }}
          aria-labelledby="section-social-heading"
        >
          <h2 id="section-social-heading" className="sr-only">
            Canales y Redes Sociales
          </h2>
          <nav
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
            aria-label="Canales y redes sociales"
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                id={`link-${link.id}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} — ${link.sublabel}`}
                className="animate-fade-in-up transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  background: "#ffffff",
                  borderRadius: "3rem",
                  boxShadow:
                    "0 0 25px 6px rgba(20,48,103,0.12),0 0 10px 2px rgba(20,48,103,0.08)",
                  border: "1px solid rgba(20,48,103,0.18)",
                  textDecoration: "none",
                  color: "inherit",
                  boxSizing: "border-box",
                  animationDelay: `${index * 50 + 300}ms`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                  }}
                >
                  {/* Icon bubble */}
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      minWidth: "2.75rem",
                      borderRadius: "50%",
                      background: "#f5f2fb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        fill: link.color,
                        flexShrink: 0,
                      }}
                    >
                      <path d={link.svgPath} />
                    </svg>
                  </div>

                  {/* Text */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "#32323b",
                        fontSize: "0.9375rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "#5f5e68",
                        textTransform: "uppercase",
                        lineHeight: 1.4,
                      }}
                    >
                      {link.sublabel}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    width: "1rem",
                    height: "1rem",
                    fill: "#b2b1bc",
                    flexShrink: 0,
                    marginLeft: "0.5rem",
                  }}
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </a>
            ))}
          </nav>
        </section>

        {/* Footer legal */}
        <footer
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(20, 48, 103, 0.1)",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            boxSizing: "border-box",
          }}
        >
          <h2 className="sr-only">Información Legal</h2>
          <nav
            aria-label="Enlaces legales"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              fontSize: "0.75rem",
              color: "#5f5e68",
            }}
          >
            <Link href="/privacidad" className="hover:underline">
              Privacidad
            </Link>
            <span aria-hidden="true" style={{ color: "#cbd5e1" }}>
              •
            </span>
            <Link href="/terminos" className="hover:underline">
              Términos
            </Link>
            <span aria-hidden="true" style={{ color: "#cbd5e1" }}>
              •
            </span>
            <Link href="/aviso-legal" className="hover:underline">
              Aviso Legal
            </Link>
          </nav>
          <p style={{ fontSize: "0.6875rem", color: "#94a3b8", margin: 0 }}>
            {siteConfig.legal.copyright}
          </p>
        </footer>
      </div>
    </div>
  );
}
