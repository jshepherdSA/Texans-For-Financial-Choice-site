import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Container, Eyebrow, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { Cite } from '@/components/cite';
import { SectionBackground } from '@/components/section-background';
import { sources } from '@/lib/sources';

export const metadata: Metadata = {
  title: 'The Consequences of Restricting Credit Access',
  description:
    'Eliminating access to short-term credit does not eliminate the financial emergency. What the alternatives cost, and what the research on rate caps shows.',
};

type Alternative = {
  id: string;
  title: string;
  rate: string;
  /**
   * The qualification a reader needs to understand the headline number
   * correctly. Rendered ALWAYS VISIBLE, never inside the dropdown: a figure
   * like 17,236% is misleading without the basis it was computed from, and
   * burying that a click away is the failure mode progressive disclosure is
   * most often criticised for.
   */
  note: string;
  body: ReactNode;
};

const alternatives: Alternative[] = [
  {
    id: 'overdrafts',
    title: 'Bank Overdrafts',
    rate: '17,236%',
    note: 'Annualized from one CFPB example — a $34 fee on a $24 overdraft repaid in three days. Not a rate every account is charged; some banks have reduced or removed overdraft fees.',
    body: (
      <>
        <p>
          The CFPB found a median overdraft fee of $34. Its published example
          involved a consumer overdrawing an account by $24 and repaying it
          three days later:
        </p>
        <p className="tabular rounded-md bg-surface-sunken px-4 py-3 font-medium text-primary">
          $34 ÷ $24 × 365 ÷ 3 = 17,236%
        </p>
        <p>
          The CFPB describes that as approximately 17,000% APR. This is the
          strongest independently sourced comparison available. Some banks have
          reduced or eliminated overdraft fees, however, so it should not be
          presented as applying to every account.
        </p>
        <p>
          <Cite source={sources.cfpbOverdraft} />
        </p>
      </>
    ),
  },
  {
    id: 'utilities',
    title: 'Utility Late And Shutoff Costs',
    rate: 'Up to 913%',
    note: 'Annualized equivalent of a $50 reconnection charge on a $200 bill resolved over 10 days. Charges vary by provider and approved tariff.',
    body: (
      <>
        <p>
          Texas utility charges vary by provider and approved tariff. A
          representative electric plan may impose a 5% late-payment penalty, a
          $25 disconnection fee, a $25–$50 reconnection fee, a returned-payment
          fee, and payment of the delinquent balance before service is restored.
        </p>
        <p className="font-medium text-primary">For a $200 utility bill:</p>
        <ul className="ml-1 space-y-2">
          {[
            'A 5% penalty equals $10.',
            'If paid 10 days late, that is approximately 183% APR-equivalent.',
            'A $25 reconnection charge resolved over 10 days equals approximately 456%.',
            'A $50 charge equals approximately 913%.',
          ].map((line) => (
            <li key={line} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500"
              />
              {line}
            </li>
          ))}
        </ul>
        <p>
          These calculations do not capture the practical cost of losing
          electricity, possible food spoilage, alternative lodging, missed work,
          or a new deposit requirement. Texas permits reconnection charges when
          they are included in the utility&apos;s approved tariff.
        </p>
        <p>
          <Cite source={sources.utilityReconnect} />
        </p>
      </>
    ),
  },
  {
    id: 'rent',
    title: 'Texas Rent Late Fees',
    rate: 'Up to 626%',
    note: 'An annualized cost comparison on $1,500 rent paid 7 days late — not a legally defined APR.',
    body: (
      <>
        <p>
          Under Texas law, a late fee is generally presumed reasonable when it
          does not exceed 12% of monthly rent for a property with four or fewer
          units, or 10% of monthly rent for a property with more than four
          units.
        </p>
        <p>
          A landlord may potentially justify a higher charge based on actual
          damages and costs. The fee generally cannot be charged until rent has
          remained unpaid for more than two full days.
        </p>
        <p className="font-medium text-primary">For $1,500 monthly rent:</p>
        <div className="overflow-x-auto">
          <table className="tabular w-full min-w-[26rem] border-collapse text-sm">
            <caption className="sr-only">
              Annualized cost equivalent of Texas rent late fees on $1,500
              monthly rent, by late fee percentage and days until paid
            </caption>
            <thead>
              <tr className="border-b border-border text-left">
                <th
                  scope="col"
                  className="py-2 pr-4 font-semibold text-primary"
                >
                  Late fee
                </th>
                <th
                  scope="col"
                  className="py-2 pr-4 font-semibold text-primary"
                >
                  Dollar cost
                </th>
                <th
                  scope="col"
                  className="py-2 pr-4 font-semibold text-primary"
                >
                  Paid 7 days late
                </th>
                <th
                  scope="col"
                  className="py-2 pr-4 font-semibold text-primary"
                >
                  Paid 14 days late
                </th>
                <th scope="col" className="py-2 font-semibold text-primary">
                  Paid 30 days late
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <th scope="row" className="py-2 pr-4 font-normal">
                  10%
                </th>
                <td className="py-2 pr-4">$150</td>
                <td className="py-2 pr-4">521%</td>
                <td className="py-2 pr-4">261%</td>
                <td className="py-2">122%</td>
              </tr>
              <tr>
                <th scope="row" className="py-2 pr-4 font-normal">
                  12%
                </th>
                <td className="py-2 pr-4">$180</td>
                <td className="py-2 pr-4">626%</td>
                <td className="py-2 pr-4">313%</td>
                <td className="py-2">146%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Again, these are annualized cost comparisons—not legally defined
          rent-loan APRs. They also exclude eviction filing costs, legal
          expenses, moving costs, or damage to the tenant&apos;s rental history.
        </p>
        <p>
          <Cite source={sources.sllRent} />
        </p>
      </>
    ),
  },
  {
    id: 'credit-cards',
    title: 'Credit Cards With Late Payment Fees',
    rate: 'Up to 4,171%',
    note: "Annualized equivalent of a $32 late fee on a missed $40 minimum payment resolved after seven days — not the card's ongoing interest rate, which averages about 22%.",
    body: (
      <>
        <p>
          The Federal Reserve&apos;s latest published figures show average
          credit-card rates of approximately 21% APR across credit-card
          accounts, and approximately 22%–22.3% APR among accounts actually
          assessed interest.
        </p>
        <p>
          A consumer with a $500 balance at 22.3% APR would incur approximately
          $9.29 in interest for one month, or $111.50 over one year assuming the
          balance remained constant.
        </p>
        <p>
          But a late payment can also produce a penalty fee, continued interest,
          loss of a grace period, and—in circumstances permitted by the
          agreement and federal rules—a higher penalty APR.
        </p>
        <p>
          A $32 fee resulting from a missed $40 minimum payment, resolved seven
          days later, represents an annualized cost equivalent of approximately
          4,171% relative to the immediate payment shortage.
        </p>
        <p>
          <Cite source={sources.fedG19} />
        </p>
      </>
    ),
  },
  {
    id: 'unlicensed',
    title: 'Unlicensed, Illegal And Overseas Lenders',
    rate: 'Over 1,000%',
    note: 'Documented in federal enforcement cases against illegal internet lending operations.',
    body: (
      <>
        <p>
          Federal enforcement cases involving illegal internet lending
          operations have documented interest rates exceeding 700%—and, in one
          major case, reaching more than 1,000%.
        </p>
        <p>
          Regulators also uncovered hidden loan costs, unauthorized withdrawals
          and corporate structures designed to evade state consumer-protection
          laws.
        </p>
      </>
    ),
  },
  {
    id: 'criminal',
    title: 'Cartel And Criminal Lending Activity',
    rate: 'Unregulated',
    note: 'Not a rate but an absence of one: no disclosures, no consumer protections, and in some documented cases extortion and violence.',
    body: (
      <>
        <p>
          When lawful credit disappears, the financial emergency remains. Some
          consumers may encounter unlicensed lenders or criminal lending
          networks that offer immediate cash without meaningful disclosures or
          consumer protections.
        </p>
        <p>
          International investigations have documented illegal lending schemes
          carrying annualized costs in the hundreds of percent, accompanied in
          some cases by extortion, threats and violence.
        </p>
      </>
    ),
  },
];

