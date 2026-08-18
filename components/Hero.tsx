import Link from "next/link";
import type { Dict, Lang } from "@/content";
import { photos } from "@/content/data";
import { Photo } from "./Photo";

/**
 * Server component on purpose: no "use client", no motion.
 *
 * The entrance is pure CSS (see globals.css → hero-rise). That keeps the
 * headline paintable on the very first frame — it is the LCP element — and
 * means the hero still reads correctly with JavaScript disabled or slow.
 * `prefers-reduced-motion` is honoured in the stylesheet.
 */
export function Hero({ lang, dict }: { lang: Lang; dict: Dict }) {
  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-carbon"
      aria-labelledby="hero-title"
    >
      {/* Paellas over an open orange-wood fire — the restaurant's signature and
          the brief's stated preference for the hero. It is the darkest, highest
          contrast original available, so the inevitable upscaling reads far
          less than it would on the flat daylight terrace shot. */}
      <div className="absolute inset-0 -z-10">
        <Photo
          photo={photos.platos}
          alt={dict.meta.ogAlt}
          sizes="100vw"
          preload
        />
      </div>

      {/* Scrim tuned to this photograph rather than a blanket opacity. */}
      <div
        aria-hidden="true"
        className="grain absolute inset-0 -z-10 bg-gradient-to-b from-carbon/75 via-carbon/60 to-carbon/90"
      />

      <div className="mx-auto w-full max-w-[82rem] px-5 pb-28 pt-32 sm:px-6 lg:px-10 xl:px-16">
        <p className="eyebrow hero-rise text-crema/80">{dict.hero.name}</p>

        <h1
          id="hero-title"
          className="hero-rise-lcp mt-6 max-w-[16ch] text-(length:--text-hero) text-crema"
        >
          {dict.hero.titleA}{" "}
          <span className="block italic text-crema/90">{dict.hero.titleB}</span>
        </h1>

        <p
          className="hero-rise mt-8 max-w-[38ch] text-(length:--text-lead) leading-[1.6] text-crema/85"
          style={{ animationDelay: "0.18s" }}
        >
          {dict.hero.subtitleA}
          <br className="hidden sm:block" /> {dict.hero.subtitleB}
        </p>

        <div
          className="hero-rise mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href={`/${lang}#carta`}
            className="eyebrow inline-flex min-h-[52px] items-center justify-center bg-crema px-9 text-ink transition-colors duration-200 hover:bg-vino hover:text-crema-soft"
          >
            {dict.hero.ctaPrimary}
          </Link>
          <Link
            href={`/${lang}#historia`}
            className="eyebrow on-dark inline-flex min-h-[52px] items-center justify-center border border-crema/40 px-9 text-crema transition-colors duration-200 hover:border-crema hover:bg-crema/10"
          >
            {dict.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll cue — a real link, so it is keyboard reachable. */}
      <div
        className="hero-rise pointer-events-none absolute inset-x-0 bottom-7 hidden justify-center sm:flex"
        style={{ animationDelay: "0.5s" }}
      >
        <Link
          href={`/${lang}#manifiesto`}
          className="on-dark pointer-events-auto inline-flex flex-col items-center gap-2 text-crema/75 transition-colors duration-200 hover:text-crema"
        >
          <span className="eyebrow">{dict.hero.scroll}</span>
          <span aria-hidden="true" className="scroll-cue block h-10 w-px bg-current" />
        </Link>
      </div>
    </section>
  );
}
