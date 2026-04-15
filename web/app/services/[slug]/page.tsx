import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/static-content";
import { buildWhatsAppLink, formatUGX } from "@/lib/utils";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type ServiceDetailContent = {
  imageUrl: string;
  imageAlt: string;
  lead: string;
  includes: string[];
  bestFor: string[];
  aftercare: string[];
};

const serviceDetailContent: Record<string, ServiceDetailContent> = {
  "gel-extensions": {
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Soft pink gel extension manicure",
    lead:
      "Structured extensions designed for elegant length, balanced shape, and long-wear polish retention.",
    includes: [
      "Shape planning and extension length consultation",
      "Structured builder-gel application with apex refinement",
      "Cuticle detailing and high-gloss finishing",
      "Lifestyle guidance for retention and maintenance",
    ],
    bestFor: [
      "Clients who want added length with a premium finish",
      "Bridal and event-ready nail styling",
      "Professionals who need polished, durable wear",
    ],
    aftercare: [
      "Apply cuticle oil daily to keep the set flexible",
      "Use gloves for cleaning and heavy water work",
      "Schedule your refill within 2 to 3 weeks",
    ],
  },
  "gel-overlay": {
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Close-up gel overlay finish",
    lead:
      "A strengthening gel layer over natural nails to improve resilience while keeping a refined natural profile.",
    includes: [
      "Nail prep with cuticle care and contour correction",
      "Protective gel overlay tailored to nail condition",
      "Precision filing for clean sidewalls and shape",
      "Gloss top finish for long-wear shine",
    ],
    bestFor: [
      "Clients growing natural nails",
      "Minimal, polished everyday aesthetics",
      "Anyone needing added support without extensions",
    ],
    aftercare: [
      "Moisturize nails and cuticles every evening",
      "Avoid using nails as tools to prevent lifting",
      "Return for refresh before visible outgrowth becomes excessive",
    ],
  },
  "gel-manicure": {
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Gel manicure color application",
    lead:
      "Clean prep and precision gel color application for a polished manicure that keeps its shine through busy weeks.",
    includes: [
      "Cuticle cleanup and shape balancing",
      "Gel color matching for your look and schedule",
      "Layered application for smooth durability",
      "Final gloss seal for chip-resistant wear",
    ],
    bestFor: [
      "Weekly-to-biweekly maintenance routines",
      "Clients who prefer clean, short-to-medium nail lengths",
      "Everyday luxury with low-maintenance shine",
    ],
    aftercare: [
      "Use hand cream after sanitizing to maintain hydration",
      "Avoid peeling off gel to protect natural nail plates",
      "Book a removal or refresh appointment when needed",
    ],
  },
  "gel-toe-nails": {
    imageUrl:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Gel toe nails in salon setting",
    lead:
      "Toe nail prep and gel application focused on neat finish, long wear, and clean detail work.",
    includes: [
      "Toe shaping and prep for even product adhesion",
      "Cuticle detail and polish edge cleanup",
      "Gel color application and curing",
      "Gloss finish for sandal-ready shine",
    ],
    bestFor: [
      "Holiday and event styling",
      "Clients seeking long-lasting toe color",
      "Maintenance between full pedicure sessions",
    ],
    aftercare: [
      "Keep feet moisturized, especially around cuticles",
      "Allow sandals and open shoes when possible after appointment",
      "Rebook once visible grow-out appears",
    ],
  },
  "gel-with-pedicure": {
    imageUrl:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Luxury gel pedicure treatment",
    lead:
      "A complete pedicure ritual finished with gel polish for extended wear and a consistently polished look.",
    includes: [
      "Soak, exfoliation, and foot grooming",
      "Nail shaping, cuticle detailing, and surface prep",
      "Gel polish application for longer retention",
      "Finishing hydration for feet and cuticles",
    ],
    bestFor: [
      "Clients wanting full care plus color longevity",
      "Vacation and occasion prep",
      "Monthly premium foot-care maintenance",
    ],
    aftercare: [
      "Use foot cream nightly to maintain smooth finish",
      "Wear breathable footwear when possible",
      "Book the next full pedicure in 3 to 4 weeks",
    ],
  },
  pedicure: {
    imageUrl:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=1800&q=80",
    imageAlt: "Classic pedicure in luxury studio",
    lead:
      "A restorative pedicure with careful prep, grooming, and hydration to keep feet neat, comfortable, and refreshed.",
    includes: [
      "Warm soak and exfoliation routine",
      "Cuticle care and nail shaping",
      "Callus-softening and smoothing work",
      "Finishing moisture ritual",
    ],
    bestFor: [
      "Routine foot-care maintenance",
      "Clients focused on comfort and neat appearance",
      "Pre-event grooming without gel application",
    ],
    aftercare: [
      "Apply foot cream daily, especially before sleep",
      "Use comfortable footwear to preserve the result",
      "Maintain appointments every 3 to 5 weeks",
    ],
  },
};

