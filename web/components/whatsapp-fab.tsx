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
      className="fixed right-4 bottom-4 z-40 inline-flex items-center rounded-full bg-[#25D366] px-4 py-2.5 text-[0.65rem] font-bold tracking-[0.14em] text-white uppercase shadow-lg transition hover:-translate-y-0.5 sm:right-5 sm:bottom-5 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.16em]"
    >
      WhatsApp
    </a>
  );
}
