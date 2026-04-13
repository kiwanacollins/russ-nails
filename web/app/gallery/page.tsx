import type { Metadata } from "next";
import { galleryShots } from "@/lib/static-content";
import { LightGalleryGrid } from "@/components/lightgallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Curated Russ Nails gallery showcasing premium nail artistry and finish quality.",
};

export default function GalleryPage() {
  const galleryCategories = [...new Set(galleryShots.map((shot) => shot.category))];

  return (
    <div className="shell py-12 sm:py-16">
      <header className="luxury-card p-8 sm:p-10">
        <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Portfolio</p>
        <h1 className="mt-3 font-serif text-4xl text-brand-cocoa sm:text-5xl">Studio Gallery</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          A curated look at shape work, color stories, and detail finishes created for appointments,
          weddings, and editorial moments.
        </p>
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
