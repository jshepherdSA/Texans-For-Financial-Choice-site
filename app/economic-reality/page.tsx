import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { Cite, SourceNote } from '@/components/cite';
import { PlaceholderImage } from '@/components/placeholder-image';
import { sources } from '@/lib/sources';

export const metadata: Metadata = {
  title: 'The Economic Reality For Working Texans',
  description:
    'Texas is economically strong, but too many working families remain financially fragile. Rising costs leave little room to save, and many lack access to traditional credit when emergencies strike.',
};

const fedFindings = [
  {
    stat: '37%',
    text: 'of adults could not cover a $400 emergency entirely with cash or its equivalent in 2024.',
  },
  {
    stat: '55%',
    text: 'of adults had enough emergency savings to cover three months of expenses.',
  },
  {
    stat: '55%',
    text: 'of parents living with children under 18 could cover a $400 emergency with cash or its equivalent in 2025 — parents were particularly vulnerable.',
  },
];

const pressures = [
  {
    id: 'housing',
    title: 'Housing has become less affordable',
    body: 'Texas home prices rose approximately 40% between 2019 and 2023. In some smaller metropolitan areas, increases were substantially higher. Higher prices, mortgage rates, property taxes and maintenance costs all make it harder for families to purchase—and remain in—a home.',
    source: sources.comptrollerHousing,
  },
  {
    id: 'insurance',
    title: 'Homeowners insurance is consuming more of the family budget',
    body: 'For homeowners, the financial emergency is not always the storm—it may be the deductible and repair bills that come afterward. The average Texas homeowners insurance premium increased 33% between 2015 and 2022, including increases of 6.9% in 2021 and 11.8% in 2022. Rising deductibles also mean that families may need thousands of dollars immediately after a storm or household loss.',
    source: sources.comptrollerHousingReport,
  },
  {
    id: 'uninsured',
    title: 'Texas families face unusually high health-care exposure',
    body: 'A medical emergency should not become a financial emergency, but in Texas it does. According to the US Census Bureau, Texas had the highest uninsured rate in 2024.',
  },
  {
    id: 'medical-costs',
    title: 'Even insured families are struggling with medical costs',
    body: 'Having insurance does not necessarily mean a family can afford to use it. A 2026 Texas survey found that 63% of Texans had delayed or skipped care because of cost.',
    source: sources.texas2036,
  },
  {
    id: 'transport',
    title: 'Transportation is an unavoidable expense',
    body: 'In much of Texas, a broken car is not an inconvenience—it can mean a lost paycheck, lost job, missed medical appointment, or missed school. Texas’s size and development patterns make a dependable vehicle essential for many households.',
  },
  {
    id: 'food',
    title: 'Food insecurity remains elevated',
    body: 'When groceries consume more of every paycheck, families have less money to save—and less protection when something goes wrong.',
  },
  {
    id: 'childcare',
    title: 'Child care can rival housing costs',
    body: 'For working parents, child care is not discretionary; it is what allows them to remain employed. Infant care, after-school care and summer care can consume a large portion of take-home pay, while many Texas communities also lack enough affordable child-care capacity.',
  },
];

export default function EconomicRealityPage() {
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="The Economic Reality"
        title="The Economic Reality For Working Texans"
        lede="Texas is economically strong, but too many working families remain financially fragile. Rising costs leave little room to save, and many lack access to traditional credit when emergencies strike."
        image="economic-reality-hero"
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl">
                Work no longer guarantees financial stability
              </h2>
              <p className="mt-5 leading-relaxed text-foreground">
                Millions of Texans are working, paying taxes and supporting
                their families—but still living without a financial safety net.
              </p>
              <PlaceholderImage
                seed="working-texans-stability"
                ratio="16/10"
                label="Texans at work"
                className="mt-8 rounded-lg border border-border"
              />
            </div>
            {/* The document marks this "USE A GRAPHIC". Set as live type so the
                figure stays legible at any width and is machine-readable. */}
            <div className="rounded-lg bg-surface-inverse p-8 lg:p-10">
              <p className="tabular font-heading text-5xl leading-none font-bold text-sky-300 lg:text-6xl">
                4.5 million
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white">
                Texas households — 40% of all households in the state — earned
                less than what was needed to cover basic expenses in 2024.
              </p>
              <p className="mt-4 leading-relaxed text-sky-100">
                This includes families above the federal poverty line who are
                working but still cannot consistently afford housing, food,
                transportation, child care, health care, technology and taxes.
              </p>
              <p className="mt-5 text-sm text-sky-200/80">
                Source: <Cite source={sources.aliceIntro} />
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sunken" aria-labelledby="emergency-heading">
        <Container>
          <h2
            id="emergency-heading"
            className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
          >
            A modest emergency can become a family crisis
          </h2>
          <p className="mt-5 max-w-[68ch] leading-relaxed text-foreground">
            National Federal Reserve data provide a powerful indicator of the
            financial pressures likely affecting Texas families:
          </p>
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {fedFindings.map((item) => (
              <li
                key={item.text}
                className="rounded-lg border border-border bg-card p-7"
              >
                <p className="tabular font-heading text-4xl leading-none font-bold text-primary">
                  {item.stat}
                </p>
                <p className="mt-4 leading-relaxed text-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <SourceNote source={sources.fedShed} />
        </Container>
      </Section>

      <section
        aria-labelledby="pressure-heading"
        className="bg-sky-50 py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                id="pressure-heading"
                className="max-w-[44ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
              >
                Texas Families Face Growing Financial Pressure
              </h2>
              <p className="mt-5 leading-relaxed text-foreground">
                Seven pressures squeezing household budgets. Expand any one for
                the detail and its source.
              </p>
              <PlaceholderImage
                seed="family-budget-pressure"
                ratio="4/3"
                label="Household budget pressure"
                className="mt-8 rounded-lg border border-sky-200"
              />
            </div>

            {/* Collapsed rather than laid out as the document's table: seven
                blocks of long prose in a two-column table is unreadable on a
                phone, and most visitors want one or two of these, not all. */}
            <Accordion className="space-y-2.5">
              {pressures.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  id={item.id}
                  className="rounded-lg border border-sky-200 bg-card px-5"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-primary lg:text-lg">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="max-w-[68ch] space-y-3 pb-5 leading-relaxed text-foreground">
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
      </section>

      <CtaBand
        label="TAKE ACTION"
        body="Texas policymakers should protect regulated, transparent financial options instead of leaving families with fewer, less accountable choices."
      />
    </>
  );
}
