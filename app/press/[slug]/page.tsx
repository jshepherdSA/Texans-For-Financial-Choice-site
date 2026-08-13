import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Container, Section } from '@/components/layout-primitives';
import { CtaBand } from '@/components/cta-band';
import { articles } from '@/lib/articles';
import { formatPressDate, pressItems } from '@/lib/press';

type Params = { slug: string };

/** Every article is known at build time, so all 50 prerender as static pages. */
export function generateStaticParams(): Params[] {
  return pressItems.map((item) => ({ slug: item.slug }));
}

function lookup(slug: string) {
  const item = pressItems.find((p) => p.slug === slug);
  const article = articles[slug];
  return item && article ? { item, article } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = lookup(slug);
  if (!found) return {};
  const { item, article } = found;
  const excerpt = article.paragraphs[0]
    ?.map((s) => s.text)
    .join(' ')
    .slice(0, 155);
  return {
    title: item.title,
    description: excerpt,
    openGraph: {
      title: item.title,
      description: excerpt,
      type: 'article',
      images: item.image ? [item.image] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const found = lookup(slug);
  if (!found) notFound();
  const { item, article } = found;

  const related = pressItems.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-border bg-surface-sunken">
          <Container>
            <div className="max-w-[70ch] py-14 lg:py-20">
              <Link
                href="/press"
                className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-sky-700 transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All press articles
              </Link>
              <p className="tabular text-eyebrow mt-8 text-sky-700 uppercase">
                {formatPressDate(item)}
              </p>
              <h1 className="mt-3 font-heading text-3xl leading-[1.15] font-bold text-primary lg:text-4xl">
                {item.title}
              </h1>
              {article.source ? (
                <p className="mt-5 text-sm text-muted-foreground">
                  Originally published
                  {article.source.name ? ` by ${article.source.name}` : ''}
                  {article.source.href ? (
                    <>
                      {' — '}
                      <a
                        href={article.source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-1 rounded-sm text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        read the original
                        <ArrowUpRight
                          className="size-3 self-center"
                          aria-hidden="true"
                        />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    </>
                  ) : null}
                </p>
              ) : null}
            </div>
          </Container>
        </header>

        {item.image ? (
          <Container>
            <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-lg border border-border bg-muted lg:mt-14">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 1200px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </Container>
        ) : null}

        <Section>
          <Container>
            {/* 70ch measure — this is long-form reading, not a marketing page. */}
            <div className="max-w-[70ch] space-y-6 text-lg leading-relaxed text-foreground">
              {article.paragraphs.map((para, i) => (
                <p key={i}>
                  {para.map((seg, j) =>
                    seg.href ? (
                      <a
                        key={j}
                        href={seg.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-sm text-sky-700 underline decoration-sky-300 underline-offset-2 transition-colors hover:text-primary hover:decoration-navy-400 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {seg.text}
                      </a>
                    ) : (
                      <span key={j}>{seg.text}</span>
                    )
                  )}
                </p>
              ))}
            </div>

            {article.source?.href ? (
              <div className="mt-12 max-w-[70ch] rounded-lg border border-border bg-surface-sunken p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This article was originally published
                  {article.source.name ? ` by ${article.source.name}` : ''} and
                  is reproduced here for reference.{' '}
                  <a
                    href={article.source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline gap-1 rounded-sm font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    View the original
                    <ArrowUpRight
                      className="size-3 self-center"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </p>
              </div>
            ) : null}
          </Container>
        </Section>
      </article>

      <Section tone="sunken" aria-labelledby="related-heading">
        <Container>
          <h2
            id="related-heading"
            className="font-heading text-2xl leading-tight font-bold text-primary"
          >
            More press
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/press/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-navy-300 hover:bg-sky-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span className="tabular text-xs font-semibold tracking-wide text-sky-700 uppercase">
                    {formatPressDate(p)}
                  </span>
                  <span className="mt-2 text-base leading-snug font-medium text-pretty text-foreground group-hover:text-primary">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand image="/images/texas-rural-barn-flag.jpg" />
    </>
  );
}
