# AK Essentials

E-commerce site for local products available within your region.

## Stack

- **Next.js** (App Router) — React framework
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI components
- **Zustand** — Client state (cart)
- **Static JSON** — Product data
- **WhatsApp Business** — Order enquiries
- **Vercel** — Deployment

## Setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WHATSAPP_NUMBER` (e.g. `919876543210`)
3. Run dev: `npm run dev`
4. Build: `npm run build`

## Deploy on Vercel

- Push to GitHub and import the repo in [Vercel](https://vercel.com). Add `NEXT_PUBLIC_WHATSAPP_NUMBER` in Project Settings → Environment Variables.

## Pages

- **Home** — Featured products, CTA
- **Products** — All products grid
- **Product detail** — `/products/[slug]` — Add to cart, Order on WhatsApp
- **Cart** — `/cart` — Review and send order via WhatsApp
- **About Us** — `/about`
- **Contact Us** — `/contact` — Form + WhatsApp link
