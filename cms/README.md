# Russ Nails CMS (Payload)

This CMS is scoped to product and media management only.

## Collections
- users: Admin authentication
- media: Product images and alt text
- products: Shop product records consumed by the Next.js storefront

## Setup
1. Copy `.env.example` to `.env` and fill in database and secret values.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the CMS:
   ```bash
   npm run dev
   ```

## Frontend Integration
Set `PAYLOAD_API_URL` in the web app environment to this CMS URL, for example:

```bash
PAYLOAD_API_URL=http://localhost:4000
```

The Next.js app fetches products from `/api/products` with ISR and falls back to local sample data if the CMS is unavailable.