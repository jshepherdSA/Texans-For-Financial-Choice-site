import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Container, Eyebrow, Section } from '@/components/layout-primitives';
import { Cite } from '@/components/cite';
import { IconArray, SharePie } from '@/components/figures';
import { PlaceholderImage } from '@/components/placeholder-image';
import { SubscribeForm } from '@/components/subscribe-form';
import { homeFootnotes, sources } from '@/lib/sources';

/**
 * Homepage. Copy is verbatim from the 2026-08-11 content document.
 *
 * The document's Sections 2 and 3 restate the opening of the Preserve
 * Financial Choice and Consequences pages. That repetition is intentional in
 * the source: the homepage summarises and hands off via its "Learn more" lines.
 * Here the summaries are collapsed into dropdowns so the page stays short and
 * the detail pages carry the full argument.
 */

const protections = [
  {
    id: 'licensed',
    title: 'Every credit access business must be licensed',
    body: 'Credit Access Businesses (CABs) must obtain and maintain a state license and operate under the continuing supervision of the OCCC.',
    source: sources.occcIndustries,
  },
  {
    id: 'disclosure',
    title: 'Consumers receive a standardized cost disclosure',
    body: 'Texas consumers are shown what the transaction costs before they agree to it, including the fees, interest, APR and total repayment obligation.',
    source: sources.occcDisclosure,
  },
  {
    id: 'fees',
    title: 'Fees must be disclosed before they are charged',
    body: 'Transparency is not optional under Texas law. A licensed provider cannot charge a fee that has not been disclosed.',
  },
  {
    id: 'cancel',
    title: 'Consumers have a cancellation right',
    body: 'Texas law gives consumers a three-day right to cancel the credit-services contract without a cancellation penalty.',
  },
  {
    id: 'exams',
    title: 'Providers are subject to regulatory examinations',
    body: 'State oversight is more than paperwork. The OCCC can examine the underlying transaction files and determine whether required disclosures and consumer protections were followed.',
  },
  {
    id: 'reporting',
    title: 'Market activity is reported and published',
    body: 'Texas requires licensed providers to report their activity throughout the year. That information is aggregated and published, giving regulators, lawmakers and the public visibility into the market.',
  },
  {
    id: 'occc',
    title: 'The Texas Office of Consumer Credit Commissioner (OCCC)',
    body: 'These requirements have consequences. The OCCC can penalize violations, order corrective action and prevent a company from continuing to operate.',
  },
];

const consequences = [
  {
    title: 'The Alternatives Can Cost More',
    body: 'Overdraft charges, utility reconnection fees, rent penalties and credit-card late fees can carry annualized costs reaching hundreds or even thousands of percent—and impose new costs without providing the money needed to solve the original emergency.',
    cta: 'Compare the Costs',
    href: '/consequences#alternatives',
  },
  {
    title: 'Rate Caps Can Put Credit Out of Reach',
    body: 'Interest-rate caps may reduce costs for those who still qualify, but they can also make small-dollar loans economically unworkable. Research shows that restrictive caps can result in fewer loans, tighter approval standards and reduced access for consumers with imperfect credit.',
    cta: 'See What the Research Shows',
    href: '/consequences#rate-caps',
  },
  {
    title: 'Where Will Texans Turn?',
    body: 'Bank loans, fintech products, employer advances and earned-wage access can provide valuable alternatives—but none serves every consumer or every emergency. Before eliminating a regulated option, policymakers must determine whether a viable replacement is available at the speed and scale Texans need.',
    cta: 'Read the Analysis',
    href: '/consequences#alternatives-compete',
  },
];

/** The document marks these "Graphic 1 / Graphic 2" without supplying artwork.
    The number and label are live type — legible at any width, selectable, and
    machine-readable — with a figure above restating the ratio visually. */
