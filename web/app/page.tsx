import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { galleryShots, services, testimonials } from "@/lib/static-content";
import { formatUGX } from "@/lib/utils";
import { QuickBookBar } from "@/components/quick-book-bar";

const accentScript = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredGallery = galleryShots.slice(0, 4);

  return (
    <div className="pb-20">
      <section className="relative min-h-[94vh] overflow-hidden bg-[#221b1a] text-white">
        <div className="absolute inset-0 grid md:grid-cols-2">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1500&q=80"
              alt="Smiling beauty portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-black/24 to-black/8" />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1500&q=80"
              alt="Elegant manicured hand detail"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[rgba(214,171,178,0.55)]" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/22 md:block" />

        <div className="relative z-10 shell flex min-h-[94vh] flex-col items-center justify-center pt-24 pb-8 text-center sm:pb-12">
          <div className="max-w-5xl">
            <h1 className="font-serif text-[3.2rem] leading-[0.96] tracking-[-0.01em] sm:text-[4.8rem] lg:text-[7rem]">
              Beautiful you,
              <br />
              <span className="inline-flex items-end gap-3 sm:gap-5">
                <span
                  className={`${accentScript.className} -mt-2 text-[0.72em] leading-none text-[#f5d9dd] sm:-mt-3`}
                >
                  from
                </span>
                <span>head to toe</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/92 sm:text-2xl sm:leading-10">
              We are excited to offer a curated range of nail services and products designed for a
              refined, modern beauty lifestyle.
            </p>
          </div>

          <div className="mt-auto">
            <Link
              href="/services"
              className="inline-flex h-36 w-36 items-center justify-center rounded-full border border-white/50 bg-white/88 px-8 text-center text-xs font-semibold tracking-[0.28em] text-black uppercase transition hover:-translate-y-1 hover:bg-white"
            >
              Our Services Menu
            </Link>
          </div>
        </div>
      </section>

      <QuickBookBar />

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
