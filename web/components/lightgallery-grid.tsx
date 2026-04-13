"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import type { GalleryShot } from "@/lib/types";

type LightGalleryGridProps = {
  shots: GalleryShot[];
};

const tileAspectRatios = ["4 / 5", "1 / 1", "3 / 4", "5 / 6", "4 / 5", "1 / 1"];

function toHighResImage(url: string) {
  return url.replace(/w=\d+/, "w=2200");
}

export function LightGalleryGrid({ shots }: LightGalleryGridProps) {
  return (
    <LightGallery
      addClass="russ-lightgallery"
      selector=".gallery-item"
      speed={500}
      download={false}
      counter
      hideBarsDelay={3200}
      plugins={[lgThumbnail, lgZoom, lgFullscreen]}
    >
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {shots.map((shot, index) => (
          <a
            key={shot.id}
            href={toHighResImage(shot.imageUrl)}
            aria-label={`Open ${shot.title}`}
            className="gallery-item group mb-4 block break-inside-avoid overflow-hidden rounded-3xl border border-brand-cocoa/10 bg-white/80 shadow-[0_16px_48px_-36px_rgba(51,31,26,0.62)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_58px_-34px_rgba(51,31,26,0.66)]"
          >
            <div className="relative" style={{ aspectRatio: tileAspectRatios[index % tileAspectRatios.length] }}>
              <Image
                src={shot.imageUrl}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1280px) 46vw, (max-width: 1536px) 31vw, 24vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/58 via-black/16 to-transparent opacity-65 transition duration-300 group-hover:opacity-90" />

              <div className="absolute inset-x-4 bottom-3">
                <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-white/86 uppercase">
                  {shot.category}
                </p>
                <p className="mt-1 text-sm font-medium text-white">{shot.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </LightGallery>
  );
}
