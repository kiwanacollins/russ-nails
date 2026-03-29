"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getItemCount, useCartStore } from "@/lib/cart-store";

export function CartPill() {
  const items = useCartStore((state) => state.items);
  const itemCount = useMemo(() => getItemCount(items), [items]);

  return (
    <Link
      href="/cart"
      className="inline-flex items-center gap-2 rounded-full bg-brand-cocoa px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay"
    >
      Cart
      <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-white/20 px-1 text-[11px]">
        {itemCount}
      </span>
    </Link>
  );
}
