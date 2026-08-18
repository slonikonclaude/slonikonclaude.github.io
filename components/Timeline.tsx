import { RevealGroup, RevealItem } from "./Reveal";

type Entry = { label: string; text: string };

/**
 * Ordered list so assistive tech announces the sequence. The spine is a
 * decorative pseudo-border, not a list marker.
 *
 * Every label comes from the source text. No dates are invented: where the
 * original only says "primeros del siglo XIX", that is what the label says.
 */
export function Timeline({
  entries,
  title,
  titleId,
}: {
  entries: readonly Entry[];
  title: string;
  titleId: string;
}) {
  return (
    <div>
      <h3 id={titleId} className="eyebrow text-terracota">
        {title}
      </h3>

      <RevealGroup
        as="ol"
        stagger={0.08}
        className="relative mt-8 border-l border-line pl-7 sm:pl-9"
      >
        {entries.map((entry) => (
          <RevealItem
            as="li"
            key={entry.label}
            className="relative pb-10 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[calc(1.75rem+3.5px)] top-2 block h-[7px] w-[7px] rounded-full bg-terracota sm:-left-[calc(2.25rem+3.5px)]"
            />
            <h4 className="font-[family-name:var(--font-sans)] text-base font-medium text-ink">
              {entry.label}
            </h4>
            <p className="measure mt-2 text-ink-soft">{entry.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
