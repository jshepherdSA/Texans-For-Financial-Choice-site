# Site Teardown: Texans For Financial Choice (legacy)

**URL:** https://texansforfinancialchoice.com/
**Built by:** District Maven (footer credit)
**Platform:** WordPress 6.3.8
**Date analyzed:** 2026-07-30
**Reference intent:** `[same-org]`

> ## Scope note — read this first
>
> This is a **`[same-org]`** reference, **not** a `[rebuild]`. We are building a
> new site for the same organization.
>
> - **Take from this teardown:** brand identity — logo, palette, voice/tone,
>   content patterns, reusable assets.
> - **Do NOT take:** page architecture, layout, section structure, or any of the
>   visual treatments in "Anti-patterns" below. The new design is fresh.
>
> The brief is *modernize, elevate, simplify*. This document is therefore as much
> a list of what to **avoid** as what to keep.

---

## Tech Stack (confirmed from source)

| Technology                  | Evidence                                        | Purpose                        |
| --------------------------- | ----------------------------------------------- | ------------------------------ |
| WordPress 6.3.8             | `wp-includes/...?ver=6.3.8`                     | CMS                            |
| Themeco **Pro** theme       | `wp-content/themes/pro/.../stacks/ethos.css`    | Page builder theme, "Ethos" stack |
| **Slider Revolution** 6.6.12| `generator` meta + `revslider` plugin           | Homepage hero slider           |
| **The Grid** 2.7.9.1        | `plugins/the-grid/...`                          | Press + fact-sheet grids       |
| **Everest Forms** (+ Pro)   | `plugins/everest-forms*`                        | Subscribe + Take Action forms  |
| **Use Any Font**            | `uploads/useanyfont/uaf.css`                    | Self-hosted font loader        |
| All in One SEO 4.3.4.1      | `generator` meta                                | SEO                            |
| Site Kit by Google 1.96.0   | `generator` meta                                | Analytics                      |
| CookieYes / Cookie Law Info | `plugins/cookie-law-info`                       | Cookie banner                  |
| Font Awesome (Pro)          | `FontAwesomePro`, `FontAwesomeBrands` families  | Icons                          |

**Relevance to the new build:** none of this carries over. The new site is
Next.js + Tailwind + shadcn/ui. Stack is recorded for context only — chiefly to
explain *why* the legacy site looks the way it does (a page-builder theme with
four stacked plugins, each bringing its own CSS).

---

## Brand cues to KEEP

### Logo

- **File:** `Texans_for_Financial_Choice_Logos_3_5_-removebg-crop.png` (512×512,
  RGBA, transparent). Saved to the new repo as `/public/logo.png`.
- **Composition:** a stylized navy "7"/arrow with a light-blue swoosh sweeping
  beneath it, stacked above the wordmark **TEXANS** (heavy, navy) over
  **FOR FINANCIAL CHOICE** (letterspaced, smaller, navy).
- **Usage in new build:** it's a square stacked lockup, so it needs breathing
  room. Header: **56px mobile / 64px desktop** in an 80px/96px bar. Footer:
  **80px** on a white chip — the mark has no light variant, so navy-on-navy
  disappears. It sits beside a text wordmark rather than being scaled alone: the
  lockup's own "FOR FINANCIAL CHOICE" sub-line is about 1/8 of its height and
  stays illegible at any header-appropriate size, so the adjacent text carries
  that job.
- **Wordmark typeface:** bold squarish neo-grotesque. This is the reference the
  site's heading font is matched to — see `design-system.md` → Typography.

### Color palette (sampled from live CSS + logo)

| Sampled           | Hex       | Role in legacy site         | Carried into new system as |
| ----------------- | --------- | --------------------------- | -------------------------- |
| Deep navy         | `#21437F` | Logo, headings, buttons     | **`navy-700` — primary**   |
| Light sky blue    | `#A4D0E9` | Logo swoosh, section tints  | **`sky-300` — secondary**  |
| Link blue         | `#0056A7` | Body links                  | folded into navy ramp      |
| Muted steel       | `#5399ac` | Accents, dividers           | folded into sky ramp       |
| Dark red          | `#a71000` | Rare accent/alert           | **`red-700` — destructive / "Fake News"** |
| Bright blue       | `#1863dc` | Theme default (not brand)   | **dropped** — Themeco default, not brand |
| Charcoal          | `#212121` | Body copy                   | replaced by cool `neutral-800` |

**Read:** the genuine brand is only two colors — navy and sky blue. Everything
else on the legacy site is theme/plugin default leaking through. The new system
therefore builds full ramps from those two and adds a disciplined neutral scale,
which is what `design-system.md` does.

### Typography (legacy — mostly a cautionary tale)

- `uaf.css` self-hosts **38 fonts** (`diana`, `mia`, `nerf`, `cheddar-bold`,
  `milky-black`, `cottorway-*`, `quico-*`, `shiny-regular`, `abrigal-regular`,
  `mriya-*`, `alexio-*` …). Almost none are used; they're leftovers from
  unrelated projects sharing the plugin's upload folder.
- Actually rendering: **Georgia** (serif) for some headings, `diana` (a script
  face) decoratively, and the theme's default sans for body.
- Type sizes are `em`-based and inconsistent (`0.275em` … `3.85em`) with no
  discernible scale.

**Cue to keep: none of the legacy fonts — the *logo* is the typographic
reference.** The wordmark is a bold squarish neo-grotesque, and nothing rendering
on the legacy site relates to it. Georgia headings in particular fight the mark.
The new system matches the logo instead: **Archivo** for headings, **Inter** for
body, on a disciplined 1.25 modular scale. See `design-system.md` → Typography
for the comparison that settled it.

