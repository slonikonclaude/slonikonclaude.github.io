"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

type Options = {
  open: boolean;
  onClose: () => void;
  /** The dialog container. */
  containerRef: RefObject<HTMLElement | null>;
  /** Element that opened the dialog; focus goes back here on close. */
  returnFocusTo?: RefObject<HTMLElement | null>;
};

/**
 * Modal behaviour shared by the mobile menu and the lightbox:
 * Escape closes, Tab is trapped inside, background scroll is locked, and focus
 * returns to the trigger. Written once so the two dialogs cannot drift apart.
 */
export function useDialog({
  open,
  onClose,
  containerRef,
  returnFocusTo,
}: Options) {
  // Escape + focus trap
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const container = containerRef.current;
      if (!container) return;

      const items = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, containerRef]);

  // Scroll lock. Compensates for the scrollbar so the page doesn't shift.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  // Move focus in on open, and back to the trigger on close.
  useEffect(() => {
    if (!open) return;
    const container = containerRef.current;
    const target = container?.querySelector<HTMLElement>(FOCUSABLE);
    target?.focus();

    const trigger = returnFocusTo?.current;
    return () => trigger?.focus();
  }, [open, containerRef, returnFocusTo]);
}
