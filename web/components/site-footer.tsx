import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { services } from "@/lib/static-content";

const footerPages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 overflow-hidden border-t border-brand-cocoa/12 bg-[#ece9e6]" data-aos="fade-up-soft">
      <div className="mx-auto max-w-355 lg:grid lg:grid-cols-[1.45fr_0.9fr]">
        <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16" data-aos="fade-up-soft">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div>
              <Link href="/" className="inline-flex flex-col text-brand-cocoa">
                <Image
                  src="/russ-logo.png"
                  alt="Russ Nails & Products"
                  width={540}
                  height={270}
                  className="h-36 w-auto object-contain filter-[drop-shadow(0_0_6px_rgba(202,139,120,0.7))_drop-shadow(0_0_16px_rgba(156,122,79,0.45))] sm:h-44 md:h-48"
                />
                <span className="mt-1 text-xs font-semibold tracking-[0.28em] uppercase">Luxury Nail Studio</span>
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-brand-cocoa/58 uppercase">Quick Links</p>
              <ul className="mt-6 space-y-3 text-lg leading-none text-brand-cocoa sm:text-xl md:text-2xl">
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
              <div className="mt-6 space-y-6 text-base leading-normal text-brand-cocoa sm:text-lg lg:text-xl">
                <p>Kololo, Kampala, Uganda</p>
                <p>Opens at 7:00 AM (Mon - Sat), Sunday by reservation</p>
                <div>
                  <p className="font-semibold text-brand-cocoa/86">+256 762 267 569</p>
                  <p className="mt-1 font-semibold text-brand-cocoa/86">+256 708 420 038</p>
                  <p className="mt-2 text-brand-cocoa/75">angella@russnails.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-brand-cocoa/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-snug text-brand-cocoa/90 sm:text-base">
              Russ Nails &copy;{new Date().getFullYear()} - All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-brand-cocoa/65">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-cocoa" aria-label="Instagram">
                <FaInstagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-cocoa" aria-label="X">
                <FaXTwitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-brand-cocoa" aria-label="Facebook">
                <FaFacebookF className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <aside className="bg-[#b78498] px-7 py-12 sm:px-10 lg:px-12 lg:py-16" data-aos="fade-up-soft" data-aos-delay="90">
          <h3 className="max-w-xs font-serif text-[2.4rem] leading-[0.92] text-white sm:text-5xl lg:text-6xl">Book an appointment</h3>

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

            <div className="group relative">
              <label className="sr-only" htmlFor="footer-service">Choose a service</label>
              <select
                id="footer-service"
                defaultValue=""
                className="w-full appearance-none border-b border-white/45 bg-transparent pb-3 pr-12 text-lg text-white/95 focus:border-white focus:outline-none sm:text-xl"
              >
                <option value="" disabled className="text-brand-cocoa">Choose a Service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug} className="text-brand-cocoa">
                    {service.name}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-white/90 transition group-focus-within:rotate-180">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
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

        </aside>
      </div>
    </footer>
  );
}