### Voice & tone

Consistent across every page and worth preserving exactly:

- **Populist, plainspoken, Texan.** "We are neighbors, friends, and hard-working
  Texans from all walks of life."
- **Combative toward opponents.** Names them directly — "far-left activists,"
  "liberal media organizations," PEW, the Center for Responsible Lending.
- **Heavily evidence-anchored.** Nearly every claim carries a number and a named
  source (OCCC, FDIC, CFPB, Federal Reserve Bank of New York, Harris
  Interactive). *This is the single most important cue for the visual design:*
  the design must foreground sourced statistics, because that's how the
  organization argues. Hence the data-forward direction and the `stat` type token.
- **Action-oriented.** Every page terminates in `TAKE ACTION` / `TAKE ACTION NOW`.

### Recurring content patterns (structure-agnostic)

These are content *shapes* worth supporting as components — not layouts to copy:

1. **Claim / counter-claim pair** — the Real vs Fake News page. Two opposed
   panels plus an expandable evidence panel. Distinctive to this org; keep it as
   a signature component.
2. **Stat + attribution** — "one per every 21,000 transactions," "98 percent,"
   "$2 billion," "34 percent of Texans are underbanked." Always paired with a
   named source.
3. **Downloadable fact sheet** — title + PDF. 13 of them, plus 4 more linked
   from About.
4. **Dated press link** — `Mon / YYYY` + headline + link. 50 items.
5. **Lead-capture form** — Subscribe (Name/Email/Zip/Phone) and Take Action
   (First/Last/Email/Phone/Zip).

### Reusable assets found

| Asset                              | Path / count                                     | Verdict |
| ---------------------------------- | ------------------------------------------------ | ------- |
| Logo PNG (transparent, 512²)       | `uploads/2024/07/cropped-...removebg-crop.png`    | **Keep** — already copied to `/public/logo.png` |
| 13 fact-sheet PDFs                 | `uploads/2024/07/TFC-*.pdf`                       | **Keep** — link directly; canonical list in `content.md` |
| 13 fact-sheet cover JPGs           | `uploads/2024/07/TFC-*_page-0001.jpg`             | **Keep** — PDF first-page renders; ideal thumbnails for resource cards |
| 4 About-page PDFs                  | `uploads/2022/07-08/*.pdf`                        | **Keep** — linked from About sections |
| Slider photos (`TFFC_Slide2-4`)    | `uploads/2022/07/`                                | **Replace** — low-res, Slider Revolution artifacts |
| Stock photos (AdobeStock, couple-with-laptop) | `uploads/2022/08/`                     | **Replace** — generic stock, works against credibility |
| `keystats1-1.png`                  | `uploads/2022/05/`                                | **Replace** — rasterized stats; rebuild as live HTML/SVG so it's accessible and responsive |

---

## Anti-patterns — do NOT carry over

Recorded deliberately: this is the "doesn't look great" the client wants fixed.

| # | Legacy problem                                                                 | New approach                                              |
| - | ------------------------------------------------------------------------------ | --------------------------------------------------------- |
| 1 | **Slider Revolution hero** — auto-rotating carousel, low-res JPEGs, text baked into images | Single static hero. Real text, real `<h1>`, `next/image`   |
| 2 | **38 self-hosted fonts**, script faces (`shiny`, `milky-black`) mixed with Georgia | Exactly two families: Archivo + Inter                      |
| 3 | **No type scale** — `em` sizes from `0.275em` to `3.85em`, arbitrary            | 1.25 modular scale, tokenized                              |
| 4 | **Everything centered**, full-width text lines                                  | Left-aligned prose, `65ch` measure, 12-col grid            |
| 5 | **Stats baked into raster images** (`keystats1-1.png`) — unreadable on mobile, invisible to screen readers and search | Live HTML stat components, tabular-nums, semantic markup   |
| 6 | **Duplicated DOM** — "Hear From Real Customers," Fact Sheets, and the last Real-vs-Fake pair each render twice (desktop/mobile duplicate blocks left in the markup) | One responsive DOM. Render each block once                 |
| 7 | **Four plugin CSS bundles** fighting each other (revslider, the-grid, everest-forms, ethos) | One Tailwind pipeline                                      |
| 8 | **Theme-default blue `#1863dc`** leaking alongside brand navy                   | Only tokens from `design-system.md`                        |
| 9 | **Drop shadows + gradients** on cards, Web-2.0 register                         | Hairline `1px` borders, no rest-state shadow               |
| 10| **Stale footer** — "© 2022 Texans For Finanical Choice" (typo, wrong year) sitting under the correct 2025 line | Single correct footer, current year                        |
| 11| **`alt="Image"`** on every image including the logo                            | Meaningful alt text on all images                          |
| 12| **Accordion content hidden behind `▸ Get The Facts`** with no keyboard affordance | shadcn `Accordion` — proper ARIA, keyboard-operable        |

---

## What this feeds into the new homepage

Structure is **not** inherited. What carries forward:

- Navy/sky palette and the logo → `design-system.md` color layer.
- Logo wordmark letterforms → Archivo as the heading face.
- Evidence-first voice → stat components with visible attribution, prominent
  fact-sheet surfacing.
- The five content shapes above → a small component set (stat, fact-sheet card,
  press item, claim/counter-claim, lead form).
- The 13 fact-sheet PDFs + cover JPGs → real, immediately usable assets.

Everything in the anti-pattern table is the specification for what "modernize,
elevate, simplify" concretely means on this project.
