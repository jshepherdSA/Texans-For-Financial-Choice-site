import type { Metadata } from 'next';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { Cite, SourceNote } from '@/components/cite';
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
    title: 'Housing has become less affordable',
    body: 'Texas home prices rose approximately 40% between 2019 and 2023. In some smaller metropolitan areas, increases were substantially higher. Higher prices, mortgage rates, property taxes and maintenance costs all make it harder for families to purchase—and remain in—a home.',
    source: sources.comptrollerHousing,
  },
  {
    title: 'Homeowners insurance is consuming more of the family budget',
    body: 'For homeowners, the financial emergency is not always the storm—it may be the deductible and repair bills that come afterward. The average Texas homeowners insurance premium increased 33% between 2015 and 2022, including increases of 6.9% in 2021 and 11.8% in 2022. Rising deductibles also mean that families may need thousands of dollars immediately after a storm or household loss.',
    source: sources.comptrollerHousingReport,
  },
  {
    title: 'Texas families face unusually high health-care exposure',
    body: 'A medical emergency should not become a financial emergency, but in Texas it does. According to the US Census Bureau, Texas had the highest uninsured rate in 2024.',
  },
  {
    title: 'Even insured families are struggling with medical costs',
    body: 'Having insurance does not necessarily mean a family can afford to use it. A 2026 Texas survey found that 63% of Texans had delayed or skipped care because of cost.',
    source: sources.texas2036,
  },
  {
    title: 'Transportation is an unavoidable expense',
    body: 'In much of Texas, a broken car is not an inconvenience—it can mean a lost paycheck, lost job, missed medical appointment, or missed school. Texas’s size and development patterns make a dependable vehicle essential for many households.',
  },
  {
    title: 'Food insecurity remains elevated',
    body: 'When groceries consume more of every paycheck, families have less money to save—and less protection when something goes wrong.',
  },
  {
    title: 'Child care can rival housing costs',
    body: 'For working parents, child care is not discretionary; it is what allows them to remain employed. Infant care, after-school care and summer care can consume a large portion of take-home pay, while many Texas communities also lack enough affordable child-care capacity.',
  },
];

export default function EconomicRealityPage() {
  return (
    <>
      <PageHero
        eyebrow="The Economic Reality"
        title="The Economic Reality For Working Texans"
        lede="Texas is economically strong, but too many working families remain financially fragile. Rising costs leave little room to save, and many lack access to traditional credit when emergencies strike. Texas policymakers should protect regulated, transparent financial options instead of leaving families with fewer, less accountable choices."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="max-w-[20ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl">
                Work no longer guarantees financial stability
              </h2>
              <p className="mt-5 leading-relaxed text-foreground">
                Millions of Texans are working, paying taxes and supporting
                their families—but still living without a financial safety net.
              </p>
            </div>
            {/* The document marks this "USE A GRAPHIC". Set as live type so the
                figure stays legible at any width and is machine-readable. */}
            <div className="rounded-lg border border-border bg-surface-sunken p-8 lg:p-10">
              <p className="tabular font-heading text-5xl leading-none font-bold text-primary lg:text-6xl">
                4.5 million
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                Texas households — 40% of all households in the state — earned
                less than what was needed to cover basic expenses in 2024.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This includes families above the federal poverty line who are
                working but still cannot consistently afford housing, food,
                transportation, child care, health care, technology and taxes.
              </p>
              <SourceNote source={sources.aliceIntro} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sunken" aria-labelledby="emergency-heading">
        <Container>
          <h2
            id="emergency-heading"
            className="max-w-[26ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
          >
            A modest emergency can become a family crisis
          </h2>
          <p className="mt-5 max-w-[65ch] leading-relaxed text-foreground">
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
          <p className="mt-6 text-sm text-muted-foreground">
            Source: <Cite source={sources.fedShed} />
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="pressure-heading">
        <Container>
          <h2
            id="pressure-heading"
            className="max-w-[24ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl"
          >
            Texas Families Face Growing Financial Pressure
          </h2>

          {/* Seven pressures as a definition list rather than the document's
              table: at mobile widths a two-column table of long prose becomes
              unreadable, and the relationship here is label-to-explanation,
              which is what <dl> encodes. */}
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {pressures.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 py-8 lg:grid-cols-[20rem_1fr] lg:gap-12"
              >
                <dt className="font-heading text-lg leading-snug font-bold text-primary">
                  {item.title}
                </dt>
                <dd className="max-w-[65ch] leading-relaxed text-foreground">
                  {item.body}
                  {item.source ? (
                    <span className="mt-3 block">
                      <Cite source={item.source} />
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <CtaBand
        label="TAKE ACTION"
        body="Texas policymakers should protect regulated, transparent financial options instead of leaving families with fewer, less accountable choices."
      />
    </>
  );
}
