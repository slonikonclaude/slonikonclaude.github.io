import type { Metadata } from "next";
import { DEFAULT_LANG, langMeta, type Lang, type LegalSlug } from "@/content";

/**
 * Canonical + hreflang for a legal page. The three language versions of each
 * legal document share a slug, so they are true alternates of one another and
 * must declare it — otherwise search engines treat them as duplicates.
 */
export function legalAlternates(
  lang: Lang,
  slug: LegalSlug,
): Metadata["alternates"] {
  return {
    canonical: `/${lang}/${slug}`,
    languages: {
      ...Object.fromEntries(
        langMeta.map((item) => [item.htmlLang, `/${item.code}/${slug}`]),
      ),
      "x-default": `/${DEFAULT_LANG}/${slug}`,
    },
  };
}
