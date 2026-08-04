import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { formatPressDate, pressByYear, pressItems } from '@/lib/press';

export const metadata: Metadata = {
  title: 'Press',
  description:
    'Relevant press articles on short-term lending, interest rate caps, and access to credit.',
};

export default function PressPage() {
  const grouped = pressByYear();

  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Keep Up To Date On The Latest News Affecting Financial Choice"
      />

      <Section>
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-heading text-2xl leading-tight font-bold text-primary lg:text-3xl">
              Relevant Press Articles
            </h2>
            <p className="tabular text-sm text-muted-foreground">
              {pressItems.length} articles
            </p>
          </div>

          {/* Grouped by year with a sticky year marker. A flat list of 50
              undated-looking links gives you nothing to navigate by; the year
              rail turns it into an archive you can scan.
              `content-visibility` lets the browser skip offscreen years
              instead of pulling in a virtualization dependency, which would
              cost middle-click, in-page find, and crawlability. */}
          <div className="mt-12 space-y-16">
            {grouped.map((group) => (
              <section
                key={group.year}
                aria-labelledby={`year-${group.year}`}
                className="grid gap-6 lg:grid-cols-[8rem_1fr] lg:gap-10 [content-visibility:auto] [contain-intrinsic-size:auto_600px]"
              >
                <h3
                  id={`year-${group.year}`}
                  className="tabular font-heading text-3xl leading-none font-bold text-sky-300 lg:sticky lg:top-32 lg:self-start lg:text-4xl"
                >
                  {group.year}
                </h3>
                <ul className="border-t border-border">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-6 border-b border-border py-5 transition-colors hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <span className="min-w-0">
                          <span className="tabular block text-xs font-semibold tracking-wide text-sky-700 uppercase">
                            {formatPressDate(item)}
                          </span>
                          <span className="mt-1.5 block text-lg leading-snug font-medium text-pretty text-foreground group-hover:text-primary">
                            {item.title}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="mt-6 size-5 shrink-0 text-ink-400 transition-colors group-hover:text-primary"
                          aria-hidden="true"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
