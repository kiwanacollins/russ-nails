import type { Metadata } from "next";
import Image from "next/image";
import { galleryShots } from "@/lib/static-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Curated Russ Nails gallery showcasing premium nail artistry and finish quality.",
};

export default function GalleryPage() {
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

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryShots.map((shot) => (
          <figure key={shot.id} className="luxury-card overflow-hidden">
            <Image src={shot.imageUrl} alt={shot.alt} width={900} height={1150} className="h-80 w-full object-cover" />
            <figcaption className="p-4">
              <p className="text-xs tracking-[0.16em] text-brand-cocoa/70 uppercase">{shot.category}</p>
              <p className="mt-2 text-sm font-semibold text-brand-cocoa">{shot.title}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}
