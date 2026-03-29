import Link from "next/link";
import { CartPill } from "@/components/cart-pill";
import { buildWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const bookingLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256700000000",
    "Hello Russ Nails, I would like to book a luxury nail appointment.",
  );

  return (
    <header className="sticky top-0 z-40 border-b border-brand-cocoa/10 bg-surface/85 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-serif text-2xl text-brand-cocoa">
          Russ Nails
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.16em] text-brand-cocoa/85 uppercase transition hover:text-brand-clay"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-brand-cocoa/20 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Book on WhatsApp
          </a>
          <CartPill />
        </div>
      </div>
    </header>
  );
}
