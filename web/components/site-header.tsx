"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartPill } from "@/components/cart-pill";
import { buildWhatsAppLink } from "@/lib/utils";
import { services } from "@/lib/static-content";
import { Caveat } from "next/font/google";

const script = Caveat({ subsets: ["latin"], weight: ["700"] });

type NavChild = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

const serviceChildren: NavChild[] = [
  { label: "All Services", href: "/services" },
  ...services.map((service) => ({
    label: service.name,
    href: "/services",
  })),
];

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: serviceChildren },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const bookingLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569",
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
        <nav className={`hidden items-center gap-1 md:flex ${isHome ? "text-white" : "text-[#a06070]"}`}>
          {navLinks.map((item, i) => (
            <div key={item.href} className="relative flex items-center group/menu">
              {i !== 0 && (
                <span className={`mx-1 text-[10px] ${isHome ? "text-white/40" : "text-[#e8a0a8]"}`}>·</span>
              )}
              <Link
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-bold tracking-[0.14em] uppercase transition ${
                  pathname === item.href
                    ? isHome
                      ? "bg-white/30 text-white ring-1 ring-white/35 backdrop-blur-sm drop-shadow-[0_1px_8px_rgba(0,0,0,0.32)]"
                      : "bg-[#fce8ea] text-[#8d4f5e]"
                    : isHome
                    ? "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] hover:bg-white/24"
                    : "text-[#8d4f5e] hover:bg-[#fce8ea] hover:text-[#8d4f5e]"
                }`}
              >
                <span className="inline-flex items-center gap-1">
                  {item.label}
                  {item.children && <span className="text-[10px]">▾</span>}
                </span>
              </Link>

              {item.children && (
                <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden w-[min(92vw,760px)] -translate-x-1/2 pt-4 group-hover/menu:block group-focus-within/menu:block">
                  <div className="pointer-events-auto overflow-hidden rounded-3xl border border-[#efd4d9] bg-[#fff7f8]/95 p-6 shadow-[0_35px_90px_-45px_rgba(98,56,67,0.55)] backdrop-blur-xl">
                    <div className="grid gap-6 md:grid-cols-[0.95fr_1.3fr]">
                      <div className="rounded-2xl border border-[#efccd3] bg-[#fcecef] p-5">
                        <p className="text-xs font-semibold tracking-[0.16em] text-[#a06070] uppercase">Need Guidance?</p>
                        <p className="mt-3 text-sm leading-6 text-[#6a4a50]">
                          Not sure which service fits your look? Our team can help you choose the right treatment.
                        </p>
                        <a
                          href="tel:+256762267569"
                          className="mt-4 inline-flex rounded-full bg-[#f3cfd5] px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#8d4f5e] uppercase transition hover:-translate-y-0.5"
                        >
                          Call: +256 762 267 569
                        </a>
                        <p className="mt-2 text-xs text-[#6a4a50]">
                          Alt line:{" "}
                          <a
                            href="tel:+256708420038"
                            className="underline decoration-dotted underline-offset-2 hover:text-[#8d4f5e]"
                          >
                            +256 708 420 038
                          </a>
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold tracking-[0.16em] text-[#1f1a18] uppercase">Services Menu</p>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={`${child.label}-${child.href}`}>
                              <Link
                                href={child.href}
                                className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm text-[#1f1a18] transition hover:border-[#efd4d9] hover:bg-white"
                              >
                                <span>{child.label}</span>
                                <span className="text-[#1f1a18]">→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
          <CartPill />
        </div>
      </div>

      {/* Decorative bottom line on non-home */}
      {!isHome && (
        <div className="h-px bg-linear-to-r from-transparent via-[#f2b8c0] to-transparent" />
      )}
    </header>
  );
}
