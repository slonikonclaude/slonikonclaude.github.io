import Link from "next/link";
import type { Dict, Lang } from "@/content";
import { photos } from "@/content/data";
import { Container, Section } from "./Section";
import { Photo } from "./Photo";
import { ImageReveal, Reveal } from "./Reveal";

export function TerrazaSection({ dict, lang }: { dict: Dict; lang: Lang }) {
  const { terraza } = dict;

  return (
    <Section id="terraza" tone="cremaDeep" labelledBy="terraza-title">
      <Container>
        <ImageReveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
            <Photo
              photo={photos.terraza}
              alt="Terraza exterior de Casa El Famós, rodeada por la huerta valenciana"
              sizes="(max-width: 1440px) 100vw, 82rem"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-carbon/10 to-transparent"
            />
          </div>
        </ImageReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-vino">{terraza.eyebrow}</p>
            <h2
              id="terraza-title"
              className="balance mt-5 text-(length:--text-display)"
            >
              {terraza.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="measure text-(length:--text-lead) leading-[1.65] text-ink-soft">
              {terraza.body}
            </p>
            <Link
              href={`/${lang}#contacto`}
              className="eyebrow mt-8 inline-flex min-h-[52px] items-center bg-ink px-8 text-crema-soft transition-colors duration-200 hover:bg-vino"
            >
              {terraza.cta}
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
