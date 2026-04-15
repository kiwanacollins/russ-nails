import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/payload-client";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop the Russ Nails curated product catalog managed through Payload CMS for premium aftercare and polish essentials.",
};

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="shell py-12 sm:py-16" data-aos="fade-up-soft">
      <header className="luxury-card p-8 sm:p-10" data-aos="fade-up-soft">
        <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Shop</p>
        <h1 className="mt-3 font-serif text-4xl text-brand-cocoa sm:text-5xl">Curated Product Collection</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          Product data is sourced from Payload CMS while the storefront experience stays fully coded
          in Next.js for performance and design control.
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <div key={product.id} data-aos="fade-up-soft" data-aos-delay={index * 75}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}
