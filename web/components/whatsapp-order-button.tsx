import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { getProductOrderingWhatsAppLink } from "@/lib/whatsapp-ordering";

interface WhatsAppOrderButtonProps {
  product: Pick<Product, "name" | "price" | "slug">;
  className?: string;
  label?: string;
}

export function WhatsAppOrderButton({
  product,
  className,
  label = "Order on WhatsApp",
}: WhatsAppOrderButtonProps) {
  return (
    <a
      href={getProductOrderingWhatsAppLink(product)}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay",
        className,
      )}
    >
      {label}
    </a>
  );
}