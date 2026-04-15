import type { Product } from "@/lib/types";
import { buildWhatsAppLink, formatUGX } from "@/lib/utils";

function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569";
}

export function getProductsOrderingWhatsAppLink(): string {
  return buildWhatsAppLink(
    getWhatsAppNumber(),
    "Hello Russ Nails, I would like to order nail products via WhatsApp.",
  );
}

export function getProductOrderingWhatsAppLink(
  product: Pick<Product, "name" | "price" | "slug">,
): string {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
  const productPath = `/products/${product.slug}`;
  const productLink = siteUrl ? `${siteUrl}${productPath}` : productPath;

  const message = [
    "Hello Russ Nails, I would like to order this product.",
    `Product: ${product.name}`,
    `Price: ${formatUGX(product.price)}`,
    `Product Link: ${productLink}`,
  ].join("\n");

  return buildWhatsAppLink(getWhatsAppNumber(), message);
}