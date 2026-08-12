/**
 * Cited sources.
 *
 * URLs are the real link targets embedded in the client's content PDF
 * (26-08-11_TexasFinancialChoice_Website Content.pdf), recovered from the
 * document's link annotations. The `?utm_source=chatgpt.com` parameters they
 * arrived with have been stripped — those were artifacts of how the document
 * was researched, not tracking anyone intended to ship.
 *
 * No URL here is invented. Where the document named a source without linking
 * it, the entry has no `href` and renders as plain text.
 */

export type Source = {
  label: string;
  href?: string;
};

export const sources = {
  aliceTexas: {
    label: 'United For ALICE',
    href: 'https://www.unitedforalice.org/state-overview/texas',
  },
  aliceIntro: {
    label: 'United For ALICE',
    href: 'https://www.unitedforalice.org/introducing-ALICE/texas',
  },
  bankratePaycheck: {
    label: 'Bankrate',
    href: 'https://www.bankrate.com/banking/living-paycheck-to-paycheck-survey/',
  },
  fedWellBeing: {
    label: 'Federal Reserve',
    href: 'https://www.federalreserve.gov/publications/2026-economic-well-being-of-us-households-in-2025-credit.htm',
  },
  fedShed: {
    label: 'Federal Reserve SHED data',
    href: 'https://www.federalreserve.gov/consumerscommunities/sheddataviz/unexpectedexpenses-table.html',
  },
  texasFairLending: {
    label: 'Texas Fair Lending Alliance',
    href: 'https://texasfairlending.org',
  },
  comptrollerHousing: {
    label: 'Texas Comptroller',
    href: 'https://comptroller.texas.gov/economy/fiscal-notes/economics/2024/aff-housing/',
  },
  comptrollerHousingReport: {
    label: 'Texas Comptroller housing report',
    href: 'https://comptroller.texas.gov/economy/in-depth/special-reports/housing-affordability/96-1999.pdf',
  },
  texas2036: {
    label: 'Texas 2036',
    href: 'https://texas2036.org/news-analysis/how-market-forces-are-driving-up-healthcare-prices-in-texas/',
  },
  occcIndustries: {
    label: 'Texas OCCC regulated-industries overview',
    href: 'https://occc.texas.gov/industry/',
  },
  occcDisclosure: {
    label: 'OCCC single-payment payday disclosure',
    href: 'https://occc.texas.gov/wp-content/uploads/2025/12/cab-disclosure-payday-single-rev2024.pdf',
  },
  occcEnforcement: {
    label: 'OCCC enforcement-action database',
    href: 'https://occc.texas.gov/publications/legal/enforcement-actions/',
  },
  tac835004: {
    label: 'Texas consumer-disclosure rule (7 TAC §83.5004)',
    href: 'https://www.law.cornell.edu/regulations/texas/7-Tex-Admin-Code-SS-83-5004',
  },
  tac836007: {
    label: 'Texas CAB examination rule',
    href: 'https://www.law.cornell.edu/regulations/texas/7-Tex-Admin-Code-SS-83-6007',
  },
  tac835003: {
    label: 'OCCC financial-services activity reports',
    href: 'https://www.law.cornell.edu/regulations/texas/7-Tex-Admin-Code-SS-83-5003',
  },
  fin393602: {
    label: 'Texas Finance Code §393.602',
    href: 'https://law.justia.com/codes/texas/finance-code/title-5/chapter-393/subchapter-g/section-393-602/',
  },
  fin393202: {
    label: 'Texas Finance Code §393.202',
    href: 'https://statutes.capitol.texas.gov/GetStatute.aspx?Code=FI&Value=393.202',
  },
  cfpbOverdraft: {
    label: 'CFPB overdraft analysis',
    href: 'https://www.consumerfinance.gov/archive/newsroom/cfpb-finds-small-debit-purchases-lead-to-expensive-overdraft-charges/',
  },
  utilityReconnect: {
    label: 'Texas utility reconnect-fee rule',
    href: 'https://regulations.justia.com/states/texas/title-16/part-2/chapter-24/subchapter-f/section-24-167/',
  },
  sllRent: {
    label: 'Texas State Law Library',
    href: 'https://guides.sll.texas.gov/landlord-tenant-law/rent',
  },
  fedG19: {
    label: 'Federal Reserve G.19 consumer-credit release',
    href: 'https://www.federalreserve.gov/releases/g19/current/g19.pdf',
  },
  nyFedCaps: {
    label: 'Federal Reserve Bank of New York',
    href: 'https://libertystreeteconomics.newyorkfed.org/2026/06/the-unintended-effects-of-interest-rate-caps-credit-rationing-for-risky-borrowers/',
  },
  fedLoanPricing: {
    label: 'Federal Reserve Board',
    href: 'https://www.federalreserve.gov/econres/notes/feds-notes/examining-the-relationship-between-loan-pricing-and-credit-risk-20250924.html',
  },
  oregonStudy: {
    label: 'Oregon rate-cap study',
    href: 'https://scispace.com/pdf/restricting-consumer-credit-access-household-survey-evidence-54a4lruj5p.pdf',
  },
  nyFedGeorgia: {
    label: 'Federal Reserve Bank of New York study',
    href: 'https://www.newyorkfed.org/research/staff_reports/sr309.html',
  },
  illinoisOnePager: {
    label: 'Illinois Case Study one-pager',
    href: 'https://canva.link/wsww1wai29mn9sr',
  },
  ncuaPals: {
    label: 'NCUA guidance',
    href: 'https://ncua.gov/regulation-supervision/letters-credit-unions-other-guidance/permissible-loan-interest-rate-ceiling-extended',
  },
} as const satisfies Record<string, Source>;

/** Numbered footnotes for the homepage, matching the content document. */
export const homeFootnotes = [
  {
    n: 1,
    text: 'United For ALICE, The State of ALICE in Texas: 2026 Report, based on 2024 data. Of Texas’s 11,388,247 households, 40% — approximately 4.6 million — lived below the ALICE Threshold and lacked sufficient income to afford basic household expenses.',
    source: sources.aliceTexas,
  },
  {
    n: 2,
    text: 'Bankrate, “More Than a Third of Workers Say They’re Living Paycheck to Paycheck,” July 15, 2024. Survey conducted by YouGov among 2,407 U.S. adults, including 1,248 full- and part-time workers.',
    source: sources.bankratePaycheck,
  },
  {
    n: 3,
    text: 'Board of Governors of the Federal Reserve System, Economic Well-Being of U.S. Households in 2025, May 2026. Among adults who applied for credit in 2025, 33% were denied credit or approved for less than they requested.',
    source: sources.fedWellBeing,
  },
  {
    n: 4,
    text: 'Texas Fair Lending Alliance, “The State of Lending in Texas: Summary of Financial Exclusion.” Accessed February 2026.',
    source: sources.texasFairLending,
  },
] as const;
