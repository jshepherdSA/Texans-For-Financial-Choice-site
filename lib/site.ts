/**
 * Shared site data. Copy is verbatim from content.md — the content document is
 * the source of truth. Do not reword here.
 */

export const site = {
  name: 'Texans For Financial Choice',
  shortName: 'Texans For Financial Choice',
  email: 'info@texansforfinancialchoice.org',
  url: 'https://texansforfinancialchoice.com',
  description:
    'We are neighbors, friends, and hard-working Texans from all walks of life who are dedicated to sharing information about making smart, reasonable choices when faced with a financial emergency.',
} as const;

/**
 * Primary navigation. Page list is derived from the 2026-08-11 content
 * document, which defines the site.
 *
 * Three pages from the previous build — /about, /key-facts, and
 * /real-vs-fake-news — are intentionally absent. They are hidden, not deleted:
 * the routes still resolve for anyone holding a direct link, but they are out
 * of the nav, out of the sitemap, and set to noindex, because their framing
 * predates the new document's more measured, heavily-sourced tone. Restore one
 * by adding it back here and dropping its `robots` export.
 */
export const navLinks = [
  { label: 'Access Matters', href: '/economic-reality' },
  { label: 'Consumer Protections', href: '/preserve-financial-choice' },
  { label: 'Cost of Restriction', href: '/consequences' },
  { label: 'Resources', href: '/resources' },
  { label: 'Press', href: '/press' },
] as const;

/** Routes kept reachable but deliberately unlinked and unindexed. */
export const hiddenRoutes = [
  '/about',
  '/key-facts',
  '/real-vs-fake-news',
] as const;

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/TexansForFinancialChoice/',
  },
  { label: 'Twitter', href: 'https://twitter.com/TXFinChoice' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/texansforfinancialchoice/',
  },
] as const;

const PDF_BASE =
  'https://texansforfinancialchoice.com/wp-content/uploads/2024/07';

export type FactSheet = {
  title: string;
  file: string;
  /** Absent when the document is hosted off-site and has no cover render. */
  cover?: string;
};

/** The 13 fact sheets. Titles verbatim from the Resources page. */
export const factSheets: FactSheet[] = [
  {
    title: 'Fewest Complaints Filed With The CFPB',
    file: `${PDF_BASE}/TFC-CFPB-Complaint-Rates-2023.pdf`,
    cover: '/factsheets/TFC-CFPB-Complaint-Rates-2023.jpg',
  },
  {
    title: 'Credit Service Organizations (CSOs)',
    file: `${PDF_BASE}/TFC-CSOs-Explained.pdf`,
    cover: '/factsheets/TFC-CSOs-Explained.jpg',
  },
  {
    title: 'Government Price Controls Are Disastrous',
    file: `${PDF_BASE}/TFC-Government-Price-Controls.pdf`,
    cover: '/factsheets/TFC-Government-Price-Controls.jpg',
  },
  {
    title: 'Helping Consumers Through The Pandemic',
    file: `${PDF_BASE}/TFC-Helping-Consumers-through-the-Pandemic.pdf`,
    cover: '/factsheets/TFC-Helping-Consumers-through-the-Pandemic.jpg',
  },
  {
    title: 'Lowest Consumer Complaints In The Finance Industry',
    file: `${PDF_BASE}/TFC-Lowest-Consumer-Complaints-in-The-Finance-Industry-1.pdf`,
    cover:
      '/factsheets/TFC-Lowest-Consumer-Complaints-in-The-Finance-Industry-1.jpg',
  },
  {
    title: 'Texas Credit Access Business Legislation',
    file: `${PDF_BASE}/TFC-Texas-CAB-Legislation.pdf`,
    cover: '/factsheets/TFC-Texas-CAB-Legislation.jpg',
  },
  {
    title:
      'The Texas Sunset Commission Conducted A Review Of Short-Term Borrowing Regulations',
    file: `${PDF_BASE}/TFC-Texas-Sunset-Review.pdf`,
    cover: '/factsheets/TFC-Texas-Sunset-Review.jpg',
  },
  {
    title: 'The Unintended Consequences of Interest Rate Caps in Texas',
    file: `${PDF_BASE}/TFC-Consequences-of-Interest-Rate-Caps.pdf`,
    cover: '/factsheets/TFC-Consequences-of-Interest-Rate-Caps.jpg',
  },
  {
    title: 'Overwhelming Demand for Credit in Texas',
    file: `${PDF_BASE}/TFC-Demand-for-Credit-in-Texas.pdf`,
    cover: '/factsheets/TFC-Demand-for-Credit-in-Texas.jpg',
  },
  {
    title:
      'Texas Credit Access Business (CABs) Are Heavily Regulated at Federal and State Levels',
    file: `${PDF_BASE}/TFC-Heavy-Regulation-.pdf`,
    cover: '/factsheets/TFC-Heavy-Regulation-.jpg',
  },
  {
    title:
      'Given choices and financial flexibility, Texas consumers are turning away from single payment "payday" loans',
    file: `${PDF_BASE}/TFC-Less-payday-more-installment-loans.pdf`,
    cover: '/factsheets/TFC-Less-payday-more-installment-loans.jpg',
  },
  {
    title:
      'Activists want to eliminate billions in credit without a reasonable private-sector alternative',
    file: `${PDF_BASE}/TFC-No-Solutions-or-Alternatives.pdf`,
    cover: '/factsheets/TFC-No-Solutions-or-Alternatives.jpg',
  },
  {
    title: 'Fact Sheet',
    file: `${PDF_BASE}/TFC-Fact-Sheet.pdf`,
    cover: '/factsheets/TFC-Fact-Sheet.jpg',
  },
  // Named in the 2026-08-11 content document. Hosted on Canva rather than the
  // WordPress uploads directory, so there is no cover render for it.
  {
    title: 'Illinois Case Study',
    file: 'https://canva.link/wsww1wai29mn9sr',
  },
];

/**
 * Headline statistics. Every figure and its attribution is drawn from the
 * content document — the organization argues from sourced numbers, so the
 * attribution is part of the data, not decoration.
 */
export const headlineStats = [
  {
    value: '$2B',
    label: 'in Texas credit activists want to eliminate',
    source: 'Texans For Financial Choice',
  },
  {
    value: '1 in 21,000',
    label: 'transactions draw a complaint — lowest in financial services',
    source: 'Texas Office of Consumer Credit Commissioner',
  },
  {
    value: '98%',
    label: 'of borrowers were satisfied with their most recent loan',
    source: 'Harris Interactive',
  },
  {
    value: '34%',
    label: 'of Texans are underbanked',
    source: 'FDIC',
  },
] as const;
