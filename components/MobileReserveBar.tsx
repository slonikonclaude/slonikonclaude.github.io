"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict, Lang } from "@/content";
import { contact } from "@/content/data";

/**
 * Persistent reservation action on mobile. Desktop keeps the CTA in the sticky
 * navbar instead, so this is hidden from `lg` up.
 *
 * It appears only after the hero has scrolled past, so it never covers the
 * hero's own CTAs, and it hides while a text field is focused so it cannot sit
 * on top of the keyboard-focused input (WCAG 2.2 "focus not obscured").
 */
export function MobileReserveBar({ lang, dict }: { lang: Lang; dict: Dict }) {
  const [visible, setVisible] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isField = (target: EventTarget | null) =>
      target instanceof HTMLElement &&
      ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);

    const onFocusIn = (e: FocusEvent) => isField(e.target) && setTyping(true);
    const onFocusOut = (e: FocusEvent) => isField(e.target) && setTyping(false);

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const hidden = !visible || typing;

  return (
    <div
      // `inert` keeps the hidden bar out of the tab order entirely.
      inert={hidden}
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-carbon/95 backdrop-blur-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch gap-px bg-line-dark">
        <a
          href={contact.phones[0].href}
          className="on-dark flex min-h-[56px] flex-1 items-center justify-center gap-2 bg-carbon px-4 text-crema"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path
              d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="eyebrow">{dict.contacto.phoneTitle}</span>
        </a>

        <Link
          href={`/${lang}#reservar`}
          className="eyebrow flex min-h-[56px] flex-[1.4] items-center justify-center bg-terracota px-4 text-crema-soft"
        >
          {dict.nav.reservarLong}
        </Link>
      </div>
    </div>
  );
}
