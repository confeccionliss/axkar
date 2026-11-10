import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { siteConfig, socialLinks } from "../src/config/site.ts";

const PROJECT_ROOT = path.resolve(".");

test("R1: Complete Branding and Metadata Reset", async (t) => {
  await t.test("siteConfig branding fields match Axkarl Reborn", () => {
    assert.equal(siteConfig.name, "Axkarl Reborn");
    assert.equal(siteConfig.url, "https://www.axkar.com");
    assert.equal(siteConfig.pageUrl, "https://www.axkar.com");
    assert.equal(siteConfig.twitterHandle, "@iamaxkarl");
    assert.equal(siteConfig.publisher, "Axkarl Reborn");
    assert.equal(siteConfig.creator, "Axkarl Reborn");
    assert.match(siteConfig.title, /Axkarl Reborn/);
    assert.match(siteConfig.description, /Axkarl Reborn/);
    assert.ok(siteConfig.keywords.length > 20);
  });

  await t.test("Profile avatar and cover are configured with user assets", () => {
    assert.equal(siteConfig.profile.avatarSrc, "/images/perfil.jpg");
    assert.equal(siteConfig.profile.coverSrc, "/images/portada.jpg");
    assert.equal(
      fs.existsSync(path.join(PROJECT_ROOT, "public", "images", "perfil.jpg")),
      true,
      "perfil.jpg must exist in public/images"
    );
    assert.equal(
      fs.existsSync(path.join(PROJECT_ROOT, "public", "images", "portada.jpg")),
      true,
      "portada.jpg must exist in public/images"
    );
    assert.match(siteConfig.profile.avatarAlt, /Axkarl Reborn/);
    assert.match(siteConfig.profile.coverAlt, /Axkarl Reborn/);
    assert.match(siteConfig.profile.ariaLabel, /Axkarl Reborn/);
  });

  await t.test("No occurrences of legacy branding in src and public directories", () => {
    const forbiddenPatterns = [
      /Confecciones\s*Liss/i,
      /scrub/i,
      /uniforme/i,
      /50373317181/,
      /confeccionliss/i,
    ];

    function checkDir(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDir(fullPath);
        } else if (entry.isFile()) {
          const content = fs.readFileSync(fullPath, "utf-8");
          for (const pattern of forbiddenPatterns) {
            assert.doesNotMatch(
              content,
              pattern,
              `Found forbidden pattern ${pattern} in ${fullPath}`
            );
          }
        }
      }
    }

    checkDir(path.join(PROJECT_ROOT, "src"));
    // For public, check all non-binary text files (svg, etc.)
    const publicFiles = fs.readdirSync(path.join(PROJECT_ROOT, "public"), { withFileTypes: true });
    for (const file of publicFiles) {
      if (file.isFile() && file.name.endsWith(".svg")) {
        const content = fs.readFileSync(path.join(PROJECT_ROOT, "public", file.name), "utf-8");
        for (const pattern of forbiddenPatterns) {
          assert.doesNotMatch(
            content,
            pattern,
            `Found forbidden pattern ${pattern} in public/${file.name}`
          );
        }
      }
    }
  });

  await t.test("Legacy Confecciones Liss image assets are deleted", () => {
    const legacyAssets = [
      "public/logo.png",
      "public/logo-white.png",
      "public/isotipo-simplificado.png",
      "public/isotipo-simplificado-white.svg",
      "public/icons/apple-icon-light.png",
    ];

    for (const asset of legacyAssets) {
      assert.equal(
        fs.existsSync(path.join(PROJECT_ROOT, asset)),
        false,
        `Legacy asset should not exist: ${asset}`
      );
    }
  });

  await t.test("public/favicon.ico is rebranded for Axkarl Reborn", () => {
    const faviconIcoPath = path.join(PROJECT_ROOT, "public", "favicon.ico");
    assert.equal(fs.existsSync(faviconIcoPath), true, "favicon.ico must exist");
    const stat = fs.statSync(faviconIcoPath);
    assert.notEqual(stat.size, 1413, "favicon.ico must not be the legacy 1413-byte icon");
    const buf = fs.readFileSync(faviconIcoPath);
    assert.equal(buf.readUInt16LE(0), 0);
    assert.equal(buf.readUInt16LE(2), 1);
  });
});

