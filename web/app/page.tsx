import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { galleryShots, services, testimonials } from "@/lib/static-content";
import { formatUGX } from "@/lib/utils";
import { QuickBookBar } from "@/components/quick-book-bar";

export const metadata: Metadata = {
  title: "Russ Nails  Luxury Nail Salon in Kampala, Uganda",
  description:
    "Kampala's premier luxury nail studio. Gel extensions, Russian manicures, bespoke nail art, bridal packages & more. Book your appointment today.",
  keywords: [
    "nail salon Kampala",
    "luxury nail studio Uganda",
    "gel nails Kampala",
    "Russian manicure Kampala",
    "nail art Uganda",
    "bridal nails Kampala",
    "Russ Nails",
  ],
  openGraph: {
    title: "Russ Nails  Luxury Nail Salon in Kampala",
    description:
      "Kampala's premier nail studio. Gel extensions, Russian manicures, bespoke nail art & bridal packages. Book via WhatsApp today.",
    type: "website",
  },
};

const accentScript = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const teamMembers = [
  {
    name: "Mariam N.",
    role: "Lead Nail Artist",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sharon K.",
    role: "Gel Specialist",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lydia A.",
    role: "Bridal Styling Director",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Natasha T.",
    role: "Aftercare Consultant",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
  },
];

const partnerLogos = ["Luxe Bridal", "Kampala Vogue", "City Life", "Pearl Style", "Beauty Week", "Urbn Bride"];

const packagePoints = [
  "Tailored treatments for every client.",
  "A full range of premium nail services.",
  "Top-rated service quality and retention.",
];

