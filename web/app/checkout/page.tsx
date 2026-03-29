"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "@/lib/cart-store";
import { calculateSubtotal, formatUGX } from "@/lib/utils";

export default function CheckoutChoicePage() {
  const items = useCartStore((state) => state.items);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);

  if (items.length === 0) {
    return (
      <div className="shell py-12 sm:py-16">
        <div className="luxury-card p-8 sm:p-10">
          <h1 className="font-serif text-4xl text-brand-cocoa">Checkout is empty</h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            Add products first, then choose your preferred checkout method.
          </p>
          <Link
            href="/products"
            className="mt-7 inline-flex rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-12 sm:py-16">
      <header className="luxury-card p-8 sm:p-10">
        <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">Checkout Method</p>
        <h1 className="mt-3 font-serif text-4xl text-brand-cocoa sm:text-5xl">Choose How You Want to Complete Your Order</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
          Keep the concierge experience with WhatsApp, or proceed with the on-site checkout flow.
          You can use either option for the same cart.
        </p>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="luxury-card p-6 sm:p-8">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">Recommended for mobile</p>
          <h2 className="mt-3 font-serif text-3xl text-brand-cocoa">Order via WhatsApp</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Send your cart directly to the studio team and confirm details in chat for a concierge
            ordering experience.
          </p>
          <Link
            href="/checkout/whatsapp"
            className="mt-7 inline-flex rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
          >
            Continue with WhatsApp
          </Link>
        </article>

        <article className="luxury-card p-6 sm:p-8">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">Scalable flow</p>
          <h2 className="mt-3 font-serif text-3xl text-brand-cocoa">Checkout on Site</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Submit your order details in the website flow. This is the path to attach Flutterwave
            and card payments.
          </p>
          <Link
            href="/checkout/site"
            className="mt-7 inline-flex rounded-full border border-brand-cocoa/25 bg-white px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
          >
            Continue on site
          </Link>
        </article>
      </section>

      <aside className="luxury-card mt-8 p-6 sm:p-7">
        <p className="text-sm text-muted">Cart subtotal</p>
        <p className="mt-1 font-serif text-3xl text-brand-cocoa">{formatUGX(subtotal)}</p>
      </aside>
    </div>
  );
}
