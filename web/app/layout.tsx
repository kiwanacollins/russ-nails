import type { Metadata } from "next";
import { Manrope, Playfair_Display, Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "../components/whatsapp-fab";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Russ Nails | Luxury Nail Studio Kampala",
    template: "%s | Russ Nails",
  },
  description:
    "Luxury nail services in Kampala with elegant booking journeys, curated products, and premium client care.",
  openGraph: {
    title: "Russ Nails | Luxury Nail Studio Kampala",
    description:
      "Book premium nail services in Kampala and shop curated nail products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", bodyFont.variable, headingFont.variable, "font-sans", geist.variable)}>
      <body className="min-h-full bg-background font-sans text-ink antialiased">
        <div className="relative flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
