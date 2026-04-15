"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buildWhatsAppLink, cn } from "@/lib/utils";
import { services } from "@/lib/static-content";

type NavChild = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

const serviceChildren: NavChild[] = services.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
}));

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: serviceChildren },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const mobileNavLinks = navLinks.filter(
  (item) => item.href !== "/cart" && item.href !== "/checkout",
);

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTopLevelMatch = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  const bookingLink = buildWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569",
    "Hello Russ Nails, I would like to book a luxury nail appointment.",
  );

  const closeNavigationOverlays = () => {
    setIsDesktopServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (!servicesMenuRef.current) {
        return;
      }

      if (!servicesMenuRef.current.contains(event.target as Node)) {
        setIsDesktopServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

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
        <Link href="/" onClick={closeNavigationOverlays} className="flex items-center group">
          <Image
            src="/russ-logo.png"
            alt="Russ Nails & Products"
            width={390}
            height={195}
            priority
            className={`mt-2 h-20 w-auto object-contain transition group-hover:scale-105 sm:h-24 md:mt-4 md:h-36 ${
              isHome
                ? "filter-[drop-shadow(0_0_8px_rgba(255,220,180,0.95))_drop-shadow(0_0_22px_rgba(202,139,120,0.85))_drop-shadow(0_0_40px_rgba(156,122,79,0.6))]"
                : "filter-[drop-shadow(0_0_6px_rgba(202,139,120,0.7))_drop-shadow(0_0_16px_rgba(156,122,79,0.45))]"
            }`}
          />
        </Link>

        {/* Nav */}
        <nav className={`hidden items-center gap-1 md:flex ${isHome ? "text-white" : "text-[#a06070]"}`}>
          {navLinks.map((item, i) => {
            const isItemActive = isTopLevelMatch(item.href);
            const linkClass = `rounded-full px-3 py-1.5 text-sm font-bold tracking-[0.14em] uppercase transition ${
              isItemActive
                ? isHome
                  ? "bg-white/30 text-white ring-1 ring-white/35 backdrop-blur-sm drop-shadow-[0_1px_8px_rgba(0,0,0,0.32)]"
                  : "bg-[#fce8ea] text-[#8d4f5e]"
                : isHome
                ? "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] hover:bg-white/24"
                : "text-[#8d4f5e] hover:bg-[#fce8ea] hover:text-[#8d4f5e]"
            }`;

            if (!item.children) {
              return (
                <div key={item.href} className="relative flex items-center">
                  {i !== 0 && (
                    <span className={`mx-1 text-[10px] ${isHome ? "text-white/40" : "text-[#e8a0a8]"}`}>·</span>
                  )}
                  <Link href={item.href} onClick={closeNavigationOverlays} className={linkClass}>
                    <span className="inline-flex items-center gap-1">{item.label}</span>
                  </Link>
                </div>
              );
            }

            return (
              <div
                key={item.href}
                ref={servicesMenuRef}
                className="relative flex items-center"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
                onFocusCapture={() => setIsDesktopServicesOpen(true)}
                onBlurCapture={(event) => {
                  const nextTarget = event.relatedTarget;

                  if (!nextTarget || !event.currentTarget.contains(nextTarget as Node)) {
                    setIsDesktopServicesOpen(false);
                  }
                }}
              >
                {i !== 0 && (
                  <span className={`mx-1 text-[10px] ${isHome ? "text-white/40" : "text-[#e8a0a8]"}`}>·</span>
                )}
                <button
                  type="button"
                  className={linkClass}
                  aria-haspopup="menu"
                  aria-expanded={isDesktopServicesOpen}
                  onClick={() => setIsDesktopServicesOpen(true)}
                >
                  <span className="inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown className={cn("h-3 w-3 transition", isDesktopServicesOpen && "rotate-180")} />
                  </span>
                </button>

                <div
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-[min(92vw,760px)] -translate-x-1/2 pt-2 transition duration-150",
                    isDesktopServicesOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
                  )}
                >
                  <div className="overflow-hidden rounded-3xl border border-[#efd4d9] bg-[#fff7f8]/95 p-6 shadow-[0_35px_90px_-45px_rgba(98,56,67,0.55)] backdrop-blur-xl">
                    <div className="grid gap-6 md:grid-cols-[0.95fr_1.3fr]">
                      <div className="rounded-2xl border border-[#e6aab5] bg-linear-to-br from-[#fff7f8] via-[#fff0f2] to-[#fbe2e8] p-5 shadow-[0_18px_45px_-28px_rgba(98,56,67,0.48)]">
                        <p className="inline-flex rounded-full bg-[#8d4f5e]/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] text-[#8d4f5e] uppercase">
                          Need Guidance?
                        </p>
                        <p className="mt-4 text-sm leading-6 text-[#5f4440] sm:text-[0.95rem]">
                          Not sure which service fits your look? Our team can help you choose the right treatment.
                        </p>
                        <a
                          href="tel:+256762267569"
                          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-brand-cocoa px-4 py-3 text-[0.7rem] font-semibold tracking-[0.12em] text-white uppercase whitespace-nowrap shadow-[0_14px_32px_-18px_rgba(95,68,64,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-clay sm:text-xs sm:tracking-[0.16em]"
                        >
                          Call now: +256 762 267 569
                        </a>
                        <p className="mt-3 text-xs leading-5 text-[#6a4a50]">
                          Alt line available:{" "}
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
                        <ul className="mt-3 grid gap-2 text-brand-cocoa sm:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={`${child.label}-${child.href}`}>
                              <Link
                                href={child.href}
                                onClick={closeNavigationOverlays}
                                className="group/service-link flex items-center justify-between rounded-xl border border-transparent bg-white/60 px-3 py-2 text-sm font-medium text-brand-cocoa transition hover:border-[#efd4d9] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cocoa/25"
                              >
                                <span>{child.label}</span>
                                <span aria-hidden="true">→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden",
                  isHome
                    ? "border-white/45 bg-white/15 text-white backdrop-blur hover:bg-white/25"
                    : "border-[#f0b8bf] bg-[#f9d0d5] text-[#b05060] hover:bg-[#f5bfc6]",
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="flex h-full w-[86vw] max-w-sm flex-col border-l-[#efd4d9] bg-[#fff7f8] p-0">
              <SheetHeader className="border-b border-[#efd4d9] px-5 py-4">
                <SheetTitle asChild>
                  <Link href="/" onClick={closeNavigationOverlays}>
                    <Image
                      src="/russ-logo.png"
                      alt="Russ Nails & Products"
                      width={420}
                      height={210}
                      className="h-24 w-auto object-contain sm:h-28"
                    />
                  </Link>
                </SheetTitle>
                <SheetDescription className="text-xs font-semibold tracking-[0.16em] text-[#a06070] uppercase">
                  Navigation
                </SheetDescription>
              </SheetHeader>

              <nav className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-2">
                  {mobileNavLinks.map((item) => {
                    const isItemActive = isTopLevelMatch(item.href);
                    const mobileLinkClass = cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition",
                      isItemActive
                        ? "bg-[#f3cfd5] text-[#8d4f5e]"
                        : "text-[#6a4a50] hover:bg-[#fcecef]",
                    );

                    if (!item.children) {
                      return (
                        <li key={item.href}>
                          <Link href={item.href} onClick={closeNavigationOverlays} className={mobileLinkClass}>
                            <span>{item.label}</span>
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li key={item.href}>
                        <Collapsible open={isMobileServicesOpen} onOpenChange={setIsMobileServicesOpen}>
                          <CollapsibleTrigger asChild>
                            <button
                              type="button"
                              className={cn(
                                "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition",
                                isMobileServicesOpen || isItemActive
                                  ? "bg-[#f3cfd5] text-[#8d4f5e]"
                                  : "text-[#6a4a50] hover:bg-[#fcecef]",
                              )}
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform",
                                  isMobileServicesOpen && "rotate-180",
                                )}
                              />
                            </button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="mt-2 space-y-2 pl-2">
                            {item.children.map((child) => (
                              <Link
                                key={`${child.label}-${child.href}`}
                                href={child.href}
                                onClick={closeNavigationOverlays}
                                className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-2.5 text-sm font-medium text-[#5f4440] transition hover:bg-white"
                              >
                                <span>{child.label}</span>
                                <span aria-hidden="true">→</span>
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-[#efd4d9] px-4 py-4">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeNavigationOverlays}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#b05060] px-5 py-3 text-xs font-bold tracking-[0.16em] text-white uppercase transition hover:bg-[#9f4354]"
                >
                  Book a Visit
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Decorative bottom line on non-home */}
      {!isHome && (
        <div className="h-px bg-linear-to-r from-transparent via-[#f2b8c0] to-transparent" />
      )}
    </header>
  );
}
