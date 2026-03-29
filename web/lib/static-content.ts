import type { GalleryShot, Product, Service, Testimonial } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "couture-gel-extensions",
    name: "Couture Gel Extensions",
    duration: "120 minutes",
    priceFrom: 120000,
    description:
      "Structured gel extension set with tailored shape analysis, precision apex building, and glossy finish.",
  },
  {
    slug: "signature-russian-manicure",
    name: "Signature Russian Manicure",
    duration: "95 minutes",
    priceFrom: 85000,
    description:
      "Detailed dry manicure technique for a refined cuticle line, perfect polish longevity, and clean contouring.",
  },
  {
    slug: "bridal-nail-suite",
    name: "Bridal Nail Suite",
    duration: "150 minutes",
    priceFrom: 180000,
    description:
      "Consultation-led bridal package with trial design, wedding-day set, and hand treatment for camera-ready elegance.",
  },
  {
    slug: "executive-pedicure",
    name: "Executive Pedicure Ritual",
    duration: "90 minutes",
    priceFrom: 95000,
    description:
      "Luxury soak, exfoliation, massage, and precision polish finished with a long-wear gel top coat.",
  },
  {
    slug: "nail-art-bespoke",
    name: "Bespoke Nail Art",
    duration: "45 minutes add-on",
    priceFrom: 30000,
    description:
      "Custom hand-painted art and embellishment work matched to events, wardrobe palettes, and editorial references.",
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