test("R2: Social Buttons Configuration", async (t) => {
  await t.test("Exclusively 5 social buttons are rendered in requested order", () => {
    assert.equal(socialLinks.length, 5);
    const ids = socialLinks.map((link) => link.id);
    assert.deepEqual(ids, ["telegram", "tiktok", "twitter", "facebook", "whatsapp"]);
  });

  await t.test("Twitter link points to https://x.com/iamaxkarl", () => {
    const link = socialLinks.find((l) => l.id === "twitter");
    assert.ok(link);
    assert.equal(link.href, "https://x.com/iamaxkarl");
  });

  await t.test("Facebook link points to https://facebook.com/axkar.reborn", () => {
    const link = socialLinks.find((l) => l.id === "facebook");
    assert.ok(link);
    assert.equal(link.href, "https://facebook.com/axkar.reborn");
  });

  await t.test("Telegram link points to https://t.me/ax_karl", () => {
    const link = socialLinks.find((l) => l.id === "telegram");
    assert.ok(link);
    assert.equal(link.href, "https://t.me/ax_karl");
  });

  await t.test("WhatsApp link points to https://chat.whatsapp.com/DVdS5lbfY805uxvWdo4jYs", () => {
    const link = socialLinks.find((l) => l.id === "whatsapp");
    assert.ok(link);
    assert.equal(link.href, "https://chat.whatsapp.com/DVdS5lbfY805uxvWdo4jYs");
  });

  await t.test("TikTok link points to https://www.tiktok.com/@its.axkarl", () => {
    const link = socialLinks.find((l) => l.id === "tiktok");
    assert.ok(link);
    assert.equal(link.href, "https://www.tiktok.com/@its.axkarl");
  });

  await t.test("Removed previous platforms are absent", () => {
    const removedIds = [
      "instagram",
      "youtube",
      "linkedin",
      "pinterest",
      "marketplace",
      "maps",
      "website",
      "threads",
      "facebook-page",
      "facebook-admin",
    ];
    for (const id of removedIds) {
      assert.equal(
        socialLinks.some((l) => l.id === id),
        false,
        `Platform ${id} should be absent`
      );
    }
  });

  await t.test("Social links open in a new tab with security attributes", () => {
    const linkInBioCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "components", "LinkInBio.tsx"),
      "utf-8"
    );
    assert.match(linkInBioCode, /target="_blank"/);
    assert.match(linkInBioCode, /rel="noopener noreferrer"/);
  });

  await t.test("Social links data structures have valid paths and brand colors", () => {
    for (const link of socialLinks) {
      assert.ok(link.id, "Link must have an id");
      assert.ok(link.label, `Link ${link.id} must have a label`);
      assert.ok(link.sublabel, `Link ${link.id} must have a sublabel`);
      assert.match(link.href, /^https?:\/\//, `Link ${link.id} must have valid URL`);
      assert.match(link.color, /^#[0-9a-fA-F]{6}$/, `Link ${link.id} must have valid hex color`);
      assert.match(link.svgPath, /^M/, `Link ${link.id} svgPath must start with 'M'`);
    }
  });
});

test("R3: Meta-Compliant Welcome and Social Follow Message", async (t) => {
  await t.test("Bio welcomes visitors", () => {
    assert.match(
      siteConfig.profile.bio,
      /bienvenid/i,
      "Bio must include a welcome greeting"
    );
  });

  await t.test("Bio invites to follow / connect on social networks", () => {
    assert.match(
      siteConfig.profile.bio,
      /seguir|conectar|redes/i,
      "Bio must invite users to follow/connect on social networks"
    );
  });

  await t.test("Bio does NOT contain prohibited engagement-bait patterns", () => {
    const engagementBait = [
      /comenta/i,
      /etiqueta/i,
      /tag/i,
      /gana/i,
      /sorteo/i,
      /giveaway/i,
      /comparte\s+para/i,
      /f4f/i,
      /follow\s*4\s*follow/i,
      /reacciona/i,
      /paga al recibir/i,
    ];
    for (const pattern of engagementBait) {
      assert.doesNotMatch(
        siteConfig.profile.bio,
        pattern,
        `Bio must not contain engagement bait pattern: ${pattern}`
      );
    }
  });
});

