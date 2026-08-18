import type { Dict } from "./es";

/**
 * English — based on inicioen.html.
 *
 * The original English page is a rough translation containing clear
 * typographical errors ("a glass of winw", "the firts years", "stablishment",
 * "togetter", "dessets", "CASA tHE FAMOS"). Spelling and grammar have been
 * corrected; the content, facts and order of the text are unchanged. Nothing
 * was added or removed.
 */
export const en: Dict = {
  code: "en",
  htmlLang: "en",
  label: "English",
  short: "EN",

  meta: {
    title: "Casa El Famós | Valencian Restaurant in Valencia",
    description:
      "Casa El Famós, a historic Valencian restaurant specialising in rice dishes, paellas and traditional Valencian cooking. More than a century of tradition.",
    ogAlt: "Paellas cooking over a wood fire at Casa El Famós",
  },

  nav: {
    historia: "Our history",
    cocina: "Kitchen",
    bodega: "Wine cellar",
    espacio: "The place",
    contacto: "Contact",
    home: "Home",
  },

  hero: {
    name: "Casa El Famós",
    titleA: "More than a century",
    titleB: "of Valencian tradition",
    subtitleA: "Rice, fire, wine and memory",
    subtitleB: "in the heart of the Valencian huerta.",
    ctaPrimary: "See the menu",
    ctaSecondary: "Discover El Famós",
    scroll: "Scroll",
  },

  manifesto: {
    eyebrow: "Welcome to El Famós",
    title: "More than a century maintaining Valencian tradition",
    body: "Right in the epicentre of the Valencian huerta, a meeting place that began as a wine tavern and still serves wood-fired paellas beneath the same painted walls.",
    award: "Promotion of Valencian in Hospitality Award",
    pillars: [
      "Typical rice dishes",
      "Paellas",
      "Specialities",
      "Excellent cellar",
    ],
  },

  historia: {
    eyebrow: "Our history",
    title: "A history that began more than a century ago",
    era: "19th century",
    eraNote: "Early 19th century",
    paragraphs: [
      "Right in the epicentre of the fertile region of Valencia you were erected almost like a monument in the first years of the 19th century, where those simple and hopeful peasants found in you a place of meeting where they could discuss the tasks of the day, accompanied in those improvised social gatherings by a glass of wine and some food.",
      "The destiny and the iron will of Juan Bautista Navarro Dols, who with an anticipated vision had the clear idea of building a tavern as a retail establishment to sell wine to the peasants of the area, given the lack of that service.",
      "The idea crystallised and «El Famós» began its timid course, rather unconscious of the expansion that was taking place with the passing of time through his descendants Vicent and José María, who turned it into a traditional and famous restaurant with a consolidated antiquity of more than a century.",
      "You have accompanied in your time the famous chapel of Vera («Camino de Vera»), dating from the 17th century, whose evocative surroundings were reflected on canvas by famous painters attracted by the light and the atmosphere of that place.",
    ],
    signature: "Luis López Almeida",
    timelineTitle: "From tavern to restaurant",
    timeline: [
      {
        label: "Early 19th century",
        text: "A meeting place for the farmers of the huerta, over conversation, a glass of wine and some food.",
      },
      {
        label: "Juan Bautista Navarro Dols",
        text: "With an anticipated vision, he builds a tavern selling wine by retail to the farmers of the area.",
      },
      {
        label: "«El Famós» is born",
        text: "The idea crystallises and the house begins its timid course.",
      },
      {
        label: "Vicente Navarro «El Famós»",
        text: "One of the heirs becomes a versatile painter and fills the walls of the dining room with art: the Gastronomical Museum.",
      },
      {
        label: "Vicent and José María",
        text: "The descendants turn the tavern into a traditional and famous restaurant.",
      },
      {
        label: "Today",
        text: "A consolidated antiquity of more than a century — and the same wood-fired paellas.",
      },
    ],
  },

  arte: {
    eyebrow: "Art and restaurant",
    title: "Where gastronomy meets art",
    museum: "A gastronomical museum",
    paragraphs: [
      "Perhaps the influence of those stylised painter's easels and tubes of paint inoculated the virus of Art into one of the heirs, Vicente Navarro «EL FAMÓS», turning him into a versatile painter who has contributed the plasticity of a very personal art on the walls of that dining room, turning it into the Gastronomical Museum, where diners taste paellas made over firewood, grilled rabbit and many more typical specialities of Valencian cuisine, together with the pleasure of excellent wines and homemade desserts that put the finishing touch to a good meal — and at the same time, without intending it beforehand, their eyes receive the influence of the art these walls hold.",
      "That artistic atmosphere makes it especially attractive to everyone, and so it is no wonder that professors, doctors, journalists, politicians, sportspeople, students and people from all walks of life meet there.",
      "In this atmosphere it hosts celebrations of first communions, weddings, christenings, business lunches and dinners, and everything that calls for a cheerful, familiar place where people can gather around a table with an appetising menu.",
    ],
    literary:
      "Its existence has not gone unnoticed: the writer B. San Martín Morales, of the Royal Spanish Academy of Language and a native of Valencia, refers explicitly to the great-grandparents of the current owners in his book «Tierra Levantina», awarded in 1920 by the Circle of Fine Arts, where the name «CASA EL FAMÓS» appears.",
    linkLabel: "Work by Vicente Navarro",
  },

  cocina: {
    eyebrow: "The kitchen",
    title: "Valencian cooking, over fire",
    lead: "Wood-fired paellas, grilled rabbit and the typical specialities of Valencian cuisine, with homemade desserts to finish a good meal.",
    categories: [
      {
        title: "Rice dishes",
        desc: "Paellas and traditional rice dishes, cooked over firewood.",
      },
      {
        title: "Specialities",
        desc: "Grilled meat and fish, seafood, all i pebre and suquet.",
      },
      {
        title: "Cellar",
        desc: "More than 200 references of wine, cava and champagne.",
      },
    ],
  },

  carta: {
    eyebrow: "The menu",
    title: "Dishes",
    lead: "Choose a category to see the dishes.",
    tabs: {
      paellas: "Paellas",
      arroces: "Other rice dishes",
      especialidades: "Other specialities",
    },
    countLabel: "dishes",
  },

  paella: {
    eyebrow: "The rice",
    title: "Rice as a way of understanding Valencia",
    body: "Wood-fired paellas in the same dining room for more than a hundred years. The huerta around, the fire in front, and the rice at the centre of the table.",
  },

  bodega: {
    eyebrow: "Cellar",
    title: "Wine cellar",
    stat: "+200",
    statLabel: "references of wine, cava and champagne",
    lead: "With more than 200 references of wines, cavas and champagnes, a great variety of denominations and countries.",
    quote:
      "Wine soothes the spirit... it lulls worries to sleep... it brings us to a sweet joy.",
    quoteAuthor: "Socrates",
    highlight: "We highlight the following references:",
    filterLabel: "Filter by denomination",
    allLabel: "All",
  },

  espacio: {
    eyebrow: "The place",
    title: "The place",
    lead: "The painted dining room, the terrace and the huerta surrounding the house, next to the famous 17th-century Ermita de Vera.",
    items: [
      {
        title: "Interior",
        desc: "The dining room turned into a Gastronomical Museum by Vicente Navarro «El Famós».",
      },
      {
        title: "Terrace",
        desc: "Eating outdoors, right in the epicentre of the Valencian huerta.",
      },
      {
        title: "Surroundings",
        desc: "The surroundings of the Ermita de Vera, painted on canvas by famous painters drawn by the light and the atmosphere of the huerta.",
      },
    ],
    galleryTitle: "Gallery",
    galleryHint: "Select an image to enlarge it",
  },

  terraza: {
    eyebrow: "Terrace",
    title: "Eating outdoors",
    body: "The outdoor terrace, surrounded by the Valencian huerta, for lunches and dinners in the open air.",
    cta: "Contact",
  },

  contacto: {
    eyebrow: "Contact",
    title: "Where we are",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    directions: "Get directions",
    mapTitle: "Map showing the location of Casa El Famós",
    accessTitle: "Access",
    coordsLabel: "Coordinates as stated on the original site",
    social: "Facebook",
    linksTitle: "Links of interest",
  },

  notices: {
    vacation: "Closed for holidays from 1 to 31 August, both inclusive.",
    food: "Restaurante Casa El Famós informs you, in accordance with current food hygiene regulations RD 3484/2000 and European Union Regulation no. 852/2004, and following the recommendations of the Valencia Hospitality Federation, that bringing food in from outside the premises is strictly prohibited.",
    foodTitle: "Food hygiene",
  },

  footer: {
    tagline: "More than a century maintaining Valencian tradition",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    langTitle: "Language",
    paymentTitle: "Payment methods",
    rights: "All rights reserved.",
  },

  legal: {
    aviso: "Legal notice",
    privacidad: "Privacy policy",
    cookies: "Cookie policy",
    back: "Back to home",
    languageNote:
      "The legal texts are published in Spanish, which is the original and binding version.",
  },

  a11y: {
    skip: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    langLabel: "Change language",
    mainNav: "Main navigation",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    enlarge: "Enlarge image",
    imageCounter: "Image {n} of {total}",
    menuTabs: "Menu categories",
    wineFilter: "Denominations of origin",
  },
};
