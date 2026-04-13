import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
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
        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="relative overflow-hidden rounded-3xl border border-brand-cocoa/10 bg-linear-to-br from-[#fffdf8] via-[#fff9f4] to-[#f3e6dc] p-5 shadow-[0_24px_90px_-52px_rgba(95,68,64,0.48)] sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,139,120,0.14),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(156,122,79,0.1),transparent_32%)]" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">Studio Details</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-cocoa/10 bg-white/60 px-3 py-1 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa/70 uppercase shadow-[0_10px_24px_-18px_rgba(95,68,64,0.45)]">
                  <Clock3 className="h-3.5 w-3.5 text-brand-clay" />
                  Same-day replies
                </span>
              </div>

              <h2 className="mt-3 font-serif text-3xl text-brand-cocoa sm:text-4xl">Visit us in Kololo</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                We welcome scheduled visits, quick questions, and pre-booking consultations.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/75 bg-white/70 p-3.5 shadow-[0_16px_40px_-30px_rgba(95,68,64,0.5)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa/60 uppercase">
                    <MapPin className="h-4 w-4 text-brand-clay" />
                    Address
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-cocoa">Kololo, Kampala, Uganda</p>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/70 p-3.5 shadow-[0_16px_40px_-30px_rgba(95,68,64,0.5)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa/60 uppercase">
                    <Phone className="h-4 w-4 text-brand-clay" />
                    Phone
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-cocoa">
                    <a href="tel:+256762267569" className="transition hover:text-brand-clay">
                      +256 762 267 569
                    </a>
                    <span className="mx-2 text-brand-cocoa/35">/</span>
                    <a href="tel:+256708420038" className="transition hover:text-brand-clay">
                      +256 708 420 038
                    </a>
                  </p>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/70 p-3.5 shadow-[0_16px_40px_-30px_rgba(95,68,64,0.5)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa/60 uppercase">
                    <MessageCircle className="h-4 w-4 text-brand-clay" />
                    WhatsApp
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-cocoa">
                    <a
                      href={whatsappPrimaryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-brand-clay"
                    >
                      +256 762 267 569
                    </a>
                    <span className="mx-2 text-brand-cocoa/35">/</span>
                    <a
                      href={whatsappSecondaryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-brand-clay"
                    >
                      +256 708 420 038
                    </a>
                  </p>
                </div>

                <div className="rounded-2xl border border-white/75 bg-white/70 p-3.5 shadow-[0_16px_40px_-30px_rgba(95,68,64,0.5)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa/60 uppercase">
                    <Mail className="h-4 w-4 text-brand-clay" />
                    Email
                  </div>
                  <p className="mt-2 text-sm leading-6 text-brand-cocoa">info@russnails.com</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappPrimaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
                >
                  Confirm on WhatsApp
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={studioMapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/20 bg-white/70 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Open map
                </a>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-brand-cocoa/10 bg-white/55 shadow-[0_18px_42px_-28px_rgba(95,68,64,0.42)] backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3 border-b border-brand-cocoa/10 px-4 py-3 sm:px-5">
                  <div>
                    <p className="text-[0.64rem] tracking-[0.18em] text-brand-cocoa/55 uppercase">Studio map</p>
                    <p className="mt-1 text-sm font-medium text-brand-cocoa">Find us in Kololo, Kampala</p>
                  </div>
                  <a
                    href={studioMapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-brand-cocoa/15 bg-white px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 hover:bg-brand-blush/40"
                  >
                    Open full map
                  </a>
                </div>
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="Russ Nails studio map"
                    src="https://www.google.com/maps?q=Kololo,+Kampala,+Uganda&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-brand-cocoa/10 bg-linear-to-br from-[#f7efe8] via-[#fcf8f4] to-[#f2e0d4] p-5 shadow-[0_24px_90px_-52px_rgba(95,68,64,0.42)] sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(202,139,120,0.12),transparent_36%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa/70 uppercase ring-1 ring-brand-cocoa/10">
                <CalendarDays className="h-3.5 w-3.5 text-brand-clay" />
                Booking Notes
              </div>

              <h2 className="mt-4 font-serif text-3xl text-brand-cocoa sm:text-4xl">Keep your visit smooth</h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                A few details help us prepare your service and keep the appointment calm and on time.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="flex gap-3 rounded-2xl border border-white/75 bg-white/62 p-3.5 shadow-[0_16px_36px_-28px_rgba(95,68,64,0.45)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cocoa text-[0.64rem] font-semibold tracking-[0.16em] text-white">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-cocoa">Arrive early</h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      Arrive 10 minutes early so we can settle your consultation and service calibration.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-white/75 bg-white/62 p-3.5 shadow-[0_16px_36px_-28px_rgba(95,68,64,0.45)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cocoa text-[0.64rem] font-semibold tracking-[0.16em] text-white">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-cocoa">Reserve in advance</h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      Bridal and event packages should be reserved at least 2 weeks ahead.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-white/75 bg-white/62 p-3.5 shadow-[0_16px_36px_-28px_rgba(95,68,64,0.45)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cocoa text-[0.64rem] font-semibold tracking-[0.16em] text-white">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-cocoa">Share inspiration</h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      Send a reference photo before your visit so we can prepare the right shape and finish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-2xl border border-white/75 bg-white/62 p-3.5 shadow-[0_16px_36px_-28px_rgba(95,68,64,0.45)] backdrop-blur-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-cocoa text-[0.64rem] font-semibold tracking-[0.16em] text-white">
                    04
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-cocoa">After-hours requests</h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      Request concierge confirmation on WhatsApp for private evening sessions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-brand-cocoa/10 bg-white/62 p-4 shadow-[0_18px_46px_-30px_rgba(95,68,64,0.5)]">
                <p className="text-[0.68rem] tracking-[0.18em] text-brand-cocoa/55 uppercase">
                  Need a faster recommendation?
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-cocoa/86">
                  Send a reference photo on WhatsApp and we’ll guide the right service, timing, and upkeep.
                </p>
                <a
                  href={whatsappPrimaryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
                >
                  Send on WhatsApp
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
