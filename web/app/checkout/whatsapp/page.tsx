"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { composeWhatsAppOrderMessage } from "@/lib/order-message";
import type { OrderPayload } from "@/lib/types";
import { buildWhatsAppLink, calculateSubtotal, formatUGX } from "@/lib/utils";

interface OrderApiResponse {
  ok: boolean;
  duplicate?: boolean;
  orderRef?: string;
  error?: string;
}

function createIdempotencyKey() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function WhatsAppCheckoutPage() {
  const items = useCartStore((state) => state.items);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderRef, setOrderRef] = useState<string | null>(null);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const payload: OrderPayload = {
      idempotencyKey: createIdempotencyKey(),
      checkoutMethod: "whatsapp",
      status: "whatsapp_inquiry",
      customer: {
        fullName,
        phone,
      },
      items,
      totals: { subtotal },
      notes: notes || undefined,
    };

    let createdOrderRef: string | undefined;

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as OrderApiResponse;

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Unable to register WhatsApp inquiry.");
      }

      createdOrderRef = data.orderRef;
      setOrderRef(data.orderRef ?? null);

      const message = composeWhatsAppOrderMessage({
        orderRef: data.orderRef,
        customerName: fullName,
        customerPhone: phone,
        items,
        subtotal,
        notes,
      });

      const whatsappLink = buildWhatsAppLink(whatsappNumber, message);
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unexpected checkout error.");
    } finally {
      setIsSubmitting(false);
    }

    if (!createdOrderRef) {
      return;
    }
  };

  if (items.length === 0) {
    return (
      <div className="shell py-12 sm:py-16">
        <div className="luxury-card p-8 sm:p-10">
          <h1 className="font-serif text-4xl text-brand-cocoa">No items to checkout</h1>
          <p className="mt-4 text-sm leading-7 text-muted">Add products before using WhatsApp checkout.</p>
          <Link
            href="/products"
            className="mt-7 inline-flex rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase"
          >
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <section className="luxury-card p-6 sm:p-8">
          <p className="text-sm tracking-[0.18em] text-brand-cocoa/70 uppercase">WhatsApp Checkout</p>
          <h1 className="mt-3 font-serif text-4xl text-brand-cocoa">Send Order to Concierge</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            We will register this inquiry, notify the studio owner, and open WhatsApp with your cart
            details prefilled for fast confirmation.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block text-sm text-muted">
              Full Name
              <input
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 text-sm text-brand-cocoa outline-none ring-brand-cocoa/40 focus:ring"
              />
            </label>

            <label className="block text-sm text-muted">
              Phone Number
              <input
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 text-sm text-brand-cocoa outline-none ring-brand-cocoa/40 focus:ring"
              />
            </label>

            <label className="block text-sm text-muted">
              Notes (optional)
              <textarea
                rows={4}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-brand-cocoa/20 bg-white px-4 py-3 text-sm text-brand-cocoa outline-none ring-brand-cocoa/40 focus:ring"
              />
            </label>

            {error ? <p className="text-sm text-red-700">{error}</p> : null}
            {orderRef ? (
              <p className="text-sm text-brand-cocoa">
                Inquiry reference: <span className="font-semibold">{orderRef}</span>
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-cocoa px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay disabled:cursor-not-allowed disabled:opacity-65"
            >
              {isSubmitting ? "Preparing WhatsApp..." : "Continue to WhatsApp"}
            </button>
          </form>
        </section>

        <aside className="luxury-card h-fit p-6 sm:p-7">
          <p className="text-xs tracking-[0.18em] text-brand-cocoa/65 uppercase">Order Summary</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {items.map((item) => (
              <li key={item.productId} className="flex justify-between gap-3">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span className="font-semibold text-brand-cocoa">{formatUGX(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-brand-cocoa/15 pt-4">
            <p className="text-sm text-muted">Subtotal</p>
            <p className="font-serif text-3xl text-brand-cocoa">{formatUGX(subtotal)}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
