import Image from "next/image";
import Link from "next/link";
import { galleryShots, services, testimonials } from "@/lib/static-content";
import { formatUGX } from "@/lib/utils";

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredGallery = galleryShots.slice(0, 4);

  return (
    <div className="pb-20">
      <section className="shell pt-8 sm:pt-12">
        <div className="luxury-card relative overflow-hidden p-8 sm:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(95,68,64,0.08),rgba(202,139,120,0.2),rgba(156,122,79,0.08))]" />
          <div className="relative space-y-6">
            <p className="inline-flex rounded-full border border-brand-cocoa/20 bg-white/80 px-4 py-1 text-xs tracking-[0.2em] text-brand-cocoa uppercase">
              Luxury Nail Atelier • Kampala
            </p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-brand-cocoa sm:text-5xl lg:text-6xl">
              Precision nail artistry and concierge-level care for women who love elegant detail.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Russ Nails pairs studio-grade craftsmanship with premium comfort. Book high-end
              appointments, browse curated nail products, and choose how you checkout.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-7 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-7 py-3 text-sm font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
              >
                Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Services</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">
              Signature Treatments
            </h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
            View all services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <article key={service.slug} className="luxury-card p-6">
              <p className="text-xs tracking-[0.2em] text-brand-cocoa/70 uppercase">{service.duration}</p>
              <h3 className="mt-3 font-serif text-2xl text-brand-cocoa">{service.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              <p className="mt-5 text-sm font-semibold tracking-[0.12em] text-brand-gold uppercase">
                From {formatUGX(service.priceFrom)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Gallery</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">Studio Work Highlights</h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
            Open full gallery
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGallery.map((item) => (
            <figure key={item.id} className="luxury-card overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={700}
                height={950}
                className="h-64 w-full object-cover"
              />
              <figcaption className="p-4">
                <p className="text-xs tracking-[0.16em] text-brand-cocoa/70 uppercase">{item.category}</p>
                <p className="mt-2 text-sm font-semibold text-brand-cocoa">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="shell mt-20">
        <div className="luxury-card p-8 sm:p-12">
          <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Client Notes</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-2xl border border-brand-cocoa/10 bg-white/70 p-5">
                <p className="text-sm leading-7 text-muted">{`"${testimonial.quote}"`}</p>
                <footer className="mt-4 text-sm font-semibold text-brand-cocoa">{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="luxury-card overflow-hidden bg-brand-cocoa p-8 text-white sm:p-12">
          <p className="text-sm tracking-[0.18em] text-white/70 uppercase">Booking + Shop</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            Service-first experience with product checkout when your clients are ready.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Start with appointments via WhatsApp and seamlessly let clients continue to the normal
            checkout flow when they prefer card payments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
