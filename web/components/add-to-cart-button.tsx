"use client";

import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import type { Product } from "@/lib/types";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const handleClick = () => {
    addItem(product, 1);
    setAdded(true);

    timerRef.current = window.setTimeout(() => {
      setAdded(false);
    }, 1400);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay ${className ?? ""}`}
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
