import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/layout-primitives';
import { PageHero } from '@/components/page-hero';
import { CtaBand } from '@/components/cta-band';
import { PlaceholderImage } from '@/components/placeholder-image';
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
        backgroundPhoto={{ src: '/images/texas-state-capitol.jpg', alt: '' }}
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

          {/* Tiles rather than list rows so each item carries artwork. Grouped
              by year with a sticky marker — 50 undifferentiated cards give you
              nothing to navigate by. `content-visibility` lets the browser skip
              offscreen years without a virtualization dependency, which would
              cost middle-click, in-page find, and crawlability. */}
          <div className="mt-12 space-y-16">
            {grouped.map((group) => (
              <section
                key={group.year}
                aria-labelledby={`year-${group.year}`}
                className="[content-visibility:auto] [contain-intrinsic-size:auto_900px]"
              >
                <div className="flex items-center gap-5">
                  <h3
                    id={`year-${group.year}`}
                    className="tabular font-heading text-2xl leading-none font-bold text-primary lg:text-3xl"
                  >
                    {group.year}
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                  <span className="tabular text-sm text-muted-foreground">
                    {group.items.length}
                  </span>
                </div>

                <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, i) => (
                    <li key={item.href} className="h-full">
                      {/* Internal now: each article is republished at
                          /press/<slug> instead of bouncing to the legacy
                          WordPress site. */}
                      <Link
                        href={`/press/${item.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-navy-300 hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                      >
                        {/* The article's own featured image, carried over from
                            the legacy Press page. Decorative — the headline
                            beneath already names the article — so alt="".
                            Falls back to brand artwork if an image is ever
                            missing rather than leaving a broken tile. */}
                        {item.image ? (
                          <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                          </div>
                        ) : (
                          <PlaceholderImage
                            seed={item.title}
                            tone={(i % 4) as 0 | 1 | 2 | 3}
                            ratio="16/9"
                            className="border-b border-border"
                          />
                        )}
                        <div className="flex flex-1 flex-col p-5">
                          <span className="tabular text-xs font-semibold tracking-wide text-sky-700 uppercase">
                            {formatPressDate(item)}
                          </span>
                          <span className="mt-2 block text-base leading-snug font-medium text-pretty text-foreground group-hover:text-primary">
                            {item.title}
                          </span>
                          <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-sky-700 group-hover:text-primary">
                            Read article
                            <ArrowRight
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand image="/images/texas-rural-barn-flag.jpg" />
    </>
  );
}
