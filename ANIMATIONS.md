# AmaDah Pastries — Animations.md

A shortlist of components from React Bits (reactbits.dev) and a couple of
other libraries, picked against **design.md §5 (one orchestrated motion
moment)** and §1 (the anti-slop pass) — not a "here's everything cool"
dump. React Bits alone has 165+ components and adds more weekly, so
verify a component still exists/looks right at `reactbits.dev` or via
`npx jsrepo add` before pulling it in; names below are accurate as of
research but the library moves fast.

Everything here is grouped by **verdict**, not just category, because
the point of this file is deciding what earns a place on the page, not
browsing a catalog.

---

## ✅ Use these (fit the "one bold moment" rule)

### Hero — the one spend
This is the single place design.md allows real spectacle. Pick **one**:

- **SplitText** *(Text Animations)* — headline letters/words animate in
  on load. Good fit: reads as a considered reveal, not decoration, if
  it's the only text-entrance animation on the page.
- **BlurText** *(Text Animations)* — softer alternative to SplitText;
  words resolve from blur to sharp. Slightly gentler than SplitText —
  probably the better match for AmaDah's "warm, homey" tone vs.
  SplitText's snappier feel.
- **DecryptedText** *(Text Animations)* — scrambles-then-settles into
  the real headline. Skip this one for AmaDah: the glitch/terminal
  connotation doesn't match a home bakery's warmth.

  **Pick one of the two, not both, and only on the hero headline** —
  install via `npx jsrepo add https://reactbits.dev/default/TextAnimations/BlurText`.

### One playful, functional micro-interaction
Design.md allows response-to-action motion (§5) beyond the hero reveal.
One candidate that's genuinely functional, not decorative:

- **ClickSpark** *(Animations)* — a small spark/particle burst on click,
  attachable to a single element. If used, put it only on the primary
  "Message us on Facebook" button — it becomes a tiny reward for the
  one action the whole page exists to drive, not a generic hover toy.

### Menu card interaction — pick at most one, applied uniformly
This replaces the generic "hover-lift on every card" default (flagged
in design.md §1) with one considered treatment, used consistently:

- **TiltedCard** *(Components)* — subtle 3D tilt following the cursor.
  Works well over a photo-forward card like the torn-paper menu items,
  but keep the tilt range small (a few degrees) — this is meant to read
  as a nudge, not a gimmick.
- **GlareHover** *(Animations)* — a soft light-glare sweep on hover.
  Simpler and quieter than TiltedCard; better choice if you want the
  menu grid to feel calm rather than showy.

  Recommendation: **GlareHover**, since the torn-paper crop is already
  the visually loud element on each card — it doesn't need a second
  attention-grabber stacked on top.

---

## 🟡 Situational — only if a specific need shows up

- **CountUp** *(Text Animations)* — animated number tick-up. Only
  relevant if AmaDah ever adds a stat ("500+ orders served," "since
  2026") worth calling out; skip if there's no real number to show.
- **AnimatedList** *(Animations)* — staggered list-item entrance. Could
  fit the testimonials list *if* testimonials end up as a vertical
  stack rather than the 2-up grid in design.md's wireframe — otherwise
  skip, since it duplicates the "stagger-fade every section" pattern
  design.md explicitly avoids.
- **Stepper** *(Components)* — a step-by-step UI control. No current
  use on this page (there's no multi-step flow), but worth remembering
  if a future "how to order" walkthrough gets added.

---

## ❌ Skip for AmaDah (logged so the reasoning isn't re-litigated later)

These are genuinely fun React Bits components — they're skipped for
*this* brief, not because they're bad:

- **Backgrounds category as a whole** (Aurora, Balatro, Threads,
  Hyperspeed, Iridescence, Plasma, Silk, LiquidChrome, DotGrid, etc.) —
  every one of these is a full-bleed animated background. AmaDah's
  identity is a warm parchment/olive palette and real food photography;
  a moving gradient/particle field behind the content would fight the
  torn-paper-and-photo aesthetic and reads as generic "cool tech demo"
  rather than "home bakery."
- **SplashCursor / Ballpit / MetaBalls / FluidGlass** *(Animations)* —
  the "statement piece" components. Spectacular, but they'd become the
  most memorable thing on the page instead of the pastries — directly
  against design.md §5's "spend your boldness in one place," which this
  file has already spent on the hero.
- **GooeyNav** *(Components)* — animated gooey-blob nav indicator. The
  header nav here is three links and an order button; this would be
  visual noise disproportionate to the job.
- **Marquee / infinite scroll text banners** — the "as seen in" /
  scrolling-logo-strip pattern doesn't apply; AmaDah has no press logos
  or partner brands to showcase.

---

## Other libraries worth knowing about (not React Bits)

- **canvas-confetti** (tiny, framework-agnostic) — a genuinely nice fit
  *if* there's ever a moment worth celebrating, e.g. a brief confetti
  burst the first time someone taps "Message us on Facebook" in a
  session. Small, purposeful, easy to gate behind
  `prefers-reduced-motion`. Worth more than any React Bits background.
- **Framer Motion (`motion` package)** — reach for this only if the
  hero reveal or `StickyOrderBar` slide-in (roadmap.md Phase 3) needs
  more control than CSS transitions/`clip-path` can give cleanly;
  don't add it just to have an animation library on hand.
- **Aceternity UI / Magic UI** — similar spirit to React Bits (React +
  Tailwind animated components). Not needed here since React Bits
  already covers the two things this page actually wants (a hero
  reveal, a menu-card hover); adding a second animation library for
  redundant capability is unnecessary dependency weight.

---

## Install pattern (React Bits)

```bash
# one-time config for the project (CSS or Tailwind variant)
npx jsrepo init https://reactbits.dev/default/     # CSS
npx jsrepo init https://reactbits.dev/tailwind/    # Tailwind

# then add exactly the components decided above, e.g.
npx jsrepo add TextAnimations/BlurText
npx jsrepo add Animations/GlareHover
npx jsrepo add Animations/ClickSpark
```

Every component ships in 4 variants (JS/TS × CSS/Tailwind) — match
whichever combination Phase 0 of roadmap.md settles on for the Next.js
project.