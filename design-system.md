# Design System — Texans For Financial Choice

Generated in stage 2 (Claude Design → `design-system` token architecture).
Every page-building step reads this file. All values are final — build from these,
don't re-decide.

## Brand

- **Client:** Texans For Financial Choice
- **Voice / feel:** Credible & institutional. A serious Texas policy shop, not a
  campaign. Restrained, confident, evidence-led. The content is argumentative by
  nature — the design's job is to make it read as *sourced and authoritative*,
  not shouty. Think Pew / Brookings / Niskanen, with Texas navy.
- **Modernize / elevate / simplify** relative to the legacy site: kill the
  gradients, drop-shadows, and centered-everything; replace with a strict grid,
  generous whitespace, real type hierarchy, and data given room to breathe.
- **Logo:** `/public/logo.png` — navy + sky-blue swoosh mark over the wordmark
  "TEXANS / FOR FINANCIAL CHOICE". Navy `#21437F` and sky `#A4D0E9` are taken
  directly from it, which is why they anchor the palette.

---

## Color

Three-layer architecture: **primitive → semantic → component**. Primitives are
raw ramps and are never referenced directly in components; components reference
semantic tokens only.

### Layer 1 — Primitives

Expressed in `oklch` to match the shadcn/Tailwind v4 scaffold. Source hex in
comments.

