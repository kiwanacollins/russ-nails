"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartPill } from "@/components/cart-pill";
import { buildWhatsAppLink } from "@/lib/utils";
import { Caveat } from "next/font/google";

const script = Caveat({ subsets: ["latin"], weight: ["700"] });

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
          : "sticky top-0 z-40 border-b border-[#f2d6d6]/60 bg-[#fff5f5]/90 backdrop-blur-md"
      }
    >
      <div className="shell flex h-20 items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-[#e8a0a8] text-xl select-none transition group-hover:scale-110">✿</span>
          <span
            className={`${script.className} text-3xl leading-none transition ${
              isHome ? "text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]" : "text-[#c4717c]"
            }`}
          >
            Russ Nails
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item, i) => (
            <div key={item.href} className="flex items-center">
              {i !== 0 && (
                <span className={`mx-1 text-[10px] ${isHome ? "text-white/40" : "text-[#e8a0a8]"}`}>·</span>
              )}
              <Link
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase transition ${
                  pathname === item.href
                    ? isHome
                      ? "bg-white/20 text-white"
                      : "bg-[#fce8ea] text-[#c4717c]"
                    : isHome
                    ? "text-white/85 hover:bg-white/15 hover:text-white"
                    : "text-[#a06070]/80 hover:bg-[#fce8ea] hover:text-[#c4717c]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className={`hidden rounded-full px-5 py-2 text-xs font-bold tracking-[0.14em] uppercase transition hover:-translate-y-0.5 sm:inline-flex ${
              isHome
                ? "bg-white/15 text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/25"
                : "bg-[#f9d0d5] text-[#b05060] ring-1 ring-[#f0b8bf] hover:bg-[#f5bfc6]"
            }`}
          >
            ♡ Book a Visit
          </a>
          <CartPill variant={isHome ? "light" : "rose"} />
        </div>
      </div>

      {/* Decorative bottom line on non-home */}
      {!isHome && (
        <div className="h-px bg-gradient-to-r from-transparent via-[#f2b8c0] to-transparent" />
      )}
    </header>
  );
}
