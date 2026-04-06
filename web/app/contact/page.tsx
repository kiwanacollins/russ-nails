import type { Metadata } from "next";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Russ Nails in Kampala for bookings, studio visits, and premium nail consultations.",
};

export default function ContactPage() {
  const primaryContactNumber = "256762267569";
  const secondaryContactNumber = "256708420038";

  const whatsappPrimaryLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? primaryContactNumber,
    "Hello Russ Nails, I would like to make a booking.",
  );

  const whatsappSecondaryLink = buildWhatsAppLink(
    secondaryContactNumber,
    "Hello Russ Nails, I would like to make a booking.",
  );

  return (
    <div className="shell py-12 sm:py-16">
      <header className="luxury-card p-8 sm:p-10">
        <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Contact + Location</p>
        <h1 className="mt-3 font-serif text-4xl text-brand-cocoa sm:text-5xl">Book Your Studio Session</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          Reach us directly for appointments, concierge recommendations, and private session
          requests. WhatsApp remains the fastest channel for same-day confirmations.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="luxury-card p-6 sm:p-8">
          <h2 className="font-serif text-3xl text-brand-cocoa">Studio Details</h2>
          <dl className="mt-6 space-y-4 text-sm leading-7 text-muted">
            <div>
              <dt className="font-semibold text-brand-cocoa">Address</dt>
              <dd>Kololo, Kampala, Uganda</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-cocoa">Phone</dt>
              <dd>
                <a href="tel:+256762267569" className="underline decoration-dotted underline-offset-2">
                  +256 762 267 569
                </a>
                {" / "}
                <a href="tel:+256708420038" className="underline decoration-dotted underline-offset-2">
                  +256 708 420 038
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-cocoa">WhatsApp</dt>
              <dd>
                <a href={whatsappPrimaryLink} target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-2">
                  +256 762 267 569
                </a>
                {" / "}
                <a href={whatsappSecondaryLink} target="_blank" rel="noreferrer" className="underline decoration-dotted underline-offset-2">
                  +256 708 420 038
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-cocoa">Email</dt>
              <dd>info@russnails.com</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-cocoa">Opening Hours</dt>
              <dd>Opens at 7:00 AM (Mon - Sat), Sunday by reservation</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappPrimaryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
            >
              Book via WhatsApp (Line 1)
            </a>
            <a
              href={whatsappSecondaryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              WhatsApp Line 2
            </a>
            <a
              href="https://maps.google.com/?q=Kololo+Kampala"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Open map
            </a>
          </div>
        </article>

        <article className="luxury-card p-6 sm:p-8">
          <h2 className="font-serif text-3xl text-brand-cocoa">Booking Notes</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
            <li>Arrive 10 minutes early for consultation and service calibration.</li>
            <li>Bridal and event packages should be reserved at least 2 weeks in advance.</li>
            <li>Product order pickups can be coordinated during your appointment window.</li>
            <li>For private after-hours sessions, request concierge confirmation on WhatsApp.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
