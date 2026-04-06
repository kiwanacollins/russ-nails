import { buildWhatsAppLink } from "@/lib/utils";

export function WhatsAppFab() {
  const link = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569",
    "Hello Russ Nails, I would like to book or order products.",
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center rounded-full bg-[#25D366] px-5 py-3 text-xs font-bold tracking-[0.16em] text-white uppercase shadow-lg transition hover:-translate-y-0.5"
    >
      WhatsApp
    </a>
  );
}
