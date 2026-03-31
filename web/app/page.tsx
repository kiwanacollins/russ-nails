import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { galleryShots, services, testimonials } from "@/lib/static-content";
import { QuickBookBar } from "@/components/quick-book-bar";
import { PersonalizedExperienceSection } from "@/components/personalized-experience-section";
import { ServicesShowcaseSection } from "@/components/services-showcase-section";
import CircularGallery from "@/components/CircularGallery";

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

const partnerLogos = ["Luxe Bridal", "Kampala Vogue", "City Life", "Pearl Style", "Beauty Week", "Urbn Bride"];

const packagePoints = [
  "Tailored treatments for every client.",
  "A full range of premium nail services.",
  "Top-rated service quality and retention.",
];

const aboutPoints = [
  "Tailored one-on-one consultations for every client.",
  "High-quality products, artistry, and long-wear results.",
  "A calm, premium studio atmosphere in Kampala.",
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
  const galleryItems = galleryShots.map((shot) => ({
    image: shot.imageUrl,
    text: shot.title,
  }));

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
        <div
          className="relative overflow-hidden rounded-[2.9rem] border border-brand-cocoa/12 bg-[#efe7e2] px-4 py-8 sm:px-8 sm:py-12"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbHxlbnwwfHwwfHx8MA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#f6ede9]/60 backdrop-blur-[1px]" />
          <div className="promise-glow-pulse absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#f0b5c8]/32 blur-3xl" />
          <div className="promise-glow-pulse absolute -right-18 bottom-8 h-56 w-56 rounded-full bg-[#e6c7a3]/28 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="promise-card-float mx-auto rounded-[2.2rem] border border-white/75 bg-transparent px-6 py-8 text-center shadow-none sm:px-10 sm:py-12 lg:max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-brand-cocoa/65 uppercase">Our Promise</p>
              <h2 className="mx-auto mt-4 max-w-4xl font-serif text-[2rem] leading-[1.14] text-brand-cocoa sm:text-[2.95rem]">
                We are here for you and excited to bring your beauty vision to life with precision, artistry, and care.
              </h2>
            </div>

            <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
              <div className="-rotate-8">
                <span className="promise-chip-bob inline-flex rounded-full border border-brand-cocoa/15 bg-white/86 px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-brand-cocoa/70 uppercase">
                  Precision
                </span>
              </div>
              <div className="rotate-5 pl-6">
                <span className="promise-chip-bob-delayed inline-flex rounded-full border border-brand-cocoa/15 bg-white/86 px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-brand-cocoa/70 uppercase">
                  Care
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
              <div className="rotate-8 pr-6">
                <span className="promise-chip-bob-delayed inline-flex rounded-full border border-brand-cocoa/15 bg-white/86 px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-brand-cocoa/70 uppercase">
                  Artistry
                </span>
              </div>
              <div className="-rotate-6">
                <span className="promise-chip-bob inline-flex rounded-full border border-brand-cocoa/15 bg-white/86 px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-brand-cocoa/70 uppercase">
                  Intention
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PersonalizedExperienceSection accentClassName={accentScript.className} points={packagePoints} />

      <ServicesShowcaseSection services={featuredServices} />

      <section className="shell mt-20">
        <div className="overflow-hidden rounded-[2.4rem] border border-brand-cocoa/12">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-80 md:min-h-140">
              <Image
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant woman showing manicure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="bg-[#6c7865] px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="text-xs tracking-[0.24em] text-white/70 uppercase">About Us</p>
              <h2 className="mt-4 font-serif text-[2.35rem] leading-[1.02] tracking-[-0.01em] sm:text-[3.2rem]">
                A calming all-in-one
                <br />
                glow-up space
                <span className={`${accentScript.className} ml-2 text-[0.8em] text-[#efd3de]`}>for you</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/92 sm:text-base">
                Russ Nails is a boutique beauty studio designed around comfort, precision, and your personal style.
                From classic maintenance to statement sets, we create a relaxing experience that still feels premium at every step.
              </p>

              <div className="mt-7 space-y-3">
                {aboutPoints.map((point) => (
                  <p key={point} className="flex items-start gap-3 text-sm leading-7 text-white/95 sm:text-base">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d7a7b8] text-[0.72rem] font-bold text-white">
                      ✓
                    </span>
                    <span>{point}</span>
                  </p>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center border border-black bg-black px-8 py-3 text-xs font-semibold tracking-[0.24em] text-white uppercase transition hover:bg-black/90"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-brand-cocoa/15">
          <video
            className="h-75 w-full object-cover sm:h-110"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Salon ambiance background video"
          >
            <source src="/vidoes/russ-nails-demo-saloon.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-7 text-white sm:p-10">
            <p className="text-xs tracking-[0.18em] text-white/70 uppercase">Studio Film</p>
            <h2 className="mt-2 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              Step inside the Russ Nails experience.
            </h2>
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
            <div key={testimonial.name} className="stacked-card">
              <blockquote className="luxury-card h-full p-6">
                <div className="mb-4 text-brand-gold">★★★★★</div>
                <p className="text-sm leading-7 text-muted">{`"${testimonial.quote}"`}</p>
                <footer className="mt-5 text-sm font-semibold text-brand-cocoa">{testimonial.name}</footer>
              </blockquote>
            </div>
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

        <div className="luxury-card h-110 overflow-hidden bg-[#4b5b49] sm:h-140">
          <CircularGallery
            items={galleryItems}
            bend={1.1}
            textColor="#f7f2eb"
            borderRadius={0.06}
            scrollSpeed={1.8}
            scrollEase={0.04}
          />
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
          <article className="luxury-card bg-[#f3e5dc] p-8 text-brand-cocoa sm:p-10">
            <p className="text-xs tracking-[0.16em] text-brand-cocoa/70 uppercase">Salon Locations</p>
            <h3 className="mt-3 font-serif text-3xl">Plan Your Visit</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
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
            <article key={post.title} className="stacked-card group">
              <div className="luxury-card h-full overflow-hidden transition duration-300 group-hover:-translate-y-1">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell mt-20">
        <div className="luxury-card overflow-hidden bg-[#f3e5dc] p-8 text-brand-cocoa sm:p-12">
          <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Booking + Shop</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            Service-first experience with product checkout when your clients are ready.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
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
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/35 px-7 py-3 text-sm font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
