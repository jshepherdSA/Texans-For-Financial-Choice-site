/**
 * Press archive — 50 articles, newest first. Headlines and links are verbatim
 * from the legacy Press page (see content.md).
 *
 * Dates are stored as numeric year/month rather than the legacy "Sep / 2025"
 * strings so they can be formatted with `Intl.DateTimeFormat` and sorted
 * reliably. `month` is 1-indexed.
 */

export type PressItem = {
  year: number;
  month: number;
  title: string;
  href: string;
};

const BASE = 'https://texansforfinancialchoice.com';

export const pressItems: PressItem[] = [
  {
    year: 2025,
    month: 9,
    title:
      "Opinion: How payday loan restrictions can hurt the people they're meant to help",
    href: `${BASE}/opinion-how-payday-loan-restrictions-can-hurt-the-people-theyre-meant-to-help/`,
  },
  {
    year: 2025,
    month: 9,
    title: 'Alaska Rejects Price Controls on Interest Rates',
    href: `${BASE}/alaska-rejects-price-controls-on-interest-rates/`,
  },
  {
    year: 2025,
    month: 9,
    title: 'Opinion: Dunleavy was right to veto the interest rate cap bill',
    href: `${BASE}/opinion-dunleavy-was-right-to-veto-the-interest-rate-cap-bill/`,
  },
  {
    year: 2025,
    month: 9,
    title:
      "Why Isn't Financial Literacy Taught in Schools — and Who Benefits From That?",
    href: `${BASE}/why-isnt-financial-literacy-taught-in-schools-and-who-benefits-from-that/`,
  },
  {
    year: 2025,
    month: 9,
    title:
      'Credit Card Interest Cap: The Plan to Debank the Most Financially Vulnerable',
    href: `${BASE}/credit-card-interest-cap-the-plan-to-debank-the-most-financially-vulnerable/`,
  },
  {
    year: 2025,
    month: 3,
    title: 'New Data Shows Consumers Take Strategic Approach to Credit Usage',
    href: `${BASE}/new-data-shows-consumers-take-strategic-approach-to-credit-usage/`,
  },
  {
    year: 2024,
    month: 12,
    title:
      "Operation Choke Point 2.0: SC credit union chief tied to feds' effort to 'de-bank' certain industries",
    href: `${BASE}/operation-choke-point-2-0-sc-credit-union-chief-tied-to-feds-effort-to-de-bank-certain-industries/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'Elizabeth Warren Pushes Post Office Banking',
    href: `${BASE}/elizabeth-warren-pushes-post-office-banking/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'How Partisan Bureaucrats Weaponized Financial Regulation',
    href: `${BASE}/how-partisan-bureaucrats-weaponized-financial-regulation/`,
  },
  {
    year: 2024,
    month: 9,
    title: '70% of US Consumers Feel Stressed About Personal Finances',
    href: `${BASE}/70-of-us-consumers-feel-stressed-about-personal-finances/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'The Push for Public Banking in New York',
    href: `${BASE}/the-push-for-public-banking-in-new-york/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'Dear CFPB: Your Cure Is Worse Than the Disease',
    href: `${BASE}/dear-cfpb-your-cure-is-worse-than-the-disease/`,
  },
  {
    year: 2024,
    month: 9,
    title:
      'US agency says apps that let workers access paychecks before payday are providing loans',
    href: `${BASE}/us-agency-says-apps-that-let-workers-access-paychecks-before-payday-are-providing-loans/`,
  },
  {
    year: 2024,
    month: 9,
    title:
      'Many Californians lack access to financial services. A public banking option could help them',
    href: `${BASE}/many-californians-lack-access-to-financial-services-a-public-banking-option-could-help-them/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'Walmart Puts Its Own Stamp on BNPL',
    href: `${BASE}/walmart-puts-its-own-stamp-on-bnpl/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'Splitit Powers Banks Installment Plans at Checkout',
    href: `${BASE}/splitit-powers-banks-installment-plans-at-checkout/`,
  },
  {
    year: 2024,
    month: 9,
    title: 'Caps on Lending Rates Distort Consumer Credit Availability',
    href: `${BASE}/caps-on-lending-rates-distort-consumer-credit-availability/`,
  },
  {
    year: 2024,
    month: 9,
    title:
      "Group Affiliated with 'Dangerous' Operation Choke Point Now Lobbying to Regulate Fellow Lenders in the States",
    href: `${BASE}/group-affiliated-with-dangerous-operation-choke-point-now-lobbying-to-regulate-fellow-lenders-in-the-states/`,
  },
  {
    year: 2022,
    month: 1,
    title:
      'Study: Most Americans Do Not Have $1,000 Cash On Hand For Emergencies',
    href: `${BASE}/study-most-americans-do-not-have-1000-cash-on-hand-for-emergencies/`,
  },
  {
    year: 2021,
    month: 5,
    title: "Progressives' Plan To Destroy Payday Loans",
    href: `${BASE}/progressives-plan-to-destroy-payday-loans/`,
  },
  {
    year: 2021,
    month: 5,
    title: 'Is The Proposed Municipal Bank Of Los Angeles A Good Idea?',
    href: `${BASE}/is-the-proposed-municipal-bank-of-los-angeles-a-good-idea/`,
  },
  {
    year: 2021,
    month: 5,
    title: 'Paternalistic Liberals Want To End Online Lending',
    href: `${BASE}/paternalistic-liberals-want-to-end-online-lending/`,
  },
  {
    year: 2021,
    month: 4,
    title: "Public Bank Bill Puts State Where It Doesn't Belong",
    href: `${BASE}/public-bank-bill-puts-state-where-it-doesnt-belong/`,
  },
  {
    year: 2021,
    month: 3,
    title: 'A Few Small Banks Have Become Overdraft Giants',
    href: `${BASE}/a-few-small-banks-have-become-overdraft-giants/`,
  },
  {
    year: 2021,
    month: 2,
    title: 'High-Interest Loans Have A Purpose',
    href: `${BASE}/high-interest-loans-have-a-purpose/`,
  },
  {
    year: 2020,
    month: 10,
    title: "Proposed Cap On Lending Would Hurt Nebraska's Low-Income Families",
    href: `${BASE}/proposed-cap-on-lending-would-hurt-nebraskas-low-income-families/`,
  },
  {
    year: 2020,
    month: 10,
    title: 'The Real Cost Of Overdraft Fees',
    href: `${BASE}/the-real-cost-of-overdraft-fees/`,
  },
  {
    year: 2020,
    month: 9,
    title: "Payday Loans Aren't A Problem, Student Loans Are",
    href: `${BASE}/payday-loans-arent-a-problem-student-loans-are/`,
  },
  {
    year: 2020,
    month: 9,
    title:
      "Opinion: Don't Restrict Payday Loans People Need To Survive Pandemic",
    href: `${BASE}/opinion-dont-restrict-payday-loans-people-need-to-survive-pandemic/`,
  },
  {
    year: 2020,
    month: 8,
    title:
      'The Washington Post Plays Fast and Loose In Coverage Of CFPB Performance During Pandemic',
    href: `${BASE}/the-washington-post-plays-fast-and-loose-in-coverage-of-cfpb-performance-during-pandemic/`,
  },
  {
    year: 2020,
    month: 7,
    title:
      "CFPB's (Correct) Decision To Rescind Payday Limits Comes At The Right Time",
    href: `${BASE}/cfpbs-correct-decision-to-rescind-payday-limits-comes-at-the-right-time/`,
  },
  {
    year: 2020,
    month: 7,
    title:
      'Consumers Win As Consumer Financial Protection Bureau Finalizes Payday Loan Rule',
    href: `${BASE}/consumers-win-as-consumer-financial-protection-bureau-finalizes-payday-loan-rule/`,
  },
  {
    year: 2020,
    month: 6,
    title:
      "Virginia's Biggest Payday Loan Firm Is Leaving State As Crackdown Looms",
    href: `${BASE}/virginias-biggest-payday-loan-firm-is-leaving-state-as-crackdown-looms/`,
  },
  {
    year: 2020,
    month: 3,
    title: 'Short-Term Loans Are Lifelines For Many Americans',
    href: `${BASE}/short-term-loans-are-lifelines-for-many-americans/`,
  },
  {
    year: 2020,
    month: 3,
    title:
      'Liberal Nonprofit Recruits CFPB Official Who Gave it Special Access',
    href: `${BASE}/liberal-nonprofit-recruits-cfpb-official-who-gave-it-special-access/`,
  },
  {
    year: 2020,
    month: 3,
    title: 'Bloomberg, Sanders and Warren Want To Use Post Offices As Banks',
    href: `${BASE}/bloomberg-sanders-and-warren-want-to-use-post-offices-as-banks/`,
  },
  {
    year: 2020,
    month: 2,
    title:
      'Congressional Leaders Want To Deny Access To Cash For Struggling Americans',
    href: `${BASE}/congressional-leaders-want-to-deny-access-to-cash-for-struggling-americans/`,
  },
  {
    year: 2020,
    month: 2,
    title: 'How Each State Is Shaping The Personal Finance IQ Of Its Students',
    href: `${BASE}/how-each-state-is-shaping-the-personal-finance-iq-of-its-students/`,
  },
  {
    year: 2020,
    month: 2,
    title: 'Restricting Short-Term Loans In Virginia Will Hurt Consumers',
    href: `${BASE}/restricting-short-term-loans-in-virginia-will-hurt-consumers/`,
  },
  {
    year: 2020,
    month: 2,
    title: "Let's Not Hinder Consumers' Access To Credit",
    href: `${BASE}/lets-not-hinder-consumers-access-to-credit/`,
  },
  {
    year: 2020,
    month: 1,
    title: "Has Ohio's Law Banished Unscrupulous Payday Lending? Kind of.",
    href: `${BASE}/has-ohios-law-banished-unscrupulous-payday-lending-kind-of/`,
  },
  {
    year: 2019,
    month: 12,
    title:
      "It's Hard To Manage Your Credit When You've Never Heard Of 'Interest'",
    href: `${BASE}/its-hard-to-manage-your-credit-when-youve-never-heard-of-interest/`,
  },
  {
    year: 2019,
    month: 9,
    title:
      'A National Interest Rate Cap Would Harm Consumers In The Name Of Consumers',
    href: `${BASE}/a-national-interest-rate-cap-would-harm-consumers-in-the-name-of-consumers/`,
  },
  {
    year: 2019,
    month: 6,
    title: 'If You Hate Payday Loans, Come Up With A Better System',
    href: `${BASE}/if-you-hate-payday-loans-come-up-with-a-better-system/`,
  },
  {
    year: 2019,
    month: 5,
    title: 'Bernie Sanders and AOC Basically Want To Ban Credit Cards',
    href: `${BASE}/bernie-sanders-and-aoc-basically-want-to-ban-credit-cards/`,
  },
  {
    year: 2019,
    month: 5,
    title: "40% Of Americans Can't Cover A $400 Emergency Expense",
    href: `${BASE}/40-of-americans-cant-cover-a-400-emergency-expense/`,
  },
  {
    year: 2019,
    month: 5,
    title:
      "Loan Sharks? Interest Rate Cap Would Hurt Those It's Designed To Help",
    href: `${BASE}/loan-sharks-interest-rate-cap-would-hurt-those-its-designed-to-help/`,
  },
  {
    year: 2019,
    month: 5,
    title: 'Extra Credit',
    href: `${BASE}/extra-credit/`,
  },
  {
    year: 2019,
    month: 5,
    title:
      "AOC and Sanders' Credit Card Interest Rate Cap Would Be Disasterous",
    href: `${BASE}/aoc-and-sanders-credit-card-interest-rate-cap-would-be-disasterous/`,
  },
  {
    year: 2019,
    month: 3,
    title: 'The Unintended Consequences Of Interest Rate Caps',
    href: `${BASE}/the-unintended-consequences-of-interest-rate-caps/`,
  },
];

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "Sep 2025" — locale-formatted rather than a hardcoded date string. */
export function formatPressDate(item: PressItem): string {
  return monthYear.format(Date.UTC(item.year, item.month - 1, 1));
}

/** Groups press items by year, newest first, for the archive listing. */
export function pressByYear(): { year: number; items: PressItem[] }[] {
  const map = new Map<number, PressItem[]>();
  for (const item of pressItems) {
    const list = map.get(item.year);
    if (list) list.push(item);
    else map.set(item.year, [item]);
  }
  return [...map.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}