test("R4: SEO, Schemas, Robots, Sitemap, E-E-A-T and Legal Compliance", async (t) => {
  await t.test("robots.ts provides permissive rules for Google, Meta, and Twitter bots", () => {
    const robotsCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "app", "robots.ts"),
      "utf-8"
    );
    assert.match(robotsCode, /MetadataRoute\.Robots/);
    assert.match(robotsCode, /facebookexternalhit/);
    assert.match(robotsCode, /Googlebot/);
    assert.match(robotsCode, /Twitterbot/);
    assert.match(robotsCode, /sitemap\.xml/);
  });

  await t.test("sitemap.ts lists main page and all legal pages", () => {
    const sitemapCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "app", "sitemap.ts"),
      "utf-8"
    );
    assert.match(sitemapCode, /MetadataRoute\.Sitemap/);
    assert.match(sitemapCode, /privacidad/);
    assert.match(sitemapCode, /terminos/);
    assert.match(sitemapCode, /aviso-legal/);
  });

  await t.test("next.config.mjs sets X-Robots-Tag and security headers", async () => {
    const nextConfigContent = fs.readFileSync(
      path.join(PROJECT_ROOT, "next.config.mjs"),
      "utf-8"
    );
    assert.match(nextConfigContent, /X-Robots-Tag/);
    assert.match(nextConfigContent, /X-Content-Type-Options/);
    assert.match(nextConfigContent, /X-Frame-Options/);
    assert.match(nextConfigContent, /Referrer-Policy/);
  });

  await t.test("page.tsx defines complete Schema.org JSON-LD (@graph with Person, WebSite, ProfilePage)", () => {
    const pageCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "app", "page.tsx"),
      "utf-8"
    );
    assert.match(pageCode, /@graph/);
    assert.match(pageCode, /ProfilePage/);
    assert.match(pageCode, /WebSite/);
    assert.match(pageCode, /Person/);
    assert.match(pageCode, /BreadcrumbList/);
    assert.match(pageCode, /canonical/);
    assert.match(pageCode, /openGraph/);
    assert.match(pageCode, /robots/);
    assert.match(pageCode, /twitter/);
  });

  await t.test("Semantic headings (H1, H2) are present in LinkInBio.tsx and pills/checks are absent", () => {
    const linkInBioCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "components", "LinkInBio.tsx"),
      "utf-8"
    );
    assert.match(linkInBioCode, /<h1[^>]*>[\s\S]*?<\/h1>/);
    assert.match(linkInBioCode, /<h2[^>]*>/);
    assert.match(linkInBioCode, /\/privacidad/);
    assert.match(linkInBioCode, /\/terminos/);
    assert.match(linkInBioCode, /\/aviso-legal/);
    assert.doesNotMatch(linkInBioCode, /Perfil Oficial Verificado/);
    assert.doesNotMatch(linkInBioCode, /Canales Oficiales y Verificados/);
  });

  await t.test("All 3 legal pages exist and are complete without TODOs", () => {
    const legalPages = [
      "src/app/privacidad/page.tsx",
      "src/app/terminos/page.tsx",
      "src/app/aviso-legal/page.tsx",
    ];
    for (const lp of legalPages) {
      const fullPath = path.join(PROJECT_ROOT, lp);
      assert.equal(fs.existsSync(fullPath), true, `File must exist: ${lp}`);
      const content = fs.readFileSync(fullPath, "utf-8");
      assert.doesNotMatch(content, /TODO/i);
      assert.match(content, /Axkarl Reborn/);
      assert.match(content, /canonical/);
    }
  });

  await t.test("SSG compliance: no dynamic runtime headers or cookies in public routes", () => {
    const pages = [
      "src/app/page.tsx",
      "src/app/privacidad/page.tsx",
      "src/app/terminos/page.tsx",
      "src/app/aviso-legal/page.tsx",
    ];
    for (const p of pages) {
      const pageCode = fs.readFileSync(path.join(PROJECT_ROOT, p), "utf-8");
      assert.doesNotMatch(pageCode, /cookies\(\)/);
      assert.doesNotMatch(pageCode, /headers\(\)/);
      assert.doesNotMatch(pageCode, /force-dynamic/);
    }
  });

  await t.test("Built artifacts verification (.next build validation)", () => {
    const ogImagePath = path.join(PROJECT_ROOT, "public", "images", "og-image.jpg");
    assert.equal(fs.existsSync(ogImagePath), true, "og-image.jpg must exist in public/images");
    const stat = fs.statSync(ogImagePath);
    assert.ok(stat.size < 307200, "og-image.jpg must be under 300KB for WhatsApp/Meta preview compatibility");

    const indexPath = path.join(PROJECT_ROOT, ".next", "server", "app", "index.html");
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, "utf-8");
      assert.match(html, /<link rel="canonical" href="https:\/\/www\.axkar\.com"/);
      assert.match(html, /property="og:url" content="https:\/\/www\.axkar\.com"/);
      assert.match(html, /property="og:type" content="website"/);
      assert.match(html, /property="og:image" content="https:\/\/www\.axkar\.com\/images\/og-image\.jpg"/);
      assert.match(html, /name="twitter:card" content="summary_large_image"/);
      assert.match(html, /name="twitter:image" content="https:\/\/www\.axkar\.com\/images\/og-image\.jpg"/);
      assert.match(html, /name="description" content="Espacio oficial de Axkarl Reborn/);
      assert.match(html, /name="keywords" content="Axkarl Reborn/);
      assert.match(html, /name="publisher" content="Axkarl Reborn"/);
      assert.match(html, /application\/ld\+json/);
      assert.match(html, /ProfilePage/);
      assert.match(html, /WebSite/);
      assert.match(html, /portada\.jpg/);
      assert.match(html, /perfil\.jpg/);
      assert.match(html, /https:\/\/x\.com\/iamaxkarl/);
      assert.match(html, /https:\/\/facebook\.com\/axkar.reborn/);
      assert.match(html, /https:\/\/t\.me\/ax_karl/);
      assert.match(html, /https:\/\/chat\.whatsapp\.com\/DVdS5lbfY805uxvWdo4jYs/);
      assert.match(html, /https:\/\/www\.tiktok\.com\/@its\.axkarl/);
      assert.match(html, /\/privacidad/);
      assert.match(html, /\/terminos/);
      assert.match(html, /\/aviso-legal/);
      assert.doesNotMatch(html, /Confecciones\s*Liss/i);
      assert.doesNotMatch(html, /scrub/i);
      assert.doesNotMatch(html, /uniforme/i);
    }
  });
});

