"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { Service } from "@/lib/types";

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

const serviceCopy: Record<string, { title: string; summary: string }> = {
  "couture-gel-extensions": {
    title: "Gel Extensions",
    summary: "Structured extensions with shape analysis and a long-wear glossy finish.",
  },
  "signature-russian-manicure": {
    title: "Russian Manicure",
    summary: "Detailed dry manicure work for clean cuticles and longer polish life.",
  },
  "bridal-nail-suite": {
    title: "Bridal Suite",
    summary: "Consultation-led bridal set with trial design and wedding-day polish confidence.",
  },
  "executive-pedicure": {
    title: "Executive Pedicure",
    summary: "Luxury soak, exfoliation, and massage finished with a durable gel top coat.",
  },
  "nail-art-bespoke": {
    title: "Nail Art Studio",
    summary: "Custom hand-painted art and embellishments matched to your event palette.",
  },
};

function formatCompactUGX(value: number): string {
  const inThousands = Math.round(value / 1000);
  return `UGX ${inThousands}K`;
}

export function ServicesShowcaseSection({ services }: ServicesShowcaseSectionProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(services.length - 1, 0);

  const scrollToIndex = (index: number) => {
    const slider = sliderRef.current;
    const targetCard = cardRefs.current[index];
    if (!slider || !targetCard) {
      return;
    }

    slider.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth",
    });
  };

  const goTo = (direction: "prev" | "next") => {
    if (services.length === 0) {
      return;
    }

    setActiveIndex((prev) => {
      const currentIndex = Math.min(prev, maxIndex);
      const nextIndex = direction === "next" ? Math.min(currentIndex + 1, maxIndex) : Math.max(currentIndex - 1, 0);
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  return (
    <section className="mt-20 bg-[#e7dddc] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-375 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-10">
          <div className="max-w-xl lg:w-[30%] lg:max-w-none lg:pb-6">
            <p className="text-sm tracking-[0.2em] text-brand-cocoa/75 uppercase">Our Services</p>
            <h2 className="mt-4 font-serif text-[3.1rem] leading-[0.9] tracking-[-0.01em] text-brand-cocoa sm:text-[4.8rem]">
              A range of
              <br />
              high-quality
              <br />
              beauty services
            </h2>
          </div>

          <div className="relative w-full overflow-visible lg:w-[70%] lg:flex-1">
            <div
              ref={sliderRef}
              className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pl-0 pr-18 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
            {services.map((service, index) => {
              const visual = serviceVisuals[service.slug] ?? fallbackVisual;
              const copy = serviceCopy[service.slug];
              const title = copy?.title ?? service.name;
              const summary = copy?.summary ?? service.description;

              return (
                <article
                  key={service.slug}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="group relative h-124 w-[90%] min-w-72 shrink-0 snap-start overflow-hidden border border-white/30 sm:w-[78%] sm:min-w-88 lg:w-[calc((100%-2.5rem)/3)] lg:min-w-0"
                >
                  <Image
                    src={visual.imageUrl}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 78vw, 28vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/18" />

                  <div className="absolute inset-x-7 top-6">
                    <span className="inline-flex rounded-full bg-[#6f7b69] px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-white uppercase">
                      From {formatCompactUGX(service.priceFrom)}
                    </span>
                  </div>

                  <div className="absolute inset-x-7 bottom-8 text-white">
                    <h3 className="max-w-[11ch] font-serif text-[1.85rem] leading-[0.98] tracking-[-0.01em] sm:text-[2.05rem] lg:text-[1.75rem] xl:text-[2rem]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-[27ch] overflow-hidden text-[0.9rem] leading-7 text-white/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]">
                      {summary}
                    </p>

                    <Link
                      href="/services"
                      className="mt-6 inline-flex w-full max-w-64 items-center justify-center border border-white/70 px-4 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-white hover:text-brand-cocoa"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Previous services"
            onClick={() => goTo("prev")}
            disabled={activeIndex <= 0}
            className="absolute left-4 top-1/2 z-30 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c892a8] text-white shadow-[0_20px_35px_-20px_rgba(40,20,24,0.75)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
              <path
                d="M15.5 6.5L9.5 12L15.5 17.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next services"
            onClick={() => goTo("next")}
            disabled={activeIndex >= maxIndex}
            className="absolute right-4 top-1/2 z-30 inline-flex h-20 w-20 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c892a8] text-white shadow-[0_20px_35px_-20px_rgba(40,20,24,0.75)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-45"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
              <path
                d="M8.5 6.5L14.5 12L8.5 17.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
