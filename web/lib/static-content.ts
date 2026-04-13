import type { GalleryShot, Product, Service, Testimonial } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "gel-extensions",
    name: "Gel Extensions",
    duration: "120 minutes",
    priceFrom: 100000,
    description:
      "Structured gel extension set with shape balancing, precise apex work, and a high-gloss finish.",
  },
  {
    slug: "gel-overlay",
    name: "Gel Overlay",
    duration: "90 minutes",
    priceFrom: 70000,
    description:
      "Protective overlay on natural nails for added strength, smooth contouring, and long-wear shine.",
  },
  {
    slug: "gel-manicure",
    name: "Gel Manicure",
    duration: "75 minutes",
    priceFrom: 50000,
    description:
      "Cuticle care, shaping, and gel polish application designed for a clean and durable everyday finish.",
  },
  {
    slug: "gel-toe-nails",
    name: "Gel Toe Nails",
    duration: "60 minutes",
    priceFrom: 30000,
    description:
      "Long-lasting gel polish for toes with prep, shaping, and refined color application.",
  },
  {
    slug: "gel-with-pedicure",
    name: "Gel with Pedicure",
    duration: "105 minutes",
    priceFrom: 70000,
    description:
      "Classic pedicure treatment completed with gel application for a polished and longer-lasting result.",
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    duration: "75 minutes",
    priceFrom: 40000,
    description:
      "Full pedicure with soak, exfoliation, nail shaping, and finishing for refreshed feet and neat toes.",
  },
];

export const galleryShots: GalleryShot[] = [
  {
    id: "gallery-1",
    title: "Soft Nude Almond Set",
    category: "Editorial Set",
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury nude almond nail set",
  },
  {
    id: "gallery-2",
    title: "Chrome Bridal Finish",
    category: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
    alt: "Chrome bridal manicure",
  },
  {
    id: "gallery-3",
    title: "Rose Quartz Design",
    category: "Nail Art",
    imageUrl:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
    alt: "Rose quartz nail art",
  },
  {
    id: "gallery-4",
    title: "Minimal French Sculpt",
    category: "French",
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    alt: "Minimal french nails",
  },
  {
    id: "gallery-5",
    title: "Editorial Red Gloss",
    category: "Classic",
    imageUrl:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
    alt: "Glossy red manicure",
  },
  {
    id: "gallery-6",
    title: "Pearl Bloom Detail",
    category: "Bespoke",
    imageUrl:
      "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80",
    alt: "Pearl bloom manicure design",
  },
  {
    id: "gallery-7",
    title: "Velvet Cocoa Gloss",
    category: "Classic",
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    alt: "Velvet cocoa gloss manicure",
  },
  {
    id: "gallery-8",
    title: "Soft Bridal Contour",
    category: "Bridal",
    imageUrl:
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=900&q=80",
    alt: "Soft bridal contour manicure",
  },
  {
    id: "gallery-9",
    title: "Midnight Detail Set",
    category: "Editorial Set",
    imageUrl:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1600&q=80",
    alt: "Midnight detail nail set",
  },
  {
    id: "gallery-10",
    title: "Studio Portrait Nails",
    category: "Campaign",
    imageUrl:
      "https://images.unsplash.com/photo-1690749138086-7422f71dc159?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Beauty portrait with polished nails",
  },
  {
    id: "gallery-11",
    title: "Refined Shape Finish",
    category: "Nail Art",
    imageUrl:
      "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Refined shape and polish finish",
  },
  {
    id: "gallery-12",
    title: "Signature Care Moment",
    category: "Aftercare",
    imageUrl:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
    alt: "Signature nail aftercare moment",
  },
  {
    id: "gallery-13",
    title: "Gentle Removal Ritual",
    category: "Aftercare",
    imageUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    alt: "Gentle gel removal setup",
  },
  {
    id: "gallery-14",
    title: "Luxury Hand Care Pairing",
    category: "Studio Care",
    imageUrl:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury hand care with polished nails",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Diana K.",
    quote:
      "The finish quality is flawless every time. Russ Nails is now part of my monthly executive routine.",
  },
  {
    name: "Angela M.",
    quote:
      "I booked my bridal set and every photo turned out beautiful. The studio experience felt truly premium.",
  },
  {
    name: "Melissa A.",
    quote:
      "I love that I can book quickly on WhatsApp and still shop products in one place.",
  },
];

export const fallbackProducts: Product[] = [
  {
    id: "fallback-cuticle-oil",
    slug: "signature-cuticle-oil",
    name: "Signature Cuticle Oil",
    price: 42000,
    description:
      "Nourishing oil blend for daily hydration and nail strength between appointments.",
    category: "Aftercare",
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
        alt: "Cuticle oil bottle",
      },
    ],
  },
  {
    id: "fallback-gloss-top-coat",
    slug: "high-gloss-top-coat",
    name: "High Gloss Top Coat",
    price: 55000,
    description:
      "Salon-grade protective layer that extends polish wear and elevates shine.",
    category: "Polish",
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
        alt: "Top coat bottle",
      },
    ],
  },
  {
    id: "fallback-gel-removal-kit",
    slug: "gentle-gel-removal-kit",
    name: "Gentle Gel Removal Kit",
    price: 68000,
    description:
      "At-home gel removal essentials designed to protect natural nail integrity.",
    category: "Aftercare",
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
        alt: "Gel removal kit",
      },
    ],
  },
  {
    id: "fallback-luxury-hand-cream",
    slug: "luxury-hand-cream",
    name: "Luxury Hand Cream",
    price: 50000,
    description:
      "Fast-absorbing hand cream with shea and vitamin E for soft, luminous skin.",
    category: "Body Care",
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
        alt: "Luxury hand cream",
      },
    ],
  },
];
