import type { Metadata } from 'next';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { FactSheetCard } from '@/components/fact-sheet-card';
import { factSheets } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Legislator Resources',
  description:
    'A downloadable library of fact sheets on short-term borrowing in Texas, for elected officials and legislative staff.',
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Legislator Resources"
        lede="As an elected official or a member of a legislative team, we understand how difficult it can be to get up to speed on multiple issues during a compact legislative session. Below is a library of resources that can be downloaded and shared to help you understand the facts about short-term borrowing in Texas."
      />

      <Section>
        <Container>
          <h2 className="text-eyebrow text-sky-700 uppercase">
            {factSheets.length} Fact Sheets
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {factSheets.map((sheet, index) => (
              <li key={sheet.file} className="h-full">
                {/* The grid sits directly under the hero, so the first row is
                    above the fold — eager-load it, lazy-load the rest. */}
                <FactSheetCard sheet={sheet} priority={index < 4} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
