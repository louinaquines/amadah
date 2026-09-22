# AmaDah Pastries — Roadmap.md

## Tech stack

**React + Next.js.** No custom backend, no database — the page is still
fully static content (buttons that open a Facebook link or a `tel:`
link), so Next.js is used purely for its component structure, image
handling, and easy static export/deploy — not because the page needs
server logic.

```
/amadah-pastries/
├── app/
│   ├── layout.tsx          (fonts, metadata, global shell)
│   ├── page.tsx             (assembles the sections below)
│   └── globals.css          (design tokens as CSS custom properties)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Story.tsx
│   ├── Menu.tsx              (renders MenuCard from a flavors array)
│   ├── MenuCard.tsx
│   ├── Testimonials.tsx      (renders from a testimonials array)
│   ├── Order.tsx
│   ├── StickyOrderBar.tsx    (mobile-only, client component)
│   └── Footer.tsx
├── data/
│   ├── flavors.ts             (typed array — name, description, photo, isNew)
│   └── testimonials.ts        (typed array — quote, name, flavor mentioned)
├── public/
│   ├── images/                 (product photos, per design.md crops)
│   └── icons/                   (favicon, social icons, laurel SVG)
└── README.md
```

- Fonts: Fraunces + Work Sans loaded via `next/font/google` (or
  `next/font/local` if self-hosting) — keeps the exact weights used
  (Fraunces 400/500 + italic, Work Sans 400/600) and avoids a font
  flash automatically.
- Images: `next/image` for every product photo (automatic `.webp`,
  responsive sizes); the torn-paper crop is a CSS `clip-path` applied
  around the `next/image`, not baked into the file, so the same source
  photo can be reused at different crop ratios across breakpoints.
- Styling: plain CSS Modules or global CSS with the design-token custom
  properties from design.md §2–3 — no Tailwind/UI-kit needed for a page
  this size, and it keeps the torn-paper/laurel motifs as real CSS you
  can see and tune rather than utility soup.
- Interactivity (nav toggle, hero reveal, sticky bar) lives in small
  `"use client"` components; everything else stays a server component
  since there's no per-user data.
- Deploy target: Vercel (native Next.js hosting, free tier) — or
  `next export` to any static host if a non-Vercel target is preferred
  later.

---

## Phase 0 — Setup

- [ ] `npx create-next-app` (TypeScript, App Router, no Tailwind unless
      you'd rather use it — design.md doesn't require it).
- [ ] Create the `components/`, `data/`, `public/images` structure above.
- [ ] Drop in the logo and product photos already shared, sized down to
      real web weights before adding to `public/`.
- [ ] Add the color tokens and font faces from design.md §2–3 as CSS
      custom properties in `globals.css`, and set up `next/font` for
      Fraunces + Work Sans in `layout.tsx`.

## Phase 1 — Structure & content (components, unstyled)

- [ ] `Header`: wordmark + nav (About / Menu / Order) + a persistent
      "Message us" button.
- [ ] `Hero`: headline, one-line subhead, hero photo, primary CTA.
- [ ] `Story`: short real copy (2–3 sentences, brand's own voice).
- [ ] `data/flavors.ts` + `Menu`/`MenuCard`: one entry per current
      flavor — name, one-line description, photo, optional `isNew` flag
      — adding a flavor later is one new object in the array, not a
      layout edit.
- [ ] `data/testimonials.ts` + `Testimonials`: AmaDah has no collected
      reviews yet, so this ships with a small set of placeholder quotes
      written to sound like real, specific customer comments (short,
      mentions a flavor, casual tone — not generic marketing copy).
      Flag them clearly in the data file with a `// TODO: replace with
      real customer quotes once collected` comment so they're easy to
      swap out and don't get mistaken for real ones during a later edit.
- [ ] `Order`: phone (`tel:`), Facebook link, general location text.
- [ ] `Footer`: socials, location, the Psalm 136:25 line, small print.
- [ ] Confirm the whole page reads correctly with CSS off — that's the
      real test of whether the structure carries the content.

## Phase 2 — Design system in CSS

- [ ] Implement the color/type tokens and scale from design.md.
- [ ] Build the torn-paper photo crop as a reusable class
      (`clip-path: polygon(...)`), used by `Hero` and `MenuCard`.
- [ ] Build the laurel divider as a small inline-SVG component, used at
      true section breaks only.
- [ ] Layout: mobile-first single column → asymmetric two-up grid at the
      desktop breakpoint (see design.md wireframes), using CSS Grid/Flexbox
      only — no layout library.
- [ ] `StickyOrderBar` (mobile-only, safe-area-aware), hidden on desktop
      where the header CTA is always visible instead.
- [ ] Buttons/links: one primary style (olive fill), one secondary
      (outline), hover/press states per design.md §5.

## Phase 3 — Interaction & polish (client components)

- [ ] Mobile nav toggle as a small `"use client"` component (local
      `useState`, no dependency).
- [ ] One-time hero reveal animation on mount, respecting
      `prefers-reduced-motion` (skip straight to the fade fallback).
- [ ] Smooth-scroll for in-page nav links (`scroll-behavior: smooth` in
      CSS is enough — avoid a JS scroll library for this).
- [ ] `StickyOrderBar` shows itself after the hero is scrolled past
      (simple scroll-position `useEffect`), not on initial paint, so it
      doesn't compete with the hero CTA.
- [ ] Optional: `IntersectionObserver` for a per-card "new" pulse on the
      flagged flavor — kept minimal, no scroll-jacking.

## Phase 4 — QA pass against design.md §7 (quality floor)

- [ ] Test at 360px, 390px, 768px, 1024px, 1440px.
- [ ] Keyboard-only pass: every link/button reachable and visibly
      focused.
- [ ] Contrast check on espresso/parchment and paper-white/olive pairs.
- [ ] `prefers-reduced-motion` verified in devtools emulation.
- [ ] Real-device check on a mid-range Android over throttled 4G
      (matches the actual audience per goal.md).
- [ ] Validate `tel:` and Facebook links actually open correctly on iOS
      and Android.

## Phase 5 — Launch

- [ ] Favicon + Open Graph image/tags via Next.js `metadata` export (so
      a shared link on Facebook shows the logo + a product photo, not a
      blank card) — this matters more than usual since Facebook is the
      actual traffic source.
- [ ] `<title>` / meta description written in the brand's own voice.
- [ ] Lighthouse pass (aim: 90+ performance/accessibility on mobile
      throttled).
- [ ] Deploy to Vercel, point the domain/subdomain.
- [ ] Send AmaDah the live link + a 2-minute note on how to add a new
      flavor card (edit `data/flavors.ts`) or swap in a real testimonial
      once one exists, since new flavors drop often.

## Later (explicitly not v1 — revisit only if AmaDah asks)

- Online ordering/cart — would require real backend logic and is out of
  scope per goal.md.
- Swapping the placeholder review data for real customer quotes as soon
  as AmaDah collects them.
- A lightweight CMS (or just a well-commented `data/` file, which may be
  enough at this size) if flavor-swapping by hand becomes a hassle.
- Multi-language (Cebuano) toggle, if useful for the local audience.