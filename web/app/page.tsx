import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { galleryShots, services, testimonials } from "@/lib/static-content";
import { QuickBookBar } from "@/components/quick-book-bar";
import { PersonalizedExperienceSection } from "@/components/personalized-experience-section";
import { ServicesShowcaseSection } from "@/components/services-showcase-section";
import CircularGallery from "@/components/CircularGallery";
import { formatUGX } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Russ Nails | Luxury Nail Salon in Kampala, Uganda",
  description:
    "Russ Nails is a trusted luxury nail salon in Kampala, Uganda for Russian manicures, gel nails, extensions, custom nail art, and bridal nails. Book your appointment via WhatsApp today.",
  keywords: [
    "nail salon Kampala",
    "luxury nail salon Kampala",
    "gel nails Kampala",
    "Russian manicure Kampala",
    "nail extensions Kampala",
    "bridal nails Kampala",
    "nail art Kampala",
    "manicure Kampala Uganda",
    "pedicure Kampala",
    "Russ Nails",
  ],
  openGraph: {
    title: "Russ Nails | Luxury Nail Salon in Kampala",
    description:
      "Looking for a luxury nail salon in Kampala? Russ Nails offers Russian manicures, gel extensions, bridal nail packages, and custom nail art with premium care.",
    type: "website",
  },
};

const accentScript = Caveat({
  subsets: ["latin"],
  weight: ["700"],
});

const packagePoints = [
  "Personalized consultations matched to your lifestyle in Kampala.",
  "Russian manicures, gel overlays, extensions, and premium nail art in one studio.",
  "Long-wear retention trusted by brides, professionals, and regular clients.",
];

const aboutPoints = [
  "One-on-one nail consultation tailored to your routine and style goals.",
  "Premium products, clean prep, and expert artistry for longer-lasting results.",
  "A calm, hygienic, luxury nail salon experience in central Kampala.",
];

const polishShowcase = [
  {
    id: "768",
    title: "Gel Effect Nail Polish 768",
    image: "/images/product1.png",
    price: 55000,
  },
  {
    id: "680",
    title: "Gel Effect Nail Polish 680",
    image: "/images/product2.png",
    price: 55000,
    badge: "Out Of Stock",
    badgeTone: "rose",
  },
  {
    id: "165",
    title: "Gel Effect Nail Polish 165",
    image: "/images/product3.png",
    price: 40000,
    compareAt: 55000,
    badge: "Sale",
    badgeTone: "olive",
  },
  {
    id: "883",
    title: "Gel Effect Nail Polish 883",
    image: "/images/product4.png",
    price: 55000,
  },
];

