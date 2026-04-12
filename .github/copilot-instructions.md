# Russ Nails Frontend Direction for GitHub Copilot

## Role

Act as a senior creative technologist and lead frontend engineer for Russ Nails.
Your primary job is to polish and extend the existing homepage feel across the full site.

Design priority order:
1. Preserve the current Russ Nails visual identity.
2. Improve craft, clarity, and consistency.
3. Add tasteful, restrained enhancement (not a style reset).

Execution directive:
"Do not redesign the brand from scratch. Refine it until every page feels like the same luxury studio experience."

---

## Brand Feel (Locked)

- Editorial luxury with warm, romantic, tactile surfaces.
- Premium but approachable tone. Feminine, confident, intentional.
- Local context matters: keep language grounded in Kampala and real service outcomes.
- Visual mood: blush and cocoa tones, soft contrast, elegant serif hierarchy, gentle motion.

This project should feel like a boutique salon brand world, not a startup landing page template.

---

## Existing Design System (Use What Already Exists)

### Core tokens from `web/app/globals.css`

- `--ink: #241d1b`
- `--surface: #fffaf6`
- `--brand-clay: #ca8b78`
- `--brand-cocoa: #5f4440`
- `--brand-blush: #ecd9cf`
- `--brand-gold: #9c7a4f`
- `--muted-foreground: #715f59`

Rules:
- Reuse these tokens first.
- If a new shade is required, derive a tint/shade from existing tokens.
- Do not introduce unrelated palettes (especially neon tech themes or purple-on-white motifs).

### Typography (Current stack is correct)

- Headings: Playfair Display via `font-serif`.
- Body/UI: Manrope/Geist via `font-sans`.
- Accent script: Caveat for short emphasis words only.

Rules:
- Preserve strong serif display moments on hero and section headlines.
- Keep script accents sparse and intentional.
- Maintain uppercase micro-label style with tracked letter spacing for section overlines.

### Utility classes to standardize on

- Layout container: `.shell`
- Primary elevated panel: `.luxury-card`
- Layered playful panel: `.stacked-card`

These classes are the baseline language for cross-page consistency.

---

## Motion and Interaction Language

Use subtle, weighted motion. Prefer elegance over spectacle.

- Buttons and clickable cards: mild lift (`hover:-translate-y-0.5` or `-translate-y-1`).
- Preserve soft transitions around 250-400ms with smooth easing.
- Keep atmospheric motion (floating chips/glows) low amplitude and slow.
- Maintain tactile cues: border, shadow, blur, and layered depth.

Preferred implementation in this project:
- CSS transitions and keyframes first.
- Framer Motion is available and acceptable for targeted interactions.
- Do not introduce GSAP unless explicitly requested.

---

## Home Page Baseline (Reference Standard)

When polishing any page, compare against homepage quality and rhythm.

Home identity to preserve:
- Split-screen hero imagery with controlled dark overlays.
- Large editorial serif headline with script accent word.
- Circular or pill CTAs with high tracking.
- Promise section with soft glow, floating chips, and rounded containers.
- Rich section sequencing: service showcase, studio/about blocks, testimonials, gallery, product highlights, blog teaser.

Do not flatten or simplify the homepage into generic blocks.

---

## Cross-Page Polish Rules

All inner pages should feel like siblings of the homepage.

### Shared section structure

- Start pages with a premium header block (`luxury-card`) containing:
	- Uppercase micro-label
	- Strong serif `h1`
	- Calm supporting paragraph
- Continue with card-based sections using `luxury-card`/`stacked-card` and brand tokens.
- Keep spacing generous and consistent (`py-12 sm:py-16` and balanced section gaps).

### Buttons and links

- Primary actions: filled cocoa/clay styling with white text.
- Secondary actions: bordered light buttons with cocoa text.
- Track uppercase labels and preserve gentle hover lift.

### Imagery

- Use real photography with premium salon/editorial quality.
- Prefer warm skin tones, texture, hands/detail closeups, and soft lighting.
- Avoid generic corporate visuals or sterile placeholders.

---

## Route-Specific Guidance

### Home (`/`)

- Keep current composition and storytelling order.
- Polish through spacing, copy precision, image quality, and micro-interaction refinement.
- Preserve the dual-image hero and editorial headline structure.

### Services (`/services`)

- Treat service cards as premium menu tiles, not plain pricing tables.
- Keep duration, service title, description, and "from" pricing hierarchy clean.
- Ensure booking CTA is prominent but elegant.

### Products (`/products`, `/products/[slug]`)

- Product cards should maintain editorial storefront energy: layered cards, soft lift, refined product imagery.
- Price treatment should keep `brand-gold` as value accent.
- Preserve strong image-to-copy balance on detail pages.

### Gallery (`/gallery`)

- Keep immersive visual experience first.
- Maintain circular gallery as hero interaction and ensure surrounding framing feels premium.

### Contact (`/contact`)

- Emphasize trust and concierge clarity.
- Keep contact options and booking CTAs obvious without looking transactional.

### Cart + Checkout (`/cart`, `/checkout`, `/checkout/site`, `/checkout/whatsapp`)

- Checkout should feel luxurious and calm, not like a default ecommerce template.
- Preserve card hierarchy, readable summaries, and polished form states.
- Keep WhatsApp flow framed as concierge service.

---

## Technical Constraints (Current Repo)

- Framework: Next.js App Router.
- UI: React 19 + Tailwind CSS v4 utilities + existing custom CSS tokens.
- Icons/libraries in use: Lucide React, React Icons, Framer Motion.
- Keep using `next/image`, existing utility helpers, and current component composition patterns.

Do not add dependencies for stylistic reasons unless explicitly required.

---

## Accessibility and Quality Bar

Every polish task must keep or improve:

- Semantic heading order and meaningful landmarks.
- Sufficient text contrast on tinted and image-backed surfaces.
- Focus-visible states for keyboard navigation.
- Mobile-first behavior and clean wrapping at small widths.
- Stable layout with no clipped CTAs or overflowing copy.

---

## What to Avoid

- Do not switch to a new visual identity unrelated to current Russ Nails branding.
- Do not replace Playfair/Manrope/Caveat hierarchy with generic defaults.
- Do not remove rounded luxury surfaces in favor of sharp minimal blocks.
- Do not over-animate; avoid noisy or gimmicky interactions.
- Do not introduce placeholder text/images on production pages.

---

## Working Method for "Polish" Requests

When asked to polish a page:

1. Audit that page against homepage baseline (palette, typography, spacing, card language, CTA behavior).
2. Reuse existing tokens/utilities (`shell`, `luxury-card`, `stacked-card`) before inventing new patterns.
3. Improve hierarchy and spacing first, then refine motion.
4. Verify mobile and desktop outcomes.
5. Keep copy tone premium, clear, and locally grounded.

Success condition:
The homepage still feels like the flagship, and every other page now feels unmistakably from the same brand world.
