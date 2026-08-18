import type { Dict } from "@/content";
import { photos, externalLinks } from "@/content/data";
import { Container, Section } from "./Section";
import { Photo } from "./Photo";
import { ImageReveal, Reveal } from "./Reveal";

export function ArtSection({ dict }: { dict: Dict }) {
  const { arte } = dict;

  return (
    <Section id="arte" tone="carbon" labelledBy="arte-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
          {/* Tall portrait — the source images are 367×551, so a portrait
              frame is the one shape that does not upscale them badly. */}
          <ImageReveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-carbon lg:aspect-[367/551]">
              <Photo
                photo={photos.interiorArte1}
                alt="Comedor de Casa El Famós con las pinturas de Vicente Navarro «El Famós» en las paredes"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ImageReveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow text-vino-soft">{arte.eyebrow}</p>
              <h2
                id="arte-title"
                className="balance mt-5 text-(length:--text-display) text-crema"
              >
                {arte.title}
              </h2>
              <p className="mt-7 font-[family-name:var(--font-display)] text-(length:--text-title) italic text-vino-soft">
                {arte.museum}
              </p>
            </Reveal>

            <div className="mt-8 space-y-6">
              {arte.paragraphs.map((paragraph, i) => (
                <Reveal key={i}>
                  <p className="measure leading-[1.8] text-crema/75">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <ImageReveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Photo
                    photo={photos.interiorArte2}
                    alt="Detalle del comedor de Casa El Famós, conocido como Museo Gastronómico"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
              </ImageReveal>

              <Reveal className="flex flex-col justify-end">
                <blockquote className="border-l border-line-dark pl-5">
                  <p className="text-sm leading-[1.8] text-crema/75">
                    {arte.literary}
                  </p>
                </blockquote>

                <a
                  href={externalLinks[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="on-dark eyebrow mt-6 inline-flex min-h-[44px] items-center gap-2 text-vino-soft transition-colors duration-200 hover:text-crema"
                >
                  {arte.linkLabel}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7v9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
