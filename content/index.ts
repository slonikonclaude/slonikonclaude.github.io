import { es, type Dict } from "./es";
import { va } from "./va";
import { en } from "./en";

export const LANGS = ["es", "va", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "es";

const dictionaries: Record<Lang, Dict> = { es, va, en };

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

/** Language metadata for the switcher, in a stable display order. */
export const langMeta = LANGS.map((code) => ({
  code,
  short: dictionaries[code].short,
  label: dictionaries[code].label,
  htmlLang: dictionaries[code].htmlLang,
}));

/** Legal sub-pages. Slugs stay identical across languages to keep URLs stable. */
export const LEGAL_SLUGS = ["aviso-legal", "privacidad", "cookies"] as const;
export type LegalSlug = (typeof LEGAL_SLUGS)[number];

export type { Dict };