function Figure({
  stat,
  body,
  footnote,
  children,
}: {
  stat: string;
  body: string;
  footnote: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-t-2 border-navy-700 pt-5">
      {children ? <div className="mb-5">{children}</div> : null}
      <p className="tabular font-heading text-4xl leading-none font-bold text-primary lg:text-5xl">
        {stat}
      </p>
      <p className="mt-3 leading-relaxed text-foreground">
        {body}
        <a
          href={`#fn-${footnote}`}
          className="ml-0.5 rounded-sm align-super text-xs text-sky-700 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {footnote}
          <span className="sr-only"> — see footnote {footnote}</span>
        </a>
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — text beside artwork */}
      <section className="border-b border-border bg-background">
        <Container>
          <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
            <div>
              <Eyebrow>Texans For Financial Choice</Eyebrow>
              <h1 className="mt-4 max-w-[44ch] font-heading text-3xl leading-[1.12] font-bold text-primary sm:text-4xl lg:text-5xl">
                Hard Working Texas Families Deserve Access to Safe, Transparent
                and Regulated Financial Choices—Not Fewer Options.
              </h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-foreground">
                Texas families need responsible credit and transparent,
                regulated choices. Smart policies should protect consumers from
                harmful practices without eliminating lawful options or pushing
                them toward riskier alternatives.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  render={<Link href="/action" />}
                  nativeButton={false}
                  size="lg"
                  className="tracking-wide"
                >
                  TAKE ACTION
                </Button>
                <Button
                  render={<Link href="/preserve-financial-choice" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                >
                  How Texas regulates credit
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <PlaceholderImage
              seed="home-hero-texas-families"
              ratio="5/4"
              label="Hero: Texas family at home"
              className="rounded-lg border border-border"
            />
          </div>
        </Container>
      </section>

      {/* The Texas Reality */}
      <Section tone="sunken" aria-labelledby="reality-heading">
        <Container>
          <h2
            id="reality-heading"
            className="max-w-[44ch] font-heading text-3xl leading-tight font-bold text-primary lg:text-4xl"
          >
            The Texas Reality: Unexpected Expenses Can&apos;t Wait, and Not
            Every Family Has the Same Financial Choices.
          </h2>
          <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-foreground">
            Working Texas families are being squeezed from every
            direction—housing, insurance, health care, groceries, child care,
            transportation and utilities. After paying for the essentials, many
            have little left to save. When an unavoidable expense occurs,
            families need access to safe, transparent and regulated financial
            options that can help them manage the emergency on their own terms.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="grid gap-8 sm:grid-cols-2">
              <Figure
                stat="4 in 10"
                body="Texas households struggle to cover basic expenses"
                footnote={1}
              >
                <IconArray total={10} filled={4} perRow={5} glyph="house" />
              </Figure>
              <Figure
                stat="1 in 3"
                body="American workers say they are living paycheck to paycheck"
                footnote={2}
              >
                <IconArray total={3} filled={1} perRow={3} glyph="person" />
              </Figure>
            </div>
            <PlaceholderImage
              seed="texas-reality-working-family"
              ratio="16/10"
              label="Working family, everyday costs"
              className="rounded-lg border border-border"
            />
          </div>

          <Link
            href="/economic-reality"
            className="mt-10 inline-flex items-baseline gap-2 rounded-sm font-semibold text-sky-700 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Learn more about the economic reality for many Texans
            <ArrowRight
              className="size-4 shrink-0 self-center"
              aria-hidden="true"
            />
          </Link>

          <div className="mt-16 border-t border-border pt-12">
            <h3 className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary">
              Traditional credit is unavailable or insufficient for many
              families
            </h3>
            <p className="mt-5 max-w-[68ch] text-lg leading-relaxed text-foreground">
              An emergency does not wait for a family&apos;s credit score to
              improve—and a low score does not eliminate the family&apos;s need
              to repair a car, pay a utility bill or obtain medical care. Nearly
              2.1 million Texas households don&apos;t have access to traditional
              credit products.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
              <Figure
                stat="1 in 3"
                body="Americans who applied for traditional credit in 2025 were either denied or approved for less than they requested"
                footnote={3}
              >
                <IconArray total={3} filled={1} perRow={3} glyph="person" />
              </Figure>
              <Figure
                stat="18.5%"
                body="of Texas households are underbanked, meaning they don’t have access to traditional credit products"
                footnote={4}
              >
                <SharePie percent={18.5} />
              </Figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* Regulated options — collapsed for brevity */}
      <Section aria-labelledby="protect-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                id="protect-heading"
                className="max-w-[44ch] font-heading text-3xl leading-tight font-bold text-primary lg:text-4xl"
              >
                Protecting Texans Means Preserving Safe, Regulated Credit
                Options
              </h2>
              <p className="mt-6 max-w-[62ch] leading-relaxed text-foreground">
                Texas short-term lending is not an unregulated marketplace.
                Licensed Credit Access Businesses (CABS) answer to the Texas
                Office of Consumer Credit Commissioner, while the Consumer
                Financial Protection Bureau provides an additional federal layer
                of supervision.
              </p>
              <Link
                href="/preserve-financial-choice"
                className="mt-7 inline-flex items-baseline gap-2 rounded-sm font-semibold text-sky-700 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                Learn more about regulatory oversight
                <ArrowRight
                  className="size-4 shrink-0 self-center"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <Accordion className="space-y-2.5">
              {protections.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-lg border border-border bg-card px-5"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-primary">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="max-w-[65ch] space-y-3 pb-5 leading-relaxed text-foreground">
                      <p>{item.body}</p>
                      {item.source ? (
                        <p>
                          <Cite source={item.source} />
                        </p>
                      ) : null}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* Consequences — dark band for contrast */}
      <section
        aria-labelledby="consequences-heading"
        className="bg-surface-inverse py-20 lg:py-24"
      >
        <Container>
          <h2
            id="consequences-heading"
            className="max-w-[44ch] font-heading text-3xl leading-tight font-bold text-white lg:text-4xl"
          >
            Financial Emergencies Do Not Disappear: The Consequences of
            Restricting Access
          </h2>
          <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-sky-100">
            When a car breaks down, a utility bill is due or rent is late,
            families need workable options. Eliminating regulated short-term
            credit does not eliminate that need. It can leave hardworking Texans
            facing costly fees, delayed bills, unlicensed lenders—or no
            available option at all.
          </p>

          <ol className="mt-12 grid gap-8 lg:grid-cols-3">
            {consequences.map((item, i) => (
              <li
                key={item.title}
                className="flex flex-col border-t-2 border-sky-300 pt-6"
              >
                <span
                  aria-hidden="true"
                  className="tabular font-heading text-sm font-bold text-sky-300"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-heading text-xl leading-snug font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-sky-100">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-sky-300 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:outline-none"
                >
                  {item.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Subscribe */}
      <section
        aria-labelledby="subscribe-heading"
        className="border-b border-sky-200 bg-sky-50 py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Stay Informed &amp; In-The-Know</Eyebrow>
              <h2
                id="subscribe-heading"
                className="mt-4 font-heading text-3xl leading-tight font-bold text-primary lg:text-4xl"
              >
                Subscribe Now
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-foreground">
                Protect your right to make your own financial decisions. Sign up
                to our newsletter now and make sure your voice is heard in
                Austin. You&apos;ll receive the latest news and updates directly
                to your inbox.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
              <SubscribeForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Footnotes */}
      <section
        aria-labelledby="footnotes-heading"
        className="bg-surface-sunken py-14"
      >
        <Container>
          <h2
            id="footnotes-heading"
            className="text-eyebrow text-sky-700 uppercase"
          >
            Sources
          </h2>
          <ol className="mt-5 space-y-4">
            {homeFootnotes.map((fn) => (
              <li
                key={fn.n}
                id={`fn-${fn.n}`}
                className="flex max-w-[85ch] gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="tabular shrink-0 font-semibold text-sky-700">
                  {fn.n}.
                </span>
                <span>
                  {fn.text} <Cite source={fn.source} />
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
