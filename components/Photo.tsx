import Image from "next/image";

export type PhotoSource = {
  src: string;
  width: number;
  height: number;
};

type PhotoProps = {
  /** Pass `null` when no suitable original exists — renders a labelled TODO. */
  photo: PhotoSource | null;
  alt: string;
  /** Responsive hint. Required because every photo is rendered with `fill`. */
  sizes: string;
  className?: string;
  /** Tailwind object-position utility, e.g. "object-top". */
  position?: string;
  /** Set on the LCP image only. `priority` is deprecated in Next 16. */
  preload?: boolean;
  /** Describes what photograph should replace the placeholder. */
  todoNote?: string;
};

/**
 * The single image entry point for the whole site.
 *
 * Every photograph comes from the original elfamos.com. Where no usable
 * original exists we render an explicit placeholder rather than substituting
 * stock or generated imagery — see DESIGN.md §8. Swapping in high-resolution
 * originals later means replacing files in /public/photos and nothing else.
 */
export function Photo({
  photo,
  alt,
  sizes,
  className = "",
  position = "object-center",
  preload = false,
  todoNote,
}: PhotoProps) {
  if (!photo) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-crema-deep p-6 text-center ${className}`}
      >
        <span className="eyebrow text-vino">TODO — foto pendiente</span>
        <span className="max-w-[32ch] text-sm text-ink-soft">
          {todoNote ?? alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={photo.src}
      alt={alt}
      fill
      sizes={sizes}
      preload={preload}
      loading={preload ? "eager" : "lazy"}
      className={`object-cover ${position} ${className}`}
    />
  );
}
