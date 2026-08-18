"use client";

import { useRef, useState } from "react";
import type { Dict } from "@/content";
import { Photo } from "./Photo";
import { Lightbox, type GalleryItem } from "./Lightbox";
import { RevealGroup, RevealItem } from "./Reveal";

/**
 * Tiles are <button>s, not clickable divs, so they are keyboard-operable and
 * announced correctly. The tile that opened the lightbox receives focus back
 * when it closes.
 */
export function ImageGallery({
  items,
  dict,
}: {
  items: GalleryItem[];
  dict: Dict;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeTrigger = useRef<HTMLButtonElement | null>(null);

  const openAt = (index: number) => {
    activeTrigger.current = triggerRefs.current[index] ?? null;
    setOpen(index);
  };

  return (
    <>
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <RevealItem key={item.photo.src + index}>
            <button
              ref={(node) => {
                triggerRefs.current[index] = node;
              }}
              type="button"
              onClick={() => openAt(index)}
              aria-label={`${dict.a11y.enlarge}: ${item.alt}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden bg-crema-deep"
            >
              <Photo
                photo={item.photo}
                alt={item.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-carbon/0 transition-colors duration-300 group-hover:bg-carbon/20"
              />
              {item.caption && (
                <span className="eyebrow absolute bottom-0 left-0 right-0 bg-gradient-to-t from-carbon/80 to-transparent px-4 pb-3 pt-8 text-left text-crema">
                  {item.caption}
                </span>
              )}
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <Lightbox
        items={items}
        index={open}
        onClose={() => setOpen(null)}
        onNavigate={setOpen}
        returnFocusTo={activeTrigger}
        labels={{
          close: dict.a11y.close,
          prev: dict.a11y.prev,
          next: dict.a11y.next,
          counter: dict.a11y.imageCounter,
        }}
      />
    </>
  );
}
