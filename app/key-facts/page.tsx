import type { Metadata } from 'next';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';

export const metadata: Metadata = {
  title: 'Key Facts',
  description:
    'Customer satisfaction, extensive regulation, state oversight, the consumer complaint process, disclosures, and economic competitiveness in Texas short-term lending.',
};

const toc = [
  { id: 'satisfaction', label: 'Customer Satisfaction' },
  { id: 'regulation', label: 'Extensive Regulation' },
  { id: 'oversight', label: 'State Oversight' },
  { id: 'complaints', label: 'Consumer Complaint Process' },
  { id: 'disclosures', label: 'Comprehensive Disclosures' },
  { id: 'competitiveness', label: 'Economic Competitiveness' },
  { id: 'opposition', label: 'About Opposition Groups' },
];

const satisfactionStats = [
  {
    value: '98%',
    label: 'were satisfied with their most recent loan experience',
  },
  {
    value: '93%',
    label: 'carefully weighed the risks and benefits before taking out a loan',
  },
  {
    value: '95%',
    label: 'value having the option to take out a short-term loan',
  },
];

const regulations = [
  'Texas Credit Service Organization Act (Texas Finance Code Chapter 393)',
  'Texas Deceptive Trade Practices Consumer Protection Act (Texas Business and Commerce Code Chapter 17)',
  'Texas Constitution, Article 16',
  'Texas Finance Code Chapter 302',
  'Texas Business and Commerce Code, Article 9',
  'Federal Truth in Lending Act',
  'Regulation Z (12 CFR part 226)',
  'Texas Debt Collection Practices Act (Texas Finance Code Chapter 392)',
  'Federal Debt Collection Practices Act',
  'Federal Equal Credit Opportunity Act',
  'Regulation B (12 CFR part 222)',
  'Federal Fair Credit Reporting Act',
  'Regulation V (12 CFR part 222)',
  'Federal Trade Commission Act',
  'Federal Gramm-Leach-Bliley privacy laws',
  'Federal Trade Commission Regulations (16 CFR parts 313 and 314)',
  'Service Members Civil Relief Act',
  'Electronic Signatures in Global and National Commerce Act (E-sign)',
  'Title X Dodd-Frank Wall Street Reform & Consumer Protection Act',
  'Check 21',
  'Fair and Accurate Credit Transactions Act (FACTA)',
  'Bank Secrecy Act, OFAC and US Patriot Act',
  'Electronic Funds Transfers Act',
  'Regulation E (12 CFR 205)',
];

const enforcementPowers = [
  'Order restitution to customers;',
  'Impose fines for repeated violations of laws and regulations;',
  'Issues cease and desist orders against individuals for improper practices;',
  'Revoke licenses to conduct business in the state.',
];

const complaintSteps = [
  'The agency must investigate by contacting the consumer and the Credit Access Business (CAB).',
  'The agency must then decide how to resolve the complaint — which could include an enforcement action against the CAB and restitution to the consumer.',
  'By law, written correspondence must be sent to both the consumer and the CAB to close a complaint file.',
];

const disclosureBefore = [
  'Clearly showing all of the costs of the loan;',
  'A comparison of the costs of other types of consumer credit;',
  'The amount of accumulated fees resulting from refinancing the loan;',
  'And information regarding how often other borrowers are repaying their loans.',
];

const disclosureContract = [
  'Prepayment penalties are prohibited;',
  'CABs must comply with the federal and state Fair Debt Collection Practices Acts;',
  'CABs cannot threaten criminal charges against a borrower for failure to repay a loan (absent fraud on the part of the borrower);',
  'And CABs must comply with all state and federal military lending laws.',
];

/** Shared heading treatment so all seven sections read as one series. */
function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
    >
      {children}
    </h2>
  );
}

