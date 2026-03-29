"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CartItem, Product } from "@/lib/types";

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
}

function toCartItem(product: Product, quantity: number): CartItem {
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    quantity,
    image: product.images[0],
  };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const previous = get().items;
        const existing = previous.find((item) => item.productId === product.id);

        if (!existing) {
          set({ items: [...previous, toCartItem(product, quantity)] });
          return;
        }

        set({
          items: previous.map((item) =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        });
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.productId !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set({
            items: get().items.filter((item) => item.productId !== productId),
          });
          return;
        }

        set({
          items: get().items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item,
          ),
        });
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "russ-nails-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export function getItemCount(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.quantity, 0);
}
