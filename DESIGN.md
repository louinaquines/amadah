# AmaDah Pastries — Design.md

## 0. Subject, audience, job

AmaDah Pastries is a **home-based bakery** in Balamban Cebu / Mandaue City,
selling cinnamon rolls, Korean garlic cream cheese bread, a "cookie club"
(Midnight, Golden, Classic), Biscoff crunch rolls, crinkles, and s'mores
cookies — one flavor drop at a time, ordered by DM. The brand voice is
already warm and a little devotional ("Freshly baked with love, just for
you," Psalm 136:25 on their poster) — this is a family kitchen, not a
patisserie chain.

**Audience:** people scrolling Facebook in Cebu who see a friend's repost
or a "new flavor" story and want to know *what's available right now* and
*how to order*, on their phone, in under 10 seconds.

**Primary job of the page:** get a warm, appetite-triggering look at the
current lineup in front of that person, then hand them straight to
Messenger/FB or a phone number. Everything else (story, testimonials) is
in service of that trust-then-DM path — it should never slow it down.

---

## 1. Anti-slop pass ("Kowalski, analysis")

Before locking the plan, running it against the known AI-slop defaults:

| Generic default | Verdict for AmaDah | Why |
|---|---|---|
| Warm cream bg + terracotta/clay accent (#D97757-ish) | **Avoid** | Close enough to the generic "AI bakery site" palette that it would read as default, not as *this* logo |
| Near-black bg + one acid accent | **Avoid** | Wrong register entirely — this is a homey, daylight, kitchen-table brand, not a moody tech brand |
| SaaS card-kit: identical rounded cards, one shadow recipe, gradient washes | **Avoid** | AmaDah's own marketing photos already use a hand-torn-paper diagonal crop as their signature device (see product posters) — that's the real, on-brand structural motif, not a drop-shadow card |
| ALL-CAPS tracked eyebrows over every section, "01 / 02 / 03" numbering | **Avoid** | The menu isn't a sequence or a process; numbering it implies an order that doesn't exist |
| Cursive/script font used everywhere because "bakery" | **Avoid** | The logo's script wordmark is the *one* place a hand-script lives. Repeating it in headers, buttons, and body copy is the actual bakery-site cliché — it gets used exactly once, as the wordmark, and nowhere else |
| Fade-up-on-scroll for every section + hover-lift on every card | **Avoid as default** | One orchestrated reveal only (see §5); everything else stays still |
| "→" tacked onto every link/button | **Avoid** | Buttons say the plain action: "Message us on Facebook," not "Order →" |

The two devices this design *does* borrow are borrowed from AmaDah's own
existing marketing, not from generic bakery-template vocabulary: the
**torn-paper diagonal photo crop**, and the **thin laurel/wreath line art**
from the logo. Reusing the brand's own found assets is what keeps this
from reading as generated.

---

## 2. Color — from the logo, not from a bakery-site preset

Sampled and named from the AmaDah wordmark and poster art (olive plaque,
cream lettering, espresso display type, biscoff/caramel product tones):

| Token | Hex | Role |
|---|---|---|
| `--olive-bark` | `#5F5A3C` | Primary brand color — logo plate, header bg, primary buttons |
| `--olive-bark-dark` | `#3F3B27` | Hover/pressed state, dark section backgrounds (footer) |
| `--parchment` | `#F4EEDD` | Base page background — warm, not white, not the generic #F4F1EA cream-slop tone |
| `--espresso` | `#2A2013` | Body text, high-contrast headings on parchment |
| `--caramel` | `#C98A3B` | Single accent — "new flavor" tags, active states, the one warm pop borrowed from the Biscoff/cinnamon photography |
| `--paper-white` | `#FBF8F1` | Card/panel surfaces, torn-paper crop base |

Rule: **caramel is the only saturated color on the page.** It marks exactly
two things — "new" and "call to action" — so it stays meaningful instead of
decorative. Olive and espresso carry everything else, including all body
text and structure.

---

## 3. Type

Two families, clearly distinct roles, no third "label" font:

- **Display — Fraunces (variable, soft optical size, slight ink-trap
  warmth).** Used for the hero line, section titles, and price/flavor
  names. Fraunces reads as *baked*, not corporate-serif, without resorting
  to a script face. Set tight, a little large, occasionally at a soft
  italic for one word a section (not per rule of thumb — only where a
  flavor name genuinely wants warmth, e.g. an italic "Biscoff Crunch").
- **Body/UI — Work Sans.** Humanist, warm x-height, holds up small on
  mobile for ingredient lists and the order CTA. Regular 400 for body,
  600 for labels/buttons — no letter-spaced caps anywhere.
- **The script in the logo stays in the logo.** It is not reproduced as a
  web font anywhere else on the page.

Scale (mobile base 16px, desktop base 18px), roughly a 1.25 ratio:
Hero 48/64px, H2 32/40px, H3 22/26px, body 16/18px, small 14px.
Line length capped near 65–70 characters for body copy blocks (About,
testimonials).

---

## 4. Layout concept

Left-aligned, editorial, kitchen-counter rhythm rather than centered
hero-stack-of-cards. Content sits in a single 680–760px reading column on
mobile and widens into an asymmetric two-up grid on desktop (image
dominant, text column narrower) — echoing how the product posters
themselves are laid out (big photo, torn-paper text corner).

```
MOBILE (390px)                    DESKTOP (1200px+)
┌─────────────────────┐           ┌───────────────────────────────┐
│  wordmark   ☰        │           │ wordmark        About Menu ●Order│
├─────────────────────┤           ├───────────────────────────────┤
│                      │           │  ┌───────────┐  Fresh &      │
│   [hero photo,       │           │  │ hero photo│  Delicious.   │
│    torn-edge crop]   │           │  │torn corner│  Baked in     │
│                      │           │  └───────────┘  Balamban,    │
│  Fresh & Delicious.  │           │                 for you.     │
│  Home-baked in       │           │                 [Message us] │
│  Balamban, Cebu.     │           └───────────────────────────────┘
│  [Message us on FB]  │           ┌──────────────┬────────────────┐
├─────────────────────┤           │ laurel rule ── divider ────── │
│  ─ laurel rule ─     │           ├──────────────┴────────────────┤
│  Our story (short)   │           │  Our story          [photo]   │
├─────────────────────┤           ├───────────────────────────────┤
│  This week's lineup  │           │  This week's lineup  (grid,   │
│  [torn-crop card]    │           │  torn-crop cards, 3-col,      │
│  [torn-crop card]    │           │  caramel "NEW" tag on 1)      │
│  [NEW tag: Biscoff]  │           ├───────────────────────────────┤
├─────────────────────┤           │  What people are saying        │
│  Testimonials        │           │  (2-up, quote marks as the    │
│  (1-up, swipeable)   │           │   only decorative element)    │
├─────────────────────┤           ├───────────────────────────────┤
│  Order — sticky bar  │           │  Order: phone / FB / location │
│  [FB]  [Call]        │           │  footer, olive-bark-dark bg   │
├─────────────────────┤           └───────────────────────────────┘
│  Footer: socials,    │
│  location, verse     │
└─────────────────────┘
```

- **Mobile keeps a persistent thin order bar** (not a fat floating pill —
  a slim one-line bar, olive background, two tap targets: Message on
  Facebook / Call) since that's the actual conversion path for this
  brand's real customers.
- **Menu section is the torn-paper card**, not a rounded-corner SaaS card:
  photo bleeds to a hand-cut diagonal edge, flavor name + one-line
  description sit on the paper-white cutout, exactly like AmaDah's own
  Instagram-style product graphics.
- **One laurel-line divider style**, reused sparingly (2–3 times max) as
  the section-break device instead of a generic `<hr>` or numbered
  eyebrow.

---

## 5. Motion — one orchestrated moment

- **On load:** the hero photo's torn-paper mask draws in once (a single
  clip-path reveal, ~600ms, ease-out) as the headline settles — this is
  the one "wow," and it only happens once, on the hero.
  Respect `prefers-reduced-motion`: fall back to a plain fade.
- **Everywhere else stays still.** No stagger-fade on every section, no
  hover-lift on every card. The only interactive-response motion allowed:
  a button's background deepening on hover/press (`--olive-bark` →
  `--olive-bark-dark`), and the mobile order bar's tap ripple. That's it.

