"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, type RefObject } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { PhotoSource } from "./Photo";
import { useDialog } from "@/lib/useDialog";

export type GalleryItem = {
  photo: PhotoSource;
  alt: string;
  caption?: string;
};

type Props = {
  items: GalleryItem[];
  /** Index of the open item, or null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  returnFocusTo: RefObject<HTMLElement | null>;
  labels: {
    close: string;
    prev: string;
    next: string;
    /** Template containing {n} and {total}. */
    counter: string;
  };
};

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
  returnFocusTo,
  labels,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const open = index !== null;

  useDialog({ open, onClose, containerRef: panelRef, returnFocusTo });

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, go]);

  const current = index === null ? null : items[index];

  // Unmounted outright when closed, for the same reason as MobileMenu: a
  // full-screen overlay must not depend on an exit animation completing in
  // order to stop covering the page. All hooks above run unconditionally, so
  // this early return is safe.
  if (!open || !current) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[70]"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
    >
          {/* Scrim doubles as a click-to-dismiss target. */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={onClose}
            className="absolute inset-0 h-full w-full cursor-default bg-carbon/95"
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="on-dark relative flex h-[100dvh] flex-col px-4 pb-6 pt-4 sm:px-8 sm:pb-10 sm:pt-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="tnum eyebrow text-crema/70">
                {labels.counter
                  .replace("{n}", String(index + 1))
                  .replace("{total}", String(items.length))}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label={labels.close}
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-crema"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="relative mt-4 flex min-h-0 flex-1 items-center justify-center">
              <Image
                key={current.photo.src}
                src={current.photo.src}
                alt={current.alt}
                width={current.photo.width}
                height={current.photo.height}
                sizes="100vw"
                className="max-h-full w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={labels.prev}
                className="inline-flex h-12 w-12 items-center justify-center border border-line-dark text-crema transition-colors duration-200 hover:border-crema"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M15 5l-7 7 7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {current.caption && (
                <p className="min-w-0 flex-1 text-center text-sm text-crema/70">
                  {current.caption}
                </p>
              )}

              <button
                type="button"
                onClick={() => go(1)}
                aria-label={labels.next}
                className="inline-flex h-12 w-12 items-center justify-center border border-line-dark text-crema transition-colors duration-200 hover:border-crema"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
        </div>
      </div>
    </motion.div>
  );
}
