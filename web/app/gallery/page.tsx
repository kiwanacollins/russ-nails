import type { Metadata } from "next";
import { galleryShots } from "@/lib/static-content";
import CircularGallery from "@/components/CircularGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Curated Russ Nails gallery showcasing premium nail artistry and finish quality.",
};

export default function GalleryPage() {
  const galleryItems = galleryShots.map((shot) => ({
    image: shot.imageUrl,
    text: shot.title,
  }));

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

      <section className="mt-10">
        <div className="luxury-card h-110 overflow-hidden bg-[#4b5b49] sm:h-140">
          <CircularGallery
            items={galleryItems}
            bend={1.2}
            textColor="#f7f2eb"
            borderRadius={0.06}
            scrollSpeed={1.9}
            scrollEase={0.04}
          />
        </div>
      </section>
    </div>
  );
}
