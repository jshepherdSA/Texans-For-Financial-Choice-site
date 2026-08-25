# Texans For Financial Choice — Content Document

**Source:** `26-08-11_TexasFinancialChoice_Website Content.pdf` (client-supplied,
21 pages). This is the source of truth and **supersedes** the earlier version of
this file, which was scraped from the legacy site.

**Source URLs:** the PDF's link annotations carried 26 real targets that plain
text extraction drops. They were recovered and live in `lib/sources.ts`. Each
arrived with a `?utm_source=chatgpt.com` parameter — an artifact of how the
document was researched — which has been stripped. **No URL on this site is
invented**; sources the document named without linking render as plain text.

**† Revised after the document.** Headings marked with a dagger were rewritten
by the client after the PDF was supplied. The dagger records that the site
deliberately diverges from the source here — the wording below is what ships,
not what page 1 of the PDF says.

---

## Page list

| Page | Route | Notes |
| ---- | ----- | ----- |
| Home | `/` | Hero + 3 sections + footnotes |
| The Economic Reality For Working Texans | `/economic-reality` | |
| Preserve Financial Choice | `/preserve-financial-choice` | 7 dropdowns + CFPB |
| The Consequences of Restricting Credit Access | `/consequences` | 6 APR dropdowns |
| Resources | `/resources` | Document says only "Downloadable One Pagers/Fact Sheets Page" |
| Press | `/press` | Document says "Take all the press links from the website press page" |
| Take Action | `/action` | Document says only "CTA" |

### Hidden routes

`/about`, `/key-facts`, `/real-vs-fake-news` are from the previous build and are
**not** in this document. Per instruction they are hidden, not deleted: routes
still resolve, but they are out of the nav, out of `sitemap.ts`, and set to
`robots: noindex`. Restore one by removing its `robots` export and adding it back
to `navLinks`.

---

## Editorial decisions worth knowing

1. **An internal drafting note was not published.** Under the cancellation-right
   box the document reads: *"This needs to be phrased carefully because the
   cancellation right applies to the credit-services contract and should not be
   presented as an unrestricted right to keep loan proceeds without
   repayment."* That is guidance to the writer, not website copy. It is not
   rendered; the published wording is scoped to the credit-services contract as
   the note directs.
2. **"Graphic 1 / Graphic 2 / USE A GRAPHIC" render as live type**, not images.
   The document marks the positions but supplies no artwork. Set as HTML they
   stay legible at any width, are selectable and translatable, and are readable
   by search engines and screen readers — which the legacy site's rasterized
   stats were not.
3. **The rent-late-fee table is a real `<table>`** with scoped headers and a
   caption, inside a horizontal scroll container.
4. **Homepage Sections 2 and 3 intentionally restate** the openings of Preserve
   Financial Choice and Consequences. That repetition is in the source: the
   homepage summarises and hands off via its "Learn more" lines.

---

## Page: Home (`/`)

**Hero:** Texas Families Deserve Options, Not Roadblocks †

> Texas families need responsible credit and transparent, regulated choices.
> Smart policies should protect consumers from harmful practices without
> eliminating lawful options or pushing them toward riskier alternatives.

### Section 1 — The Texas Reality: Unexpected Expenses Can't Wait, and Not Every Family Has the Same Financial Choices.

> Working Texas families are being squeezed from every direction—housing,
> insurance, health care, groceries, child care, transportation and utilities.
> After paying for the essentials, many have little left to save. When an
> unavoidable expense occurs, families need access to safe, transparent and
> regulated financial options that can help them manage the emergency on their
> own terms.

- **4 in 10** Texas households struggle to cover basic expenses ¹
- **1 in 3** American workers say they are living paycheck to paycheck ²

Link: *Learn more about the economic reality for many Texans* → `/economic-reality`

**Traditional credit is unavailable or insufficient for many families**

> An emergency does not wait for a family's credit score to improve—and a low
> score does not eliminate the family's need to repair a car, pay a utility bill
> or obtain medical care. Nearly 2.1 million Texas households don't have access
> to traditional credit products.

- **1 in 3** Americans who applied for traditional credit in 2025 were either denied or approved for less than they requested ³
- **18.5%** of Texas households are underbanked ⁴

### Section 2 — Protecting Texans Means Safe Access to Credit †