export default function KeyFactsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Short-Term Loans"
        title="Key Facts"
        lede="Opponents of the Short-Term Lending Industry and media organizations have manufactured a crisis that does not exist. Below are key facts that the media or opponents won't tell you about."
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[16rem_1fr] lg:gap-20">
            {/* Sticky contents. Seven dense sections is too many to hold in
                your head — this keeps your place and makes the page skimmable
                without shortening the argument. */}
            <nav
              aria-labelledby="toc-heading"
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <h2
                id="toc-heading"
                className="text-eyebrow text-sky-700 uppercase"
              >
                On This Page
              </h2>
              <ol className="mt-4 space-y-1 border-l border-border">
                {toc.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px flex gap-3 border-l-2 border-transparent py-2 pl-4 text-sm leading-snug text-muted-foreground transition-colors hover:border-navy-300 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <span className="tabular text-xs text-sky-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="max-w-[68ch] space-y-20">
              <p className="text-lg leading-relaxed text-foreground">
                The reality is millions of Texans utilize short-term credit
                responsibly, are satisfied and value its product offerings, and
                carefully weigh the risks and benefits before they take out a
                loan. Furthermore, Credit Access Businesses (CABs) in Texas are
                heavily regulated and overseen by the Texas Office of Consumer
                Credit Commissioner (OCCC). The OCCC frequently examines all
                CABs for compliance and has a consumer complaint hotline
                featured prominently in all CABs.
              </p>

              <section>
                <SectionHeading id="satisfaction">
                  Customer Satisfaction
                </SectionHeading>
                <div className="mt-5 space-y-5 leading-relaxed text-foreground">
                  <p>
                    Our opponents are quick to amplify the outliers and ignore
                    the facts. Based on transaction data from the Texas Finance
                    Commission, the short-term lending complaint ratio was one
                    for every 21,000 transactions. This is the lowest rate in
                    the financial services industry.
                  </p>
                  <p>
                    Transactions are transparent and confidential. Signage and
                    disclosure forms are clearly posted and explained to
                    short-term lending customers. According to a poll performed
                    by Harris Interactive of short-term lending customers:
                  </p>
                </div>
                <ul className="mt-7 grid gap-4 sm:grid-cols-3">
                  {satisfactionStats.map((stat) => (
                    <li
                      key={stat.value}
                      className="rounded-lg border border-border bg-card p-5"
                    >
                      <p className="tabular font-heading text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {stat.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading id="regulation">
                  Extensive Regulation
                </SectionHeading>
                <p className="mt-5 leading-relaxed text-foreground">
                  Small loan transactions are highly regulated at both the
                  federal and state levels. Credit Access Businesses (CABs) must
                  comply with an extensive array of federal and state consumer
                  protection laws.
                </p>
                {/* Two columns and a count: 24 statutes in one column reads as
                    an undifferentiated wall; the number is the actual point. */}
                <p className="mt-7 text-eyebrow text-sky-700 uppercase">
                  {regulations.length} Federal &amp; State Laws
                </p>
                <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {regulations.map((law) => (
                    <li
                      key={law}
                      className="flex gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500"
                      />
                      {law}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading id="oversight">State Oversight</SectionHeading>
                <div className="mt-5 space-y-5 leading-relaxed text-foreground">
                  <p>
                    The Texas Office of Consumer Credit Commissioner (OCCC) is a
                    state agency that licenses, examines, and supervises 11
                    different types of companies offering financial products and
                    services to Texas consumers.
                  </p>
                  <p>
                    Every CAB is licensed by the OCCC. The OCCC performs onsite
                    examinations of loan files at all licensed companies on a
                    rotating, periodic basis. The OCCC has broad enforcement
                    powers to:
                  </p>
                </div>
                <ul className="mt-6 space-y-3 border-l-2 border-sky-200 pl-6">
                  {enforcementPowers.map((power) => (
                    <li key={power} className="leading-relaxed text-foreground">
                      {power}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading id="complaints">
                  Consumer Complaint Process
                </SectionHeading>
                <div className="mt-5 space-y-5 leading-relaxed text-foreground">
                  <p>
                    The Texas Office of Consumer Credit Commissioner (OCCC)
                    employs a full-time staff to operate a consumer complaint
                    800 number and a corresponding website for email complaints.
                  </p>
                  <p>
                    When a consumer files a complaint with the OCCC, the agency
                    is required to open a file on the complaint.
                  </p>
                </div>
                <ol className="mt-6 space-y-4">
                  {complaintSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="tabular mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-navy-700"
                      >
                        {i + 1}
                      </span>
                      <span className="leading-relaxed text-foreground">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 rounded-lg border border-border bg-surface-sunken p-5 leading-relaxed text-foreground">
                  Over the last seven years, the OCCC has tracked, investigated
                  and resolved CAB consumer complaints. Complaints against CABs
                  are the lowest among all businesses regulated by the OCCC —
                  one per every 21,000 transactions.
                </p>
              </section>

              <section>
                <SectionHeading id="disclosures">
                  Comprehensive Disclosures
                </SectionHeading>
                <div className="mt-5 space-y-5 leading-relaxed text-foreground">
                  <p>
                    Texas short-term loan disclosures are the most comprehensive
                    in the nation. Disclosures ensure that costs are
                    transparent.
                  </p>
                  <p>
                    Texas law requires all Credit Access Businesses (CABs) to
                    post a menu board in each office clearly showing the fees
                    and costs for every type of loan. The menu board must also
                    include instructions about how to file complaints with the
                    OCCC — the consumer complaint helpline and the OCCC
                    complaint website. Before performing services for a
                    customer, a CAB must provide a written disclosure:
                  </p>
                </div>
                <ul className="mt-6 space-y-3 border-l-2 border-sky-200 pl-6">
                  {disclosureBefore.map((item) => (
                    <li key={item} className="leading-relaxed text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 leading-relaxed text-foreground">
                  Every loan contract must include the following disclosures:
                </p>
                <ul className="mt-4 space-y-3 border-l-2 border-sky-200 pl-6">
                  {disclosureContract.map((item) => (
                    <li key={item} className="leading-relaxed text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading id="competitiveness">
                  Economic Competitiveness
                </SectionHeading>
                <div className="mt-5 space-y-5 leading-relaxed text-foreground">
                  <p>
                    The short-term credit industry provides a private-sector,
                    economically competitive solution for millions of Texas
                    households with a financial emergency.
                  </p>
                  <p>
                    Contrary to popular belief, Credit Access Businesses (CABs)
                    and short-term credit providers generally make about one
                    percent of revenues when you factor in default rates.
                  </p>
                  <p>
                    Financial institutions such as Wells Fargo, Citibank, and
                    American Express make almost 15-20 times the profits of
                    CABs. Onerous regulation and rate caps will dramatically
                    limit access to credit for millions of Texans.
                  </p>
                </div>
              </section>

              <section>
                <SectionHeading id="opposition">
                  About Opposition Groups
                </SectionHeading>
                <div className="mt-5 space-y-5 leading-relaxed text-foreground">
                  <p>
                    The PEW Charitable Trusts wears two masks: one as a
                    charitable trust and a second as a for-hire advocacy
                    organization.
                  </p>
                  <p>
                    PEW&apos;s &ldquo;research&rdquo; against short-term loans
                    was not created by the charitable trust but instead its paid
                    advocacy arm, which acted as a proponent for banks and
                    credit unions.
                  </p>
                  <p>
                    The Center for Responsible Lending describes itself as a
                    &ldquo;non-profit, non-partisan research and policy
                    organization&rdquo; working to eliminate predatory lending
                    practices. However, the CRL is a liberal advocacy arm of the
                    Self-Help Credit Union – a $500 million financial
                    institution with credit unions throughout the United States.
                  </p>
                  <p>
                    Individuals from the CRL have passed through a revolving
                    door between Self-Help Credit Union Network and federal
                    positions at the Consumer Financial Protection Bureau during
                    the Obama administration. Credit unions stand to gain the
                    most through higher overdraft fees and exclusive rights to
                    offer taxpayer subsidized loans with limited competition.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
