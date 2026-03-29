import Link from "next/link";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-brand-cocoa/15 bg-brand-cocoa text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">Russ Nails</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/80">
            Luxury nail studio in Kampala focused on polished service experiences and curated
            product recommendations.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">Studio Hours</p>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Mon - Sat: 9:00 AM to 7:00 PM
            <br />
            Sunday: By reservation only
            <br />
            Kololo, Kampala
          </p>
        </div>
      </div>
    </footer>
  );
}
