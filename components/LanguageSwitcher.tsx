"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { langMeta, type Lang } from "@/content";

type Props = {
  current: Lang;
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Swaps the leading `/[lang]` segment while preserving the rest of the path,
 * so switching language on /es/aviso-legal lands on /en/aviso-legal rather
 * than bouncing the visitor back to the home page.
 */
export function LanguageSwitcher({
  current,
  label,
  tone = "light",
  className = "",
}: Props) {
  const pathname = usePathname() || "/";
  const rest = pathname.split("/").slice(2).join("/");
  const dark = tone === "dark";

  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center">
        {langMeta.map((lang, i) => {
          const active = lang.code === current;
          return (
            <li key={lang.code} className="flex items-center">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className={`mx-1 text-xs ${dark ? "text-crema/30" : "text-ink/25"}`}
                >
                  /
                </span>
              )}
              <Link
                href={`/${lang.code}${rest ? `/${rest}` : ""}`}
                hrefLang={lang.htmlLang}
                lang={lang.htmlLang}
                aria-current={active ? "true" : undefined}
                title={lang.label}
                className={`eyebrow inline-flex min-h-[44px] items-center px-2 transition-colors duration-200 ${
                  dark
                    ? active
                      ? "text-crema"
                      : "text-crema/75 hover:text-crema"
                    : active
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                }`}
              >
                {lang.short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
