"use client";

import Link from "next/link";
import { useRef, type RefObject } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Dict, Lang } from "@/content";
import { contact } from "@/content/data";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useDialog } from "@/lib/useDialog";

type Props = {
  open: boolean;
  onClose: () => void;
  returnFocusTo: RefObject<HTMLElement | null>;
  lang: Lang;
  dict: Dict;
  links: { href: string; label: string }[];
};

export function MobileMenu({
  open,
  onClose,
  returnFocusTo,
  lang,
  dict,
  links,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useDialog({ open, onClose, containerRef: panelRef, returnFocusTo });

  // Unmounted outright when closed rather than driven by AnimatePresence.
  // Dismissal is instant (an overlay vanishing immediately reads as
  // responsive), and — more importantly — removal of a modal from the DOM
  // never depends on an exit animation reaching its end. Enter still animates.
  if (!open) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] lg:hidden"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={dict.a11y.mainNav}
            className="on-dark flex h-[100dvh] w-full flex-col bg-carbon px-5 pb-8 pt-5 sm:px-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-display)] text-lg text-crema">
                Casa El Famós
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={dict.a11y.closeMenu}
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

            <nav
              aria-label={dict.a11y.mainNav}
              className="mt-10 flex-1 overflow-y-auto"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href} className="border-b border-line-dark">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block py-4 font-[family-name:var(--font-display)] text-3xl text-crema transition-colors duration-200 hover:text-terracota-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-3">
                {contact.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="tnum block text-lg text-crema/80 transition-colors duration-200 hover:text-crema"
                  >
                    {phone.display}
                  </a>
                ))}
                <a
                  href={`mailto:${contact.email}`}
                  className="wrap-anywhere block text-lg text-crema/80 transition-colors duration-200 hover:text-crema"
                >
                  {contact.email}
                </a>
              </div>
            </nav>

            <div className="mt-8 flex items-center justify-between border-t border-line-dark pt-5">
              <LanguageSwitcher
                current={lang}
                label={dict.a11y.langLabel}
                tone="dark"
              />
              <Link
                href={`/${lang}#reservar`}
                onClick={onClose}
                className="eyebrow inline-flex min-h-[44px] items-center bg-terracota px-6 text-crema-soft transition-colors duration-200 hover:bg-terracota-soft"
              >
                {dict.nav.reservar}
              </Link>
            </div>
      </div>
    </motion.div>
  );
}