const blogHighlights = [
  {
    title: "How To Keep Your Gel Set Fresh For 3+ Weeks",
    excerpt: "Daily hydration routines, cuticle care, and polish protection habits used by our regular clients.",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bridal Nail Timeline: What To Book And When",
    excerpt: "A practical booking guide for trials, design lock-in, and perfect wedding-day finish confidence.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 5);
  const featuredGallery = galleryShots.slice(0, 5);

  return (
    <div className="pb-20">
      <section className="relative min-h-screen overflow-hidden bg-[#221b1a] text-white">
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
            <div className="absolute inset-0 bg-linear-to-r from-black/28 via-black/24 to-black/8" />
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

        <div className="relative z-10 shell flex min-h-screen flex-col items-center justify-center pt-24 pb-8 text-center sm:pb-12">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/60 uppercase mb-5">
              Kampala&apos;s Luxury Nail Studio
            </p>
            <h1 className="font-serif text-[3.2rem] leading-[0.96] tracking-[-0.01em] sm:text-[4.8rem] lg:text-[7rem]">
              Nails done
              <br />
              <span className="inline-flex items-end gap-3 sm:gap-5">
                <span
                  className={`${accentScript.className} -mt-2 text-[0.72em] leading-none text-[#f5d9dd] sm:-mt-3`}
                >
                  the
                </span>
                <span>right way</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-xl sm:leading-9">
              Kampala&apos;s premier nail salon: gel extensions, Russian manicures, bespoke nail art,
              and bridal packages crafted for women who expect the best.
            </p>
          </div>

          <div className="mt-auto">
            <Link
              href="/services"
              className="inline-flex h-36 w-36 items-center justify-center rounded-full border border-white/50 bg-white/88 px-8 text-center text-xs font-semibold tracking-[0.28em] text-black uppercase transition hover:-translate-y-1 hover:bg-white"
              style={{ color: "#000000" }}
            >
              Our Services Menu
            </Link>
          </div>
        </div>
      </section>

      <QuickBookBar />

      <section className="shell mt-14">
        <div className="luxury-card p-8 text-center sm:p-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-cocoa/65 uppercase">Our Promise</p>
          <h2 className="mx-auto mt-3 max-w-4xl font-serif text-3xl leading-tight text-brand-cocoa sm:text-4xl">
            We are here for you and excited to bring your beauty vision to life with precision, artistry, and care.
          </h2>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="relative min-h-130 rounded-[2.2rem] border border-brand-cocoa/10 bg-[#f6e9e4] p-4 sm:p-6">
            <div className="absolute -right-2 -top-2 hidden rounded-full border border-brand-cocoa/20 bg-surface px-4 py-1 text-[11px] tracking-[0.14em] text-brand-cocoa/70 uppercase sm:inline-flex">
              A Space For You
            </div>
            <div className="grid h-full gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-[1.7rem]">
                <Image
                  src="https://images.unsplash.com/photo-1607006344380-b6775a0824cd?auto=format&fit=crop&w=900&q=80"
                  alt="Nail artist preparing tools"
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[1.7rem]">
                <Image
                  src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury manicure setup"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Personalized Experience</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-brand-cocoa sm:text-4xl">
              Personalized beauty treatments tailored to your rhythm.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              We created this studio as a calm, elegant destination where every appointment is mapped
              to your preferences. From shape profiling to aftercare planning, each step is intentional.
            </p>

            <ul className="mt-6 space-y-2">
              {packagePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-brand-cocoa/10 bg-surface/80 px-4 py-3 text-sm text-brand-cocoa"
                >
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-cocoa text-[10px] text-white">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-cocoa px-7 py-3 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5"
              >
                More About Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/35 px-7 py-3 text-xs font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Our Services</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">
              A Range Of High-Quality Beauty Services
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
              <Link
                href="/services"
                className="mt-4 inline-flex items-center text-xs font-semibold tracking-[0.14em] text-brand-cocoa/75 uppercase transition hover:text-brand-cocoa"
              >
                Explore Service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-y border-brand-cocoa/10 bg-[#f4e9e5] py-16">
        <div className="shell">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Meet Our Stylists</p>
              <h2 className="mt-2 max-w-3xl font-serif text-3xl text-brand-cocoa sm:text-4xl">
                Creative artists, each with a distinct style and meticulous technique.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-brand-cocoa/30 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Meet The Team
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-[1.8rem] border border-brand-cocoa/10 bg-surface">
                <div className="relative h-64">
                  <Image src={member.image} alt={member.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-xl text-brand-cocoa">{member.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.14em] text-brand-cocoa/70 uppercase">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-brand-cocoa/15">
          <Image
            src="https://images.unsplash.com/photo-1542820790-7606f5f0fd01?auto=format&fit=crop&w=1800&q=80"
            alt="Salon ambiance video cover"
            width={1800}
            height={780}
            className="h-75 w-full object-cover sm:h-110"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-7 text-white sm:p-10">
            <p className="text-xs tracking-[0.18em] text-white/70 uppercase">Studio Film</p>
            <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              Step inside the Russ Nails experience.
            </h2>
            <a
              href="https://www.youtube.com/watch?v=1c_gHonRtYI"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-brand-cocoa transition hover:scale-105"
              aria-label="Play studio video"
            >
              ▶
            </a>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Client Notes</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">What Clients Say About The Experience</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="luxury-card p-6">
              <div className="mb-4 text-brand-gold">★★★★★</div>
              <p className="text-sm leading-7 text-muted">{`"${testimonial.quote}"`}</p>
              <footer className="mt-5 text-sm font-semibold text-brand-cocoa">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Photo Gallery</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">Your Beauty Is Our Priority</h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
            Open full gallery
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <figure className="luxury-card overflow-hidden md:col-span-7">
            <Image
              src={featuredGallery[0]?.imageUrl ?? galleryShots[0].imageUrl}
              alt={featuredGallery[0]?.alt ?? galleryShots[0].alt}
              width={1400}
              height={900}
              className="h-110 w-full object-cover"
            />
          </figure>

          <div className="grid gap-4 md:col-span-5">
            {featuredGallery.slice(1, 3).map((item) => (
              <figure key={item.id} className="luxury-card overflow-hidden">
                <Image src={item.imageUrl} alt={item.alt} width={900} height={520} className="h-53 w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="rounded-[2.2rem] border border-brand-cocoa/10 bg-surface px-6 py-10 sm:px-10">
          <p className="text-center text-xs tracking-[0.18em] text-brand-cocoa/60 uppercase">As Featured In</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex h-14 items-center justify-center rounded-xl border border-brand-cocoa/10 bg-white text-sm font-semibold tracking-[0.12em] text-brand-cocoa/60 uppercase"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="luxury-card bg-brand-cocoa p-8 text-white sm:p-10">
            <p className="text-xs tracking-[0.16em] text-white/70 uppercase">Salon Locations</p>
            <h3 className="mt-3 font-serif text-3xl">Plan Your Visit</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
              We host private and regular appointments in central Kampala with concierge-level service.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Plan Your Visit
            </Link>
          </article>

          <article className="luxury-card bg-[#f3e5dc] p-8 sm:p-10">
            <p className="text-xs tracking-[0.16em] text-brand-cocoa/70 uppercase">Gift Cards</p>
            <h3 className="mt-3 font-serif text-3xl text-brand-cocoa">Gift Luxury Beauty</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Send a service or product gift card for birthdays, bridal events, and milestone celebrations.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex rounded-full border border-brand-cocoa/25 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Shop Gift Options
            </Link>
          </article>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Read Our Blog</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">Inspiring Stories</h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
            Read more articles
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogHighlights.map((post) => (
            <article key={post.title} className="luxury-card overflow-hidden">
              <Image src={post.image} alt={post.title} width={1200} height={800} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-brand-cocoa">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex text-xs font-semibold tracking-[0.14em] text-brand-cocoa/75 uppercase transition hover:text-brand-cocoa"
                >
                  Continue Reading →
                </Link>
              </div>
            </article>
          ))}
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
