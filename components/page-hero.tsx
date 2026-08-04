import type { ReactNode } from 'react';
import { Container } from '@/components/layout-primitives';

/**
 * Inner-page opening band.
 *
 * Deliberately navy where the homepage hero is white: it gives every secondary
 * page a firm start, and the tonal switch tells you at a glance that you've
 * left the homepage. Keeping it identical across all six also means the pages
 * differ where it matters — in how their *body* is composed — rather than in
 * their chrome.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-surface-inverse">
      <Container>
        <div className="py-16 lg:py-24">
          <p className="text-eyebrow text-sky-300 uppercase">{eyebrow}</p>
          <h1 className="mt-4 max-w-[20ch] font-heading text-4xl leading-[1.1] font-bold text-white lg:text-5xl">
            {title}
          </h1>
          {lede ? (
            <div className="mt-6 max-w-[62ch] text-lg leading-relaxed text-sky-100">
              {lede}
            </div>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
