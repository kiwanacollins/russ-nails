"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Service } from "@/lib/types";
import { formatUGX } from "@/lib/utils";

type ServicesShowcaseSectionProps = {
  services: Service[];
};

const serviceVisuals: Record<string, { imageUrl: string; alt: string }> = {
  "couture-gel-extensions": {
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80",
    alt: "Gel extension treatment",
  },
  "signature-russian-manicure": {
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    alt: "Russian manicure close-up",
  },
  "bridal-nail-suite": {
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    alt: "Bridal nail styling",
  },
  "executive-pedicure": {
    imageUrl:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80",
    alt: "Pedicure and foot care session",
  },
  "nail-art-bespoke": {
    imageUrl:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Bespoke nail art detail",
  },
};

const fallbackVisual = {
  imageUrl:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  alt: "Luxury nail service",
};

export function ServicesShowcaseSection({ services }: ServicesShowcaseSectionProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const step = Math.max(280, Math.round(slider.clientWidth * 0.62));
    slider.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-20 bg-[#e7dddc] py-16 sm:py-20">
      <div className="shell grid gap-10 xl:grid-cols-[0.85fr_1.2fr] xl:items-end">
        <div className="max-w-xl">
          <p className="text-sm tracking-[0.2em] text-brand-cocoa/75 uppercase">Our Services</p>
          <h2 className="mt-4 font-serif text-[3.1rem] leading-[0.9] tracking-[-0.01em] text-brand-cocoa sm:text-[4.8rem]">
            A range of
            <br />
            high-quality
            <br />
            beauty services
          </h2>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pr-9 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => {
              const visual = serviceVisuals[service.slug] ?? fallbackVisual;

              return (
                <article
                  key={service.slug}
                  className="group relative h-124 w-[76vw] min-w-[18rem] max-w-110 snap-start overflow-hidden border border-white/30"
                >
                  <Image
                    src={visual.imageUrl}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 1280px) 70vw, 28vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/18" />

                  <div className="absolute inset-x-7 top-6">
                    <span className="inline-flex rounded-full bg-[#6f7b69] px-5 py-2 text-[0.73rem] font-semibold tracking-[0.2em] text-white uppercase">
                      From {formatUGX(service.priceFrom)}
                    </span>
                  </div>

                  <div className="absolute inset-x-7 bottom-8 text-white">
                    <h3 className="font-serif text-[2.75rem] leading-[0.95] tracking-[-0.01em]">
                      {service.name}
                    </h3>
                    <p className="mt-4 max-w-[24ch] text-[1.02rem] leading-8 text-white/90">{service.description}</p>

                    <Link
                      href="/services"
                      className="mt-8 inline-flex min-w-68 items-center justify-center border border-white/70 px-7 py-4 text-xs font-semibold tracking-[0.26em] text-white uppercase transition hover:bg-white hover:text-brand-cocoa"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 sm:px-2">
            <button
              type="button"
              aria-label="Previous services"
              onClick={() => scrollByCard("prev")}
              className="pointer-events-auto hidden h-18 w-18 items-center justify-center rounded-full bg-[#c88da0] text-4xl leading-none text-white shadow-[0_18px_35px_-20px_rgba(40,20,24,0.6)] transition hover:scale-105 sm:inline-flex"
            >
              <span className="-mt-1">\u2190</span>
            </button>

            <button
              type="button"
              aria-label="Next services"
              onClick={() => scrollByCard("next")}
              className="pointer-events-auto hidden h-18 w-18 items-center justify-center rounded-full bg-[#c88da0] text-4xl leading-none text-white shadow-[0_18px_35px_-20px_rgba(40,20,24,0.6)] transition hover:scale-105 sm:inline-flex"
            >
              <span className="-mt-1">\u2192</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
