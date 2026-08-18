"use client";

import { useId, useRef, useState } from "react";
import type { Dict } from "@/content";
import { contact } from "@/content/data";
import { formDataClause } from "@/content/legal";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";

type Errors = { name?: string; phone?: string };

/**
 * Casa El Famós has no booking platform — the source site says reservations
 * are taken by phone and confirmed by phone or email. So the phone numbers are
 * the primary action, and the form composes a `mailto:` to the real contact
 * address. No backend is invented, and no third-party booking widget is
 * implied.
 */
export function ReservationCTA({ dict }: { dict: Dict }) {
  const { reserva } = dict;
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = reserva.errors.name;
    if (!phone) next.phone = reserva.errors.phone;
    setErrors(next);

    if (Object.keys(next).length > 0) {
      // Move focus to the summary so the failure is announced, per WCAG 2.2.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    const lines = [
      `${reserva.fields.name}: ${name}`,
      `${reserva.fields.phone}: ${phone}`,
      `${reserva.fields.email}: ${String(data.get("email") ?? "")}`,
      `${reserva.fields.people}: ${String(data.get("people") ?? "")}`,
      `${reserva.fields.date}: ${String(data.get("date") ?? "")}`,
      "",
      String(data.get("message") ?? ""),
    ];

    const href =
      `mailto:${contact.email}` +
      `?subject=${encodeURIComponent(`${reserva.title} — ${name}`)}` +
      `&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = href;
  };

  return (
    <Section id="reservar" tone="carbon" labelledBy="reservar-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-terracota-soft">{reserva.eyebrow}</p>
              <h2
                id="reservar-title"
                className="balance mt-5 text-(length:--text-display) text-crema"
              >
                {reserva.title}
              </h2>
              <p className="measure mt-6 leading-[1.75] text-crema/70">
                {reserva.lead}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="eyebrow text-crema/70">
                    {reserva.phoneTitle}
                  </h3>
                  <ul className="mt-3 space-y-1">
                    {contact.phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="tnum on-dark inline-flex min-h-[44px] items-center font-[family-name:var(--font-display)] text-3xl text-crema transition-colors duration-200 hover:text-terracota-soft"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow text-crema/70">
                    {reserva.mobileTitle}
                  </h3>
                  <a
                    href={contact.mobile.href}
                    className="tnum on-dark mt-2 inline-flex min-h-[44px] items-center text-xl text-crema/85 transition-colors duration-200 hover:text-terracota-soft"
                  >
                    {contact.mobile.display}
                  </a>
                </div>

                <div>
                  <h3 className="eyebrow text-crema/70">
                    {reserva.emailTitle}
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="wrap-anywhere on-dark mt-2 inline-flex min-h-[44px] items-center text-xl text-crema/85 transition-colors duration-200 hover:text-terracota-soft"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <p className="eyebrow mt-10 border-l-2 border-terracota-soft pl-4 text-crema/70">
                {dict.notices.vacation}
              </p>
            </Reveal>
          </div>

          {/* ---- Form ---- */}
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-line-dark p-6 sm:p-10">
              <h3 className="text-(length:--text-title) text-crema">
                {reserva.formTitle}
              </h3>
              <p className="mt-3 text-sm text-crema/70">{reserva.formHint}</p>

              <form onSubmit={onSubmit} noValidate className="mt-8">
                {Object.keys(errors).length > 0 && (
                  <div
                    ref={summaryRef}
                    tabIndex={-1}
                    role="alert"
                    className="mb-7 border-l-2 border-terracota-soft bg-terracota/15 p-4"
                  >
                    <ul className="space-y-1 text-sm text-crema">
                      {errors.name && (
                        <li>
                          <a href={`#${uid}-name`} className="underline">
                            {errors.name}
                          </a>
                        </li>
                      )}
                      {errors.phone && (
                        <li>
                          <a href={`#${uid}-phone`} className="underline">
                            {errors.phone}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id={`${uid}-name`}
                    name="name"
                    label={reserva.fields.name}
                    autoComplete="name"
                    required
                    requiredLabel={reserva.required}
                    error={errors.name}
                  />
                  <Field
                    id={`${uid}-phone`}
                    name="phone"
                    type="tel"
                    label={reserva.fields.phone}
                    autoComplete="tel"
                    required
                    requiredLabel={reserva.required}
                    error={errors.phone}
                  />
                  <Field
                    id={`${uid}-email`}
                    name="email"
                    type="email"
                    label={reserva.fields.email}
                    autoComplete="email"
                  />
                  <Field
                    id={`${uid}-people`}
                    name="people"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    label={reserva.fields.people}
                  />
                  <div className="sm:col-span-2">
                    <Field
                      id={`${uid}-date`}
                      name="date"
                      type="date"
                      label={reserva.fields.date}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor={`${uid}-message`}
                    className="eyebrow block text-crema/70"
                  >
                    {reserva.fields.message}
                  </label>
                  <textarea
                    id={`${uid}-message`}
                    name="message"
                    rows={4}
                    className="mt-2 w-full border border-line-dark bg-transparent px-4 py-3 text-crema outline-none transition-colors duration-200 placeholder:text-crema/30 focus:border-terracota-soft"
                  />
                </div>

                <button
                  type="submit"
                  className="eyebrow mt-8 inline-flex min-h-[52px] w-full items-center justify-center bg-terracota px-9 text-crema-soft transition-colors duration-200 hover:bg-terracota-soft sm:w-auto"
                >
                  {reserva.submit}
                </button>

                <p className="mt-4 text-sm text-crema/70">
                  {reserva.submitNote}
                </p>

                <details className="mt-8 border-t border-line-dark pt-5">
                  <summary className="eyebrow cursor-pointer text-crema/70 transition-colors duration-200 hover:text-crema">
                    {reserva.dataClauseTitle}
                  </summary>
                  <p className="mt-4 text-xs leading-[1.8] text-crema/70">
                    {formDataClause}
                  </p>
                </details>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  requiredLabel,
  error,
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  requiredLabel?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-crema/70">
        {label}
        {required && (
          <span className="ml-1 text-terracota-soft">
            *<span className="sr-only"> ({requiredLabel})</span>
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 h-[52px] w-full border bg-transparent px-4 text-crema outline-none transition-colors duration-200 focus:border-terracota-soft ${
          error ? "border-terracota-soft" : "border-line-dark"
        }`}
        {...rest}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm text-terracota-soft">
          {error}
        </p>
      )}
    </div>
  );
}
