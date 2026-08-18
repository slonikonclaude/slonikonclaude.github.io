"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dict, Lang } from "@/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function navLinks(lang: Lang, dict: Dict) {
  return [
    { href: `/${lang}#historia`, label: dict.nav.historia },
    { href: `/${lang}#cocina`, label: dict.nav.cocina },
    { href: `/${lang}#bodega`, label: dict.nav.bodega },
    { href: `/${lang}#espacio`, label: dict.nav.espacio },
    { href: `/${lang}#contacto`, label: dict.nav.contacto },
  ];
}

type Props = {
  lang: Lang;
  dict: Dict;
};

export function Navbar({ lang, dict }: Props) {
  const pathname = usePathname() || "/";
  // Only the home route has a dark hero behind the bar. Sub-pages (legal)
  // start solid, otherwise the pale links would sit on a pale background.
  const overHero = pathname.replace(/\/$/, "").split("/").length <= 2;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const links = navLinks(lang, dict);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const solid = !overHero || scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
          solid
            ? "border-b border-line bg-crema/95 py-3 backdrop-blur-sm"
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[82rem] items-center justify-between gap-4 px-5 sm:px-6 lg:px-10 xl:px-16">
          <Link
            href={`/${lang}`}
            className={`inline-flex min-h-[44px] items-center font-[family-name:var(--font-display)] text-lg leading-none tracking-tight transition-colors duration-300 sm:text-xl ${
              solid ? "text-ink" : "text-crema"
            }`}
          >
            Casa El Famós
          </Link>

          <nav
            aria-label={dict.a11y.mainNav}
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-[44px] items-center text-sm transition-colors duration-200 ${
                  solid
                    ? "text-ink-soft hover:text-terracota"
                    : "text-crema/80 hover:text-crema"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher
              current={lang}
              label={dict.a11y.langLabel}
              tone={solid ? "light" : "dark"}
              className="hidden sm:block"
            />

            <Link
              href={`/${lang}#reservar`}
              className={`eyebrow hidden min-h-[44px] items-center px-6 transition-colors duration-200 lg:inline-flex ${
                solid
                  ? "bg-terracota text-crema-soft hover:bg-ink"
                  : "bg-crema text-ink hover:bg-terracota hover:text-crema-soft"
              }`}
            >
              {dict.nav.reservar}
            </Link>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={dict.a11y.openMenu}
              aria-expanded={menuOpen}
              className={`-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden ${
                solid ? "text-ink" : "text-crema"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusTo={triggerRef}
        lang={lang}
        dict={dict}
        links={links}
      />
    </>
  );
}
