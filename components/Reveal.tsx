"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Scroll-reveal primitives. See DESIGN.md §5.
 *
 * These are deliberately NOT built on motion/react. Content must never depend
 * on an animation library having hydrated and run: with `initial={{opacity:0}}`
 * every wrapper ships as `style="opacity:0"`, so a page with slow, blocked or
 * disabled JavaScript renders blank. Here the hidden start state lives behind
 * `html.js` in CSS, so the no-JS render is fully visible and the animation is a
 * pure enhancement.
 *
 * One shared IntersectionObserver drives every element on the page, rather than
 * one observer per component.
 */

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        // `once` semantics: stop watching as soon as it has been shown.
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
  );

  return observer;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Elements already on screen at mount (deep links, restored scroll
    // positions, short pages) must not wait for an intersection change.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add("is-visible");
      return;
    }

    const io = getObserver();
    if (!io) {
      node.classList.add("is-visible");
      return;
    }

    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return ref;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds. A nudge to offset one block against its neighbour. */
  delay?: number;
};

export function Reveal({ children, className = "", delay }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

export function RevealGroup({
  children,
  className = "",
  as = "div",
  stagger,
}: RevealProps & { as?: "div" | "ol" | "ul"; stagger?: number }) {
  const ref = useReveal<HTMLElement>();
  const Tag = as;

  return (
    // The group carries `is-visible`; children inherit it via the descendant
    // selector and are offset by nth-child × --stagger.
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal-group ${className}`}
      style={
        stagger
          ? ({ "--stagger": `${stagger}s` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className = "",
  as = "div",
}: RevealProps & { as?: "div" | "li" }) {
  const Tag = as;
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

export function ImageReveal({ children, className = "" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal-image ${className}`}>
      {children}
    </div>
  );
}