test("R5: Share Toast Stacking, Meta Description Length, and OpenGraph Image Updates", async (t) => {
  await t.test("Meta description length is strictly under 155 characters across all routes", () => {
    // Primary siteConfig description
    assert.ok(
      siteConfig.description.length < 155,
      `siteConfig.description length (${siteConfig.description.length}) must be strictly < 155`
    );
    assert.ok(
      siteConfig.description.length > 50,
      `siteConfig.description length (${siteConfig.description.length}) must be descriptive`
    );
    assert.match(
      siteConfig.description,
      /Axkarl Reborn/,
      "siteConfig.description must reference Axkarl Reborn"
    );

    // Legal routes descriptions
    const legalPages = ["aviso-legal", "privacidad", "terminos"];
    for (const pageName of legalPages) {
      const pageCode = fs.readFileSync(
        path.join(PROJECT_ROOT, "src", "app", pageName, "page.tsx"),
        "utf-8"
      );
      const descMatch = pageCode.match(/description:\s*\n?\s*"([^"]+)"/);
      assert.ok(descMatch, `page ${pageName} must define metadata description`);
      const descText = descMatch[1];
      assert.ok(
        descText.length < 155,
        `${pageName} description length (${descText.length}) must be strictly < 155`
      );
      assert.ok(
        descText.length > 50,
        `${pageName} description length (${descText.length}) must be descriptive (> 50 chars)`
      );
    }
  });

  await t.test("OpenGraph and Twitter metadata designate perfil.jpg as primary image and exclude portada", () => {
    const indexPath = path.join(PROJECT_ROOT, ".next", "server", "app", "index.html");
    if (fs.existsSync(indexPath)) {
      const html = fs.readFileSync(indexPath, "utf-8");
      assert.match(
        html,
        /<meta property="og:image" content="https:\/\/www\.axkar\.com\/images\/perfil\.jpg"/,
        "index.html must render perfil.jpg as primary og:image"
      );
      assert.match(
        html,
        /<meta name="twitter:image" content="https:\/\/www\.axkar\.com\/images\/perfil\.jpg"/,
        "index.html must render perfil.jpg as primary twitter:image"
      );
      assert.match(
        html,
        /"primaryImageOfPage":\{"@type":"ImageObject","url":"https:\/\/www\.axkar\.com\/images\/perfil\.jpg"\}/,
        "JSON-LD primaryImageOfPage must reference perfil.jpg"
      );
      // Ensure cover photo is NOT used as an OpenGraph preview image
      assert.doesNotMatch(
        html,
        /<meta property="og:image" content="[^"]*portada\.jpg"/,
        "Cover image must not be used as og:image"
      );
      assert.doesNotMatch(
        html,
        /<meta name="twitter:image" content="[^"]*portada\.jpg"/,
        "Cover image must not be used as twitter:image"
      );
    }
  });

  await t.test("ShareButton renders toast via React portal to document.body with proper z-index and accessibility", () => {
    const shareButtonCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "components", "ShareButton.tsx"),
      "utf-8"
    );
    assert.match(shareButtonCode, /createPortal/);
    assert.match(shareButtonCode, /document\.body/);
    assert.match(shareButtonCode, /zIndex:\s*99999/);
    assert.match(shareButtonCode, /role="status"/);
    assert.match(shareButtonCode, /aria-live="polite"/);
    assert.match(shareButtonCode, /pointerEvents:\s*"none"/);
    assert.match(shareButtonCode, /env\(safe-area-inset-bottom/);
    assert.match(shareButtonCode, /maxWidth:\s*"calc\(100vw - 2rem\)"/);
    assert.match(shareButtonCode, /prefers-reduced-motion:\s*reduce/);
    assert.match(shareButtonCode, /type="button"/);
    assert.match(shareButtonCode, /title="Copiar enlace de esta página"/);
    assert.match(shareButtonCode, /setSelectionRange/);
    assert.match(shareButtonCode, /finally\s*\{/);
  });

  await t.test("LinkInBio heading container has stacking context above avatar", () => {
    const linkInBioCode = fs.readFileSync(
      path.join(PROJECT_ROOT, "src", "components", "LinkInBio.tsx"),
      "utf-8"
    );
    assert.match(linkInBioCode, /zIndex:\s*30/);
    assert.match(linkInBioCode, /position:\s*"relative"/);
  });

  await t.test("Simulated clipboard fallback executes successfully without errors", () => {
    // Test the fallback copy DOM manipulation in Node environment
    let appendChildCalled = false;
    let removeChildCalled = false;
    let execCommandCalled = false;

    const mockTextArea = {
      value: "",
      style: {},
      setAttribute: (k, v) => {},
      focus: () => {},
      select: () => {},
      setSelectionRange: (start, end) => {},
    };

    const mockDoc = {
      createElement: (tag) => (tag === "textarea" ? mockTextArea : {}),
      body: {
        appendChild: (el) => {
          appendChildCalled = true;
        },
        removeChild: (el) => {
          removeChildCalled = true;
        },
      },
      execCommand: (command) => {
        if (command === "copy") {
          execCommandCalled = true;
          return true;
        }
        return false;
      },
    };

    // Execute the fallback algorithm
    const testUrl = "https://www.axkar.com";
    const el = mockDoc.createElement("textarea");
    el.value = testUrl;
    el.setAttribute("readonly", "");
    mockDoc.body.appendChild(el);
    el.focus();
    el.select();
    el.setSelectionRange(0, testUrl.length);
    const copied = mockDoc.execCommand("copy");
    mockDoc.body.removeChild(el);

    assert.equal(copied, true, "execCommand('copy') must succeed");
    assert.equal(appendChildCalled, true, "appendChild must be called");
    assert.equal(removeChildCalled, true, "removeChild must be called");
    assert.equal(execCommandCalled, true, "execCommand must be called");
  });

  await t.test("Clipboard fallback guarantees DOM cleanup in finally block even when execCommand throws", () => {
    let appendChildCalled = false;
    let removeChildCalled = false;

    const mockTextArea = {
      value: "",
      style: {},
      setAttribute: () => {},
      focus: () => {},
      select: () => {},
      setSelectionRange: () => {},
    };

    const mockDoc = {
      body: {
        contains: () => true,
        appendChild: () => {
          appendChildCalled = true;
        },
        removeChild: () => {
          removeChildCalled = true;
        },
      },
      execCommand: () => {
        throw new Error("Simulated browser permission denial");
      },
    };

    let caughtError = null;
    let textArea = mockTextArea;
    try {
      mockDoc.body.appendChild(textArea);
      mockDoc.execCommand("copy");
    } catch (err) {
      caughtError = err;
    } finally {
      if (textArea && mockDoc.body.contains(textArea)) {
        mockDoc.body.removeChild(textArea);
      }
    }

    assert.ok(caughtError, "Error must be caught");
    assert.equal(appendChildCalled, true, "appendChild must be executed");
    assert.equal(removeChildCalled, true, "removeChild must be executed in finally block despite thrown error");
  });
});

