import type { Dict } from "@/content";
import { Container, Section } from "./Section";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Manifesto({ dict }: { dict: Dict }) {
  return (
    <Section id="manifiesto" tone="crema" labelledBy="manifiesto-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-vino">{dict.manifesto.eyebrow}</p>
            <h2
              id="manifiesto-title"
              className="balance mt-5 text-(length:--text-display)"
            >
              {dict.manifesto.title}
            </h2>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="measure text-(length:--text-lead) leading-[1.65] text-ink-soft">
                {dict.manifesto.body}
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {dict.manifesto.pillars.map((pillar) => (
                <RevealItem key={pillar}>
                  <span
                    aria-hidden="true"
                    className="mb-3 block h-px w-10 bg-vino"
                  />
                  <span className="text-sm leading-snug text-ink">
                    {pillar}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.15}>
              <p className="eyebrow mt-12 text-ink-soft">
                {dict.manifesto.award}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
