"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const isDev = process.env.NODE_ENV === "development";

export function ShareButton() {
  const [showToast, setShowToast] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const triggerToast = () => {
    if (!mountedRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowToast(true);
    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) {
        setShowToast(false);
      }
      timeoutRef.current = null;
    }, 2500);
  };

  const handleCopy = async () => {
    const shareUrl =
      typeof window !== "undefined" ? window.location.href : siteConfig.pageUrl;

    // Check if navigator.clipboard is available (blocked in insecure HTTP environments)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        triggerToast();
        return;
      } catch (err) {
        if (isDev) console.error("Failed to copy link via clipboard API:", err);
      }
    }

    // Fallback for insecure contexts (e.g. mobile testing on local network HTTP)
    try {
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed"; // avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "-9999px"; // hide off-screen
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, shareUrl.length);
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (successful) {
        triggerToast();
      } else {
        throw new Error("execCommand copy returned false");
      }
    } catch (fallbackErr) {
      if (isDev) console.error("Fallback copy failed:", fallbackErr);
    }
  };

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar enlace de esta página"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          backgroundColor: "#f5f2fb",
          border: "1px solid rgba(20,48,103,0.15)",
          color: "#143067",
          cursor: "pointer",
          padding: 0,
          transition: "all 0.2s ease-in-out",
          outline: "none",
        }}
        className="hover:border-primary/40 focus:ring-primary/20 hover:scale-105 hover:bg-white focus:ring-2 active:scale-95"
      >
        <Share2 size={18} strokeWidth={2} fill="none" />
      </button>

      {/* Toast Notification rendered via Portal to escape stacking contexts and overflow clipping */}
      {mounted &&
        showToast &&
        typeof document !== "undefined" &&
        document.body &&
        createPortal(
          <div
            role="status"
            aria-live="polite"
            style={{
              position: "fixed",
              bottom: "max(2.5rem, calc(1.5rem + env(safe-area-inset-bottom, 0px)))",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#1e1e24",
              color: "#ffffff",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
              fontSize: "0.875rem",
              fontWeight: 600,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              whiteSpace: "nowrap",
              maxWidth: "calc(100vw - 2rem)",
              boxSizing: "border-box",
              pointerEvents: "none",
              animation: "toastFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <CheckCircle2
              size={20}
              strokeWidth={2}
              fill="none"
              className="text-emerald-500"
            />
            <span>Enlace copiado</span>
          </div>,
          document.body
        )}

      {/* CSS Animation injection */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes toastFadeIn {
              from {
                opacity: 0;
                transform: translate(-50%, 16px);
              }
              to {
                opacity: 1;
                transform: translate(-50%, 0);
              }
            }
            @media (prefers-reduced-motion: reduce) {
              @keyframes toastFadeIn {
                from {
                  opacity: 1;
                  transform: translate(-50%, 0);
                }
                to {
                  opacity: 1;
                  transform: translate(-50%, 0);
                }
              }
            }
          `,
        }}
      />
    </div>
  );
}

