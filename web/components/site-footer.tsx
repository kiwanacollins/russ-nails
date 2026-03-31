import Link from "next/link";

const footerPages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Checkout", href: "/checkout" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 overflow-hidden border-t border-brand-cocoa/12 bg-[#ece9e6]">
      <div className="mx-auto max-w-355 lg:grid lg:grid-cols-[1.45fr_0.9fr]">
        <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div>
              <Link href="/" className="inline-flex flex-col text-brand-cocoa">
                <span className="font-serif text-[2.4rem] leading-[0.9] sm:text-[2.9rem]">
                  Russ Nails
                </span>
                <span className="mt-2 text-xs font-semibold tracking-[0.28em] uppercase">Luxury Nail Studio</span>
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-cocoa/58 uppercase">Quick Links</p>
              <ul className="mt-6 space-y-3 text-xl leading-none text-brand-cocoa sm:text-2xl">
                {footerPages.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-brand-cocoa/75">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-cocoa/58 uppercase">Contacts</p>
              <div className="mt-6 space-y-6 text-lg leading-normal text-brand-cocoa sm:text-xl">
                <p>Kololo, Kampala, Uganda</p>
                <p>Mon - Sat: 9:00 AM - 7:00 PM, Sunday: By reservation only</p>
                <div>
                  <p className="font-semibold text-brand-cocoa/86">+256 700 000 000</p>
                  <p className="mt-2 text-brand-cocoa/75">hello@russnails.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-brand-cocoa/15 pt-10">
            <h3 className="font-serif text-5xl leading-none text-brand-cocoa sm:text-6xl">Stay Updated</h3>

            <form className="mt-8 flex flex-col gap-4 xl:flex-row xl:items-end xl:gap-6">
              <label className="block flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Your email for product drops and booking updates"
                  className="w-full border-b border-brand-cocoa/25 bg-transparent pb-3 text-lg text-brand-cocoa placeholder:text-brand-cocoa/55 focus:outline-none sm:text-xl"
                />
              </label>
              <button
                type="submit"
                className="inline-flex h-14 w-full max-w-52 items-center justify-center border border-brand-cocoa/35 bg-[#f4f1ee] px-8 text-xs font-semibold tracking-[0.24em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-brand-cocoa/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-snug text-brand-cocoa/90 sm:text-base">
              Russ Nails &copy;{new Date().getFullYear()} - All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-brand-cocoa/65">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-cocoa" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-cocoa" aria-label="X">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4L20 20" />
                  <path d="M20 4L4 20" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-cocoa" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.6.4-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <aside className="bg-[#b78498] px-7 py-12 sm:px-10 lg:px-12 lg:py-16">
          <h3 className="max-w-xs font-serif text-5xl leading-[0.92] text-white sm:text-6xl">Book an appointment</h3>

          <form className="mt-12 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Your Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-white/45 bg-transparent pb-3 text-lg text-white placeholder:text-white/88 focus:outline-none sm:text-xl"
                />
              </label>
              <label className="block">
                <span className="sr-only">Your Phone</span>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full border-b border-white/45 bg-transparent pb-3 text-lg text-white placeholder:text-white/88 focus:outline-none sm:text-xl"
                />
              </label>
            </div>

            <div className="relative">
              <label className="sr-only" htmlFor="footer-service">Choose a service</label>
              <select
                id="footer-service"
                defaultValue=""
                className="w-full appearance-none border-b border-white/45 bg-transparent pb-3 pr-10 text-lg text-white focus:outline-none sm:text-xl"
              >
                <option value="" disabled className="text-brand-cocoa">Choose a Service</option>
                <option value="extensions" className="text-brand-cocoa">Gel Extensions</option>
                <option value="russian" className="text-brand-cocoa">Russian Manicure</option>
                <option value="bridal" className="text-brand-cocoa">Bridal Suite</option>
              </select>
              <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-xl text-white/90">v</span>
            </div>

            <label className="block">
              <span className="sr-only">Your Comment</span>
              <textarea
                placeholder="Your Comment"
                className="h-30 w-full resize-none border-b border-white/45 bg-transparent pb-3 text-lg leading-[1.2] text-white placeholder:text-white/88 focus:outline-none sm:text-xl"
              />
            </label>

            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center bg-white px-10 text-xs font-semibold tracking-[0.24em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
            >
              Make an Appointment
            </button>
          </form>

          <button
            type="button"
            aria-label="Back to top"
            className="mt-16 ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 14l6-6 6 6" />
            </svg>
          </button>
        </aside>
      </div>
    </footer>
  );
}
