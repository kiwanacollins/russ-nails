import Image from "next/image";
import Link from "next/link";
import { WhatsAppOrderButton } from "@/components/whatsapp-order-button";
import type { Product } from "@/lib/types";
import { formatUGX } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <article className="stacked-card group">
      <div className="luxury-card h-full overflow-hidden transition duration-300 group-hover:-translate-y-1">
        <Link href={`/products/${product.slug}`} className="block overflow-hidden">
          {image ? (
            <Image
              src={image.url}
              alt={image.alt}
              width={900}
              height={1100}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
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
            <WhatsAppOrderButton product={product} label="Order" />
          </div>
        </div>
      </div>
    </article>
  );
}
