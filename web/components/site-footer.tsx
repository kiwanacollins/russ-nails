import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const instagramShots = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=700&q=80",
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-brand-cocoa text-white">
      <div className="grid grid-cols-2 gap-px border-y border-white/12 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
        {instagramShots.map((shot) => (
          <div key={shot} className="relative h-28 overflow-hidden sm:h-36">
            <Image src={shot} alt="Russ Nails social gallery" fill sizes="(max-width: 1024px) 50vw, 16vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/15 transition hover:bg-black/0" />
          </div>
        ))}
      </div>

      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">Russ Nails</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/80">
            Luxury nail studio in Kampala focused on polished service experiences, intentional
            beauty rituals, and curated product recommendations.
          </p>

          <div className="mt-6 flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-sm transition hover:-translate-y-0.5"
            >
              IG
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-sm transition hover:-translate-y-0.5"
            >
              FB
            </a>
            <a
              href="https://wa.me/256700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-sm transition hover:-translate-y-0.5"
            >
              WA
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">Pages</p>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">Contacts</p>
          <p className="mt-4 text-sm leading-7 text-white/85">
            Kololo, Kampala, Uganda
            <br />
            Mon - Sat: 9:00 AM to 7:00 PM
            <br />
            Sunday: By reservation only
            <br />
            +256 700 000 000
            <br />
            hello@russnails.ug
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">Stay Updated</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/85">
            Subscribe for monthly beauty tips, product drops, and appointment opening alerts.
          </p>

          <form className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="h-11 flex-1 rounded-full border border-white/25 bg-white/8 px-4 text-sm text-white placeholder:text-white/55 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-xs font-semibold tracking-[0.14em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="shell flex flex-col gap-3 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Russ Nails. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Booking Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
