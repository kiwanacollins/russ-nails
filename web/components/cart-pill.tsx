"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getItemCount, useCartStore } from "@/lib/cart-store";

interface CartPillProps {
  variant?: "default" | "light";
}

export function CartPill({ variant = "default" }: CartPillProps) {
  const items = useCartStore((state) => state.items);
  const itemCount = useMemo(() => getItemCount(items), [items]);
  const isLight = variant === "light";

  return (
    <Link
      href="/cart"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition hover:-translate-y-0.5 ${
        isLight
          ? "border border-white/45 bg-white/12 text-white backdrop-blur hover:bg-white/20"
          : "bg-brand-cocoa text-white hover:bg-brand-clay"
      }`}
    >
      Cart
      <span
        className={`inline-flex min-w-5 items-center justify-center rounded-full px-1 text-[11px] ${
          isLight ? "bg-white/25" : "bg-white/20"
        }`}
      >
        {itemCount}
      </span>
    </Link>
  );
}