const blogHighlights = [
  {
    title: "How To Make Gel Nails Last Longer In Kampala",
    excerpt: "Protect your manicure against daily wear with simple aftercare tips our Kampala nail technicians recommend.",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bridal Nail Booking Timeline For Kampala Brides",
    excerpt: "Know exactly when to book your trial, final set, and touch-up so your wedding nails stay flawless.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  const featuredServices = services.slice(0, 5);
  const galleryItems = galleryShots.slice(0, 6).map((shot) => ({
    image: shot.imageUrl,
    text: shot.title,
  }));

  return (
    <div className="overflow-x-clip pb-20 [&_p]:text-center">
      <section className="relative min-h-screen overflow-hidden bg-[#221b1a] text-white" data-aos="fade-in-soft">
        <div className="absolute inset-0 grid md:grid-cols-2">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1690749138086-7422f71dc159?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Smiling beauty portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/58 via-black/44 to-black/24" />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Elegant manicured hand detail"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[rgba(89,58,70,0.5)]" />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/26" />

        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/22 md:block" />

        <div
          className="relative z-10 shell flex min-h-screen flex-col items-center justify-center pt-24 pb-8 text-center sm:pb-12"
          data-aos="fade-up-soft"
          data-aos-delay="70"
        >
          <div className="relative mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] border border-white/16 bg-linear-to-br from-black/55 via-black/35 to-[#9b7085]/24 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.75)] backdrop-blur-[2px]" />
            <p className="text-xs font-semibold tracking-[0.22em] text-white/85 uppercase mb-5">
              Luxury Nail Salon In Kampala, Uganda
            </p>
            <h1
              className="font-serif text-[clamp(2.45rem,11vw,3.2rem)] leading-[0.96] tracking-[-0.01em] sm:text-[4.8rem] lg:text-[7rem]"
              style={{ textShadow: "0 10px 32px rgba(0, 0, 0, 0.6)" }}
            >
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
            <p
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/95 sm:text-xl sm:leading-9"
              style={{ textShadow: "0 6px 20px rgba(0, 0, 0, 0.55)" }}
            >
              Looking for a trusted nail salon in Kampala? Russ Nails delivers Russian manicures,
              gel extensions, custom nail art, and bridal nail packages with premium care and lasting results.
            </p>
          </div>

          <div className="mt-auto">
            <Link
              href="/services"
              className="inline-flex h-28 w-28 items-center justify-center rounded-full border border-white/50 bg-white/88 px-6 text-center text-[0.64rem] font-semibold tracking-[0.22em] text-black uppercase transition hover:-translate-y-1 hover:bg-white sm:h-36 sm:w-36 sm:px-8 sm:text-xs sm:tracking-[0.28em]"
              style={{ color: "#000000" }}
            >
              Our Services Menu
            </Link>
          </div>
        </div>
      </section>

      <QuickBookBar />

      <section className="shell mt-14" data-aos="fade-up-soft">
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
                We help Kampala women feel confident with clean prep, elegant finishes, and retention that lasts.
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

      <section className="mt-20 w-full" data-aos="fade-up-soft">
        <div className="w-full overflow-hidden rounded-[2.4rem] border border-brand-cocoa/12">
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
              <p className="text-xs tracking-[0.24em] text-white/70 uppercase">About Russ Nails</p>
              <h2 className="mt-4 font-serif text-[2.35rem] leading-[1.02] tracking-[-0.01em] sm:text-[3.2rem]">
                Kampala&apos;s trusted studio
                <br />
                for clean, lasting
                <span className={`${accentScript.className} ml-2 text-[0.8em] text-[#efd3de]`}>luxury nails</span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/92 sm:text-base">
                Russ Nails is a premium nail salon in Kampala, Uganda known for careful prep, elegant finishes,
                and nail designs that truly last. From everyday maintenance to bridal and statement sets,
                every appointment is tailored to your style and schedule.
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
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 w-full" data-aos="fade-up-soft">
        <div className="w-full overflow-hidden border border-brand-cocoa/12">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-90 md:min-h-168">
              <Image
                src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1600&q=80"
                alt="Nail technician applying treatment during a manicure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="bg-[#e8dfde] px-6 py-10 text-brand-cocoa sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="text-xs tracking-[0.24em] text-brand-cocoa/70 uppercase">More Than Just Nails</p>
              <h2 className="mt-4 max-w-2xl font-serif text-[2.2rem] leading-[1.05] tracking-[-0.01em] sm:text-[3.4rem]">
                <span className={`${accentScript.className} mr-3 text-[0.8em] text-[#b68096]`}>There&apos;s</span>
                nothing a fresh manicure can&apos;t fix
              </h2>

              <div className="mt-10 space-y-9">
                <div className="grid gap-2 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
                  <p className="font-serif text-5xl leading-none text-[#6d7b68] sm:text-6xl">5,000+</p>
                  <div className="max-w-lg">
                    <p className="text-2xl font-semibold text-brand-cocoa">Precision cuticle treatments every year</p>
                    <p className="mt-3 text-base leading-8 text-brand-cocoa/80">
                      Our Kampala nail technicians deliver safe prep, clean detail work, and long-wear results
                      clients can trust.
                    </p>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
                  <p className="font-serif text-5xl leading-none text-[#6d7b68] sm:text-6xl">1325</p>
                  <div className="max-w-lg">
                    <p className="text-2xl font-semibold text-brand-cocoa">Custom nail designs created</p>
                    <p className="mt-3 text-base leading-8 text-brand-cocoa/80">
                      Bring your inspiration and our artists recreate it with premium products and detail-focused artistry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20" data-aos="fade-up-soft">
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
              Take a look inside our luxury nail studio in Kampala.
            </h2>
          </div>
        </div>
      </section>

      <section className="shell mt-20" data-aos="fade-up-soft">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Google Reviews</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">What Kampala Clients Say About Russ Nails</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cocoa/15 bg-white/90 px-4 py-2 shadow-[0_10px_25px_-18px_rgba(51,31,26,0.45)] backdrop-blur">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-brand-cocoa/12">
              <FcGoogle className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-[0.63rem] font-semibold tracking-[0.16em] text-brand-cocoa uppercase">Rated 5.0</p>
              <p className="text-[0.68rem] text-brand-cocoa/65">via Google</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="stacked-card"
              data-aos="fade-up-soft"
              data-aos-delay={index * 80}
            >
              <blockquote className="luxury-card h-full p-6">
                <header className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white ring-1 ring-brand-cocoa/12">
                      <FcGoogle className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-brand-cocoa/65 uppercase">Google Review</p>
                  </div>
                  <p className="text-[0.68rem] text-brand-cocoa/55">Verified</p>
                </header>
                <div className="mt-4 text-brand-gold">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-muted">{`"${testimonial.quote}"`}</p>
                <footer className="mt-5 text-sm font-semibold text-brand-cocoa">{testimonial.name}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <section className="shell mt-20" data-aos="fade-up-soft">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Photo Gallery</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">Nail Art Gallery From Our Kampala Studio</h2>
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

      <section className="mt-20 bg-[#f4f4f4] py-14 sm:py-16" data-aos="fade-up-soft">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-serif text-[2.3rem] leading-[0.95] tracking-[-0.02em] text-brand-cocoa sm:text-[3.5rem] lg:text-[4.3rem]">
                Professional products
              </h2>
              <p className="mt-6 max-w-2xl text-base text-brand-cocoa/85 sm:text-xl">
                Shop salon-grade nail care in Kampala and keep your results fresh between appointments.
              </p>
            </div>

            <Link
              href="/products"
              className="hidden h-40 w-40 shrink-0 items-center justify-center rounded-full border border-brand-cocoa/28 text-center text-sm font-semibold tracking-[0.24em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 hover:bg-white/75 sm:inline-flex"
            >
              <span className="leading-7">View all products</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center border border-brand-cocoa/28 px-6 py-3 text-xs font-semibold tracking-[0.22em] text-brand-cocoa uppercase transition hover:bg-white/75 sm:hidden"
            >
              View all products
            </Link>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {polishShowcase.map((product, index) => (
              <article
                key={product.id}
                className="text-center text-brand-cocoa"
                data-aos="fade-up-soft"
                data-aos-delay={index * 70}
              >
                <div className="relative border border-brand-cocoa/14 bg-[#f7f7f7] px-4 pt-6 pb-5 sm:px-6 sm:pt-8 sm:pb-6">
                  {product.badge ? (
                    <span
                      className={`absolute left-4 top-4 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white uppercase ${
                        product.badgeTone === "rose" ? "bg-[#bc8298]" : "bg-[#6f7d6a]"
                      }`}
                    >
                      {product.badge}
                    </span>
                  ) : null}

                  <div className="relative mx-auto h-80 w-full max-w-56 sm:h-88">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 24vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="mt-6 text-2xl tracking-[0.12em] text-[#c58a9d]">★★★★★</p>
                <h3 className="mt-4 text-[1.4rem] leading-[1.18] sm:text-[1.6rem]">{product.title}</h3>
                <p className="mt-3 text-[1.8rem] font-semibold sm:text-[2rem]">
                  {product.compareAt ? (
                    <>
                      <span className="mr-3 text-[1.45rem] text-brand-cocoa/45 line-through sm:text-[1.6rem]">
                        {formatUGX(product.compareAt)}
                      </span>
                      <span>{formatUGX(product.price)}</span>
                    </>
                  ) : (
                    <span>{formatUGX(product.price)}</span>
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell mt-20" data-aos="fade-up-soft">
        <div className="luxury-card overflow-hidden bg-[#f3e5dc] p-8 text-center text-brand-cocoa sm:p-12">
          <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Booking + Shop</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            Book your Kampala nail appointment and shop aftercare in one smooth experience.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Chat with our team on WhatsApp to secure your slot, then checkout trusted nail products
            when you are ready. Simple, fast, and built for busy Kampala schedules.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Shop Products
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

      <section className="shell mt-20" data-aos="fade-up-soft">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Kampala Nail Care Blog</p>
            <h2 className="mt-2 font-serif text-3xl text-brand-cocoa sm:text-4xl">Nail Tips, Trends, and Bridal Prep Guides</h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
            Read more tips
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogHighlights.map((post, index) => (
            <article
              key={post.title}
              className="stacked-card group"
              data-aos="fade-up-soft"
              data-aos-delay={index * 90}
            >
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
    </div>
  );
}
