"use client";

import { useRef, useState } from "react";
import type { Dict } from "@/content";
import { menu, type MenuCategoryId } from "@/content/data";
import { DishList } from "./DishList";

const ORDER: MenuCategoryId[] = ["paellas", "arroces", "especialidades"];

/**
 * A real ARIA tabs widget: arrow keys move between tabs, Home/End jump to the
 * ends, and only the active tab is in the tab order. The strip scrolls
 * horizontally with snap points on narrow screens instead of wrapping into a
 * cramped two-line grid.
 */
export function MenuTabs({ dict }: { dict: Dict }) {
  const [active, setActive] = useState<MenuCategoryId>("paellas");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusTab = (id: MenuCategoryId) => {
    setActive(id);
    tabRefs.current[id]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const index = ORDER.indexOf(active);
    let next: number | null = null;

    if (event.key === "ArrowRight") next = (index + 1) % ORDER.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + ORDER.length) % ORDER.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = ORDER.length - 1;

    if (next !== null) {
      event.preventDefault();
      focusTab(ORDER[next]);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={dict.a11y.menuTabs}
        onKeyDown={onKeyDown}
        className="rail -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {ORDER.map((id) => {
          const selected = id === active;
          return (
            <button
              key={id}
              ref={(node) => {
                tabRefs.current[id] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={selected}
              aria-controls={`panel-${id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(id)}
              className={`eyebrow inline-flex min-h-[48px] shrink-0 snap-start items-center border px-6 transition-colors duration-200 ${
                selected
                  ? "border-vino bg-vino text-crema-soft"
                  : "border-line bg-transparent text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {dict.carta.tabs[id]}
            </button>
          );
        })}
      </div>

      {/* CSS animation keyed to the remount, not a JS one. The dish list is the
          single most important content on the page, so its visibility must not
          depend on an animation library having hydrated and run — `.panel-in`
          has no fill-mode, leaving the resting state fully visible. */}
      <div className="mt-10">
        <div
          key={active}
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          tabIndex={0}
          className="panel-in"
        >
          <p className="eyebrow mb-6 text-ink-soft">
            <span className="tnum">{menu[active].length}</span>{" "}
            {dict.carta.countLabel}
          </p>
          <DishList dishes={menu[active]} />
        </div>
      </div>
    </div>
  );
}
