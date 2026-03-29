import type { CartItem } from "@/lib/types";
import { formatUGX } from "@/lib/utils";

interface ComposeOrderMessageInput {
  orderRef?: string;
  customerName: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  notes?: string;
}

export function composeWhatsAppOrderMessage({
  orderRef,
  customerName,
  customerPhone,
  items,
  subtotal,
  notes,
}: ComposeOrderMessageInput): string {
  const lines = items.map(
    (item, index) => `${index + 1}. ${item.name} x${item.quantity} - ${formatUGX(item.price * item.quantity)}`,
  );

  const messageParts = [
    "Hello Russ Nails, I would like to place an order.",
    orderRef ? `Reference: ${orderRef}` : undefined,
    "",
    `Name: ${customerName}`,
    `Phone: ${customerPhone}`,
    "",
    "Items:",
    ...lines,
    "",
    `Subtotal: ${formatUGX(subtotal)}`,
    notes ? `Notes: ${notes}` : undefined,
  ];

  return messageParts.filter(Boolean).join("\n");
}