const fallbackDetail: ServiceDetailContent = {
  imageUrl:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=80",
  imageAlt: "Luxury nail studio service detail",
  lead: "Personalized service built around clean prep, premium care, and long-lasting results.",
  includes: [
    "One-on-one consultation",
    "Detail-focused prep and finish",
    "Premium product usage",
    "Aftercare guidance",
  ],
  bestFor: [
    "Clients looking for premium nail care",
    "Event and lifestyle maintenance",
    "Consistent long-wear finishes",
  ],
  aftercare: [
    "Hydrate cuticles daily",
    "Protect nails during chores",
    "Rebook before overgrowth",
  ],
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: `${service.description} Book ${service.name} at Russ Nails in Kampala for premium care and long-lasting results.`,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const detail = serviceDetailContent[slug] ?? fallbackDetail;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569";
  const bookingLink = buildWhatsAppLink(
    whatsappNumber,
    `Hello Russ Nails, I would like to book ${service.name}.`,
  );
  const relatedServices = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="shell py-12 sm:py-16" data-aos="fade-up-soft">
      <Link href="/services" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
        Back to services
      </Link>

      <article className="luxury-card mt-6 overflow-hidden" data-aos="fade-up-soft">
        <div className="grid lg:grid-cols-[1fr_1.06fr]">
          <div className="relative min-h-95 lg:min-h-full">
            <Image
              src={detail.imageUrl}
              alt={detail.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/62 via-black/28 to-black/8" />
            <div className="absolute left-6 top-6 inline-flex rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[0.66rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
              {service.duration}
            </div>
            <div className="absolute bottom-6 left-6 text-2xl font-semibold tracking-[0.12em] text-brand-gold uppercase">
              From {formatUGX(service.priceFrom)}
            </div>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-xs tracking-[0.2em] text-brand-cocoa/65 uppercase">Service Detail</p>
            <h1 className="mt-3 font-serif text-4xl leading-[1.04] text-brand-cocoa sm:text-[3.3rem]">
              {service.name}
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">{detail.lead}</p>

            <p className="mt-6 text-sm leading-7 text-muted sm:text-base">{service.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </div>
      </article>

      <section className="mt-8 grid gap-6 md:grid-cols-3" data-aos="fade-up-soft">
        <article className="luxury-card p-6 sm:p-7" data-aos="fade-up-soft">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">What is included</p>
          <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted">
            {detail.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="luxury-card p-6 sm:p-7" data-aos="fade-up-soft" data-aos-delay="80">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">Best for</p>
          <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted">
            {detail.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cocoa" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="luxury-card p-6 sm:p-7" data-aos="fade-up-soft" data-aos-delay="140">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">Aftercare notes</p>
          <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted">
            {detail.aftercare.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-2 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" data-aos="fade-up-soft">
        <article className="luxury-card bg-[#f3e5dc] p-6 sm:p-8" data-aos="fade-up-soft">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">Appointment note</p>
          <h2 className="mt-3 font-serif text-3xl text-brand-cocoa sm:text-4xl">
            Bring your inspiration, we will tailor the final look
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Share your preferred shape, tone, and finish in advance. Our team will guide the best
            technical approach for long-wear results and the look you want.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
            >
              Reserve this service
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              View all services
            </Link>
          </div>
        </article>

        <article className="luxury-card overflow-hidden p-6 sm:p-8" data-aos="fade-up-soft" data-aos-delay="100">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs tracking-[0.18em] text-brand-cocoa/70 uppercase">Related services</p>
              <h3 className="mt-2 font-serif text-2xl text-brand-cocoa sm:text-3xl">Explore similar treatments</h3>
            </div>
            <span className="inline-flex shrink-0 whitespace-nowrap rounded-full border border-brand-cocoa/14 bg-white/75 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-brand-cocoa uppercase leading-none">
              {relatedServices.length} options
            </span>
          </div>

          <ul className="mt-5 space-y-3">
            {relatedServices.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-brand-cocoa/12 bg-linear-to-r from-white/80 via-white/65 to-brand-blush/35 p-4 text-brand-cocoa shadow-[0_14px_34px_-28px_rgba(51,31,26,0.6)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-cocoa/24 hover:shadow-[0_20px_42px_-26px_rgba(51,31,26,0.65)]"
                  data-aos="fade-up-soft"
                  data-aos-delay={index * 90}
                >
                  <div>
                    <p className="text-sm font-semibold sm:text-base">{item.name}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full border border-brand-cocoa/14 bg-white/90 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.14em] text-brand-cocoa/78 uppercase">
                        {item.duration}
                      </span>
                      <span className="inline-flex rounded-full border border-brand-cocoa/14 bg-white/90 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.14em] text-brand-cocoa/78 uppercase">
                        From {formatUGX(item.priceFrom)}
                      </span>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-cocoa/18 bg-white/85 text-base transition group-hover:translate-x-0.5 group-hover:bg-white"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
