import Link from "next/link";
import type { Dict, Lang } from "@/content";
import type { LegalDoc } from "@/content/legal";
import { Container } from "./Section";

/**
 * Renders one of the three legal documents. The body is always the original
 * Spanish text (see content/legal.ts); on VAL/EN a short note above explains
 * that Spanish is the binding version.
 */
export function LegalPage({
  doc,
  dict,
  lang,
}: {
  doc: LegalDoc;
  dict: Dict;
  lang: Lang;
}) {
  return (
    <article className="pb-(--spacing-section) pt-32 sm:pt-40">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow text-terracota">{dict.footer.legalTitle}</p>
          <h1 className="balance mt-5 text-(length:--text-display)">
            {doc.title}
          </h1>
          <p className="mt-5 text-sm text-ink-soft">{doc.published}</p>

          {dict.legal.languageNote && (
            <p
              lang="en"
              className="mt-8 border-l-2 border-line bg-crema-deep p-4 text-sm text-ink-soft"
            >
              {dict.legal.languageNote}
            </p>
          )}

          <div lang="es" className="mt-12 space-y-6">
            {doc.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-8 text-(length:--text-title) first:pt-0"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3 pl-5">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="list-disc leading-[1.8] text-ink-soft marker:text-terracota"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === "dl") {
                return (
                  <dl key={i} className="divide-y divide-line border-y border-line">
                    {block.items.map((item, j) => (
                      <div key={j} className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-ink">
                          {item.term}
                        </dt>
                        <dd className="wrap-anywhere text-ink-soft sm:col-span-2">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                );
              }

              return (
                <p key={i} className="wrap-anywhere leading-[1.8] text-ink-soft">
                  {block.text}
                </p>
              );
            })}
          </div>

          <Link
            href={`/${lang}`}
            className="eyebrow mt-16 inline-flex min-h-[52px] items-center border border-line px-8 text-ink transition-colors duration-200 hover:border-ink"
          >
            {dict.legal.back}
          </Link>
        </div>
      </Container>
    </article>
  );
}
