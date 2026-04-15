import { redirect } from "next/navigation";
import { getProductsOrderingWhatsAppLink } from "@/lib/whatsapp-ordering";

export default function WhatsAppCheckoutPage() {
  redirect(getProductsOrderingWhatsAppLink());
}
