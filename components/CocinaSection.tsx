import type { Dict } from "@/content";
import { photos } from "@/content/data";
import { Container, Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Photo } from "./Photo";
import { ImageReveal, RevealGroup, RevealItem, Reveal } from "./Reveal";
import { MenuTabs } from "./MenuTabs";

export function CocinaSection({ dict }: { dict: Dict }) {
  const { cocina, carta, notices } = dict;

  return (
    <Section id="cocina" tone="crema" labelledBy="cocina-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="05"
              eyebrow={cocina.eyebrow}
              title={cocina.title}
              lead={cocina.lead}
              as="h2"
              className="[&>h2]:text-(length:--text-display)"
            />
          </div>

          <ImageReveal className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[589/442] w-full overflow-hidden">
              <Photo
                photo={photos.platos}
                alt="Arroces y paellas de Casa El Famós"
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
            </div>
          </ImageReveal>
        </div>

        <RevealGroup className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-3">
          {cocina.categories.map((category) => (
            <RevealItem key={category.title} className="bg-crema-soft">
              <div className="h-full p-8 lg:p-10">
                <h3 className="text-(length:--text-title)">{category.title}</h3>
                <p className="mt-3 text-ink-soft">{category.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* ---- Carta ---- */}
        <div id="carta" className="mt-24 scroll-mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-12">
              <div>
                <p className="eyebrow text-terracota">{carta.eyebrow}</p>
                <h3 className="mt-4 text-(length:--text-display)">
                  {carta.title}
                </h3>
              </div>
              <p className="measure-tight text-ink-soft">{carta.lead}</p>
            </div>
          </Reveal>

          <div className="mt-12">
            <MenuTabs dict={dict} />
          </div>

          <Reveal>
            <aside className="mt-14 border-l-2 border-terracota bg-crema-deep p-6 lg:p-8">
              <h4 className="eyebrow text-terracota">{notices.foodTitle}</h4>
              <p className="measure mt-3 text-sm leading-[1.75] text-ink-soft">
                {notices.food}
              </p>
            </aside>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
