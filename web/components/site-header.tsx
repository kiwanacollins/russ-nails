"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartPill } from "@/components/cart-pill";
import { buildWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const bookingLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256700000000",
    "Hello Russ Nails, I would like to book a luxury nail appointment.",
  );

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-40"
          : "sticky top-0 z-40 border-b border-white/10 bg-brand-cocoa/90 backdrop-blur"
      }
    >
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className={`font-serif text-2xl text-white drop-shadow-[0_6px_22px_rgba(0,0,0,0.35)]`}
        >
          Russ Nails
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.14em] uppercase transition text-white/90 hover:text-white"
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
            className="hidden rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition hover:-translate-y-0.5 sm:inline-flex border border-white/45 bg-white/12 text-white backdrop-blur hover:bg-white/20"
          >
            Book a Visit
          </a>
          <CartPill variant="light" />
        </div>
      </div>
    </header>
  );
}
