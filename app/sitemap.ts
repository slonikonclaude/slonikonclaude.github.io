import type { MetadataRoute } from "next";
import { LANGS, LEGAL_SLUGS, DEFAULT_LANG, langMeta } from "@/content";
import { SITE_URL } from "@/content/data";

/** See app/robots.ts — required for `output: "export"`. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      langMeta.map((item) => [item.htmlLang, `${SITE_URL}/${item.code}${path}`]),
    ),
  });

  const home = LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    changeFrequency: "monthly" as const,
    priority: lang === DEFAULT_LANG ? 1 : 0.8,
    alternates: alternates(""),
  }));

  const legal = LANGS.flatMap((lang) =>
    LEGAL_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${lang}/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
      alternates: alternates(`/${slug}`),
    })),
  );

  return [...home, ...legal];
}
