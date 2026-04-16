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
    title: "Red French Tip Nail Art",
    category: "French",
    imageUrl: "/images/russ-nails-kampala-red-french-tip-nail-art.webp",
    alt: "Red french tip nail art by Russ Nails Kampala",
  },
  {
    id: "gallery-2",
    title: "Hot Pink Ombre Almond Set",
    category: "Editorial Set",
    imageUrl: "/images/russ-nails-kampala-hot-pink-ombre-almond-nails.webp",
    alt: "Hot pink ombre almond nail set",
  },
  {
    id: "gallery-3",
    title: "Leopard Accent Gold Line Set",
    category: "Nail Art",
    imageUrl: "/images/russ-nails-kampala-leopard-accent-gold-line-nails.webp",
    alt: "Leopard accent nails with gold line detail",
  },
  {
    id: "gallery-4",
    title: "Pink Square French Tips",
    category: "French",
    imageUrl: "/images/russ-nails-kampala-pink-square-french-tip-nails.webp",
    alt: "Pink square french tip nails",
  },
  {
    id: "gallery-5",
    title: "Glossy Red French Manicure",
    category: "Classic",
    imageUrl: "/images/russ-nails-kampala-red-glossy-french-manicure.webp",
    alt: "Glossy red french manicure",
  },
  {
    id: "gallery-6",
    title: "White Glitter Accent Square Set",
    category: "Bespoke",
    imageUrl: "/images/russ-nails-kampala-white-glitter-accent-square-nails.webp",
    alt: "White glitter accent square nail set",
  },
  {
    id: "gallery-7",
    title: "Fuchsia Ombre French Closeup",
    category: "Editorial Set",
    imageUrl: "/images/russ-nails-kampala-fuchsia-ombre-french-nails-closeup.webp",
    alt: "Fuchsia ombre french nails close-up",
  },
  {
    id: "gallery-8",
    title: "Soft Pink Square Acrylic Nails",
    category: "Bridal",
    imageUrl: "/images/russ-nails-kampala-soft-pink-square-acrylic-nails.webp",
    alt: "Soft pink square acrylic nails",
  },
  {
    id: "gallery-9",
    title: "Leopard Print Almond Nails",
    category: "Nail Art",
    imageUrl: "/images/russ-nails-kampala-leopard-print-almond-nails.webp",
    alt: "Leopard print almond nail design",
  },
  {
    id: "gallery-10",
    title: "White Polka Dot French Tips",
    category: "Nail Art",
    imageUrl: "/images/russ-nails-kampala-white-polka-dot-french-tips.webp",
    alt: "White polka dot french tip nails",
  },
  {
    id: "gallery-11",
    title: "Pink French Heart Nail Design",
    category: "Bridal",
    imageUrl: "/images/russ-nails-kampala-pink-french-heart-nail-design.webp",
    alt: "Pink french heart nail design",
  },
  {
    id: "gallery-12",
    title: "Classic Red French Finish",
    category: "Classic",
    imageUrl: "/images/russ-nails-kampala-red-french-tip-nail-art.webp",
    alt: "Classic red french finish",
  },
  {
    id: "gallery-13",
    title: "Bold Pink Ombre Finish",
    category: "Editorial Set",
    imageUrl: "/images/russ-nails-kampala-hot-pink-ombre-almond-nails.webp",
    alt: "Bold pink ombre nail finish",
  },
  {
    id: "gallery-14",
    title: "Signature Soft Pink Finish",
    category: "Studio Care",
    imageUrl: "/images/russ-nails-kampala-soft-pink-square-acrylic-nails.webp",
    alt: "Signature soft pink manicure finish",
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
        url: "/images/product1.png",
        alt: "Russ Nails signature cuticle oil bottle",
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
        url: "/images/product2.png",
        alt: "Russ Nails high gloss top coat bottle",
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
        url: "/images/product3.png",
        alt: "Russ Nails gentle gel removal kit",
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
        url: "/images/product4.png",
        alt: "Russ Nails luxury hand cream",
      },
    ],
  },
];