---

## 6. Structural devices (what they encode, not decorate)

- **Laurel line** = section boundary, borrowed directly from the logo's
  wreath — used only at true topic changes (hero→story, menu→testimonials).
- **Caramel "NEW" tag** = literally means new-this-week, on at most one
  menu card at a time, matching how AmaDah actually posts "New Flavor"
  drops.
- **Torn-paper diagonal crop** = frames every real product photo; never
  applied to icons, avatars, or anything that isn't food.
- **No numbering.** The menu isn't a sequence, so it isn't 01/02/03'd.

---

## 7. Quality floor

- Responsive from 360px to 1440px+; sticky mobile order bar never
  overlaps content (safe-area padding respected).
- Visible keyboard focus ring in `--caramel` on all interactive elements.
- Color contrast: espresso-on-parchment and paper-white-on-olive both
  checked at AA (4.5:1) for body text.
- `prefers-reduced-motion` disables the hero reveal and any transition
  beyond opacity.
- Real copy throughout (no lorem ipsum) — see §8.

---

## 8. Writing direction

Plain, warm, first-person-plural, the way AmaDah already talks in their
own posts ("We're so happy to have you here," "DM us to order"). No
"discover," "elevate," "curated," or "experience" language. Buttons say
the literal action: **"Message us on Facebook"**, **"Call 0954 156 0047"**,
not "Order →" or "Get started."

One line from the brand's own voice is worth keeping visible somewhere
quiet near the footer — the Psalm 136:25 verse they already print on their
poster — set small, in espresso, not as a headline moment.