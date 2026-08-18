import type { Dict } from "@/content";
import { photos } from "@/content/data";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "./Reveal";
import { ImageGallery } from "./ImageGallery";
import type { GalleryItem } from "./Lightbox";

export function EspacioSection({ dict }: { dict: Dict }) {
  const { espacio } = dict;

  /** Every entry is an original photograph from elfamos.com. */
  const gallery: GalleryItem[] = [
    {
      photo: photos.interiorArte1,
      alt: "Comedor de Casa El Famós con pinturas de Vicente Navarro «El Famós»",
      caption: espacio.items[0].title,
    },
    {
      photo: photos.interiorArte2,
      alt: "Interior del comedor de Casa El Famós, el Museo Gastronómico",
      caption: espacio.items[0].title,
    },
    {
      photo: photos.terraza,
      alt: "Terraza exterior de Casa El Famós rodeada por la huerta valenciana",
      caption: espacio.items[1].title,
    },
    {
      photo: photos.platos,
      alt: "Arroces y paellas servidos en Casa El Famós",
      caption: dict.cocina.categories[0].title,
    },
    {
      photo: photos.bodega,
      alt: "Selección de vinos de la bodega de Casa El Famós",
      caption: dict.bodega.title,
    },
    {
      photo: photos.entorno,
      alt: "Entorno de Casa El Famós, junto a la Ermita de Vera",
      caption: espacio.items[2].title,
    },
  ];

  return (
    <Section id="espacio" tone="crema" labelledBy="espacio-title">
      <Container>
        <SectionHeading
          index="09"
          eyebrow={espacio.eyebrow}
          title={espacio.title}
          lead={espacio.lead}
        />

        <RevealGroup className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {espacio.items.map((item) => (
            <RevealItem key={item.title}>
              <span
                aria-hidden="true"
                className="mb-4 block h-px w-12 bg-vino"
              />
              <h3 className="text-(length:--text-title)">{item.title}</h3>
              <p className="mt-3 text-ink-soft">{item.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-10">
              <h3 className="text-(length:--text-title)">
                {espacio.galleryTitle}
              </h3>
              <p className="eyebrow text-ink-soft">{espacio.galleryHint}</p>
            </div>
          </Reveal>

          <ImageGallery items={gallery} dict={dict} />
        </div>
      </Container>
    </Section>
  );
}
