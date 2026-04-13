import type { Metadata } from "next";
import Image from "next/image";
import { galleryShots } from "@/lib/static-content";
import { LightGalleryGrid } from "@/components/lightgallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Curated Russ Nails gallery showcasing premium nail artistry and finish quality.",
};

export default function GalleryPage() {
  const galleryCategories = [...new Set(galleryShots.map((shot) => shot.category))];
  const previewShots = galleryShots.slice(0, 3);
  const featuredCategories = galleryCategories.slice(0, 4);

  return (
    <div className="shell py-12 sm:py-16">
      <header className="luxury-card relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,139,120,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(156,122,79,0.14),transparent_35%)]" />

        <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Portfolio</p>
            <h1 className="mt-3 font-serif text-4xl leading-[0.95] text-brand-cocoa sm:text-5xl lg:text-[3.7rem]">
              Studio Gallery
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              A curated look at shape work, color stories, and detail finishes created for appointments,
              weddings, and editorial moments.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="inline-flex rounded-full border border-brand-cocoa/15 bg-white/75 px-4 py-2 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa uppercase shadow-[0_12px_30px_-22px_rgba(51,31,26,0.55)]">
                {galleryShots.length} curated looks
              </span>
              <span className="inline-flex rounded-full border border-brand-cocoa/15 bg-white/75 px-4 py-2 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-cocoa uppercase shadow-[0_12px_30px_-22px_rgba(51,31,26,0.55)]">
                Zoom + fullscreen enabled
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {featuredCategories.map((category) => (
                <span
                  key={category}
                  className="inline-flex rounded-full border border-brand-cocoa/12 bg-white/68 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-brand-cocoa/80 uppercase"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-brand-cocoa/8 p-5 sm:p-6 lg:border-t-0 lg:border-l lg:border-brand-cocoa/8 lg:p-7">
            <div className="grid h-full min-h-84 grid-cols-2 gap-3">
              <article className="group relative col-span-2 overflow-hidden rounded-2xl border border-brand-cocoa/10 shadow-[0_18px_50px_-30px_rgba(35,23,20,0.45)]">
                <Image
                  src={previewShots[0]?.imageUrl ?? galleryShots[0].imageUrl}
                  alt={previewShots[0]?.alt ?? galleryShots[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/62 via-black/18 to-transparent" />
                <div className="absolute inset-x-4 bottom-3 text-white">
                  <p className="text-[0.62rem] tracking-[0.18em] text-white/82 uppercase">
                    {previewShots[0]?.category ?? galleryShots[0].category}
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {previewShots[0]?.title ?? galleryShots[0].title}
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-brand-cocoa/10 shadow-[0_18px_50px_-30px_rgba(35,23,20,0.45)]">
                <Image
                  src={previewShots[1]?.imageUrl ?? galleryShots[1].imageUrl}
                  alt={previewShots[1]?.alt ?? galleryShots[1].alt}
                  fill
                  sizes="(max-width: 1024px) 48vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/14 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 text-white">
                  <p className="text-[0.58rem] tracking-[0.16em] text-white/78 uppercase">
                    {previewShots[1]?.category ?? galleryShots[1].category}
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-brand-cocoa/10 shadow-[0_18px_50px_-30px_rgba(35,23,20,0.45)]">
                <Image
                  src={previewShots[2]?.imageUrl ?? galleryShots[2].imageUrl}
                  alt={previewShots[2]?.alt ?? galleryShots[2].alt}
                  fill
                  sizes="(max-width: 1024px) 48vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/14 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 text-white">
                  <p className="text-[0.58rem] tracking-[0.16em] text-white/78 uppercase">
                    {previewShots[2]?.category ?? galleryShots[2].category}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-10 luxury-card p-4 sm:p-5 lg:p-6">
        <div className="px-2 sm:px-3">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
              Tap any image to open fullscreen, zoom into fine detail work, and browse the full studio collection.
            </p>
            <span className="inline-flex rounded-full border border-brand-cocoa/14 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-cocoa uppercase">
              {galleryShots.length} Looks
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <span
                key={category}
                className="inline-flex rounded-full border border-brand-cocoa/14 bg-white/70 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-brand-cocoa/78 uppercase"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <LightGalleryGrid shots={galleryShots} />
        </div>
      </section>
    </div>
  );
}