Intro paragraph, then seven protections (licensing, standardized cost
disclosure, fees disclosed before charged, cancellation right, regulatory
examinations, reported market activity, OCCC enforcement).

Link: *Learn more about regulatory oversight* → `/preserve-financial-choice`

### Section 3 — Financial Emergencies Do Not Disappear: The Consequences of Restricting Access

Three blocks, each linking into `/consequences`:

1. The Alternatives Can Cost More → *Compare the Costs*
2. Rate Caps Can Put Credit Out of Reach → *See What the Research Shows*
3. Where Will Texans Turn? → *Read the Analysis*

### Footnotes

1. United For ALICE, *The State of ALICE in Texas: 2026 Report* (2024 data).
2. Bankrate, "More Than a Third of Workers Say They're Living Paycheck to Paycheck," July 15, 2024.
3. Federal Reserve, *Economic Well-Being of U.S. Households in 2025*, May 2026.
4. Texas Fair Lending Alliance, "The State of Lending in Texas."

---

## Page: The Economic Reality For Working Texans (`/economic-reality`)

**Hero:** The Economic Reality For Working Texans

Sections in order:

1. **Work no longer guarantees financial stability** — 4.5 million Texas
   households (40%) earned less than needed for basic expenses in 2024.
2. **A modest emergency can become a family crisis** — three Federal Reserve
   SHED findings (37% / 55% / 55%).
3. **Texas Families Face Growing Financial Pressure** — seven pressures:
   housing, homeowners insurance, health-care exposure, medical costs even when
   insured, transportation, food insecurity, child care.

---

## Page: Preserve Financial Choice (`/preserve-financial-choice`)

**Hero:** Protecting Texans Means Safe Access to Credit †

Seven dropdowns: Every CAB must be licensed · Standardized cost disclosure (9
required elements) · Fees disclosed before charged · Cancellation right ·
Regulatory examinations · Market activity reported and published · OCCC
enforcement authority.

Then **Federal Oversight Through The Consumer Financial Protection Bureau** with
six supervision powers.

---

## Page: The Consequences of Restricting Credit Access (`/consequences`)

**Hero:** Restricting Credit Access Has Big Consequences †

1. **Annual Percentage Rate of Short-Term Lending Alternatives** — six
   dropdowns: Bank Overdrafts 17,236% · Utility late/shutoff up to 913% · Texas
   rent late fees up to 626% (with table) · Credit cards with late fees up to
   4,171% · Unlicensed/illegal/overseas lenders over 1,000% · Cartel and
   criminal lending.
2. **Government Mandated Interest Rate Caps Put Credit Out of Reach** — 2026 NY
   Fed research; Fed Board on loan pricing and risk.
3. **Interest Rate Caps Cases** — Oregon, Georgia, plus the Illinois Case Study
   downloadable one-pager.
4. **If Short-Term Credit Is Restricted or Eliminated, Where Will Texans Turn?**
   — six conditions a workable substitute must meet.
5. **Alternatives Should Compete With Credit, Not Eliminate It**

---

## Page: Resources (`/resources`)

The document supplies only a placeholder: *"Downloadable One Pagers/Fact Sheets
Page."* Per client instruction the page carries the **13 existing fact sheets**
(titles and PDFs from the legacy site) **plus the Illinois Case Study**
one-pager named in this document.

> The Illinois one-pager is hosted on Canva, so it has no cover render and falls
> back to a document glyph in the grid.

---

## Page: Press (`/press`)

The document says: *"Take all the press links from the website press page and put
them here."* The 50 articles carried over from the legacy Press page are in
`lib/press.ts`, grouped by year.

---

## Page: Take Action (`/action`)

The document says only *"CTA."* The page carries the lead form (First Name, Last
Name, Email, Phone, Zip Code) alongside the headline statistics.

---

## Global

- **Contact:** info@texansforfinancialchoice.org
- **Social:** Facebook · Twitter/X · Instagram
- **Primary CTA:** `TAKE ACTION` → `/action`

## Open items

- **Both lead forms validate but have no backend.** See `TODO(handoff)` in
  `components/subscribe-form.tsx` and `components/action-form.tsx`.
- The document references footnote markers 1–4 on the homepage; marker 3's
  placement was ambiguous in the PDF's text layer and has been attached to the
  credit-denial figure, which is what its wording describes.
