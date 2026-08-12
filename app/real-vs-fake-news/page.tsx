import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Check, Link2, X } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';

/**
 * HIDDEN PAGE — superseded by the 2026-08-11 content document.
 *
 * Kept reachable for anyone holding a direct link, but removed from the
 * navigation and the sitemap, and marked noindex so its older framing does not
 * compete in search with the current pages. To restore it, delete this
 * `robots` export and add the route back to `navLinks` in lib/site.ts.
 */
export const metadata: Metadata = {
  title: 'Real vs Fake News',
  description:
    'The most common claims made about the short-term credit industry in Texas, and the facts behind each.',
  robots: { index: false, follow: false },
};

type Pair = {
  id: string;
  fake: string;
  real: string;
  facts: ReactNode;
};

/**
 * Seven claim/counter-claim pairs. The legacy page rendered the last pair
 * twice — that was a duplication bug in its markup, so it appears once here
 * (see teardown.md anti-pattern #6).
 */
const pairs: Pair[] = [
  {
    id: 'reform-demand',
    fake: 'Millions of Texas short-term lending consumers are demanding short-term lending reform.',
    real: 'Short-term lending consumers value and appreciate the flexibility and choice the industry provides in case of financial emergency.',
    facts: (
      <p>
        The OCCC is required by law to track complaints and enforcement actions
        against Credit Access Businesses (CABs). Complaints against CABs are the
        lowest among all businesses regulated by the OCCC – one per every 21,000
        transactions. This is a manufactured crisis created by politicians,
        liberal activists, and the mainstream media intent on eliminating
        private sector credit options for underbanked Texans.
      </p>
    ),
  },
  {
    id: 'apr',
    fake: 'The average short-term loan costs are more than 400 percent.',
    real: 'These loans are designed to be less than one year and in many cases, less than six months.',
    facts: (
      <>
        <p>
          The reality is most private sector, short-term credit providers charge
          $15 to $20 per $100 borrowed. You would have to roll over and
          refinance your loan 26 times to reach an annual percentage rate of 400
          percent. In reality, 71% of single payment loans are paid when due or
          refinanced once, while 92% of multiple payment loans are paid when
          due. These are scare tactics designed to confuse the general public
          who have no need for these loans.
        </p>
        <p>
          The OCCC requires that a CAB provide a disclosure before and after the
          loan that outlines repayment statistics, costs for other forms of
          credit, and the OCCC consumer complaint hotline. According to the
          OCCC, a majority of short-term lending customers pay their loans off
          as scheduled.
        </p>
      </>
    ),
  },
  {
    id: 'debt-trap',
    fake: 'Short-term lenders attempt to "trap" people in a cycle of debt that they are unable to escape.',
    real: 'Short-term lending associations often have a series of best practices designed to work with people that are having difficulty paying off their loans.',
    facts: (
      <p>
        The OCCC tracks all short-term loans originated in Texas. According to
        the OCCC a majority of short-term lending customers pay off their loans
        as scheduled. It is a statistical outlier when a consumer rolls over
        their loans more than 6-7 times.
      </p>
    ),
  },
  {
    id: 'profits',
    fake: 'Short-term lenders are generating massive profits off people in financial emergencies.',
    real: 'Contrary to popular belief, Credit Access Businesses and short-term credit providers generally make about one percent of revenues when you factor in default rates.',
    facts: (
      <p>
        Public financial data shows the average Starbucks makes more than six
        times the profits of the average short-term lender. Wells Fargo,
        Citibank, Goldman Sachs, and PNC have net profit margins above 24%.
        Comparatively, the top three publicly traded short-term lending
        companies have single digit returns on investment.
      </p>
    ),
  },
  {
    id: 'eliminating-credit',
    fake: 'Eliminating private sector, short-term credit options will eliminate demand and save underbanked Texans millions of dollars in costs.',
    real: 'Plans like this not only limit access to credit, but they also drive up the cost of loans for those who already have few credit options.',
    facts: (
      <>
        <p>
          According to the Federal Reserve Bank of New York, when Georgia and
          North Carolina banned short-term loans, households bounced more checks
          (over 1000 percent APR), complained more to the Federal Trade
          Commission about lenders and debt collectors, and filed for Chapter
          Seven bankruptcy protection at a much higher rate than those states
          without restrictions.<sup>1</sup>
        </p>
        <p>
          After Austin and Dallas passed municipal ordinances, storefront
          lending decreased around 13%, but more expensive online short-term
          lending increased 19%.<sup>2</sup> According to the OCCC, municipal
          ordinances did nothing to reduce the demand or costs of credit
          throughout Texas.
        </p>
        <ol className="mt-4 space-y-1 border-t border-border pt-4 text-sm text-muted-foreground">
          <li>
            <sup>1</sup> &ldquo;Payday Holiday: How Households Fare after Payday
            Credit Bans&rdquo; – February 2008
          </li>
          <li>
            <sup>2</sup> Data provided by the Texas Office of Consumer Credit
            Commissioner
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'charitable-programs',
    fake: 'Activists claim that community and charitable loan programs can fill the consumer demand for short-term credit in Texas.',
    real: "Community and charitable lending programs, while encouraging and laudable ideas, can't come close to meeting consumer demand.",
    facts: (
      <>
        <p>
          The community loan center program concentrated in South and East Texas
          has struggled to loan $38 million in five years.
        </p>
        <p>
          The reality is socialist activists like Elizabeth Warren, Bernie
          Sanders, and Alexandria Ocasio-Cortez would prefer that the government
          provide tax payer subsidized short-term lending through the U.S.
          Postal Service rather than private sector credit options.
        </p>
      </>
    ),
  },
  {
    id: 'unregulated',
    fake: 'Short-term credit providers are largely unregulated and need to be reigned in.',
    real: 'Short-term credit providers in Texas are regulated by many levels of government.',
    facts: (
      <p>
        They are forced to comply with the Consumer Financial Protection
        Bureau&apos;s 1,300 pages of regulations. In order to obtain a CAB
        license, they must comply with the Texas OCCC regulatory requirements.
        Further caps, regulations, and burdensome requirements will force most
        short-term lenders to restrict credit access or simply shut down its
        operations.
      </p>
    ),
  },
];

export default function RealVsFakeNewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Setting The Record Straight"
        title="Real News Vs. Fake News"
        lede="Like many other complex issues facing Texas, liberal activists, organizations, and media outlets have grossly exaggerated claims, misrepresented facts, and repeatedly made false accusations about the short-term credit industry. Below are some of the most common claims made by liberal activists that are completely false or exaggerated."
      />

      <Section>
        <Container>
          {/* Base UI's Accordion.Header renders an <h3>, so without this the
              outline jumps h1 -> h3. Hidden rather than shown because the
              content document has no heading here to quote. */}
          <h2 id="claims-heading" className="sr-only">
            Common Claims And The Facts
          </h2>
          <ol aria-labelledby="claims-heading" className="space-y-14">
            {pairs.map((pair, index) => (
              <li key={pair.id} id={pair.id} className="scroll-mt-32">
                <div className="flex items-center gap-3">
                  <span className="tabular text-eyebrow text-sky-700 uppercase">
                    Claim {String(index + 1).padStart(2, '0')}
                  </span>
                  {/* Each pair is individually linkable — the useful thing to
                      share here is one rebuttal, not the whole page. */}
                  <a
                    href={`#${pair.id}`}
                    className="rounded-sm text-ink-400 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <Link2 className="size-4" aria-hidden="true" />
                    <span className="sr-only">
                      Link to claim {index + 1}: {pair.fake}
                    </span>
                  </a>
                </div>

                <div className="mt-4 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
                  <div className="bg-flag-50 p-6 lg:p-7">
                    <p className="flex items-center gap-2 text-eyebrow text-destructive uppercase">
                      <X
                        className="size-4"
                        aria-hidden="true"
                        strokeWidth={3}
                      />
                      Fake News
                    </p>
                    <p className="mt-3 text-lg leading-snug font-semibold text-pretty text-flag-900">
                      {pair.fake}
                    </p>
                  </div>
                  <div className="bg-verify-50 p-6 lg:p-7">
                    <p className="flex items-center gap-2 text-eyebrow text-positive uppercase">
                      <Check
                        className="size-4"
                        aria-hidden="true"
                        strokeWidth={3}
                      />
                      Real News
                    </p>
                    <p className="mt-3 text-lg leading-snug font-semibold text-pretty text-verify-900">
                      {pair.real}
                    </p>
                  </div>
                </div>

                <Accordion className="mt-3">
                  <AccordionItem
                    value={pair.id}
                    className="rounded-lg border border-border bg-surface-sunken px-5"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-primary">
                      Get The Facts
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="max-w-[70ch] space-y-4 pb-5 leading-relaxed text-foreground">
                        {pair.facts}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
