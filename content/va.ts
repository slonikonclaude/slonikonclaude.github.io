import type { Dict } from "./es";

/**
 * Valencià — history paragraphs, nav labels, tagline, award and section names
 * are verbatim from iniciova.html (including its own spelling). New UI chrome
 * is translated faithfully without changing any factual meaning.
 */
export const va: Dict = {
  code: "va",
  htmlLang: "ca-ES-valencia",
  label: "Valencià",
  short: "VAL",

  meta: {
    title: "Casa El Famós | Restaurant Valencià a València",
    description:
      "Casa El Famós, restaurant històric de València especialitzat en arrossos, paelles i cuina tradicional valenciana. Més d'un segle de tradició.",
    ogAlt: "Paelles cuinant-se a llenya a Casa El Famós",
  },

  nav: {
    historia: "La nostra història",
    cocina: "Cuina",
    bodega: "Celler",
    espacio: "L'espai",
    contacto: "Contacte",
    home: "Inici",
  },

  hero: {
    name: "Casa El Famós",
    titleA: "Més d'un segle",
    titleB: "de tradició valenciana",
    subtitleA: "Arrossos, foc, vi i memòria",
    subtitleB: "al cor de l'horta valenciana.",
    ctaPrimary: "Veure la carta",
    ctaSecondary: "Descobrir El Famós",
    scroll: "Baixar",
  },

  manifesto: {
    eyebrow: "Benvinguts al Famós",
    title: "Més d'un segle mantenint la tradició valenciana",
    body: "En ple epicentre de l'horta valenciana, un punt de trobada que va nàixer com a taverna de vi i que hui continua servint paelles a llenya sota les mateixes parets pintades.",
    award: "Premi promoció del Valencià en l'hostaleria",
    pillars: [
      "Arrossos Típics",
      "Paelles",
      "Especialitats",
      "Excel·lent Celler",
    ],
  },

  historia: {
    eyebrow: "La nostra història",
    title: "Una història que va començar fa més d'un segle",
    era: "Segle XIX",
    eraNote: "Primers del segle XIX",
    paragraphs: [
      "En ple epicentre de l'horta valenciana, te vas erigir quasi com un monument a primers del segle XIX, on eixos senzills i il·lusionats agricultors van trobar en tu un punt de trobada i reunió on poder comentar els avatars del dia acompanyat en eixes improvisades tertúlies amb un got de vi i algun aliment.",
      "El destí i la fèrria voluntat de Juan Bautista Navarro Dols, que amb una visió anticipada va tindre la preclara idea de construir una taverna de venda de vi al detall, als agricultors de la zona donada la carència d'eixe servici.",
      "La idea va cristal·litzar i «EL FAMÓS» va iniciar el seu tímid camí un tant inconscient de que amb el pas del temps experimentava una expansió al transformar-la per mitjà dels seus descendents Vicent i José Mª, en un típic i famós restaurant, amb una consolidada antiguitat de més d'un segle.",
      "Has acompanyat en el teu temps a la cèlebre Ermita de Vera del segle XVII i la seua contornejada, la qual va ser plasmada per famosos pintors atrets sens dubte per la llum i l'ambient hortolà.",
    ],
    signature: "Luis López Almeida",
    timelineTitle: "De taverna a restaurant",
    timeline: [
      {
        label: "Primers del segle XIX",
        text: "Punt de trobada dels agricultors de l'horta, entre tertúlies, un got de vi i algun aliment.",
      },
      {
        label: "Juan Bautista Navarro Dols",
        text: "Amb una visió anticipada, construeix una taverna de venda de vi al detall per als agricultors de la zona.",
      },
      {
        label: "Naix «El Famós»",
        text: "La idea cristal·litza i la casa inicia el seu tímid camí.",
      },
      {
        label: "Vicente Navarro «El Famós»",
        text: "Un dels hereus es converteix en pintor polifacètic i ompli d'art les parets del menjador: el Museu Gastronòmic.",
      },
      {
        label: "Vicent i José Mª",
        text: "Els descendents transformen la taverna en un típic i famós restaurant.",
      },
      {
        label: "Hui",
        text: "Una antiguitat consolidada de més d'un segle, i les mateixes paelles a llenya.",
      },
    ],
  },

  arte: {
    eyebrow: "Art i restaurant",
    title: "On la gastronomia es troba amb l'art",
    museum: "Un museu gastronòmic",
    paragraphs: [
      "Tal vegada, la influència d'eixos estilitzats cavallets i d'eixos tubs de pintura van inocular el virus d'Art, a un dels hereus Vicente Navarro «EL FAMÓS» convertint-ho en un polifacètic pintor que ha aportat la plasticitat d'un personalíssim art en les parets d'eixe menjador, transformant-ho en el Museu Gastronòmic, on els comensals degusten unes paelles a llenya, conill a la brasa i moltes més especialitats típiques de la cuina valenciana, junt amb el gaudi d'uns excel·lents vins i postres casolanes, que posen el passador d'or a un bon menjar i al mateix temps i sense pretendre-ho a priori, les seues retines reben l'influx de l'Art que suporten les seues parets.",
      "Eixe ambient artístic ho fa especialment atractiu per a tots els públics i així no és res estrany que allí coincidisquen Professors, Metges, Periodistes, Polítics, Esportistes, estudiants i persones de totes les capes socials.",
      "Amb esta atmosfera acull celebracions de comunions, bodes, batejos, menjars o sopars d'empreses i de tot allò que requerisca un lloc alegre i familiar on poder reunir-se entorn d'una taula i amb un apetitós menú.",
    ],
    literary:
      "No ha passat desapercebut per la seua existència: l'escriptor B. San Martín Morales, de la Reial Acadèmia Espanyola de la Llengua i natural de València, fa referència explícita als besavis dels actuals propietaris en el seu llibre «Tierra Levantina», premiat en 1920 pel Cercle de Belles Arts, on apareix el nom de «CASA EL FAMÓS».",
    linkLabel: "Obra de Vicente Navarro",
  },

  cocina: {
    eyebrow: "La cuina",
    title: "La cuina valenciana, al foc",
    lead: "Paelles a llenya, conill a la brasa i les especialitats típiques de la cuina valenciana, amb postres casolanes que posen el passador d'or a un bon menjar.",
    categories: [
      {
        title: "Arrossos",
        desc: "Paelles i arrossos tradicionals, cuinats a llenya.",
      },
      {
        title: "Especialitats",
        desc: "Carns i peixos a la brasa, mariscs, all i pebre i suquet.",
      },
      {
        title: "Celler",
        desc: "Més de 200 referències de vins, caves i champagnes.",
      },
    ],
  },

  carta: {
    eyebrow: "La carta",
    title: "Plats",
    lead: "Selecciona una categoria per a veure els plats.",
    tabs: {
      paellas: "Paelles",
      arroces: "Altres arrossos",
      especialidades: "Altres especialitats",
    },
    countLabel: "plats",
  },

  paella: {
    eyebrow: "L'arròs",
    title: "L'arròs com a forma d'entendre València",
    body: "Paelles a llenya en el mateix menjador des de fa més de cent anys. L'horta al voltant, el foc davant i l'arròs al centre de la taula.",
  },

  bodega: {
    eyebrow: "Celler",
    title: "Celler",
    stat: "+200",
    statLabel: "referències de vins, caves i champagnes",
    lead: "Amb més de 200 referències de vins, caves i champagnes, gran varietat de denominacions i països.",
    quote:
      "El vi tempera els esperits... adorm les preocupacions... ens porta a una dolça alegria.",
    quoteAuthor: "Sòcrates",
    highlight: "Destaquem les següents referències:",
    filterLabel: "Filtrar per denominació",
    allLabel: "Totes",
  },

  espacio: {
    eyebrow: "L'espai",
    title: "El lloc",
    lead: "El menjador pintat, la terrassa i l'horta que envolta la casa, al costat de la cèlebre Ermita de Vera del segle XVII.",
    items: [
      {
        title: "Interior",
        desc: "El menjador convertit en Museu Gastronòmic per Vicente Navarro «El Famós».",
      },
      {
        title: "Terrassa",
        desc: "Menjar a l'aire lliure, en ple epicentre de l'horta valenciana.",
      },
      {
        title: "Entorn",
        desc: "Els voltants de l'Ermita de Vera, plasmats en llenços per famosos pintors atrets per la llum i l'ambient hortolà.",
      },
    ],
    galleryTitle: "Galeria",
    galleryHint: "Prem una imatge per a ampliar-la",
  },

  terraza: {
    eyebrow: "Terrassa",
    title: "Menjar a l'aire lliure",
    body: "La terrassa exterior, envoltada per l'horta valenciana, per a menjars i sopars a l'aire lliure.",
    cta: "Contacte",
  },

  contacto: {
    eyebrow: "Contacte",
    title: "On estem",
    addressTitle: "Adreça",
    phoneTitle: "Telèfon",
    emailTitle: "Email",
    directions: "Com arribar",
    mapTitle: "Mapa de la ubicació de Casa El Famós",
    accessTitle: "Accessos",
    coordsLabel: "Coordenades indicades en la web original",
    social: "Facebook",
    linksTitle: "Enllaços d'interés",
  },

  notices: {
    vacation: "Tancat per vacances de l'1 al 31 d'agost, ambdós inclosos.",
    food: "Restaurant Casa El Famós informa, d'acord amb la normativa vigent en matèria d'higiene alimentària RD 3484/2000 i Reglament de la Unió Europea nº 852/2004, i seguint les recomanacions de la Federació d'Hostaleria de València, que queda totalment prohibida l'entrada d'aliments que provinguen de l'exterior del local.",
    foodTitle: "Higiene alimentària",
  },

  footer: {
    tagline: "Més d'un segle mantenint la tradició valenciana",
    navTitle: "Navegació",
    contactTitle: "Contacte",
    legalTitle: "Legal",
    langTitle: "Idioma",
    paymentTitle: "Formes de pagament",
    rights: "Tots els drets reservats.",
  },

  legal: {
    aviso: "Avís legal",
    privacidad: "Política de privacitat",
    cookies: "Política de cookies",
    back: "Tornar a l'inici",
    languageNote:
      "Els textos legals es publiquen en castellà, que és la versió original i vinculant.",
  },

  a11y: {
    skip: "Anar al contingut principal",
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    langLabel: "Canviar d'idioma",
    mainNav: "Navegació principal",
    close: "Tancar",
    prev: "Imatge anterior",
    next: "Imatge següent",
    enlarge: "Ampliar imatge",
    imageCounter: "Imatge {n} de {total}",
    menuTabs: "Categories de la carta",
    wineFilter: "Denominacions d'origen",
  },
};
