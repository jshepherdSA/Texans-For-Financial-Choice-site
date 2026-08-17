import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { Cite } from '@/components/cite';
import { sources } from '@/lib/sources';

export const metadata: Metadata = {
  title: 'Preserve Financial Choice',
  description:
    'Texas short-term lending is not an unregulated marketplace. Licensed Credit Access Businesses answer to the OCCC, with additional federal supervision from the CFPB.',
};

type Protection = {
  id: string;
  title: string;
  /** Short explanation, always visible — the reader who won't expand still
      gets the substance, not just a heading. */
  summary: string;
  body: ReactNode;
};

/**
 * The document's seven "drop down boxes".
 *
 * NOTE: the source document carries an internal drafting note under the
 * cancellation-right box — that the right applies to the credit-services
 * contract and must not be presented as a right to keep loan proceeds without
 * repayment. That is guidance to the writer, not website copy, so it is not
 * rendered. The wording below is scoped to the credit-services contract
 * accordingly.
 */
const protections: Protection[] = [
  {
    id: 'licensed',
    title: 'Every CAB must be licensed',
    summary:
      'A state licence is required before any CAB activity, and it can be revoked.',
    body: (
      <>
        <p>
          Credit access businesses are classified as a licensed industry—not
          merely a registered one. The OCCC explains that licensed industries
          are subject to &ldquo;routine and periodic examination of records,
          processes, and compliance with statute and regulatory controls.&rdquo;
          Each location operates under a state licensing structure, and a
          business must receive approval before conducting CAB activity.
        </p>
        <p>
          <Cite source={sources.occcIndustries} />
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: 'Consumers receive a standardized cost disclosure',
    summary:
      'Nine specific items must be shown before you agree, including the APR and total amount due.',
    body: (
      <>
        <p>
          Texas requires product-specific disclosures for single-payment payday
          loans, installment payday loans, single-payment title loans and
          installment title loans. The forms include:
        </p>
        <ul className="ml-1 space-y-2">
          {[
            'The amount provided to the consumer',
            'CAB fees and lender interest',
            'The total amount due',
            'The applicable APR',
            'Potential renewal or refinancing costs',
            'A comparison with other forms of credit',
            'Typical repayment information',
            'Questions consumers should consider before borrowing',
            'OCCC contact and complaint information',
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
          The OCCC periodically updates the comparison and repayment information
          contained in these disclosures.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Cite source={sources.occcDisclosure} />
          <Cite source={sources.tac835004} />
        </p>
      </>
    ),
  },
  {
    id: 'fees',
    title: 'Fees must be disclosed before they are charged',
    summary: 'A fee that was not disclosed cannot be charged.',
    body: (
      <>
        <p>
          Texas Finance Code §393.602 provides that a CAB fee &ldquo;may not be
          charged unless it is disclosed.&rdquo; State rules also require the
          in-store fee schedule and notices to be displayed conspicuously and
          retained for OCCC inspection.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <Cite source={sources.fin393602} />
          <Cite source={sources.tac835004} />
        </p>
      </>
    ),
  },
  {
    id: 'cancellation',
    title: 'Consumers have a cancellation right',
    summary:
      'Three days to cancel the credit-services contract, without penalty.',
    body: (
      <>
        <p>
          The written contract must notify the consumer that the credit-services
          contract may be cancelled without penalty or obligation within three
          days after it is signed.
        </p>
        <p>
          <Cite source={sources.fin393202} />
        </p>
      </>
    ),
  },
  {
    id: 'examinations',
    title: 'Providers are subject to regulatory examinations',
    summary:
      'The OCCC can pull the actual transaction files, not just the paperwork.',
    body: (
      <>
        <p>
          The OCCC can examine transaction files, contracts, disclosures,
          applications, lender agreements, privacy notices and other records.
          The regulator&apos;s examination rules also allow it to obtain witness
          and records declarations when reviewing compliance.
        </p>
        <p>
          <Cite source={sources.tac836007} />
        </p>
      </>
    ),
  },
  {
    id: 'reporting',
    title: 'Market activity is reported and published',
    summary:
      'Four quarterly reports and an annual report, published as public data.',
    body: (
      <>
        <p>
          Every licensee must submit four quarterly reports and an annual
          report. The OCCC publishes aggregated statewide and metropolitan-area
          data, including transaction volume, fees, refinancing activity and
          repayment outcomes. Its most recent complete annual CAB report covers
          calendar year 2025 and was published March 24, 2026.
        </p>
        <p>
          <Cite source={sources.tac835003} />
        </p>
      </>
    ),
  },
  {
    id: 'enforcement',
    title: 'The OCCC has real enforcement authority',
    summary:
      'Penalties, restitution, suspension and revocation — all publicly reported.',
    body: (
      <>
        <p>
          The OCCC publicly reports enforcement actions involving administrative
          penalties, injunctions, restitution, license suspension and license
          revocation. Its current enforcement database includes CAB actions
          resolved as recently as July 2026.
        </p>
        <p>
          <Cite source={sources.occcEnforcement} />
        </p>
      </>
    ),
  },
];

const cfpbPowers = [
  'Reviewing advertising, disclosures, loan servicing and payment-collection practices.',
  'Examining whether consumers receive accurate information about costs and repayment obligations.',
  'Enforcing federal prohibitions against unfair, deceptive or abusive acts or practices.',
  'Monitoring compliance with federal fair-lending, electronic-payment and credit-disclosure laws.',
  'Investigating consumer complaints and potential patterns of consumer harm.',
  'Seeking restitution, civil penalties, injunctions and other remedies when violations occur.',
];

export default function PreserveFinancialChoicePage() {
  return (
    <>
      <PageHero
        eyebrow="Preserve Financial Choice"
        title="Protecting Texans Means Preserving Safe, Regulated Credit Options"
        lede="Texas short-term lending is not an unregulated marketplace. Licensed Credit Access Businesses (CABS) answer to the Texas Office of Consumer Credit Commissioner, while the Consumer Financial Protection Bureau provides an additional federal layer of supervision. Consumers have access to both state and federal regulators when they have a question or complaint."
        splitPhoto={{
          src: '/images/family-finances-kitchen.jpg',
          alt: 'Two parents and their son at a kitchen counter working through bills with a calculator and a laptop.',
          side: 'left',
        }}
      />

      <Section aria-labelledby="state-heading">
        <Container>
          <h2
            id="state-heading"
            className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
          >
            State Oversight In Texas
          </h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-muted-foreground">
            Seven requirements that licensed providers operate under. Each opens
            onto the underlying statute or rule.
          </p>

          <Accordion multiple className="mt-10 max-w-4xl space-y-3">
            {protections.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                id={item.id}
                className="rounded-lg border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-primary lg:text-lg">
                  <span className="flex flex-col gap-1 pr-3">
                    {item.title}
                    <span className="text-sm font-normal text-muted-foreground">
                      {item.summary}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="max-w-[70ch] space-y-4 pb-5 leading-relaxed text-foreground">
                    {item.body}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Section>

      {/* Dark band so the federal layer reads as a distinct tier of oversight
          rather than more of the same page. */}
      <section
        aria-labelledby="federal-heading"
        className="bg-surface-inverse py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div>
              <h2
                id="federal-heading"
                className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-white lg:text-3xl"
              >
                Federal Oversight Through The Consumer Financial Protection
                Bureau
              </h2>
              <p className="mt-5 leading-relaxed text-sky-100">
                At the federal level, the Consumer Financial Protection Bureau
                (CFPB) has authority to supervise payday lenders of all sizes
                for compliance with federal consumer-financial laws. The
                CFPB&apos;s role is to supervise covered companies, examine
                their practices, investigate consumer complaints, enforce
                federal law and adopt regulations governing consumer-financial
                products.
              </p>
            </div>
            <div>
              <h3 className="text-eyebrow text-sky-300 uppercase">
                This Includes
              </h3>
              <ul className="mt-5 space-y-4 border-l-2 border-sky-200/40 pl-6">
                {cfpbPowers.map((power) => (
                  <li key={power} className="leading-relaxed text-sky-100">
                    {power}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
