import type { Dict } from "@/content";
import {
  contact,
  externalLinks,
  mapsDirectionsHref,
  mapsEmbedSrc,
} from "@/content/data";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";

export function ContactSection({ dict }: { dict: Dict }) {
  const { contacto } = dict;

  return (
    <Section id="contacto" tone="crema" labelledBy="contacto-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-terracota">{contacto.eyebrow}</p>
              <h2
                id="contacto-title"
                className="balance mt-5 text-(length:--text-display)"
              >
                {contacto.title}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 space-y-9">
                <div>
                  <dt className="eyebrow text-ink-soft">
                    {contacto.addressTitle}
                  </dt>
                  <dd className="mt-2">
                    <address className="not-italic text-(length:--text-lead) leading-relaxed text-ink">
                      {contact.street}
                      <br />
                      {contact.postalCode} {contact.city}
                    </address>
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow text-ink-soft">
                    {contacto.phoneTitle}
                  </dt>
                  <dd className="mt-2 flex flex-col">
                    {[...contact.phones, contact.mobile].map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="tnum inline-flex min-h-[44px] items-center text-(length:--text-lead) text-ink transition-colors duration-200 hover:text-terracota"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow text-ink-soft">
                    {contacto.emailTitle}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="wrap-anywhere inline-flex min-h-[44px] items-center text-(length:--text-lead) text-ink transition-colors duration-200 hover:text-terracota"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="eyebrow text-ink-soft">
                    {contacto.accessTitle}
                  </dt>
                  <dd className="mt-2 text-sm text-ink-soft">
                    <span className="tnum">
                      {contact.statedCoordinates.lat} /{" "}
                      {contact.statedCoordinates.lon}
                    </span>
                    <span className="mt-1 block text-xs">
                      {contacto.coordsLabel}
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={mapsDirectionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow inline-flex min-h-[52px] items-center bg-ink px-8 text-crema-soft transition-colors duration-200 hover:bg-terracota"
                >
                  {contacto.directions}
                </a>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow inline-flex min-h-[52px] items-center border border-line px-8 text-ink transition-colors duration-200 hover:border-ink"
                >
                  {contacto.social}
                </a>
              </div>

              <div className="mt-12 border-t border-line pt-8">
                <h3 className="eyebrow text-ink-soft">{contacto.linksTitle}</h3>
                <ul className="mt-3">
                  {externalLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wrap-anywhere inline-flex min-h-[44px] items-center text-ink-soft underline underline-offset-4 transition-colors duration-200 hover:text-terracota"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-line lg:aspect-auto lg:h-full lg:min-h-[32rem]">
              <iframe
                title={contacto.mapTitle}
                src={mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
