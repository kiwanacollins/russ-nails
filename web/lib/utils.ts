import type { CartItem } from "@/lib/types";

const ugxFormatter = new Intl.NumberFormat("en-UG", {
  style: "currency",
  currency: "UGX",
  maximumFractionDigits: 0,
});

export function formatUGX(value: number): string {
  return ugxFormatter.format(value);
}

export function calculateSubtotal(items: Pick<CartItem, "price" | "quantity">[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function normalizeWhatsAppNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, "");
}

export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  const normalized = normalizeWhatsAppNumber(phoneNumber);
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

export function createOrderReference(prefix = "RN"): string {
  const datePart = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${datePart}-${randomPart}`;
}
