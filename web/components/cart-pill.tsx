"use client";

import Link from "next/link";
import { useMemo } from "react";
import { getItemCount, useCartStore } from "@/lib/cart-store";

interface CartPillProps {
  variant?: "default" | "light" | "rose";
}

export function CartPill({ variant = "default" }: CartPillProps) {
  const items = useCartStore((state) => state.items);
  const itemCount = useMemo(() => getItemCount(items), [items]);

  const styles = {
    default: "bg-brand-cocoa text-white hover:bg-brand-clay",
    light: "border border-white/45 bg-white/12 text-white backdrop-blur hover:bg-white/20",
    rose: "bg-[#f9d0d5] text-[#b05060] ring-1 ring-[#f0b8bf] hover:bg-[#f5bfc6]",
  };

  const badgeStyles = {
    default: "bg-white/20",
    light: "bg-white/25",
    rose: "bg-[#f0b8bf] text-[#b05060]",
  };

  return (
    <Link
      href="/cart"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.14em] uppercase transition hover:-translate-y-0.5 ${styles[variant]}`}
    >
      ♡ Cart
      <span
        className={`inline-flex min-w-5 items-center justify-center rounded-full px-1 text-[11px] ${badgeStyles[variant]}`}
      >
        {itemCount}
      </span>
    </Link>
  );
}
