import "server-only";

import { cache } from "react";
import { fallbackProducts } from "@/lib/static-content";
import type { Product, ProductImage } from "@/lib/types";

interface PayloadMediaDoc {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface PayloadProductDoc {
  id?: string;
  slug?: string;
  name?: string;
  price?: number;
  description?: string;
  category?: string;
  featured?: boolean;
  images?: PayloadMediaDoc[] | PayloadMediaDoc | null;
}

interface PayloadProductsResponse {
  docs?: PayloadProductDoc[];
}

const payloadBaseUrl = process.env.PAYLOAD_API_URL?.replace(/\/$/, "");

function toAbsoluteMediaUrl(url: string): string {
  if (!url) {
    return "";
  }

  if (/^https?:\/\//.test(url)) {
    return url;
  }

  if (!payloadBaseUrl) {
    return url;
  }

  return `${payloadBaseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}

function normalizeImages(images: PayloadProductDoc["images"]): ProductImage[] {
  if (!images) {
    return [];
  }

  const list = Array.isArray(images) ? images : [images];
  const normalizedImages: ProductImage[] = [];

  for (const image of list) {
    if (!image?.url) {
      continue;
    }

    normalizedImages.push({
      url: toAbsoluteMediaUrl(image.url),
      alt: image.alt ?? "Russ Nails product image",
      width: image.width,
      height: image.height,
    });
  }

  return normalizedImages;
}

function normalizeProduct(doc: PayloadProductDoc): Product | null {
  if (!doc.id || !doc.slug || !doc.name || typeof doc.price !== "number") {
    return null;
  }

  return {
    id: doc.id,
    slug: doc.slug,
    name: doc.name,
    price: doc.price,
    description: doc.description ?? "Curated luxury nail product.",
    category: doc.category ?? "General",
    featured: Boolean(doc.featured),
    images: normalizeImages(doc.images),
  };
}

export const getProducts = cache(async (): Promise<Product[]> => {
  if (!payloadBaseUrl) {
    return fallbackProducts;
  }

  try {
    const response = await fetch(
      `${payloadBaseUrl}/api/products?depth=1&limit=48&sort=-updatedAt`,
      {
        next: { revalidate: 60, tags: ["products"] },
      },
    );

    if (!response.ok) {
      return fallbackProducts;
    }

    const data = (await response.json()) as PayloadProductsResponse;
    const products = (data.docs ?? [])
      .map(normalizeProduct)
      .filter((product): product is Product => Boolean(product));

    return products.length > 0 ? products : fallbackProducts;
  } catch {
    return fallbackProducts;
  }
});

export const getProductBySlug = cache(async (slug: string): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
});