```css
/* Navy — brand primary. #21437F is the logo navy and lands at 700. */
--color-navy-50:  oklch(0.9658 0.0091 258.34); /* #F0F4FA */
--color-navy-100: oklch(0.9246 0.0219 256.73); /* #DDE7F5 */
--color-navy-200: oklch(0.8581 0.0399 256.60); /* #C0D2EB */
--color-navy-300: oklch(0.7547 0.0672 254.97); /* #93B2DA */
--color-navy-400: oklch(0.6261 0.1007 255.70); /* #5E8AC4 */
--color-navy-500: oklch(0.5241 0.1199 257.37); /* #3A6AAE */
--color-navy-600: oklch(0.4477 0.1163 259.28); /* #2A5394 */
--color-navy-700: oklch(0.3918 0.1090 260.82); /* #21437F  ← logo navy */
--color-navy-800: oklch(0.3388 0.0891 260.66); /* #1B3665 */
--color-navy-900: oklch(0.2964 0.0711 260.48); /* #172C50 */
--color-navy-950: oklch(0.2336 0.0518 262.34); /* #101D36 */

/* Sky — brand secondary. #A4D0E9 is the logo swoosh and lands at 300. */
--color-sky-50:  oklch(0.9777 0.0085 225.08); /* #F2F9FC */
--color-sky-100: oklch(0.9463 0.0193 230.70); /* #E1F0F8 */
--color-sky-200: oklch(0.8963 0.0370 230.24); /* #C5E2F1 */
--color-sky-300: oklch(0.8347 0.0580 233.27); /* #A4D0E9  ← logo sky */
--color-sky-400: oklch(0.7534 0.0813 234.10); /* #7AB8DB */
--color-sky-500: oklch(0.6726 0.0986 236.84); /* #559FCB */
--color-sky-600: oklch(0.5826 0.0971 240.65); /* #3F82AF */
--color-sky-700: oklch(0.4980 0.0797 241.55); /* #35688C */
--color-sky-800: oklch(0.4395 0.0636 239.90); /* #2F5772 */
--color-sky-900: oklch(0.3924 0.0532 242.80); /* #2B4960 */
--color-sky-950: oklch(0.3225 0.0434 243.29); /* #1F3648 */

/* Neutral — cool slate, tuned to sit with navy rather than fight it. */
--color-neutral-0:   oklch(1.0000 0.0000 89.88); /* #FFFFFF */
--color-neutral-50:  oklch(0.9842 0.0034 247.86); /* #F8FAFC */
--color-neutral-100: oklch(0.9683 0.0069 247.90); /* #F1F5F9 */
--color-neutral-200: oklch(0.9288 0.0126 255.51); /* #E2E8F0 */
--color-neutral-300: oklch(0.8690 0.0198 252.89); /* #CBD5E1 */
--color-neutral-400: oklch(0.7107 0.0351 256.79); /* #94A3B8 */
--color-neutral-500: oklch(0.5544 0.0407 257.42); /* #64748B */
--color-neutral-600: oklch(0.4455 0.0374 257.28); /* #475569 */
--color-neutral-700: oklch(0.3717 0.0392 257.29); /* #334155 */
--color-neutral-800: oklch(0.2795 0.0368 260.03); /* #1E293B */
--color-neutral-900: oklch(0.2077 0.0398 265.75); /* #0F172A */
--color-neutral-950: oklch(0.1288 0.0406 264.70); /* #020617 */

/* Red — the legacy #a71000, kept for the "Fake News" side + destructive. */
--color-red-50:  oklch(0.9717 0.0109 24.32); /* #FDF3F2 */
--color-red-100: oklch(0.9344 0.0268 26.18); /* #FBE3E0 */
--color-red-200: oklch(0.8721 0.0544 26.70); /* #F7C8C2 */
--color-red-300: oklch(0.7768 0.0989 28.02); /* #EF9E93 */
--color-red-400: oklch(0.6672 0.1514 29.04); /* #E26B5C */
--color-red-500: oklch(0.5820 0.1755 31.17); /* #CE4632 */
--color-red-600: oklch(0.5050 0.1754 31.25); /* #B32B18 */
--color-red-700: oklch(0.4629 0.1825 30.59); /* #A71000 ← legacy accent */
--color-red-800: oklch(0.4066 0.1548 30.37); /* #8A1206 */
--color-red-900: oklch(0.3622 0.1303 30.01); /* #73140B */
--color-red-950: oklch(0.2793 0.0967 29.90); /* #4E0D07 */

/* Green — "Real News" side + success. */
--color-green-50:  oklch(0.9760 0.0132 159.92); /* #F0FAF4 */
--color-green-100: oklch(0.9371 0.0355 159.67); /* #D7F2E2 */
--color-green-200: oklch(0.8673 0.0741 160.22); /* #A9E3C3 */
--color-green-300: oklch(0.7745 0.1137 159.62); /* #6FCC9C */
--color-green-400: oklch(0.6740 0.1357 157.62); /* #3AAF75 */
--color-green-500: oklch(0.5765 0.1269 157.01); /* #1F8F5A */
--color-green-600: oklch(0.4928 0.1079 157.31); /* #177348 */
--color-green-700: oklch(0.4198 0.0867 158.70); /* #155B3B */
--color-green-800: oklch(0.3663 0.0707 160.56); /* #134A32 */
--color-green-900: oklch(0.3240 0.0582 162.75); /* #113D2B */

/* Amber — warning only. */
--color-amber-50:  oklch(0.9805 0.0171 84.59); /* #FEF8EC */
--color-amber-100: oklch(0.9516 0.0469 88.29); /* #FCEECC */
--color-amber-300: oklch(0.8306 0.1295 82.32); /* #F1BF5C */
--color-amber-500: oklch(0.6543 0.1370 69.70); /* #C57F14 */
--color-amber-700: oklch(0.4687 0.0957 66.18); /* #7E4E12 */
```

### Layer 2 — Semantic (shadcn variable names)

These are what components use. Names match shadcn/ui so the generated
`components/ui/*` work unmodified.

