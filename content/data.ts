/**
 * Language-independent facts, transcribed verbatim from elfamos.com.
 *
 * CONTENT RULE: nothing in this file may be invented. Every phone number,
 * dish, wine and link below exists on the original site. Dish and wine names
 * are proper nouns and are NOT translated — the original English page kept
 * them in Spanish/Valencian too.
 */

/**
 * Absolute origin used for canonical links, hreflang, sitemap.xml, robots.txt
 * and Open Graph image URLs. Overridable at build time so the same source can
 * be published to a GitHub Pages origin or to the real domain unchanged.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.elfamos.com";

/**
 * Set NEXT_PUBLIC_PREVIEW=1 for a build that is shown to the client for review
 * but must never be indexed. It flips every page to `noindex, nofollow` and
 * makes robots.txt disallow everything.
 *
 * Without this, a preview deployment of a real, trading restaurant's site is
 * crawlable and competes with the live elfamos.com in search results.
 * Production builds simply omit the variable.
 */
export const IS_PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === "1";

export const contact = {
  street: "Camino de la Iglesia de Vera, 14",
  postalCode: "46022",
  city: "Valencia",
  country: "ES",
  /** From contacto.html: "Tfno. para reservas" */
  phones: [
    { display: "+34 963 71 00 28", href: "tel:+34963710028" },
    { display: "+34 963 55 63 84", href: "tel:+34963556384" },
  ],
  /** From contacto.html: "Mov." */
  mobile: { display: "+34 647 655 229", href: "tel:+34647655229" },
  email: "info@elfamos.com",
  /** Real page, linked from contacto.html */
  facebook: "https://es-es.facebook.com/restaurante.elfamos",
  /**
   * Coordinates exactly as printed on accesos.html. They are malformed in the
   * source (seconds value out of range), so they are shown for reference only
   * and deliberately NOT used for structured data or the map.
   */
  statedCoordinates: { lat: `39º 5' 7516"`, lon: `0º 16' 9584"` },
  legalName: "RESTAURANTE EL FAMOS SL",
  cif: "B96750195",
} as const;

export const mapsQuery = encodeURIComponent(
  "Casa El Famós, Camino de la Iglesia de Vera 14, 46022 Valencia",
);
export const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;
export const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

/** Accepted cards, from the payment badges in the original footer. */
export const paymentMethods = ["Visa", "Mastercard", "Servired", "4B", "6000"];

/* ------------------------------------------------------------------ */
/* Menu — platos.html, verbatim and complete                           */
/* ------------------------------------------------------------------ */

export type MenuCategoryId = "paellas" | "arroces" | "especialidades";

export const menu: Record<MenuCategoryId, string[]> = {
  /** platos.html → "Paellas:" */
  paellas: [
    "Paella de toro",
    "Paella de costillas y col",
    "Paella de langosta",
    "Paella de bogavante",
    "Paella de marisco",
    "Paella de verduras",
    "Arroz negro",
    "Paella de bacalao y col",
    "Paella de pollo y conejo",
    "Arroz a banda",
  ],
  /** platos.html → "Otros Arroces:" */
  arroces: [
    "Arròs amb fesols i naps",
    "Arroz caldoso",
    "Arroz caldoso de marisco",
    "Arroz con acelgas",
    "Arroz al horno",
    "Arroz con costra",
    "Arroz meloso de bogavante",
    "Arroz meloso de langosta",
  ],
  /** platos.html → "Otras Especialidades:" */
  especialidades: [
    "Caldereta",
    "Espardenyá",
    "Carnes a la brasa",
    "Carnes al ajillo",
    "Pescado y mariscos",
    "Pescados a la brasa",
    "All i pebre d'anguilas",
    "Salpicó de pollastre i pato",
    "Suquet de rap",
  ],
};

/* ------------------------------------------------------------------ */
/* Bodega — bodega.html, verbatim                                      */
/* ------------------------------------------------------------------ */

export const wineRegions = [
  {
    id: "valencia",
    name: "Valencia",
    wines: [
      "Moma",
      "Maduressa",
      "Alvarez Nolting",
      "Mas de Sella",
      "Bassus",
      "Venta del Puerto",
      "Rafael Cambra",
      "Pago de Tharsys",
    ],
  },
  {
    id: "rioja",
    name: "Rioja",
    wines: ["Viña Tondonia", "Muga", "San Vicente"],
  },
  {
    id: "ribera",
    name: "Ribera del Duero",
    wines: [
      "Pago Carra Ovejas",
      "Pago de los Capellanes",
      "Protos",
      "Pesquera",
    ],
  },
  {
    id: "jumilla",
    name: "Jumilla",
    wines: ["Casa la Ermita", "Juan Gil"],
  },
  {
    id: "otros",
    name: "Otros",
    wines: ["Toro", "Miatsu"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Photography                                                         */
/* ------------------------------------------------------------------ */

/**
 * Every photo here is an original file from elfamos.com. Native dimensions are
 * recorded because they are small — see DESIGN.md §8. No stock or generated
 * imagery is used anywhere on this site.
 */
export const photos = {
  terraza: { src: "/photos/terraza-exterior.jpg", width: 800, height: 450 },
  interiorArte1: {
    src: "/photos/interior-comedor-arte-1.jpg",
    width: 367,
    height: 551,
  },
  interiorArte2: {
    src: "/photos/interior-comedor-arte-2.jpg",
    width: 367,
    height: 551,
  },
  platos: { src: "/photos/platos-arroces.jpg", width: 589, height: 442 },
  bodega: { src: "/photos/bodega-vinos.jpg", width: 582, height: 326 },
  entorno: { src: "/photos/entorno-vera.jpg", width: 265, height: 146 },
} as const;

/** "Enlaces de interés" — crbst_21.html. Both links are real. */
export const externalLinks = [
  {
    href: "http://www.vicentefamos.com/",
    label: "vicentefamos.com",
  },
  {
    href: "http://www.rtve.es/alacarta/videos/espana-directo/espana-directo-paella-pollo-conejo/2456933/",
    label: "RTVE — España Directo",
  },
] as const;