const substituteConditions = [
  'Provide money immediately.',
  'Serve consumers with poor or limited credit.',
  'Offer relatively small amounts.',
  'Cover unrestricted needs such as rent, utilities or repairs.',
  'Operate at sufficient scale.',
  'Generate enough revenue to cover underwriting, servicing, defaults and compliance.',
];

const caseStudies = [
  {
    state: 'Oregon',
    body: 'After Oregon imposed a restrictive rate cap, payday borrowing declined, but former borrowers shifted partly to bank overdrafts and late bill payments. The study also found evidence of deterioration in borrowers’ overall financial condition.',
    source: sources.oregonStudy,
  },
  {
    state: 'Georgia',
    body: 'A Federal Reserve Bank of New York study found that after Georgia prohibited payday lending, households bounced more checks, filed more Chapter 7 bankruptcies and submitted more complaints about lenders and debt collectors. North Carolina’s results were largely unchanged, demonstrating that effects are not identical everywhere.',
    source: sources.nyFedGeorgia,
  },
];

export default function ConsequencesPage() {
  return (
    <>
      <PageHero
        tone="sky"
        image="consequences-hero"
        eyebrow="The Consequences"
        title="Restricting Credit Access and Imposing Interest Rate Caps Hurts Hard Working Texans"
        lede="Eliminating access to short-term credit does not eliminate the financial emergency. It simply changes how—and whether—a family can respond. Some may find another source of money, but others may face overdraft fees, delayed bills, utility shutoffs, unregulated online lenders or no workable option at all."
      />

      {/* Alternatives */}
      <Section id="alternatives" aria-labelledby="alternatives-heading">
        <Container>
          <Eyebrow>The Alternatives Can Cost More</Eyebrow>
          <h2
            id="alternatives-heading"
            className="mt-4 max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
          >
            Annual Percentage Rate of Short-Term Lending Alternatives
          </h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-muted-foreground">
            Expand any option for the calculation and its source.
          </p>

          {/* Three layers, in order of how much a reader wants:
              1. the claim  — cost and headline rate, always visible
              2. the basis  — what the number was computed from, always visible
              3. the evidence — full calculation and source, one click away
              Layer 2 is deliberately outside the dropdown. */}
          <ul className="mt-10 space-y-4">
            {alternatives.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className="rounded-lg border border-border bg-card px-5 py-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-heading text-base font-semibold text-primary lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="tabular font-heading text-lg font-bold text-destructive lg:text-xl">
                    {item.rate}
                  </p>
                </div>
                <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
                <Accordion className="mt-3">
                  <AccordionItem value={item.id} className="border-0">
                    <AccordionTrigger className="py-2 text-left text-sm font-semibold text-sky-700 hover:text-primary">
                      See the evidence
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="max-w-[72ch] space-y-4 border-t border-border pt-4 pb-2 leading-relaxed text-foreground">
                        {item.body}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Rate caps */}
      <Section id="rate-caps" tone="sunken" aria-labelledby="caps-heading">
        <Container>
          <h2
            id="caps-heading"
            className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
          >
            Government Mandated Interest Rate Caps Put Credit Out of Reach for
            Millions of Households
          </h2>
          <div className="mt-6 max-w-[68ch] space-y-5 text-lg leading-relaxed text-foreground">
            <p>
              A recent 2026 Federal Reserve Bank of New York research found that
              state interest-rate caps caused loan balances to decline
              substantially among the riskiest borrowers. Those borrowers
              carried less debt, but researchers found{' '}
              <strong className="font-semibold">
                no corresponding improvement in their delinquency rates
              </strong>
              . The findings indicate that caps primarily rationed credit rather
              than converting higher-cost loans into lower-cost loans for the
              same consumers. <Cite source={sources.nyFedCaps} />
            </p>
            <p>
              Federal Reserve research also recognizes that higher-risk loans
              carry higher expected losses. When lenders cannot price for that
              risk, they may decide the loan cannot be offered sustainably.{' '}
              <Cite source={sources.fedLoanPricing} />
            </p>
          </div>

          <h3 className="text-eyebrow mt-14 text-sky-700 uppercase">
            Interest Rate Caps Cases
          </h3>
          <ul className="mt-6 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((item) => (
              <li
                key={item.state}
                className="rounded-lg border border-border bg-card p-7"
              >
                <h4 className="font-heading text-xl font-bold text-primary">
                  {item.state}
                </h4>
                <p className="mt-3 leading-relaxed text-foreground">
                  {item.body}
                </p>
                <p className="mt-4">
                  <Cite source={item.source} />
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-card p-6">
            <div className="flex-1">
              <h4 className="font-heading text-lg font-bold text-primary">
                Illinois Case Study
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Downloadable one-pager
              </p>
            </div>
            <Button
              render={
                <a
                  href={sources.illinoisOnePager.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              nativeButton={false}
              variant="outline"
            >
              <Download className="size-4" aria-hidden="true" />
              Download
              <span className="sr-only">
                {' '}
                the Illinois Case Study one-pager (opens in a new tab)
              </span>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Where will Texans turn */}
      <Section aria-labelledby="turn-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <h2
                id="turn-heading"
                className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
              >
                If Short-Term Credit Is Restricted or Eliminated, Where Will
                Texans Turn?
              </h2>
              <div className="mt-6 max-w-[65ch] space-y-5 leading-relaxed text-foreground">
                <p>
                  Before policymakers eliminate a regulated financial option,
                  they must answer a basic question: Where will families turn
                  instead?
                </p>
                <p>
                  Few alternatives satisfy all six conditions. Earned-wage
                  access, for example, can help an employed person who has
                  already earned sufficient wages, but it cannot necessarily
                  provide $800 for an emergency at the beginning of a pay
                  period. Buy Now Pay Later can finance a qualifying purchase
                  but cannot usually pay the electric bill. A bank loan may cost
                  less but be unavailable to the consumer who needs it.
                </p>
                <p>
                  Even credit-union Payday Alternative Loans are not purely
                  free-market replacements: they operate within a special
                  federal regulatory framework, require credit-union access and
                  are limited in amount and terms. Current federal rules permit
                  qualifying PALs to carry rates of up to 28%.{' '}
                  <Cite source={sources.ncuaPals} />
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-sunken p-7 lg:p-9">
              <h3 className="text-eyebrow text-sky-700 uppercase">
                A Workable Substitute Must Do All Of The Following
              </h3>
              <ol className="mt-6 space-y-4">
                {substituteConditions.map((condition, i) => (
                  <li key={condition} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="tabular mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-navy-700"
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed text-foreground">
                      {condition}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing argument */}
      <SectionBackground
        src="/images/military-family-together.jpg"
        alt=""
        overlay={80}
      >
        <section
          id="alternatives-compete"
          aria-labelledby="compete-heading"
          className="py-20 lg:py-24"
        >
          <Container>
            <h2
              id="compete-heading"
              className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-white lg:text-3xl"
            >
              Alternatives Should Compete With Credit, Not Eliminate It
            </h2>
            <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-sky-100">
              The market should be encouraged to develop more affordable
              choices—not prevented from serving consumers whose needs are
              difficult or expensive to meet. Bank loans, fintech products,
              employer advances and earned-wage access can provide valuable
              alternatives, but none currently serves every consumer or every
              emergency. Eliminating one form of regulated credit before viable
              replacements exist does not create a better option; it can leave
              families with no workable option at all.
            </p>
            <Button
              render={<Link href="/action" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="mt-9 tracking-wide"
            >
              TAKE ACTION
            </Button>
          </Container>
        </section>
      </SectionBackground>

      <CtaBand />
    </>
  );
}
