# Zaiko Foods — Premium Restaurant Website

A premium, animated, mobile-first restaurant website built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, navbar, footer, WhatsApp button
  page.tsx             Home page (all sections composed)
  menu/page.tsx         Full menu page
  about/page.tsx        About Us page
  locations/page.tsx    Locations page
  gallery/page.tsx      Gallery page
  contact/page.tsx      Contact page
  order/page.tsx        Order Now page (interactive cart)
  privacy-policy/       Privacy policy
  terms/                 Terms of service
  globals.css           Design tokens, base styles, signature divider styles
components/
  Navbar.tsx, Footer.tsx, WhatsAppButton.tsx
  Hero.tsx, PageHero.tsx
  MenuPreview.tsx, MenuCard.tsx
  About.tsx, WhyChooseUs.tsx, Gallery.tsx, Testimonials.tsx, Franchise.tsx, ContactSection.tsx
  SectionDivider.tsx     Signature "flanking gold line" divider (from the logo's FOODS mark)
  Reveal.tsx              Reusable scroll-reveal animation wrapper
lib/
  menuData.ts            Single source of truth for all menu items/categories
public/
  logo.png                Your official logo (also used as favicon via app/icon.png)
```

## Replacing placeholder content

- **Images:** All food photography currently uses Unsplash placeholder URLs (clearly readable in each component / `lib/menuData.ts`). Replace the `src` values with your own professional photography before launch.
- **Menu & prices:** Edit `lib/menuData.ts` — this single file drives the menu preview on Home, the full Menu page, and the Order page cart.
- **Phone/WhatsApp/Email:** Search for `+918670479101` and `hello@zaikofoods.com` across `components/` and replace with your real contact details.
- **Map:** The embedded Google Map currently points to a generic Bhubaneswar query. Replace the `iframe` `src` in `ContactSection.tsx` and `app/locations/page.tsx` with your exact address embed link from Google Maps.
- **Locations:** Edit the `outlets` array in `app/locations/page.tsx`.

## Design system

- **Colors:** rich black `#0A0A0A`, charcoal `#141414`, ivory `#FAF9F6`, warm bone `#F1EEE6`, gold `#D4AF37` / light gold `#F3D983` / deep gold `#B8860B`.
- **Type:** Playfair Display (headlines), Manrope (body), Cormorant (labels/eyebrows), loaded via `next/font/google` in `app/layout.tsx`.
- **Signature motif:** the thin tapered gold lines flanking "FOODS" in your logo are reused site-wide as `SectionDivider` — this ties every section back to your brand mark instead of a generic numbered divider.

## Deployment

This project is ready to deploy on Vercel, Netlify, or any Node.js host that supports Next.js 14. Push to a Git repository and import into Vercel for zero-config deployment.