| Token                    | Value          | Use                                       |
| ------------------------ | -------------- | ----------------------------------------- |
| `--background`           | `neutral-0`    | Page background                           |
| `--foreground`           | `neutral-800`  | Default body text                         |
| `--card`                 | `neutral-0`    | Card surface                              |
| `--card-foreground`      | `neutral-800`  | Card text                                 |
| `--popover`              | `neutral-0`    | Popover surface                           |
| `--popover-foreground`   | `neutral-800`  | Popover text                              |
| `--primary`              | `navy-700`     | Primary actions, links, headings          |
| `--primary-foreground`   | `neutral-0`    | Text on primary                           |
| `--secondary`            | `sky-100`      | Tinted surfaces, secondary buttons        |
| `--secondary-foreground` | `navy-800`     | Text on secondary                         |
| `--muted`                | `neutral-100`  | Muted/alternating section background      |
| `--muted-foreground`     | `neutral-500`  | Secondary/supporting text, captions       |
| `--accent`               | `sky-200`      | Hover surfaces, highlights                |
| `--accent-foreground`    | `navy-800`     | Text on accent                            |
| `--destructive`          | `red-700`      | Destructive / "Fake News" label            |
| `--border`               | `neutral-200`  | Hairlines, dividers, card borders         |
| `--input`                | `neutral-300`  | Form field borders                        |
| `--ring`                 | `navy-500`     | Focus rings                               |
| `--surface-sunken`       | `neutral-50`   | Subtle section band                       |
| `--surface-inverse`      | `navy-900`     | Footer, dark bands, hero underlay         |
| `--positive`             | `green-700`    | "Real News" label, success                |
| `--warning`              | `amber-700`    | Warning                                   |

**Contrast (verified, white bg unless noted):**

| Pair                          | Ratio    | Result   |
| ----------------------------- | -------- | -------- |
| `foreground` body text        | 10.35:1  | AAA      |
| `muted-foreground`            | 4.76:1   | AA       |
| `muted-foreground` on `muted` | 4.55:1   | AA       |
| `primary` (navy-700)          | 9.66:1   | AAA      |
| white on `primary`            | 9.66:1   | AAA      |
| white on `surface-inverse`    | 13.88:1  | AAA      |
| `sky-300` on `surface-inverse`| 8.45:1   | AAA      |
| `destructive` red-700         | 7.73:1   | AAA      |
| `positive` green-700          | 8.10:1   | AAA      |

`neutral-400` is **borders and decoration only** — it fails AA for text (2.56:1).
Never use it for copy.

### Usage rules

- Navy carries authority; sky is a **tint and accent**, never a large text color
  on white.
- Red appears *only* on the Fake News side and destructive states. It is not a
  general accent — overusing it turns the site into a campaign flyer.
- Green appears *only* on the Real News side and success states.
- Section rhythm alternates `background` → `surface-sunken` / `muted`, with one
  `surface-inverse` band per page maximum.

---

## Typography

**Headings are matched to the logo wordmark.** The mark sets "TEXANS" in a bold,
squarish neo-grotesque; the heading face extends that letterform rather than
introducing a second voice.

Candidates were rendered directly against the logo crop and compared. **Archivo**
won on three tells: the wide `E` with full-length arms, the closed `S` with
horizontally-cut terminals, and the overall squarish proportion. Libre Franklin
and Public Sans are narrower with a sharper `A` apex; Roboto Condensed and Barlow
are too tight; Asap is too rounded.

- **Heading font:** Archivo — weights 500, 600, 700. Loaded via
  `next/font/google` as `Archivo`, CSS var `--font-heading`.
- **Body font:** Inter — weights 400, 500, 600. Loaded as `Inter`, CSS var
  `--font-sans`. A quieter neutral grotesque, so hierarchy comes from weight and
  scale rather than from a clash of styles.
- **Heading tracking:** `-0.02em` on h2/h3, `-0.03em` on h1. Archivo's default
  fit is loose at display sizes; tightening echoes the logo's tight setting.
- Numerals in stats/tables use `font-variant-numeric: tabular-nums`.

> Superseded: an earlier draft paired Source Serif 4 headlines with Inter. That
> read as a think-tank, but fought the logo — the mark is emphatically sans.
> Matching the logo took priority.

### Type scale (1.250 — major third)

