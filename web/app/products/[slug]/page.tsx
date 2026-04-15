import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { getProductBySlug, getProducts } from "@/lib/payload-client";
import { formatUGX } from "@/lib/utils";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const image = product.images[0];

  return (
    <div className="shell py-12 sm:py-16" data-aos="fade-up-soft">
      <Link href="/products" className="text-sm font-semibold text-brand-cocoa underline-offset-4 hover:underline">
        Back to products
      </Link>

      <article className="luxury-card mt-6 grid overflow-hidden lg:grid-cols-[1fr_1.1fr]" data-aos="fade-up-soft">
        <div className="min-h-80 bg-brand-blush">
          {image ? (
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>

        <div className="space-y-5 p-8 sm:p-10">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">{product.category}</p>
          <h1 className="font-serif text-3xl text-brand-cocoa sm:text-4xl">{product.name}</h1>
          <p className="text-sm leading-8 text-muted sm:text-base">{product.description}</p>
          <p className="text-lg font-semibold tracking-[0.12em] text-brand-gold uppercase">
            {formatUGX(product.price)}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <AddToCartButton product={product} className="px-6 py-3" />
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-brand-cocoa/25 bg-white/70 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Go to cart
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
