import type { Dict } from "@/content";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";
import { Timeline } from "./Timeline";

export function StorySection({ dict }: { dict: Dict }) {
  const { historia } = dict;

  return (
    <Section id="historia" tone="cremaDeep" labelledBy="historia-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Editorial era marker. Sticks alongside the prose on desktop. */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-terracota">{historia.eyebrow}</p>
                <p
                  aria-hidden="true"
                  className="mt-4 font-[family-name:var(--font-display)] text-[clamp(4rem,12vw,9rem)] leading-[0.85] text-ink/15"
                >
                  {historia.era}
                </p>
                <p className="eyebrow mt-4 text-ink-soft">{historia.eraNote}</p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <h2
                id="historia-title"
                className="balance text-(length:--text-display)"
              >
                {historia.title}
              </h2>
            </Reveal>

            <div className="mt-9 space-y-6">
              {historia.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i === 0 ? 0 : 0.05}>
                  <p
                    className={`measure leading-[1.8] ${
                      i === 0
                        ? "text-(length:--text-lead) text-ink"
                        : "text-ink-soft"
                    }`}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="eyebrow mt-8 text-ink-soft">
                — {historia.signature}
              </p>
            </Reveal>

            <div className="mt-16 border-t border-line pt-12">
              <Timeline
                entries={historia.timeline}
                title={historia.timelineTitle}
                titleId="timeline-title"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