| Role       | Size (desktop)     | Line height | Weight | Font    | Notes                          |
| ---------- | ------------------ | ----------- | ------ | ------- | ------------------------------ |
| `display`  | 3.75rem / 60px     | 1.05        | 700    | Archivo | Homepage hero only             |
| `h1`       | 3rem / 48px        | 1.10        | 700    | Archivo | One per page                   |
| `h2`       | 2.25rem / 36px     | 1.15        | 700    | Archivo | Section headings               |
| `h3`       | 1.75rem / 28px     | 1.25        | 600    | Archivo | Sub-sections, card titles      |
| `h4`       | 1.375rem / 22px    | 1.35        | 600    | Inter   | Small headings, list titles    |
| `body-lg`  | 1.125rem / 18px    | 1.70        | 400    | Inter   | Intros, lede paragraphs        |
| `body`     | 1rem / 16px        | 1.70        | 400    | Inter   | Default                        |
| `small`    | 0.875rem / 14px    | 1.60        | 400    | Inter   | Captions, meta, dates          |
| `cite`     | 0.75rem / 12px     | 1.60        | 400    | Inter   | Citations, footnotes, sources  |
| `eyebrow`  | 0.8125rem / 13px   | 1.40        | 600    | Inter   | Uppercase, `letter-spacing: .08em` |
| `stat`     | 3.5rem / 56px      | 1.00        | 700    | Archivo | Big numbers, tabular-nums      |

**Mobile:** `display` → 2.5rem, `h1` → 2.25rem, `h2` → 1.75rem, `h3` → 1.375rem.
Everything else holds.

**Citations** are set in `cite` (12px), a step under `small`. They are
supporting apparatus — on every claim, never competing with it. At that size
`muted-foreground` (ink-500) is too thin: it measures 4.55:1 on the sunken
surface, over the 4.5 line by nothing at all. Citations use `ink-600` (7.24:1)
on light surfaces and `sky-200` on inverse ones, where the light link colour
`sky-700` would be 2.32:1 and unreadable.

**Measure:** body copy caps at `65ch`; lede at `60ch`. Never full-bleed text.

---

## Spacing & layout

- **Base unit:** 4px. Scale: `0, 1(4), 2(8), 3(12), 4(16), 5(20), 6(24), 8(32),
  10(40), 12(48), 16(64), 20(80), 24(96), 32(128)`.
- **Container:** `max-width: 1200px`, gutters `1.5rem` mobile / `2rem` desktop.
  A narrower `max-width: 768px` prose container is used for long-form body copy
  (Key Facts, Real vs Fake News).
- **Section vertical rhythm:** `py-20` (80px) mobile, `py-24`/`py-32` (96–128px)
  desktop. Adjacent sections never share the same background.
- **Grid:** 12-column, `gap-8` desktop / `gap-6` mobile.

---

## Radius, shadow, border

Restrained — institutional, not bubbly.

```css
--radius: 0.5rem;        /* base: cards, inputs  */
/* shadcn derives sm/md/lg/xl from this */
```

- Buttons: `--radius` (8px). Cards: 8px. Pills/badges: `9999px`.
- **Borders do the work, not shadows.** Default card = `1px solid var(--border)`,
  no shadow. Shadows only on genuinely floating things (dropdowns, mobile menu).

```css
--shadow-sm: 0 1px 2px 0 oklch(0.2077 0.0398 265.75 / 0.05);
--shadow-md: 0 4px 12px -2px oklch(0.2077 0.0398 265.75 / 0.08);
--shadow-lg: 0 12px 32px -8px oklch(0.2077 0.0398 265.75 / 0.12);
```

---

## Components

### Buttons

