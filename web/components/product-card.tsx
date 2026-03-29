import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import type { Product } from "@/lib/types";
import { formatUGX } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <article className="luxury-card overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block">
        {image ? (
          <Image
            src={image.url}
            alt={image.alt}
            width={900}
            height={1100}
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="h-64 w-full bg-brand-blush" />
        )}
      </Link>

      <div className="space-y-4 p-5">
        <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">{product.category}</p>
        <h3 className="font-serif text-2xl text-brand-cocoa">{product.name}</h3>
        <p className="text-sm leading-7 text-muted">{product.description}</p>

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-sm font-semibold tracking-[0.14em] text-brand-gold uppercase">
            {formatUGX(product.price)}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
}
