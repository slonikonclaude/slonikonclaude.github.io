"use client";

import { useState } from "react";
import type { Dict } from "@/content";
import { photos, wineRegions } from "@/content/data";
import { Container, Section } from "./Section";
import { Photo } from "./Photo";
import { ImageReveal, Reveal, RevealGroup, RevealItem } from "./Reveal";

/**
 * Only the wines actually listed on bodega.html appear here. The "+200
 * referencias" figure is the restaurant's own claim, quoted as such; the named
 * bottles are the ones the source calls out ("Destacamos las siguientes
 * referencias"). Nothing is added to pad the list.
 */
export function WineSection({ dict }: { dict: Dict }) {
  const [region, setRegion] = useState<string>("all");
  const { bodega } = dict;

  const shown =
    region === "all"
      ? wineRegions
      : wineRegions.filter((item) => item.id === region);

  return (
    <Section id="bodega" tone="oliva" labelledBy="bodega-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-terracota-pale">{bodega.eyebrow}</p>
              <h2
                id="bodega-title"
                className="mt-5 text-(length:--text-display) text-crema"
              >
                {bodega.title}
              </h2>

              <p className="tnum mt-10 font-[family-name:var(--font-display)] text-[clamp(3.5rem,10vw,7rem)] leading-none text-crema">
                {bodega.stat}
              </p>
              <p className="measure-tight mt-3 text-crema/80">
                {bodega.statLabel}
              </p>

              <p className="measure mt-8 leading-[1.8] text-crema/80">
                {bodega.lead}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-12 border-l border-line-dark pl-6">
                <p className="font-[family-name:var(--font-display)] text-(length:--text-title) italic leading-snug text-crema/90">
                  “{bodega.quote}”
                </p>
                <footer className="eyebrow mt-4 text-terracota-pale">
                  {bodega.quoteAuthor}
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <ImageReveal className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[582/326] w-full overflow-hidden lg:aspect-[3/4]">
              <Photo
                photo={photos.bodega}
                alt="Bodega de Casa El Famós con su selección de vinos"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </ImageReveal>
        </div>

        {/* ---- Referencias ---- */}
        <div className="mt-20 border-t border-line-dark pt-12">
          <Reveal>
            <p className="eyebrow text-crema/80">{bodega.highlight}</p>
          </Reveal>

          <div
            role="group"
            aria-label={dict.a11y.wineFilter}
            className="rail -mx-5 mt-6 flex snap-x gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            <FilterButton
              active={region === "all"}
              onClick={() => setRegion("all")}
            >
              {bodega.allLabel}
            </FilterButton>
            {wineRegions.map((item) => (
              <FilterButton
                key={item.id}
                active={region === item.id}
                onClick={() => setRegion(item.id)}
              >
                {item.name}
              </FilterButton>
            ))}
          </div>

          <RevealGroup className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((item) => (
              <RevealItem key={item.id}>
                <h3 className="font-[family-name:var(--font-display)] text-(length:--text-title) text-crema">
                  {item.name}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {item.wines.map((wine) => (
                    <li
                      key={wine}
                      className="border-b border-line-dark pb-2.5 text-crema/80"
                    >
                      {wine}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`eyebrow inline-flex min-h-[44px] shrink-0 snap-start items-center border px-5 transition-colors duration-200 ${
        active
          ? "border-crema bg-crema text-oliva"
          : "border-line-dark text-crema/80 hover:border-crema/60 hover:text-crema"
      }`}
    >
      {children}
    </button>
  );
}
