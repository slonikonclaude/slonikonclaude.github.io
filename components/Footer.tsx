import Link from "next/link";
import type { Dict, Lang } from "@/content";
import { contact, paymentMethods } from "@/content/data";
import { Container } from "./Section";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ lang, dict }: { lang: Lang; dict: Dict }) {
  const nav = [
    { href: `/${lang}#historia`, label: dict.nav.historia },
    { href: `/${lang}#cocina`, label: dict.nav.cocina },
    { href: `/${lang}#bodega`, label: dict.nav.bodega },
    { href: `/${lang}#espacio`, label: dict.nav.espacio },
    { href: `/${lang}#contacto`, label: dict.nav.contacto },
  ];

  const legal = [
    { href: `/${lang}/aviso-legal`, label: dict.legal.aviso },
    { href: `/${lang}/privacidad`, label: dict.legal.privacidad },
    { href: `/${lang}/cookies`, label: dict.legal.cookies },
  ];

  return (
    <footer className="on-dark bg-carbon pb-16 pt-20 text-crema">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-[family-name:var(--font-display)] text-3xl leading-none">
              Casa El Famós
            </p>
            <p className="measure-tight mt-4 text-crema/70">
              {dict.footer.tagline}
            </p>
            <address className="mt-7 not-italic leading-relaxed text-crema/70">
              {contact.street}
              <br />
              {contact.postalCode} {contact.city}
            </address>
          </div>

          <nav
            aria-label={dict.footer.navTitle}
            className="lg:col-span-3 lg:col-start-6"
          >
            <h2 className="eyebrow text-crema/70">{dict.footer.navTitle}</h2>
            <ul className="mt-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-crema/75 transition-colors duration-200 hover:text-vino-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Spans must total 12 INCLUDING the empty column 5 that col-start-6
              leaves: 4 + 1 gap + 3 + 2 + 2. A 3 here made it 13 and wrapped the
              Legal column onto its own row. */}
          <div className="lg:col-span-2">
            <h2 className="eyebrow text-crema/70">{dict.footer.contactTitle}</h2>
            <ul className="mt-4">
              {[...contact.phones, contact.mobile].map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="tnum inline-flex min-h-[44px] items-center text-crema/75 transition-colors duration-200 hover:text-vino-soft"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="wrap-anywhere inline-flex min-h-[44px] items-center text-crema/75 transition-colors duration-200 hover:text-vino-soft"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-crema/75 transition-colors duration-200 hover:text-vino-soft"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-crema/70">{dict.footer.legalTitle}</h2>
            <ul className="mt-4">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-crema/75 transition-colors duration-200 hover:text-vino-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="sr-only">{dict.footer.langTitle}</h2>
            <LanguageSwitcher
              current={lang}
              label={dict.a11y.langLabel}
              tone="dark"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h2 className="eyebrow text-crema/70">
              {dict.footer.paymentTitle}
            </h2>
            <ul className="flex flex-wrap gap-x-3 text-sm text-crema/70">
              {paymentMethods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-crema/70">
          © {new Date().getFullYear()} {contact.legalName}. {dict.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
