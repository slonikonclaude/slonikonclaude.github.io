import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tone = "light" | "dark";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  /** Section index shown as an editorial marker, e.g. "03". */
  index?: string;
  tone?: Tone;
  align?: "left" | "center";
  /** Heading level — keeps the document outline correct per section. */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  index,
  tone = "light",
  align = "left",
  as: Tag = "h2",
  className = "",
}: Props) {
  const dark = tone === "dark";

  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {(eyebrow || index) && (
        <p
          className={`eyebrow mb-5 flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          } ${dark ? "text-vino-soft" : "text-vino"}`}
        >
          {index && <span className="tnum opacity-70">{index}</span>}
          {index && eyebrow && (
            <span
              aria-hidden="true"
              className={`h-px w-8 ${dark ? "bg-line-dark" : "bg-line"}`}
            />
          )}
          {eyebrow}
        </p>
      )}

      <Tag
        className={`balance text-(length:--text-display) ${
          dark ? "text-crema" : "text-ink"
        }`}
      >
        {title}
      </Tag>

      {lead && (
        <p
          className={`measure mt-6 text-(length:--text-lead) leading-[1.6] ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-crema/75" : "text-ink-soft"}`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
