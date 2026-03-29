## Plan: Russnails Static-First Luxury Site

Build a service-first luxury website in Next.js where all brand/service pages are static and fully code-controlled, while Payload CMS manages only product catalog data. Implement a dual checkout decision at cart so users can either complete a normal on-site checkout flow or switch to WhatsApp ordering. Add Resend transactional notifications so the business owner is alerted immediately when an order event is created.

**Steps**
1. Phase 1 - Project foundation: set up Next.js 15 App Router project with TypeScript, Tailwind, Framer Motion, and a shared design token system that reflects a luxury salon brand direction.
2. Phase 1 - Visual direction guardrails: use La Diva as inspiration for layout rhythm, typography hierarchy, and palette, but implement original components and assets (no direct clone) to avoid design/IP risk.
3. Phase 1 - Static conversion pages: build homepage, services, gallery, and contact as static routes with handcrafted Next.js components and local content modules.
4. Phase 1 - Booking-first conversion: add persistent WhatsApp booking CTA, prefilled booking intents, service-specific contact entry points, and location/contact trust blocks.
5. Phase 2 - CMS boundary: deploy Payload CMS with PostgreSQL and create only `products` and `media` collections; keep non-product site content outside CMS.
6. Phase 2 - Integration layer: create a content abstraction module in Next.js for all product fetches so CMS internals are isolated and swappable later.
7. Phase 2 - Product storefront: build product listing and product detail pages sourced from Payload with ISR revalidation for SEO and performance.
8. Phase 3 - Cart foundation: add cart state management (Zustand + persistence) and a dedicated checkout decision step immediately after cart review.
9. Phase 3 - Dual checkout path A: implement WhatsApp checkout handoff that converts cart contents into a structured, prefilled message with order reference.
10. Phase 3 - Dual checkout path B: implement normal checkout flow (customer details, shipping/pickup preference, order summary) and keep payment method modular.
11. Phase 3 - Order event model: define order statuses (`pending`, `placed`, `paid`, `whatsapp_inquiry`) so notification triggers are deterministic across both checkout paths.
12. Phase 4 - Payments and order processing: integrate Flutterwave into normal checkout when ready, while preserving WhatsApp as a fallback channel.
13. Phase 4 - Owner notification pipeline: integrate Resend for transactional owner alerts on `placed` orders (and optional `whatsapp_inquiry` alerts), with reusable email templates and environment-based recipients.
14. Phase 4 - Reliability controls: add idempotency and retry-safe notification logic to prevent duplicate owner emails on repeated client actions.
15. Phase 4 - Observability and QA: add events for checkout-path choice, cart abandonment, booking CTA clicks, and notification success/failure; validate responsiveness, accessibility, SEO, and performance before launch.

**Relevant files**
- /Users/kiwana/.claude/projects/-Users-kiwana-projects-russ-nails/memory/project_overview.md - Reuse the current architecture decisions as implementation constraints.
- /Users/kiwana/projects/russ-nails - Create the full application structure here (Next.js app + Payload setup).
- /Users/kiwana/projects/russ-nails/.claude/settings.local.json - Keep current local tool permission behavior unchanged.

**Verification**
1. Product pipeline validation: create/edit/delete a product in Payload admin and confirm updates appear on the product pages within the ISR window.
2. Static-page integrity: verify homepage, services, gallery, and contact routes are static-rendered and include correct metadata/social previews.
3. Dual-checkout validation: add multiple products to cart and confirm both checkout options work end-to-end without data loss.
4. WhatsApp handoff QA: verify message formatting includes item names, quantities, and totals in mobile and desktop deep links.
5. Normal checkout QA: confirm order summary and checkout forms work before payment integration, then run Flutterwave sandbox tests when enabled.
6. Resend notification QA: trigger test orders and confirm owner email delivery content, template variables, and expected recipients.
7. Duplicate-send QA: simulate retries/back-button submissions and confirm idempotency prevents duplicate owner notifications.
8. Performance and UX: run Lighthouse for mobile/desktop on homepage and product pages; confirm luxury visual quality is preserved under responsive breakpoints.

**Decisions**
- Included now: static service website, products in Payload CMS, product storefront, cart, dual checkout choice, and owner email notifications.
- Excluded now: full inventory logic, customer accounts, coupons, advanced shipping rules, and complex order-management back office.
- Checkout strategy: keep WhatsApp as a high-conversion concierge option while building normal checkout as the scalable path.
- Notification strategy: Resend is the transactional provider for owner alerts tied to order status transitions.
- CMS scope rule: only product/shop data enters Payload in the initial release.

**Further Considerations**
1. Notification policy recommendation: notify on `placed` by default; optionally include `whatsapp_inquiry` to avoid missing high-intent leads.
2. Delivery setup recommendation: verify sending domain, SPF/DKIM/DMARC, and fallback recipient address before production launch.
3. Checkout default recommendation: preselect "Order via WhatsApp" for high-intent mobile traffic, but keep "Checkout on Site" equally visible to avoid blocking users who prefer card payments.