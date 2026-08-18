/**
 * Dish names are proper nouns and are never translated — the original site
 * kept them in Spanish/Valencian on its English page too. No prices or
 * ingredient descriptions exist on the source site, so none are shown.
 */
export function DishList({ dishes }: { dishes: readonly string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
      {dishes.map((dish) => (
        <li
          key={dish}
          className="flex items-baseline gap-4 border-b border-line py-4 last:border-b-0 sm:last:border-b"
        >
          <span
            aria-hidden="true"
            className="h-1 w-1 shrink-0 translate-y-[-0.2em] rounded-full bg-terracota"
          />
          <span className="min-w-0 text-(length:--text-lead) leading-snug text-ink">
            {dish}
          </span>
        </li>
      ))}
    </ul>
  );
}