| Variant       | Default                          | Hover              | Focus                        | Disabled            |
| ------------- | -------------------------------- | ------------------ | ---------------------------- | ------------------- |
| `primary`     | bg `primary`, text white         | bg `navy-800`      | `ring-2 ring-ring ring-offset-2` | bg `neutral-200`, text `neutral-400` |
| `secondary`   | bg `secondary`, text `navy-800`  | bg `sky-200`       | same                         | same                |
| `outline`     | transparent, `1px` `primary` border, text `primary` | bg `sky-50` | same          | border `neutral-200` |
| `ghost`       | transparent, text `primary`      | bg `neutral-100`   | same                         | text `neutral-400`  |

- Heights: `sm` 36px, `default` 44px, `lg` 52px. Min touch target 44px.
- The `TAKE ACTION` / `TAKE ACTION NOW` CTA is always `primary` at `lg`,
  uppercase, `letter-spacing: .04em`, weight 600.
- Focus is **always** visible — never remove the ring.

### Cards

- Surface `card`, `1px solid border`, `--radius`, padding `1.5rem`–`2rem`.
- No shadow at rest. Interactive cards (fact sheets, press items, resources):
  on hover → `border-color: navy-300`, `background: sky-50`, 150ms ease.
- Fact-sheet / resource cards get a small document icon (lucide `FileText`) in
  `navy-600` and a `Download PDF Version` affordance.

### Nav

- Sticky, `background` with `1px` bottom `border`, 72px tall (64px scrolled).
- Logo left. Links `small`, weight 500, `foreground`; active link `primary` with
  a 2px `primary` underline. `TAKE ACTION` button right, `primary`.
- Mobile: hamburger → shadcn `Sheet` panel, full-height, links at `h4` size.

### Footer

- `surface-inverse` (navy-900). White logo lockup, nav columns, contact email,
  social icons, copyright.
- Text `sky-200`; links white on hover. Column headings `eyebrow` in `sky-300`.

### Form fields

- Height 44px, `1px solid input` border, `--radius`, padding `0.75rem`.
- Label above, `small` weight 500, `foreground`. Required marked with `*`.
- Focus: `border-color: primary` + `ring-2 ring-ring/30`.
- Error: `border-color: destructive`, message below in `destructive` `small`.
- Newsletter/action forms use shadcn `Input` + `Label` + `Button`.

### Real vs Fake News pattern

The signature component. Per pair:

- Two stacked/side-by-side panels. **Fake News** — `red-50` bg, `red-200` border,
  `destructive` `eyebrow` label with lucide `X` icon. **Real News** — `green-50`
  bg, `green-200` border, `positive` `eyebrow` label with lucide `Check` icon.
- `Get The Facts` is a shadcn `Accordion` beneath the pair — collapsed by
  default, `neutral-50` surface, footnotes in `cite` `ink-600`.

### Stat / data display

- Big number at `stat` size in `primary`, tabular-nums; label beneath at
  `small` `muted-foreground`.
- Stat groups sit on `surface-sunken` or `surface-inverse` bands.

---

## Imagery

- **Photographic**, documentary register: real Texans, storefronts, the Capitol.
  No stock-y handshake/piggy-bank clichés — they undercut the credibility goal.
- Treatment: full-bleed images get a **navy-900 overlay at 75%** (the
  `SectionBackground` component), plus a bottom-weighted gradient where text sits.
  Inline images get `--radius` and a `1px border` hairline.

  > Corrected: an earlier draft of this file said 55–70%. That was measured and
  > found wrong. Against the worst case — the overlay sitting on a near-white
  > region of the photo, which both the Capitol sky and the rural sky approach —
  > white text gets only 3.44:1 at 55% and 3.97:1 at 60%, both failing AA. 70% is
  > the floor (5.37:1 white, 4.61:1 sky-100); 75% is the default so the margin
  > survives swapping in a brighter image. `SectionBackground` clamps to 70
  > regardless of what is passed.
- **Iconography:** lucide-react, 1.5px stroke, `navy-600` default, 20/24px.
- No decorative gradients. No drop-shadowed "web 2.0" cards. The legacy site's
  visual noise is exactly what this system removes.
