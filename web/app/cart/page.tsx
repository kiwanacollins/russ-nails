"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "@/lib/cart-store";
import { calculateSubtotal, formatUGX } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);

  if (items.length === 0) {
    return (
      <div className="shell py-12 sm:py-16" data-aos="fade-up-soft">
        <div className="luxury-card p-8 sm:p-10" data-aos="fade-up-soft">
          <h1 className="font-serif text-4xl text-brand-cocoa">Your cart is currently empty</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Add products from the shop and then choose whether to checkout on-site or finalize via
            WhatsApp concierge.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-12 sm:py-16" data-aos="fade-up-soft">
      <h1 className="font-serif text-4xl text-brand-cocoa sm:text-5xl">Cart</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <section className="luxury-card divide-y divide-brand-cocoa/10 overflow-hidden">
          {items.map((item, index) => (
            <article
              key={item.productId}
              className="grid gap-4 p-5 sm:grid-cols-[108px_1fr_auto] sm:p-6"
              data-aos="fade-up-soft"
              data-aos-delay={index * 70}
            >
              {item.image?.url ? (
                <Image
                  src={item.image.url}
                  alt={item.image.alt}
                  width={220}
                  height={220}
                  className="h-24 w-24 rounded-xl object-cover"
                />
              ) : (
                <div className="h-24 w-24 rounded-xl bg-brand-blush" />
              )}

              <div>
                <h2 className="font-serif text-2xl text-brand-cocoa">{item.name}</h2>
                <p className="mt-1 text-sm text-muted">{formatUGX(item.price)} each</p>
                <button
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  className="mt-3 text-xs font-semibold tracking-[0.12em] text-brand-cocoa uppercase underline-offset-4 hover:underline"
                >
                  Remove
                </button>
              </div>

              <div className="flex items-center gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-cocoa/25"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-semibold text-brand-cocoa">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-cocoa/25"
                >
                  +
                </button>
              </div>
            </article>
          ))}
        </section>

        <aside className="luxury-card h-fit p-6 sm:p-7" data-aos="fade-up-soft" data-aos-delay="120">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">Summary</p>
          <p className="mt-4 text-sm text-muted">Subtotal</p>
          <p className="mt-1 font-serif text-3xl text-brand-cocoa">{formatUGX(subtotal)}</p>
          <p className="mt-5 text-xs leading-6 text-muted">
            Shipping and payment fees are finalized in the next step based on your preferred checkout
            method.
          </p>

          <Link
            href="/checkout"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
          >
            Continue checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
