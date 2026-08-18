import type { ReactNode } from "react";

const TONES = {
  crema: "bg-crema text-ink",
  cremaDeep: "bg-crema-deep text-ink",
  carbon: "on-dark bg-carbon text-crema",
  oliva: "on-dark bg-oliva text-crema",
} as const;

export type SectionTone = keyof typeof TONES;

export function Section({
  id,
  tone = "crema",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      // scroll-mt clears the fixed navbar when jumping to an anchor.
      className={`scroll-mt-20 py-(--spacing-section) ${TONES[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

/** Adaptive gutters: 20 → 24 → 40 → 64px as the viewport grows. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[82rem] px-5 sm:px-6 lg:px-10 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
