import type { Dict } from "@/content";
import { menu } from "@/content/data";
import { Container, Section } from "./Section";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

/**
 * Typographic rather than photographic on purpose. The one genuine
 * fire-and-paella photograph in the source assets carries the hero and the
 * Cocina section; repeating it a third time here would cheapen it, and the
 * brief forbids substituting invented imagery. So the real paella names carry
 * this band, on a horizontal snap rail (an option the brief offers directly).
 * Give it a dedicated wide photograph when the client supplies one.
 */
export function PaellaSection({ dict }: { dict: Dict }) {
  const { paella } = dict;

  return (
    <Section id="arroces" tone="carbon" labelledBy="paella-title">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-vino-soft">{paella.eyebrow}</p>
          <h2
            id="paella-title"
            className="balance mt-6 text-(length:--text-display) text-crema"
          >
            {paella.title}
          </h2>
          <p className="measure mt-7 text-(length:--text-lead) leading-[1.6] text-crema/70">
            {paella.body}
          </p>
        </Reveal>
      </Container>

      {/* Full-bleed rail: scrolls on touch, wraps into a grid from lg up. */}
      <RevealGroup
        className="rail mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:px-6 lg:mx-auto lg:max-w-[82rem] lg:grid lg:grid-cols-5 lg:gap-px lg:overflow-visible lg:bg-line-dark lg:px-10 xl:px-16"
        stagger={0.05}
      >
        {menu.paellas.map((dish, i) => (
          <RevealItem
            key={dish}
            className="w-[15rem] shrink-0 snap-start lg:w-auto"
          >
            <div className="flex h-full min-h-[11rem] flex-col justify-between border border-line-dark p-6 lg:border-0 lg:bg-carbon">
              <span className="tnum eyebrow text-vino-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl leading-tight text-crema">
                {dish}
              </h3>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
