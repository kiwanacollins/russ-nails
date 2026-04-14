# Russ Nails Web (Next.js)

Service-first luxury website built with Next.js App Router.

## Implemented
- Static pages: Home, Services, Gallery, Contact
- Product storefront: `/products`, `/products/[slug]`
- Cart and checkout chooser: WhatsApp or site checkout
- Order API with idempotency and optional Resend owner notifications
- Payload integration layer with fallback sample products

## Environment
Copy `.env.example` to `.env.local` and fill in values.

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=256762267569
# Secondary calls/WhatsApp line: 256708420038
PAYLOAD_API_URL=http://localhost:4000
RESEND_API_KEY=re_xxx
ORDER_NOTIFICATION_FROM_EMAIL=info@russnails.com
ORDER_NOTIFICATION_TO_EMAIL=info@russnails.com
ENABLE_WHATSAPP_INQUIRY_EMAIL=true
```

## Run
```bash
npm install
npm run dev
```

## Notes
- Static pages remain code-owned for design control.
- CMS scope is intentionally limited to products/media.
- WhatsApp checkout and site checkout both post order events to `/api/orders`.

## Docker Compose
From the repository root:

```bash
cp .env.compose.example .env
docker compose up --build
```

The web app will be available at `http://localhost:3000` and will connect to the CMS container internally via `http://cms:4000`.

For Coolify deployments, set the same variables in the environment UI and trigger a rebuild after updating
`NEXT_PUBLIC_SITE_URL` or `NEXT_PUBLIC_WHATSAPP_NUMBER`, because those values are embedded at build time.
