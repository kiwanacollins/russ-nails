import type { Metadata } from "next";
import { services } from "@/lib/static-content";
import { buildWhatsAppLink, formatUGX } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: "Luxury nail services in Kampala with transparent pricing and premium appointment flow.",
};

export default function ServicesPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569";

  return (
    <div className="shell py-12 sm:py-16">
      <header className="luxury-card p-8 sm:p-10">
        <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Services + Pricing</p>
        <h1 className="mt-3 font-serif text-4xl text-brand-cocoa sm:text-5xl">Luxury Service Menu</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          Every appointment includes consultation, sanitation protocol, and finish calibration for
          your lifestyle. Final pricing can vary based on design complexity and length.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const bookingLink = buildWhatsAppLink(
            whatsappNumber,
            `Hello Russ Nails, I would like to book ${service.name}.`,
          );

          return (
            <article key={service.slug} className="stacked-card">
              <div className="luxury-card h-full p-6">
                <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">{service.duration}</p>
                <h2 className="mt-3 font-serif text-3xl text-brand-cocoa">{service.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold tracking-[0.14em] text-brand-gold uppercase">
                    From {formatUGX(service.priceFrom)}
                  </p>
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
