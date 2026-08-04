import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';

export const metadata: Metadata = {
  title: 'About The Issue',
  description:
    'Government price controls, access to credit in an emergency, borrower satisfaction, and the regulation of Texas Credit Access Businesses.',
};

const UPLOADS = 'https://texansforfinancialchoice.com/wp-content/uploads';

const sections = [
  {
    id: 'price-controls',
    title: 'Government Price Controls Are Disastrous For Texas',
    body: 'Government mandated interest rate caps on borrowings have unintended consequences that are disastrous for millions of Texans who need access to credit.',
    pdf: `${UPLOADS}/2022/08/Unintended-Consequences-of-Interest-Rate-Caps-in-Texas-compressed.pdf`,
  },
  {
    id: 'access-to-credit',
    title: 'Texans Deserve Access To Credit In An Emergency',
    body: "According to the FDIC, 34 percent of Texans are underbanked meaning they don't have access to traditional credit services. Worse, according to an FDIC survey, 40 percent of Americans wouldn't be able to handle a $400 financial emergency such as unexpected medical bills, car repairs, etc. Texans have the right to make their own financial choices based on what is right for them and their family.",
    pdf: `${UPLOADS}/2022/07/Overwhelming-Credit-Demand-In-Texas-FINAL-compressed.pdf`,
  },
  {
    id: 'borrower-satisfaction',
    title: 'Borrowers Are Overwhelmingly Satisfied',
    body: 'A vast majority of CAB borrowers carefully weigh the risks and benefits of financial products before making a decision. Borrowers overwhelmingly value the financial products and are satisfied with services.',
    pdf: `${UPLOADS}/2022/07/Borrowers-Value-Services-FINAL-compressed-1.pdf`,
  },
  {
    id: 'regulation',
    title: 'Texas Credit Access Businesses Are Heavily Regulated',
    body: 'Texas Credit Access Businesses (CABs) are heavily regulated by more than 26 Federal and State Laws. The 2019 Texas Sunset Commission reviewed and reapproved the consumer credit chapters in the finance code. The recommendations were signed into law by Governor Abbott in 2019.',
    pdf: `${UPLOADS}/2022/07/TFC-Heavy-Regulation-v2-compressed.pdf`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Issue"
        title="The Case For Financial Choice"
        lede="Four things the debate over short-term credit in Texas consistently gets wrong — and the research behind each."
      />

      <Section>
        <Container>
          <ol className="space-y-16 lg:space-y-24">
            {sections.map((section, index) => (
              <li
                key={section.id}
                id={section.id}
                className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[auto_1fr] lg:gap-14"
              >
                {/* The numeral does the pacing work: it turns four similar
                    blocks into a sequence you can track your place in. */}
                <span
                  aria-hidden="true"
                  className="tabular font-heading text-5xl leading-none font-bold text-sky-300 lg:text-6xl"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="max-w-[24ch] font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-foreground">
                    {section.body}
                  </p>
                  <Button
                    render={
                      <a
                        href={section.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    nativeButton={false}
                    variant="outline"
                    className="mt-7"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    LEARN MORE
                    <span className="sr-only">
                      {' '}
                      — {section.title} (PDF, opens in a new tab)
                    </span>
                  </Button>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        label="TAKE ACTION"
        body="Texans are smart enough to make their own financial decisions without government intervention."
      />
    </>
  );
}
