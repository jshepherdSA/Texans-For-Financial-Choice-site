import { Container } from '@/components/layout-primitives';
import { headlineStats } from '@/lib/site';

/**
 * Data-forward band. The organization argues from sourced figures, so the
 * attribution renders alongside the number rather than being dropped — see
 * teardown.md, "Voice & tone". Replaces the legacy site's rasterized stats
 * image, which was unreadable on mobile and invisible to screen readers.
 */
export function StatBand() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-surface-inverse py-16 lg:py-20"
    >
      <Container>
        <h2 id="stats-heading" className="sr-only">
          Key figures
        </h2>
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {headlineStats.map((stat) => (
            <div
              key={stat.value}
              className="border-t border-sky-200/25 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                {/* Reserved height keeps every label on the same baseline
                    even when a figure wraps to two lines. */}
                <p className="tabular font-heading text-4xl leading-none font-bold text-balance text-sky-300 lg:min-h-24 lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-sky-100">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-sky-200/70">
                  Source: {stat.source}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
