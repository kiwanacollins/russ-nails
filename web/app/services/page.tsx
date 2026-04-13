import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { services } from "@/lib/static-content";
import { buildWhatsAppLink, formatUGX } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: "Luxury nail services in Kampala with transparent pricing and premium appointment flow.",
};

const accentScript = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const serviceVisuals: Record<string, { imageUrl: string; alt: string }> = {
  "gel-extensions": {
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1400&q=80",
    alt: "Gel extension set with soft pink finish",
  },
  "gel-overlay": {
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80",
    alt: "Close-up overlay manicure with glossy finish",
  },
  "gel-manicure": {
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    alt: "Gel manicure session in progress",
  },
  "gel-toe-nails": {
    imageUrl:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=80",
    alt: "Gel toe nails with clean polish finish",
  },
  "gel-with-pedicure": {
    imageUrl:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1400&q=80",
    alt: "Pedicure and gel treatment setup",
  },
  pedicure: {
    imageUrl:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1400&q=80",
    alt: "Classic luxury pedicure moment",
  },
};

const fallbackVisual = {
  imageUrl:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80",
  alt: "Luxury nail studio service",
};

const serviceHighlights = [
  "Personalized consultation before every appointment",
  "Clean prep and premium products for long-wear retention",
  "Elegant finishes tailored for Kampala lifestyle and events",
];

const bookingSteps = [
  "Choose your service and preferred date.",
  "Book directly on WhatsApp for fast confirmation.",
  "Arrive 10 minutes early for consultation and style planning.",
];

export default function ServicesPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569";
  const bookingLink = buildWhatsAppLink(
    whatsappNumber,
    "Hello Russ Nails, I would like help choosing a service and booking an appointment.",
  );

  return (
    <div className="pb-20">
      <section className="shell py-12 sm:py-16">
        <header className="luxury-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1800&q=80"
              alt="Luxury manicure with soft blush tones"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#fff6f3]/96 via-[#fff6f3]/88 to-[#fff6f3]/72" />
          </div>

          <div className="relative">
            <p className="text-sm tracking-[0.2em] text-brand-cocoa/70 uppercase">Services + Pricing</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.03] text-brand-cocoa sm:text-5xl lg:text-[3.45rem]">
              Luxury Service Menu
              <span className={`${accentScript.className} ml-2 text-[0.75em] text-[#bc8298]`}>
                in Kampala
              </span>
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Every appointment includes consultation, hygienic prep, and finish calibration for
              your routine. Final pricing can vary with design complexity and nail length.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/75 px-6 py-3 text-xs font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
              >
                Talk to concierge
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {serviceHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex rounded-full border border-brand-cocoa/20 bg-white/82 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.14em] text-brand-cocoa uppercase"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-8 luxury-card bg-[#f2ebea] p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-brand-cocoa/68 uppercase">Services Menu</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={`jump-${service.slug}`}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/70 bg-white/78 px-4 py-3 text-sm font-semibold text-brand-cocoa transition hover:-translate-y-0.5 hover:border-brand-cocoa/18 hover:bg-white"
                >
                  <span>{service.name}</span>
                  <span
                    aria-hidden="true"
                    className="text-xl text-brand-cocoa/72 transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const serviceBookingLink = buildWhatsAppLink(
              whatsappNumber,
              `Hello Russ Nails, I would like to book ${service.name}.`,
            );
            const visual = serviceVisuals[service.slug] ?? fallbackVisual;

            return (
              <article key={service.slug} className="stacked-card">
                <div className="luxury-card h-full overflow-hidden">
                  <div className="relative h-56">
                    <Image
                      src={visual.imageUrl}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/68 via-black/30 to-black/10" />
                    <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                      {service.duration}
                    </div>
                    <div className="absolute bottom-5 left-5 text-xl font-semibold tracking-[0.14em] text-brand-gold uppercase">
                      From {formatUGX(service.priceFrom)}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h2 className="font-serif text-3xl text-brand-cocoa">{service.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{service.description}</p>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <a
                        href={serviceBookingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
                      >
                        Book now
                      </a>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/24 bg-white/78 px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="luxury-card p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">How booking works</p>
            <h2 className="mt-3 font-serif text-3xl text-brand-cocoa sm:text-4xl">Simple, premium, and fast</h2>
            <ol className="mt-6 space-y-3">
              {bookingSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm leading-7 text-muted sm:text-base">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blush text-xs font-semibold text-brand-cocoa">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="luxury-card bg-[#f3e5dc] p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">Need guidance?</p>
            <h2 className="mt-3 font-serif text-3xl text-brand-cocoa sm:text-4xl">
              Not sure which service fits your nails?
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Send us your inspiration photo and we will recommend the right treatment, timing, and
              maintenance plan for your look.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+256762267569"
                className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
              >
                Call studio
              </a>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}
