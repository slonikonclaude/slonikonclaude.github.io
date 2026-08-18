import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import {
  DEFAULT_LANG,
  LANGS,
  getDict,
  isLang,
  langMeta,
  type Lang,
} from "@/content";
import { IS_PREVIEW, SITE_URL, contact, photos } from "@/content/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileReserveBar } from "@/components/MobileReserveBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  // Regular for body-ish display text, italic for pull quotes, 500 for weight
  // contrast in large headings. No 700 — the brief wants elegance, not shout.
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e8",
};

/** Pre-render all three languages; anything else 404s. */
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const active: Lang = isLang(lang) ? lang : DEFAULT_LANG;
  const dict = getDict(active);

  const languages = Object.fromEntries(
    langMeta.map((item) => [item.htmlLang, `/${item.code}`]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${active}`,
      languages: { ...languages, "x-default": `/${DEFAULT_LANG}` },
    },
    openGraph: {
      type: "website",
      siteName: "Casa El Famós",
      locale: dict.htmlLang,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${active}`,
      images: [
        {
          url: photos.platos.src,
          width: photos.platos.width,
          height: photos.platos.height,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [photos.platos.src],
    },
    // Client-review builds are hidden from search engines entirely.
    robots: IS_PREVIEW
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  };
}

/**
 * Structured data. Deliberately conservative: no `openingHours`, no
 * `priceRange`, no `aggregateRating` and no `geo` — none of those are
 * confirmed on the source site, and inventing them would be a lie to search
 * engines as much as to visitors.
 */
function restaurantJsonLd(lang: Lang) {
  const dict = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Casa El Famós",
    legalName: contact.legalName,
    description: dict.meta.description,
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}${photos.platos.src}`,
    servesCuisine: ["Valenciana", "Mediterránea", "Arroces", "Paella"],
    telephone: contact.phones[0].display,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      postalCode: contact.postalCode,
      addressLocality: contact.city,
      addressCountry: contact.country,
    },
    sameAs: [contact.facebook],
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const dict = getDict(lang);

  return (
    <html
      lang={dict.htmlLang}
      className={`${playfair.variable} ${inter.variable}`}
      // Next 16 no longer forces smooth scrolling; opt in explicitly.
      data-scroll-behavior="smooth"
      // The inline script below adds a `js` class here before React hydrates,
      // so the client className intentionally differs from the server one.
      // Without this, React reports a hydration mismatch on <html>.
      suppressHydrationWarning
    >
      <head>
        {/*
          Marks the document as JS-capable BEFORE first paint. Every scroll
          reveal hides itself only under `html.js`, so this one line is what
          lets the no-JS render stay fully visible while still avoiding a
          flash-of-visible-content for everyone else. Must stay inline and
          blocking — deferring it would reintroduce the flash.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd(lang)).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <a href="#main" className="skip-link">
          {dict.a11y.skip}
        </a>

        <Navbar lang={lang} dict={dict} />
        <main id="main">{children}</main>
        <Footer lang={lang} dict={dict} />
        <MobileReserveBar lang={lang} dict={dict} />
      </body>
    </html>
  );
}
