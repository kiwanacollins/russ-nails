import type { Metadata } from "next";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Russ Nails in Kampala for bookings, studio visits, and premium nail consultations.",
};

export default function ContactPage() {
  const primaryContactNumber = "256762267569";
  const secondaryContactNumber = "256708420038";
  const studioMapLink = "https://maps.google.com/?q=Kololo+Kampala";
  const heroImageUrl =
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80";

  const whatsappPrimaryLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? primaryContactNumber,
    "Hello Russ Nails, I would like to make a booking.",
  );

  const whatsappSecondaryLink = buildWhatsAppLink(
    secondaryContactNumber,
    "Hello Russ Nails, I would like to make a booking.",
  );

  return (
    <div className="pb-12 sm:pb-16 lg:pb-20">
      <section className="w-full overflow-hidden border-y border-brand-blush/70 bg-[#ead0d6] shadow-[0_30px_90px_-48px_rgba(95,68,64,0.42)]">
        <div className="grid lg:min-h-[min(88svh,54rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16 xl:px-16">
            <p className="text-xs tracking-[0.22em] text-brand-cocoa/60 uppercase">Contact + Location</p>
            <h1 className="mt-4 max-w-[11ch] font-serif text-[clamp(3rem,5.4vw,5.8rem)] leading-[0.92] tracking-[-0.04em] text-brand-cocoa sm:mt-5">
              Book Your <span className="block">Studio Session</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-cocoa/86 sm:text-base sm:leading-8">
              Reach us directly for appointments, concierge recommendations, and private session requests.
              WhatsApp remains the fastest channel for same-day confirmations.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href={whatsappPrimaryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-brand-cocoa px-7 py-4 text-xs font-semibold tracking-[0.18em] text-white! uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
              >
                Book via WhatsApp
              </a>

              <div className="hidden h-12 w-px bg-brand-cocoa/18 sm:block" />

              <div>
                <p className="text-[0.68rem] tracking-[0.22em] text-brand-cocoa/55 uppercase">Give us a call:</p>
                <a
                  href={`tel:+${primaryContactNumber}`}
                  className="mt-1 block font-serif text-2xl text-brand-cocoa transition hover:text-brand-clay"
                >
                  +256 762 267 569
                </a>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappSecondaryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/20 bg-white/40 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 hover:bg-white/60"
              >
                WhatsApp Line 2
              </a>
              <a
                href={studioMapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/20 bg-white/40 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 hover:bg-white/60"
              >
                Open Google Maps
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/35 bg-white/30 px-4 py-4 backdrop-blur-sm">
                <p className="text-[0.66rem] tracking-[0.18em] text-brand-cocoa/55 uppercase">Studio</p>
                <p className="mt-2 text-sm leading-6 text-brand-cocoa">Kololo, Kampala, Uganda</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/35 bg-white/30 px-4 py-4 backdrop-blur-sm">
                <p className="text-[0.66rem] tracking-[0.18em] text-brand-cocoa/55 uppercase">Hours</p>
                <p className="mt-2 text-sm leading-6 text-brand-cocoa">Mon - Sat, 7:00 AM to evening</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/35 bg-white/30 px-4 py-4 backdrop-blur-sm">
                <p className="text-[0.66rem] tracking-[0.18em] text-brand-cocoa/55 uppercase">Replies</p>
                <p className="mt-2 text-sm leading-6 text-brand-cocoa">Fastest on WhatsApp for same-day booking</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-96 lg:min-h-full">
            <Image
              src={heroImageUrl}
              alt="Russ Nails manicure detail in a softly lit studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-l from-black/8 via-transparent to-transparent" />

            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
              <div className="relative max-w-sm overflow-hidden rounded-3xl border border-white/45 bg-white/18 p-5 text-brand-cocoa shadow-[0_24px_80px_-42px_rgba(35,22,20,0.8)] backdrop-blur-2xl sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/40 via-white/14 to-transparent" />
                <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/45" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/20 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.18em] text-brand-cocoa uppercase shadow-[0_12px_28px_-20px_rgba(35,22,20,0.55)]">
                    <span className="h-2 w-2 rounded-full bg-brand-clay shadow-[0_0_0_4px_rgba(202,139,120,0.18)]" />
                    Kololo, Kampala
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/95">
                    Appointments welcomed in-studio and by WhatsApp. Private bookings available by request.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.2em] text-white/80 uppercase">
                    <span className="h-2 w-2 rounded-full bg-brand-gold/90" />
                    Concierge sessions available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shell mt-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="luxury-card p-6 sm:p-8 lg:p-10">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">Studio Details</p>
          <h2 className="mt-3 font-serif text-3xl text-brand-cocoa sm:text-4xl">Visit us in Kololo</h2>

          <dl className="mt-6 space-y-4 text-sm leading-7 text-muted sm:text-base">
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
                <a
                  href={whatsappPrimaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-2"
                >
                  +256 762 267 569
                </a>
                {" / "}
                <a
                  href={whatsappSecondaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-2"
                >
                  +256 708 420 038
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-cocoa">Email</dt>
              <dd>info@russnails.com</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappPrimaryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
            >
              Confirm on WhatsApp
            </a>
            <a
              href={studioMapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Open map
            </a>
          </div>
          </article>

          <article className="luxury-card bg-[#f3e5dc] p-6 sm:p-8 lg:p-10">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">Booking Notes</p>
          <h2 className="mt-3 font-serif text-3xl text-brand-cocoa sm:text-4xl">Keep your visit smooth</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-muted sm:text-base">
            <li>Arrive 10 minutes early for consultation and service calibration.</li>
            <li>Bridal and event packages should be reserved at least 2 weeks in advance.</li>
            <li>Product order pickups can be coordinated during your appointment window.</li>
            <li>For private after-hours sessions, request concierge confirmation on WhatsApp.</li>
          </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
