import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import { getProductOrderingWhatsAppLink } from "@/lib/whatsapp-ordering";
import { FaWhatsapp } from "react-icons/fa";

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
      aria-label={`Order ${product.name} on WhatsApp`}
      title="Order on WhatsApp"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-brand-cocoa px-5 py-2.5 text-xs font-semibold tracking-[0.14em] !text-white uppercase transition hover:-translate-y-0.5 hover:bg-brand-clay",
        className,
      )}
    >
      <FaWhatsapp className="h-3.5 w-3.5 shrink-0 text-[#25D366]" aria-hidden="true" />
      <span className="!text-white">{label}</span>
    </a>
  );
}